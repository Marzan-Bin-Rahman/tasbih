import React from "react";
import Alhamdulillah from "./Components/Alhamdulillah";
import LaIlhaIllallah from "./Components/LaIlhaIllallah";
import SubhanAllah from "./Components/SubhanAllah";


function App() {
  return (
    <div>
      <SubhanAllah />
      <Alhamdulillah />
      <LaIlhaIllallah />
      <small className="footer-text english">Made with ❤️ by <a href="https://github.com/Marzan-Bin-Rahman" target="_blank" rel="noreferrer">Marzan</a></small>
    </div>
  );
}

export default App;
