const React = require('react');
const { useState } = require('react');

// class WordRelay extends React.Component {
const WordRelay = () => {
    const [word, setWord] = useState('강아지');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputEl = React.useRef(null);

    onSubmitForm = (e) => {
        e.preventDefault(); // 어떤 이벤트를 명시적으로 처리하지 않은 경우, 해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정
        if (word[word.length - 1] === value[0]) {
            setResult('잘했어요');
            setWord(value);
            setValue('');
            
            inputEl.current.focus();
        } else {
            setResult('틀렸어요');
            setValue('');

            inputEl.current.focus();
        }
    };
    
    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputEl} value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
                <button>입력하기</button>
            </form>
            <div>{result}</div>
        </>
    );
    
}

module.exports = WordRelay; 