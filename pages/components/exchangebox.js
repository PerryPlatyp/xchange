import Image from 'next/image';
import btcLogo from "../../public/logo.png"
import { BsFillArrowRightSquareFill } from 'react-icons/bs';



const style = {
    height: '100px',
    width: '50%',
    position: 'relative',
    backgroundColor: '#fafafa',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    // add a drop shadow to make it look like a box
    boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
    // align all items in the center
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '800px',
    backgroundColor: "transparent",


}

const buttonstyle = {
    height: '50px',
    textAlign: 'center',
    width: '150px',
    borderRadius: '5px',
    backgroundColor: '#fafafa',
    color: '#000',
    
    // remove left top and bottom border
    // make text grey
    color: '#000',

    
}

const fagstyle = {
    padding: '2.5%',

}

const inpootamount = {
    width: '150px',
    height: '50px',
    textAlign: 'center',
    
    backgroundColor: '#fff',
    color: '#000000',
    // add rounded corners 
    borderRadius: '5px',


    
}

const hstyle = {
    marginRight: '2%',
}


async function ExchangeBox() {
    var currency1 = document.getElementById("currency1").value;
    var currency2 = document.getElementById("currency2").value;
    
    var c1amount = document.getElementById("c1amount").value;

    // if c1amount is empty, set it to 0
    if (c1amount == "") {
        c1amount = 0;
    }

    // if c1amount is not a number, set it to 0
    if (isNaN(c1amount)) {
        c1amount = 0;
    }

    

    const link1 = "https://api.coingecko.com/api/v3/simple/price?ids=" + currency1 + "&vs_currencies=usd";
    // make a fetch request to the link
    var c1price = await fetch(link1)
        .then(response => response.json())
        .then(data => {
            return data[currency1].usd;
        }
        )
        .catch(error => {
            console.log(error);
        }
        )


    
    const link2 = "https://api.coingecko.com/api/v3/simple/price?ids=" + currency2 + "&vs_currencies=usd";
    // make a fetch request to the link
    var c2price = await fetch(link2)
        .then(response => response.json())
        .then(data => {
            return data[currency2].usd;
        }
        )
        .catch(error => {
            console.log(error);
        }
        )

    
    var c2amount = c1amount * c1price / c2price;
    // only keep 6 decimal places
    c2amount = c2amount.toFixed(6);
    document.getElementById("c2amount").value = c2amount;
    

    


}

const fagamount = {
    // put text in the middle of the box
    textAlign: 'center',
    width: '150px',
    height: '50',
    // add a border to make it look like a box
    border: '1px solid #000',
    
    borderRadius: '5px',

}

const inpootsamount = {
    width: '150px',
    height: '50px',
    textAlign: 'center',
    
    backgroundColor: '#fff',
    color: '#000000',
    // add rounded corners 
    borderRadius: '5px',
    

}
const bstyle = {

    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: '10%',
    
    
}

const buttonspace = {
    height: '100px',
    width: '200px',
    fontSize: '20px',
    fontWeight: 'bold',
    // make a minty green background
    backgroundColor: '#614bcc',
    borderRadius: '10px',
    border: 'none',
    // make text color grey
    color: '#fff',
    // add a colorful glow to the button
    boxShadow: '0px 0px 20px #614bcc',
    // on hover, make the mouse pointer change to a hand
    cursor: 'pointer',

    
}

function setshitto01(){
    document.getElementById("c1amount").value = "0.1";
}

// when the page loads, run this function
function redirect() {
    var currencybegin = document.getElementById("currency1").value;
    var currencyend = document.getElementById("currency2").value;
    var priceOfCurrencyBegin = document.getElementById("c1amount").value;
    // if priceOfCurrencyBegin is empty, set it to 0
    if (priceOfCurrencyBegin == "") {
        priceOfCurrencyBegin = 0;
    }
    window.location.href = "/exchange?currency1=" + currencybegin + "&currency2=" + currencyend + "&c1amount=" + priceOfCurrencyBegin;
}

const fuckyou = {
    position: "relative",
    top: '7.5%',
}

function ft(){
    document.getElementById("ass").style.cursor = "hand";
}


export default function Exchagnebox() {
    
    
    return (
        <div style={fuckyou}>

        
        <div style={style}>
            <div style={inpootamount}>
                <input type="text" placeholder="Amount" style={inpootamount} id="c1amount" onChange={
                    // only run this function after 1 second
                    () => {
                        setTimeout(() => {
                            ExchangeBox();
                        }
                        , 500);
                    }
                } autoComplete="off" maxLength="6" />
            </div>
            <div className="dropbutton"style={fagstyle}>
                <select name="" id="currency1" style={buttonstyle} onChange={ExchangeBox}>
                    <option value="bitcoin">BTC</option>
                    <option value="ethereum">ETH</option>
                    <option value="ripple">XRP</option>
                    <option value="litecoin">LTC</option>
                </select>
            </div>
            <div style={hstyle}>
                <BsFillArrowRightSquareFill size={30}/>
            </div>
            <div style={inpootamount}>
                <input type="text" placeholder="Amount" id='c2amount' style={inpootsamount} readOnly />
            </div>
            <div className="dropbutton"style={fagstyle}>
                <select name="" id="currency2" style={buttonstyle} onChange={ExchangeBox}>
                    <option value="monero">XMR</option>
                    <option value="bitcoin">BTC</option>
                    <option value="ethereum">ETH</option>
                    <option value="ripple">XRP</option>
                    <option value="litecoin">LTC</option>
                </select>
            </div>


            
            
        </div>

        <div>


            <div style={bstyle}>
                <button style={buttonspace} onClick={redirect} onMouseEnter={ft} id="ass">Exchange</button>
            </div>
        </div>
        </div>
    )
}