document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility
    window.togglePassword = function(inputId, icon) {
        const input = document.getElementById(inputId);
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    };

    // Password strength indicator for signup page
    const signupPassword = document.getElementById('signupPassword');
    if (signupPassword) {
        signupPassword.addEventListener('input', function() {
            const strengthIndicator = document.querySelector('.strength-indicator');
            const strengthText = document.getElementById('strengthText');
            const password = this.value;
            let strength = 0;
            
            // Check for length
            if (password.length >= 8) strength += 1;
            if (password.length >= 12) strength += 1;
            
            // Check for uppercase letters
            if (/[A-Z]/.test(password)) strength += 1;
            
            // Check for numbers
            if (/[0-9]/.test(password)) strength += 1;
            
            // Check for special characters
            if (/[^A-Za-z0-9]/.test(password)) strength += 1;
            
            // Update UI
            let width = 0;
            let color = '#e74c3c'; // Red
            let text = 'Weak';
            
            if (strength <= 1) {
                width = 25;
            } else if (strength <= 3) {
                width = 50;
                color = '#f39c12'; // Orange
                text = 'Medium';
            } else if (strength <= 4) {
                width = 75;
                color = '#3498db'; // Blue
                text = 'Strong';
            } else {
                width = 100;
                color = '#2ecc71'; // Green
                text = 'Very Strong';
            }
            
            strengthIndicator.style.setProperty('--strength-width', width + '%');
            strengthIndicator.style.setProperty('--strength-color', color);
            strengthIndicator.querySelector('::after').style.width = width + '%';
            strengthIndicator.querySelector('::after').style.backgroundColor = color;
            strengthText.textContent = text;
        });
    }

    // Form validation and submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Here you would typically send this data to your server
            console.log('Login attempt with:', { email, password });
            
            // For demo purposes, we'll just show an alert
            alert('Login functionality would be implemented here. Redirecting to dashboard...');
            // window.location.href = 'dashboard.html';
        });
    }

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            
            // Simple validation
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            if (!document.getElementById('agreeTerms').checked) {
                alert('You must agree to the terms and conditions');
                return;
            }
            
            // Here you would typically send this data to your server
            console.log('Signup attempt with:', { name, email, password });
            
            // For demo purposes, we'll just show an alert
            alert('Account created successfully! Redirecting to login...');
            window.location.href = 'login.html';
        });
    }

    // Update login/signup button text in header based on current page
    const path = window.location.pathname.split('/').pop();
    if (path === 'login.html') {
        const loginBtn = document.querySelector('.btn-login');
        if (loginBtn) loginBtn.textContent = 'Sign Up';
    } else if (path === 'signup.html') {
        const loginBtn = document.querySelector('.btn-login');
        if (loginBtn) loginBtn.textContent = 'Login';
    }
});