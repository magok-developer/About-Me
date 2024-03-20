import { color } from "@/app/styles/color";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <Container>
      <div className='title'>Contact</div>
      <ImagesWrap>
        <Image
          src='/images/contact/gitHub.svg'
          width={48}
          height={48}
          alt='gitHub'
        />
        <Image
          src='/images/contact/linkedIn.svg'
          width={48}
          height={48}
          alt='linkedIn'
        />
        <Image
          src='/images/contact/google.svg'
          width={48}
          height={48}
          alt='google'
        />
        <Image
          src='/images/contact/discord.svg'
          width={48}
          height={48}
          alt='discord'
        />
        <Image
          src='/images/contact/instagram.svg'
          width={48}
          height={48}
          alt='instagram'
        />
      </ImagesWrap>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 160px;

  .title {
    font-size: 32px;
    font-weight: bold;

    color: ${color.black};
  }
`;

const ImagesWrap = styled.div`
  display: flex;
  gap: 60px;
`;