import './App.css';
import CompShowContacts from './components/ShowContacts';
import CompCreateContact from './components/CreateContact';
import CompEditContact from './components/EditContact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container is-fluid" style={{ height: '100vh' }}>
          <div className="notification">
            <Header style={{ marginBottom: '30px' }} />
            <Routes>
              <Route path="/" element={<CompShowContacts />} />
              <Route path="/create" element={<CompCreateContact />} />
              <Route path="/edit/:id" element={<CompEditContact />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
