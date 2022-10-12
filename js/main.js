'use strict';

$(renderProjects)

var projects = [
  {
    id: "trueRecoil",
    name: "True Recoil",
    title: "A zero Gravity platformer",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "https://alonmakegames.itch.io/true-recoil",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "achilles",
    name: "Achilles",
    title: "Destroy the trojans",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "https://alonmakegames.itch.io/achilles",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "mineSweeper",
    name: "MineSweeper",
    title: "A twist on the classic game",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "https://alonmakegames.itch.io/achilles",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "amazonCrime",
    name: "Amazon Crime",
    title: "Stash all the packages",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "https://alon-hoffman.github.io/touch-num/",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
  },
  {
    id: "touchNum",
    name: "Touch Num",
    title: "How fast can you go?",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "https://kobikoala1.itch.io/amazon-crime",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
  }
]

function renderProjects() {
  var projectsHtml = projects.map(project =>
    `<div class="col-md-4 col-sm-6 portfolio-item">
        <a
          class="portfolio-link"
          data-toggle="modal"
          href="#portfolioModal3"
        >
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img
            class="img-fluid"
            src="img/portfolio/${project.id}.jpg"
            alt=""
          />
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.title}</p>
        </div>
      </div>`
  )
  $('.projects').append(projectsHtml)
}