<center>

# Frontend Template

[![React](https://img.shields.io/badge/-React_19.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/-TypeScript_5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![license](https://img.shields.io/badge/License-MIT-green.svg?labelColor=gray)](https://github.com/Mai0313/resume/tree/master?tab=License-1-ov-file)
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Mai0313/frontend_template/pulls)
[![contributors](https://img.shields.io/github/contributors/Mai0313/frontend_template.svg)](https://github.com/Mai0313/frontend_template/graphs/contributors)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMai0313%frontend_template&env=VITE_WEBSITE_TITLE,VITE_ROOT_PATH&project-name=frontend_template&repository-name=frontend_template&skippable-integrations=1)

</center>

A modern Frontend Template built with Vite, HeroUI, and advanced visual effects. Perfect for building beautiful, responsive web applications.

## Features

- **Beautiful Home Page**: Dynamic visual effects with Orb background, particle systems, and smooth animations
- **Modern UI Framework**: Built with HeroUI components and Tailwind CSS for consistent design
- **Advanced Theme System**: Seamless dark/light mode switching with theme-aware visual effects
- **Interactive Effects**: Includes Orb, Particles, and SplitText components
- **Optional AI Assistant**: OpenAI-powered chat bot with context awareness (configurable)
- **Multi-Environment Deployment**: Support for GitHub Pages, Vercel, and custom hosting
- **Modern UI**: Built with the HeroUI component library and Framer Motion animations

## Tech Stack

- [Vite](https://vitejs.dev/guide/) - Fast frontend build tool
- [HeroUI](https://heroui.com) - React UI component library
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- [Framer Motion](https://www.framer.com/motion) - React animation library
- [React Spring](https://react-spring.dev/) - Spring animation library
- [OGL](https://github.com/oframe/ogl) - Lightweight 3D graphics library

## Environment Setup

### Environment Variables

Copy `.env.example` to `.env` and configure as needed:

```bash
# Required: Website title
VITE_WEBSITE_TITLE="Your App Name"

# Optional: Custom root path for deployment
VITE_ROOT_PATH=/your-subdirectory

# Optional: OpenAI chat assistant
VITE_OPENAI_API_KEY=your_openai_api_key
VITE_OPENAI_MODEL=gpt-4
```

### Install Dependencies

It is recommended to use `yarn`:

```bash
yarn install
```

Or use `npm`:

```bash
npm install
```

### Run Development Server

```bash
yarn dev
```

Or

```bash
npm run dev
```

## Getting Started

This template provides a ready-to-use foundation for building modern web applications. The home page includes:

- **Orb Background**: Dynamic 3D sphere effect using OGL graphics library
- **Particle System**: Interactive particle effects with theme switching support
- **Split Text Animation**: Smooth text animation for headings
- **Responsive Design**: Mobile-first design with dark/light theme switching
- **AI Chat Assistant**: Optional OpenAI-powered assistant (when configured)

## Visual Effects Components

This template includes several pre-built visual effect components:

- **`Orb`**: 3D background sphere effect
- **`Particles`**: Interactive particle system
- **`SplitText`**: Text splitting animation

## Customization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Add navigation links in `src/components/navbar.tsx` if needed

### Theme Customization

HeroUI theme configuration is in `tailwind.config.js`. You can customize colors, fonts, and spacing as needed.

### Environment Configuration

The template uses a centralized environment management system in `src/utils/env.ts`. Add new environment variables by updating this file and the TypeScript definitions in `src/vite-env.d.ts`.

## Deployment

### Deploy to GitHub Pages

````bash
yarn build
yarn deploy
### Deploy to GitHub Pages

```bash
yarn build
yarn deploy
````

### Deploy to Vercel

The project is pre-configured with `vercel.json` and can be deployed directly to Vercel.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── icons.tsx       # SVG icon components
│   ├── navbar.tsx      # Navigation component
│   ├── primitives.ts   # Utility functions for styling
│   ├── theme-switch.tsx # Dark/light theme toggle
│   ├── Orb/           # 3D background effect
│   ├── Particles/     # Particle system
│   ├── SplitText/     # Text animation
├── pages/              # Page components
│   └── index.tsx       # Home page
├── utils/              # Utility functions
│   ├── env.ts         # Environment variable management
│   ├── getOpenAIResponse.ts # OpenAI API integration
│   └── pathUtils.ts   # Path utilities for deployment
└── types/              # TypeScript type definitions
    ├── index.ts       # Common type definitions
    └── ogl.d.ts      # OGL library types
```

## Development Tips

### TypeScript

The template includes comprehensive TypeScript configuration with strict type checking. All environment variables are type-safe through the centralized `env.ts` system.

### Performance

- Components are optimized for performance with proper memoization
- Visual effects are GPU-accelerated where possible
- Theme switching is smooth and doesn't cause layout shifts

### Accessibility

- Proper ARIA labels and keyboard navigation
- High contrast theme support
- Screen reader friendly

## License

Licensed under the [MIT license](https://github.com/frontio-ai/Mai/blob/main/LICENSE).
