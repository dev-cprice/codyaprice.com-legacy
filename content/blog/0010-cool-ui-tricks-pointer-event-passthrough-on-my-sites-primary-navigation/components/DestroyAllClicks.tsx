import React from 'react';
import { css } from '@emotion/core';

function DestroyAllClicks() {
  const [count, setCount] = React.useState<number>(0);

  function increment() {
    setCount((c) => c + 1);
  }

  function preventAllClicks(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <div
      css={css`
        text-align: center;
      `}
      onClickCapture={preventAllClicks}
    >
      <button type="button" onClick={increment}>
        Increment count
      </button>
      <p>Count = {count}</p>
    </div>
  );
}

export default DestroyAllClicks;
