import { color } from "@/app/styles/color";
import styled from "@emotion/styled";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Progress = () => {
  const image = [
    {
      src: "/images/skills/html_5.svg",
      width: 50,
      height: 50,
      value: 60,
      name: "html",
    },
    {
      src: "/images/skills/css_3.svg",
      width: 50,
      height: 50,
      value: 70,
      name: "css",
    },
    {
      src: "/images/skills/JS.svg",
      width: 40,
      height: 40,
      value: 70,
      name: "js",
    },
    {
      src: "/images/skills/TS.svg",
      width: 40,
      height: 40,
      value: 60,
      name: "ts",
    },
    {
      src: "/images/skills/react.svg",
      width: 40,
      height: 40,
      value: 70,
      name: "react",
    },
    {
      src: "/images/skills/nextjs.svg",
      width: 40,
      height: 40,
      value: 60,
      name: "next",
    },
    {
      src: "/images/skills/git.svg",
      width: 40,
      height: 40,
      value: 60,
      name: "git",
    },
  ];

  return (
    <Container>
      <Grid>
        {image.slice(0, 3).map((item, index) => (
          <Wrapper key={index} className={item.name}>
            <Image
              src={item.src}
              width={item.width}
              height={item.height}
              alt='skill'
              className='skill'
              style={{
                top: item.name === "html" || item.name === "css" ? 50 : 54,
                left: item.name === "html" || item.name === "css" ? 51 : 56,
              }}
            />
            <CircularProgressbar
              value={item.value}
              styles={buildStyles({
                pathColor: color.pointYellow,
                trailColor: color.white,
                textColor: color.pointYellow,
              })}
            />
          </Wrapper>
        ))}
      </Grid>
      <FourGrid>
        {image.slice(3, 7).map((item, index) => (
          <Wrapper key={index} className={item.name}>
            <Image
              src={item.src}
              width={item.width}
              height={item.height}
              alt='skill'
              className='skill'
            />
            <CircularProgressbar
              value={item.value}
              styles={buildStyles({
                pathColor: color.pointYellow,
                trailColor: color.white,
                textColor: color.pointYellow,
              })}
            />
          </Wrapper>
        ))}
      </FourGrid>
    </Container>
  );
};

export default Progress;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .CircularProgressbar {
    width: 150px;
    height: 150px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const FourGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

const Wrapper = styled.div`
  position: relative;
  margin: 10px;
  .skill {
    position: absolute;
    left: 56px;
    top: 54px;
  }
`;
