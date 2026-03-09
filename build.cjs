try {
  console.error("DEBUG: Requiring electron-builder...");
  const builder = require("electron-builder");
  const Platform = builder.Platform;

  console.error("DEBUG: Starting God-Tier Build...");

  builder.build({
    targets: Platform.WINDOWS.createTarget(),
    config: {
      "directories": {
        "output": "release"
      },
      "appId": "com.whyapp.god",
      "productName": "WHYAPP",
      "win": {
        "target": "nsis",
        "icon": "public/icon.ico"
      },
      "files": [
        "dist/**/*",
        "electron/**/*",
        "package.json"
      ],
      "extends": null
    }
  })
  .then(() => {
    console.error("Build OK! The Manifestation is Complete.");
  })
  .catch((error) => {
    console.error("Build Failed:", error);
    process.exit(1);
  });
} catch (e) {
  console.error("CRITICAL ERROR:", e);
  process.exit(1);
}
