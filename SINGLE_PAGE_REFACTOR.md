# Single Page Application Refactor

## Overview
The application has been refactored from a multi-page structure to a single-page application (SPA) with smooth scroll navigation. All main sections (About, Clients, Team, Contact) are now part of the home page, and navigation uses smooth scrolling to jump to the appropriate sections.

## Changes Made

### 1. Home Page Structure
- **Added Sections**: About, Clients, Team, and Contact sections are now part of the home page
- **Section IDs**: Each section has a unique ID for anchor navigation:
  - `#about` - About Us section
  - `#clients` - Our Clients section
  - `#team` - Our Team section
  - `#contact` - Contact Us section

### 2. Navigation Updates
- **Header Navigation**: Updated to use smooth scroll navigation
- **Route Handling**: Old routes (`/about`, `/clients`, `/team`, `/contact`) now redirect to home page with fragments
- **Smooth Scroll Service**: Created `SmoothScrollService` to handle smooth scrolling to sections

### 3. Routing Changes
- **Removed Routes**: Removed separate routes for About, Clients, Team, and Contact pages
- **Redirects**: Old routes now redirect to home page with appropriate fragments
- **Sectors Route**: Kept `/sectors` route for the "View All" button functionality

### 4. Components
- **Home Page**: Now includes all sections (About, Clients, Team, Contact)
- **Section Components**: Reused existing components (CompanyHistory, TeamCard, ContactForm, ClientsSlider)
- **Page Components**: About, Clients, Team, and Contact page components are no longer used in routing but can be kept for reference

## File Changes

### New Files
- `src/app/core/services/smooth-scroll.service.ts` - Service for smooth scroll functionality

### Modified Files
- `src/app/features/home/pages/home.page.html` - Added About, Clients, Team, Contact sections
- `src/app/features/home/pages/home.page.ts` - Added imports and data for new sections
- `src/app/features/home/pages/home.page.css` - Added styles for new sections
- `src/app/shared/components/header/header.component.ts` - Updated navigation logic
- `src/app/shared/components/header/header.component.html` - Updated navigation links
- `src/app/app.routes.ts` - Updated routes to redirect to home with fragments
- `src/app/app.ts` - Added fragment handling
- `src/styles/main.css` - Added smooth scroll behavior

## Navigation Flow

### From Header
1. Click "Home" → Scrolls to top of page
2. Click "About" → Navigates to `/#about` and scrolls to About section
3. Click "Sectors" → Navigates to `/sectors` (separate page for full list)
4. Click "Clients" → Navigates to `/#clients` and scrolls to Clients section
5. Click "Team" → Navigates to `/#team` and scrolls to Team section
6. Click "Contact" → Navigates to `/#contact` and scrolls to Contact section

### From Sections
- **Services Section**: "View All" button navigates to `/sectors` page
- **Sectors Preview**: "View All" button navigates to `/sectors` page

## Section Structure

### About Section (`#about`)
- Company History component
- Values grid (Excellence, Innovation, Integrity, Sustainability)

### Clients Section (`#clients`)
- Clients slider component
- Header with title, subtitle, and description

### Team Section (`#team`)
- Team grid with team cards
- Header with title and subtitle

### Contact Section (`#contact`)
- Contact form component
- Contact information (address, phone, fax, email)

## Smooth Scroll Behavior

- **Offset**: 80px offset from top to account for fixed header
- **Duration**: Uses CSS `scroll-behavior: smooth` for native smooth scrolling
- **Fallback**: JavaScript-based smooth scroll for better browser compatibility

## Benefits

1. **Better UX**: Single-page experience with smooth transitions
2. **Faster Navigation**: No page reloads when navigating between sections
3. **SEO Friendly**: All content on one page, better for search engines
4. **Mobile Friendly**: Smooth scroll works well on mobile devices
5. **Modern Design**: Follows modern single-page application patterns

## Notes

- The sectors list page (`/sectors`) remains separate as requested for the "View All" functionality
- Old page components (AboutPage, ClientsPage, TeamPage, ContactPage) are not deleted but are no longer used in routing
- All sections maintain their original styling and functionality
- The header remains transparent on the home page and becomes solid when scrolling
