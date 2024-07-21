import React from 'react';
import GreetingClass from './components/GreetingClass';
import GreetingFunctional from './components/GreetingFunctional';

const App = () => {
  return (
    <div>
      <GreetingClass name="John" message="Hello" />
      <GreetingFunctional name="Jane" message="Hi" />
    </div>
  );
};

export default App;
