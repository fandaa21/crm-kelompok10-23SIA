import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { MessageSquare, Download } from "lucide-react";
import { CSVLink } from "react-csv";
import { supabase } from "../supabase";

const StarRating = ({ rating }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <FaStar key={i} color={i < rating ? "#f59e0b" : "#e5e7eb"} />
        ))}
    </div>
);

export default function FeedbackManagement() {
    const [reviews, setReviews] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null);
    const [responseText, setResponseText] = useState("");

    useEffect(() => {
        const fetchFeedback = async () => {
            const { data, error } = await supabase
                .from("feedback")
                .select("*")
                .order("date", { ascending: false });

            if (error) {
                console.error("Error fetching feedback:", error);
            } else {
                setReviews(data);
            }
        };

        fetchFeedback();
    }, []);

    const handleOpenModal = (review) => {
        setSelectedReview(review);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedReview(null);
        setResponseText("");
    };

    const handleResponseSubmit = (e) => {
        e.preventDefault();
        if (!responseText) return;
        alert(`Tanggapan untuk ${selectedReview.name} terkirim:\n"${responseText}"`);
        handleCloseModal();
    };

    const csvHeaders = [
        { label: "ID", key: "id" },
        { label: "Name", key: "name" },
        { label: "Email", key: "email" },
        { label: "Rating", key: "rating" },
        { label: "Comment", key: "comment" },
        { label: "Date", key: "date" },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <MessageSquare size={24} className="text-gray-600" />
                    <span>Customers Feedback</span>
                </h1>
                <CSVLink
                    data={reviews}
                    headers={csvHeaders}
                    filename="customer_feedback.csv"
                    className="flex items-center gap-2 px-4 py-2 text-sm border rounded-lg hover:bg-gray-100"
                >
                    <Download size={16} className="text-gray-600" />
                    <span>Export CSV</span>
                </CSVLink>
            </div>

            <div className="bg-white rounded-lg">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50/70 text-gray-500 uppercase text-xs border-b">
                            <tr>
                                <th className="px-6 py-4 font-medium">Guest</th>
                                <th className="px-6 py-4 font-medium">Rating</th>
                                <th className="px-6 py-4 font-medium">Comment</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800">
                            {reviews.map((review) => (
                                <tr key={review.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-semibold">{review.name}</td>
                                    <td className="px-6 py-4"><StarRating rating={review.rating} /></td>
                                    <td className="px-6 py-4 text-gray-600 max-w-sm truncate">{review.comment}</td>
                                    <td className="px-6 py-4 text-gray-600">{review.date}</td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => handleOpenModal(review)} className="font-medium text-blue-600 hover:text-blue-700">
                                            Tanggapi
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {showModal && selectedReview && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-xl w-full max-w-lg shadow-2xl">
                        <h2 className="text-lg font-bold text-gray-800">Beri Tanggapan</h2>
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
                            <p className="font-semibold">{selectedReview.name}</p>
                            <p className="text-sm text-gray-600 mt-1 italic">"{selectedReview.comment}"</p>
                            <div className="mt-2"><StarRating rating={selectedReview.rating} /></div>
                        </div>
                        <form onSubmit={handleResponseSubmit} className="mt-4 space-y-4">
                            <div>
                                <label htmlFor="response" className="block text-sm font-medium mb-1 text-gray-700">Tanggapan Anda:</label>
                                <textarea
                                    id="response"
                                    value={responseText}
                                    onChange={(e) => setResponseText(e.target.value)}
                                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="4"
                                    placeholder="Tulis tanggapan Anda di sini..."
                                    required
                                />
                            </div>
                            <div className="flex justify-end gap-3">
                                <button type="button" onClick={handleCloseModal} className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100">Batal</button>
                                <button type="submit" className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700">Kirim Tanggapan</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
