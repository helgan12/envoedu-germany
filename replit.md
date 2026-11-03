# Overview

Envoedu Germany is a comprehensive educational consultancy web application designed specifically for Turkish students seeking higher education opportunities in Germany. The platform provides end-to-end consulting services including university selection, application preparation, visa processing, language training, and settlement support. Built as a full-stack web application, it features a modern React frontend with a Node.js/Express backend, offering both informational content and consultation request functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with support for single-page application navigation
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible and customizable interface elements
- **Styling**: Tailwind CSS with CSS variables for theming, supporting both light and dark modes
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript throughout the stack for consistency and type safety
- **API Design**: RESTful endpoints with proper HTTP status codes and JSON responses
- **Error Handling**: Centralized error handling middleware with consistent error responses
- **Development**: Hot module replacement and development middleware integrated with Vite

## Data Storage
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing purposes
- **Data Validation**: Zod schemas shared between frontend and backend for consistent validation

## Component Organization
- **Shared Types**: Common TypeScript types and schemas in `/shared` directory
- **UI Components**: Modular component structure with reusable UI elements
- **Page Components**: Dedicated pages for different sections (home, services, about, contact, etc.)
- **Layout Components**: Separate layout components for header, footer, and navigation

## Authentication & Security
- **Session Management**: Connect-pg-simple for PostgreSQL-based session storage
- **CORS**: Configured for cross-origin requests in development
- **Environment Variables**: Secure configuration management for database URLs and API keys

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect support

## Development Tools
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **Error Overlay**: Runtime error modal for development debugging
- **Cartographer**: Replit-specific development tooling

## UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets including social media icons
- **Google Fonts**: Inter and Merriweather fonts for typography
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing

## Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Hookform Resolvers**: Integration layer for Zod validation
- **Zod**: Runtime type validation and schema definition

## State Management
- **TanStack Query**: Server state management with caching and synchronization
- **React Context**: Client-side state management for UI components

## Build and Development
- **Vite**: Fast build tool with hot module replacement
- **esbuild**: Fast JavaScript bundler for production builds
- **TypeScript**: Static type checking and compilation
- **ESLint**: Code linting and style enforcement

## Deployment
- **Static File Serving**: Express.js static file middleware for production
- **Process Management**: NODE_ENV-based environment configuration
- **Database Migrations**: Drizzle Kit for schema updates and version control