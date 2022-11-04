async function getData(){
    const fetchAnime = await fetch('https://api.jikan.moe/v4/anime')
    const animeData = await fetchAnime.json()
    console.log(animeData)
    animeData.map(anime = {
        
    })
}

getData()