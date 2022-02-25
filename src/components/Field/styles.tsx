import styled from "styled-components";

export const Field = styled.div `
    display: flex;
    align-itens: center;
    flex-direction: column;
    margin: 7px 0;
`;
    
export const Label = styled.label `
    margin-bottom: 3px;
    font-size: 12px;
    line-height: 16px;
`;
    
export const Input = styled.input `
    width: 200px;
    height: 30px;
    text-indent: 10px;
    border-radius: 5px;
    border: 1px solid rgba(117, 109, 109, 0.479);
`;

export const ErrorMessage = styled.p `
    height: 5px;
    margin: 5px 3px;
    font-size: 11px;
    line-height: 14px;
    color: #D61B24;
`;
