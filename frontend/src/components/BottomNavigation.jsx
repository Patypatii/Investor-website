import { Link, useLocation } from 'react-router-dom';

export default function BottomNavigation() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="bottom-nav">
            <div className="grid grid-cols-5">
                <Link to="/dashboard" className={`nav-item ${isActive('/dashboard') ? 'active' : ''}`}>
                    <span className="nav-icon">📊</span>
                    <span>Dashboard</span>
                </Link>
                <Link to="/activity" className={`nav-item ${isActive('/activity') ? 'active' : ''}`}>
                    <span className="nav-icon">📈</span>
                    <span>Mining Now</span>
                </Link>
                <Link to="/invest" className={`nav-item ${isActive('/invest') ? 'active' : ''}`}>
                    <span className="nav-icon bg-yellow-500 text-black rounded-full">💰</span>
                    <span>Stake</span>
                </Link>
                <Link to="/earnings" className={`nav-item ${isActive('/earnings') ? 'active' : ''}`}>
                    <span className="nav-icon">💳</span>
                    <span>Earnings</span>
                </Link>
                <Link to="/refer" className={`nav-item ${isActive('/refer') ? 'active' : ''}`}>
                    <span className="nav-icon">👥</span>
                    <span>Network</span>
                </Link>
            </div>
        </div>
    );
}
