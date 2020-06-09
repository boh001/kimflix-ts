import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { color } from "Components/variable";

export const GlobalStyle = createGlobalStyle`
    ${reset};
    
    *{
        -moz-box-sizing: border-box; /* Firefox  */
        -webkit-box-sizing: border-box; /* Safari */
        box-sizing: border-box; /* CSS3 Standard */
        color:${color.white};
        
    }

    a{
        text-decoration:none;
        color:inherit;
    }
    input{
        &:focus{
            outline:none;
        }
    }
`;
