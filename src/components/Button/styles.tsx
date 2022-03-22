import styled from "styled-components";
import { Props } from ".";

export const ButtonLink = styled.a `
    width: 100%;
    height: 100%;
`;

export const Button = styled.button `
    width: 100%;
    height: 35px;
    margin: 15px auto 10px auto;
    border-radius: 5px;
    border: none;
    cursor: ${ ({disable}: Props) => disable ? "not-allowed" : "pointer" };
    font-size: 16px;
    color: #ffffff;
    background-color: ${ ({ color, disabledColor, disable }: Props) => disable ? disabledColor : color };
`;