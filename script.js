const loginToggle = document.getElementById('loginToggle');
const registerToggle = document.getElementById('registerToggle');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const toast = document.getElementById('toast');
const canvas = document.getElementById('particlesCanvas');
let ctx = null;

function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext('2d');
}

function drawParticles() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < 50; i++) {
        ctx.beginPath();
        const x = (i * 131) % canvas.width;
        const y = (i * 253) % canvas.height;
        let radius = Math.sin(Date.now() * 0.001 + i) * 1.5 + 2;
        radius = Math.max(radius, 1);
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.sin(Date.now() * 0.002 + i) * 0.3 + 0.2})`;
        ctx.fill();
    }
    requestAnimationFrame(drawParticles);
}

if (canvas) {
    resizeCanvas();
    drawParticles();
}

window.addEventListener('resize', () => {
    resizeCanvas();
});

loginToggle.addEventListener('click', () => {
    loginToggle.classList.add('active');
    registerToggle.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
});

registerToggle.addEventListener('click', () => {
    registerToggle.classList.add('active');
    loginToggle.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
});

function showToast(message, isError = false) {
    toast.textContent = message;
    toast.style.borderLeftColor = isError ? '#ef4444' : '#22c55e';
    toast.style.background = isError ? 'rgba(239, 68, 68, 0.9)' : 'rgba(34, 197, 94, 0.9)';
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const input = document.getElementById(targetId);
        const icon = btn.querySelector('i');
        
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});

document.querySelectorAll('.checkbox input').forEach(checkbox => {
    const square = checkbox.parentElement.querySelector('.fa-square');
    const checkSquare = checkbox.parentElement.querySelector('.fa-check-square');
    if (checkbox.checked) {
        square.style.display = 'none';
        checkSquare.style.display = 'inline-block';
    } else {
        square.style.display = 'inline-block';
        checkSquare.style.display = 'none';
    }
    
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            square.style.display = 'none';
            checkSquare.style.display = 'inline-block';
        } else {
            square.style.display = 'inline-block';
            checkSquare.style.display = 'none';
        }
    });
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (!email || !password) {
        showToast('Please fill all fields', true);
        return;
    }
    
    if (!email.includes('@')) {
        showToast('Invalid email format', true);
        return;
    }
    
    showToast(`Welcome back! Login successful`);
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirm = document.getElementById('regConfirm').value;
    
    if (!name || !email || !password || !confirm) {
        showToast('Please fill all fields', true);
        return;
    }
    
    if (!email.includes('@')) {
        showToast('Invalid email format', true);
        return;
    }
    
    if (password.length < 8) {
        showToast('Password must be at least 8 characters', true);
        return;
    }
    
    if (password !== confirm) {
        showToast('Passwords do not match', true);
        return;
    }
    
    showToast(`Account created! Welcome ${name}`);
    
    setTimeout(() => {
        loginToggle.click();
        registerForm.reset();
    }, 2000);
});

document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const platform = btn.classList.contains('google') ? 'Google' :
                        btn.classList.contains('github') ? 'GitHub' : 'Discord';
        showToast(`${platform} auth requires backend setup`, true);
    });
});
