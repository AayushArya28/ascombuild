# ASCOM Buildcon Website

A modern, responsive website for ASCOM BUILDCON Pvt. Ltd., a specialized structural engineering and construction consultancy firm founded by Ex IIT Professors and Alumni, headquartered in Varanasi, Uttar Pradesh.

## 🏗️ About ASCOM BUILDCON

ASCOM BUILDCON is dedicated to the scientific rehabilitation, strengthening, and repair of civil infrastructure across India. Founded on the principle of "Renascence of Structures Through Scientific Innovation," the company combines IIT (BHU) academic excellence with practical field expertise.

**Tagline**: *Strengthen Bridges, Preserve Structural Lifelines, Minimize Demolition*

### Key Achievements
- 75+ major projects across 12 states in India
- 85%+ client retention rate
- 36+ years of combined IIT expertise
- Saved 10+ major bridges and 20+ buildings through retrofitting
- Preserving natural resources by minimizing demolition

## 🚀 Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router DOM 7.11.0
- **Styling**: Tailwind CSS 4.1.18
- **Deployment**: Vercel

## ✨ Features

- **Responsive Design**: Fully responsive across all devices
- **Dark Mode**: Built-in dark/light theme toggle with smooth transitions
- **Modern UI**: Clean, professional design with smooth animations and hover effects
- **Dynamic Content**: Real-time project filtering and category-based navigation
- **Form Validation**: Client-side validation for contact and career forms
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Optimized with Vite for lightning-fast builds
- **Animated Stats**: CountUp animations for key metrics

## 📁 Project Structure

```
ascombuild/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, logos, and media files
│   ├── components/     # Reusable components
│   │   ├── home/      # Homepage components
│   │   │   ├── AboutUs.jsx
│   │   │   ├── Clients.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── MarketServed.jsx
│   │   │   ├── ProjectLifeCycle.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── SocialMedia.jsx
│   │   │   └── Stats.jsx
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
│   ├── App.jsx        # Main app component with routing
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles and Tailwind directives
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
   Server will run at `http://localhost:5173/`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

6. **Lint code**
   ```bash
   npm run lint
   ```

## 📄 Available Pages

### Main Pages
- **Home** (`/`) - Landing page with hero section, stats, services overview
- **About Us** (`/about-us`) - Company history, mission, vision, core values, strategic location
- **Leadership** (`/leadership`) - Complete team profiles of all 5 founding members
- **Services** (`/services`) - 16 specialized services with detailed descriptions
- **Projects** (`/projects`) - 43 actual completed projects with category filtering
- **Contact Us** (`/contact-us`) - Contact form and office information

### Service-Specific Pages
- **Testing** (`/testing`) - Structural testing and NDT services
- **Consultancy** (`/consultancy`) - Audit, inspection, and consultancy services
- **Structural Design** (`/structural-design`) - Design and FEA services
- **Bridges** (`/bridges`) - Bridge rehabilitation and strengthening
- **Skyscrapers** (`/skyscrapers`) - High-rise building projects

### Additional Pages
- **Awards** (`/awards`) - Recognition and achievements
- **Clients** (`/clients`) - Client testimonials and partnerships
- **Careers** (`/careers`) - Job opportunities and application form

## 🎯 Key Content Updates (Latest)

### Leadership Team
Complete profiles for all 5 founding members:
1. **Dr. (Prof) Veerendra Kumar** - Founder & Director (Ex IIT BHU Professor)
2. **Dr. Anjani Kumar Shukla** - Managing Director (Ph.D. IIT BHU)
3. **Dr. Dheeresh Nayak** - Design Expert (Ph.D. IIT BHU)
4. **Mr. Rajesh Ranjan Srivastava** - Execution Expert (MBA IIM Calcutta)
5. **Mr. Raghavendra Kumar** - Execution Expert (M.Tech.)

### Services (16 Specialized Offerings)
- Structural Audit & Inspection
- Non-Destructive Testing (NDT)
- Structural Health Monitoring (SHM)
- Static & Dynamic Load Testing
- Structural Retrofitting & Strengthening
- Bridge Rehabilitation
- Structural Design & Analysis
- Proof Consultancy
- Fire Damage Assessment & Repair
- Seismic Retrofitting
- Heritage Structure Preservation
- Concrete Repair & Restoration
- Carbon Fiber Reinforcement (CFRP)
- Foundation Strengthening
- Waterproofing Solutions
- Corrosion Study & Protection

