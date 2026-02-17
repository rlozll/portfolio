"use client";

import styled from "@emotion/styled";

const Bar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 60px;
  padding: 0 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  z-index: 1000;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.8px;
`;

const ToggleButton = styled.button`
  font-size: 22px;
  cursor: pointer;
  background: none;
  border: none;

  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.6;
  }
`;

export default function TopBar({
  isDark,
  toggleTheme,
}: {
  isDark: boolean;
  toggleTheme: () => void;
}) {
  return (
    <Bar>
      <Title>Welcome rlozll's home</Title>

      <ToggleButton onClick={toggleTheme}>
        {isDark ? "☀️" : "🌙"}
      </ToggleButton>
    </Bar>
  );
}
