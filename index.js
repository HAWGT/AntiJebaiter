const electron = require('electron')
const storage = require('electron-json-storage');

const {
    app,
    BrowserWindow
} = electron

app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        width: 360,
        height: 240
    })
    mainWindow.loadURL('file://' + __dirname + '/index.html')
})
