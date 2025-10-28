export default function Result( { isFilled } ) {
    if (!isFilled) {
        return (
            <p>Please fill all fields</p>
        )
    } else {
        return (
            <table id="result">
                <thead>
                <tr>
                    <td>Year</td>
                    <td>Investment Value</td>
                    <td>Interest(Year)</td>
                    <td>Total interest</td>
                    <td>Invested Capital</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                </tr>
                </tbody>
            </table>
        )
    }
}