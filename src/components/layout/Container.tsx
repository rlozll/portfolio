"use client";

import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Wrapper>{children}</Wrapper>;
}
