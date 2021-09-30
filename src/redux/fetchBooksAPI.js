const fetchBooksAPI = async (requestMethod, book = { item_id: '' }) => {
  const arrangeResponseData = (response) => {
    if (requestMethod === 'GET') {
      const books = [];
      Object.entries(response).forEach((entry) => {
        books.push({
          item_id: entry[0],
          title: entry[1][0].title,
          category: entry[1][0].category,
        });
      });
      return books;
    }
    return response;
  };

  const optionalBody = () => {
    if (requestMethod === 'POST') {
      return JSON.stringify(book);
    }
    return undefined;
  };

  const appendIDOnDelete = () => {
    const appURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/nLlW4EHqUY1Md2WUWrZe/books/';
    if (requestMethod === 'DELETE') {
      return appURL + book.item_id;
    }
    return appURL;
  };

  const URL = appendIDOnDelete();

  const request = await fetch(URL, {
    method: requestMethod,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: optionalBody(),
  });
  const response = await request.json();
  return arrangeResponseData(response);
};

export default fetchBooksAPI;
