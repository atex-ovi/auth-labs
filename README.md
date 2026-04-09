# AuthLabs - Modern Login & Register Pages

A beautiful, glassmorphism-style login and registration interface with smooth animations and responsive design.

Important Note: AuthLabs is a front-end simulation only. This is a UI/UX demonstration project, not a fully functional authentication system. For real-world integration, you need to implement backend logic and database connectivity.

## Preview

<video src="media/al.mp4" controls width="100%"></video>

---

## Features

- Glassmorphism UI with backdrop blur
- Smooth toggle between Login and Register forms
- Password visibility toggle
- Form validation simulation
- Toast notifications
- Animated gradient background
- Floating particles animation
- Fully responsive design
- Anti-zoom on mobile devices
- Font Awesome 6 icons
- 50px pill-shaped buttons and inputs

---

## What This Project Does

| Feature | Status |
|---------|--------|
| UI/UX Demo | Complete |
| Form Validation | Simulated |
| Backend Integration | Not included |
| Database Connection | Not included |
| Real Authentication | Not included |

---

## Local Preview

To preview this project locally, you can use any static server:

### Option 1: Live Server (VS Code)
1. Install Live Server extension
2. Right-click index.html
3. Select "Open with Live Server"

### Option 2: Python HTTP Server

Python 3
```bash
python -m http.server 8080
```

Then open: http://localhost:8080

### Option 3: Node.js (http-server)

```bash
npm install -g http-server
http-server -p 8080
```

Then open: http://localhost:8080

### Option 4: PHP Server

php -S localhost:8080

### Option 5: VS Code Live Preview
1. Install "Live Preview" by Microsoft
2. Click "Show Preview" button

---

## File Structure

```
auth-labs/
├── index.html
├── style.css
└── script.js
```

---

## How to Use

1. Clone or download this repository
2. Open index.html in your browser (or use local server)
3. Toggle between Login and Register forms
4. Test form validation:
   - Email format checking
   - Password length (min 8 characters)
   - Password confirmation matching

---

## For Real-World Integration

To make this fully functional, you need to:

### Frontend (Current Project)
- Replace showToast() calls with actual API requests
- Add CSRF protection
- Implement proper session management

### Backend (Required)
- Create API endpoints for:
  - POST /api/register - User registration
  - POST /api/login - User authentication
  - POST /api/logout - Session destruction
- Implement password hashing (bcrypt, argon2)
- Set up database (PostgreSQL, MySQL, MongoDB)
- Add JWT or session-based authentication
- Implement rate limiting
- Add HTTPS for production

### Example API Structure

```javascript
fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
})
.then(res => res.json())
.then(data => {
    if (data.success) {
        // Redirect to dashboard
    } else {
        showToast(data.message, true);
    }
});
```

---

## Technologies Used

- HTML5
- CSS3 (Glassmorphism, Flexbox, Animations)
- JavaScript (Vanilla)
- Font Awesome 6
- Google Fonts (Inter)

---

## Responsive Design Breakpoints

| Device | Breakpoint | Status |
|--------|------------|--------|
| Small Phone | < 320px | Optimized |
| Phone | < 480px | Optimized |
| Tablet Portrait | 481px - 768px | Optimized |
| Tablet Landscape | 769px - 1024px | Optimized |
| Desktop | > 1024px | Optimized |
| Landscape Mode | orientation: landscape | Optimized |
| Short Screen | max-height: 600px | Optimized |

---

## Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | Supported |
| Firefox | Latest | Supported |
| Safari | Latest | Supported |
| Edge | Latest | Supported |
| Opera | Latest | Supported |

---

## Disclaimer

This project is for demonstration and learning purposes only. It is not intended for production use without proper backend implementation and security measures.

---

## License

[MIT](./LICENSE.md)
