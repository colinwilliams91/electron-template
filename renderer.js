const info = document.getElementById("info")
info.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

const arch = document.getElementById("arch")
arch.innerText = versions.processArchitecture;

// TODO: this UUID should be the same as in preload.js
const contextId = document.getElementById("context-id")
contextId.innerText = versions.processContextId();
