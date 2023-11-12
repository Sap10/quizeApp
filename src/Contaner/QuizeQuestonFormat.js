import '../App.css';

import AnswerOptions from './AnswerOptions';

const QuizeQuestonPattern = (props) => {
    let dataFormat = Array.from(props?.data);
    let dataStat = dataFormat.map((data,key) => {
        let answers = [data?.correct_answer, ...data?.incorrect_answers];

           return (<div key={key}>
                <h3>{data?.question}</h3>
                <ul>
                  <AnswerOptions answerData={answers} questionNo={`q${key}`}/>
                </ul>
            </div>)
        }
    );


    return (
        <div className="container">
            {dataStat}
        </div>
    );
}

export default QuizeQuestonPattern;