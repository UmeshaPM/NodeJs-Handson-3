<h1>What is Middleware in NodeJs</h1>

<ul>
<li>Middleware are like any general functions which takes in three parameters as request, response and next function.</li>
<li>These middleware are used to execute some function before the response is send back to the client.</li>
<li>It mostly gets used for the authentication, that before we send the response, we can authenticate if the API request is called from the client with proper user credentials or not.</li>
<li>These middleware can be applied on the whole application level as well as on one particular API route.</li>
<li>next() function is very important, after the end of each middleware we should execute next function so that the program execution can move either to next middleware or to main route, if this function is not added then execution will not move forward.</li>
</ul>

</br>

/*
In this we have written a function named middleware1, this is working as middleware, it takes in 3 arguments req, res, next.
app.use(middleware1), this will apply the middleware on the whole application.
*/

const middleware1 = (req, res, next)=>{    <br>
   console.log("Middleware 1");            <br>
    next()                                 <br>
}
