import { color } from "@/app/styles/color";
import Alert from "@/components/Alert/Alert";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  element: () => void;
};

const Contact = ({ element }: Props) => {
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [alertVisible, setAlertVisible] = useState(false);

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
      url: "https://www.linkedin.com/in/%EC%A7%80%EC%9B%90-%ED%95%98-83338725b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
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
        setAlertVisible(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (alertVisible) {
      const timeout = setTimeout(() => {
        setAlertVisible(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [alertVisible]);

  return (
    <Container ref={element}>
      <div className='title'>Contact</div>
      <ImagesWrap>
        {icon.map((item, index) =>
          item.url !== "" ? (
            <Link href={item.url} target='_blank' key={index}>
              <Image
                src={clickedIndex === index ? item.activeIcon : item.icon}
                width={40}
                height={40}
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
              width={40}
              height={40}
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
      <Alert visible={alertVisible} onClose={() => setAlertVisible(false)} />
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
    font-size: 30px;
    font-weight: bold;

    color: ${color.pointBlue};
  }
`;

const ImagesWrap = styled.div`
  display: flex;
  gap: 60px;
`;
