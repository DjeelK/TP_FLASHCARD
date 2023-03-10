import './App.css';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';



function App() {

  return (
    (
      <div className="App">
        <header>
          <NavBar/>
        </header>
        <main className="container">
          <div className="my-3 row">
            <div className="col-10 offset-1 rounded bg-dark p-3 text-light">
              <Outlet/>
            </div>
          </div>
        </main>
      </div>
    ));
  }
export default App;
