import { useState, useEffect, useRef } from "react";

interface PictureBoxProps {
  src?: string;
  images?: string[];
  alt?: string;
  className?: string;
  interval?: number; // Time in milliseconds between image changes
  fadeDuration?: number; // Duration of fade animation in milliseconds
}

const PictureBox = ({ 
  src, 
  images, 
  alt = "", 
  className = "",
  interval = 3000,
  fadeDuration = 800
}: PictureBoxProps) => {
  const imageList = images || (src ? [src] : []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (imageList.length <= 1) {
      setNextIndex(0);
      return;
    }

    // Initialize next index
    setNextIndex((currentIndex + 1) % imageList.length);

    const cycleImages = () => {
      const newNextIndex = (currentIndex + 1) % imageList.length;
      const nextImageSrc = imageList[newNextIndex];
      
      // Preload next image
      const img = new Image();
      img.src = nextImageSrc;
      
      const startTransition = () => {
        // Set next index first so image is rendered
        setNextIndex(newNextIndex);
        
        // Wait a frame to ensure image is in DOM
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            // Start crossfade: current fades out, next fades in
            setOpacity(0);
            
            // After fade completes, update current index and reset opacity
            timeoutRef.current = setTimeout(() => {
              setCurrentIndex(newNextIndex);
              setOpacity(1);
            }, fadeDuration);
          });
        });
      };
      
      if (img.complete) {
        // Image already loaded (cached)
        setTimeout(startTransition, 50);
      } else {
        img.onload = () => setTimeout(startTransition, 50);
        img.onerror = () => setTimeout(startTransition, 50);
      }
    };

    intervalRef.current = setInterval(cycleImages, interval);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [imageList, interval, fadeDuration, currentIndex]);

  const currentImage = imageList[currentIndex] || "";
  const nextImage = imageList[nextIndex] || "";
  const showNext = nextImage && nextImage !== currentImage && imageList.length > 1;

  return (
    <div
      className={`relative w-full rounded-lg overflow-hidden 
        shadow-xl border-2 border-primary/20
        transition-all duration-300 ease-in-out
        hover:border-primary/50 hover:shadow-primary/30
        ${className}`}
    >
      {/* Current image */}
      <img
        key={`current-${currentIndex}`}
        src={currentImage}
        alt={alt || `Image ${currentIndex + 1}`}
        className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out"
        loading="eager"
        decoding="async"
        style={{
          transitionDuration: `${fadeDuration}ms`,
          opacity: opacity,
          zIndex: opacity > 0.5 ? 2 : 1,
        }}
      />
      {/* Next image - always rendered when available to prevent blink */}
      {showNext && (
        <img
          key={`next-${nextIndex}`}
          src={nextImage}
          alt={alt || `Image ${nextIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out"
          loading="eager"
          decoding="async"
          style={{
            transitionDuration: `${fadeDuration}ms`,
            opacity: 1 - opacity,
            zIndex: opacity < 0.5 ? 2 : 1,
          }}
        />
      )}
    </div>
  );
};

export default PictureBox;

