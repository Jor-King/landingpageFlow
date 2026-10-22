# BeSello - Standalone Frontend Landing Page

Modular, high-performance React & Tailwind landing page and interactive workstation preview for **BeSello**.

## Integration Guidelines for the Project Agent
This repository is designed to remain completely decoupled and modular:
1. **Plug & Play**: Integrate this landing page into the main project by replacing the frontend/static folder or importing the build assets as needed by your architecture.
2. **Design Autonomy**: All visual updates, UI refinements, and workstation components are maintained independently in this repository.
3. **Configuration**: Wire up authentication links / login triggers to point to the main application's auth endpoints.

## Local Development
```bash
npm install
npm run dev
npm run build
```
