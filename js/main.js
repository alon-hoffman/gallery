'use strict';

$(renderProjects)



function renderProjects() {
  var projects = getProjects()
  var projectsHtml = projects.map(project =>
    `<div class="col-md-4 col-sm-6 portfolio-item" onclick="onChangeModal('${project.id}')">
        <a
          class="portfolio-link card"
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

// $('.portfolio-modal h2').text("hii")



function onChangeModal(id) {
  const project = getProject(id)
  $('.portfolio-modal h2').text(project.name)
  $('.portfolio-modal .item-intro').text(project.title)
}