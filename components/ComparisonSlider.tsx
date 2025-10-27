'use client';

import React, { useState, useRef } from 'react';

interface ComparisonSliderProps {
  originalSrc: string;
  ditheredCanvas: HTMLCanvasElement | null;
}

export default function ComparisonSlider({ originalSrc, ditheredCanvas }: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(true);
  
  const handleMouseUp = () => setIsDragging(false);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  if (!ditheredCanvas) return null;

  const ditheredSrc = ditheredCanvas.toDataURL();

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-auto overflow-hidden rounded-xl cursor-col-resize select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* Dithered image (background) */}
      <img 
        src={ditheredSrc}
        alt="Dithered"
        className="w-full h-full object-contain"
        draggable={false}
      />
      
      {/* Original image (clipped) */}
      <div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={originalSrc}
          alt="Original"
          className="w-full h-full object-contain"
          draggable={false}
        />
      </div>
      
      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white/80 shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-10 h-10 bg-white rounded-full shadow-xl
                      flex items-center justify-center cursor-col-resize">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute bottom-4 left-4 glass-button px-3 py-1 rounded-lg text-xs font-medium text-white">
        Original
      </div>
      <div className="absolute bottom-4 right-4 glass-button px-3 py-1 rounded-lg text-xs font-medium text-white">
        Dithered
      </div>
    </div>
  );
}
