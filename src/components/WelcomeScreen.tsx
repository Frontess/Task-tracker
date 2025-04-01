import React, { useState, useEffect } from "react";

const WelcomeScreen: React.FC<{ onAnimationEnd: () => void }> = ({
  onAnimationEnd,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd(); // Завершаем анимацию через 3 секунды
    }, 3000);
    return () => clearTimeout(timer); // Очищаем таймер
  }, [onAnimationEnd]);

  return (
    <div className="welcome-screen">
      <h1>Добро пожаловать в Task Tracker!</h1>
    </div>
  );
};

export default WelcomeScreen;
