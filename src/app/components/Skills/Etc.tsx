import React from "react";

import styled from "@emotion/styled";
import ProgressBar from "../Progress/ProgressBar";
import Image from "next/image";

const Etc = () => {
  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/Git.svg'
            width={30}
            height={30}
            alt='git'
          />
          <ProgressBar />
          <Text>Git</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/Postman.svg'
            width={30}
            height={30}
            alt='postman'
          />
          <ProgressBar />
          <Text>Postman</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/Swagger.png'
            width={30}
            height={30}
            alt='swagger'
          />
          <ProgressBar />
          <Text>Swagger</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/Figma.svg'
            width={30}
            height={30}
            alt='Figma'
          />
          <ProgressBar />
          <Text>Figma</Text>
        </div>
      </div>
    </Container>
  );
};

export default Etc;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 50%;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
