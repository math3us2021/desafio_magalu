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
export const Linha = styled.div`
heigth: 50px
width: 100%;
background: #CE5937;
background: -moz-linear-gradient(left, #CE5937 0%, #1C6EA4 50%, #C59237 100%);
background: -webkit-linear-gradient(left, #CE5937 0%, #1C6EA4 50%, #C59237 100%);
background: linear-gradient(to right, #CE5937 0%, #1C6EA4 50%, #C59237 100%);
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

label{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

input{
    width: 250px;
}
`;

export const Nome = styled.div`

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

export const Notification = styled.div`
margin: 0px 0px 25px 600px;

div{
    margin-top: 20px;
}

`;