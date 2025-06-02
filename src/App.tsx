import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <LoginPage />
              </Layout>
            }
          />
          <Route
            path="/signup"
            element={
              <Layout>
                <SignupPage />
              </Layout>
            }
          />
          /** Protected Route 혹은 Private Route 구현 필요 */
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
