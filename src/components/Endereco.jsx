import React, { useState } from "react";
import axios from "axios";
import { Cep, Endereco } from "./styles";
import Button from '@mui/material/Button';


export default () => {
    const [OpenCep, setOpenCep] = useState(false);
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estad, setEstad] = useState("");


    function handleCep(e) {
       
        axios.get(`https://viacep.com.br/ws/${cep}/json`)
            .then(res => {
                setCep(res.data.cep);
                setEndereco(res.data.logradouro);
                setBairro(res.data.bairro);
                setCidade(res.data.localidade);
                setEstad(res.data.uf);
            }
            )
            
            return(
                <div>
                    <input type="text" value={endereco} onChange={(e)=> setEndereco(e.target.value)} ></input>
                    <input type="text" value={bairro} onChange={(e)=> setBairro(e.target.value)} ></input>
                    <input type="text" value={cidade} onChange={(e)=> setCidade(e.target.value)} ></input>
                    <input type="text" value={estad} onChange={(e)=> setEstad(e.target.value)} ></input>

                </div>
            
            )
    }


    return (
        <div>
            <Endereco>
                <div>
                    <label><strong><h5>Endereço de cobrança</h5></strong></label>
                </div>
                <Cep>
                    <label>CEP</label>
                    <input type="text" value={cep} onChange={(e)=> setCep(e.target.value)} className="form-control" placeholder="Digite seu CEP"></input>
                    <Button variant="contained" onClick={()=> setOpenCep(true)} >OK</Button>
                </Cep>
                {OpenCep && handleCep()}
                
            </Endereco>
        </div>


    )
}