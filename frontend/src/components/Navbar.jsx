// Navbar.jsx
import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-yellow-400 font-bold text-xl">
                                Swift<span className="text-white">xchange</span>
                            </span>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <a href="#features" className="text-slate-300 hover:text-white px-3 py-2">
                                Features
                            </a>
                            <a href="#how-it-works" className="text-slate-300 hover:text-white px-3 py-2">
                                How It Works
                            </a>
                            <a href="#plans" className="text-slate-300 hover:text-white px-3 py-2">
                                Plans
                            </a>
                            <a
                                href="auth.php"
                                className="text-slate-900 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md font-medium"
                            >
                                Login
                            </a>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <div className="hamburger" id="hamburger">
                            <span className="bg-yellow-400 block w-8 h-1 mb-1"></span>
                            <span className="bg-yellow-400 block w-8 h-1 mb-1"></span>
                            <span className="bg-yellow-400 block w-8 h-1"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-menu hidden" id="mobileMenu">
                <a href="#features" className="block px-4 py-2 text-slate-300 hover:bg-yellow-400/10 hover:text-yellow-400">
                    Features
                </a>
                <a href="#how-it-works" className="block px-4 py-2 text-slate-300 hover:bg-yellow-400/10 hover:text-yellow-400">
                    How It Works
                </a>
                <a href="#plans" className="block px-4 py-2 text-slate-300 hover:bg-yellow-400/10 hover:text-yellow-400">
                    Plans
                </a>
                <a
                    href="auth.php"
                    className="block bg-yellow-400 text-slate-900 font-medium mt-2 text-center py-2 rounded"
                >
                    Login
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
