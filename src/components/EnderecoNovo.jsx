import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Cep, Endereco, Address } from "./styles";
import Button from '@mui/material/Button';
import * as Yup from "yup";
import "./components.css";



const schema = Yup.object().shape({
    cep: Yup.string().max(8, "O campo deve ter no máximo 8 caracteres.").required("O campo é obrigatório."),
    numero: Yup.string().required("O campo é obrigatório."),
    cidade: Yup.string().required("O campo é obrigatório."),
    estado: Yup.string().required("O campo é obrigatório."),
    bairro: Yup.string().required("O campo é obrigatório."),
    logradouro: Yup.string().required("O campo é obrigatório."),

});

export default () => {
    const [OpenCep, setOpenCep] = useState(false);

    function onSubmit(values, actions) {
        console.log(values);
    }

    function onBlurCep(e, setFieldValue) {
        const { value } = e.target; /// pega o valor do campo input (atraves do name)
        const cep = value?.replace(/[^0-9]/g, ''); /// regex para remover caracteres não numéricos
        console.log(cep);

        if (cep?.length !== 8) { /// se o cep tiver 8 digitos
            return setFieldValue("cep", ""); /// limpa o campo
        }
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => {
                console.log(res.data);
                setFieldValue('logradouro', res.data.logradouro);
                setFieldValue('bairro', res.data.bairro);
                setFieldValue('cidade', res.data.localidade);
                setFieldValue('uf', res.data.uf);
            })
    }

    function handleCep(e) {
        

        return (
            <Address>
                
                    <div >
                        <label  name="logradouro">Logradouro</label>
                        <Field name="logradouro" type="text" className="form-control" />                 
                    </div>
                    <div >
                        <label  name="numero">Numero</label>
                        <Field name="numero" type="text" className="form-control" />
                        <ErrorMessage name="numero" component="span" className="error" />
                    </div>
                    <div >
                        <label name="bairro">Bairro</label>
                        <Field name="bairro" type="text" className="form-control" />                   
                    </div>
                    <div className="form-control-group">
                        <label name="cidade">Cidade</label>
                        <Field name="cidade" type="text" className="form-control" />                      
                    </div>
                    <div className="form-control-group">
                        <label name="uf">Estado</label>
                        <Field name="uf" type="text" className="form-control" />                  
                    </div>
                    <div className="form-control-group">
                        <label name="cidade">Cidade</label>
                        <Field name="cidade" type="text" className="form-control" />
                    </div>
               
            </Address>
        )
    }


    return (
        <Address>
            <div>
                <label><strong><h5>Endereço de cobrança</h5></strong></label>
            </div>
            <div>
                <Formik
                    validationSchema={schema}
                    onSubmit={onSubmit}
                    initialValues={{
                        cep: "",
                        logradouro: "",
                        bairro: "",
                        cidade: "",
                        uf: "",
                    }}
                >
                    {({ setFieldValue }) => (
                        <Form>
                            <div className="form-control-group">
                                <label name="cep">CEP</label>
                                <Field name="cep" type="text" maxLength="9" placeholder="00000000" className="form-control" onBlur={(e) => onBlurCep(e, setFieldValue)} />
                                <ErrorMessage name="cep" className="error" />
                                <Button variant="contained" onClick={() => setOpenCep(true)} >OK</Button>
                            </div>
                            <div>
                            {OpenCep && handleCep()}
                            </div>
                        </Form>
                    )}
                </Formik>



            </div>


        </Address>


    )
}