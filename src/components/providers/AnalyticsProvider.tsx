'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { Analytics } from '@vercel/analytics/react';
import React, { useEffect } from 'react';

// Initialize PostHog only on the client side
if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    capture_pageview: false, // Handle this manually in Next.js app router if needed, or leave true
  });
}

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  return (
    <PHProvider client={posthog}>
      {children}
      <Analytics />
    </PHProvider>
  );
}
