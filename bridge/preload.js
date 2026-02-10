const { contextBridge, ipcRenderer } = require("electron/renderer");

contextBridge.exposeInMainWorld("api", {
    // META
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    processContextId: () => process.contextId,
    execPath: process.execPath,
    processArchitecture: `Electron preload (bridge-context) IPC process architecture: ${process.arch}`,
    // API
    ping: () => ipcRenderer.invoke("ping"),
});

contextBridge.exposeInMainWorld("darkMode", {
    toggle: () => ipcRenderer.invoke("dark-mode:toggle"),
    isDarkMode: () => ipcRenderer.invoke("dark-mode:isDarkMode"),
    setToSystem: () => ipcRenderer.invoke("dark-mode:system"),
});

console.log(`preload ${process.contextId}`);
