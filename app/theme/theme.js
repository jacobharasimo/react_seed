import baseTheme from '@rebass/preset';
import { merge } from 'lodash';

const customTheme = {
  variants: {
    container: {
      mx: 'auto',
      width: '1170px',
      maxWidth: '1170px',
    },
  },
};

const theme = merge(baseTheme, customTheme);

export default theme;
