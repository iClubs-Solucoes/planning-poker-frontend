import logoImage from 'common/assets/svgs/logo.svg';

import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <img src={logoImage} alt="iPoker Logo" />

      <S.RightContent>
        <button>Modo espectador</button>
        <div>V</div>
      </S.RightContent>
    </S.Container>
  );
}
