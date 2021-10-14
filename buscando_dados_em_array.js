const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

let totalDeCategorias = booksByCategory.length
console.log(`Número de categorias: ${totalDeCategorias}`)

function contarautor() {
    let autores = [];
    
    for (let categoria of booksByCategory) {
        console.log(`Numero de livros da categoria ${categoria.category}: ${categoria.books.length}`)
        for (let book of categoria.books) {
            if (autores.indexOf(book.author) == -1) {
                autores.push(book.author)
                console.log(`Adicionei o autor ${book.author}`)
            } else {
                console.log(`O autor ${book.author} já existe.`)
            } 
        }
    }
    
}

contarautor();

function livrosDoCury(author) {
    let cury = [];
   for(let categoria of booksByCategory) {
       for(let book of categoria.books)
    if(book.author === author) {
        cury.push(book.title)
    }
}
console.log(`O livro do autor ${author}: ${cury} `)
 }
 livrosDoCury('Stephen R. Covey');
