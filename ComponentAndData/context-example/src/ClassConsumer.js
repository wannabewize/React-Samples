import React, {useContext} from 'react';
import {LanguageContext} from './Constant';

class ClassConsumer extends React.Component {
    static contextType = LanguageContext;
    render() {
        let lang = this.context.lang;
        return (
            <div>
            <h3>Class Consumer Component</h3>
            {lang == 'ko' ?
                <p>한국어 콘텐츠</p>
                : <p>English Contents</p>
            }
            </div>
        )
    }
}

export default ClassConsumer;