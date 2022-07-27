import React from "react";
import { Dados, Nome, DataNasc, Senha, Cpf } from "./styles";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
    cpf: Yup.string().required("O CPF é obrigatório"),
    nome: Yup.string().required("O nome é obrigatório"),
    dataNascimento: Yup.string().min(15, "Idade mínima 15 anos").required("A data de nascimento é obrigatória"),
    senha: Yup.string().required("A senha é obrigatória")
});

export default () => {

    function onSubmit(values, action) {
        console.log(values);
    }

    return (
        <Dados>
            <Formik
                onSubmit={onSubmit}
                validationSchema={schema}
                initialValues={{
                    cpf: "",
                    nome: "",
                    dataNascimento: "",
                    senha: "",

                }}
            >
                {({}) => (
                <Form>
                    <label><strong><h5>Dados pessoais</h5></strong></label>
                    <Cpf className="form-group row">
                        <label id="cpf" className="col-sm-2 col-form-label">CPF</label>
                        <Field type="text" className="form-control" id="cpf" name="cpf" placeholder="CPF" ></Field>
                        <ErrorMessage name="cpf" component="span" className="alert alert-danger" />
                    </Cpf>
                    <Nome className="form-group row">
                        <label  className="col-sm-2 col-form-label" id="nome">Nome completo</label>
                        <Field type="text" className="form-control" name="nome" id="nome" placeholder="Nome completo"></Field>
                        <ErrorMessage name="nome" component="span" className="alert alert-danger" />
                    </Nome>
                    <DataNasc>
                        <label id="dataNascimento" >Data de Nascimento</label>
                        <Field id="dataNascimento"  name="dataNascimento" type="data" className="form-control" placeholder="DD/MM/AAAA"></Field>
                        <ErrorMessage name="dataNascimento" component="span" className="alert alert-danger" />
                    </DataNasc>
                    <Senha>
                        <label id="senha" className="FormGroup-label " >Senha (Minimo de seis digitos)</label>
                        <Field id="senha" name="senha" className="form-control" placeholder="Senha" ></Field>
                        <ErrorMessage name="senha" component="span" className="alert alert-danger" />
                    </Senha>
                </Form>)}
            </Formik>
        </Dados >
    )
}