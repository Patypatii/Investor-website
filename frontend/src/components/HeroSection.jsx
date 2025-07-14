import React from 'react';

export default function HeroSection() {
    return (
        <section className="hero-gradient pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="mb-12 lg:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            Smart <span className="text-yellow-400">Crypto Mining</span><br />
                            With Guaranteed Returns
                        </h1>
                        <p className="text-lg text-slate-300 mb-8 max-w-lg">
                            Grow your cryptocurrency assets with our automated trading algorithms and mining packages. Earn up to 100% monthly returns.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href="auth.php?action=register" className="btn-primary text-black font-bold py-3 px-8 rounded-lg text-center">
                                Get Started
                            </a>
                            <a href="#how-it-works" className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-medium py-3 px-8 rounded-lg text-center">
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Crypto investment" className="rounded-xl shadow-2xl glow border border-yellow-400/30" />
                        <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-slate-900 px-6 py-3 rounded-lg font-bold shadow-lg">
                            +25% ROI
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
