const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 820,
    minWidth: 1000,
    minHeight: 650,
    icon: path.join(__dirname, 'build', 'icon.png'),
    title: 'Gestion Bureau de Tabac',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      // Nécessaire pour que window.showSaveFilePicker / showDirectoryPicker
      // (fichier de données auto-sauvegardé) fonctionnent dans Electron.
      sandbox: false
    }
  });

  // Supprime le menu par défaut (Fichier / Édition / Affichage...) pour un look plus "logiciel".
  Menu.setApplicationMenu(null);

  win.loadFile(path.join(__dirname, 'app', 'index.html'));

  // Décommentez la ligne suivante pendant le développement pour voir les erreurs :
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
