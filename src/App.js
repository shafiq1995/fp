import './App.css';
import Navigationbar from './components/header';
import Layouts from './components/Layouts';
import Footer from './components/footer'
function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <Layouts/>
      <Footer/>
    </div>
  );
}

export default App;
