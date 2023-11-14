export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://www.booklistqueen.com/wp-content/uploads/iron-flame-rebecca-yarros.jpg";
   let book2 = "https://www.booklistqueen.com/wp-content/uploads/the-mystery-guest-nita-prose.jpg";
   let book3 = "https://www.booklistqueen.com/wp-content/uploads/the-frozen-river-ariel-lawhon.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Iron Flame by Rebecca Yarros" />
         <img src={book2} alt="The Mystery Guest by Nita Prose" />
         <img src={book3} alt="The Frozen River by Ariel Lawhon" />
      </div>      
   );
}