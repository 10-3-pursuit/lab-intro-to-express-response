Thought questions

What characters are allowed in a URL?
What happens if you try to create a URL /tim gunn
Is there a difference between /timgunn and /TimGunn and /tim/gunn?
If you have a phrase like Here's looking at you, kid, how do you deal with the ' in Here's?

The http protocol is very specific in that there is one response for every request.

In this case we are breaking the protocol and trying to send two responses for one request.

The error message is telling us that we are trying to set another set of headers after the first one.

Since the error happens after the first response is sent, we should still see our first response in the browser.

We can look through the call stack of the error messages. This is the order of the code that lead to the error. Many of these files are in node_modules - therefore it is not code we have written. But we can find that in the screenshot of my error above, I have an error on app.js 72:7 - this means that I can look to that file that I wrote and find that line of code that I have written to see what I wrote that may have (likely has) triggered the error, and indeed, that is where I have sent two responses.

I can resolve this, by combining the res.send, into one string. Or I could possibly create a new route /terminator2 or an even different solution- it would depend on what my goal is for the user/application.