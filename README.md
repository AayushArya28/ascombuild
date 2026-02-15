# ASCOM Buildcon Website

A modern, responsive website for ASCOM BUILDCON Pvt. Ltd., a specialized structural engineering and construction consultancy firm based in Varanasi, Uttar Pradesh.

## 🏗️ About

ASCOM BUILDCON is dedicated to the scientific rehabilitation, strengthening, and repair of civil infrastructure across India. This website showcases their services, projects, and expertise in structural engineering.

## 🚀 Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router DOM 7.11.0
- **Styling**: Tailwind CSS 4.1.18
- **Deployment**: Vercel

## ✨ Features

- **Responsive Design**: Fully responsive across all devices
- **Dark Mode**: Built-in dark/light theme toggle
- **Modern UI**: Clean, professional design with smooth animations
- **Form Validation**: Client-side validation for contact and career forms
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Optimized with Vite for lightning-fast builds

## 📁 Project Structure

```
ascombuild/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # Reusable components
│   │   ├── home/      # Homepage components
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ServicePageLayout.jsx
│   │   └── ThemeToggle.jsx
│   ├── pages/         # Page components
│   │   ├── AboutUs.jsx
│   │   ├── Awards.jsx
│   │   ├── Bridges.jsx
│   │   ├── Careers.jsx
│   │   ├── Clients.jsx
│   │   ├── Consultancy.jsx
│   │   ├── ContactUs.jsx
│   │   ├── Home.jsx
│   │   ├── Leadership.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── Skyscrapers.jsx
│   │   ├── StructuralDesign.jsx
│   │   └── Testing.jsx
│   ├── App.jsx        # Main app component
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── vercel.json        # Vercel deployment config
├── vite.config.js     # Vite configuration
├── tailwind.config.js # Tailwind configuration
└── package.json       # Dependencies
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AayushArya28/ascombuild.git
   cd ascombuild
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📄 Available Pages

- **Home** (`/`) - Landing page with company overview
- **About Us** (`/about-us`) - Company information and history
- **Leadership** (`/leadership`) - Team and leadership details
- **Services** (`/services`) - Overview of services offered
- **Testing** (`/testing`) - Structural testing services
- **Consultancy** (`/consultancy`) - Consultancy services
- **Structural Design** (`/structural-design`) - Design services
- **Bridges** (`/bridges`) - Bridge engineering expertise
- **Skyscrapers** (`/skyscrapers`) - High-rise building projects
- **Projects** (`/projects`) - Portfolio of completed projects
- **Awards** (`/awards`) - Recognition and achievements
- **Clients** (`/clients`) - Client testimonials and partnerships
- **Careers** (`/careers`) - Job opportunities and application form
- **Contact Us** (`/contact-us`) - Contact information and inquiry form

## 🎨 Key Features

### Navigation
- Smooth hover effects with 300ms delay
- Nested dropdown menus for services
- Mobile-responsive hamburger menu
- Fixed navbar with scroll detection

### Forms
- **Contact Form**: Name, Email, Subject, Message (all required)
- **Career Form**: Comprehensive application with validation
  - 10-digit mobile number validation
  - Email format validation
  - Resume upload (PDF/Word only)
  - 6-digit PIN code validation

### Theme
- Primary Color: Red (#DC2626)
- Dark mode support with smooth transitions
- Consistent spacing and typography

## 🚀 Deployment

The site is deployed on Vercel with automatic deployments on push to the main branch.

**Live URL**: [Your Vercel URL]

### Vercel Configuration
The `vercel.json` file handles client-side routing by redirecting all routes to `index.html`.

## 📞 Contact Information

- **Address**: 202, Vrindavan Residency, Nuwan, Varanasi, 221011
- **Mobile**: +91 85738 37383
- **Phone**: +91-542-2989427
- **Email**: info@ascombuild.com / ascombuildcon@gmail.com

## 🤝 Contributing

This is a private project for ASCOM BUILDCON Pvt. Ltd.

## 📝 License

© ASCOM 2022. All rights reserved.

## 🔧 Development Notes

- Uses Vite for fast HMR (Hot Module Replacement)
- ESLint configured for code quality
- Tailwind CSS v4 with Vite plugin
- React Router for client-side routing
- Custom fonts: Rajdhani for headings

---

**Built by Aayush Arya and Ashutosh Kumar**
