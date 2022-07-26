import styled from "styled-components";

export const Nav = styled.div`
background-color: #0086ff;
color: white;





ul{
    display: flex;
    justify-content: space-around;
    height: 50px;
    align-items: center;   
}

li{
    list-style-type: none;
}



`;
export const Footer = styled.div`
background-color: #0086ff;
color: white;

border-top: 1px solid #333;
bottom: 0;
left: 0;
height: 40px;
width: 100%;

ul{
    display: flex;
    justify-content: space-around;
    height: 50px;
    align-items: center;   
}

li{
    list-style-type: none;
}
`;
export const Linha = styled.div`
heigth: 50px
width: 100%;


div{
    width: 100%;
    height: 7px;
    border: 1px solid background: #D9E52F;
    background: -moz-linear-gradient(left, #D9E52F 0%, #EA5D1D 50%, #2466EA 100%);
    background: -webkit-linear-gradient(left, #D9E52F 0%, #EA5D1D 50%, #2466EA 100%);
    background: linear-gradient(to right, #D9E52F 0%, #EA5D1D 50%, #2466EA 100%);
}

`;

export const TipoConta = styled.div`
display: flex;
justify-content: center;

    div{
     
        margin-left: 10px;
     
    }
`;

export const Dados = styled.div`
display: flex;

align-items: center;
justify-content: center;
flex-direction: column;

div{
    display: flex;
    flex-direction: row;
}

// label{
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
// }


`;

export const Cpf = styled.div`
margin-right: 115px;
input{
    margin-left: 3px;
    width: 250px;

}
`;


export const Nome = styled.div`
margin-right: 5.5%;
label{
    text-align: center;
    justify-content: center;
    
}

input{
    width: 350px;
    margin: 10px;
}
`;
export const DataNasc = styled.div`
margin-right: 21.5%;
margin-top: 10px;

input{
    width: 150px;
    margin-left: 10px;
   
}
`;
export const Senha = styled.div`
margin-right: 20%;
margin-top: 20px;
input{
    width: 250px;
    margin-left: 10px;
}
`;

export const Cep = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Endereco = styled.form`
// display: flex;
// flex-direction: column;
// align-items: center;
margin: 0px 0px 25px 600px;

input{
    width: 250px;
    margin-left: 10px;
}
`;

export const Title = styled.div`
margin-top: 20px;
margin-bottom: 20px;`;


export const Notification = styled.div`
margin: 0px 0px 25px 600px;

`;

export const NotificationBody = styled.div`
margin-top: 20px;
margin-bottom: 20px;
`;

export const MagaluPlay = styled.div`
margin: 0px 0px 25px 600px;
border-top: 3px solid  #bfbfbf;
border-bottom: 3px solid #bfbfbf;

div{
    margin-top: 20px;
    margin-bottom: 20px;
}
`;
export const FooterForm = styled.div`
margin: 0px 0px 25px 600px;

`;

