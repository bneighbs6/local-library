 // Helper Function. 
 function arrayLength(array) {
  return array.length;
}

function getTotalBooksCount(books) {
  return arrayLength(books);
 }
 

function getTotalAccountsCount(accounts) {
  return arrayLength(accounts); 
}



function getBooksBorrowedCount(books) {
  let booksCheckedOut = books.filter((book) => book.borrows.filter((item) => item.returned === false).length > 0);
  return booksCheckedOut.length; 
}



function getMostCommonGenres(books) {
 let map = {};
 books.forEach((num) => {
  if (map[num.genre]) {
   map[num.genre]++;
  } else {
   map[num.genre] = 1;
  }
 });
 return Object.entries(map)
  .map(([name, count]) => {
   return {
    name,
    count
   };
  })
  .sort((genre1, genre2) => genre2.count - genre1.count)
  .slice(0, 5);
}



function getMostPopularBooks(books) {
 return books
  .map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}



function getMostPopularAuthors(books, authors) {
 let result = [];
 authors.forEach((author) => {
  let theAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    theAuthor.count += book.borrows.length;
   }
  });
  result.push(theAuthor);
 });
  return result.sort((a, b) => b.count - a.count).slice(0, 5)
}




module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};