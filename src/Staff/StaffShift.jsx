import React, { useState } from "react";
import { FaUserTie, FaCalendarAlt } from "react-icons/fa";

export default function StaffShift() {
  const [staffList, setStaffList] = useState([
    { id: 1, name: "Andi", position: "Front Office", shift: "Pagi (07.00 - 15.00)" },
    { id: 2, name: "Sari", position: "Housekeeping", shift: "Siang (13.00 - 21.00)" },
    { id: 3, name: "Budi", position: "Security", shift: "Malam (21.00 - 07.00)" },
  ]);
  const [modal, setModal] = useState(""); // "add" | "shift" | ""

  const [form, setForm] = useState({
    name: "", position: "", shiftName: "", newShift: ""
  });

  const closeModal = () => setModal("");
  const handleInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const addStaff = () => {
    if (!form.name || !form.position) return alert("Lengkapi data");
    setStaffList([...staffList, {
      id: staffList.length + 1,
      name: form.name,
      position: form.position,
      shift: "-"
    }]);
    setForm({ ...form, name: "", position: "" });
    closeModal();
  };

  const updateShift = () => {
    const updated = staffList.map((s) =>
      s.name.toLowerCase() === form.shiftName.toLowerCase()
        ? { ...s, shift: form.newShift }
        : s
    );
    setStaffList(updated);
    setForm({ ...form, shiftName: "", newShift: "" });
    closeModal();
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-800">
        <FaUserTie className="text-amber-700" /> Manajemen Staff & Shift
      </h2>

      <p className="text-gray-600">Atur jadwal kerja setiap staf agar operasional berjalan lancar.</p>

      <table className="w-full bg-white rounded shadow text-left">
        <thead className="bg-amber-100 text-amber-800">
          <tr><th className="px-4 py-2">Nama</th><th>Posisi</th><th>Shift</th></tr>
        </thead>
        <tbody>
          {staffList.map((s, i) => (
            <tr key={s.id} className={i % 2 ? "bg-gray-50" : "bg-white"}>
              <td className="px-4 py-2">{s.name}</td>
              <td>{s.position}</td>
              <td>{s.shift}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end gap-2">
        <button onClick={() => setModal("add")} className="border px-4 py-2 rounded hover:bg-gray-100">Tambah Staff</button>
        <button onClick={() => setModal("shift")} className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-800 flex items-center gap-2">
          <FaCalendarAlt /> Atur Shift
        </button>
      </div>

      {/* Modal Tambah */}
      {modal === "add" && (
        <Modal title="Tambah Staff" onClose={closeModal} onSave={addStaff}>
          <Input name="name" value={form.name} onChange={handleInput} placeholder="Nama Staff" />
          <Input name="position" value={form.position} onChange={handleInput} placeholder="Posisi" />
        </Modal>
      )}

      {/* Modal Shift */}
      {modal === "shift" && (
        <Modal title="Atur Shift Staff" onClose={closeModal} onSave={updateShift}>
          <Input name="shiftName" value={form.shiftName} onChange={handleInput} placeholder="Nama Staff" />
          <Input name="newShift" value={form.newShift} onChange={handleInput} placeholder="Shift Baru" />
        </Modal>
      )}
    </div>
  );
}

// Komponen Modal Reusable
function Modal({ title, children, onClose, onSave }) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow space-y-4">
        <h3 className="text-xl font-bold text-amber-700">{title}</h3>
        {children}
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 border rounded">Batal</button>
          <button onClick={onSave} className="px-3 py-1 bg-amber-700 text-white rounded">Simpan</button>
        </div>
      </div>
    </div>
  );
}

// Komponen Input Reusable
function Input({ name, value, onChange, placeholder }) {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border px-3 py-2 rounded"
    />
  );
}
