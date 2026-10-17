import React, { useEffect, useState } from 'react';

// Every image dropped into src/assets/backgrounds joins the rotation automatically
const images = Object.values(
  import.meta.glob('../assets/backgrounds/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
);

function BackgroundGallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => setCurrent((i) => (i + 1) % images.length), 9000);
    return () => clearInterval(timer);
  }, []);

  if (images.length === 0) return null;

  return (
    <div className="bg-gallery" aria-hidden="true">
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt=""
          style={{ opacity: idx === current ? 'var(--bg-img-opacity)' : 0 }}
        />
      ))}
    </div>
  );
}

export default BackgroundGallery;
