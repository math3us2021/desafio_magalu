import React from "react";
import "./index.css";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

export default function Login() {

    function validate() {
 
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

        console.log(email.value);

        if(email.value === ""){
            email.classList.add('errorInput');
        }else{
            email.classList.remove('errorInput');
        }

        if(password.value === ""){
            password.classList.add('errorInput');
        }else{
            email.classList.remove('errorInput');
        }

        if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1  || ( email.value.indexOf('@') - email.value.indexOf('.') === 1 )) {
            // console.log("password is incorrect");
            email.classList.add('errorInput');
        }else{
            email.classList.remove('errorInput');
        }

        if(!isNaN(email.value) === true && email.value.length === 11){
            email.classList.remove('errorInput');
        }
        
        if(password.value.length < 6){
            password.classList.add('errorInput');
        }else{
            password.classList.remove('errorInput');
        }
    }
    

    

  return (
    <div>
        <form>
            <label>Email</label>
            <Input placeholder="Email" id="email" ></Input>


            <label>Senha</label>
            <Input placeholder="Senha" id="password"></Input>

            <Button onClick={validate} id="button">Entrar</Button>
            {/* <Button id="button">Entrar</Button> */}
        </form>
    </div>
  )
}