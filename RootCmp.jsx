const { useState } = React
import { Welcome } from "./cmps/Welcome.jsx"
import { AppHeader } from "./cmps/AppHeader.jsx"
import { Home } from "./cmps/Home.jsx"
import { AnimalList } from "./cmps/AnimalList.jsx"
import { SeasonClock } from "./cmps/SeasonClock.jsx"
import { CountDown } from "./cmps/CountDown.jsx"
import { MouseMonitor } from "./cmps/MouseMonitor.jsx"
import { WatcherApp } from "./cmps/watcherAppCmps/WatcherApp.jsx"



export function RootCmp() {
    const [currComp, setCurrComp] = useState('Welcome')

    function setComp(name) {
        setCurrComp(name);
    }

    function getCurrComp() {
        switch (currComp) {
            case 'Welcome':
                return <Welcome />
            case 'AnimalList':
                console.log('in AnimalList case');
                return <AnimalList animalInfos={[
                    { type: 'Malayan Tiger', count: 787 },
                    { type: 'Mountain Gorilla', count: 212 },
                    { type: 'Fin Whale', count: 28 },
                ]} />
            case 'SeasonClock':
                return <SeasonClock />
            case 'CountDown':
                return <CountDown startFrom={10} onDone={() => { console.log('Done!') }} />
            case 'WatcherApp':
                return <WatcherApp />
            case 'MouseMonitor':
                return <MouseMonitor />
            default:
                return <h1>Page not Found...</h1>
        }
    }

    return (
        <section className="app main-layout">
            <AppHeader setComp={setComp} />
            <h1>{currComp}</h1>
            <main className="flex main-content">
                {getCurrComp()}
            </main>
        </section>
    )
}