import React from 'react'
import Header from './Components/Header';
import News from './Components/News';
import CoinChart from './Components/CoinChart';
import Celebs from './Components/Celebs';
const App = () => {
  return (
    <div>
      <Header/>
      <News/>
      <CoinChart/>
      <Celebs/>
    </div>
  )
}

export default App