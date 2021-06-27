import React from 'react';
import TryAgain from '../../TryAgain/TryAgain';
import TypingChallengeContainer from '../../TypingChallengeContainer/TypingChallengeContainer';
import './TestContainer.css';

const TestContainer = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timerRemaining,
    timerStarted,
    testInfo,
    onInputChange,
    startAgain
}) => {
        return (
            <div className="test-container">
                {
                    timerRemaining > 0 ? (
                        <div className="typing-challenge-cont">
                            <TypingChallengeContainer
                                timerRemaining={timerRemaining}
                                timerStarted={timerStarted}
                                words={words}
                                characters={characters}
                                selectedParagraph={selectedParagraph}
                                wpm={wpm}
                                testInfo={testInfo}
                                onInputChange={onInputChange}/>
                        </div>
                    ) : (
                        <div className="try-again-container">
                            <TryAgain startAgain={startAgain} words={words} characters={characters} wpm={wpm}/>
                        </div>
                    )

                }            
            </div>
        );
}

export default TestContainer;