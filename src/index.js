// Our Data
// console.log(bookStore)

function formatPrice(price) {
  return '$' + parseFloat(price).toFixed(2)
}

function blurb(book) {
  const title = book.title;
  const author = book.author;
  const price = book.price;

  return `${title} by ${author} is on sale for $${price}`
}

////////////////////////////////
//        Using Fetch         //
////////////////////////////////

// GET all books
const baseUrl = "http://localhost:3000/books/"

fetch(baseUrl)
  .then(response => {
    // console.log('step 1', response)
    return response.json()
  })
  .then(books => {
    // console.log('step 2', books)

    // this loop is reading from data.js
    // bookStore.inventory.forEach(book => renderBook(book))

    // THIS loop is reading from db.json (the server)
    books.forEach(book => renderBook(book))
  })

// GET one store
fetch('http://localhost:3000/stores/3')
  .then(response => response.json())
  .then(store => {
    console.log(store)

    renderHeader(store)
    renderFooter(store)
  })
  .catch(e => console.error(e))

////////////////////////////////
//     Rendering Functions    //
////////////////////////////////

function renderHeader(bookStore) {
  document.getElementById('bookstore-name').textContent = bookStore.name
}

function renderFooter(bookStore) {
  document.getElementById('store').textContent = bookStore.location;
  document.getElementById('number').textContent = bookStore.number;
  document.getElementById('address').textContent = bookStore.address;
}

function renderBook(book) {
  const li = document.createElement('li');
  li.className = 'list-li';

  const h3 = document.createElement('h3');
  h3.textContent = book.title;
  li.append(h3)

  const author = document.createElement('p'); 
  author.textContent = book.author;
  li.append(author)

  const price = document.createElement('p');
  price.textContent = formatPrice(book.price);
  li.append(price)

  const img = document.createElement('img');
  img.src = book.imageUrl;
  img.alt = `${book.title} cover`;
  img.title = `${book.title} cover`;
  li.append(img)

  const button = document.createElement('button');
  button.textContent = 'Delete';

  // add event listener to delete a book
  button.addEventListener('click', (e) => {
    console.log(e.target)
    // e.target.parentElement.remove()
    li.remove()
  })

  li.append(button);

  document.getElementById('book-list').append(li)
}

// bookStore.inventory.forEach(book => renderBook(book))

////////////////////////////////
// Event listeners / handlers //
////////////////////////////////

// add event listeners and handlers to toggle the form display
const toggleFormButton = document.querySelector('#toggle-form')
const bookForm = document.getElementById('book-form')

function handleToggleForm(e) {
  const bookFormHidden = bookForm.classList.toggle('collapsed')

  if (bookFormHidden) {
    toggleFormButton.textContent = 'New Book'
  } else {
    toggleFormButton.textContent = 'Hide New Book'
  }
}

toggleFormButton.addEventListener('click', handleToggleForm)

// handle the form submission - create a new book object using the form values, call renderBook to add it to the DOM

bookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  // console.log(e.target.title)
  console.log(e.target.author.value)

  // e.target is the form
  // e.target._____ is the input element (correlates to the name property on the input)
  // e.target._____.value is the actual user input

  const newBook = {
    title: e.target.title.value,
    author: e.target.author.value,
    price: e.target.price.value,
    inventory: e.target.inventory.value,
    imageUrl: e.target.imageUrl.value,
    reviews: []
  }

  renderBook(newBook)

  handleToggleForm()
  e.target.reset()
})






// For Demo Purposes - External API

// fetch('https://api.sampleapis.com/beers/ale')
//   .then(res => res.json())
//   .then(ales => {
//     ales.forEach(ale => renderAle(ale))
//   })


//   function renderAle(ale) {

//     // id
//     // image
//     // name
//     // price
//     console.log(ale.price)
//     const li = document.createElement('li');
//     li.className = 'list-li';
  
//     const h3 = document.createElement('h3');
//     h3.textContent = ale.name;
//     li.append(h3)
  
//     const price = document.createElement('p');
//     price.textContent = ale.price;
//     li.append(price)
  
//     const img = document.createElement('img');
//     img.src = ale.image;
//     img.alt = `${ale.name} cover`;
//     img.title = `${ale.name} cover`;
//     li.append(img)
  
//     const button = document.createElement('button');
//     button.textContent = 'Delete';
  
//     // add event listener to delete a ale
//     button.addEventListener('click', (e) => {
//       console.log(e.target)
//       // e.target.parentElement.remove()
//       li.remove()
//     })
  
//     li.append(button);
  
//     document.getElementById('book-list').append(li)
//   }