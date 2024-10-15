import React, { useState } from 'react';

const Receiver = () => {
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImageUrl(url);
            setImage(file); // Save the file object if needed later
        }
    };

    const handleConfirm = () => {
        // Logic to confirm the image can be added here
        console.log('Image confirmed:', image);
    };

    return (
        <div className="flex flex-col items-start">
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button 
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded" 
                onClick={handleConfirm}
                disabled={!imageUrl} // Disable button if no image is uploaded
            >
                Confirm Image
            </button>
            {imageUrl && (
                <div className="mt-4">
                    <h3 className="text-lg">Uploaded Image:</h3>
                    <img src={imageUrl} alt="Uploaded" className="mt-2 border border-gray-300 rounded" />
                </div>
            )}
        </div>
    );
};

export default Receiver;
