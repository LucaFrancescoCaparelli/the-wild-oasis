import { css, styled } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

  font-size: 30px;
  font-weight: 600;
`;

export default Heading;
