import { useState } from 'react';
import { FaCamera } from 'react-icons/fa';

export default function ImagePopup({ fullImageSrc, title, description }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Camera Icon Trigger */}
            <button onClick={() => setOpen(true)} className="text-white hover:scale-110 transition text-3xl">
                <FaCamera />
            </button>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg max-w-md text-black relative">
                    <button
                    onClick={() => setOpen(false)}
                    className="absolute top-2 right-3 text-2xl font-bold text-gray-600 hover:text-black"
                    >
                    ×
                    </button>
                    <img src={fullImgSrc} alt={title} className="rounded mb-4 w-full" />
                    <h3 className="text-xl font-semibold font-sans mb-2">{title}</h3>
                    <p className="text-gray-700 font-sans ">{description}</p>
                </div>
                </div>
            )}

        </>
    )
}