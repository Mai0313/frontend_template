<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

**Please update `.github/copilot-instructions.md` whenever code is modified so that others can quickly understand the project status**

# Frontend Template

- A modern Frontend Template built with HeroUI framework for fast project scaffolding
- Uses `vite` and `yarn` as frontend development tools
- Minimalist navigation containing only the brand LOGO that returns to `Home` page
- Clean single-page template structure, ready for customization
- Infrastructure setup completed with modern UI components and effects, detailed features to be implemented by developers
- You don't need to execute package installation commands, just remind developers to run `yarn add` to install necessary packages after task completion

# Project Requirements

## Core Architecture Components

### UI Component System

- **`components/primitives.ts`**: Provides TailwindCSS variant utility functions
  - `title`: Supports multiple gradient colors and sizes for title styles (violet, yellow, blue, cyan, green, pink, foreground)
  - `subtitle`: Responsive subtitle styles
  - All styles support `bg-clip-text text-transparent bg-gradient-to-b` gradient effects

### Icon System

- **`components/icons.tsx`**: Complete SVG icon component library
  - `Logo`: Brand logo icon
  - `GithubIcon`: GitHub social media icon
  - `DiscordIcon`: Discord social media icon
  - `SunFilledIcon` / `MoonFilledIcon`: Theme toggle icons
  - All icons support size customization and `IconSvgProps` type definitions

### Navigation System

- **`components/navbar.tsx`**: Main navigation bar component
  - Responsive design supporting mobile and desktop layouts
  - Integrated theme toggle functionality
  - Brand LOGO links to homepage using `buildPath()` for multi-environment deployment support
  - Social media icon links (GitHub, Discord)
  - All internal navigation links automatically support root path prefix
  - Clean minimalist design with no additional navigation items

### Layout System

- **`layouts/default.tsx`**: Default page layout component
  - Contains fixed `Navbar` navigation bar
  - Responsive container layout (`max-w-7xl mx-auto`)
  - Flexible height design (`flex-grow pt-16`)

### Theme System

- **`components/theme-switch.tsx`**: Dark/light theme toggle component
  - Uses `@heroui/use-theme` hook to manage theme state
  - Prevents SSR hydration mismatch issues
  - Supports keyboard accessibility
  - **Enhanced Theme Integration**: All visual effects (Particles) now correctly respond to theme changes
  - **Automatic Color Adaptation**: Components automatically adapt colors based on current theme
  - **Improved Stability**: Enhanced component cleanup and reset mechanisms for theme transitions

### Configuration System

- **`config/site.ts`**: Website core configuration
  - Empty navigation item definitions for clean template start
  - Social media link configuration (`github`, `discord`)
  - Unified website name and description management using centralized environment access
  - Updated to use dynamic path construction with `buildPath()` function
  - Uses `env.WEBSITE_TITLE` from centralized environment management

### Effects Component System

- **`components/SplitText/SplitText.tsx`**: Split text animation component for homepage title display
  - Self-contained component folder structure for better organization
- **`components/Orb/Orb.tsx`**: 3D sphere background effects component using OGL 3D graphics library
  - **`components/Orb/Orb.css`**: Component-specific styles for Orb effects
  - Integrated TypeScript and CSS files in dedicated folder structure
- **`components/Particles/Particles.tsx`**: Background particle system with enhanced theme switching support
  - **`components/Particles/Particles.css`**: Component-specific styles for particle effects
  - Uses `useTheme` hook for theme awareness and automatic color adaptation
  - Dynamic color selection: dark mode uses white/gray particles, light mode uses dark gray particles
  - Removed hardcoded colors in favor of automatic theme detection
  - Supports interactive effects and seamless theme transitions
  - Integrated TypeScript and CSS files in dedicated folder structure

## `Home` Page (`pages/index.tsx`)

- Uses components from `@react-spring/web` for animated page elements
- Homepage uses `Orb` as background, displays GitHub name `Mai` in the center through `Split Text`
- Uses `Particles` as background particle system, supporting theme switching and interactive effects
- Contact information displayed through icon links in `Navbar`: Discord, Github

* `Split Text` can be used via `import SplitText from "@/components/SplitText/SplitText";`
* `Orb` can be used via `import Orb from '@/components/Orb/Orb';`
* `Particles` can be used via `import Particles from '@/components/Particles/Particles';`
* Gradient text effects can be achieved using the `title` utility from `@/components/primitives`

## Utility Functions System

### Path Utility Functions

