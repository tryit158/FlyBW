import React, { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import RootLayout from './layouts/RootLayout';
import './index.css';

// 路由代碼分割 (Code Splitting & Lazy Loading) 大幅加速首頁載入
const Home = lazy(() => import('./pages/Home'));
const ArticlesList = lazy(() => import('./pages/ArticlesList'));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'));
const ItineraryPlannerPage = lazy(() => import('./pages/ItineraryPlannerPage'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

function PageLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-3 py-16 animate-in fade-in duration-200">
      <div className="w-12 h-12 rounded-full overflow-hidden animate-bounce bg-white">
        <img src="/avatar-flybw.png" alt="Loading" className="w-full h-full object-cover rounded-full" />
      </div>
      <p className="font-bold text-sm text-gray-700 tracking-wider">黑白飛載入中 ✈️ ...</p>
    </div>
  );
}

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: withSuspense(Home) },
      { path: '/itinerary-planner', element: withSuspense(ItineraryPlannerPage) },
      { path: '/articles', element: withSuspense(ArticlesList) },
      { path: '/articles/:id', element: withSuspense(ArticleDetail) },
      { path: '/about', element: withSuspense(About) },
      { path: '/contact', element: withSuspense(Contact) },
      { path: '/privacy', element: withSuspense(Privacy) },
      { path: '/terms', element: withSuspense(Terms) },
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
);
