'use client';

import GlobalStyles from './styles/GlobalStyles';
import Hero from './components/Hero';
import EditorialMoment from './components/EditorialMoment';
import AboutEnrique from './components/AboutEnrique';
import Footer from './components/Footer';



export default function Home() {
  return (
    <>
      <GlobalStyles />
      <Hero />
<EditorialMoment />
<AboutEnrique />
<Footer />
   
    </>
  );
}
