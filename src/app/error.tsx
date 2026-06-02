'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#050301',
      color: '#f5f0e6',
      fontFamily: 'var(--font-space-grotesk), sans-serif',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#d4af37' }}>Something went wrong!</h2>
      <p style={{ marginBottom: '2rem', color: '#a69b8d' }}>We sincerely apologize for the inconvenience.</p>
      <button
        onClick={() => reset()}
        style={{
          background: '#0a0a0a',
          color: '#f5f0e6',
          border: '1px solid #d4af37',
          padding: '0.75rem 2rem',
          borderRadius: '100px',
          cursor: 'pointer',
          fontSize: '1rem',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.background = '#111'}
        onMouseOut={(e) => e.currentTarget.style.background = '#0a0a0a'}
      >
        Try again
      </button>
    </div>
  );
}
