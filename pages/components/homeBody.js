import ExchangeBox from '../components/exchangebox';

const sussywussy = {
    width: '100vw',
    position: 'relative',
    top: '75px',
    color: '#000',
    zIndex: '1',

}

const h1 = {
    fontSize: '50px',
    fontWeight: 'bold',
    textAlign: 'center',

}

const text = {
    fontSize: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
}

const kys = {
    color: "#614bcc",
    // add a glow effect to the text
    textShadow: '0 0 10px #614bcc',
}




export default function homeBody() {
    return (
        <div style={sussywussy}>
            
            {/* Buy and sell shit */}
            <div>
                <h1 style={h1}>The <span style={kys}>Defi</span> Exchange For The <span style={kys}>Future</span></h1>
                <p style={text}>The most trusted cryptocurrency trading platform</p>
                <p style={text}>No KYC · Low Fees · Community Driven</p>
            </div>
            
            {/* exchange thing */}
                {<ExchangeBox />}    

            {/* submit button */}
            

        </div>
    )
}