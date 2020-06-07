export interface WithPadding {
  padding?: {
    top: number,
    right: number,
    bottom: number,
    left: number
  } | number;
};

export const getPadding = (padding: WithPadding['padding']) => {
  if(!padding) {
    return null;
  }

  if(typeof padding === 'number') {
    return `padding: ${padding}px;`;
  } else if(typeof padding === 'object') {
    const paddingTop = padding['top'] ? padding['top'] : 0;
    const paddingRight = padding['right'] ? padding['right'] : 0;
    const paddingBottom = padding['bottom'] ? padding['bottom'] : 0;
    const paddingLeft = padding['left'] ? padding['left'] : 0;

    return `padding-top: ${paddingTop};
      padding-right: ${paddingRight};
      padding-bottom: ${paddingBottom};
      padding-left: ${paddingLeft};`;
  } else {
    return null;
  }
};
