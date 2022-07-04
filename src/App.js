import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutPage from './Pages/aboutPage'

const HomePage = () =>  <h1>Welcome Home</h1>
const ContactPage = () => <div>Welcome contact page</div>


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route 
      path="/" 
      exact
      element={<HomePage/>}/>
    
      <Route 
      path="/contact" 
      exact
      element={<ContactPage />}/>

     <Route 
      path="/about" 
      exact
      element = {<AboutPage/>}
      />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
