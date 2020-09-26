import React from 'react';

// default value
const ThemeContext = React.createContext('light');

function AppWithContext() {
    return (
        <div>
            <h1>Context Example</h1>
            <ThemeContext.Provider value="dark">
                <Toolbar theme="dark" />
            </ThemeContext.Provider>
        </div>
    );
}

function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    )
}

class ThemedButton extends React.Component {
    static contextType = ThemeContext;

    render() {
        console.log('this.context:', this.context);
        const darkTheme = {backgroundColor:'gray', color:'white'};
        const lightTheme = {backgroundColor:'white', color: 'black'};
        return (
            <div style={this.context === "dark" ? darkTheme : lightTheme  }>
                테마 버튼
            </div>
        )
    }
}

export default AppWithContext;
