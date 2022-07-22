import React from "react";
import {Link} from "react-router-dom";
import { FooterForm, NotificationBody } from "./styles";
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

export default () => {

    return (
        <div>
            <FooterForm>
                <NotificationBody>
                    <div>
                        <label>
                            <Checkbox sx={{ m: -1 }} />
                            <span>Li e aceito a 
                                <Link to={""}>
                                Política de privacidade
                                </Link>
                                 do Grupo Magazine Luiza</span>
                        </label>
                    </div>
                </NotificationBody>
                <Button variant="contained" disabled>Continuar</Button>
            </FooterForm>

        </div>
    )
}