"use client";

import styled from "@emotion/styled";
import { color } from "./styles/color";

import Home from "./components/Home/Home";

const Page = () => {
  return (
    <Container>
      <Home />
    </Container>
  );
};
export default Page;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
