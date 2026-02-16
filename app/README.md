# OpenClaw Next.js Application

This directory contains the Next.js-based web interface for OpenClaw, providing a modern React-based UI for the AI gateway.

## Structure

```
app/
├── layout.tsx          # Root layout with global styles
├── page.tsx            # Homepage
├── globals.css         # Global Tailwind CSS styles
├── control/
│   └── page.tsx        # Control panel for gateway management
├── docs/
│   └── page.tsx        # Documentation and resources
└── api/
    ├── status/
    │   └── route.ts    # API endpoint for status
    └── health/
        └── route.ts    # API endpoint for health check
```

## Features

- **Homepage**: Overview of OpenClaw with quick links
- **Control Panel**: Monitor gateway status and manage channels
- **Documentation**: Quick reference for getting started
- **API Routes**: RESTful endpoints for status and health checks
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Dark Mode Support**: Automatic dark/light theme switching

## Development

Start the development server:

```bash
pnpm next:dev
```

The application will be available at http://localhost:3000

## Building

Build the production application:

```bash
pnpm next:build
```

Start the production server:

```bash
pnpm next:start
```

## Technology Stack

- **Next.js 16.1.6**: React framework with App Router
- **React 19.2.4**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS 3**: Utility-first CSS framework
- **PostCSS**: CSS processing

## Integration with OpenClaw

The Next.js application is integrated with the existing OpenClaw ecosystem:

- **CLI Tool**: The CLI remains the primary interface (`openclaw` command)
- **Gateway Service**: The gateway continues to run independently
- **API Integration**: Next.js API routes can interface with the gateway
- **Build Process**: Next.js build is part of the main build pipeline

## Configuration

### TypeScript

TypeScript is configured in the root `tsconfig.json` with Next.js-specific settings:

- App Router support via `app/` directory
- React JSX transform
- Type checking for `.next/types/**/*.ts`

### Tailwind CSS

Tailwind is configured to scan all files in the `app/` directory. The configuration can be customized in `tailwind.config.ts`.

### Next.js

Next.js configuration is in `next.config.mjs`:

- Standalone output for deployment
- Server Actions enabled
- TypeScript build errors currently ignored (to be addressed)

## Future Enhancements

Potential areas for expansion:

1. **Real-time Gateway Integration**: Connect control panel to actual gateway status
2. **Channel Management**: Add/remove/configure channels via UI
3. **Message History**: View and search message logs
4. **User Authentication**: Secure access to control panel
5. **WebSocket Support**: Real-time updates for gateway events
6. **Settings Management**: Edit configuration via web UI
7. **Plugin Management**: Install and configure plugins
8. **Analytics Dashboard**: View usage statistics and metrics

## Notes

- The Next.js app coexists with the existing Vite-based UI in `ui/` directory
- Both can be used simultaneously or independently
- The Next.js build is automatically included in the main build command
- Production builds use the standalone output mode for optimal deployment
