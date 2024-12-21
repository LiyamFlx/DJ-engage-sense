import React from 'react';
import { Header } from './Header';
import { Breadcrumbs } from './Breadcrumbs';
import { OnboardingGuide } from '../onboarding/OnboardingGuide';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs />
        {children}
      </main>
      <OnboardingGuide />
    </div>
  );
};