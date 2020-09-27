import React, { useState } from 'react';
import FunctionComponent from "./FunctionComponent";
import ClassComponent from "./ClassComponent";

function App() {
    return (
        <div>
            <h1>Function 컴포넌트 예제</h1>
            <FunctionComponent />

            <h1>Class 컴포넌트 예제</h1>
            <ClassComponent />
        </div>
    );
}

export default App;
