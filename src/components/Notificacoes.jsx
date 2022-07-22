import React from "react";
import { Notification, NotificationBody, Title } from "./styles";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SmsIcon from '@mui/icons-material/Sms';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Checkbox from '@mui/material/Checkbox';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


export default () => {

    return (
        <Notification>
            <div>
                <h4><b>Notificações </b>(opcional)</h4>
            </div>
            <div>
                <span>Escolha quais os canais e tipo de mensagens do Grupo Magazine Luiza você quer <br></br> receber. O contato com <b> você é muito importante pra gente fazer a diferença no<br></br> seu dia a dia</b>
                </span>
            </div>
            <Title>
                <label>
                    <Checkbox sx={{ m: -1 }}/>
                    <span>Selecione todas as opções</span>
                </label>
            </Title>
            <NotificationBody>
                <div>
                    <label>
                        <WhatsAppIcon color="primary" />
                        <span> Lu do Magalu no WhatsApp</span>
                    </label>
                </div>
                <div>
                    <label>
                    <Checkbox sx={{ m: -1 }}/>
                        <span>Gostaria de <b>receber mensagens com cupons e novidades</b></span>
                    </label>
                </div>
                <div>
                    <label>
                    <Checkbox sx={{ m: -1 }}/>
                        <span>Quero <b>acompanhar o status do meu pedido</b></span>
                    </label>
                </div>
            </NotificationBody>
            <NotificationBody>
                <div>
                    <label>
                        <AlternateEmailIcon color="primary" />
                        <span> Email</span>
                    </label>
                </div>
                <div>
                    <label>
                    <Checkbox sx={{ m: -1 }}/>
                        <span>Aceito receber e-mails com <b>dicas da Lu e ofertas exclusivas</b></span>
                    </label>
                </div>
            </NotificationBody>
            <NotificationBody>
                <div>
                    <label>
                        <NotificationsNoneIcon color="primary" />
                        <span> Notificações do aplicativo</span>
                    </label>
                </div>
                <div>
                    <label>
                    <Checkbox sx={{ m: -1 }}/>
                        <span>Quero receber avisos de <b>liquidações e ofertas imperdíveis no SuperApp</b></span>
                    </label>
                </div>
            </NotificationBody>
            <NotificationBody>
                <div>
                    <label>
                        <SmsIcon color="primary" />
                        <span> SMS</span>
                    </label>
                </div>
                <div>
                    <label>
                    <Checkbox sx={{ m: -1 }}/>
                        <span>Receber informações de <b>promoções e lançamentos direto no meu celular</b></span>
                    </label>
                </div>
            </NotificationBody>
            <NotificationBody>
                <div>
                    <label>
                        <HomeWorkIcon color="primary" />
                        <span> Vendedores</span>
                    </label>
                </div>
                <div>
                    <label>
                       <Checkbox sx={{ m: -1 }}/>
                        <span>Receber <b>dicas e ajuda do time de vendas no WhatsApp</b></span>
                    </label>
                </div>
                <div>
                    <label>
                       <Checkbox sx={{ m: -1 }}/>
                        <span>QReceber <b>ligações do time de vendas</b></span>
                    </label>
                </div>
            </NotificationBody>
            <NotificationBody>
                <div>
                    <label>
                        <MailOutlineIcon color="primary" />
                        <span> Correspondências de promoções</span>
                    </label>
                </div>
                <div>
                    <label>
                       <Checkbox sx={{ m: -1 }}/>
                        <span> Topo receber <b>cartas, brindes e convites</b></span>
                    </label>
                </div>
            </NotificationBody>

        </Notification>
    );
}