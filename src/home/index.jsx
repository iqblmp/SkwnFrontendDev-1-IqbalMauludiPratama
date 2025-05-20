import Header from '@components/Header';
import Hero from '@components/Hero';
import Why from './Why';
import Partners from './Partners';
import Categories from './Categories';
import Products from './Products';
import Deals from './Deals';
import Footer from '@components/Footer';


const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Why />
        <Partners />
        <Categories />
        <Products />
        <Deals />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;