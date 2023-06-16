//styled-component 예제 따라하기!

import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

const PracButton = styled.button`
  padding: 2rem;
  font-size: 2rem;
  background: burlywood;
  border-radius: 1rem;
  transition: 0.5s;
`;

const PracButton1 = styled(PracButton)`
  padding: 1rem;
  font-size: 3rem;
  background: skyblue;
  border-radius: 2rem;
  transition: 0.5s;
`;

const PropsButton = styled.button`
  background: ${(props) => (props.yellow ? "yellow" : "blue")};
`;

const GlobalButton = styled.button`
  background: ${(props) => (props.color ? props.color : "red")};
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PracButton>Practice!</PracButton>
      <br />
      <PracButton1>Practice!</PracButton1>
      <br />
      <PropsButton yellow>Practice!</PropsButton>
      <br />
      <GlobalButton color="brown">Practice!</GlobalButton>
      <GlobalButton color="white">Practice!</GlobalButton>
      <GlobalButton color="grey">Practice!</GlobalButton>
      <GlobalButton color="violet">Practice!</GlobalButton>
      <GlobalButton color="pink">Practice!</GlobalButton>
    </>
  );
}
