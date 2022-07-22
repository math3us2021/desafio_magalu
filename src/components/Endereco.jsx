import React from "react";
import { Cep, Endereco } from "./styles";

export default () => {

    return(
        <div>
            <Endereco>
                <div>
                    <label><strong>Endereço de cobrança</strong></label>
                </div>
                <Cep>
                    <label>CEP</label>
                    <input type="text" placeholder="Digite seu CEP"></input>
                    <button>OK</button>
                </Cep>
            </Endereco>
        </div>
        

    )
}