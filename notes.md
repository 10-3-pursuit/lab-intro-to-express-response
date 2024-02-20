### Thought questions

1. What characters are allowed in a URL?
2. What happens if you try to create a URL /tim gunn
3. Is there a difference between /timgunn and /TimGunn and /tim/gunn?
4. If you have a phrase like Here's looking at you, kid, how do you deal with the ' in Here's?

### HTTP protocol and send req / res errors

The http protocol is very specific in that there is one response for every request.

```js
// error - can only send one response at a time (the first one)
app.get('/terminator', (req, res) => {
    res.send(catchPhrases.Terminator[0]);
    res.send(catchPhrases.Terminator[1]);
})

/*
In this case we are breaking the protocol and trying to send two responses for one request.

The error message is telling us that we are trying to set another set of headers after the first one.

Since the error happens after the first response is sent, we should still see our first response in the browser.
*/
```
We can look through the call stack of the error messages. This is the order of the code that lead to the error. Many of these files are in node_modules - therefore it is not code we have written. But we can find that in the screenshot of my error above, I have an error on app.js 72:7 - this means that I can look to that file that I wrote and find that line of code that I have written to see what I wrote that may have (likely has) triggered the error, and indeed, that is where I have sent two responses.

I can resolve this, by combining the res.send, into one string. Or I could possibly create a new route /terminator2 or an even different solution- it would depend on what my goal is for the user/application.

## Middleware

Middleware is a fundamental concept in Express.js that enables developers to execute code, make modifications to the request and response objects, end the request-response cycle, and call the next middleware in the stack. Middleware functions are essential for the efficient and modular design of an Express application for several reasons:

1. **Request Processing**: Middleware allows you to process and manipulate incoming requests before they reach their final route handlers. This can involve parsing request bodies, processing query parameters, or setting request headers.

2. **Response Enhancement**: You can use middleware to add additional information to the response or to customize its behavior. This might include setting response headers, defining content types, or even compressing the response data.

3. **Logging and Monitoring**: Middleware can be used to log requests to your application, monitor performance, and gather analytics. This is crucial for debugging, performance optimization, and understanding how users interact with your app.

4. **Authentication and Authorization**: You can implement authentication and authorization logic as middleware to protect routes and ensure that only authenticated users with sufficient permissions can access certain resources.

5. **Error Handling**: Express uses middleware for error handling. By defining error-handling middleware, you can catch and process errors that occur during the request-handling pipeline, providing a centralized place for error management.

6. **Serving Static Files**: As you've seen, Express uses middleware like `express.static` to serve static files. This simplifies the process of making images, CSS files, and JavaScript files accessible to clients.

7. **Third-party Integrations**: Middleware allows you to easily integrate third-party services and libraries into your application, whether for handling CORS, session management, or integrating with databases.

8. **Modularity and Reusability**: By structuring your application's logic into middleware functions, you create modular and reusable code. This improves the organization of your codebase and facilitates easier maintenance and development.

9. **Request Validation**: Middleware can be used to validate request data before it reaches the route handler, allowing for early rejection of invalid requests and reducing the amount of error handling required in your route logic.

Middleware functions are executed sequentially in the order they are added to your app. This order is crucial for building an effective processing pipeline for requests and responses. The flexibility and power of middleware enable Express.js to be adaptable to a wide range of web application requirements, making it a popular choice for Node.js developers.

### express.static Middleware

The middleware `express.static('public')` in your Express.js application serves a very specific purpose: it tells your Express app to serve static files from a directory named `public` located in the root of your project. Static files can include HTML, CSS, JavaScript, images, and other files that do not require server-side processing before being sent to the client. Here's a breakdown of what this middleware does:

1. **Serves Static Files**: When a request is made to your server for a specific file, Express will first check the `public` directory to see if the file exists. If it finds a matching file, Express will send this file as the response to the client.

2. **Direct Access via URL**: Files in the `public` directory can be accessed directly via a URL that corresponds to the file's path within the directory. For example, if there's a file at `public/css/style.css`, it can be accessed at `http://yourdomain.com/css/style.css`.

3. **Efficiency and Performance**: Serving static files through `express.static` is optimized for efficiency, with features like caching headers and gzip compression (if supported by the client), to improve the loading times and overall performance of your web application.

4. **Security**: By default, `express.static` only serves the files explicitly requested in the URL, and it does not allow directory listing, which means users cannot see the contents of directories. This behavior helps to protect the files and structure of your application from unauthorized access.

5. **Customization**: While the basic usage involves just specifying the directory name, `express.static` also allows for options to customize its behavior. For example, you can set cache control headers, enable or disable etag generation, and more, to fine-tune how your static files are served.

In the context of this application, including this middleware enables this app to serve the CSS file(s) located in the `public/css` directory. This is crucial for styling the web application's frontend, as the client's browser needs direct access to these static files to render the application correctly.