// frontend/src/components/PendingWithdrawalsCard.jsx
import React from 'react';

function PendingWithdrawalsCard() {
    // You would typically fetch and display actual pending withdrawals data here
    const pendingCount = 3; // Example data

    return (
        <div style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '20px',
            margin: '10px 0',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h3 style={{ color: '#333', marginBottom: '10px' }}>Pending Withdrawals</h3>
            <p style={{
                fontSize: '2.5em',
                fontWeight: 'bold',
                color: '#ffc107', // Orange/Yellow color for pending items
                margin: '0'
            }}>{pendingCount}</p>
            <p style={{ fontSize: '0.9em', color: '#666', marginTop: '5px' }}>
                Withdrawals currently being processed.
            </p>
        </div>
    );
}

export default PendingWithdrawalsCard;