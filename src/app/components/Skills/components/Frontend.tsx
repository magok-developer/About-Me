import React, { useRef } from "react";

import styled from "@emotion/styled";
import ProgressBar from "../../../../components/Progress/ProgressBar";
import Image from "next/image";

type Props = {
  frontSkillView: boolean;
};

const Frontend = ({ frontSkillView }: Props) => {
  return (
    <Container frontSkillView={frontSkillView}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/HTML.svg'
            width={30}
            height={30}
            alt='html'
          />
          <ProgressBar name='fe' value={60} />
          <Text>HTML</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/CSS.svg'
            width={30}
            height={30}
            alt='css'
          />
          <ProgressBar name='fe' value={70} />
          <Text>CSS</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/JavaScript.svg'
            width={30}
            height={30}
            alt='JS'
          />
          <ProgressBar name='fe' value={60} />
          <Text>JavaScript</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/TypeScript.svg'
            width={30}
            height={30}
            alt='typeScript'
          />
          <ProgressBar name='fe' value={60} />
          <Text>TypeScript</Text>
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/react.svg'
            width={30}
            height={30}
            alt='react'
          />
          <ProgressBar name='fe' value={65} />
          <Text>React</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/NextJS-Light.svg'
            width={30}
            height={30}
            alt='nextJS'
          />
          <ProgressBar name='fe' value={65} />
          <Text>Next.js</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/ReactQuery.png'
            width={30}
            height={25}
            alt='reactQuery'
          />
          <ProgressBar name='fe' value={50} />
          <Text>React-Query</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/zustand.png'
            width={30}
            height={30}
            alt='zustand'
          />
          <ProgressBar name='fe' value={20} />
          <Text>Zustand</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/StyledComponents.svg'
            width={30}
            height={30}
            alt='styledComponents'
          />
          <ProgressBar name='fe' value={65} />
          <Text>Styled-Components</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/emotion.png'
            width={30}
            height={30}
            alt='emotion'
          />
          <ProgressBar name='fe' value={65} />
          <Text>Emotion</Text>
        </div>
      </div>
    </Container>
  );
};

export default Frontend;

const Container = styled.div<{ frontSkillView: boolean }>`
  display: ${({ frontSkillView }) => (frontSkillView ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const Text = styled.div`
  font-weight: bold;

  @media (max-width: 479px) {
    font-size: 10px;
  }
  @media (min-width: 480px) and (max-width: 600px) {
    font-size: 12px;
  }

  @media (min-width: 601px) and (max-width: 750px) {
    font-size: 14px;
  }

  @media (min-width: 751px) {
    font-size: 14px;
  }
`;
