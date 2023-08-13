import React from 'react';

const Blog = () => {
    return (
    <div className='p-20'>
     <h1 className='text-center text-3xl mb-10 text-orange-500 underline decoration-wavy	decoration-neutral-400 underline-offset-8'>This is blog page Question & Answer:</h1>

      

  <div className='shadow p-6 border  mb-6'>
     <h2 className='mb-2 text-blue-600  font-medium text-[20px] '>1. What is an access token and refresh token? How do they     work where should we store them on the client-side? </h2> 
     <p className='text-[19px]'>Ans : An access token and a refresh token are both used in authentication and authorization systems, typically in the context of web applications or APIs. They serve different purposes in the authentication flow.</p>
</div>



  <div className="shadow p-6 border  mb-6">
  <h2 className='mb-2 text-blue-600  font-medium text-[20px]'>2. Compare SQL and NoSQL databases?</h2>
    <p className='text-[19px]'>Ans : SQL databases are relational, and NoSQL databases are non-relational. SQL databases use structured query language SQL and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</p>
  </div>



  <div className="shadow p-6 border  mb-6">
  <h2 className='mb-2 text-blue-600  font-medium text-[20px]'>3. What is express js? What is Nest JS?</h2>
  <p className='text-[19px]'>Ans : NestJS is a Node.js framework for building server-side applications. It is based on TypeScript and JavaScrip . <br/>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application</p>
  </div>




  <div className="shadow p-6 border  mb-6">
  <h2 className='mb-2 text-blue-600  font-medium text-[20px]'>3.What is MongoDB aggregate and how does it work?</h2>
  <p className='text-[19px]'>Ans: Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipelin</p>
  </div>
   
 </div>
    );
};

export default Blog;