"use client";

import { color } from "@/app/styles/color";
import styled from "@emotion/styled";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  return (
    <Container>
      <div>Home</div>
      <div>About Me</div>
      <div>Skills</div>
      <div>Project</div>
      <div>Contact</div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
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
