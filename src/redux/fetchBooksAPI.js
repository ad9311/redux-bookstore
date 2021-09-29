const fetchBooksAPI = async (requestMethod, book = { item_id: '' }) => {
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
  return response;
};

export default fetchBooksAPI;
