// src/components/Home.jsx
import "./style.css";
import "./auth.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container">
            {/* Header */}
            <header>
                <nav className="navbar">
                    <div className="logo">
                        <i className="fas fa-chart-line"></i> Trade Plus
                    </div>
                    <ul className="nav-links">
                        <li><Link to="/" className="active">Home</Link></li>
                        <li><Link to="/login" className="btn btn-login">Login</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Trade Smarter with <span>Trade Plus</span></h1>
                    <p>AI-powered analytics, real-time data, and zero-commission trading.</p>
                    <div className="cta-buttons">
                        <Link to="/sign-up" className="btn btn-primary">Start Trading</Link>
                        <button className="btn btn-secondary">Learn More</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Stock Market Dashboard" loading="lazy" />
                </div>
            </section>

            {/* Pricing Section */}
            <section className="pricing">
                <h2>Choose Your Plan</h2>
                <div className="pricing-cards">
                    <div className="card">
                        <h3>Basic</h3>
                        <p className="price">₹0<span>/month</span></p>
                        <ul>
                            <li><i className="fas fa-check"></i> Delayed Data (15 mins)</li>
                            <li><i className="fas fa-check"></i> 3 Watchlists</li>
                            <li><i className="fas fa-check"></i> Email Support</li>
                        </ul>
                        <Link to="/sign-up" className="btn btn-outline">Sign Up</Link>
                    </div>
                    <div className="card popular">
                        <div className="popular-badge">Most Popular</div>
                        <h3>Pro</h3>
                        <p className="price">₹500<span>/month</span></p>
                        <ul>
                            <li><i className="fas fa-check"></i> Real-time Data</li>
                            <li><i className="fas fa-check"></i> 10 Watchlists</li>
                            <li><i className="fas fa-check"></i> Priority Support</li>
                        </ul>
                        <Link to="/sign-up" className="btn btn-primary">Sign Up</Link>
                    </div>
                    <div className="card">
                        <h3>Premium</h3>
                        <p className="price">₹1500<span>/month</span></p>
                        <ul>
                            <li><i className="fas fa-check"></i> Real-time + Futures</li>
                            <li><i className="fas fa-check"></i> Unlimited Watchlists</li>
                            <li><i className="fas fa-check"></i> 24/7 Support</li>
                        </ul>
                        <Link to="/sign-up" className="btn btn-outline">Sign Up</Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <p>&copy; 2025 Trade Plus. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;