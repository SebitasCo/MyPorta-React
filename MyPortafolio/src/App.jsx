import { Route, Routes } from 'react-router-dom';

import { Home } from './components/Pages/Home/Home'
import { Services } from './components/Pages/Services/Services';
import { Education } from './components/Pages/Education/Education';
import { Skills } from './components/Pages/Skills/Skills';
import { Header } from './components/Layouts/Header/Header'
import { BackGround } from './components/Layouts/BackGround/BackGround'
import { Footer } from './components/Layouts/Footer/Footer';



export const App = () => {
  return (
<>
<BackGround />
      <Header />
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/Services' element= {<Services/>}/>
        <Route path='/Skills' element= {<Skills/>}/>
        <Route path='/Education' element= {<Education/>}/>


      </Routes>

 <Footer/>
      </>
  )
}

