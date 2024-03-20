import { color } from "@/app/styles/color";
import styled from "@emotion/styled";
import Image from "next/image";

type BUTTON_STYLE_PROPS = {
  color: "primary" | "secondary";
};

type Props = BUTTON_STYLE_PROPS & {
  children: any;
  rightIcon?: string;
};

const Button = ({ children, rightIcon, color = "primary" }: Props) => {
  return (
    <Container>
      <ButtonContainer color={color}>
        <div style={{ display: "flex", gap: 16 }}>
          {children}
          {rightIcon && (
            <Image
              src={rightIcon}
              width={24}
              height={24}
              alt='icon'
              className='icon'
            />
          )}
        </div>
      </ButtonContainer>
    </Container>
  );
};

const COLOR_TYPE = {
  ["primary"]: {
    backgroundColor: color.white,
    border: `1.5px solid ${color.pointBlue}`,
    color: color.black,
  },
  ["secondary"]: {
    backgroundColor: color.pointBlue,
    color: color.white,
  },
};

export default Button;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div<BUTTON_STYLE_PROPS>`
  ${({ color }) => COLOR_TYPE[color]}

  display: flex;
  justify-content: center;
  align-items: center;

  width: 260px;
  height: 70px;
  border-radius: 12px;

  font-size: 24px;
  font-weight: bold;

  box-sizing: border-box;
  transition: all 0.3s linear;

  &:hover {
    ${({ color }) => COLOR_TYPE.secondary};
    transition: all 0.3s linear;

    .icon {
      transition: all 0.3s linear;
      transform: rotate(90deg);
      stroke: ${color.white};
    }
  }
`;
