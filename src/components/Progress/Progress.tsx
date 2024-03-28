import { color } from "@/app/styles/color";
import styled from "@emotion/styled";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = {
  src: string;
  value: number;

  className?: string;
};

const Progress = ({ src, value, className }: Props) => {
  return (
    <Container>
      <Wrapper className={className}>
        <img
          src={src}
          alt='skill'
          className='skill'
          style={{
            width: "30%",
            height: "auto",
          }}
        />
        <CircularProgressbar
          value={value}
          styles={buildStyles({
            pathColor: color.pointYellow,
            trailColor: color.white,
            textColor: color.pointYellow,
          })}
        />
      </Wrapper>
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
    width: 100px;
    height: 100px;
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
    left: 36px;
    top: 36px;
  }
`;
