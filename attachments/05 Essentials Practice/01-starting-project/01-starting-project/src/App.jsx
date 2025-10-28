import Header from './components/Header'
import Input from './components/Input'
import Result from './components/Result.jsx'
import {calculateInvestmentResults} from './util/investment.js'
import {formatter} from './util/investment.js'

function handleChange ( event ) {
    console.log(event.target.value)
}

function App() {
    console.log(calculateInvestmentResults({
        initialInvestment : 1222,
        annualInvestment : 155,
        expectedReturn : 1,
        duration : 1,
    }))
    return (
        <div className="center">
            <Header/>
            <div id="user-input">
                <div className="input-group">
                    <Input label="initialInvestment" onChange={handleChange} />
                    <Input label="annualInvestment"/>
                </div>
                <div className="input-group">
                    <Input label="expectedReturn"/>
                    <Input label="duration"/>
                </div>
            </div>

            <Result isFilled={false}/>
        </div>
    )
}

export default App
