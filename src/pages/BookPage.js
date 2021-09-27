import Book from "../components/Book";
import AddBookForm from "../components/AddBookForm";

const BookPage = () => {
  return (
    <section>
      <Book title="A Hundred Years of Solitude" author="Gabriel García Márquez" />
      <Book title="Pride and Prejudice" author="Jane Austen" />
      <AddBookForm />
    </section>
  );
};

export default BookPage;
