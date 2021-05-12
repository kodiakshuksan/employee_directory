import React from 'react';


const Button = ({isActive, clicked})=> {
   

    return (
        <div>
            <button onClick={clicked}>{isActive ? "Get Another Directory" : "Get My Directory"}</button>
           

        </div>
    );
}

export default Button;


