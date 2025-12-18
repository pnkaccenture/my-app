# React Router Configuration Guide

## Overview

Your application now has full routing configured with 4 sample pages and a responsive navigation bar.

## Installed Package

- **react-router-dom** `^6.x.x` - Client-side routing library for React

## File Structure

```
src/
├── pages/
│   ├── HomePage.jsx           # Home page with counter (/)
│   ├── AboutPage.jsx          # About page with features (/about)
│   ├── ServicesPage.jsx       # Services page with 4 service cards (/services)
│   └── ContactPage.jsx        # Contact page with form (/contact)
├── components/
│   ├── Navigation.jsx         # Navigation bar with active route highlighting
│   ├── Navigation.css         # Navigation styling
│   ├── LanguageSwitcher.jsx   # Language selector dropdown
│   └── LanguageSwitcher.css   # Language switcher styling
├── App.jsx                    # Main app with Router setup
└── main.jsx                   # Entry point
```

## Routes Configuration

| Route       | Page       | Component        |
| ----------- | ---------- | ---------------- |
| `/`         | Home       | HomePage.jsx     |
| `/about`    | About Us   | AboutPage.jsx    |
| `/services` | Services   | ServicesPage.jsx |
| `/contact`  | Contact Us | ContactPage.jsx  |

## Features

### Navigation Bar

- Sticky navigation at the top
- Active route highlighting with blue color and underline
- Responsive toggle button on mobile devices
- Icons for each navigation item
- Brand logo with app name

### Pages

1. **HomePage** - Welcome page with counter functionality
2. **AboutPage** - Information about the app with features list
3. **ServicesPage** - Grid layout showcasing 4 services
4. **ContactPage** - Contact information and contact form

### Internationalization

- All pages support English and French
- Language switcher in top-right corner
- Language preference persists in localStorage

## Adding New Routes

To add a new page:

1. **Create a new page component** in `src/pages/`:

```jsx
import { useTranslation } from "react-i18next";

export function NewPage() {
  const { t } = useTranslation();

  return (
    <div className="container mt-5">
      <h1>{t("newPageTitle")}</h1>
      {/* Your content */}
    </div>
  );
}
```

2. **Import the component** in `src/App.jsx`:

```jsx
import { NewPage } from "./pages/NewPage";
```

3. **Add the route** in `src/App.jsx`:

```jsx
<Routes>
  {/* ... existing routes ... */}
  <Route path="/new-page" element={<NewPage />} />
</Routes>
```

4. **Add navigation link** in `src/components/Navigation.jsx`:

```jsx
<li className="nav-item">
  <Link className={`nav-link ${isActive("/new-page")}`} to="/new-page">
    <i className="fas fa-icon-name"></i> New Page
  </Link>
</li>
```

5. **Add translations** in `src/locales/en.json` and `src/locales/fr.json`:

```json
{
  "newPageTitle": "My New Page"
}
```

## Navigation Component Features

- **Active Route Highlighting** - Current page is highlighted with blue color
- **Icons** - Each menu item has an icon from Font Awesome
- **Responsive** - Hamburger menu on mobile devices
- **Multilingual** - All text supports language switching
- **Smooth Transitions** - Hover effects for better UX

## Using Links in Pages

To navigate between pages:

```jsx
import { Link } from "react-router-dom";

<Link to="/about">Go to About</Link>;
```

Or using the useNavigate hook:

```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
navigate("/about");
```

## Starting the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```
