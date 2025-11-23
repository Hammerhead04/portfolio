# Professional Portfolio Website

A modern, responsive portfolio website built with React and TypeScript, showcasing professional experience, skills, projects, and achievements. This static site is optimized for performance and designed for seamless deployment across various hosting platforms.

![Portfolio Preview](public/assets/developer-8764521_1280%202.jpg)

## 🚀 Features

- **🎨 Responsive Design** - Fully responsive layout optimized for mobile, tablet, and desktop devices
- **⚡ Fast Performance** - Built as a static site with Vite for optimal loading speeds
- **🧩 Component-Based Architecture** - Modular React components using TypeScript for type safety
- **📱 Mobile-First Navigation** - Collapsible hamburger menu for mobile and tablet devices
- **🎯 Smooth Scrolling** - Seamless navigation between portfolio sections
- **💼 Project Showcase** - Detailed project presentations with descriptions, technologies, and links
- **🛠️ Skills Visualization** - Categorized skill sets with visual indicators and icons
- **📅 Experience Timeline** - Chronological display of professional work experience
- **📧 Contact Form** - Functional contact form with client-side validation using React Hook Form and Zod
- **📄 Resume Download** - Direct download option for resume/CV
- **🎭 Interactive UI** - Engaging UI components with hover effects and smooth animations
- **📊 Data-Driven Content** - All content managed through JSON files for easy updates

## 🛠️ Tech Stack

### Core Technologies
- **React 18** - UI library with TypeScript
- **Vite** - Next-generation frontend build tool
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### UI & Components
- **Shadcn UI** - High-quality component library
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful icon library
- **React Icons** - Additional icon sets

### Form & Data Management
- **React Hook Form** - Performant form library
- **Zod** - TypeScript-first schema validation
- **TanStack Query (React Query)** - Powerful data synchronization

### Routing & Utilities
- **Wouter** - Lightweight routing solution
- **Tailwind Merge** - Utility for merging Tailwind classes
- **Class Variance Authority** - Component variant management

## 📁 Project Structure

```
portfolio/
├── client/
│   └── src/
│       ├── components/          # React components
│       │   ├── ui/              # Reusable UI components (Shadcn)
│       │   ├── About.tsx        # About section component
│       │   ├── Contact.tsx      # Contact form component
│       │   ├── Education.tsx    # Education section
│       │   ├── Experience.tsx   # Work experience timeline
│       │   ├── Footer.tsx       # Footer component
│       │   ├── Header.tsx       # Navigation header
│       │   ├── Hero.tsx         # Hero section
│       │   ├── Projects.tsx      # Projects showcase
│       │   ├── ResumeDownload.tsx # Resume download component
│       │   ├── RetroComputer3D.tsx # 3D visual component
│       │   └── Skills.tsx       # Skills display
│       ├── pages/               # Page components
│       │   ├── Portfolio.tsx    # Main portfolio page
│       │   └── not-found.tsx    # 404 page
│       ├── hooks/               # Custom React hooks
│       │   ├── use-mobile.tsx   # Mobile detection hook
│       │   └── use-toast.ts     # Toast notification hook
│       ├── lib/                 # Utilities and configurations
│       │   ├── queryClient.ts   # React Query configuration
│       │   └── utils.ts         # Helper functions
│       ├── attached_assets/     # Local assets
│       ├── App.tsx              # Root component
│       ├── main.tsx             # Application entry point
│       ├── types.ts             # TypeScript type definitions
│       ├── index.css            # Global styles
│       └── styles.css           # Additional styles
├── public/
│   ├── assets/                  # Static assets
│   │   ├── abhay_resume.pdf     # Resume file
│   │   └── developer-8764521_1280 2.jpg # Preview image
│   └── data/                    # Content data files
│       ├── experiences.json     # Work experience data
│       ├── projects.json        # Projects data
│       └── skills.json          # Skills data
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── vite.config.ts               # Vite configuration
├── postcss.config.js            # PostCSS configuration
└── theme.json                   # Theme configuration
```

## 📊 Content Management

The portfolio content is managed through JSON files located in `public/data/`:

### `projects.json`
Contains portfolio project information:
- Project title and description
- Technologies used
- Project links (live demo, GitHub)
- Featured images

### `experiences.json`
Contains professional work experience:
- Company name and position
- Employment dates
- Job descriptions and achievements
- Location information

### `skills.json`
Contains technical skills information:
- Skill categories (Frontend, Backend, Tools, etc.)
- Individual skills with proficiency levels
- Skill icons and visual indicators

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (outputs to `dist/` directory)
- `npm run preview` - Preview production build locally
- `npm run check` - Run TypeScript type checking

## 🎨 Customization

### Updating Content

Edit the JSON files in `public/data/` to update portfolio content:

- **Projects**: Modify `public/data/projects.json`
- **Experience**: Update `public/data/experiences.json`
- **Skills**: Edit `public/data/skills.json`

### Styling

- **Tailwind Classes**: Modify Tailwind utility classes in component files
- **Theme Colors**: Update `theme.json` for color scheme changes
- **Global Styles**: Edit `client/src/index.css` for global styling

### Components

- **Add Components**: Create new components in `client/src/components/`
- **Modify Components**: Edit existing components in `client/src/components/`
- **UI Components**: Use Shadcn UI components from `client/src/components/ui/`

## 🌐 Deployment

This static site can be deployed to any static hosting service:

### Build for Production

```bash
npm run build
```

This generates optimized static files in the `dist/` directory.

### Deployment Options

- **Vercel** - Recommended for automatic deployments from Git
- **Netlify** - Easy deployment with continuous integration
- **GitHub Pages** - Free hosting for public repositories
- **Cloudflare Pages** - Fast global CDN
- **Firebase Hosting** - Google's hosting solution

Most platforms support automatic builds and deployments when connected to your Git repository.

### Replit Deployment

This project is compatible with Replit:

1. Fork the Repl to your account
2. Click "Run" to start the development server
3. For production builds, run `npm run build` in the Replit shell

## 🐛 Troubleshooting

### Common Issues

**Missing Dependencies**
```bash
npm install
```

**TypeScript Errors**
- Run `npm run check` to identify type errors
- Ensure all imports are correctly typed

**Build Failures**
- Check console for specific error messages
- Verify all dependencies are installed
- Ensure TypeScript configuration is correct

**Static Assets Not Loading**
- Verify files are in the `public/` directory
- Check file paths in component code
- Ensure asset paths use correct relative paths

**Port Already in Use**
- Change the port in `vite.config.ts` or use `npm run dev -- --port <port-number>`

## 🔮 Future Enhancements

- [ ] Project filtering by technology or category
- [ ] Blog section for technical articles
- [ ] Detailed project case studies with image galleries
- [ ] GitHub API integration for dynamic repository information
- [ ] Dark/light theme toggle
- [ ] Multi-language localization support
- [ ] Enhanced animations and micro-interactions
- [ ] Performance analytics and monitoring
- [ ] SEO optimization improvements
- [ ] Progressive Web App (PWA) support

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Anirudh Vasudev**

- Portfolio: [Live Site URL]
- LinkedIn: [LinkedIn Profile]
- GitHub: [GitHub Profile]

---

Built with ❤️ using React, TypeScript, and Vite
