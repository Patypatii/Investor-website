// frontend/src/components/DepositModal.jsx
import React, { useState } from 'react';

function DepositModal({ isOpen, onClose, onSubmit }) {
    const [amount, setAmount] = useState('');
    const [method, setMethod] = useState('bankTransfer'); // Default method

    if (!isOpen) {
        return null; // Don't render if the modal is not open
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (parseFloat(amount) <= 0 || isNaN(parseFloat(amount))) {
            alert('Please enter a valid amount.');
            return;
        }
        onSubmit({ amount: parseFloat(amount), method });
        setAmount(''); // Clear form
        setMethod('bankTransfer'); // Reset method
        onClose(); // Close modal after submission
    };

    const modalOverlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    };

    const modalContentStyle = {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
        width: '90%',
        maxWidth: '500px',
        fontFamily: 'Arial, sans-serif',
        position: 'relative', // For the close button
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '15px',
        right: '15px',
        background: 'none',
        border: 'none',
        fontSize: '1.5em',
        cursor: 'pointer',
        color: '#666',
    };

    const formGroupStyle = {
        marginBottom: '15px',
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
        color: '#333',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '1em',
    };

    const selectStyle = {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '1em',
        backgroundColor: '#fff',
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '12px 20px',
        borderRadius: '5px',
        border: 'none',
        fontSize: '1em',
        cursor: 'pointer',
        width: '100%',
        marginTop: '20px',
        transition: 'background-color 0.2s ease',
    };

    return (
        <div style={modalOverlayStyle}>
            <div style={modalContentStyle}>
                <button style={closeButtonStyle} onClick={onClose}>&times;</button>
                <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#333' }}>Deposit Funds</h2>
                <form onSubmit={handleSubmit}>
                    <div style={formGroupStyle}>
                        <label htmlFor="amount" style={labelStyle}>Amount</label>
                        <input
                            type="number"
                            id="amount"
                            style={inputStyle}
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter amount"
                            min="0.01"
                            step="0.01"
                            required
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="method" style={labelStyle}>Deposit Method</label>
                        <select
                            id="method"
                            style={selectStyle}
                            value={method}
                            onChange={(e) => setMethod(e.target.value)}
                        >
                            <option value="bankTransfer">Bank Transfer</option>
                            <option value="creditCard">Credit/Debit Card</option>
                            <option value="crypto">Cryptocurrency</option>
                        </select>
                    </div>
                    <button type="submit" style={buttonStyle}>Deposit Now</button>
                </form>
            </div>
        </div>
    );
}

export default DepositModal;