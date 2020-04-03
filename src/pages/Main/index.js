import React from 'react';

import { Title } from './styles';

function Main() {
  // 'error' é propriedade de 'Title' e seu valor é 'true'
  return (
    <Title error>
      Main<small>menor</small>
    </Title>
  );
}

export default Main;
