"use client";

import styled from "@emotion/styled";

export const Hero = styled.h1`
  font-size: ${({ theme }) => theme.typography.hero};
  font-weight: 600;
  line-height: 1.2;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.h1};
  margin-bottom: 24px;
`;

export const BodyText = styled.p`
  font-size: ${({ theme }) => theme.typography.body};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.subText};
`;
