import React, { useEffect, useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
    Title,
} from 'chart.js';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title);

const LoyaltyPredictionDashboard = () => {
    // State untuk data analisis keseluruhan
    const [analysisData, setAnalysisData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // State untuk data visualisasi (charts)
    const [loyaltyChartData, setLoyaltyChartData] = useState(null);
    const [clusterChartData, setClusterChartData] = useState(null);

    // --- State untuk Prediksi Tunggal ---
    const [formInput, setFormInput] = useState({
        total_durasi_menginap: '',
        total_pembelian: '',
        total_layanan_tambahan: '',
        frekuensi_kunjungan: ''
    });
    const [predictionResult, setPredictionResult] = useState(null);
    const [predicting, setPredicting] = useState(false);
    // State baru untuk chart probabilitas
    const [probabilityChartData, setProbabilityChartData] = useState(null);


    // !!! URL Ngrok BARU Anda sudah dimasukkan di sini !!!
    const NGROK_BASE_URL = "https://1803032c6846.ngrok-free.app"; // <-- URL BARU ANDA
    const API_URL_ALL = `${NGROK_BASE_URL}/api/all_predictions`;
    const API_URL_SINGLE = `${NGROK_BASE_URL}/api/predict`;

    // Fungsi untuk memproses data dan membuat data untuk chart KESELURUHAN
    const processOverallCharts = (data) => {
        if (!data || data.length === 0) return;
        const loyalCount = data.filter(r => r.predicted_loyal === 'Loyal').length;
        const notLoyalCount = data.length - loyalCount;
        setLoyaltyChartData({
            labels: ['Prediksi Loyal', 'Prediksi Tidak Loyal'],
            datasets: [{ data: [loyalCount, notLoyalCount], backgroundColor: ['#10b981', '#f43f5e'], borderColor: '#ffffff', borderWidth: 2 }],
        });

        const clusterCounts = data.reduce((acc, r) => {
            const clusterKey = `Cluster ${r.predicted_cluster}`;
            acc[clusterKey] = (acc[clusterKey] || 0) + 1;
            return acc;
        }, {});
        const sortedClusters = Object.keys(clusterCounts).sort();
        setClusterChartData({
            labels: sortedClusters,
            datasets: [{ label: 'Jumlah Pelanggan (Prediksi)', data: sortedClusters.map(key => clusterCounts[key]), backgroundColor: 'rgba(59, 130, 246, 0.7)' }],
        });
    };

    // Ambil data analisis keseluruhan saat komponen dimuat
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(API_URL_ALL, { headers: { 'ngrok-skip-browser-warning': 'true' } });
                if (!res.ok) throw new Error(`Server merespons dengan status error ${res.status}.`);
                const result = await res.json();
                if (result.error) throw new Error(result.error);
                setAnalysisData(result);
                processOverallCharts(result);
            } catch (err) {
                setError(`Gagal terhubung ke backend. Pastikan server berjalan dan URL Ngrok benar. (Detail: ${err.message})`);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    
    const handleChange = (e) => {
        setFormInput({ ...formInput, [e.target.name]: e.target.value });
    };

    // Fungsi untuk menangani submit prediksi pelanggan tunggal
    const handlePredictSubmit = async (e) => {
        e.preventDefault();
        setPredicting(true);
        setPredictionResult(null);
        setProbabilityChartData(null); // Reset chart probabilitas

        const payload = {
            total_durasi_menginap: Number(formInput.total_durasi_menginap),
            total_pembelian: Number(formInput.total_pembelian),
            total_layanan_tambahan: Number(formInput.total_layanan_tambahan),
            frekuensi_kunjungan: Number(formInput.frekuensi_kunjungan)
        };

        try {
            const res = await fetch(API_URL_SINGLE, {
                method: "POST",
                headers: { "Content-Type": "application/json", 'ngrok-skip-browser-warning': 'true' },
                body: JSON.stringify(payload),
            });
            const result = await res.json();
            if (!res.ok) throw new Error(result.error || "Gagal melakukan prediksi");
            setPredictionResult(result);

            // Buat data untuk chart probabilitas
            const probLoyal = result.probabilitas_loyal;
            setProbabilityChartData({
                labels: ['Loyal', 'Tidak Loyal'],
                datasets: [{
                    data: [probLoyal, 100 - probLoyal],
                    backgroundColor: ['#10b981', '#f43f5e'],
                    borderColor: '#ffffff',
                    borderWidth: 2,
                }]
            });

        } catch (err) {
            setPredictionResult({ error: err.message });
        } finally {
            setPredicting(false);
        }
    };

    if (loading) return <div className="text-center p-10">Menganalisis data pelanggan, harap tunggu...</div>;
    if (error) return <div className="p-10 text-center text-red-700 font-semibold bg-red-100 border border-red-300 rounded-lg p-6"><pre className="whitespace-pre-wrap">{error}</pre></div>;

    return (
        <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard Prediksi Pelanggan Hotel Aryaduta</h1>
                    <p className="text-gray-600 mt-1">Lakukan simulasi prediksi atau lihat analisis keseluruhan di bawah.</p>
                </header>

                <main className="space-y-8">
                    {/* Bagian Prediksi Tunggal */}
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Simulasi Prediksi Pelanggan</h2>
                        <form onSubmit={handlePredictSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                            <div className="md:col-span-1"><label className="text-sm font-medium text-gray-700">Total Durasi (hari)</label><input type="number" name="total_durasi_menginap" placeholder="e.g., 3" onChange={handleChange} value={formInput.total_durasi_menginap} className="mt-1 w-full border-gray-300 rounded-md shadow-sm" required /></div>
                            <div className="md:col-span-1"><label className="text-sm font-medium text-gray-700">Total Pembelian (Rp)</label><input type="number" name="total_pembelian" placeholder="e.g., 1500000" onChange={handleChange} value={formInput.total_pembelian} className="mt-1 w-full border-gray-300 rounded-md shadow-sm" required /></div>
                            <div className="md:col-span-1"><label className="text-sm font-medium text-gray-700">Layanan Tambahan (Rp)</label><input type="number" name="total_layanan_tambahan" placeholder="e.g., 100000" onChange={handleChange} value={formInput.total_layanan_tambahan} className="mt-1 w-full border-gray-300 rounded-md shadow-sm" required /></div>
                            <div className="md:col-span-1"><label className="text-sm font-medium text-gray-700">Frekuensi</label><input type="number" name="frekuensi_kunjungan" placeholder="e.g., 1" onChange={handleChange} value={formInput.frekuensi_kunjungan} className="mt-1 w-full border-gray-300 rounded-md shadow-sm" required /></div>
                            <div className="md:col-span-1"><button type="submit" disabled={predicting} className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition-colors">{predicting ? '...' : 'Prediksi'}</button></div>
                        </form>
                    </div>

                    {/* Bagian Hasil Prediksi & Chart Probabilitas */}
                    {predictionResult && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className={`p-6 rounded-xl shadow-lg ${predictionResult.error ? 'bg-red-50' : 'bg-green-50'}`}>
                                <h3 className="text-xl font-semibold mb-3">{predictionResult.error ? 'Error' : `Hasil Prediksi`}</h3>
                                {predictionResult.error ? <p className="text-red-700">{predictionResult.error}</p> : (
                                    <div className="space-y-3 text-gray-800">
                                        <p><strong>Status Loyalitas:</strong> <span className={`font-bold text-lg ${predictionResult.prediksi_loyalitas === 'Loyal' ? 'text-green-600' : 'text-red-600'}`}>{predictionResult.prediksi_loyalitas}</span></p>
                                        <p><strong>Probabilitas Loyal:</strong> <span className="font-bold text-lg text-blue-600">{predictionResult.probabilitas_loyal}%</span></p>
                                        <p><strong>Prediksi Kunjungan Ulang:</strong> <span className={`font-bold ${predictionResult.prediksi_repeat === 'Yes' ? 'text-green-600' : 'text-red-600'}`}>{predictionResult.prediksi_repeat === 'Yes' ? 'Ya' : 'Tidak'}</span></p>
                                        <p><strong>Prediksi Segmen:</strong> <span className="font-bold text-blue-600">Cluster {predictionResult.prediksi_cluster}</span></p>
                                        <div className="pt-2">
                                            <p className="font-semibold">Saran:</p>
                                            <p className="text-sm italic">{predictionResult.saran}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {probabilityChartData && (
                                 <div className="bg-white p-6 rounded-xl shadow-lg">
                                    <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">Grafik Probabilitas Loyalitas</h2>
                                    <div className="h-48 mx-auto" style={{maxWidth: '200px'}}>
                                        <Pie data={probabilityChartData} options={{ maintainAspectRatio: false, plugins: { legend: { position: 'top' } } }} />
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    
                    <hr/>

                    {/* Bagian Analisis Keseluruhan */}
                    <h2 className="text-2xl font-bold text-gray-800 pt-4">Analisis Keseluruhan Pelanggan</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {loyaltyChartData && <div className="bg-white p-6 rounded-xl shadow-lg"><h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">Distribusi Prediksi Loyalitas</h2><div className="h-72 mx-auto" style={{maxWidth: '280px'}}><Pie data={loyaltyChartData} options={{ maintainAspectRatio: false, plugins: { legend: { position: 'top' } } }} /></div></div>}
                        {clusterChartData && <div className="bg-white p-6 rounded-xl shadow-lg"><h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">Distribusi Prediksi Segmen</h2><div className="h-72"><Bar data={clusterChartData} options={{ maintainAspectRatio: false, plugins: { legend: { display: false } } }} /></div></div>}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default LoyaltyPredictionDashboard;
