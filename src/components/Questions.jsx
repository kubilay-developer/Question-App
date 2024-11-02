import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './QuestionsStyles.css';

function Questions({ count, setCount, finalData, setFinalData, isDisabled, setIsDisabled }) {
    const [showOptions, setShowOptions] = useState(false);
    const [optionsTimer, setOptionsTimer] = useState(4);
    const [selectedOption, setSelectedOption] = useState(null);

    function handleClick(option, item) {
        setIsDisabled(true);
        setSelectedOption(option);

        setFinalData(prevData =>
            prevData.map(finalItem =>
                finalItem.id === item.id ? { ...finalItem, selectedOption: option } : finalItem
            )
        );

        setTimeout(() => {
            setIsDisabled(false);
            setSelectedOption(null);
            setCount(prevCount => prevCount + 1);
        }, 1000);
    }

    useEffect(() => {
        setShowOptions(false);
        setOptionsTimer(4);
        const countdown = setInterval(() => {
            setOptionsTimer(prevOptionsTimer => {
                if (prevOptionsTimer > 1) {
                    return prevOptionsTimer - 1;
                } else {
                    clearInterval(countdown);
                    setShowOptions(true);
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, [count]);

    const item = finalData.find(item => item.id === count);
    if (item) {
        return (
            <div className='questions-page'>
                {
                    <div className='question-card'>
                        <img src={item.media} alt="question" />
                        <h2 className='question'>{item.id + ' - ' + item.question}</h2>
                        {showOptions ? (<div className='options'>
                            {item.options.map((option, index) => (
                                <div key={index}><button className={`
                                    ${selectedOption === option ? (option === item.answer ? 'correct' : 'incorrect') : ''}
                                    ${selectedOption && option === item.answer ? 'correct' : ''}
                                `} id={option} onClick={() => handleClick(option, item)} disabled={isDisabled}>{option}</button></div>
                            ))}
                        </div>) : (<div className='option-countdown'>
                            <p>Cevap şıkları <span>{optionsTimer}</span> saniye sonra açılacak.</p>
                        </div>)}
                    </div>
                }
            </div>
        )
    }
}

Questions.propTypes = {
    count: PropTypes.number.isRequired,
    setCount: PropTypes.func.isRequired,
    finalData: PropTypes.array.isRequired,
    setFinalData: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    setIsDisabled: PropTypes.func.isRequired
};

export default Questions;