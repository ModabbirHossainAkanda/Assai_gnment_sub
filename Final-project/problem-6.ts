{
    const recentBooks =(book: { title: string, author: string, publishedYear : number}) =>{
    const publishedYear = book.publishedYear;
    const currentYear = new Date().getFullYear();
    return (currentYear - publishedYear <= 5);
}

const book1 = {
    title : 'Sample Book',
    author : 'John Doe',
    publishedYear: 2022,
}

const isRecent = recentBooks(book1);
console.log(isRecent);}


