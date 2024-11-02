import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './ResultScreenStyles.css';
function ResultScreen({ finalData }) {
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [blank, setBlank] = useState(0);

    useEffect(() => {
        setCorrect(0);
        setWrong(0);
        setBlank(0)
        finalData.forEach(item => {
            if (item.selectedOption === 'none') {
                setBlank(prevBlank => prevBlank + 1);
            } else if (item.selectedOption === item.answer) {
                setCorrect(prevCorret => prevCorret + 1);
            } else {
                setWrong(prevWrong => prevWrong + 1);
            }
        });
    }, [finalData])

    return (
        <div className='result-screen'>
            {finalData.map(item => (
                <div key={item.id} className='result-card'>
                    <h4>{item.id} - {item.question}</h4>
                    <div>
                        {item.options.map(option => (
                            <div key={option}>
                                <button className={`
                                    ${item.selectedOption === option ? (option === item.answer ? 'correct' : 'incorrect') : ''}
                                    ${option === item.answer ? 'correct' : ''}
                                `} disabled>
                                    {option}
                                    {item.selectedOption === option ? (option === item.answer ? ' - doğru' : ' - yanlış') : ''}
                                    {item.selectedOption === 'none' && option === item.answer && ' - boş'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div className='result-card'>
                <h2 className='correct'><span>{correct} DOĞRU</span></h2>
                <h2 className='wrong'><span>{wrong} YANLIŞ</span></h2>
                <h2 className='blank'><span>{blank} BOŞ</span></h2>
            </div>
        </div>
    )
}

ResultScreen.propTypes = {
    finalData: PropTypes.array.isRequired
};

export default ResultScreen