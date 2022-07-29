import React from "react";
import Navbar from "../components/Navbar";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import { Title, RedesSociais, Google, Email } from "./styles";
import TipoConta from "../components/TipoConta";
import EnderecoNovo from "../components/EnderecoNovo";
import Notificacoes from "../components/Notificacoes";
import MagaluPlay from "../components/MagaluPlay";
import FooterFormul  from "../components/FooterFormul";
import Footer from "../components/Footer";
import { selectUser } from "../store/userSlice";
import { useSelector } from "react-redux";


export default function Home() {
  

    const email = useSelector(selectUser);
    console.log("**** Redux*** ", email);

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
                        <input value={email} className="form-control"></input>
                    </div>
                </div>
            </Email>
            <TipoConta/>       
            <EnderecoNovo/>
            <Notificacoes/>
            <MagaluPlay/>
            <FooterFormul/>
            <Footer/>
        </div>)
}