const { useState, useEffect } = React

export function MouseMonitor() {

    const [isOn, setIsOn] = useState(true)
    const [pos, setPos] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        if (isOn)
            addMouseListener()
        else
            removeMouseListener()
    }, [isOn])

    let dynTextBtn = isOn ? 'Pause' : 'Resume'
    let dynXY = isOn ? `x : ${pos.x}, y: ${pos.y}` : ''

    function addMouseListener() {
        document.addEventListener('mousemove', updatePos)
    }

    function removeMouseListener() {
        document.removeEventListener('mousemove', updatePos)
    }

    function updatePos(ev) {
        setPos(prevPos => {
            return {
                ...prevPos,
                x: ev.pageX,
                y: ev.pageY
            }
        })
    }

    return <section className="mouse-monitor-section">
        <h1>Mouse Position</h1>
        <h3 className="x-y-vals">{dynXY} </h3>
        <button className="pause-btn" onClick={(ev) => { setIsOn((prevIsOn) => !prevIsOn) }}>{dynTextBtn}</button>
    </section>


}