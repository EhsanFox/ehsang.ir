import { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import AnimatedPortfolio from './components/AnimatedPortfolio';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="size-full flex items-center justify-center">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      {!isLoading && <AnimatedPortfolio />}
    </div>
  );
}
