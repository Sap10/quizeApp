const AnswerOptions = ({answerData,questionNo}) => {
    let dataFormat = Array.from(answerData);
    let content = dataFormat.map((data,key) => (
        <li key={key}>
            <input type="radio" name={questionNo} value={data} />{data}
        </li>
    ))

    return content;
}

export default AnswerOptions;