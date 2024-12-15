import React from "react";  
import ReactDom from "react-dom/client";
  
const rootDiv = document.getElementById("root");   

ReactDom.createRoot(rootDiv).render(
  <div>  
    <h1>Hello World</h1>    
    <b>Welcome to react</b> 
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vitae error
      consequuntur quibusdam sint vero, provident maxime eius adipisci. Nemo
      voluptate quasi suscipit iste cum officia eos accusamus eligendi sint  
      nisi, quis id error animi deleniti beatae unde. Quas enim officiis optio,
      similique
    </p>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <img src="/public/vite.svg" alt="" />  
  </div>  
); 
