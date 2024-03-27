import React, { useRef } from "react";

import styled from "@emotion/styled";
import ProgressBar from "../Progress/ProgressBar";
import Image from "next/image";
import { useScrollAnimation } from "@/app/hook/useScrollAnimation";

type Props = {
  isInViewport: any;
  ref: any;
};

const Frontend = ({ isInViewport, ref }: Props) => {
  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/HTML.svg'
            width={30}
            height={30}
            alt='html'
          />
          <ProgressBar
            className={isInViewport ? "progressbar" : ""}
            ref={ref}
          />
          <Text>HTML</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/CSS.svg'
            width={30}
            height={30}
            alt='css'
          />
          <ProgressBar
            className={isInViewport ? "progressbar" : ""}
            ref={ref}
          />
          <Text>CSS</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/JavaScript.svg'
            width={30}
            height={30}
            alt='JS'
          />
          <ProgressBar
            className={isInViewport ? "progressbar" : ""}
            ref={ref}
          />
          <Text>JavaScript</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/TypeScript.svg'
            width={30}
            height={30}
            alt='typeScript'
          />
          <ProgressBar className={isInViewport ? "progressbar" : ""} />
          <Text>TypeScript</Text>
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/React.svg'
            width={30}
            height={30}
            alt='react'
          />
          <ProgressBar
            className={isInViewport ? "progressbar" : ""}
            ref={ref}
          />
          <Text>React</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/NextJS-Light.svg'
            width={30}
            height={30}
            alt='nextJS'
          />
          <ProgressBar
            className={isInViewport ? "progressbar" : ""}
            ref={ref}
          />
          <Text>Next.js</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/ReactQuery.png'
            width={30}
            height={25}
            alt='reactQuery'
          />
          <ProgressBar
            className={isInViewport ? "progressbar" : ""}
            ref={ref}
          />
          <Text>React-Query</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/StyledComponents.svg'
            width={30}
            height={30}
            alt='styledComponents'
          />
          <ProgressBar
            className={isInViewport ? "progressbar" : ""}
            ref={ref}
          />
          <Text>Styled-Components</Text>
        </div>
      </div>
    </Container>
  );
};

export default Frontend;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
