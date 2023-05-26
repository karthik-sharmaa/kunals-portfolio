import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        
        <About />
        <Tech />
        <Experience />
        <Works />
        
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
