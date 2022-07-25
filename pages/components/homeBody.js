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
}



export default function homeBody() {
    return (
        <div style={sussywussy}>
            
            {/* Buy and sell shit */}
            <div>
                <h1 style={h1}>Buy & Sell Crypto Instantly</h1>
                <p style={text}>The most trusted cryptocurrency trading platform</p>
            </div>
            
            {/* exchange thing */}
                {<ExchangeBox />}    

        </div>
    )
}