"use client";

import { color } from "@/app/styles/color";
import styled from "@emotion/styled";
import { useRef, useState } from "react";

type Props = {
  router: any;
  isFocused: string;
};
const Header = ({ router, isFocused }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const onScroll = (
    refCurrent: React.RefObject<HTMLDivElement>,
    name: string
  ) => {
    if (refCurrent.current) {
      const currentTop = refCurrent.current.offsetTop;
      const titleHeight = 72;
      const top = name === "first" ? 0 : currentTop - titleHeight;

      window.scrollTo({ top: top, behavior: "smooth" });

      console.log("currentTop", currentTop);
      console.log("refCurrent", refCurrent);
      console.log("top", top);
    }
  };

  console.log("isFocused", isFocused);

  return (
    <Container>
      {router.map((item: any) => {
        const isActive = isFocused === item.path;
        return (
          <Content
            ref={item.observe}
            onClick={() => onScroll(item.observe, item.path)}
            style={{ color: isActive ? color.pointBlue : color.pointGray }}
          >
            {item.label}
          </Content>
        );
      })}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 72px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  background: rgba(245, 246, 247, 0.7);
  box-sizing: border-box;
`;

const Content = styled.div`
  color: ${color.pointGray};
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${color.pointBlue};
  }
`;
