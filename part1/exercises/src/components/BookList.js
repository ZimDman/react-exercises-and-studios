export default function BookList() {
   let pageTitle = "Books that make you go HMMMM";
   let book1 = "https://www.bing.com/th?id=OPHS.8CNFvW%2fVBf9aBA474C474&o=5&pid=21.1&w=142&h=188&qlt=100&dpr=1.3&c=17";
   let book2 = "https://www.bing.com/th?id=OPHS.B3ZTpoX6QGOr1g474C474&o=5&pid=21.1&w=142&h=188&qlt=100&dpr=1.3&c=17";
   let book3 = "https://www.bing.com/th?id=OPHS.XNZLIaTqJ3VyqQ474C474&o=5&pid=21.1&w=142&h=188&qlt=100&dpr=1.3&c=17";

   return (
      <div style= {{border:"3px solid red"}}>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="How to Babysit a grandma!" />
         <img src={book2} alt="The extraordinary life of Sam Hell" />
         <img src={book3} alt="the Secret life of Sunflowers" />
      </div>      
   );
}