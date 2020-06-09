import styled from "styled-components";
import { color, center } from "Components/variable";
export const LoadingFrame = styled.div`
  width: 100%;
  height: 100vh;
  ${center};
`;
export const Loading = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 0.5rem solid black;
  border-top-color: ${color.red};
  animation: spin 1s infinite linear;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
