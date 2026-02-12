import { useState } from "react";
import { HeroPage } from "./pages/Hero";

function App() {
  const [count, setCount] = useState(0);

  return <HeroPage />;
}

export default App;
