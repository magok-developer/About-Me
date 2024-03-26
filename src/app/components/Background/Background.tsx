import styled from "@emotion/styled";

const Background = ({ children }: any) => {
  return <Container>{children}</Container>;
};

export default Background;

const Container = styled.div`
  position: fixed;
  top: 80px;
  background-color: white;
  width: 95%;
  height: 85%;
  overflow: scroll;
  z-index: 3;
`;