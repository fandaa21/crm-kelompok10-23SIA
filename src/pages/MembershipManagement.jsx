// src/pages/MembershipManagement.jsx

import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase'; // Sesuaikan path jika perlu
import { Users, MoreVertical } from 'lucide-react';

// Komponen untuk badge level membership
const LevelBadge = ({ level }) => {
    const styles = {
        MEMBER: 'bg-gray-200 text-gray-800',
        PREFERRED: 'bg-amber-200 text-amber-800',
        ELITE: 'bg-blue-200 text-blue-800',
    };
    return (
        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${styles[level.toUpperCase()] || 'bg-gray-200'}`}>
            {level}
        </span>
    );
};

export default function MembershipManagement() {
    const [memberships, setMemberships] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('All');
    
    const tabs = ['All', 'MEMBER', 'PREFERRED', 'ELITE'];

    useEffect(() => {
        const fetchMemberships = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from('pendaftaran_membership')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error("Error fetching memberships:", error);
            } else {
                setMemberships(data);
            }
            setLoading(false);
        };
        fetchMemberships();
    }, []);

    const filteredMemberships = activeTab === 'All'
        ? memberships
        : memberships.filter(m => m.level_membership.toUpperCase() === activeTab);

    if (loading) {
        return <div className="p-6">Loading membership data...</div>;
    }

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header Halaman */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <Users size={24} className="text-gray-600" />
                    <span>Membership Management</span>
                </h1>
            </div>

            {/* Kontrol Tabs untuk Filter */}
            <div className="flex items-center border-b mb-6">
                {tabs.map(tab => (
                     <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 text-sm font-semibold transition-colors ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-400'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tabel Data Membership */}
            <div className="bg-white rounded-lg ">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50/70 text-gray-500 uppercase text-xs">
                            <tr>
                                <th className="px-6 py-4 font-medium">Name</th>
                                <th className="px-6 py-4 font-medium">Email</th>
                                <th className="px-6 py-4 font-medium">Membership Level</th>
                                <th className="px-6 py-4 font-medium">Registration Date</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800">
                            {filteredMemberships.map((member) => (
                                <tr key={member.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-semibold">{`${member.nama_depan} ${member.nama_belakang}`}</td>
                                    <td className="px-6 py-4 text-gray-600">{member.email}</td>
                                    <td className="px-6 py-4"><LevelBadge level={member.level_membership} /></td>
                                    <td className="px-6 py-4 text-gray-600">{new Date(member.created_at).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-400 hover:text-gray-600"><MoreVertical size={18} /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                     {filteredMemberships.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                            No data available for this filter.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}