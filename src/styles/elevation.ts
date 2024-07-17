import { css } from 'styled-components'

export const elevation = {
  0: css`
    box-shadow: unset;
  `,
  1: css`
    box-shadow:
      0px 1px 3px 1px rgba(0, 0, 0, 0.15),
      0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  `,
  2: css`
    box-shadow:
      2px 6px 2px rgba(0, 0, 0, 0.15),
      0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  `,
  3: css`
    box-shadow:
      0px 1px 3px 0px rgba(0, 0, 0, 0.3),
      0px 4px 8px 3px rgba(0, 0, 0, 0.15);
  `,
  4: css`
    box-shadow:
      0px 2px 3px 0px rgba(0, 0, 0, 0.3),
      0px 6px 10px 4px rgba(0, 0, 0, 0.15);
  `,
  5: css`
    box-shadow:
      4px 4px 0px rgba(0, 0, 0, 0.3),
      0px 8px 12px 6px rgba(0, 0, 0, 0.15);
  `,
}
