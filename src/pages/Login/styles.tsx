import styled from "styled-components";

export const Section = styled.section ` 
    width: 30vw;
    height: 78vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 30px 0;
    background-color: #ffffff;
    border-radius: 20px;
`;

export const Title = styled.h1 `
    font-family: "Gemunu Libre";
    font-size: 45px;
    font-weight: 400;
    line-height: 60px;
    letter-spacing: 0.135em;
    color: #353535;
`;

export const Logo = styled.img `
    margin-bottom: 20px;
`;

export const Form = styled.form `
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BottomField = styled.div `
    width: 100%;
    margin: 10px auto;
`;