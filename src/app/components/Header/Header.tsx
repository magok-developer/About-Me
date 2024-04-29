import { color } from "@/app/styles/color";
import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";

type Props = {
  router: any;
  isFocused: string;
  setIsFocused: (path: string) => void;
  onScroll: (refCurrent: React.RefObject<HTMLDivElement>, name: string) => void;
};

const Header = ({ router, isFocused, setIsFocused, onScroll }: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <MobileToggle onClick={handleToggleClick}>
        <Image
          src={"/images/icons/toggle.svg"}
          width={20}
          height={20}
          alt='toggle'
        />
        <ToggleMenu showMenu={showMenu}>
          {router.map((item: any, index: number) => {
            const isActive = isFocused === item.path;
            return (
              <ToggleContent
                key={index}
                ref={item.observe}
                onClick={() => {
                  setIsFocused(item.path);
                  onScroll(item.observe, item.path);
                }}
                isActive={isActive}
              >
                <div className='label'>{item.label}</div>
              </ToggleContent>
            );
          })}
        </ToggleMenu>
      </MobileToggle>

      <DesktopHeader>
        <div className='portfolio'>HA JI WON</div>
        <div className='wrap'>
          {router.map((item: any, index: number) => {
            const isActive = isFocused === item.path;
            return (
              <Content
                key={index}
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
      </DesktopHeader>
    </>
  );
};

export default Header;

const MobileToggle = styled.button`
  width: 100%;
  position: fixed;
  top: 28px;
  right: 20px;

  background: none;
  border: none;
  z-index: 4;
  cursor: pointer;
  display: flex;
  justify-content: end;

  @media (min-width: 480px) {
    display: none;
  }
`;

const ToggleMenu = styled.div<{ showMenu: boolean }>`
  display: ${(props) => (props.showMenu ? "flex" : "none")};
  flex-direction: column;
  width: 100px;
  padding: 20px;
  gap: 16px;

  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  position: absolute;
  top: 30px;
`;

const ToggleContent = styled.div<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? color.black : color.pointGray)};
  font-weight: bold;
`;

const DesktopHeader = styled.div`
  @media (max-width: 479px) {
    display: none;
  }
  @media (min-width: 480px) and (max-width: 600px) {
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
      font-size: 12px;
      font-weight: bold;
    }

    .wrap {
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 10px;
    }
  }

  @media (min-width: 601px) and (max-width: 750px) {
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
      font-size: 20px;
      font-weight: bold;
    }

    .wrap {
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 14px;
    }
  }

  @media (min-width: 751px) {
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
  }
`;

const Content = styled.div<{ isActive: boolean }>`
  @media (max-width: 479px) {
    display: none;
  }

  @media (min-width: 480px) and (max-width: 600px) {
    color: ${(props) => (props.isActive ? color.white : color.pointBlue)};
    background-color: ${(props) =>
      props.isActive ? color.pointBlue : color.pointGray};
    height: ${(props) => (props.isActive ? "20px" : "15px")};

    padding: 10px 10px 23px 10px;
    font-size: 10px;
    line-height: 30px;
    text-align: center;
    font-weight: bold;
    border-radius: 10px 10px 0 0;
    cursor: pointer;
    transition: all 0.4s ease 0s;

    &:hover {
      background-color: ${color.pointBlue};
      color: ${color.white};
      height: 20px;
    }
  }

  @media (min-width: 601px) and (max-width: 750px) {
    color: ${(props) => (props.isActive ? color.white : color.pointBlue)};
    background-color: ${(props) =>
      props.isActive ? color.pointBlue : color.pointGray};
    height: ${(props) => (props.isActive ? "40px" : "30px")};

    padding: 15px 10px;
    font-size: 12px;
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
  }

  @media (min-width: 701px) {
    color: ${(props) => (props.isActive ? color.white : color.pointBlue)};
    background-color: ${(props) =>
      props.isActive ? color.pointBlue : color.pointGray};
    height: ${(props) => (props.isActive ? "40px" : "30px")};

    padding: 15px 10px;
    font-size: 14px;
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
  }
`;
