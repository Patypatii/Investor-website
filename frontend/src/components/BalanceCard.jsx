// src/components/BalanceCard.jsx

import React from 'react';

function BalanceCard() {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '20px',
            margin: '10px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h2>Current Balance</h2>
            <p style={{ fontSize: '2em', fontWeight: 'bold', color: '#007bff' }}>$1,234.56</p>
            <p>Last updated: July 14, 2025</p>
        </div>
    );
}

export default BalanceCard;