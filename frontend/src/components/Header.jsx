import React from 'react';

const Header = () => {
    return (
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">s</span>
                </div>
                <div>
                    <h1 className="text-lg font-bold text-yellow-400">Swift Exchange</h1>
                    <p className="text-xs text-gray-400">Patypatii</p>
                </div>
            </div>
            <div className="relative">
                <i className="fas fa-bell text-gray-400 text-xl"></i>
            </div>
        </div>
    );
};

export default Header;