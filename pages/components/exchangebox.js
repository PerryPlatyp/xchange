import Image from 'next/image';
import btcLogo from "../../public/logo.png"
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
const CoinGecko = require('coingecko-api');


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


function ExchangeBox() {
    var currency1 = document.getElementById("currency1").value;
    var currency2 = document.getElementById("currency2").value;

    var c1amount = document.getElementById("c1amount").value;

    const client = new CoinGecko();
    client.coins.fetchAll().then(response => {
        console.log(response);
    }
    ).catch(error => {
        console.log(error);
    }
    );


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

export default function exchagnebox() {

    return (

        <div style={style}>
            <div style={inpootamount}>
                <input type="text" placeholder="Amount" style={inpootamount} id="c1amount" />
            </div>
            <div className="dropbutton"style={fagstyle}>
                <select name="" id="currency1" style={buttonstyle}>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="XRP">XRP</option>
                    <option value="LTC">LTC</option>
                </select>
            </div>
            <div style={hstyle}>
                <BsFillArrowRightSquareFill size={30}/>
            </div>
            <div style={inpootamount}>
                <input type="text" placeholder="Amount" style={inpootsamount} readOnly />
            </div>
            <div className="dropbutton"style={fagstyle}>
                <select name="" id="currency2" style={buttonstyle}>
                    <option value="XMR">XMR</option>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="XRP">XRP</option>
                    <option value="LTC">LTC</option>
                </select>
            </div>
            <button onClick={ExchangeBox}>f</button>
            
        </div>
    )
}