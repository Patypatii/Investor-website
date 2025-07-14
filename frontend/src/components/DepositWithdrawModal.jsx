import React, { useState } from 'react';

const DepositModal = ({ isOpen, onClose }) => {
    const [amount, setAmount] = useState('');
    const [phone, setPhone] = useState('758841701');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle deposit logic here (e.g., send data to an API)
        console.log('Deposit:', { amount, phone });
        onClose(); // Close modal after submission
        setAmount('');
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" style={{ display: isOpen ? 'flex' : 'none' }}>
            <div className="modal-content relative">
                <button onClick={onClose} className="modal-close">
                    <i className="fas fa-times"></i>
                </button>
                <h3 className="modal-title">Deposit Funds</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Amount (KES)</label>
                        <input
                            type="number"
                            name="amount"
                            min="1"
                            step="1"
                            required
                            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                            placeholder="100"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                            placeholder="0712345678"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            onClick={onClose}
                            className="btn-secondary flex-1"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            name="deposit"
                            className="btn-primary flex-1"
                        >
                            Deposit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DepositModal;