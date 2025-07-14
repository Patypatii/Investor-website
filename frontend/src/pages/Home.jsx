// src/pages/Home.jsx
import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import HowItWorksSection from '../components/HowItWorksSection'
import PlansSection from '../components/PlansSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className="bg-slate-900 text-white">
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <PlansSection />
            <CTASection />
            <Footer />
        </div>
    )
}
