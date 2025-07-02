import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const MembershipCard = ({ title, description, benefits, price, styleClass, onChoose }) => {
    
    const priceParts = price.split(' ');
    const mainPrice = priceParts[0];
    const pricePeriod = priceParts.length > 1 ? priceParts.slice(1).join(' ') : null;

    return (
        // flex flex-col akan mengatur konten internal kartu secara vertikal.
        // transition-all akan membuat animasi scale menjadi halus.
        <div className={`flex flex-col p-8 rounded-2xl shadow-lg transition-transform duration-300 ${styleClass}`}>
            
            <div className="text-center mb-6">
                <h3 className="text-xl font-bold uppercase tracking-wider">{title}</h3>
                <p className="text-xs opacity-70 mt-2">{description}</p>
            </div>

            {/* 'flex-grow' adalah KUNCI untuk mendorong konten di bawahnya ke dasar kartu. */}
            <div className="flex-grow">
                <h4 className="font-bold mb-4">What's included</h4>
                <ul className="space-y-3 text-sm">
                    {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <FaCheckCircle className="text-current flex-shrink-0 mt-1" />
                            <span>{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {price && (
                <div className="text-center my-8">
                    <span className="text-4xl font-bold">{mainPrice}</span>
                    {pricePeriod && <span className="text-sm opacity-70 ml-1">{pricePeriod}</span>}
                </div>
            )}
            
            <button
                className="w-full bg-[#3d2b1f] text-white py-3 rounded-xl font-semibold hover:bg-opacity-80 transition"
                onClick={onChoose}
            >
                Choose
            </button>
        </div>
    );
};

export default MembershipCard;