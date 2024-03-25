"use client";

import styled from "@emotion/styled";
import { color } from "./styles/color";

import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";
import { useObserver } from "./hook/useObserver";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "./components/Header/Header";

const Page = () => {
  const path = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState("first");

  const router = [
    {
      path: "first",
      label: "Home",
      observe: useObserver("first", setIsFocused),
    },
    {
      path: "second",
      label: "About Me",
      observe: useObserver("second", setIsFocused),
    },
    {
      path: "third",
      label: "Skills",
      observe: useObserver("third", setIsFocused),
    },
    {
      path: "fourth",
      label: "Project",
      observe: useObserver("fourth", setIsFocused),
    },
    {
      path: "last",
      label: "Contact",
      observe: useObserver("last", setIsFocused),
    },
  ];

  return (
    <Container>
      <Header router={router} isFocused={isFocused} />

      <Home element={scrollRef} />
      <AboutMe element={router[1].observe} />
      <Skills element={router[2].observe} />
      <Project element={router[3].observe} />
      <Contact element={router[4].observe} />
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
