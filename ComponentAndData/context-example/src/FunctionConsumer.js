import React, {useContext} from 'react';
import {LanguageContext} from './Constant';

function FunctionConsumer() {
    const languagePreference = useContext(LanguageContext);
    console.log('languagePreference:', languagePreference);
    return (
        <div>
        <h3>Function Consumer Component</h3>
        {languagePreference.lang == 'ko' ?
            <p>한국어 콘텐츠</p>
            : <p>English Contents</p>
        }
        </div>
    )
}

export default FunctionConsumer;