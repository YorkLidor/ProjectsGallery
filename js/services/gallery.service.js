'use strict'

var gProjects
_createProjects()

function getProjects() {
    return gProjects
}

function _createProjects() {
    gProjects = [
        _createProject('pacman', 'Pac Man', 'Eat them all', 'aaa', 'https://www.google.co.il/?gws_rd=cr&ei=V_zxUt6XE8yX4wTonoDABwsadasdsad', Date.now(), ["Matrixes", "keyboard events"]),
        _createProject('bookshop', 'Book Shop', 'Mange your store', 'bbb', 'https://www.google.co.il/?gws_rd=cr&ei=V_zxUt6XE8yX4wTad', Date.now(), ["Matrixes", "keyboard events"]),
        _createProject('minesweeper', 'Minesweeper', 'Stay away from the bombs', 'ccc', 'https://www.google.co.il/?gws_rd=cr&ei=V_zxUt6XE8yX4wTonoDABwsadasdsad', Date.now(), ["Matrixes", "keyboard events"]),
        _createProject('touchnums', 'Touch Nums', 'Follow the numbers', 'ddd', 'https://www.google.co.il/?gws_rd=cr&ei=V_zxUt6XE8yX4wTonoDABwsadasdsad', Date.now(), ["Matrixes", "keyboard events"]),
        _createProject('pacman', 'Pac Man', 'Eat them all', 'ssad', 'https://www.google.co.il/?gws_rd=cr&ei=V_zxUt6XE8yX4wTonoDABwsadasdsad', Date.now(), ["Matrixes", "keyboard events"]),
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