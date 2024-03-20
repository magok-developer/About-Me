import { color } from "@/app/styles/color";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <Container>
      <div className='title'>About Me</div>
      <Grid>
        <Image
          src='/images/photo.jpg'
          width={331}
          height={371}
          alt='증명사진'
        />
        <div className='content'>
          저는 프로그래밍에 대한 끝없는 열정을 가진 개발자 지망생입니다.
          <br />
          <br />
          새로운 기술을 배우고 문제를 해결하는 것에 흥미를 느끼며, 협업과
          커뮤니케이션을 통해 팀원들과 함께 일하는 것을 즐깁니다.
          <br />
          이력서를 통해 귀사의 개발팀에 합류하여 함께 성장하고 싶습니다.
          <br />
          <br />
          저는 컴퓨터 공학 전공을 이수하며 다양한 프로젝트를 수행하며 프로그래밍
          언어와 기술에 대한 폭넓은 이해와 경험을 쌓았습니다.
          <br />
          주로 Python, JavaScript, HTML/CSS를 사용하여 웹 개발 및 데이터 분석
          프로젝트를 수행했습니다.
          <br />
          또한 Git과 같은 협업 도구를 사용하여 팀 프로젝트를 진행하고 버전
          관리를 수행한 경험이 있습니다.
          <br /> <br />
          빠르게 변화하는 기술 트렌드에 대한 호기심을 가지고 있으며, 지속적인
          학습과 개발 커뮤니티 참여를 통해 스스로를 성장시키고 있습니다.
          <br />
          문제 해결 능력과 논리적 사고를 기반으로 고객 중심의 솔루션을 개발하는
          것에 관심이 많습니다.
          <br />
          <br />
          제가 귀사의 팀에 합류한다면, 열정과 끈기를 바탕으로 프로젝트에 최선을
          다하고 지속적인 성장을 위해 노력할 것을 약속드립니다.
          <br />
          함께 일하고 성장할 기회를 주셨으면 합니다.
          <br />
          <br />
          감사합니다.
          <br /> <br /> <br />는 챗지피티의 자기소개서였다..
        </div>
      </Grid>
    </Container>
  );
};

export default AboutMe;

const Container = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 160px;

  .title {
    font-size: 32px;
    font-weight: bold;

    color: ${color.black};
  }
`;

const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 331px 1fr;

  gap: 20px;

  .content {
    line-height: normal;
  }
`;