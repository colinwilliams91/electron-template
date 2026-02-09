const { contextBridge } = require("electron/renderer");

contextBridge.exposeInMainWorld("versions", {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    processContextId: () => process.contextId,
    execPath: process.execPath,
    processArchitecture: `Electron preload (bridge-context) IPC process architecture: ${process.arch}`,
});

console.log(`preload ${process.contextId}`);
