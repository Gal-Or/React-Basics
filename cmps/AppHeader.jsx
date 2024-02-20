
export function AppHeader({ setComp }) {


    return (
        <header className="app-header full main-layout">
            <section className="header-container">
                <h1>React Starter Proj</h1>

                <button onClick={() => { setComp('AnimalList') }}>Animal List</button>
                <button onClick={() => { setComp('SeasonClock') }}>Season Clock</button>
                <button onClick={() => { setComp('CountDown') }}>Count Down</button>
                <button onClick={() => { setComp('WatcherApp') }}>Watcher App</button>
                <button onClick={() => { setComp('MouseMonitor') }}>Mouse Monitor</button>
            </section>
        </header>
    )
}
