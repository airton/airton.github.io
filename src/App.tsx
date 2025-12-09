import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Politicas from './pages/Politicas';
import Termos from './pages/Termos';
import ZeroDowntime from './pages/ZeroDowntime';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/zero-downtime" element={<ZeroDowntime />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;