### Projects (43 Actual Projects)
Organized by categories:
- **Bridges** (14 projects) - Including Old Chopan Bridge, Shashtri Setu
- **Healthcare** (4 projects) - Sir Sunderlal Hospital BHU, KGMU
- **Government Buildings** (6 projects) - Railways HQ, RDSO Campus
- **ROB Projects** (6 projects) - Load testing and design audits
- **Fire Damaged** (3 projects) - Building rehabilitation
- **Water Structures** (3 projects) - Tanks and settling basins
- **Infrastructure** (3 projects) - Including ₹600 CR Chilla Mayur Vihar Corridor
- **Heritage & Tourism** (2 projects) - Tourist lodge preservation
- **Residential** (1 project) - Complex audits
- **Load Testing** (1 project) - Bridge verification

## 🎨 Design Features

### Theme
- **Primary Color**: Red (#DC2626)
- **Dark Mode**: Full dark mode support with smooth transitions
- **Typography**: Rajdhani font for headings, system fonts for body
- **Animations**: Smooth hover effects, fade-ins, and CountUp stats

### Navigation
- Fixed navbar with scroll detection
- Nested dropdown menus for services
- Mobile-responsive hamburger menu
- Smooth hover effects with 300ms delay

### Forms
- **Contact Form**: Name, Email, Subject, Message (all required)
- **Career Form**: Comprehensive application with validation
  - 10-digit mobile number validation
  - Email format validation
  - Resume upload (PDF/Word only)
  - 6-digit PIN code validation

### Interactive Elements
- Scroll-to-top button
- Animated statistics counters
- Project category filtering
- Hover effects on cards and buttons
- Smooth page transitions

## 🚀 Deployment

The site is deployed on Vercel with automatic deployments on push to the main branch.

### Vercel Configuration
The `vercel.json` file handles client-side routing by redirecting all routes to `index.html`.

## 📞 Contact Information

### Registered Office
- **Address**: 202, Vrindavan Residency, Nuawn, Varanasi - 221011, India
- **CIN No.**: U45309UP2022PTC158277

### Branch Office
- **Location**: Noida, NCR (National Capital Region)

### Contact Details
- **Mobile**: +91 9415 872 871
- **Phone**: 0542 4013470
- **Email**: info@ascombuild.com, anjani@ascombuild.com

## 🏆 Company Highlights

### Academic Excellence
- Founded by Ex IIT (BHU) Professor and Head
- Team includes 3 Ph.D. holders from IIT (BHU)
- 75+ publications in ASCE and Scopus-indexed journals

### Technical Capabilities
- AI-based testing instruments from world-class manufacturers
- Advanced FEA software (ANSYS, ABAQUS, SAP2000, STAAD Pro)
- Real-time structural health monitoring systems
- Comprehensive NDT and load testing services

### Environmental Impact
- Saved ~10 major bridges and 20 buildings through retrofitting
- Preserving natural resources (sand, cement, minerals)
- Minimizing demolition and promoting rehabilitation

## 🔧 Development Notes

### Technologies
- **React 19**: Latest React features with improved performance
- **Vite 7**: Lightning-fast HMR (Hot Module Replacement)
- **Tailwind CSS v4**: Utility-first CSS with Vite plugin
- **React Router v7**: Client-side routing with nested routes
- **ESLint**: Code quality and consistency

### Code Quality
- ESLint configured for React best practices
- Consistent component structure
- Reusable components and layouts
- Responsive design patterns
- Dark mode support throughout

### Performance Optimizations
- Code splitting with React Router
- Lazy loading for images
- Optimized build with Vite
- Minimal bundle size
- Fast page load times

## 🤝 Contributing

This is a private project for ASCOM BUILDCON Pvt. Ltd.

## 📝 License

© ASCOM 2022. All rights reserved.

---

**Built by Aayush Arya and Ashutosh Kumar**

**Last Updated**: February 2026
