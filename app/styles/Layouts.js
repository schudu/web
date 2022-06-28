import styled from "styled-components";

export const OuterLayout = styled.div`
  padding: 0 18rem;

  @media screen and (max-width: 1270px) {
    padding: 0 10rem;
  }

  @media screen and (max-width: 900px) {
    padding: 0 4rem;
  }

  @media screen and (max-width: 400px) {
    padding: 0 2rem;
  }
`;

export const InnerLayout = styled.div`
  padding: 8rem 0;
`;
