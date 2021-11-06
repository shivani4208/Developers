import { useState, useEffect } from 'react';
import { FaMicrophone } from 'react-icons/fa'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function Mic() {
    const [isListening, setIsListening] = useState(false)
    const [note, setNote] = useState(null)

    useEffect(() => {
        handleListen()
    }, [isListening])

    const handleListen = () => {
        if (isListening) {
            mic.start()
            mic.onend = () => {
                console.log('continue..')
                mic.start()
            }
        } else {
            mic.stop()
            mic.onend = () => {
                console.log('Stopped Mic on Click')
            }
        }
        mic.onstart = () => {
            console.log('Mics on')
        }
        mic.onresult = event => {
            const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')
            console.log(transcript)
            setNote(transcript)

            mic.onerror = event => {
                console.log(event.error);
            }
        }
    }

    return (
        <>
            <div className="container">
                <div className="box">
        
                        <FaMicrophone className="mic" onClick={(e) =>
                        setIsListening(prevState => !prevState)} />
      
                    <p>{note}</p>
                </div>
            </div>
        </>
    );
}

export default Mic;