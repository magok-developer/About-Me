import { color } from "@/app/styles/color";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  element: () => void;
};

const Contact = ({ element }: Props) => {
  const [clickedIndex, setClickedIndex] = useState(-1); // 클릭된 이미지의 인덱스를 저장합니다.

  const icon = [
    {
      icon: "/images/contact/gitHub.svg",
      activeIcon: "/images/contact/gitHub_active.svg",
      url: "https://github.com/magok-developer",
      copy: "",
    },
    {
      icon: "/images/contact/linkedIn.svg",
      activeIcon: "/images/contact/linkedIn_active.svg",
      url: "naver.com",
      copy: "",
    },
    {
      icon: "/images/contact/google.svg",
      activeIcon: "/images/contact/google_active.svg",
      url: "",
      copy: "hajw.study@gmail",
    },
    {
      icon: "/images/contact/discord.svg",
      activeIcon: "/images/contact/discord_active.svg",
      url: "",
      copy: "hajw.study",
    },
  ];

  const handleClickCopy = async (index: number, text: string) => {
    setClickedIndex(index);

    try {
      if (text !== "") {
        await navigator.clipboard.writeText(text);
        alert("클립보드에 주소가 복사 되었습니다.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container ref={element}>
      <div className='title'>Contact</div>
      <ImagesWrap>
        {icon.map((item, index) =>
          item.url !== "" ? (
            <Link href={item.url} target='_blank' key={index}>
              <Image
                src={clickedIndex === index ? item.activeIcon : item.icon}
                width={48}
                height={48}
                alt='icon'
                onClick={() => handleClickCopy(index, item.copy)}
                onMouseEnter={() => setClickedIndex(index)}
                onMouseLeave={() => setClickedIndex(-1)}
                style={{ cursor: "pointer" }}
                className='icon'
              />
            </Link>
          ) : (
            <Image
              key={index}
              src={clickedIndex === index ? item.activeIcon : item.icon}
              width={48}
              height={48}
              alt='icon'
              onClick={() => handleClickCopy(index, item.copy)}
              onMouseEnter={() => setClickedIndex(index)}
              onMouseLeave={() => setClickedIndex(-1)}
              style={{ cursor: "pointer" }}
              className='icon'
            />
          )
        )}
      </ImagesWrap>
      <div style={{ marginTop: 200, fontSize: "12px", color: color.pointGray }}>
        Copyright 2024. Web Frontend Developer Jiwon Portfolio
      </div>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  margin-top: 100px;

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
