import React, {useState} from 'react';

export const FunctionComponent = () => {
    let [value, setValue] = useState(100);

    let [input, setInput] = useState('Initial');
    let [isChecked, setChecked] = useState(true);
    let [selected, setSelected] = useState('react');

    function handleSubmit(e) {
        alert(`
        input: ${input},
        isChecked: ${isChecked ? 'true':'false'},
        selected: ${selected}`);
        e.preventDefault();
    }

    return (
        <>
            <h3>Function Component</h3>
            <ul>
                <li>상태 value : {value}</li>
                <li><button onClick={() => setValue(value+1)}>상태값 증가</button></li>
            </ul>
            <form onSubmit={handleSubmit}>
            <h4>Form</h4>
            <ul>
                <li>입력값 : <input
                    onChange={ e => {setInput(e.target.value)}}/></li>
                <li>입력값 상태 : {input}</li>

                <li>체크 : <input
                    type="checkbox"
                    checked={isChecked}
                    onChange = { e => {setChecked(!isChecked)}}/>                    
                    상태 : {isChecked ? "true" : "false"}
                </li>
                <li>
                    <select                     
                        value={selected}
                        onChange={e => setSelected(e.target.value)}>
                        <option value='node'>Node.js</option>
                        <option value='react'>React.js</option>
                        <option value='rn'>ReactNative</option>
                    </select>
                    상태값 : {selected}
                </li>
            </ul>
            <button type="submit">Submit</button>
            </form>
        </>
    )
}