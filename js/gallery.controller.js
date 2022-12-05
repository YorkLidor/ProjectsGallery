'use strict'

$(document).ready(onInit)

function onInit() {
    renderProjects()
    $('form .btn-primary').click(onFormSubmit)
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
    $('#portfolioModal h2').text(project.name)
    $('#portfolioModal p.item-intro.text-muted').text(project.title)
    $('#portfolioModal img').attr("src", `img/my-projects/${project.id}.png`)
    $('#portfolioModal p.desc-p').text(project.desc)
    $('#portfolioModal span.date-span').text(project.publishedAt)
    $('#portfolioModal span.category-span').text(project.labels)
    // $('#portfolioModal1 span.client-span').text(project.desc)
    $('#portfolioModal button.modal-btn').click(function () {
        onGoToProjClick(project.url)
    })
}

function onModalClick() {
    renderModal(this)
    $('#portfolioModal').modal('toggle')
}

function onGoToProjClick(url) {
    window.open(url)
}

function onFormSubmit(){
    // const email = $('.form-email').val()
    const subject = $('.form-subject').val()
    const message = $('.form-message').val()

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=yorklidor@gmail.com.com&su=${subject}&body=${message}`)

    
}
