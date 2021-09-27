const AddBookForm = () => (
  <section>
    <h2>Add New Book</h2>
    <form>
      <input placeholder="Book title" />
      <select required>
        <option value="" disabled selected hidden>Category</option>
        <option value="Thriller">Thriller</option>
      </select>
      <input type="submit" value="Add Book" />
    </form>
  </section>
);

export default AddBookForm;
