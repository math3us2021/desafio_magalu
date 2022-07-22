import React from "react";
import { Dados, Nome, DataNasc, Senha, Cpf } from "./styles";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';

export default () => {

    return (
        <Dados>
            <label><strong><h5>Dados pessoais</h5></strong></label>
            <Cpf className="form-group row">
                <label  className="col-sm-2 col-form-label">CPF</label>
                <input type="email" className="form-control" id="inputEmail3" placeholder="Email"></input>
            </Cpf>
            <Nome className="form-group row">
                <label>Nome completo</label>
                <input type="password" className="form-control" id="inputPassword3" placeholder="Senha"></input>
            </Nome>
            <DataNasc>
                <label >Data de Nascimento</label>
                <input className="form-control" placeholder="DD/MM/AAAA"></input>
            </DataNasc>
            <Senha>
                <label className="FormGroup-label " >Senha (Minimo de seis digitos)</label>
                <input className="form-control" placeholder="Senha" ></input>
            </Senha>
        </Dados >
    )
}