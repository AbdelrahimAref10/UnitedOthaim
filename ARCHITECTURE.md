# United Othaim Website - Architecture Documentation

## Overview

This is a modern Angular 21 application built with standalone components, following Clean Architecture principles with Container/Presentational pattern.

## Project Structure

```
src/
├── app/
│   ├── core/                    # Core services, models, tokens
│   │   ├── services/            # Singleton services (I18n, Theme, API)
│   │   ├── models/              # Domain models
│   │   ├── tokens/              # Injection tokens
│   │   └── core.providers.ts     # Core providers configuration
│   │
│   ├── shared/                   # Reusable components, directives, pipes
│   │   ├── components/          # Presentational components
│   │   ├── directives/          # Custom directives
│   │   └── pipes/               # Custom pipes
│   │
│   ├── features/                 # Feature modules
│   │   ├── home/                # Home feature
│   │   ├── about/               # About feature
│   │   ├── sectors/             # Sectors feature
│   │   ├── clients/             # Clients feature
│   │   ├── team/                # Team feature
│   │   └── contact/             # Contact feature
│   │
│   ├── app.routes.ts             # Main routing configuration
│   ├── app.config.ts             # App configuration
│   └── app.component.ts         # Root component
│
├── assets/
│   └── i18n/                    # Translation files (ar/en)
│
└── styles/                      # Global styles
    ├── main.css                 # Tailwind imports
    └── theme.css                # Theme variables
```

## Architecture Patterns

### Container/Presentational Pattern

- **Pages (Container)**: Smart components with logic and data fetching
  - Located in `features/*/pages/`
  - Handle data fetching, state management
  - Example: `home.page.ts`

- **Components (Presentational)**: Dumb UI-only components
  - Located in `features/*/components/` and `shared/components/`
  - Receive data via `@Input()`, emit events via `@Output()`
  - Example: `sector-card.component.ts`

### CSS Naming Convention (BEM-like)

All CSS classes follow BEM-like naming:
```html
<div class="product">
  <div class="product_header">
    <h1 class="product_header-title"></h1>
  </div>
  <div class="product_content">
    <p class="product_content-text"></p>
  </div>
</div>
```

## Key Features

### 1. Internationalization (i18n)

- **Service**: `I18nService` in `core/services/i18n.service.ts`
- **Pipe**: `TranslatePipe` in `shared/pipes/translate.pipe.ts`
- **Translation Files**: JSON files in `assets/i18n/{ar|en}/`
- **RTL Support**: Automatic direction switching for Arabic

### 2. Theme System

- **Service**: `ThemeService` in `core/services/theme.service.ts`
- **Light/Dark Mode**: Toggle via `ThemeToggleComponent`
- **Custom Colors**: Defined in `tailwind.config.js`
- **CSS Variables**: Theme variables in `styles/theme.css`

### 3. Routing

- **Lazy Loading**: Features are lazy-loaded via route configuration
- **Routes**: Defined in each feature's `*.routes.ts` file
- **Main Routes**: Configured in `app.routes.ts`

### 4. Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Theme**: Extended color palette with light/dark variants
- **Responsive**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Custom animations defined in Tailwind config

## Services

### Core Services

1. **I18nService**: Language switching and translation management
2. **ThemeService**: Light/dark mode management
3. **ApiService**: HTTP client wrapper (for future API integration)

### Feature Services

- **HomeService**: Home page data
- **SectorsService**: Sectors data management

## Components

### Shared Components

- `HeaderComponent`: Main navigation header
- `FooterComponent`: Site footer
- `LanguageSwitcherComponent`: Language toggle
- `ThemeToggleComponent`: Theme toggle
- `PageHeaderComponent`: Reusable page header
- `SectorCardComponent`: Sector card display
- `TeamCardComponent`: Team member card
- `ContactFormComponent`: Contact form
- `LoadingSpinnerComponent`: Loading indicator

### Feature Components

Each feature has its own components in `features/{feature}/components/`

## Directives

- `AnimateOnScrollDirective`: Triggers animations on scroll
- `LazyLoadDirective`: Lazy loads images/components

## Models

Domain models in `core/models/`:
- `Sector`: Sector information
- `TeamMember`: Team member information
- `ContactForm`: Contact form data

## Translation Structure

Translation files are organized by feature:
- `common.json`: Common translations (navigation, buttons)
- `home.json`: Home page translations
- `about.json`: About page translations
- `sectors.json`: Sectors translations
- `clients.json`: Clients translations
- `team.json`: Team translations
- `contact.json`: Contact translations

## Tailwind Configuration

Custom colors organized by purpose:
- `primary`: Brand colors (light/dark)
- `secondary`: Accent colors (light/dark)
- `background`: Page backgrounds
- `surface`: Card/container backgrounds
- `text`: Text colors
- `border`: Border colors
- `button`: Button variants
- `card`: Card styling
- `sector`: Sector-specific colors

## Development

### Running the Application

```bash
npm start
```

### Building for Production

```bash
npm run build
```

### Testing

```bash
npm test
```

## Best Practices

1. **Standalone Components**: All components are standalone
2. **Signals**: Use Angular signals for reactive state
3. **Dependency Injection**: Use `inject()` function for DI
4. **Type Safety**: Strong typing with TypeScript interfaces
5. **Accessibility**: ARIA labels and semantic HTML
6. **Performance**: Lazy loading, code splitting
7. **Responsive**: Mobile-first design approach

## Future Enhancements

- Backend API integration
- Image optimization
- SEO improvements
- Analytics integration
- Advanced animations
- PWA support
