import React from 'react';

const Blogs = () => {
    return (
        <div className="container mb-5 mt-5 leading-tight">
            <h2>Qstion No 1. what is context api?</h2>
            <h3>Ans: </h3><p>Context API is an idea to produce global variables.
                These variables then can be passed around within the application.
                Any component that requires to access the variables AKA “state” can
                easily be done with the help of Context API.
                One can say that Context API is a lightweight version of Redux.Theres a
                built-in function in react called createContext().
                This function is required to incorporate Context API in
                any React application.We often need to pass our state across components.
                Sometimes what happens is that we need to pass state in multiple
                components in the application.
            </p>

            <h2>Qstion No 2. what is semantic tag?</h2>
            <h3>Ans:</h3> <p>Although nearly every HTML4 tag and all the HTML5 tags have
                semantic meanings, some tags are primarily semantic.Semantic HTML or
                semantic markup is HTML that introduces meaning to the web page rather
                than just presentation. For example, a "p" tag indicates that the enclosed
                text is a paragraph. This is both semantic and presentational because
                people know what paragraphs are, and browsers know how to display them.

                On the flip side of this equation, tags such as "b" and "i" are not semantic.
                They define only how the text should look (bold or italic), and don't provide
                any additional meaning to the markup.
            </p>
        </div>
    );
};

export default Blogs;