- **`utils/pathUtils.ts`**: Custom ROOT PATH support utility functions
  - `getRootPath()`: Gets root path from `VITE_ROOT_PATH` environment variable, defaults to '/'
  - `buildPath(path)`: Constructs complete path including root path prefix (e.g., `/my-app/home`)
  - `getBasename()`: Gets React Router's basename configuration
  - Supports path configuration for different deployment environments (root directory, subdirectory, GitHub Pages, etc.)

### Environment Variable Management

- **`utils/env.ts`**: Centralized environment variable management system
  - **Required Environment Variables**: `VITE_WEBSITE_TITLE` - throw error if not provided
  - **Optional with Defaults**: `VITE_ROOT_PATH` (defaults to "/"), `VITE_OPENAI_API_KEY` (defaults to null), `VITE_OPENAI_MODEL` (defaults to null)
  - **Validation on Load**: Automatically validates all required environment variables when module is imported
  - **Type-Safe Access**: Exports `env` object with strongly typed environment variable values
  - **Helper Functions**: Provides `envHelpers` with utility methods:
    - `getRootPath()`: Get root path with fallback
  - **Error Handling**: Clear error messages when required variables are missing
  - **Centralized Import**: All components now import from `@/utils/env` instead of direct `import.meta.env` access
  - **Eliminates Duplication**: Single source of truth for all environment variable logic
  - **Simplified Configuration**: Removed dependencies that required complex setup for clean template experience

## Styles and Type System

### CSS Utility Classes

- **`styles/globals.css`**: Global style definitions
  - Contains Tailwind CSS base styles
  - Custom `line-clamp-1`, `line-clamp-2`, `line-clamp-3` utility classes
  - Used for text truncation and ellipsis display

### Special Effects Styles

- Component-specific styles are now co-located with their TypeScript files in dedicated folders:
  - **`components/Orb/Orb.css`**: Orb component specific styles
  - **`components/Particles/Particles.css`**: Particles component specific styles

### TypeScript Type Definitions

- **`types/index.ts`**: Core type definitions
  - `IconSvgProps`: SVG icon component property types
- **`types/ogl.d.ts`**: OGL 3D graphics library type declarations
- **`vite-env.d.ts`**: Vite environment variable type definitions
  - Contains TypeScript type definitions for project environment variables
  - `VITE_WEBSITE_TITLE`, `VITE_ROOT_PATH`, `VITE_OPENAI_API_KEY`, `VITE_OPENAI_MODEL`
  - **Simplified Environment Support**: Removed complex environment variables for clean template experience
  - **Centralized Management**: All environment variable access now goes through `@/utils/env` for type safety and validation

### Application Core

- **`App.tsx`**: Main application component, contains routing configuration
- **`main.tsx`**: Application entry point, renders root component
- **`provider.tsx`**: HeroUI theme provider configuration, supports dark mode

# Current Status (Updated June 11, 2025)

The Frontend Template project is **ready for use** with the following major features:

## Core Features Available

- ✅ **Complete Home Page**: Beautiful landing page with Orb background, SplitText animations, and particle effects
- ✅ **Advanced Theme System**: Seamless dark/light mode switching across all visual effects including Particles.
- ✅ **Multi-Environment Deployment**: Custom ROOT PATH support for various deployment scenarios (GitHub Pages, subdirectories)
- ✅ **Professional UI System**: Modern UI using HeroUI components with complete mobile/desktop compatibility
- ✅ **Type Safety**: Complete TypeScript coverage with comprehensive environment variable definitions
- ✅ **AI Chat Assistant**: Optional OpenAI-powered chat bot with page context awareness and streaming responses
- ✅ **Clean Template Structure**: Minimalist navigation and single-page layout ready for customization

## Technical Quality

- ✅ **ESLint Compliance**: 100% code quality standard with no warnings or errors
- ✅ **Component Architecture**: Well-structured, maintainable codebase with clear separation of concerns
- ✅ **Performance Optimized**: Efficient rendering and optimized component loading
- ✅ **Documentation**: Comprehensive inline documentation for template usage
- ✅ **Centralized Environment Management**: Unified environment variable system with validation, type safety, and clear error handling

## Template Features

- ✅ **Easy Customization**: Clean structure ready for developers to add their own features
- ✅ **Modern Development**: Latest TypeScript, Vite, and HeroUI versions
- ✅ **Visual Polish**: Smooth animations, consistent design language, and professional appearance
- ✅ **Accessibility**: Keyboard navigation, screen reader support, and proper ARIA labels
- ✅ **Optional AI Integration**: Context-aware AI assistant that can be enabled with OpenAI configuration
- ✅ **Flexible Deployment**: Multi-environment support for various hosting scenarios

The template is ready for developers to build upon with all infrastructure components in place.
