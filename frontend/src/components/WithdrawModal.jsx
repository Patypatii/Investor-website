// frontend/src/components/WithdrawModal.jsx
import React, { useState } from 'react';

function WithdrawModal({ isOpen, onClose, onSubmit, currentBalance = 0 }) {
    const [amount, setAmount] = useState('');
    const [method, setMethod] = useState('bankAccount'); // Default method
    const [errorMessage, setErrorMessage] = useState('');

    // Reset form and error message when modal opens/closes
    React.useEffect(() => {
        if (isOpen) {
            setAmount('');
            setMethod('bankAccount');
            setErrorMessage('');
        }
    }, [isOpen]);

    if (!isOpen) {
        return null; // Don't render if the modal is not open
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear previous errors

        const withdrawalAmount = parseFloat(amount);

        // Basic validation
        if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
            setErrorMessage('Please enter a valid amount.');
            return;
        }

        if (withdrawalAmount > currentBalance) {
            setErrorMessage('Insufficient funds. You cannot withdraw more than your current balance.');
            return;
        }

        onSubmit({ amount: withdrawalAmount, method });
        onClose(); // Close modal after successful submission
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
        position: 'relative',
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
        backgroundColor: '#dc3545', // Red for withdrawal actions
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

    const errorStyle = {
        color: '#dc3545',
        fontSize: '0.9em',
        marginTop: '10px',
        textAlign: 'center',
    };

    return (
        <div style={modalOverlayStyle}>
            <div style={modalContentStyle}>
                <button style={closeButtonStyle} onClick={onClose}>&times;</button>
                <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#333' }}>Withdraw Funds</h2>
                <form onSubmit={handleSubmit}>
                    <div style={formGroupStyle}>
                        <label htmlFor="withdrawAmount" style={labelStyle}>Amount</label>
                        <input
                            type="number"
                            id="withdrawAmount"
                            style={inputStyle}
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder={`Enter amount (Max: $${currentBalance.toFixed(2)})`}
                            min="0.01"
                            step="0.01"
                            required
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="withdrawMethod" style={labelStyle}>Withdrawal Method</label>
                        <select
                            id="withdrawMethod"
                            style={selectStyle}
                            value={method}
                            onChange={(e) => setMethod(e.target.value)}
                        >
                            <option value="bankAccount">Bank Account</option>
                            <option value="paypal">PayPal</option>
                            <option value="cryptoWallet">Crypto Wallet</option>
                        </select>
                    </div>
                    {errorMessage && <p style={errorStyle}>{errorMessage}</p>}
                    <button type="submit" style={buttonStyle}>Withdraw Now</button>
                </form>
            </div>
        </div>
    );
}

export default WithdrawModal;