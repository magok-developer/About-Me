"use client";

import styled from "@emotion/styled";
import { color } from "./styles/color";

import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

const Page = () => {
  return (
    <Container>
      <Home />
      <AboutMe />
      <Skills />
      <Contact />
    </Container>
  );
};
export default Page;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
