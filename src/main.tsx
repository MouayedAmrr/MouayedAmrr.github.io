import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

try {
  createRoot(rootElement).render(<App />);
} catch (error) {
  console.error("Failed to render app:", error);
  rootElement.innerHTML = `
    <div style="padding: 20px; color: white; background: #1a1a1a; min-height: 100vh; display: flex; align-items: center; justify-content: center; flex-direction: column;">
      <h1>Error Loading Application</h1>
      <p>Please check the browser console for details.</p>
      <pre style="background: #2a2a2a; padding: 10px; border-radius: 4px; margin-top: 10px;">${error instanceof Error ? error.message : String(error)}</pre>
    </div>
  `;
}
