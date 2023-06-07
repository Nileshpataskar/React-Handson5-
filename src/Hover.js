import React from "react";
import Higher from "./Higher";
import './App.css';

const Hover = ({count,add})=>{
    return (
        <div>

        <h1 className="main">
           Hover:{count}</h1>
           

           <h3 className='information'>When we hover over the object it will change its property</h3>
            <br/>
            <div className="abc">
           <button className="button"  onMouseOver={add}>Click me</button>
</div>

       </div>
    )
}

export default Higher(Hover);