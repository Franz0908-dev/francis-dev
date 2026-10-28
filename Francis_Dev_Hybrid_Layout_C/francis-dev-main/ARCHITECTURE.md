# FRANCIS.DEV Project Structure

```text
src/
├── app/                 # Application entry and route composition
├── components/
│   ├── cards/           # Reusable content cards
│   ├── feedback/        # Loading and error states
│   ├── forms/           # Form components
│   ├── layout/          # Global navigation and footer
│   ├── sections/        # Page section building blocks
│   ├── shared/          # Cross-page behavior components
│   └── ui/              # Design-system primitives
├── config/              # Site identity and navigation configuration
├── content/             # Portfolio copy and structured page content
├── layouts/             # Shared page layouts
├── lib/                 # Small reusable utilities
├── pages/               # Route-level page components
├── styles/              # Global animations and utility styles
├── index.css            # Tailwind entry and global styles
└── main.tsx             # Browser bootstrap
```

## Conventions

- Route-level modules live in `pages/` and are loaded lazily.
- Shared visual primitives live in `components/ui/`.
- Site-wide links and identity values are centralized in `config/`.
- Static page copy is separated from components in `content/`.
- `npm run check` is the required validation command before deployment.
