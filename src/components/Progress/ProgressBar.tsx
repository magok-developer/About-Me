import { color } from "@/app/styles/color";
import styled from "@emotion/styled";
import React from "react";

type Props = {
  name: string;
  value: number;
};

const ProgressBar = ({ name, value }: Props) => {
  console.log(value);
  return (
    <Container>
      <div className='progressbar'>
        <Inner
          style={{
            width: `${value}%`,
            background: name === "etc" ? color.pointBlue : color.pointYellow,
          }}
        />
      </div>
    </Container>
  );
};

export default ProgressBar;

const Container = styled.div`
  .progressbar {
    width: 250px;
    height: 15px;
    border-radius: 10px;
    overflow: hidden;
    background: ${color.white};
    position: relative;
  }
`;
const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
`;
