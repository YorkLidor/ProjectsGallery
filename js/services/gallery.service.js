'use strict'

var gProjects
_createProjects()

function getProjects() {
    return gProjects
}

function _createProjects() {
    gProjects = [
        _createProject('pacman', 'Pac Man', 'Eat them all', 'ssad', 'https://www.google.co.il/?gws_rd=cr&ei=V_zxUt6XE8yX4wTonoDABwsadasdsad', Date.now(), ["Matrixes", "keyboard events"]),
        _createProject('bookshop', 'Book Shop', 'Mange your store', 'sadsadsadsadsadsad', 'https://www.google.co.il/?gws_rd=cr&ei=V_zxUt6XE8yX4wTonoDABwsadasdsad', Date.now(), ["Matrixes", "keyboard events"]),
    ]
}

function _createProject(id, name, title, desc, url, publishedAt, labels) {
    return {
        id,
        name,
        title,
        desc,
        url,
        publishedAt,
        labels,
    }
}

function getProjectById(projId) {
    return gProjects.find((proj) =>  proj.id === projId )
}