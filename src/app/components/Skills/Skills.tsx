import { color } from "@/app/styles/color";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <Container>
      <div className='title'>Skills</div>
      <SkillsWrap>
        <Image
          src='/images/skills/html_5.svg'
          width={100}
          height={100}
          alt='html'
          className='html'
        />
        <Image
          src='/images/skills/css_3.svg'
          width={100}
          height={100}
          alt='css'
          className='css'
        />
        <Image
          src='/images/skills/JS.svg'
          width={90}
          height={90}
          alt='JavaScript'
          className='javaScript'
        />
      </SkillsWrap>

      <SkillsWrap>
        <Image
          src='/images/skills/TS.svg'
          width={90}
          height={90}
          alt='TypeScript'
          className='typeScript'
        />
        <Image
          src='/images/skills/react.svg'
          width={90}
          height={90}
          alt='React'
          className='react'
        />
        <Image
          src='/images/skills/nextjs.svg'
          width={90}
          height={90}
          alt='Next.js'
          className='nextJs'
        />
        <Image
          src='/images/skills/git.svg'
          width={90}
          height={90}
          alt='git'
          className='git'
        />
      </SkillsWrap>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 60px;

  .title {
    font-size: 32px;
    font-weight: bold;

    color: ${color.black};

    margin-bottom: 100px;
  }
`;

const SkillsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;

  .html:hover,
  .css:hover,
  .javaScript:hover,
  .typeScript:hover,
  .react:hover,
  .nextJs:hover,
  .git:hover {
    -webkit-filter: grayscale(100%);
    filter: gray;
  }
`;
