require('dotenv').config();
const express =  require('express');
const router = require('./routes/router');
const app = express();
let PORT = process.env.PORT;
app.use('/api',router)
app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})
