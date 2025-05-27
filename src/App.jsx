import './App.css'

function App() {

    return (
        <>
            <header>
                <h1>Fruitmand bezorgservice</h1>
            </header>
            <main>
                <div>
                    <article>
                        <img src="src/assets/strawberry.png" alt="strawberry"/>
                        <h3>Aardbeien</h3>
                        <div className="fruitButtons">
                            <button>-</button>
                            <p>0</p>
                            <button>+</button>
                        </div>
                    </article>
                </div>
                <div>
                    <article>
                        <img src="src/assets/pear.png" alt="pear"/>
                        <h3>Peer</h3>
                        <div className="fruitButtons">
                            <button>-</button>
                            <p>0</p>
                            <button>+</button>
                        </div>
                    </article>
                </div>
                <div>
                    <article>
                        <img src="src/assets/melon.png" alt="melon"/>
                        <h3>Meloen</h3>
                        <div className="fruitButtons">
                            <button>-</button>
                            <p>0</p>
                            <button>+</button>
                        </div>
                    </article>
                </div>
                <div>
                    <article>
                        <img src="src/assets/pineapple.png" alt="pineapple"/>
                        <h3>Ananas</h3>
                        <div className="fruitButtons">
                            <button>-</button>
                            <p>0</p>
                            <button>+</button>
                        </div>
                    </article>
                </div>
            </main>
        </>
    )
}

export default App
