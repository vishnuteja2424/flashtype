import React from 'react'
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard'
import './TypingChallengeContainer.css'
import TypingChallenge from '../TypingChallenge/TypingChallenge'
const TypingChallengeContainer = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timerRemaining,
    timerStarted,
    testInfo,
    onInputChange
}) => {
    return (
        <div className="typing-challenge-container">
            {/* Details Section */}
            <div className="details-container">
                <ChallengeDetailsCard cardName="Words" cardValue={words}/>
                
                {/* characters typed*/}
                <ChallengeDetailsCard cardName="Characters" cardValue={characters}/>
                
                {/* speed*/}
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm}/>
                 
            </div>
            
            {/* The real challenge */}
            <div className="typewriter-container">
                <TypingChallenge
                    selectedParagraph={selectedParagraph}
                    timerRemaining={timerRemaining}
                    timerStarted={timerStarted}
                    testInfo={testInfo}
                    onInputChange={onInputChange}/>
            </div>
        </div>
    );
}

export default TypingChallengeContainer;