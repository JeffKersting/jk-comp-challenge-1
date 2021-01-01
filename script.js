const content = document.querySelector('.content')
const imgTest = document.querySelector('.test')
var blood = document.querySelector('.blood')
document.onload = createCards()

var position = document.documentElement;
position.addEventListener("mousemove", (e) => {
  position.style.setProperty('--x', e.clientX + 'px')
  position.style.setProperty('--y', e.clientY + 'px')
})

function createCards() {
  killers.forEach(killer => {
    content.innerHTML += `
    <article class="card">
      <div class="card-top" style="background-image: url(${killer.image});">
        <div class="flip-card">🔪</div>
        <p class="kill-count">Kills <br> ${killer.killCount}</p>
      </div>
      <div class="card-bottom">
        <a class="name" href="${killer.wiki}">${killer.name}</a>
        <p class="date">${new Date().toLocaleString()}</p>
        <a class="wiki-page" href="${killer.wiki}">${killer.wiki}</a>
        <h2 class="ratings">Highest Rated Film</h2>
        <a class="highest-rated" href="${killer.rottenTomatoes}">${killer.movie}</a>
        <h2 class="films">Films</h2>
        <a class="appearances" href="${killer.films}">${killer.totalFilms}</a>
      </div>
    </article>
    `
  })
}
