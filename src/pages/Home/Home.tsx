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
      </S.Content>
    </S.Container>
  );
}
