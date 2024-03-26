"use client";

import styled from "@emotion/styled";
import { useObserver } from "./hook/useObserver";
import { useState } from "react";
import Header from "./components/Header/Header";
import Background from "./components/Background/Background";
import Content from "./components/Content/Content";

const Page = () => {
  const [isFocused, setIsFocused] = useState("first");

  const router = [
    {
      path: "first",
      label: "<Home />",
      observe: useObserver("first", setIsFocused),
    },
    {
      path: "second",
      label: "<About Me />",
      observe: useObserver("second", setIsFocused),
    },
    {
      path: "third",
      label: "<Skills />",
      observe: useObserver("third", setIsFocused),
    },
    {
      path: "fourth",
      label: "<Project />",
      observe: useObserver("fourth", setIsFocused),
    },
    {
      path: "last",
      label: "<Contact />",
      observe: useObserver("last", setIsFocused),
    },
  ];

  const onScroll = (
    refCurrent: React.RefObject<HTMLDivElement>,
    name: string
  ) => {
    if (refCurrent.current) {
      refCurrent.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <Header
        router={router}
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        onScroll={onScroll}
      />
      <Background>
        <Content router={router} />
      </Background>
    </Container>
  );
};
export default Page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .wrap {
  }
`;
