# Color Scheme Update - Consulting Theme Style

## Overview
The color scheme has been updated from blue to a professional consulting theme style with dark charcoal and gold accents, matching the design aesthetic of consulting websites.

## New Color Palette

### Primary Colors (Dark Charcoal)
- **Light Mode**: `#1a1a1a` - Professional dark charcoal
- **Dark Mode**: `#2c2c2c` - Lighter charcoal for dark mode
- **Usage**: Main brand color, buttons, headers, primary text

### Secondary Colors (Gold/Amber)
- **Light Mode**: `#d4af37` - Professional gold
- **Dark Mode**: `#f4a460` - Lighter gold/amber for dark mode
- **Usage**: Accent color, hover states, highlights, call-to-action elements

## Updated Components

### Header/Navigation
- Transparent background when over slider (home page)
- White text on transparent background
- Switches to solid background with dark text when scrolled
- Gold accent on hover states

### Buttons
- Primary buttons: Dark charcoal background
- Accent buttons: Gold background
- Hover states use gold accents

### Links & Text
- Primary text: Dark charcoal
- Accent/hover: Gold
- Active states: Gold background

### Cards & Sections
- Border hover: Gold accent
- Icon colors: Gold accents
- Badge colors: Dark charcoal

## Files Updated

1. **tailwind.config.js** - Updated primary and secondary color definitions
2. **All component CSS files** - Replaced blue color references with new palette:
   - `hero-slider.component.css`
   - `header.component.css`
   - `footer.component.css`
   - `services-section.component.css`
   - `news-section.component.css`
   - `mission-values.component.css`
   - `featured-case.component.css`
   - `stats-section.component.css`
   - `testimonials-section.component.css`
   - `why-choose-us.component.css`
   - `team-slider.component.css`
   - `clients-slider.component.css`

## Header Positioning

### Home Page
- Header is now **inside the hero slider** as an overlay
- Transparent background with white text
- Becomes solid with background when scrolled

### Other Pages
- Header appears at the top of the page (normal position)
- Solid background from the start
- Dark text on light background

## Color Usage Guidelines

### When to Use Primary (Dark Charcoal)
- Main buttons
- Headers and navigation
- Primary text
- Card borders
- Active states

### When to Use Secondary (Gold)
- Hover states
- Accent elements
- Call-to-action highlights
- Icon colors
- Link hover states
- Badge backgrounds

## Testing Checklist

- [ ] Home page slider with transparent header overlay
- [ ] Header becomes solid when scrolling on home page
- [ ] Other pages show header at top with solid background
- [ ] All buttons use new color scheme
- [ ] Hover states show gold accents
- [ ] Links and text use appropriate colors
- [ ] Dark mode colors are correct
- [ ] All interactive elements have proper hover states
