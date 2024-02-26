import React from 'react';
import { Route, Routes } from 'react-router-dom';
import VisitorCounter from './components/vistorCount';

// App Component
function App() {
  // Render the component structure using React Router
  return (
    <Routes>
      {/* Define a route for the root path that renders the VisitorCounter component */}
      <Route path='/' element={<VisitorCounter />} />
    </Routes>
  );
}

// Export the App component as the default export
export default App;

