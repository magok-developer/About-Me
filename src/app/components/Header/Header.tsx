"use client";

import styled from "@emotion/styled";
import Image from "next/image";

const Header = () => {
  return (
    <Container>
      <Image src='/images/icons/menu.svg' width={32} height={32} alt='toggle' />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: end;
`;
