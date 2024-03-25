"use client";

import { color } from "@/app/styles/color";
import styled from "@emotion/styled";
import { useRef, useState } from "react";

type Props = {
  router: any;
  isFocused: string;
  setIsFocused: (path: string) => void;
};
const Header = ({ router, isFocused, setIsFocused }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
      {router.map((item: any) => {
        const isActive = isFocused === item.path;
        return (
          <Content
            ref={item.observe}
            onClick={() => {
              setIsFocused(item.path);
              onScroll(item.observe, item.path);
            }}
            isActive={isActive}
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
  position: sticky;
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

const Content = styled.div<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? color.pointBlue : color.pointGray)};
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${color.pointBlue};
  }
`;
