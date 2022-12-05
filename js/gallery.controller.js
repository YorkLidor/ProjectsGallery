'use strict'

$(document).ready(onInit)

function onInit() {
    renderProjects()
    // renderModals()
    // console.log('onInit runing')
    // $('.modal-btn').each((idx)=>{
    //     console.log(idx)
    //     console.log(this)
    //     $(this).click(onModalClick)

    // })
}

function renderProjects() {
    var projects = getProjects()
    var strHtmls = projects.map(proj => `
        <div class="col-md-4 col-sm-6 portfolio-item">
            <div class="portfolio-link" data-project-id="${proj.id}" >
                <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
                </div>
                <img class="img-fluid" src="img/my-projects/${proj.id}.png" alt="">
            </div>
            <div class="portfolio-caption">
                <h4>${proj.name}</h4>
                <p class="text-muted">${proj.title}</p>
            </div>
        </div>`
    )
    $('#projects-section').html(strHtmls.join('')) 
    $('.portfolio-link').click(onModalClick)
}

function renderModal(elProject) {
    const projId = elProject.dataset.projectId
    const project = getProjectById(projId)
    console.log(project)
    $('#portfolioModal1 h2').text(project.name)
}

function onModalClick(ev){
    renderModal(this)
    $('#portfolioModal1').modal('toggle')

    // console.log(ev)
    // console.log(this.dataset.projectId)
}
