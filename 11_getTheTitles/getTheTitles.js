const getTheTitles = function(books) {
    let bookTitle = [];
    for (let book of books)
        bookTitle.push(book.title);
    
    return bookTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
