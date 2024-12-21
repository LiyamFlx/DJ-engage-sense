import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { LoadingState } from './components/ui/LoadingState';
import { ErrorBoundary } from './components/ErrorBoundary';
import { lazyWithRetry } from './utils/performance/lazyWithRetry';

// Lazy load pages with retry functionality
const Dashboard = lazyWithRetry(() => import('./pages/Dashboard'));
const Analysis = lazyWithRetry(() => import('./pages/Analysis'));
const Recommendations = lazyWithRetry(() => import('./pages/Recommendations'));

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<LoadingState />}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/recommendations" element={<Recommendations />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;