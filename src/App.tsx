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
    <div className="min-h-screen flex flex-col pt-8 px-4 md:px-8 max-w-5xl mx-auto print:p-0 print:m-0 print:min-h-0 print:block print:w-full">
      <div className="print:hidden"><Header /></div>
      <main className="flex-grow space-y-24 py-12 print:space-y-0 print:py-0 print:m-0">
        <div className="print:hidden"><PriceObservatory /></div>
        <div className="print:hidden"><FeaturedArticle /></div>
        <div className="print:hidden"><BaggageGuide /></div>
        <div className="print:hidden"><TravelCalendar /></div>
        <Checklist />
      </main>
      <div className="print:hidden"><Footer /></div>
    </div>
  );
}
