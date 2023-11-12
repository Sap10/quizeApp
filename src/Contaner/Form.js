import {useEffect,useState} from 'react';

import QuizeQuestonPattern from './QuizeQuestonFormat';

const Form = () => {

    const [quizeData,setQuizdata] = useState({});
    const [totalScore,setTotalScore] = useState(0);
    const [correctAnswer,setCorrectAnswer] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);
    const [notAttempt, setNotAttempt] = useState(0);

    useEffect(()=>{
        fetch(process.env.REACT_APP_QUIZE_DATA)
        .then(data => {
            let jsonObj = data.json();
            return jsonObj;
        })
        .then(response => {
            setQuizdata(response?.results);
        })
        .catch(()=>{
            console.log('data loadng error');
        });
    },[]);

    let quzeDatanfo = Array.from(quizeData);
    let quzeDatanfoArrayForm = [];
    quzeDatanfo.map(data => quzeDatanfoArrayForm.push(data?.correct_answer));

    const handleSubmit = (event) => {
        event.preventDefault();
        let totalScore = quzeDatanfoArrayForm.length;
        let correctAnswer = 0;
        let wrongAnswer = 0;
        let notAttempt = 0;
        let i = 0;

        for(const data of quzeDatanfoArrayForm){
            let name = `q${i}`;
            if(event.target[name].value === data){
                correctAnswer++;
            }else if(event.target[name].value === ''){
                notAttempt++;
            }else{
                wrongAnswer++;
            }
            i++;
        }
        setTotalScore(correctAnswer);
        setCorrectAnswer(correctAnswer);
        setWrongAnswer(wrongAnswer);
        setNotAttempt(notAttempt);
        //console.log(correctAnswer, notAttempt, wrongAnswer);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <QuizeQuestonPattern data={quizeData} />
                <button type="submit">Submit</button>
            </form>

            <h2>Total Score:{totalScore} </h2>
            <h2>Correct Answer: {correctAnswer}</h2>
            <h2>Wrong Answer: {wrongAnswer}</h2>
            <h2>Not attempt: {notAttempt}</h2>
        </>
    );

}

export default Form;