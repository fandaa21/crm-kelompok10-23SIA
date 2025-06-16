import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { CSVLink } from "react-csv";

export default function FeedbackKomplain() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      rating: 4,
      comment: "Kamar sangat nyaman, namun kebersihannya kurang.",
      category: "Kebersihan",
      date: "2023-06-01",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 5,
      comment: "Pelayanan luar biasa, saya merasa sangat dihargai!",
      category: "Layanan",
      date: "2023-06-02",
    },
    {
      id: 3,
      name: "Alice Brown",
      rating: 3,
      comment: "Fasilitas oke, tetapi AC-nya kurang dingin.",
      category: "Fasilitas",
      date: "2023-06-03",
    },
  ]);

  const [response, setResponse] = useState("");
  const [category, setCategory] = useState("");
  const [comment, setComment] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Tanggapan terkirim: ${response}`);
    setResponse("");
  };

  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar key={i} color={i < rating ? "#f59e0b" : "#d1d5db"} />
      );
    }
    return stars;
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-semibold mb-6 text-center text-amber-700">Feedback & Komplain</h1>

      {/* Daftar Ulasan Tamu */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-amber-700">Daftar Ulasan Tamu</h2>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <p className="font-semibold text-lg">{review.name}</p>
              <div className="flex items-center space-x-2 mb-2">
                {generateStars(review.rating)}
              </div>
              <p className="text-gray-700">{review.comment}</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-sm text-gray-500">{review.date}</span>
                <span className="text-sm font-medium text-gray-600">{review.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Formulir Tanggapan / Tindakan */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-amber-700">Formulir Tanggapan / Tindakan</h2>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <label htmlFor="response" className="block font-medium mb-2">Tanggapan:</label>
            <textarea
              id="response"
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              className="w-full p-4 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              rows="4"
              placeholder="Tulis tanggapan Anda disini..."
              required
            />
          </div>

          <div>
            <label htmlFor="category" className="block font-medium mb-2">Kategori Keluhan:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-4 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            >
              <option value="">Pilih Kategori</option>
              <option value="Kebersihan">Kebersihan</option>
              <option value="Layanan">Layanan</option>
              <option value="Fasilitas">Fasilitas</option>
            </select>
          </div>

          <div>
            <label htmlFor="comment" className="block font-medium mb-2">Komentar:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-4 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              rows="4"
              placeholder="Masukkan komentar Anda disini..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-all duration-200"
          >
            Kirim Tanggapan
          </button>
        </form>
      </div>

      {/* Export CSV */}
      <div className="text-center">
        <CSVLink
          data={reviews}
          filename="feedback_komplain.csv"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-200"
        >
          Export to CSV
        </CSVLink>
      </div>
    </div>
  );
}
