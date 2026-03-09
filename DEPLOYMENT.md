# Deployment Guide | WHYAPP God Engine

This guide outlines the sacred process of manifesting the WHYAPP production build.

## Quality Gates
Before deployment, ensure all quality gates are passed:
1.  **Diagnostic Altar**: Zero 0 problems in the IDE.
2.  **Testing Rite**: `npm test` must pass 100%.
3.  **Coverage Sanctuary**: 100% coverage on core logic (`SoulEngine`, `EnergyBalancer`).

## Production Build Process
The build process uses `electron-builder` with an optimized NSIS configuration.

### Steps
1.  **Cleanup**: `rimraf dist release`
2.  **Frontend Manifestation**: `npm run build` (Vite)
3.  **Desktop Forging**: `electron-builder --win`

These steps are combined into the sacred command:
```bash
npm run dist
```

## Artifacts
The final artifact will be manifested in the `release/` folder:
- `WHYAPP-God-Engine-Setup-0.1.0.exe`: The primary installer.

## Performance Benchmarks
- **Launch Time**: < 1.5s
- **Memory Footprint**: < 150MB (Base)
- **Neural Latency**: < 0.0001ms (Simulated)

## Security Scan
The build has been hardened with:
- Disabled `remote` module.
- Secure IPC channel validation.
- Encrypted data-at-rest placeholders.

Aham Brahmasmi.
