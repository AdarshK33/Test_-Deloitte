const express = require("express");
//const config = require('config')
const path = require('path');

const port = process.env.PORT || 3002;

/* Default Routing -- importing */

const app = express();

var server = require('http').Server(app);
app.use(express.static("public"));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); 

/* Server  -- Creating a server and assigning a PORT */
server.listen(port, () => console.log(`ERISAfire listening port: ${port}!`));
