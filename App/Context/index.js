import React, {createContext, useEffect, useState} from 'react';
import {Appearance} from 'react-native';
import {DEFAULT_THEME, Theme} from '../Theme';
import {setItemInStorage, getItemFromStorage} from '../Utils/Storage';

const APP_THEME = 'appTheme';

export const AppContext = createContext({
  appTheme: DEFAULT_THEME,
  initializeAppTheme: () => {},
  setAppTheme: () => {},
});

export const AppContextProvider = ({children}) => {
  const [appTheme, setAppTheme] = useState(DEFAULT_THEME);
  const [isInit, setIsInit] = useState(true);

  useEffect(() => {
    setInitialLoad();
  });

  const setInitialLoad = async () => {
    if (isInit) {
      await initializeAppTheme();
      setIsInit(false);
    }
  };

  const setTheme = theme => {
    setAppTheme(theme);
    setItemInStorage(APP_THEME, theme);
  };

  const initializeAppTheme = async themeType => {
    const currentTheme = await getItemFromStorage(APP_THEME);
    if (!currentTheme && !themeType) {
      const colorScheme = Appearance.getColorScheme();
      setAppTheme((colorScheme && colorScheme) || DEFAULT_THEME);
    } else {
      if (themeType) {
        setAppTheme(themeType);
        setItemInStorage(APP_THEME, themeType);
      } else {
        setAppTheme(currentTheme);
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        appTheme: Theme[appTheme],
        setAppTheme: setTheme,
        initializeAppTheme,
      }}>
      {children}
    </AppContext.Provider>
  );
};
