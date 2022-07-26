import React from "react";
import "./index.css";
import Button from '@mui/material/Button';
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";

import { Title, Conta, FormEmail } from "./styles";



export default function Login() {

    function validate(e) {
        e.preventDefault();

        const email = document.querySelector('#email');
        const password = document.querySelector('#password');

        console.log(email.value);

        if (email.value === "") {
            email.classList.add('errorInput');
        } else {
            email.classList.remove('errorInput');
        }

        if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1 || (email.value.indexOf('@') - email.value.indexOf('.') === 1)) {
            // console.log("password is incorrect");
            email.classList.add('errorInput');
        } else {
            email.classList.remove('errorInput');
        }

        if (!isNaN(email.value) === true && email.value.length === 11) {
            email.classList.remove('errorInput');
        }

    }



    function validateCliente(e) {
        e.preventDefault();

        const email = document.querySelector('#email');
        const password = document.querySelector('#password');

        console.log(email.value);

        if (email.value === "") {
            email.classList.add('errorInput');
        } else {
            email.classList.remove('errorInput');
        }

        if (password.value === "") {
            password.classList.add('errorInput');
        } else {
            password.classList.remove('errorInput');
        }

        if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1 || (email.value.indexOf('@') - email.value.indexOf('.') === 1)) {
            // console.log("password is incorrect");
            email.classList.add('errorInput');
        } else {
            email.classList.remove('errorInput');
        }

        if (!isNaN(email.value) === true && email.value.length === 11) {
            email.classList.remove('errorInput');
        }

        if (password.value.length < 6) {
            password.classList.add('errorInput');
        } else {
            password.classList.remove('errorInput');
        }
        

    }




    return (
        <div>
            <Navbar />

            <Title>
                <h1>Identificação</h1>
            </Title>

            <Conta>
                <div>
                    <div >
                        <label><strong><h4>Quero criar uma conta</h4></strong></label>
                        <div>
                            <FormEmail>
                                <div>
                                    <label>Email</label>
                                    <input className="form-control" placeholder="Email" id="email" ></input>
                                </div>
                                <div className="form-control-group">
                                    <Link to={"/"}>
                                    <Button color="success" variant="contained" size="large" onClick={validate} id="button">Entrar</Button>
                                    </Link>
                                </div>
                            </FormEmail>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <label><strong><h4>Já sou cliente</h4></strong></label>
                        <FormEmail>
                            <div>
                                <label id="email" >Email</label>
                                <input className="form-control" placeholder="Email" id="email" ></input>
                            </div>
                            <div>
                                <label>Senha</label>
                                <input className="form-control" placeholder="Senha" id="password"></input>
                            </div>
                            <Button color="success" variant="contained" size="large" onClick={validateCliente} id="button">Entrar</Button>

                        </FormEmail>
                    </div>
                </div>
            </Conta>
        </div>
    )
}