import React from 'react';
import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import './App.css';
import { SAMPLE_PARAGRAPHS } from './../../data/sampleParagraphs'
//Have a look at the ppts of thsi project


const totalTime = 60;
const serviceUrl = "http://metaphorpsum.com/paragraphs/1/10";

const DefaultState = {
    selectedParagraph: "",
    timerStarted: false,
    timerRemaining: totalTime,
    words: 0,
    characters: 0,
    wpm: 0,
    testInfo: []
};

class App extends React.Component {

    state = DefaultState;

    fetchNewParagraphFallback = () => {
        const data = SAMPLE_PARAGRAPHS[
            Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
        ];

        const selectedParagraphArray = data.split("");
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
            return {
                testLetter: selectedLetter,
                status: "notAttempted",
            };
        });

        this.setState({...DefaultState, testInfo, selectedParagraph: data});
    }

    // fetchNewParagraph = () => {
    //     fetch(serviceUrl).then(response => response.text()).then(data => {
            
            
    //     });
    // }

    componentDidMount () {
        this.fetchNewParagraphFallback();
    }

    startTImer = () => {
        this.setState({timerStarted: true});
        const timer = setInterval(() => {
            if(this.state.timerRemaining <= 0) {
                clearInterval(timer)
            }
            const timeSpent = totalTime - this.state.timerRemaining;
            const wpm = timeSpent > 0
                ? (this.state.words / timeSpent) * totalTime : 0;
            this.setState({
                timerRemaining: this.state.timerRemaining - 1,
                wpm: parseInt(wpm)
            })
        }, 1000);
    };


    startAgain = () => {
        this.fetchNewParagraphFallback();
    }

    handleUserInput = (inputValue) => {
        if(!this.state.timerStarted) {
            this.startTImer()
        }
        
        /*
         * Handle the underflow case - all the characters should be shown as not attempted - early exit
         * Handle the overflow case - early exit
         * Handle the backspace case 
                - mark the [index + 1] element as not attempted (irrespective of whether or not index is less than 0)
                - But dont forget to check for the overflow case here
                        (index + 1 can go out of bound, when the index is equal to len - 1)
         * Update the status in the testInfo
                - Find out the last Character in the inputValue and its index 
                - O(1) op
                - Check if the character at same index in testInfo (state) matches
                - Yes -> mark it as correct
                - No -> mark as incorrect
         * Irrespective of the case, characters, words, and speed (wpm) can be updated
         */

        const characters = inputValue.length;
        const words = inputValue.split(" ").length;
        const index = characters - 1;

        //know about ... and slice
        if(index < 0) {
            this.setState({
                testInfo: [
                    {
                        testLetter: this.state.testInfo[0].testLetter,
                        status: "notAttempted",
                    },
                    ...this.state.testInfo.slice(1),
                ],
                characters,
                words,
            });

            return;
        }

        if (index >= this.state.selectedParagraph.length) {
            this.setState({characters, words});
            return;
        }

        //make a coyp of test info
        const testInfo = this.state.testInfo;
        if (!(index === this.state.selectedParagraph.length - 1))
            testInfo[index + 1].status = "notAttempted"

        //check for the correct type letters
        const isCorrect = inputValue[index] === testInfo[index].testLetter;
        //update the testInfo
        testInfo[index].status = isCorrect ? "correct" : "incorrect"

        //update the state
        this.setState({
            testInfo,
            words,
            characters
        });
    };

    render () {
        //no async operations in render()
        return (
            <div className="app">
                <Nav/>
                <Landing/>
                <ChallengeSection
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.words}
                    characters={this.state.characters}
                    wpm={this.state.wpm}
                    timerRemaining={this.state.timerRemaining}
                    timerStarted={this.state.timerStarted}
                    testInfo={this.state.testInfo}
                    onInputChange={this.handleUserInput}
                    startAgain={this.startAgain}
                />
                <Footer/>
            </div>
        );
    }
}

export default App;