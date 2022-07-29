import React from "react";
import "./index.css";
import Button from '@mui/material/Button';
import Navbar from "../components/Navbar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Title, Conta, FormEmail } from "./styles";
import { selectUser } from "../store/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { changeUser, logout } from "../store/userSlice";
import { useNavigate } from "react-router-dom";


const schema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required("Email é obrigatório"),
});


export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    function onSubmit(values, actions) {
        dispatch(changeUser(values.email));
        navigate("/");
    }


    function onLogout() {
        dispatch(logout());
    }

    function nextPage() {
        navigate("/");
    }

    const email = useSelector(selectUser);
    console.log("**** Redux*** ", email);

    return (
        <div>
            <Navbar />
            <Title>
                <h1>Identificação</h1>
            </Title>

            <Button onClick={onLogout}>Zerar State</Button>

            <Button onClick={nextPage}>Home</Button>


            <Conta>
                <div>
                    <div >
                        <label><strong><h4>Quero criar uma conta</h4></strong></label>
                        <div>
                            <Formik
                                onSubmit={onSubmit}
                                validationSchema={schema}
                                initialValues={{
                                    email: "",
                                }}
                            >
                                {({ isValid, dirty }) => (
                                    <Form >

                                        <FormEmail>
                                            <label id="email">Email *</label>
                                            <Field placeholder="Email" name="email" id="email" ></Field>
                                            <ErrorMessage name="email" component="div"  className="errorInp" />
                                        </FormEmail>

                                        <button className="buttonEnvio"
                                        // <button  style={{ width: "300px", marginLeft: "60px", backgroundColor: "#2e7d32",color: "#FFF"}} 
                                            disabled={!isValid || !dirty}
                                            variant="contained"
                                            size="large" id="button"
                                        >ENTRAR</button>

                                    </Form>
                                )}

                            </Formik>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <label><strong><h4>Já sou cliente</h4></strong></label>
                        <FormEmail>
                            <div>
                                <label id="email2" >Email</label>
                                <input placeholder="Email" id="email2" name="email2" ></input>
                            </div>
                            <div>
                                <label>Senha</label>
                                <input placeholder="Senha" id="password"></input>
                            </div>
                            <Button color="success" variant="contained" size="large" id="button">Entrar</Button>

                        </FormEmail>

                    </div>
                </div>
            </Conta>
           
        </div>
    )
}




 // function validate(e) {
    //     e.preventDefault();

    //     const email = document.querySelector('#email');
    //     const password = document.querySelector('#password');

    //     console.log(email.value);

    //     if (email.value === "") {
    //         email.classList.add('errorInput');
    //     } else {
    //         email.classList.remove('errorInput');
    //     }

    //     if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1 || (email.value.indexOf('@') - email.value.indexOf('.') === 1)) {
    //         // console.log("password is incorrect");
    //         email.classList.add('errorInput');
    //     } else {
    //         email.classList.remove('errorInput');
    //     }

    //     if (!isNaN(email.value) === true && email.value.length === 11) {
    //         email.classList.remove('errorInput');
    //     }

    // }



    // function validateCliente(e) {
    //     e.preventDefault();

    //     const email2 = document.querySelector('#email2');
    //     const password = document.querySelector('#password');

    //     console.log(email2.value);

    //     if (email2.value === "") {
    //         email2.classList.add('errorInput');
    //     } else {
    //         email2.classList.remove('errorInput');

    //     }

    //     if (password.value === "") {
    //         password.classList.add('errorInput');
    //     } else {
    //         password.classList.remove('errorInput');

    //     }

    //     if (email2.value.indexOf('@') === -1 || email2.value.indexOf('.') === -1 || (email2.value.indexOf('@') - email2.value.indexOf('.') === 1)) {
    //         // console.log("password is incorrect");
    //         email2.classList.add('errorInput');
    //     } else {
    //         email2.classList.remove('errorInput');

    //     }

    //     if (!isNaN(email2.value) === true && email2.value.length === 11) {
    //         email2.classList.remove('errorInput');
    //     }

    //     if (password.value.length < 6) {
    //         password.classList.add('errorInput');
    //     } else {
    //         password.classList.remove('errorInput');
    //     }


    // }
