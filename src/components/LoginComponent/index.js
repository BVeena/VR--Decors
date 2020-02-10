import React from 'react';
import ValidatedLoginForm from './ValidatedLoginForm';
import './Login.css';
function LoginComponent() {
    return(
        <div className ="login">
                <div className="imgcontainer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_h1-ndFdLmk7IIzAoADDo1GqzkdAXqI48XTKKuDyhBe5ZEH-R&s" alt="Avatar" className="avatar"/>
                </div>
            <ValidatedLoginForm/>
        </div>
    );
       
    
}


export default LoginComponent;