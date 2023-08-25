# POST Requests

## Deliverables

- Review the request config object
- Review `JSON.stringify()` and why it's used on the body of our request
- Handle the promise using a `.then` and call `.json()` on the response
- Handle that promise with a second `.then` (where we have our actual response body)
- Render data to the DOM
- Discuss optimistic vs pessimistic rendering
- Add a `.catch` to handle failed promises

## POST (Create)

Posts send data to the server. The information is usually sent from a form, creating a resource in the database.

We use `fetch` just like a `GET` request, but a `POST` request requires an additional argument, a request / config object.

```js
// Method: The HTTP method used in this request. Fetch requests are GET by default. Though they can take a request object, it's not necessary. Other requests, such as POST, require the method to identify what type of request it is. 

// Headers: An object that contains additional information for the request. The Content-Type indicates the original media type of the data. 

// Body: The data from the request. Before the request can be sent the data must be converted to JSON.
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body:JSON.stringify(formData)
})
```