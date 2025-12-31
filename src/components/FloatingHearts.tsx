import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const newHearts: Heart[] = [];
    for (let i = 0; i < 20; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 5,
        size: 10 + Math.random() * 20,
      });
    }
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up text-primary opacity-60"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
