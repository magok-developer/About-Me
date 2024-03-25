"use client";

import { color } from "@/app/styles/color";
import styled from "@emotion/styled";

type Props = {
  router: any;
  isFocused: string;
  setIsFocused: (path: string) => void;
};
const Header = ({ router, isFocused, setIsFocused }: Props) => {
  const onScroll = (
    refCurrent: React.RefObject<HTMLDivElement>,
    name: string
  ) => {
    if (refCurrent.current) {
      refCurrent.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              {item.label}
            </Content>
          );
        })}
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 9999;
  width: 90%;
  height: 72px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: rgba(245, 246, 247, 0.7);
  box-sizing: border-box;

  .portfolio {
    color: ${color.pointYellow};
    font-size: 24px;
    font-weight: bold;
  }
  .wrap {
    display: flex;
    gap: 60px;
  }
`;

const Content = styled.div<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? color.pointBlue : color.pointGray)};
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${color.pointBlue};
  }
`;
