"use client";

import { color } from "@/app/styles/color";
import styled from "@emotion/styled";

type Props = {
  router: any;
  isFocused: string;
  setIsFocused: (path: string) => void;
  onScroll: (refCurrent: React.RefObject<HTMLDivElement>, name: string) => void;
};

const Header = ({ router, isFocused, setIsFocused, onScroll }: Props) => {
  return (
    <Container>
      <div className='portfolio'>Portfolio</div>
      <div className='wrap'>
        {router.map((item: any) => {
          const isActive = isFocused === item.path;
          return (
            <Content
              ref={item.observe}
              onClick={() => {
                setIsFocused(item.path);
                onScroll(item.observe, item.path);
              }}
              isActive={isActive}
            >
              <div className='label'>{item.label}</div>
            </Content>
          );
        })}
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  margin-top: 20px;
  position: fixed;
  top: 0;
  z-index: 1;

  width: 95%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;

  .portfolio {
    color: ${color.pointYellow};
    font-size: 24px;
    font-weight: bold;
  }
  .wrap {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 20px;
  }
`;

const Content = styled.div<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? color.white : color.pointBlue)};
  background-color: ${(props) =>
    props.isActive ? color.pointBlue : color.pointGray};

  padding: 10px 20px 10px 20px;
  height: 30px;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  font-weight: bold;

  border-radius: 10px 10px 0 0;
  cursor: pointer;
  transition: all 0.4s ease 0s;

  &:hover {
    background-color: ${color.pointBlue};
    color: ${color.white};
    height: 40px;
  }
`;
