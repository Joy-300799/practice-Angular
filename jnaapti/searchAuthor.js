const _ = require('underscore');

const listOfBooks = [{ title: "Hamlet", author: "William Shakespeare" }, { title: "The Taming of the Shrew", author: "William Shakespeare" }, { title: "War and Peace", author: "Leo Tolstoy" }, { title: "A Confession", author: "Leo Tolstoy" }, { title: "The Innocents Abroad", author: "Mark Twain" }];

//[{ title: 'A Confession', author: 'Leo Tolstoy' },{ title: 'War and Peace', author: 'Leo Tolstoy' }]

function filterBooks(listOfBooks) {
    return listOfBooks.filter(x => x.author == "Leo Tolstoy").sort((a, b) => a.title.localeCompare(b.title));
    // return _.sortBy(filteredBooks, 'title');
}
console.log(filterBooks(listOfBooks));