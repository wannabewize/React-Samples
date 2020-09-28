import React, {useState} from 'react';

// Context 생성 코드가, 먼저 동작해야 한다.
// Function, ClassComponent 에서 Context를 참조하므로 별도로 분리, 미리 동작하게 작성
import {ThemeContext, LanguageContext} from './Constant';
import NormalComponent from "./NormalComponent";
import FunctionComponent from "./FunctionComponent";
import ClassComponent from "./ClassComponent";


import LanguageSelector from './LanguageSelector';
import FunctionConsumer from './FunctionConsumer';
import ClassConsumer from './ClassConsumer';

function App() {
    let [languagePreference, setLanguage] = useState('ko');

    function changeLang(lang) {
        setLanguage(lang);
        console.log('change lang :', lang);
    }
    
    return (
        <div>
            <h1>Context Example</h1>
            <h3>Context 없이 프로퍼티로 전달</h3>
            <NormalComponent />

            <h3>Context와 컴포넌트</h3>
            <ThemeContext.Provider value="dark">
                <FunctionComponent />
                <ClassComponent />
            </ThemeContext.Provider>

            <h1>Consumer Example</h1>
            <LanguageContext.Provider value={{lang: languagePreference, changeLang: changeLang}}>
                <LanguageSelector />
                <FunctionConsumer />
                <ClassConsumer />
            </LanguageContext.Provider>


        </div>
    );
}


export default App;
