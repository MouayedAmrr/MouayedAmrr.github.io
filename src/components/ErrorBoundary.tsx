import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '20px',
          color: 'white',
          background: '#1a1a1a',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontFamily: 'system-ui, sans-serif'
        }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Something went wrong</h1>
          <p style={{ marginBottom: '1rem', color: '#999' }}>Please check the browser console for details.</p>
          {this.state.error && (
            <pre style={{
              background: '#2a2a2a',
              padding: '15px',
              borderRadius: '4px',
              marginTop: '10px',
              maxWidth: '600px',
              overflow: 'auto',
              fontSize: '0.9rem'
            }}>
              {this.state.error.toString()}
              {this.state.error.stack && (
                <div style={{ marginTop: '10px', color: '#666' }}>
                  {this.state.error.stack}
                </div>
              )}
            </pre>
          )}
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

