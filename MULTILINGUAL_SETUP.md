# Multilingual App Setup Guide

## What has been set up:

### 1. **Bootstrap** (`^5.3.8`)

- Bootstrap CSS and JS are imported in App.jsx
- Provides responsive design and UI components
- Used for button styling, cards, alerts, and layout

### 2. **Font Awesome** (`^4.7.0`)

- Icon library with thousands of icons
- Used in the language switcher and counter button
- Examples: `fa-globe`, `fa-plus`, `fa-info-circle`

### 3. **React i18next** (`^16.5.0` with `i18next ^25.7.3`)

- Internationalization framework for React
- Supports multiple languages
- Currently configured with English (en) and French (fr)

## File Structure:

```
src/
├── i18n.js                    # i18n configuration
├── main.jsx                   # Updated to initialize i18n
├── App.jsx                    # Updated with Bootstrap, Font-Awesome, and language switcher
├── components/
│   ├── LanguageSwitcher.jsx   # Language dropdown component
│   └── LanguageSwitcher.css   # Styling for language switcher
└── locales/
    ├── en.json               # English translations
    └── fr.json               # French translations
```

## How to Use:

### Change Language:

- Click the language dropdown button in the top-right corner
- Select "English" or "Français"
- The language preference is saved in localStorage and persists on reload

### Add New Translations:

1. Add new key-value pairs to both `src/locales/en.json` and `src/locales/fr.json`
2. Use in components with: `const { t } = useTranslation(); t('key')`

### Add More Languages:

1. Create a new JSON file in `src/locales/` (e.g., `es.json` for Spanish)
2. Add translations for all keys
3. Update `src/i18n.js` to include the new language resource
4. Add language option in `src/components/LanguageSwitcher.jsx`

### Use Font Awesome Icons:

```jsx
<i className="fas fa-icon-name"></i>
```

Available icons: https://fontawesome.io/icons/

### Use Bootstrap Components:

```jsx
<button className="btn btn-primary">Click me</button>
<div className="alert alert-info">Info message</div>
<div className="container">
  <div className="row">
    <div className="col-md-6">Content</div>
  </div>
</div>
```

## Running the App:

```bash
npm run dev
```

Your app will be available at http://localhost:5173 (or the Vite default port)
