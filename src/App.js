import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import LeftSide from './components/left-side';
import RightSide from './components/right-side';
import ContactModel from './components/ContactModel';

function App() {
  return (<>
    <NavBar/>
    <section className='main-section flex-r' >
      <ContactModel/>
      <LeftSide/>
      <RightSide/>
    </section>
  </>
  );
}

export default App;
