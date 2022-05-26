import React from 'react';
import Footer from '../../shared/Footer/Footer';


const Blogs = () => {
    return (
        <div className='bg-gray-100 h-screen pt-16'>
            <div className='flex justify-center mx-5'>
            <div>
                <h2 className='font-semibold text-2xl mb-4 '>How will you improve the performance of a React Application?</h2>
                <p className='mb-5'>
                There are various things we can do to increase React Application's performance. Using React speed optimization tools, we can find wasteful renderings in React. Should Component Update be implemented to avoid wasteful renders? Pure Component can also be used to help boost performance. With Immutable.js, we can also avoid wasting renderings in React. We can also try lazy loading images to improve the app's loading time. By using the correct keys for components, we can improve the efficiency of React lists.
                </p>

                <h2 className='font-semibold text-2xl mb-4'>What are the different ways to manage a state in a React application?</h2>
                <p className='mb-5'>
                In a React application, there are several approaches to manage distinct states. We can use the useState hook to manage a local state. We can use Context API to maintain a global state, but it isn't a good solution, thus we can use third-party libraries. We can use a third-party library like SWR to manage the state of a server. Finally, we can control a URL state with useLocation, useHistory, or useParams.
                </p>


                <h2 className='font-semibold text-2xl mb-4'>How does prototypical inheritance work?</h2>
                <p className='mb-5'>
                The concept of prototype chaining is used in prototypal inheritance. Let's have a look at the concept of a [[Prototype]] property on every object that points to another object or null. Consider the [[Prototype]] property on object C, which corresponds to object B. Item B's [[Prototype]] property refers to prototype object A. This process continues endlessly, resulting in the prototype chain. This principle is used when we search our code. When we need to find a property in an object, we first look for it in the object, then the prototype, and so on. As a result, the entire prototype chain is investigated until the property is found or null is reached.
                </p>


                <h2 className='font-semibold text-2xl mb-4'> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p className='mb-5'>
                The array of the products must be containing objects of product. To find the products only by name, I'll use filter method. Inside filter method, I'll query only by name and if name is matched, then it will be stored in the resultant array. The main code for this problem is: " const result = products.filter(product => product.name == 'someName'); ". The output will be stored in the result array.
                </p>


                <h2 className='font-semibold text-2xl mb-4'> What is a unit test? Why should we write unit tests?</h2>
                <p className='mb-5'>
                The primary goal of unit testing is to segregate written code in order to test and verify that it functions as intended. Unit testing is an important part of the development process because, when done correctly, it can help uncover early flaws in code that would be difficult to find in later phases of testing. TDD (test-driven development) is a practical methodology that takes a thorough approach to developing a product by testing and revising it continuously. Unit testing is the first level of software testing, and it takes precedence over other types of testing such as integration testing.
                </p>
            </div>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default Blogs;