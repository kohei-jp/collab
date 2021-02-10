import React from 'react';
import Router from './Router'


function App() {
  return (
    <main>
      <Router />
    </main>
  );
}

export default App;

// page共通のheader, footerなどは、switchの外で定義