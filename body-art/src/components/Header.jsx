import React from "react";
import styled from "styled-components";
export default function Header() {
  return (
    <div>
      <StyledHeader></StyledHeader>
    </div>
  );
}

const StyledHeader = styled.div`
  position: fixed;
  height: 5em;
  width: 100vw;
  background-color: #20202065;
`;
