import styled from "styled-components";

export const DivWrap = styled.div`
  text-align: center;
  @media (min-width: 601px) {
    width: 48%;
  }
  @media (min-width: 993px) {
    width: 31%;
  }
  @media (min-width: 1201px) {
    width: 24%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
