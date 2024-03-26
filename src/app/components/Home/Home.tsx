import styled from "@emotion/styled";
import Button from "../Button/Button";
import { color } from "@/app/styles/color";

type Props = {
  element: () => void;
};

const Home = ({ element }: Props) => {
  return (
    <Container ref={element}>
      <div className='text'>
        JIWON
        <br />
        PORTFOLIO
      </div>
      <ContentWrap>
        <div className='bg-video'>
          <video className='bg-video__content ' autoPlay muted loop>
            <source src='/images/clouds3.mp4' type='video/mp4' />
          </video>
        </div>
      </ContentWrap>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 80px;

  font-size: 100px;
  font-weight: bold;

  color: ${color.white};

  .text {
    position: absolute;
    /* text-align: center; */
    opacity: 0.8;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .bg-video {
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  .bg-video__content {
    opacity: 0.6;
    object-fit: cover;
    width: 1400px;
    height: 600px;
  }
`;
