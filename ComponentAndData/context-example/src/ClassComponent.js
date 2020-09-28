import React from 'react';
import {ThemeContext} from './Constant';

class ClassComponent extends React.Component {
    render() {
        return (
            <>
            <h5>클래스 컴포넌트</h5>
            <Toolbar theme="dark" />
            </>
        );
    }
}

class Toolbar extends React.Component {
    render() {
        return (
            <div>
                <ThemedButton />
            </div>
        )
    }
}

class ThemedButton extends React.Component {
    static contextType = ThemeContext;
        render() {

        const theme = this.context;
        const darkTheme = {backgroundColor:'gray', color:'white'};
        const lightTheme = {backgroundColor:'white', color: 'black'};
        return (
            <div style={theme === "dark" ? darkTheme : lightTheme  }>
                테마 버튼
            </div>
        )
    }
}

export default ClassComponent;