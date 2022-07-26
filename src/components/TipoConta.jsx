import React, { useState } from "react";
import PessoaFisica from "./PessoaFisica";
import PessoaJuridica from "./PessoaJuridica";
import { TipoConta } from "./styles";

export default () => {
    const [checked, setChecked] = useState("PF");


    function PessoaFis() {
        return (
            <PessoaFisica />
        )
    }


    function PessoaJurid() {
        return (
            <PessoaJuridica />
        )
    }



    console.log(checked)


    return (
        <div>
            <TipoConta>
                <div>
                    <span>Tipo de Conta</span>
                </div>

                <div class="form-check">
                    <input  type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                        value={checked} onClick={(e) => setChecked("PF")} checked></input>
                    <label class="form-check-label" for="exampleRadios1">
                        Pessoa Física
                    </label>
                </div>


                <div class="form-check">
                    <input  type="radio" name="flexRadioDefault" id="flexRadioDefault2" 
                        value={checked} onClick={(e) => setChecked("PJ")} ></input>
                    <label class="form-check-label" for="exampleRadios1">
                        Pessoa Juridica
                    </label>
                </div>
            </TipoConta>
            {checked === "PF" ? PessoaFis() : PessoaJurid()}
        </div>
    )
}