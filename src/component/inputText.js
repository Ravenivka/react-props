import { useState } from "react";

export default function TextInput () {
    const [inputText, setInputText] = useState('');
    const [arr, setArr] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);
    function setID (array) {
        let i = 1;
        let flag = true;
        while (flag) {
            flag = false;
        } 
        array.forEach(element => {
            if (parseInt(element.id) == i) {
                i++;
                flag = true;
            }
        });
        return i;
    }   

    function clickHandler() {
        if (!inputText.trim()) {
            return null;
        }
        setArr([...arr, {
            id: setID(arr),
            text: inputText
        } ]);
        setInputText('');        
    }

    return (
        <div className="list">
            <p>Добавить комментарий</p>
            <textarea cols={50} rows={10} id="input" value={inputText} onChange={(event) => setInputText(event.target.value)} /><br/>
            <button className="addbtn" onClick={clickHandler}>Добавить</button>
            <ul>
                {arr.map((item) => (
                    <li key={item.id}>{item.text} <button className="remover" onClick={function() {
                        arr.splice(arr.indexOf(item), 1);
                        setArr([...arr]);
                    }} >Удалить</button></li>
                ))}
            </ul>
        </div>

    )
}
