
async function getData() {
    const fetchAnime = await fetch("https://api.jikan.moe/v4/anime");
    const animeData = await fetchAnime.json();
    return animeData
}


async function renderAnime() {
    const animeHTML = document.querySelector(".anime__container");
    const animes = await getData()
    const anime = animes["data"].map((anime) => {
       return `<div class="anime__info--container">
            <figure class="anime__img--wrapper">
              <img src="${anime.images.jpg.large_image_url}" alt="" class="anime__img">
            </figure>
            <h3 class="anime__title">${anime.title}</h3>
            <div class="anime__rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star-half-stroke"></i>
            </div>
            <p class="anime__synopsis">${anime.synopsis}</p>
            <a href="${anime.url}" class="anime__link" target="_blank">More info about ${anime.title}</a>
          </div>`
      }).join('')
        animeHTML.innerHTML = anime;
    console.log(animes["data"])
}

renderAnime();




