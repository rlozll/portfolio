"use client";

import styled from "@emotion/styled";

const Wrapper = styled.aside`
  width: 400px;
  padding: 100px 50px;
  position: sticky;
  top: 0;
  height: 100vh;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: relative;
    border-right: none;
    padding: 90px 24px;
  }
`;

const Name = styled.h1`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 12px;
  margin-top: 10px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.subText};
  margin-bottom: 25px;
  text-align: center;
`;

const Links = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
`;

const LinkItem = styled.a`
  display: block;
  padding: 8px 15px;
  border-radius: 14px;
  font-size: 15px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.subText};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.text};
  }
`;


const SidebarCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 32px;
  padding: 36px 36px;   // ← 24 → 36으로 증가
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.05);
`;

const ProfileImage = styled.img`
  width: 227px;
  height: 227px;
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: relative;
    border-right: none;
  }
`;

export default function Sidebar() {
  return (
  <Wrapper>
    <SidebarCard>
      <ProfileImage src="/gon.png" alt="profile" />
      <Name>rlozll</Name>
      <Description>B.S Informaiton Security<span style={{ display: 'block' }}>💌 ham60108@gmail.com</span></Description>
      <Links>
        <LinkItem href="https://github.com/rlozll" target="_blank">
          GitHub
        </LinkItem>
        <LinkItem href="https://rlozll.tistory.com/" target="_blank">Tistory</LinkItem>
        <LinkItem href="https://rlozll.github.io/" target="_blank">Git Blog</LinkItem>
      </Links>
    </SidebarCard>
  </Wrapper>
);
}
