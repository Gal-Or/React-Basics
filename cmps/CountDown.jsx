const { useState, useEffect, useRef } = React
import { utilService } from "../services/util.service.js"


export function CountDown({ startFrom, onDone }) {

    const [count, setCount] = useState(startFrom)
    let dynTxtColor = count < 7 ? 'redTxt' : ''

    const intervalIdRef = useRef()

    useEffect(() => {

        intervalIdRef.current = setInterval(() => {
            setCount(prevCount => {
                if (prevCount === 1) {
                    onStopCount()
                    onDone()
                }

                return prevCount - 1
            })
        }, 1000)

        return () => {
            onStopCount()
        }

    }, [])

    function onStopCount() {
        clearInterval(intervalIdRef.current)
    }

    return <section className="count-down-section">
        <h1>Count Down</h1>
        <span className={dynTxtColor}>{count}</span>
    </section>

}