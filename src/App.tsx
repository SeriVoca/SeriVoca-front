import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WordsPage from './pages/WordsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/:day" element={<WordsPage />} />
          /** Protected Route 혹은 Private Route 구현 필요 */
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
