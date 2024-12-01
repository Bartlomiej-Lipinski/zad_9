import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './components/list';
import Form from './components/form';
import NotFound from './components/NotFound';
import LekDescription from './components/LekDescription';



function App() {
  return (
      <Router>
          <div>
              <nav>
                  <a href="/">Home</a> | <a href="/add">Add Item</a>
              </nav>
              <Routes>
                  <Route path="/" element={<List />} />
                  <Route path="/add" element={<Form />} />
                  <Route path="/item/:id" element={<LekDescription />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
