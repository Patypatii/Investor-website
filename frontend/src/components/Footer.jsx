import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-xl font-bold text-white mb-4">Swift Exchange</h3>
                        <p className="text-slate-400">The smartest way to mine cryptocurrency with guaranteed returns.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="text-slate-400">support@swiftxchange.com</li>
                            <li className="text-slate-400">+254711692587</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
                    <p>© 2023 Swift Exchange. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
