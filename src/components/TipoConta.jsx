import React, { useState } from "react";
import PessoaFisica from "./PessoaFisica";
import PessoaJuridica from "./PessoaJuridica";
import { TipoConta } from "./styles";
import Radio from '@mui/material/Radio';

export default () => {
    const [checked, setChecked] = useState("PF");
    const [selectedValue, setSelectedValue] = useState('a');


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
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <TipoConta>
                <div>
                    <div><strong>Tipo de Conta</strong></div>
                </div>

                <div>
                    Pessoa física
                    <Radio
                        checked={selectedValue === 'a'}
                        onChange={handleChange}
                        value="a"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'A' }}
                    />
                    Pessoa jurídica
                    <Radio
                        checked={selectedValue === 'b'}
                        onChange={handleChange}
                        value="b"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'B' }}
                    />
                </div>

            </TipoConta>
            {selectedValue === "a" ? PessoaFis() : PessoaJurid()}
        </div>
    )
}