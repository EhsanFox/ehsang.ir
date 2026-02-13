import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading by tracking actual progress
    const images = [
      'figma:asset/c926241450618e3253d8d170b6684d71a3041531.png',
      'figma:asset/cedbeb2336539903367b06e92e58be31d8ce65a4.png'
    ];

    let loadedCount = 0;
    const totalItems = images.length + 1; // images + initial mount

    // Track initial mount
    setProgress(Math.round((1 / totalItems) * 100));
    loadedCount++;

    // Load images
    images.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        const newProgress = Math.round((loadedCount / totalItems) * 100);
        setProgress(newProgress);

        if (loadedCount === totalItems) {
          setTimeout(() => {
            onComplete();
          }, 500);
        }
      };
      img.onerror = () => {
        loadedCount++;
        const newProgress = Math.round((loadedCount / totalItems) * 100);
        setProgress(newProgress);

        if (loadedCount === totalItems) {
          setTimeout(() => {
            onComplete();
          }, 500);
        }
      };
      // For figma:asset URLs, we'll simulate loading
      setTimeout(() => {
        img.dispatchEvent(new Event('load'));
      }, 300 + Math.random() * 500);
    });
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #1a0b2e 100%)',
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex items-center justify-center">
        {/* Circular progress */}
        <svg className="size-[200px] -rotate-90" viewBox="0 0 200 200">
          {/* Background circle */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <motion.circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={565.48} // 2 * π * r
            initial={{ strokeDashoffset: 565.48 }}
            animate={{ 
              strokeDashoffset: 565.48 - (565.48 * progress) / 100 
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06d857" />
              <stop offset="100%" stopColor="#0a57ff" />
            </linearGradient>
          </defs>
        </svg>

        {/* Percentage text */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.p
            className="font-['Yekan_Bakh:ExtraBlack',sans-serif] text-6xl bg-clip-text bg-gradient-to-r from-[#06d857] to-[#0a57ff]"
            style={{ WebkitTextFillColor: "transparent" }}
            key={progress}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {progress}%
          </motion.p>
          <p className="font-['Yekan_Bakh:Thin',sans-serif] text-white text-lg mt-2">
            Loading...
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
