const ConnectToMongo=require('./db');
const express = require('express');
var cors=require('cors');

ConnectToMongo();
const app = express()
const port = 5000
app.use(cors({ origin: 'https://accutax-blush.vercel.app' })) 
app.use(express.json())
app.use("/files",express.static("files"));

app.use('/api/auth',require('./routes/auth'));
// app.use('/api/notes',require('./routes/notes'));
// app.use('/api/sendmail',require('./routes/sendmail'));


app.listen(port, () => {
  console.log(`Taxation backend listening on port http://localhost:${port}`)
})