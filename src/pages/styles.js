import styled from "styled-components";
import Button from '@mui/material/Button';

export const Title = styled.div`
    margin-left: 8%;
h1{
  font-size: 1.8em;
  color: #0183cb;
}
  `;

export const RedesSociais = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    
`;

export const Google = styled(Button)`
    background-color: #eaeae1 !important;


    color: #333 !important;
`;

export const Email = styled.div`
    // display: flex;
    // justify-content: center;
    margin-left: 535px;
    
    div{
        display: flex;
        margin: 10px;
    }
    label{
        font-size: 1.2em;
        text-align: center;
        align-self: center;
        justify-self: center;
    }

`;
