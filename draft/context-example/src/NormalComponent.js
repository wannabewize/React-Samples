import React from 'react';

function NormalComponent() {
    return (
        <div>
            <h5>비사용 함수 컴포넌트 Context 예제</h5>
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

export default NormalComponent;
