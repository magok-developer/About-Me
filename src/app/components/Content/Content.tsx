"use client";

import styled from "@emotion/styled";

import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";

const Content = ({ router }: any) => {
  return (
    <ContentWrap>
      <Home element={router[0].observe} />
      <AboutMe element={router[1].observe} />
      <Skills element={router[2].observe} />
      <Project element={router[3].observe} />
      <Contact element={router[4].observe} />
    </ContentWrap>
  );
};
export default Content;

const ContentWrap = styled.div`
  margin: 0 10px 0 10px;
`;
