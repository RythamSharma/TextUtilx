import React from 'react';
export default function About(props) {
  return (
    <div style={{color:(props.mode)==='dark'?'white':'black'}} >
      <header>
        <h1 style={{marginTop:'90px'}} >TextUtilX</h1>
        <p>Text Operations Made Easy</p>
      </header>
      <main>
        <h2>About Us</h2>
        <p>
          TextUtilX is a powerful and versatile online text utility tool designed to cater to all your text manipulation needs. 
          With a range of operations such as converting text to lowercase or uppercase, extracting emails from a document, removing 
          extra spaces, and applying title case formatting, TextUtilX offers a seamless solution for working with text.
        </p>
        <h2>How it Works</h2>
        <p>
          At TextUtilX, we've leveraged the power of React to create a user-friendly interface that allows you to perform various 
          text operations effortlessly. Simply paste your text into the input box, select the desired operation, and let TextUtilX do 
          the rest. The processed text will be displayed, ready for you to copy and use as needed.
        </p>
        <h2>About the Creator - Rytham Sharma</h2>
        <p>
          TextUtilX was developed by Rytham Sharma, a passionate software developer with a mission to simplify text manipulation for 
          users worldwide. Rytham's expertise in React and dedication to creating efficient tools led to the inception of TextUtilX. 
          Rytham's vision is to provide a robust, reliable, and accessible text utility tool that enhances productivity and makes text 
          operations a breeze.
        </p>
      </main>
      <footer>
        <p>Contact Us: contact@textutilx.com</p>
        <p>&copy; 2023 TextUtilX. All rights reserved.</p>
      </footer>
    </div>
  );
};
