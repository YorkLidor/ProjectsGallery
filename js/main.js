'use strict'
console.log('Starting up');


function renderProjects() {
    var books = getBooks(booksFromSerch)

    var strHtmls = books.map(book => `
    <tr><td>${book.id}</td><td>${book.name.charAt(0).toUpperCase() + book.name.slice(1)}</td>
    <td>${book.price}$</td>
    <td>${book.rate}</td>
    <td><img onerror="this.src='images/defultBook.jpg'" src="images/${book.name}.jpg"></td>
    <td><button class="read-btn" onclick="onReadBook('${book.id}')">Read</button>
    <button class="update-btn" onclick="onUpdateBook('${book.id}')">Update</button>
    <button class="delete-btn" onclick="onRemoveBook('${book.id}')">Delete</button></td></tr>`
    )
    strHtmls.unshift('<div class="container"><table><thead><tr><th>Id</th><th>Name</th><th class="sort" onclick="onSetSortBy(\'price\')">Price</th><th class="sort" onclick="onSetSortBy(\'rate\')">Rate</th><th>Picture</th><th>Actions</th></tr></thead><tbody>')
    strHtmls.push('</tbody></table></div>')
    document.querySelector('.books-container').innerHTML = strHtmls.join('')
}



function _createBooks() {
    var books = loadFromStorage(STORAGE_KEY)
    if (!books || !books.length) {
        books = [
            _createBook('pokemon', 10),
            _createBook('atomic', 15),
            _createBook('glory', 25),
            _createBook('secret', 12),

        ]
    }
    gBooks = books
    _saveBooksToStorage()
}

function _createProj(id, name, title, desc, url, publishedAt, labels) {
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