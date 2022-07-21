import React from "react";
import {TipoConta} from "./styles";

export default () => {

    return (
        <TipoConta>
            <div>
                <span>Tipo de Conta</span>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="opcao1" checked></input>
                <label class="form-check-label" for="exampleRadios1">
                    Pessoa Física
                </label>
            </div>


            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="opcao1" checked></input>
                <label class="form-check-label" for="exampleRadios1">
                    Pessoa Juridica
                </label>
            </div>

        </TipoConta>
    )
}