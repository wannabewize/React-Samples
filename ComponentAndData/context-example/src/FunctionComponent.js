import React, {useContext} from 'react';
import {ThemeContext, LanguageContext} from './Constant';

function FunctionComponent() {
    return (
        <>
            <h5>함수 컴포넌트 : Context Example</h5>
            <Toolbar theme="dark" />
        </>
    );
}

function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    )
}

function ThemedButton() {
    const theme = useContext(ThemeContext);

    console.log('ThemeContext:', theme);
    const darkTheme = {backgroundColor:'gray', color:'white'};
    const lightTheme = {backgroundColor:'white', color: 'black'};
    return (
        <div style={theme === "dark" ? darkTheme : lightTheme  }>
            테마 버튼
        </div>
    )
}

export default FunctionComponent;