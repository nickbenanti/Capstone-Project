const express = require('express')
const app = express()
const path = require('path')


app.use(express.json())
app.use(express.static(`public`))

const { 
    getPlayers,
    addPlayer,
    deletePlayer

} = require('./controller')

app.get('/',(req,res) =>{
    res.status(200).sendFile(path.join(__dirname, '/../public/index.html'))
});
app.get('/css',(req,res) =>{
    res.status(200).sendFile(path.join(__dirname, '/../public/styles.css'))
});

app.get('/js', (req,res) =>{
    res.status(200).sendFile(path.join(__dirname, '/../public/main.js'))
});



app.get('/api/player', getPlayers)
app.post('/api/player',addPlayer)
app.delete('api/player/:id', deletePlayer)



app.listen(4000, () => console.log("Server running on 4000"));
