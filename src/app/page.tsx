"use client";

import Container from "@/components/layout/Container";
import Sidebar from "@/components/layout/Sidebar";
import Content from "@/components/layout/Content";
import ProjectCard from "@/components/project/ProjectCard";
import styled from "@emotion/styled";

const IntroSection = styled.section`
  margin-bottom: 60px;
`;

const Name = styled.h1`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 15px;
  margin-bottom: 17px;
  color: ${({ theme }) => theme.colors.subText};
`;

const Bio = styled.p`
  font-size: 17px;
  line-height: 1.9;
  max-width: 640px;
  letter-spacing: 0.5px;
`;

const ProjectsSection = styled.section`
  margin-bottom: 120px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default function Home() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <IntroSection>
          <Name>📍TL;DR</Name>
          <Subtitle>My primary areas of interest include:</Subtitle>
          <Bio>
            • automotive security (hardware hacking)<span style={{ display: 'block' }}>
            • firmware reversing, network analysis</span><span style={{ display: 'block' }}>
            • AI(LLM)-based security automation and vulnerability detection</span><span style={{ display: 'block' }}>
            • 서울여대 SWING 부회장(2025), Physical Lab(2026)...</span>
          </Bio>
          {/* <Name>Honors and Awards</Name>
          <Bio>
            • 2026 Physical Lab<span style={{ display: 'block' }}>
            • 2025 서울여대 SWING 부회장</span><span style={{ display: 'block' }}>
            • 2025 Autohack 본선 진출</span>
          </Bio> */}
        </IntroSection>

        <ProjectsSection>
          <h2 style={{ marginBottom: 30 }}>💻 Projects & Research</h2>

          <Grid>
            <ProjectCard
              title="ECU Security system"
              description="bit-level timing 기반 ECU 인증 시스템 개발"
              tech="25.09 - present"
            />
            <ProjectCard
              title="IDS Rule 생성 시스템"
              description="AI 기반 실시간 IDS Rule 생성 시스템 개발"
              tech="25.03 - 25.12"
            />
            <ProjectCard
              title="Bleedingtooth Vulnerability analysis"
              description="리눅스 블루투스 제로클릭 RCE 취약점 분석 칼럼"
              tech="24.12 - 25.01"
            />
            <ProjectCard
              title="Android RAT analysis"
              description="RAT 모바일 악성코드 실습: 정적/동적 분석"
              tech="24.08 -24.10"
            />
            <ProjectCard
              title="Kernel UAF Research"
              description="Use-After-Free 취약점 연구"
              tech="24.04 - 24.05"
            />
            <ProjectCard
              title="악성파일 탐지 AI 시스템 설계"
              description="바이너리 이미지화를 통한 악성파일 탐지 시스템 설계"
              tech="24.04 - 24.09"
            />
            <ProjectCard
              title="Message Queue(CVE-2023-46604) analysis"
              description="Apache ActiveMQ 취약점 분석"
              tech="24.02 - 24.03"
            />
          </Grid>
        </ProjectsSection>
      </Content>
    </Container>
  );
}
