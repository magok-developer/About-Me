import { color } from "@/app/styles/color";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const Alert = ({ visible, onClose }: Props) => {
  return visible ? (
    <Container>
      <div className='alert' onClick={onClose}>
        <Image
          src='/images/icons/link-alt.svg'
          width={16}
          height={16}
          alt='link'
        />
        클립보드에 주소가 복사되었습니다!
      </div>
    </Container>
  ) : null;
};

export default Alert;

const Container = styled.div`
  position: absolute;

  .alert {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 260px;
    border-radius: 12px;
    padding: 20px;
    box-sizing: border-box;

    font-size: 12px;

    background-color: ${color.white};

    animation: shake 0.3s;
  }

  @keyframes shake {
    0% {
      transform: rotateX(0);
    }
    20% {
      transform: rotateZ(-10deg);
    }
    50% {
      transform: rotateZ(10deg);
    }
    80% {
      transform: rotateZ(-10deg);
    }
    100% {
      transform: rotateX(0);
    }
  }
`;
