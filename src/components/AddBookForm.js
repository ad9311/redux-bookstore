const AddBookForm = () => (
  <section className="pl-3">
    <h2>Add New Book</h2>
    <form>
      <input placeholder="Book title" className="mr-2" />
      <select required className="mr-2">
        <option value="" disabled selected hidden>Category</option>
        <option value="Thriller">Thriller</option>
      </select>
      <input type="submit" value="Add Book" />
    </form>
  </section>
);

export default AddBookForm;
