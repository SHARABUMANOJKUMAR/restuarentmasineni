import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Menu } from './pages/Menu';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { Container } from './components/common/Container';
import { Typography } from './components/common/Typography';
import { Button } from './components/common/Button';
import { Card } from './components/common/Card';
import { Utensils, Home as HomeIcon } from 'lucide-react';

function NotFoundPage() {
  return (
    <div style={{ padding: 'var(--space-4xl) 0', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <Container size="narrow">
        <Card
          variant="default"
          padding="xl"
          style={{
            textAlign: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: 'var(--space-3xl) var(--space-xl)'
          }}
        >
          <Typography variant="display" color="primary" weight={800} style={{ marginBottom: '8px' }}>
            404
          </Typography>
          <Typography variant="h2" weight={700} style={{ marginBottom: '12px' }}>
            Page Not Found
          </Typography>
          <Typography variant="body-lg" color="muted" style={{ marginBottom: 'var(--space-2xl)', maxWidth: '480px', margin: '0 auto var(--space-2xl) auto' }}>
            The culinary destination or page you are seeking might have been moved or does not exist. Let's get you back to the delicious food!
          </Typography>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button to="/" variant="primary" size="md" icon={HomeIcon}>
              Back to Home
            </Button>
            <Button to="/menu" variant="secondary" size="md" icon={Utensils}>
              Explore Menu
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        <ScrollToTop />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
