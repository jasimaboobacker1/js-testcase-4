const books = [
    { 
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "A novel depicting the decadence of the Jazz Age in America."
    },
    { 
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "A story of racial injustice and loss of innocence in the American South."
    },
    { 
        title: "1984",
        author: "George Orwell",
        description: "A dystopian novel depicting a totalitarian future society."
    },
    { 
        title: "Pride and Prejudice",
        author: "Jane Austen",
        description: "A romantic novel exploring the societal norms of 19th-century England."
    },
    { 
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        description: "A novel about teenage angst and alienation in American society."
    },
    { 
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        description: "An epic fantasy novel set in the fictional world of Middle-earth."
    },
    { 
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        description: "The first book in the Harry Potter series, introducing the magical world of Hogwarts."
    },
    { 
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        description: "A fantasy novel about the adventures of Bilbo Baggins, set in Middle-earth."
    },
    { 
        title: "The Da Vinci Code",
        author: "Dan Brown",
        description: "A thriller novel following symbologist Robert Langdon as he investigates a murder"
    },
    { 
        title: "The Alchemist",
        author: "Paulo Coelho",
        description: "A philosophical novel about a young Andalusian shepherd who sets out to find a hidde."
    },
    { 
        title: "The Chronicles of Narnia",
        author: "C.S. Lewis",
        description: "A series of seven fantasy novels set in the fictional world of Narnia."
    },
    { 
        title: "The Hunger Games",
        author: "Suzanne Collins",
        description: "The first book in a dystopian trilogy where teenagers fight to the death in a televised event."
    },
    { 
        title: "Gone with the Wind",
        author: "Margaret Mitchell",
        description: "A historical novel set during the American Civil War and Reconstruction era."
    },
    { 
        title: "The Shining",
        author: "Stephen King",
        description: "A horror novel about a family's winter stay at an isolated hotel."
    },
    { 
        title: "Moby-Dick",
        author: "Herman Melville",
        description: "A novel about the voyage of the whaling ship Pequod, captained by the vengeful Captain Ahab."
    },
    { 
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        description: "A novel about a man who remains youthful while a portrait of him ages."
    },
    { 
        title: "The Adventures of Sherlock Holmes",
        author: "Arthur Conan Doyle",
        description: "A collection of twelve short stories featuring the detective Sherlock Holmes."
    },
    { 
        title: "The War of the Worlds",
        author: "H.G. Wells",
        description: "A science fiction novel about an alien invasion of Earth."
    },
    { 
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        description: "A novella about a young prince who travels to different planets."
    },
    { 
        title: "Alice's Adventures in Wonderland",
        author: "Lewis Carroll",
        description: "A novel about a girl named Alice who falls through a rabbit hole into a fantasy world."
    }
];
function AddBook() {
    const bookName = document.getElementById('boookname').value.trim();
    const authorName = document.getElementById('authorrr').value.trim();
    const description = document.getElementById('descriptionnn').value.trim();

    if (bookName === "" || authorName === "" || description === "") {
        alert("Please fill the form completely");
        return;
    }

    const newBook = { title: bookName, author: authorName, description: description };
    books.push(newBook);
    displayBooks(books);

    const message = `Book Name: ${bookName}\nAuthor: ${authorName}\nDescription: ${description}\nAdded Succesfully`;
    alert(message);
    const modal = document.getElementById('exampleModal');
    const modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide();
}


        function displayBooks(booksToShow) {
            const container = document.getElementById("book-list");
            container.innerHTML = ""; 

            if (booksToShow.length === 0) {
                const noResults = document.createElement("p");
                noResults.textContent = "No results found.";
                container.appendChild(noResults);
            } else {
                booksToShow.forEach(book => {
                    const card = document.createElement('div');
                    card.id = 'card'; 
                    card.innerHTML = `
                    <h3 style="font-size: 18px;">${book.title}</h3>
                    <h5 style="font-size: 17px;">Author: ${book.author}</h5>
                    <p style="font-size: 15px;">Description: ${book.description}</p>
                   
                `;
                    container.appendChild(card);
                });
            }
        }

        function filterBooks() {
            const searchTerm = document.getElementById("searchInput").value.toLowerCase();
            const filteredBooks = books.filter(book =>
                book.title.toLowerCase().includes(searchTerm) ||
                book.author.toLowerCase().includes(searchTerm)
            );
            displayBooks(filteredBooks);
        }

        window.addEventListener("load", () => {
            displayBooks(books);
            document.getElementById("searchInput").addEventListener("input", filterBooks);
        });

      
     