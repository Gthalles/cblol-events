import styled from "styled-components";
import { Props } from ".";

export const Button = styled.button `
    width: 100%;
    height: 35px;
    margin: 25px auto 20px auto;
    border-radius: 5px;
    border: none;
    cursor: ${ ({disable}: Props) => disable ? "not-allowed" : "pointer" };
    font-size: 16px;
    color: #ffffff;
    background-color: ${ ({ color, disabledColor, disable }: Props) => disable ? disabledColor : color };
`;