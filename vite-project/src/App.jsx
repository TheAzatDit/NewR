import React, { useState } from 'react';

function smileface() {
  const [emoji, setEmoji] = useState('😀');
  
  const handleClick = () => {
    if (emoji === '😀') setEmoji('😐');
    else if (emoji === '😐') setEmoji('😢');
    else setEmoji('😀');
  };
  
  return (
    <div>
      <div style={{ fontSize: '400px' }}>{emoji}</div>
      <button onClick={handleClick}>Меняй</button>
    </div>
  );
}

export default smileface;