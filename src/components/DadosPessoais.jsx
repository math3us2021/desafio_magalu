import React from "react";
import { Dados } from "./styles";

export default () => {

    return (
        <Dados>
            
                <span>Dados Pessoais</span>
           
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">CPF</label>
                    <input type="email" class="form-control" id="inputEmail3" placeholder="Email"></input>
               
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Nome completo</label>
               
                    <input type="password" class="form-control" id="inputPassword3" placeholder="Senha"></input>
               
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Data de Nascimento</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3" placeholder="DD/MM/AAAA"></input>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Senha (Minimo de seis digitos)</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3" ></input>
                </div>
            </div>
        </Dados>
    )
}