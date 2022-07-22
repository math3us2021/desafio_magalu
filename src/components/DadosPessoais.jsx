import React from "react";
import { Dados, Nome, DataNasc, Senha } from "./styles";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';

export default () => {

    return (
        <Dados>
            <span>Dados Pessoais</span>
            <div class="form-group row">
                <label  class="col-sm-2 col-form-label">CPF</label>
                <input type="email" class="form-control" id="inputEmail3" placeholder="Email"></input>
            </div>
            <Nome class="form-group row">
                <label for="inputEmail3" >Nome completo</label>
                <input type="password" class="form-control" id="inputPassword3" placeholder="Senha"></input>
            </Nome>
            <DataNasc>
                <label >Data de Nascimento</label>
                <input class="form-control" placeholder="DD/MM/AAAA"></input>
            </DataNasc>
            <Senha>
                <label class="FormGroup-label " >Senha (Minimo de seis digitos)</label>
                <input class="form-control" placeholder="Senha" ></input>
            </Senha>
        </Dados >
    )
}