import './App.css';
import Navbar from './components/Navbar';
import ImageGallery from './components/ImageGallery';
import AboutSection from './components/AboutSection';
import FeaturedComponent from './components/FeaturedComponent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <title>POTPOL</title>
      <Navbar />
      <main className="main-content">
        <ImageGallery />
        <AboutSection />
        <FeaturedComponent />
      </main>
      <Footer />
    </div>
  );
}

export default App;