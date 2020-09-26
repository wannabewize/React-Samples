import React from 'react';

function App() {
    return (
        <div>
            <h1>Context Example</h1>
            <Toolbar theme="dark" />
        </div>
    );
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton theme={props.theme} />
        </div>
    )
}

function ThemedButton({theme}) {
    const darkTheme = {backgroundColor:'gray', color:'white'};
    const lightTheme = {backgroundColor:'white', color: 'black'};

    return (
        <div style={theme === "dark" ? darkTheme : lightTheme}>
            테마 버튼
        </div>
    )
}

export default App;
