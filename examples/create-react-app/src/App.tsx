import React from 'react';
import { Circle, Rectangle } from 'example-component-library'

import './App.css';
import 'example-component-library/dist/css/Circle/styles.css';
import 'example-component-library/dist/css/Rectangle/styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Circle
            desc="A blue circle"
            fill="#7ed6df"
            size={200}
            title="Water planet"
          />
        </div>
        <div>
          <Rectangle
            desc="A rectangle that is 4 times taller than it is wide"
            fill="#30336b"
            height={600}
            title="Minimalist building"
            width={150}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
