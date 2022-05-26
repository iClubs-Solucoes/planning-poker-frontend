import { Header } from 'components';

import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <Header />

      <S.Content>
        <S.SprintName>
          <div>
            <h1>Sprint 13</h1>
            <S.ChangeSprint>Alterar sprint</S.ChangeSprint>
          </div>

          <div>
            <span>Tempo restante</span>
            <h2>1:00</h2>
          </div>
        </S.SprintName>

        <S.PlanningContent>
          <S.StoriesNamesContainer>
            <span>HISTÓRIAS</span>

            <S.History isActive>
              <span>Task IC-1000</span>
              <span>0</span>
            </S.History>
            <S.History>
              <span>Task IC-1000</span>
              <span>0</span>
            </S.History>

            <button>Adicionar história</button>
          </S.StoriesNamesContainer>

          <S.PokerContainer></S.PokerContainer>
        </S.PlanningContent>
      </S.Content>
    </S.Container>
  );
}
