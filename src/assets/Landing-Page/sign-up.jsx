import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.jsx";
import "./style.css"
import "./auth.css";
 

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (!formData.agreeTerms) {
            alert("You must agree to the terms and conditions");
            return;
        }
        console.log("Signup data:", formData);
        alert("Account created successfully!");
        navigate("/login");
    };

    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
                <label>
                    <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} /> I agree to the terms and conditions
                </label>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;