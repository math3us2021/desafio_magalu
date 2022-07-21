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


input{
    width: 250px;
}

`;