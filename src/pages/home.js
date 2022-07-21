import React from "react";
import Navbar from "../components/Navbar";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import { Title, RedesSociais, Google, Email } from "./styles";
import TipoConta from "../components/TipoConta";
import DadosPessoais from "../components/DadosPessoais";


export default function Home() {

    return (
        <div>
            <Navbar></Navbar>
            <Title>
                <h1>Quero criar uma conta</h1>
            </Title>

            <RedesSociais>
                <span>Use sua rede social  para se conectar*</span>
                <Button variant="contained" startIcon={<FacebookIcon />} >Facebook</Button>
                <Google name="google" variant="contained" className="fas fa-phone-alt" startIcon={<GoogleIcon />} >Google</Google>

            </RedesSociais>


            <Email>
                <div>
                    <label>Email</label>
                    <div>
                        <input></input>
                    </div>
                </div>
            </Email>
            <TipoConta/>
            <DadosPessoais/>
        </div>)
}