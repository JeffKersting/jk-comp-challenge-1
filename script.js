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
      <div class="card-corner"></div>
      <p class="kill-count">Kills <br> ${killer.killCount}</p>
      <img class="test" src="${killer.image}" alt="${killer.name}"/>
      <h1 class="name">${killer.name}</h1>
      <a class="wiki-page" href=""></a>
      <h2 class="ratings">Highest Rated Film</h2>
      <a class="rotten-tomatoes"></a>
      <h2 class="films">No. Films: ${killer.totalFilms}</h2>
      <a class="appearances"></a>
    </article>
    `
  })
}
