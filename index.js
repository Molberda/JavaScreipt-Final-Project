


// async function renderAnime() {
//     const animeHTML = document.querySelector(".anime__container");
//     const animes = await getData()
//     const anime = animes["data"].map((anime) => {
//         return `<div class="anime__info--container">
//         <figure class="anime__img--wrapper">
//         <img src="${anime.images.jpg.large_image_url}" alt="" class="anime__img">
//         </figure>
//         <div class= "anime__organizer">
//         <h3 class="anime__title">${anime.title} ${animeYear(anime.year)}<br> <a href="${anime.url}" class="anime__link" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></h3>
//         <div class="anime__rating">
//         ${animeRating(anime.score)}
//         </div>
//         <p class="anime__synopsis">${anime.synopsis}</p>
//         </div>
//         </div>`
//     }).join('')
//     animeHTML.innerHTML = anime;
//     console.log(animes["data"])
// }

// renderAnime();
async function renderAnime() {
    const animeHTML = document.querySelector(".anime__container");
    const animes = await getData()
    const anime = Object.values(animes).map((anime) => {
        return `<div class="anime__info--container">
        <figure class="anime__img--wrapper">
        <img src="${anime.images.jpg.large_image_url}" alt="" class="anime__img">
        </figure>
        <div class= "anime__organizer">
        <h3 class="anime__title">${anime.title} ${animeYear(anime.year)}<br> <a href="${anime.url}" class="anime__link" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></h3>
        <div class="anime__rating">
        ${animeRating(anime.score)}
        </div>
        <p class="anime__synopsis">${anime.synopsis}</p>
        </div>
        </div>`
    }).join('')
    animeHTML.innerHTML = anime;
    console.log(anime)
}

renderAnime();

function animeYear (year){
    if (year === null){
        return ``
    }
    return `(${year})`
}


function animeRating (rating){
    let ratingHTML = ""
    for (let i = 0; i < Math.floor(rating); ++i){
        ratingHTML += '<i class="fa-solid fa-star"></i>'
    }
    if (!Number.isInteger(rating)){
        ratingHTML += '<i class="fa-regular fa-star-half-stroke"></i>'
    }
    return ratingHTML
}


async function getData() {
    const fetchAnime = await fetch(`https://api.jikan.moe/v4/anime/1`);
    const animeData = await fetchAnime.json();
    console.log(animeData)
    return animeData
}

