import { font, primaryColors, breakpoints } from 'common/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  padding: 3.2rem 6.4rem;
`;

export const SprintName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #212b36;
    font-size: 4.2rem;
    font-weight: 700;
  }

  h2 {
    color: #3c59fd;
    font-size: 3.2rem;
    text-align: end;
    margin-top: 0.5rem;
  }

  span {
    color: #212b36;
  }
`;

export const ChangeSprint = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: 0;
  color: #3c59fd;
  margin-top: 1rem;
`;
