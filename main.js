let books = [
  {
    title: "To Kill A Mockingbird",
    author: "Harper Lee",
    numberOfPages: 320,
    borrowing: true,
  },
  {
    title: "Wuthering Heights",
    author: "Emily Bronte",
    numberOfPages: 416,
    borrowing: true,
  },
  {
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    numberOfPages: 320,
    borrowing: false,
  },
  {
    title: "Things Fall Apart - Penguin Modern Classics",
    author: "Chinua Achebe",
    numberOfPages: 176,
    borrowing: false,
  },
  {
    title: "Beloved",
    author: "Toni Morrison",
    numberOfPages: 352,
    borrowing: true,
  },
];

for(let i=0;i<books.length;i++){
    console.log(books[i].title ,"\n" ,books[i].author ,"\n",books[i].numberOfPages);
}

// borrow function

function borrowBook(title,borrowerName){
    for(i in books){
        if(books[i].title==title){
            if(books[i].borrowing==true){
                books[i].borrowing=false
                books[i].borrower=borrowerName;
            }else{
                console.log("Sorry! the book is not available to borrowing")
            }
            console.log(books[i])
        }
        
    }
    
}



// return book func

function returnBook(title){
    for(i in books){
        if(books[i].title==title){
            if('borrower' in books[i]==true){
                delete books[i].borrower
                books[i].borrowing=true
            }
            else{
                console.log("the book was never borrowed.")
            }
            console.log(books[i])
        }
    }
}

// test

borrowBook("Beloved","bandar")
borrowBook("The Handmaid's Tale","ahmed")
borrowBook("Beloved","ALI")
returnBook("To Kill A Mockingbird")
borrowBook("To Kill A Mockingbird","FAHAD")
returnBook("Beloved")
borrowBook("Wuthering Heights","OWIS")
returnBook("Wuthering Heights")
borrowBook("Wuthering Heights","OWIS")
borrowBook("Beloved","bandar")



console.log("==================================")
console.log("test after borrow")
console.log("==================================")
for(let i=0;i<books.length;i++){
    console.log(books[i]);
}


// add book func
let newBook={
    title: "lovy",
    author: "Bandar",
    numberOfPages: 100,
    borrowing: true,
}
function addBook(newBook){
    books.push(newBook)

    
}
// test add book
addBook(newBook)
for(i in books){
    console.log(books[i])
}
borrowBook("lovy", "khalid")
returnBook("lovy")

//  search fun

function serchBook(serchItem){
    for(i in books){
        if(books[i].title==serchItem || books[i].author==serchItem || books[i].borrower==serchItem){
            console.log(books[i])
        }
    }
    
}
console.log("====================================")
console.log("test search")
console.log("====================================")
serchBook("OWIS")
serchBook("FAHAD")
serchBook("Beloved")
serchBook("Things Fall Apart - Penguin Modern Classics")



// --------------------------The end---------------------







