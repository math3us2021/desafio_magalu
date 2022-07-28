import styled from "styled-components";
import Button from '@mui/material/Button';

export const Title = styled.div`
    margin-left: 8%;
    margin-top: 30px;
    margin-bottom: 20px;
    
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


export const InputError = styled.input`
.errorInput{
    border: 1px solid red !important;
}
`;

export const Conta = styled.div`
    display: flex;
    
    justify-content: center;

    div{
  
        margin : 10px;
        text-align: center;
    }
label{
 
}

`;

export const FormEmail = styled.div`


label{
   margin : 5px;
    align-self: center;
}

input{
    width: 300px;
}
button{
    background-color: ##2e7d32!important;
    width: 300px;
    margin-left: 50px;
}


`;