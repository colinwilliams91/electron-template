const path = require("node:path");
const { app, BrowserWindow } = require("electron/main");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            // devTools: false, // this must be set to false for production release
        }
    });

    win.loadFile("index.html");
};

app.whenReady()
    .then(() => {
        createWindow();

        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        app.on("activate", () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                createWindow();
            }
        });
    }).catch((error) => {
        console.error(`Failed to create window: ${error}`);
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
