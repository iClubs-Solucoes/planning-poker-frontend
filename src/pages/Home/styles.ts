import styled from 'styled-components';

type HistoryProps = {
  isActive?: boolean;
};

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

export const PlanningContent = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 3.2rem;
`;

export const History = styled.div<HistoryProps>`
  width: 100%;
  background-color: ${({ isActive }) => (isActive ? '#3c59fd' : '#f4f6f7')};
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#212b36')};
  padding: 1.6rem;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    font-size: 1.4rem;
    display: block;
  }

  :hover {
    background-color: #3c59fd;
    color: #ffffff;
  }
`;

export const StoriesNamesContainer = styled.div`
  max-width: 53.6rem;
  width: 100%;
  background-color: #fff;
  padding: 3.2rem;
  border-radius: 0.8rem;
  box-shadow: 0px 0.4rem 2rem rgba(0, 0, 0, 0.03);

  > span {
    font-size: 1rem;
    color: #919eab;
    display: block;
    margin-bottom: 1.6rem;
  }

  > button {
    background-color: transparent;
    border: 1px solid #3c59fd;
    padding: 1.4rem;
    color: #3c59fd;
    border-radius: 0.4rem;
    transition: 0.3s;
    margin-top: 2rem;

    :hover {
      background-color: #3c59fd;
      color: #ffffff;
    }
  }

  ${History + History} {
    margin-bottom: 1.6rem;
  }
`;

export const PokerContainer = styled.div`
  max-width: 122.4rem;
  height: 77.7rem;
  width: 100%;
  background-color: #fff;
  padding: 3.2rem;
  border-radius: 0.8rem;
  box-shadow: 0px 0.4rem 2rem rgba(0, 0, 0, 0.03);
`;
