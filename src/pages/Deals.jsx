import React, { useState, useMemo, useEffect, useRef } from 'react';

// --- DATA & KONFIGURASI AWAL ---
const initialDealsData = [
  { id: 1, name: 'Paket Menginap Akhir Pekan', description: 'Diskon 20% untuk pemesanan 2 malam (Jumat-Minggu).', category: 'Paket Liburan', status: 'Active' },
  { id: 2, name: 'Diskon Pemesanan Awal', description: 'Dapatkan diskon 15% untuk pemesanan 30 hari sebelumnya.', category: 'Diskon Kamar', status: 'Active' },
  { id: 3, name: 'Penawaran Keluarga', description: 'Gratis sarapan untuk 2 anak di bawah 12 tahun.', category: 'Paket Liburan', status: 'Expired' },
  { id: 4, name: 'Spesial Hari Kerja', description: 'Harga khusus untuk menginap di hari Senin-Kamis.', category: 'Penawaran Spesial', status: 'Active' },
  { id: 5, name: 'Paket Honeymoon', description: 'Termasuk dekorasi kamar, makan malam romantis, dan spa.', category: 'Paket Liburan', status: 'Active' },
  { id: 6, name: 'Diskon Long Stay', description: 'Diskon 25% untuk menginap lebih dari 7 malam.', category: 'Diskon Kamar', status: 'Expired' },
];
const CATEGORY_FILTERS = ['All Deals', 'Paket Liburan', 'Diskon Kamar', 'Penawaran Spesial'];

// --- KOMPONEN KECIL & IKON ---
const StatusBadge = ({ status }) => (
    <span className={`px-3 py-1 rounded-full text-xs font-medium inline-block ${status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-700'}`}>
        {status}
    </span>
);

const Icon = ({ type }) => {
    const icons = {
        plus: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>,
        close: <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>,
        search: <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>,
        trash: <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
    };
    return icons[type] || null;
};

// --- KOMPONEN MODAL ---
const AddDealModal = ({ isOpen, onClose, onAddDeal }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Paket Liburan');
    const [error, setError] = useState('');
    const nameInputRef = useRef(null);

    // Efek untuk reset state dan fokus input
    useEffect(() => {
        if (isOpen) {
            // Reset state saat modal dibuka
            setName('');
            setDescription('');
            setCategory('Paket Liburan');
            setError('');
            // Fokus ke input pertama
            setTimeout(() => nameInputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !description.trim()) {
            setError('Nama dan Deskripsi tidak boleh kosong.');
            return;
        }
        onAddDeal({ id: Date.now(), name, description, category, status: 'Active' });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"><div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg m-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Tambah Penawaran Baru</h2>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-700"><Icon type="close" /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md text-sm">{error}</div>}
                <input ref={nameInputRef} type="text" placeholder="Nama Penawaran" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-stone-500 focus:border-stone-500" />
                <textarea placeholder="Deskripsi" value={description} onChange={(e) => setDescription(e.target.value)} rows="3" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-stone-500 focus:border-stone-500" />
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-stone-500 focus:border-stone-500">
                    {CATEGORY_FILTERS.slice(1).map(cat => <option key={cat}>{cat}</option>)}
                </select>
                <div className="flex justify-end gap-3 pt-2">
                    <button type="button" onClick={onClose} className="px-4 py-2 border rounded-md text-sm font-medium">Batal</button>
                    <button type="submit" className="px-4 py-2 rounded-md text-sm font-medium text-white bg-stone-600 hover:bg-stone-700">Simpan</button>
                </div>
            </form>
        </div></div>
    );
};

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, dealName }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"><div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm m-4">
            <h2 className="text-lg font-bold text-gray-800">Konfirmasi Hapus</h2>
            <p className="mt-2 text-sm text-gray-600">Anda yakin ingin menghapus: <span className="font-semibold">{dealName}</span>?</p>
            <div className="mt-6 flex justify-end gap-3">
                <button onClick={onClose} className="px-4 py-2 border rounded-md text-sm">Batal</button>
                <button onClick={onConfirm} className="px-4 py-2 rounded-md text-sm text-white bg-red-600 hover:bg-red-700">Hapus</button>
            </div>
        </div></div>
    );
};

// --- KOMPONEN UTAMA ---
export default function App() {
    const [deals, setDeals] = useState(initialDealsData);
    const [activeCategory, setActiveCategory] = useState('All Deals');
    const [searchTerm, setSearchTerm] = useState('');
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [dealToDelete, setDealToDelete] = useState(null);

    const filteredDeals = useMemo(() =>
        deals.filter(deal => 
            (activeCategory === 'All Deals' || deal.category === activeCategory) &&
            deal.name.toLowerCase().includes(searchTerm.toLowerCase())
        ), [deals, activeCategory, searchTerm]);

    const handleConfirmDelete = () => {
        setDeals(deals.filter(d => d.id !== dealToDelete.id));
        setDealToDelete(null);
    };

    return (
        <div className="bg-slate-50 p-4 sm:p-6 lg:p-8 min-h-screen font-sans">
            <div className="max-w-7xl mx-auto">
                <AddDealModal 
                    isOpen={isAddModalOpen} 
                    onClose={() => setAddModalOpen(false)} 
                    onAddDeal={(newDeal) => setDeals([newDeal, ...deals])} 
                />
                <ConfirmDeleteModal 
                    isOpen={!!dealToDelete} 
                    onClose={() => setDealToDelete(null)} 
                    onConfirm={handleConfirmDelete}
                    dealName={dealToDelete?.name}
                />

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <h1 className="text-2xl font-bold text-gray-800">Penawaran & Diskon</h1>
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <div className="relative w-full md:w-64">
                            <input type="text" placeholder="Cari penawaran..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-stone-500" />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"><Icon type="search" /></div>
                        </div>
                        <button onClick={() => setAddModalOpen(true)} className="flex-shrink-0 flex items-center gap-2 bg-stone-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-stone-700">
                            <Icon type="plus" /><span className="hidden sm:inline">Tambah Baru</span>
                        </button>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {CATEGORY_FILTERS.map(filter => (
                        <button key={filter} onClick={() => setActiveCategory(filter)} className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${activeCategory === filter ? 'bg-stone-600 text-white shadow' : 'bg-white border text-gray-700 hover:bg-gray-100'}`}>
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Tabel */}
                <div className="bg-white rounded-lg shadow-sm border overflow-x-auto">
                    <table className="min-w-full divide-y">
                        <thead className="bg-gray-50"><tr>
                            {['Nama Penawaran', 'Deskripsi', 'Kategori', 'Status', 'Aksi'].map(h => <th key={h} className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">{h}</th>)}
                        </tr></thead>
                        <tbody className="bg-white divide-y">
                            {filteredDeals.length > 0 ? filteredDeals.map(deal => (
                                <tr key={deal.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-800">{deal.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600 max-w-md">{deal.description}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{deal.category}</td>
                                    <td className="px-6 py-4 text-sm"><StatusBadge status={deal.status} /></td>
                                    <td className="px-6 py-4 text-sm">
                                        <button onClick={() => setDealToDelete(deal)} className="flex items-center gap-1.5 text-red-600 hover:text-red-800 text-sm border border-red-200 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md">
                                            <Icon type="trash" /><span>Hapus</span>
                                        </button>
                                    </td>
                                </tr>
                            )) : (
                                <tr><td colSpan="5" className="text-center py-10 text-gray-500">Tidak ada penawaran yang ditemukan.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
