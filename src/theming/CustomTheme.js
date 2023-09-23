import { DefaultTheme } from 'react-native-paper';

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8D57FF',
    lightGray:"#F4F4F4",
    white:"#fff",
    gray:"#89909E",
    lightPrimary:"#E9DEFF"
    // You can also customize other colors here, like `accent` and `background`
  },
};

export default CustomTheme;
