# Ashish Kumar - Portfolio Website

A beautiful, modern portfolio website built with MERN stack featuring smooth animations and a dark blue/black color scheme.

## Features

- 🎨 Modern, responsive design with smooth animations
- 🌙 Dark theme with black and dark blue color scheme
- 📱 Fully responsive single-page application
- ⚡ Smooth scroll animations using Framer Motion
- 🚀 Built with React, Express, Node.js, and MongoDB

## Tech Stack

### Frontend
- React 18
- Framer Motion (animations)
- React Icons
- CSS3 with modern styling

### Backend
- Node.js
- Express.js
- MongoDB (optional - for future features)

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install all dependencies:
```bash
npm run install-all
```

Or install separately:
```bash
# Install root dependencies
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Create a `.env` file in the root directory (optional for MongoDB):
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

## Running the Application

### Development Mode

Run both client and server concurrently:
```bash
npm run dev
```

Or run separately:

**Terminal 1 - Server:**
```bash
npm run server
```

**Terminal 2 - Client:**
```bash
npm run client
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

### Production Build

Build the React app:
```bash
npm run build
```

## Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Hero.js
│   │   │   ├── About.js
│   │   │   ├── Skills.js
│   │   │   ├── Projects.js
│   │   │   ├── Contact.js
│   │   │   └── Navbar.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/                # Express backend
│   └── index.js
├── package.json
└── README.md
```

## Sections

1. **Hero** - Introduction with name, year, and social links
2. **About** - Brief introduction and background
3. **Skills** - Technical skills with progress bars
4. **Projects** - Showcase of three main projects
5. **Contact** - Social media links and contact information

## Customization

To customize the portfolio:

1. Update personal information in:
   - `client/src/components/Hero.js`
   - `client/src/components/About.js`
   - `client/src/components/Contact.js`

2. Update projects in:
   - `client/src/components/Projects.js`

3. Update skills in:
   - `client/src/components/Skills.js`

4. Modify colors in CSS files or `App.css`

## Deployment

### Deploy Frontend to Vercel

1. Build the React app:
```bash
cd client
npm run build
```

2. Deploy the `client/build` folder to Vercel

### Deploy Backend

Deploy the server to platforms like:
- Heroku
- Railway
- Render
- DigitalOcean

## License

MIT License

## Author

**Ashish Kumar**
- LinkedIn: [ashish-kumar-59a142290](https://www.linkedin.com/in/ashish-kumar-59a142290)
- GitHub: [LEYTHAN-X](https://github.com/LEYTHAN-X)
- LeetCode: [ASHISHRX-250](https://leetcode.com/u/ASHISHRX-250/)

---

Built with ❤️ using MERN Stack

