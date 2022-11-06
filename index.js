async function renderAnime(title) {
    const animeHTML = document.querySelector(".anime__container");
    const animes = await getData(title)
    const anime = animes.map((anime) => {
        return `<div class="anime__info--container">
        <figure class="anime__img--wrapper">
        <img src="${anime.images.jpg.large_image_url}" alt="" class="anime__img">
        </figure>
        <div class= "anime__organizer">
        <h3 class="anime__title">${anime.title} ${animeYear(anime.year)}<br> <a href="${anime.url}" class="anime__link" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></h3>
        <div class="anime__rating">
        ${animeRating(anime.score)}${ratingremainder(anime.score)}
        </div>
        <p class="anime__synopsis"><b>Synopsis:</b> <br> ${anime.synopsis}</p>
        </div>
        </div>`
    }).join('')
    setTimeout(() => {
        animeHTML.innerHTML = anime;
    },2000)
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
    for (let i = 0; i < rating; ++i)
    if (i < Math.floor(rating)){
        ratingHTML += '<i class="fa-solid fa-star"></i>'
    }
    if (!Number.isInteger(rating)){
        ratingHTML += '<i class="fa-regular fa-star-half-stroke"></i>'
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

async function getData(title) {
    let one = []
    const fetchAnime = await fetch(`https://api.jikan.moe/v4/anime`);
    const animeData = await fetchAnime.json();
    const animeArr = Object.values(animeData['data'])
    const films = animeArr.find(animeTitle => animeTitle.title === `${title}`)
    one.push(films)
    return one
}

// https://api.jikan.moe/v4/anime
