import logo from './assets/investment-calculator-logo.png'

function App() {
    return (
        <>
            <header id="header">
                <img src={logo} alt="Logo"/>
                <h1>Investment Calculator</h1>
            </header>
            <div id="user-input">
                <div className="input-group">
                    <div>
                        <label htmlFor="input1">First Input</label>
                        <input type="text" id="input1" />
                    </div>
                    <div>
                        <label htmlFor="input2">Second Input</label>
                        <input type="text" id="input2" />
                    </div>
                </div>

                <div className="input-group">
                    <div>
                        <label htmlFor="input3">Third Input</label>
                        <input type="text" id="input3" />
                    </div>
                    <div>
                        <label htmlFor="input4">Fourth Input</label>
                        <input type="text" id="input4" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
