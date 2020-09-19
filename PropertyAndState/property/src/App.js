import React from 'react';
import {MyComponent} from './MyComponent';
import {BasicFnComponent, FnComponent} from './FnComponent';

function App() {
    const strValue = 'Hello';
    const numValue = 10;
    const arrValue = [1, 2, 3];
    const objValue = {title:'테넷', director: '크리스토퍼 놀란'};
    function sayHello() {
        console.log('Hello');
    }
    const nodeValue = <span>노드1</span>
    return (
        <div>
            <MyComponent
                boolValue={true} exist
                numValue={numValue} numValue2={20}
                strValue={strValue} strValue2='React'
                arrValue={arrValue} arrValue2={['one', 'two', 'three']}
                objValue={objValue} objValue2={{title:'뮬란', director: '니키 카로'}}
                fnValue={sayHello}
                fnValue2={
                    function sayHowAreYou() {
                        return 'How are you';
                    }
                }
                nodeValue={nodeValue} nodeValue2={<span>노드2</span>}
            />
            <hr />
            <BasicFnComponent
                boolValue={true} exist
                numValue={numValue} numValue2={20}
                strValue={strValue} strValue2='React'            
            />
            <FnComponent arrValue={arrValue} objValue={objValue} fnValue={sayHello} nodeValue={nodeValue}/>
        </div>
    );
}

export default App;
