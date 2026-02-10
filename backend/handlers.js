const { BrowserWindow, nativeTheme } = require("electron/main");

const handlePing = () => "pong";

const handleDarkModeToggle = () => {
    if (nativeTheme.shouldUseDarkColors) {
        nativeTheme.themeSource = "light";
    } else {
        nativeTheme.themeSource = "dark";
    }
};

const handleIsDarkMode = () => nativeTheme.shouldUseDarkColors;

const handleSetThemeSourceSystem = () => {
    nativeTheme.themeSource = "system";
};

const handleAppActivate = (createWindow) => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    };
};

module.exports = {
    handlers: {
        ping: handlePing,
        darkMode: {
            toggle: handleDarkModeToggle,
            isDarkMode: handleIsDarkMode,
            system: handleSetThemeSourceSystem,
        },
        app: {
            activate: handleAppActivate
        },
    }
};
