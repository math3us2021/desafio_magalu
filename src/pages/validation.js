import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";



    const schema = Yup.object().shape({
        firstName: Yup.string().required("Nome deve estar preenchido"),
        age: Yup.number().min(18, "Idade deve maior que 18 anos" ).required("Campo não pode ser vazio"),
        escolaridade: Yup.string().required("Campo não pode ser vazio"),
        trabalho: Yup.string().required("Campo não pode ser vazio"),
    })


export default function Validation() {
    
    return (
        <div>
            <h1>Validation</h1>
            <Formik 
            validationSchema={schema}
            initialValues={{  // iniciando os valores, estão zerados
                firstName: "", 
                age: "", 
                escolaridade: "",
                trabalho: "",
            }}
            >
                {({errors})=> (
                    <Form>
                        <div>
                            <label id="FirstName">Primeiro Nome</label>
                            <Field id="FirstName" name="firstName" type="text" />
                            {errors.firstName && <span className="errorInput">{errors.firstName}</span>} 
                        </div>
                        <div>
                         <label id="age">Idade</label>
                            <Field id="age" name="age" type="number" />
                            {errors.age && <span className="errorInput">{errors.age}</span>}
                        </div>
                        <div>
                            <label >Escolaridade</label>
                            <Field  name="escolaridade" type="text" />
                            {errors.escolaridade && <span className="errorInput">{errors.firstName}</span>} 
                        </div>
                        <div>
                         <label id="trabalho">Ultimo trabalho</label>
                            <Field id="trabalho" name="trabalho" type="number" />
                            {errors.trabalho && <span className="errorInput">{errors.trabalho}</span>}
                        </div>
                        <button type="submit">Enviar</button>
                    </Form>
                )}
            </Formik>

        </div>
    );
}