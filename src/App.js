import React from 'react';
import Header from './header'
import './app.scss'
import Headline from './headline'

function App() {
  return (
        <div>
        <Header />
        <section className="main">
          <Headline  header="Posts" desc="Click the button to Render Posts"/>
        </section>
        </div>

  );
}

export default App;
