import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutPage from './Pages/aboutPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route 
      path="/" 
      exact
      render={() => {
        return <h1>Welcome Home</h1>
      }}/>
    
      <Route 
      path="/contact" 
      exact
      render={() => {
        return <div>Welcome contact page</div>
      }}/>

     <Route 
      path="/about" 
      exact
      component = {<AboutPage/>}
      />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
