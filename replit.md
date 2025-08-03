# A&C Taller Automotriz

## Overview

A&C Taller Automotriz is a full-stack web application for an automotive service business based in Medellín, Colombia. The application serves as a business website showcasing services, company information, and provides a contact form for potential customers to request quotes and services. The site is built with a modern React frontend and Express.js backend, featuring a responsive design optimized for automotive service businesses.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing, handling home page and 404 error pages
- **UI Framework**: shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom automotive-themed color palette and responsive design
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints with proper error handling and request logging middleware
- **Storage**: In-memory storage implementation with interface for future database integration
- **Validation**: Zod schemas for runtime type checking and data validation
- **Development**: Hot reloading with Vite integration for seamless development experience

### Data Storage Solutions
- **Current Implementation**: In-memory storage using Map data structure for contact requests
- **Database Schema**: Drizzle ORM with PostgreSQL schema definitions ready for production deployment
- **Data Models**: Contact requests with fields for name, phone, vehicle, service type, and optional message
- **Migration Support**: Drizzle Kit configured for database schema migrations

### Authentication and Authorization
- **Current State**: No authentication implemented (business website focus)
- **Session Management**: Connect-pg-simple configured for future session storage needs
- **Security**: CORS and basic security headers ready for production deployment

### External Dependencies
- **Database**: Neon PostgreSQL (configured but not actively used)
- **UI Components**: Radix UI primitives for accessible component foundation
- **Icons**: Lucide React for consistent iconography
- **Development Tools**: Replit integration with error overlay and cartographer for enhanced development experience
- **Build Pipeline**: ESBuild for production server bundling, Vite for client bundling

The architecture follows a clean separation of concerns with shared schemas between frontend and backend, enabling type safety across the full stack. The application is designed for easy deployment and scaling, with database integration ready for production use.