import React from "react";
import { Notification} from "./styles";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


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
            <div>
                <label>
                    <input type="checkbox" />
                    <span>Selecione todas as opções</span>
                </label>
            </div>
            <div>
                <label>
                    <WhatsAppIcon />
                    <span>Lu do Magalu no WhatsApp</span>
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" />
                    <span>Gostaria de <b>receber mensagens com cupons e novidades</b></span>
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" />
                    <span>Quero <b>acompanhar o status do meu pedido</b></span>
                </label>
            </div>

        </Notification>
    );
}