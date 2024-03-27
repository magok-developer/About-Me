import { color } from "@/app/styles/color";
import styled from "@emotion/styled";
import React from "react";

type Props = {
  className?: string;
  ref?: any;
};

const ProgressBar = ({ className, ref }: Props) => {
  return (
    <Container>
      <div className={className} ref={ref}></div>
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
  .progressbar::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 0;
    background: ${color.pointYellow};
    animation: progress 5s ease forwards;
  }
  @keyframes progress {
    0% {
      width: 0px;
    }
    100% {
      width: 70%;
    }
  }
`;
