# React Module Federation Example

This project demonstrates React Module Federation using Webpack 5. It contains three folders:

- `host`: The main app that loads remote components.
- `remote`: The remote app exposing components.
- `shared`: Shared code/components (e.g., Button).

## Getting Started

1. Install dependencies in both `host` and `remote`:
   ```
   cd host && npm install
   cd ../remote && npm install
   ```
2. Start both apps in separate terminals:
   ```
   cd host && npm start
   cd ../remote && npm start
   ```

## How it works
- The `remote` app exposes a Button component.
- The `host` app loads the remote Button using Module Federation.
- The `shared` folder contains code/components that can be imported by both apps.
# mfa
