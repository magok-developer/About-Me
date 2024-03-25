import styled from "@emotion/styled";
import Button from "../Button/Button";
import { color } from "@/app/styles/color";

type Props = {
  element: any;
};

const Home = ({ element }: Props) => {
  return (
    <Container ref={element}>
      <ContentWrap>
        <div className='content'>개발자</div>
        <div className='name'>하지원</div>
        <div className='content'>입니다.</div>
      </ContentWrap>
      <Button color='primary' rightIcon='/images/icons/arrow-right.svg'>
        About Me
      </Button>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 80px;
`;

const ContentWrap = styled.div`
  display: flex;
  gap: 4px;

  font-size: 32px;
  font-weight: bold;

  color: ${color.black};

  &:hover {
    .name {
      color: ${color.pointYellow};
      transition: 0.3s;
    }
  }
`;
