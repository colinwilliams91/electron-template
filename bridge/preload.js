const { contextBridge, ipcRenderer } = require("electron/renderer");

contextBridge.exposeInMainWorld("api", {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    processContextId: () => process.contextId,
    execPath: process.execPath,
    processArchitecture: `Electron preload (bridge-context) IPC process architecture: ${process.arch}`,
    ping: () => ipcRenderer.invoke("ping"),
});

console.log(`preload ${process.contextId}`);
