const state = {
    count: 0
};

const info = document.getElementById("info")
info.innerText = `This app is using Chrome (v${api.chrome()}), Node.js (v${api.node()}), and Electron (v${api.electron()})`;

const arch = document.getElementById("arch")
arch.innerText = api.processArchitecture;

// TODO: this UUID should be the same as in preload.js
const contextId = document.getElementById("context-id")
contextId.innerText = api.processContextId();

const pingButton = document.getElementById("ping-button");
pingButton.addEventListener("click", () => {
    func();
});

const count = document.getElementById("count");
count.innerText = `Ping count: 0`; // default state/text

const func = async () => {
    const response =  await api.ping();
    state.count += 1;
    count.innerText = `Ping count: ${state.count}`;
    console.log(`ping response: ${response}`);

};
