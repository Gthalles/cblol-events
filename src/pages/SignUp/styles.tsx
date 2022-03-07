import styled from "styled-components";

export const Section = styled.section ` 
    width: 36vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 35px 0;
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
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FieldGroup = styled.div `
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2em;
`;

export const BottomField = styled.div `
    width: 60%;
    margin: 10px auto 15px auto;
`;