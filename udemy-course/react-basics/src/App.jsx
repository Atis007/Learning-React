import { useState, /*Fragment*/ } from 'react';

import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  return (
    <>
      {/*<Fragment> Root component to wrap sibling components, but not render it in the DOM*/}
      {/* the empty tags can be used as an alternative to Fragments*/}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
