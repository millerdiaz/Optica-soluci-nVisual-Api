require('dotenv').config();
const express =  require('express');
const router = require('./routes/router');
const connectDB = require('./config/db');
const app = express();
app.use(express.json());
let PORT = process.env.PORT;
app.use('/api',router)
connectDB()
app.listen(PORT,()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})
