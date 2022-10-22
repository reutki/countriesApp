import styled from "@emotion/styled";

export const GridContainer = styled.div`
  background-color: white;

  @media (min-width: 720px) {
    max-width: max-content;
    max-height: max-content;
    padding: 20px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    display: grid;
    grid-template-columns: max-content max-content;
    grid-gap: 15px;
  }
`;

export const SearchSection = styled.div`
  display: grid;
  .search_input {
    margin-bottom: 10px;
  }
`;

export const ResultContainer = styled.div`
  max-width: 90vw;
  max-height: 90vh;

  .flag {
    max-width: 200px;
  }
`;
