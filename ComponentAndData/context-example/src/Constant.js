import React from 'react';

// createContext 내 값은 의미 없다.
export const ThemeContext = React.createContext('light');
export const LanguageContext = React.createContext({
    lang: 'en',
    changeLang: () => {}
});