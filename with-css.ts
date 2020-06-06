import { Interpolation, SerializedStyles } from '@emotion/core';

export interface WithCSS {
  css?: SerializedStyles | Interpolation;
}
