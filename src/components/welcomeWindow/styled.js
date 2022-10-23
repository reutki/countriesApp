import styled from "@emotion/styled";

export const GridContainer = styled.div`
  background-color: white;
  max-width: 80vw;
  border-radius: 15px;
  padding: 20px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  display: grid;

  .greeting_welcome {
    font-weight: 700;
  }

  .call_to_action {
    max-width: max-content;
    overflow: hidden;
    border-right: 0.15em solid black;
    white-space: nowrap;
    margin: 0 auto;
    animation: typing 2.8s steps(40, end), blink-caret 0.75s step-end infinite;
    margin-bottom: 10px;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: black;
    }
  }
  @media (min-width: 720px) {
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
  .country_name {
    text-align: center;
  }
  .flag {
    border-radius: 15px;
    max-width: 300px;
  }
`;
