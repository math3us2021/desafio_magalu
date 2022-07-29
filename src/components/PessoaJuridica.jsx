import React from "react";
import { Dados, Nome, DataNasc, Senha, Cpf } from "./styles";
import Checkbox from '@mui/material/Checkbox';


export default () => {

    return (
        <Dados>
            <form>
                <label><strong><h5>Dados pessoais</h5></strong></label>
                <Cpf className="form-group row">
                    <label className="col-sm-2 col-form-label">CNPJ</label>
                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email"></input>
                </Cpf>
                <Nome className="form-group row">
                    <label>Razão Social</label>
                    <input type="password" className="form-control" id="inputPassword3" placeholder="Senha"></input>
                </Nome>
                <DataNasc>
                    <label >Nome Fantasia</label>
                    <input className="form-control" placeholder="DD/MM/AAAA"></input>
                </DataNasc>
                <Senha>
                    <label className="FormGroup-label " >Incrição Estadual</label>
                    <input className="form-control" placeholder="Razão social" ></input>
                    <div>
                        <Checkbox sx={{ m: -1 }} />
                        <span >Isento</span>
                    </div>
                </Senha>
            </form>
        </Dados >
    )
}