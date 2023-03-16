
let playerData = require('./db.json')
let playerId = 7
module.exports = {

    getPlayers: (req,res) =>{
        res.status(200).send(playerData)
    },
    
    addPlayer: (req,res) =>{
        let newPlayer = {...req.body, id:playerId}
        playerData.push(newPlayer)
        res.status(200).send(playerData)
        playerId++
        
    },
    deletePlayer: (req,res) =>{
        let { id } = req.params
        playerData = playerData.filter(player => player.id !== +id)
        res.status(200).send(playerData)

    }



}

