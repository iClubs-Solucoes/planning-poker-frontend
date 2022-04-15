import { Heading } from 'components';

import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <Heading level={1}>Welcome to React Architecture</Heading>
      <p>
        This project was created to be used as the basis for React applications.
        The architecture was designed aiming at the organization and scalability
        of the application, counting on the main libraries in the market.
      </p>
    </S.Container>
  );
}
