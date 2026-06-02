'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#050301',
        color: '#f5f0e6',
        margin: 0,
        fontFamily: 'sans-serif',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#d4af37' }}>Fatal Error</h2>
        <p style={{ marginBottom: '2rem', color: '#a69b8d' }}>A critical error occurred. We apologize for the disruption.</p>
        <button
          onClick={() => reset()}
          style={{
            background: '#0a0a0a',
            color: '#f5f0e6',
            border: '1px solid #d4af37',
            padding: '0.75rem 2rem',
            borderRadius: '100px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
