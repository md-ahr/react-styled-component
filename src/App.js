import { useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import { reducer, initialState } from './reducer/themeReducer';
import Tutorial from './components/Tutorial';
import GlobalStyle from './components/styles/Global.styles';
import { ThemeContext } from './context/ThemeContext';
import { light, dark } from './themeColor';

function App() {

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{ theme: state.theme, toggleTheme }}>
      <GlobalStyle />
      <ThemeProvider theme={ state.theme === 'dark' ? dark : light }>
        <Tutorial />
      </ThemeProvider>
    </ThemeContext.Provider>
  )

}

export default App;
