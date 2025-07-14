import React from 'react';

const steps = [
    {
        step: 1,
        title: 'Create Account',
        desc: 'Register in less than 2 minutes',
    },
    {
        step: 2,
        title: 'Choose Mining Plan',
        desc: 'Select from our range of profitable mining packages',
    },
    {
        step: 3,
        title: 'Earn Daily Profits',
        desc: 'Watch your money grow with daily returns',
    },
];

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Start earning in just 3 simple steps</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map(({ step, title, desc }) => (
                        <div key={step} className="text-center">
                            <div className="bg-yellow-400/10 border border-yellow-400/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-400 font-bold text-xl">
                                {step}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{title}</h3>
                            <p className="text-slate-300">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
