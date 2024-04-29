import React from "react";

import styled from "@emotion/styled";
import ProgressBar from "../../../../components/Progress/ProgressBar";
import Image from "next/image";

type Props = {
  etcSkillView: boolean;
};

const Etc = ({ etcSkillView }: Props) => {
  return (
    <Container etcSkillView={etcSkillView}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/git.svg'
            width={30}
            height={30}
            alt='git'
          />
          <ProgressBar name='etc' value={65} />
          <Text>Git</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/Postman.svg'
            width={30}
            height={30}
            alt='postman'
          />
          <ProgressBar name='etc' value={40} />
          <Text>Postman</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/Swagger.png'
            width={30}
            height={30}
            alt='swagger'
          />
          <ProgressBar name='etc' value={65} />
          <Text>Swagger</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/Figma.svg'
            width={30}
            height={30}
            alt='Figma'
          />
          <ProgressBar name='etc' value={50} />
          <Text>Figma</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/photoshop.png'
            width={30}
            height={30}
            alt='photoshop'
          />
          <ProgressBar name='etc' value={50} />
          <Text>Photoshop</Text>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Image
            src='/images/skills/illustrator.png'
            width={30}
            height={30}
            alt='illustrator'
          />
          <ProgressBar name='etc' value={20} />
          <Text>Illustrator</Text>
        </div>
      </div>
    </Container>
  );
};

export default Etc;

const Container = styled.div<{ etcSkillView: boolean }>`
  display: ${({ etcSkillView }) => (etcSkillView ? "flex" : "none")};
  flex-direction: column;

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
