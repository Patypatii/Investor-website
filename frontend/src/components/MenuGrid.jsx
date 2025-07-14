// frontend/src/components/MenuGrid.jsx
import React from 'react';

function MenuGrid() {
    // You would typically map over an array of menu items here
    const menuItems = [
        { id: 1, name: 'Dashboard', icon: '📊' },
        { id: 2, name: 'Invest', icon: '📈' },
        { id: 3, name: 'Withdraw', icon: '💸' },
        { id: 4, name: 'History', icon: '📜' },
        { id: 5, name: 'Settings', icon: '⚙️' },
    ];

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', // Responsive grid
            gap: '15px',
            padding: '20px',
            backgroundColor: '#f0f2f5',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            maxWidth: '800px', // Optional: constrain width
            margin: '20px auto' // Optional: center the grid
        }}>
            {menuItems.map(item => (
                <div key={item.id} style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    padding: '15px',
                    textAlign: 'center',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    transition: 'transform 0.2s ease-in-out',
                    cursor: 'pointer'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    <span style={{ fontSize: '2em', display: 'block', marginBottom: '10px' }}>{item.icon}</span>
                    <p style={{ margin: '0', fontSize: '1em', fontWeight: 'bold', color: '#333' }}>{item.name}</p>
                </div>
            ))}
        </div>
    );
}

export default MenuGrid;