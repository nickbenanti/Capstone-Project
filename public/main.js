const playersContainer = document.getElementById('players-container')
const addedPLayer = document.getElementById('addedplayer')
const playerPostition = document.querySelectorAll('.player-position')

const baseURL = 'http://localhost:4004/api/player'

const getAllPlayers = () =>{
    axios.get(baseURL)
    .then(({data : player}) => 
        displayPlayers(player))
    .catch(err=> console.log(err))
    // console.log
}

const makePlayer = body => {
    axios.post(baseURL, body)
    .then(({data : player}) => 
        displayPlayers(player))
    .catch(err=> console.log(err))
}

const deletePlayer = id =>{
    axios.delete(`${baseURL}/${id}`)
        .then(({data : player}) => 
            displayPlayers(player))
        .catch(err => console.log(err))

}

const submitPlayer = () =>{
    let image = document.getElementById('image')
    let name = document.getElementById('name')
    let position = document.getElementById('position')

    let bodyObject = {
        image: image.value,
        name: name.value,
        position: position.value
    }
    makePlayer(bodyObject)

    image.value = ''
    name.value = ''
    position.value = ''

}


const createPlayerCard = (player) =>{
    const playerCard = document.createElement('div')
    playerCard.classList.add('player-card')
    playerCard.innerHTML = `
    <div class="players">
        <img src= ${player.image} class="player-img">
        <h3 id="name">${player.name}</h3>
        <h3 id="position">Position: ${player.position}</h3>
        <button onclick="deletePlayer(${player.id})">Delete</button>
    </div>`

    playersContainer.appendChild(playerCard)
}

const displayPlayers = arr =>{
    playersContainer.innerHTML = ``
    for(let i =0; i < arr.length; i++){
        createPlayerCard(arr[i])
    }
}





addedPLayer.addEventListener('click', submitPlayer)
getAllPlayers()