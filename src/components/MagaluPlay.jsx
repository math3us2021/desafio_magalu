import React from "react";
import { MagaluPlay } from "./styles";
import InfoIcon from '@mui/icons-material/Info';
import Checkbox from '@mui/material/Checkbox';
import {Link} from "react-router-dom";

export default () => {

    return (
        <MagaluPlay>
            <div>
                <h4><b>Que tal aproveitar e abrir sua conta MagaluPay?</b>(opcional)</h4>
            </div>
            <div>
                <span>Uma conta digital para todos, sem taxas escondidas e totalmente grátis. Você<br></br> conta com descontos especiais e cashback exclusivo em ofertas no SuperApp<br></br> Magalu.
                </span>
            </div>
            <div>
                <label>
                    <InfoIcon color="primary" />
                    <Link to={""}>
                    <span><strong>Saiba mais sobre o MagaluPlay</strong></span>
                    </Link>
                </label>
            </div>
            <div>
                <label>
                    <Checkbox sx={{ m: -1 }} />
                    <span>Gostaria de <b>receber mensagens com cupons e novidades</b></span>
                </label>
            </div>
        </MagaluPlay>
    )
}