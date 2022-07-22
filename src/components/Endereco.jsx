import React from "react";
import { Cep, Endereco } from "./styles";


export default () => {
    // const [cep, setCep] = useState("");

    return(
        <div>
            <Endereco>
                <div>
                    <label><strong><h5>Endereço de cobrança</h5></strong></label>
                </div>
                <Cep>
                    <label>CEP</label>
                    <input type="text" className="form-control" placeholder="Digite seu CEP"></input>
                    <button>OK</button>
                </Cep>
            </Endereco>
        </div>
        

    )
}