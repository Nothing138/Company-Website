import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route
          path="*"
          element={
            <div
              style={{
                textAlign: 'center',
                padding: '100px 20px',
              }}
            >
              <h1>404 - Page Not Found</h1>
              <p>The page you're looking for doesn't exist.</p>
              <a href="/">Go back to home</a>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;