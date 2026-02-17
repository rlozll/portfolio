"use client";

import styled from "@emotion/styled";

const Wrapper = styled.main`
  flex: 1;
  padding: 110px 30px 100px 30px;  /* 위 padding 증가 */

  max-width: 1100px;
  margin-right: 110px;

  @media (max-width: 768px) {
    padding: 0px 24px 80px 24px;
    margin-right: 0;
  }
`;


export default function Content({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Wrapper>{children}</Wrapper>;
}
