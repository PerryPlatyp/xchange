import Image from 'next/image';
import logo from '../../public/logo.png'
import Link from 'next/link';

const HeaderStyle = {
    backgroundColor: '#fff',
    // make it go all the way to the top
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '75px',
    // make it look floating over the rest of the page using a box-shadow
    boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
    // make everything be on the same line
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: '5',

}

const fa = {
    padding: '22.5px',
}

const getStartewd = {
    height: '50px',
    width: '100px',

}

const faguette = {
    position: 'relative',
    right: '25px'
}

export default function Header() {
    
    return (
        <div style={HeaderStyle}>
            <div style={fa}>
                <Image src={logo} height="25px" width="125px" />
            </div>
            {/* 
                Put coin prices here, in le middle of le header
            */}
            <Link href="/exchange">
                <div style={faguette}>
                    <button style={getStartewd} >Get Started</button>
                </div>
            </Link>
            
        </div>
    )
}