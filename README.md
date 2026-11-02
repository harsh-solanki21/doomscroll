# Doomscroll

An Expo (SDK 58) / React Native app. iOS is the main platform (iPhone only), and Android is supported.

## Requirements

- Node (version in `.nvmrc`; run `nvm use`)
- pnpm (version in the `packageManager` field of `package.json`)
- Xcode with an iOS Simulator for local iOS builds, or an EAS account for cloud builds

## Getting started

```bash
pnpm install
pnpm expo run:ios   # first time: build and install the development build on the iOS Simulator
pnpm ios            # afterwards: start Metro and open the installed build
```

The app uses a **development build** (`expo-dev-client`), not Expo Go. After you add a library with native code, rebuild with `pnpm expo run:ios` or `pnpm dlx eas-cli@latest build --profile development`.

Copy secrets into a local `.env`, which git ignores. Only variables prefixed with `EXPO_PUBLIC_` reach the app, and they end up in the bundle, so never put secrets in them.

## Scripts

| Script              | What it does                                             |
| ------------------- | -------------------------------------------------------- |
| `pnpm start`        | Start the Metro dev server                               |
| `pnpm ios`          | Start the dev server and open iOS                        |
| `pnpm android`      | Start the dev server and open Android                    |
| `pnpm lint`         | ESLint and Prettier, zero warnings allowed               |
| `pnpm typecheck`    | `tsc --noEmit`                                           |
| `pnpm format`       | Format everything with Prettier                          |
| `pnpm format:check` | Check formatting without writing                         |
| `pnpm doctor`       | Check dependency versions against the SDK, `expo-doctor` |

Add packages with `pnpm expo install <pkg>`, not `pnpm add`, so they get SDK-compatible versions.

## Stack

- **Routing**: Expo Router (`src/app/`), with typed routes
- **Styling**: NativeWind v4 (Tailwind CSS v3) with dark mode
- **Data**: TanStack Query (server state), Zustand (client state), MMKV (storage), SecureStore (secrets), each added when first needed
- **Animation**: Reanimated and Gesture Handler
- **React Compiler** is enabled, so don't memoize by hand

## Quality gates

- **Pre-commit**: commitlint (Conventional Commits) and lint-staged (ESLint and Prettier on staged files)
- **Pre-push**: `pnpm typecheck`
- **CI** (GitHub Actions): lint, typecheck, format check and `pnpm doctor`

## Releases (EAS)

Build profiles: `development`, `preview` and `production` (`eas.json`). Build numbers are managed remotely by EAS and auto-incremented on production builds.

```bash
pnpm dlx eas-cli@latest build --profile production --platform ios
pnpm dlx eas-cli@latest submit --platform ios
```

## Conventions

The code style, folder structure and project rules live in [`CLAUDE.md`](./CLAUDE.md). Read it before contributing.
