import { utilService } from "../services/util.service.js"
const { useState, useEffect, useRef } = React

export function SeasonClock() {

    const [isDark, setIsDark] = useState(false)
    const [date, setDate] = useState(new Date())

    let month = utilService.getMonthName(date)
    let day = utilService.getDayName(date, 'en-GB')
    let season = getSeasonByMonth(month)

    let dynClassBg = isDark ? 'dark' : 'light'
    let dynClassTxt = isDark ? 'txtDark' : 'txtLight'
    const intervalIdRef = useRef()

    useEffect(() => {
        intervalIdRef.current = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            onStopClock()
        }
    }, [])

    function onStopClock() {
        clearInterval(intervalIdRef.current)
    }

    function getSeasonByMonth(month) {
        switch (month) {
            case 'December':
            case 'January':
            case 'February':
                return 'winter'
            case 'March':
            case 'April':
            case 'May':
                return 'spring'
            case 'June':
            case 'July':
            case 'August':
                return 'summer'
            case 'September':
            case 'October':
            case 'November':
                return 'autumn'
        }
    }

    function getToggle() {
        const togle =
            <React.Fragment>
                <label for="theme" class="theme">
                    <span class="theme__toggle-wrap">
                        <input id="theme" class="theme__toggle" type="checkbox" role="switch" name="theme" value="dark" />
                        <span class="theme__fill"></span>
                        <span class="theme__icon">
                            <span class="theme__icon-part"></span>
                            <span class="theme__icon-part"></span>
                            <span class="theme__icon-part"></span>
                            <span class="theme__icon-part"></span>
                            <span class="theme__icon-part"></span>
                            <span class="theme__icon-part"></span>
                            <span class="theme__icon-part"></span>
                            <span class="theme__icon-part"></span>
                            <span class="theme__icon-part"></span>
                        </span>
                    </span>
                </label>
            </React.Fragment>
        return togle
    }

    const seasonClockSection =
        <section className={`season-clock-section ${dynClassBg}`}>
            <h1 className={dynClassTxt}>Season-Clock</h1>
            <h1 className={dynClassTxt}>{`${month} (${season})`}</h1>
            <div className="div-img">
                <img src={`../assets/img/${season}.png`} alt="season img"></img>
            </div>
            <h3 className={dynClassTxt}>{day}</h3>
            <div className="bgColor-div">
                <label className="switch">
                    <input type="checkbox" onClick={() => { setIsDark(!isDark) }} />
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="clock-div">
                <span className={dynClassTxt}>{date.toLocaleTimeString()}</span>
            </div>
        </section>

    return seasonClockSection

}