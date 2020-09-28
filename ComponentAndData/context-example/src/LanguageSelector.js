import React from 'react';
import { LanguageContext } from "./Constant"

function LanguageSelector() {
    return (        
        <LanguageContext.Consumer>
        {({lang, changeLang}) => (
        <select value={lang} onChange={e => changeLang(e.target.value)}>
            <option value='ko'>한국어</option>
            <option value='en'>영어</option>
        </select>        
        )}
        </LanguageContext.Consumer>
    )
}

export default LanguageSelector;