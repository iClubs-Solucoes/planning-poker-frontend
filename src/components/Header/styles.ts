import { font } from 'common/styles/theme';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 10.6rem;
  box-shadow: 0 0.4rem 3.2rem 0 rgba(26, 33, 52, 0.05);
  background-color: #fff;
  padding: 0 6.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-right: 3.2rem;
    border: 0.1rem solid #3c59fd;
    border-radius: 0.4rem;
    padding: 1.2rem 1.4rem;
    background-color: transparent;
    color: #3c59fd;
    font-weight: 700;
    transition: 0.3s;
    :hover {
      cursor: pointer;
      background-color: #3c59fd;
      color: #fff;
    }
  }

  div {
    height: 5.2rem;
    width: 5.2rem;
    border-radius: 50%;
    background-color: #3c59fd;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
`;
