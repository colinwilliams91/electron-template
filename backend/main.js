const { app, BrowserWindow, ipcMain } = require("electron/main");
const { handlers } = require("./handlers");
const path = require("node:path");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "..", "bridge", "preload.js"),
            // devTools: false, // this must be set to false for production release
        }
    });

    win.loadFile(path.join(__dirname, "..", "frontend", "index.html"));
};

app.whenReady()
    .then(() => {
        // IPC handler registration
        ipcMain.handle("ping", handlers.ping);
        ipcMain.handle("dark-mode:toggle", handlers.darkMode.toggle);
        ipcMain.handle("dark-mode:isDarkMode", handlers.darkMode.isDarkMode);
        ipcMain.handle("dark-mode:system", handlers.darkMode.system);

        createWindow();

        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        app.on("activate", () => handlers.app.activate(createWindow));
    }).catch((error) => {
        console.error(`Failed to create window - on ready exception: ${error}`);
});

// TODO: this should move to ./handlers.js too but I want to rewrite to TS first
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
