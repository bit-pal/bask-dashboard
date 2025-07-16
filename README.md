# Admin Dashboard

A professional admin dashboard built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Dashboard Layout**: Clean, responsive design with top navigation and sidebar
- **Professional UI**: Built with Tailwind CSS for consistent styling
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Component-Based Architecture**: Reusable components for easy maintenance

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Dashboard home page
│   ├── users/             # Users management page
│   ├── analytics/         # Analytics page
│   └── settings/          # Settings page
├── components/
│   └── layout/            # Layout components
│       ├── DashboardLayout.tsx
│       ├── TopNavigation.tsx
│       └── Sidebar.tsx
└── styles/
    └── globals.css        # Global styles
```

## Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Run the development server**:
   ```bash
   pnpm dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Available Pages

- **Dashboard** (`/`): Overview with stats and recent activity
- **Users** (`/users`): User management interface
- **Analytics** (`/analytics`): Data visualization and metrics
- **Reports** (`/reports`): Report generation (to be implemented)
- **Calendar** (`/calendar`): Event scheduling (to be implemented)
- **Settings** (`/settings`): Application configuration

## Customization

The dashboard is designed to be easily customizable:

- **Colors**: Update the Tailwind configuration in `tailwind.config.ts`
- **Layout**: Modify components in `src/components/layout/`
- **Navigation**: Update the navigation array in `src/components/layout/Sidebar.tsx`
- **Pages**: Add new pages in the `src/app/` directory

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **React**: UI library

## Development

- **Linting**: `pnpm lint`
- **Type checking**: `pnpm typecheck`
- **Testing**: `pnpm test`
- **Formatting**: `pnpm format`

## License

This project is open source and available under the [MIT License](LICENSE).
