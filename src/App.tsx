/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import PriceObservatory from './components/PriceObservatory';
import BaggageGuide from './components/BaggageGuide';
import TravelCalendar from './components/TravelCalendar';
import FeaturedArticle from './components/FeaturedArticle';
import Checklist from './components/Checklist';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col pt-8 px-4 md:px-8 max-w-5xl mx-auto">
      <Header />
      <main className="flex-grow space-y-24 py-12">
        <PriceObservatory />
        <FeaturedArticle />
        <BaggageGuide />
        <TravelCalendar />
        <Checklist />
      </main>
      <Footer />
    </div>
  );
}
