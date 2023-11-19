import book1 from '../assets/book_covers/hp_phil_cover.jpg';
import book2 from '../assets/book_covers/hp_chamber_cover.jpg';
import book3 from '../assets/book_covers/hp_pris_cover.jpg';
import book4 from '../assets/book_covers/dune_cover.jpg';
import book5 from '../assets/book_covers/anne_cover.jpg';
import book6 from '../assets/book_covers/prince_cover.jpg';
import book7 from '../assets/book_covers/1984_cover.jpg';
import book8 from '../assets/book_covers/gatsby_cover.jpg';
import book9 from '../assets/book_covers/lotr_cover.jpg';
import book10 from '../assets/book_covers/narnia_cover.jpg';
import book11 from '../assets/book_covers/flies_cover.jpg';
import book12 from '../assets/book_covers/seuss_cover.jpg';
import book13 from '../assets/book_covers/dorian_cover.jpg';
import book14 from '../assets/book_covers/quixote_cover.jpg';
export const books = [
    {
        id: 1,
        title: "Harry Potter and the Philosopher's Stone",
        genres: ["Fantasy","Fiction","Young Adult","Magic"],
        rating: 4,
        author: "J. K. Rowling",
        imageUrl: book1,
        synopsis: "Harry Potter lives with his abusive aunt and uncle, Vernon and Petunia Dursley, and their bullying son, Dudley." +
        "On Harry's eleventh birthday, Rubeus Hagrid, a half-giant, delivers an acceptance letter from Hogwarts School of Witchcraft" +
        "and Wizardry, revealing that Harry's parents, James and Lily Potter, were wizards. When Harry was just a year old, a powerful" +
        "but malevolent dark wizard named Lord Voldemort murdered his parents; Harry survived Voldemort's killing curse that rebounded" +
        "and seemingly destroyed the Dark Lord, leaving a lightning bolt-shaped scar on his forehead. Unknown to Harry, this act made" +
        "him famous in the wizarding world."
    },
    {
        id: 2,
        title: "Harry Potter and the Chamber of Secrets",
        genres: ["Fantasy","Fiction","Young Adult","Magic"],
        rating: 3,
        author: "J. K. Rowling",
        imageUrl: book2,
        synopsis: "This is the synopsis for Book 1. It can contain a brief description of the book."
    },
    {
        id: 3,
        title: "Harry Potter and the Prisioner of Azkaban",
        genres: ["Fantasy","Fiction","Young Adult","Magic"],
        rating: 4,
        author: "J. K. Rowling",
        imageUrl: book3,
        synopsis: "This is the synopsis for Book 1. It can contain a brief description of the book."
    },
    {
        id: 4,
        title: "Dune",
        genres: ["Science Fiction","Fiction"],
        rating: 4,
        author: "Frank Herbert",
        imageUrl: book4,
        synopsis: "This is the synopsis for Book 1. It can contain a brief description of the book."
    },
    {
        id: 5,
        title: "The Diary of a Young Girl",
        genres: ["Nonfiction","Biography"],
        rating: 1,
        author: "Anne Frank",
        imageUrl: book5,
        synopsis: "This is the synopsis for Book 1. It can contain a brief description of the book."
    },
    {
        id: 6,
        title: "The Little Prince",
        genres: ["Fiction","Fantasy","Childrens"],
        rating: 4,
        author: "Antoine de Saint-Exupéry",
        imageUrl: book6,
        synopsis: "This is the synopsis for Book 1. It can contain a brief description of the book."
    },
    {
        id: 7,
        title: "1984",
        genres: ["Dystopia","Science Fiction","Politics"],
        rating: 4,
        author: "George Orwell",
        imageUrl: book7,
        synopsis: "This is the synopsis for Book 1. It can contain a brief description of the book."
    },
    {
        id: 8,
        title: "The Great Gatsby",
        genres: ["Fiction","Romance"],
        rating: 1,
        author: "F. Scott Fitzgerald",
        imageUrl: book8,
        synopsis: "This is the synopsis for Book 1. It can contain a brief description of the book."
    },  {
        id: 9,
        title: "The Lord of the Rings",
        genres: ["Fantasy","Fiction","Adventure"],
        rating: 4,
        author: "J.R.R. Tolkien",
        imageUrl: book9,
        synopsis: "This is the synopsis for Book 1. It can contain a brief description of the book."
    },
    {
        id: 10,
        title: "The Chronicles of Narnia",
        genres: ["Fantasy","Fiction","Adventure"],
        rating: 1,
        author: "C.S. Lewis",
        imageUrl: book10,
        synopsis: "This is the synopsis for Book 1. It can contain a brief description of the book."
    },  {
        id: 11,
        title: "Lord of the Flies",
        genres: ["Dystiopia","Fiction"],
        rating: 4,
        author: "William Golding",
        imageUrl: book11,
        synopsis: "This is the synopsis for Book 1. It can contain a brief description of the book."
    },
    {
        id: 12,
        title: "Green Eggs and Ham",
        genres: ["Childrens","Fiction","Poetry"],
        rating: 1,
        author: "Dr. Seuss",
        imageUrl: book12,
        synopsis: "This is the synopsis for Book 1. It can contain a brief description of the book."
    },  {
        id: 13,
        title: "The Picture of Dorian Gray",
        genres: ["Fiction","Fantasy","Gothic"],
        rating: 4,
        author: "Oscar Wilde",
        imageUrl: book13,
        synopsis: "This is the synopsis for Book 1. It can contain a brief description of the book."
    },
    {
        id: 14,
        title: "Don Quixote",
        genres: ["Fiction","Literature"],
        rating: 1,
        author: "Miguel de Cervantes Saavedra",
        imageUrl: book14,
        synopsis: "This is the synopsis for Book 1. It can contain a brief description of the book."
    }
];
export const users=[
    {
        name:"User 1",
        shelves:[{
            id : 1,
            name: "Favourites",
            books:["Don Quixote", "Green Eggs and Ham"],
            booksIDs: [14, 12],
        },
        {
            id : 2,
            name: "To Read",
            books:["The Picture of Dorian Gray"],
            booksIDs: [13],
        }]
    }
]