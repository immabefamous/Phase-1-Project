//change the page
//const loadPage = () => {
let animeData;

    let startButton = document.getElementById("load")
    let bImg = document.getElementById('banner')
    let gridDiv = document.getElementById("grid")
    console.log(startButton)
    startButton.addEventListener('click', () => {
        bImg.remove()
        gridDiv.className = 'wrapper'
        startButton.remove()
        let gifSection = document.getElementById('gifDisp')
        let displayGif = document.createElement('img')
        displayGif.id = 'gif'
        displayGif.src = "https://c.tenor.com/TaSMM2QzA30AAAAd/pick-one-decide.gif"
        displayGif.width = "800"
        displayGif.height = "400"
        let h3 = document.createElement('h3')
        h3.id = "aboveGif"
        h3.innerText = "Click each anime/manga and after looking through them all rate my list"
        let textAGif = document.createElement('h1')
        textAGif.id = "animeTitle"
        textAGif.style = "position: absolute; left: 63.5%; top: 95%; background-color:black; color: white;"
        gifSection.append(h3, displayGif, textAGif)
        fetch('http://localhost:3000/anime')
        .then(response => response.json())
        .then(data => data.forEach((element) => {
            let div = document.getElementById(`box${element.id}`)
            let animeImg = document.createElement('img')
            animeImg.src = element.image 
            animeImg.width = "200"
            animeImg.height = "80"
            animeImg.addEventListener('click', () => {
                textAGif.innerText = element.name
                let displayGif = document.getElementById('gif')
                displayGif.src = element.gif
                let likeButton = document.createElement('button')
                let dislikeButton = document.createElement('button')
                likeButton.id = "lBtn"
                dislikeButton.id = "dBtn"
                likeButton.innerText = "LIKE"
                dislikeButton.innerText = "DISLIKE"
                likeButton.addEventListener('click', ()=>{
                    let likeImg = document.createElement('img')
                    likeImg.id = 'Likes'
                    likeImg.src = "https://i.pinimg.com/236x/6a/4c/06/6a4c0669d2ff5e7f609475715fc54c30--indiana-jones-quotes-christian-memes.jpg"
                    document.getElementById('Ratings').append(likeImg)
                    
                })
                dislikeButton.addEventListener('click', ()=>{
                    let dislikeImg = document.createElement('img')
                    dislikeImg.id = 'Dislikes'
                    dislikeImg.src ="https://i.ytimg.com/vi/VnX-HcgGt00/hqdefault.jpg"
                    document.getElementById('Ratings').append(dislikeImg)
                    
                })
                
                gifSection.append(likeButton, dislikeButton)
            })
            div.append(animeImg)

        }))
        
        })
        

    
//}
//loadPage()