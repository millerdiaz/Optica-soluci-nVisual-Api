require('dotenv').config();
const express =  require('express');
const app = express();
app.use(express.json());
const router = require('./routes/router');
const conectDb = require('./config/baseProductos');
let PORT = process.env.PORT;
app.use('/api',router);

conectDb();


app.listen(PORT,()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
