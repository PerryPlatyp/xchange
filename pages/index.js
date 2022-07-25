import Header from '../pages/components/header';
import HomeBody from '../pages/components/homeBody';

const pageStyle = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  backgroundColor: '#fafafa',
}


export default function Home() {
  return (
    <div style={pageStyle}>
      <Header />
      <HomeBody />
    </div>
  )
}
