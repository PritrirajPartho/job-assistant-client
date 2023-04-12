import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <h1>1.When you should use Contdext Api?</h1>
            <h3>
                The props sending is very necessary for react App. We need sent a props to another components, <br></br>
                But, This way or prop driling is very worried process. So, For this you should use Context Api. <br />
                It is a React building system.
            </h3>
            <h1>2.What is custom hook?</h1>
            <h3>
                 Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other <br />
                 JavaScript functions. It allows you to reuse some piece of code in several parts of your app</h3>
            <h1>3. What is useRef()?</h1>
            <h3>
                As told above, useRef is a hook introduced with other hooks in React version 16.8 and is mainly <br />
                used for creating a reference of the DOM element or directly accessing it inside a functional component.
            </h3>
            <h1>4. What is useMemo()?</h1>
            <h3>
               useMemo in React is essential react hook for improving the performance and speed of your application <br/>
               by caching the output in the computer memory and returning it when the same input is given again.
            </h3>
        </div>
    );
};

export default Blog;