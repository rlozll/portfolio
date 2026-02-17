"use client";

import styled from "@emotion/styled";

const Card = styled.a`
  display: block;
  padding: 28px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 32px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.text};
  }
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.subText};
  margin-bottom: 16px;
`;

const Tech = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.subText};
`;

interface Props {
  title: string;
  description: string;
  tech: string;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  link = "#",
}: Props) {
  return (
    <Card href={link} target="_blank">
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Tech>{tech}</Tech>
    </Card>
  );
}
