const searchRes = document.querySelector('.anime__results')
const animeHTML = document.querySelector(".anime__container");

// FUNCIONAAA
// async function renderAnime(title) {
//     const animes = await getData(title)
//     const anime = animes.map((anime) => {
//         return `<div class="anime__info--container">
//         <figure class="anime__img--wrapper">
//         <img src="${anime.images.jpg.large_image_url}" alt="" class="anime__img">
//         </figure>
//         <div class= "anime__organizer">
//         <h3 class="anime__title">${anime.title} ${animeYear(anime.year)}<br> <a href="${anime.url}" class="anime__link" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></h3>
//         <div class="anime__rating">
//         ${animeRating(anime.score)}${ratingremainder(anime.score)}
//         </div>
//         <p class="anime__synopsis"> <span class="synopsis__title">Synopsis:</span> <br> <br>${anime.synopsis}</p>
//         </div>
//         </div>`
//     }).join('')
//     setTimeout(() => {
//         searchRes.innerHTML = `<h2 class="anime__results">Search Results For: <br> <br> <span class="text__orange">${title.replace(/(?<= )[^\s]|^./g, a => a.toUpperCase())}</span></h2>`
//         animeHTML.innerHTML = anime;
//     },1000)
// }
async function renderAnime(title) {
    const animes = await getData(title)
    animes["data"].sort((a, b) => (b.score) - (a.score))
    const anime = animes["data"].map((anime) => {
        return `<div class="anime__info--container">
        <figure class="anime__img--wrapper">
        <img src="${anime.images.jpg.large_image_url}" alt="" class="anime__img">
        </figure>
        <div class= "anime__organizer">
        <h3 class="anime__title">${anime.title} ${animeYear(anime.year)}<br> <a href="${anime.url}" class="anime__link" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></h3>
        <div class="anime__rating">
        ${animeRating(anime.score)}${ratingremainder(anime.score)}
        </div>
        <p class="anime__synopsis"> <span class="synopsis__title">Synopsis:</span> <br> <br>${anime.synopsis}</p>
        </div>
        </div>`
    }).join('')
    setTimeout(() => {
        searchRes.innerHTML = `<h2 class="anime__results">Search Results For: <br> <br> <span class="text__orange">${title.replace(/(?<= )[^\s]|^./g, a => a.toUpperCase())}</span></h2>`
        animeHTML.innerHTML = anime;
    }, 1000);
}

function animeYear (year){
    if (year === null){
        return ``
    }
    return `(${year})`
}


function animeRating (rating){
    let ratingHTML = ""
    for (let i = 0; i < rating; ++i)
    if (i < Math.floor(rating)){
        ratingHTML += '<i class="fa-solid fa-star"></i>'
    }
    if (!Number.isInteger(rating)){
        ratingHTML += '<i class="fa-regular fa-star-half-stroke"></i>'
    }
    if (rating === null){
        return ''
    }
    return ratingHTML
}
function ratingremainder (rating){
    let ratingHTML10 = ""
    for (let i = 1; i < rating; ++i)
    if (i < 10-rating) {
        ratingHTML10 += '<i class="fa-regular fa-star"></i>'
    }
    return ratingHTML10
}
// FUNCIONAAA
// async function getData(title) {
//     const fetchAnime = await fetch(`https://api.jikan.moe/v4/anime`);
//     const animeData = await fetchAnime.json();
//     const animeArr = Object.values(animeData['data'])
//     const films = animeArr.filter(animeTitle => {
//         if (animeTitle.title.toLowerCase() == `${title.toLowerCase()}`){
//             return true
//         }
//     })
//     return films
// }
async function getData(title) {
    const fetchAnime = await fetch(`https://api.jikan.moe/v4/anime?q=${title}`);
    const animeData = await fetchAnime.json();
        return animeData
}

// https://api.jikan.moe/v4/anime
