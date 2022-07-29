import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import EnderecoNovo from "../components/EnderecoNovo";
import { useSelector } from "react-redux";
// import { selectUser } from "../store/userSlice";



    const schema = Yup.object().shape({
        firstName: Yup.string().required("Nome deve estar preenchido"),
        age: Yup.number().min(18, "Idade deve maior que 18 anos" ).required("Campo não pode ser vazio"),
        escolaridade: Yup.string().required("Campo não pode ser vazio"),
        trabalho: Yup.string().required("Campo não pode ser vazio"),
    })


export default function Validation() {


    function onSubmit(values,actions) {
        console.log(values);
    }
    
    return (
        <div>
            <h1>Validation</h1>
            <Formik 
            onSubmit={onSubmit}
            validationSchema={schema}
            initialValues={{  // iniciando os valores, estão zerados
                firstName: "", 
                age: "", 
                escolaridade: "",
                trabalho: "",
            }}
            >
                {({errors, touched, isValid })=> (
                    <Form>
                        <div>
                            <label id="FirstName">Primeiro Nome</label>
                            <Field id="FirstName" name="firstName" type="text" />
                            <ErrorMessage name="FirstName" />
                            {/* {errors.firstName && touched.firstName && <span className="errorInput">{errors.firstName}</span>}  */}
                        </div>
                        <div>
                         <label id="age">Idade</label>
                            <Field id="age" name="age" type="number" />
                            {errors.age && touched.age && <span className="errorInput">{errors.age}</span>}
                        </div>
                        <div>
                            <label >Escolaridade</label>
                            <Field  name="escolaridade" type="text" />
                            {errors.escolaridade && touched.escolaridade && <span className="errorInput">{errors.firstName}</span>} 
                        </div>
                        <div>
                         <label id="trabalho">Ultimo trabalho</label>
                            <Field id="trabalho" name="trabalho" type="number" />
                            {errors.trabalho && touched.trabalho && <span className="errorInput">{errors.trabalho}</span>}
                        </div>
                        <button type="submit" disabled={!isValid} >Enviar</button>
                    </Form>
                )}
            </Formik>

            <EnderecoNovo/>

        </div>
    );
}