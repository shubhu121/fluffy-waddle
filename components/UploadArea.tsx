'use client';

import React, { useCallback, useState } from 'react';
import { useDitherStore } from '@/store/useDitherStore';

export default function UploadArea() {
  const [isDragging, setIsDragging] = useState(false);
  const { setOriginalImage, imageDataUrl, reset } = useDitherStore();

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setOriginalImage(img, e.target?.result as string);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }, [setOriginalImage]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const handleReplace = useCallback(() => {
    reset();
    document.getElementById('file-input')?.click();
  }, [reset]);

  if (imageDataUrl) {
    return (
      <div className="mb-6">
        <button
          onClick={handleReplace}
          className="glass-button px-6 py-3 rounded-xl text-white font-medium
                     transition-all duration-200 hover:scale-105"
        >
          Replace Image
        </button>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          relative border-2 border-dashed rounded-2xl p-12
          transition-all duration-300
          ${isDragging 
            ? 'border-glassAccent bg-glassAccent/20 scale-105' 
            : 'border-white/30 bg-white/5 hover:border-white/50'
          }
        `}
      >
        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
        />
        
        <div className="flex flex-col items-center justify-center text-center">
          <svg 
            className="w-16 h-16 mb-4 text-white/70"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
            />
          </svg>
          
          <h3 className="text-xl font-semibold text-white mb-2">
            Drop your image here
          </h3>
          <p className="text-white/60 mb-4">
            or click to browse
          </p>
          
          <button
            onClick={() => document.getElementById('file-input')?.click()}
            className="glass-button px-6 py-3 rounded-xl text-white font-medium"
          >
            Choose File
          </button>
          
          <p className="text-sm text-white/40 mt-4">
            PNG, JPG, WebP supported
          </p>
        </div>
      </div>
    </div>
  );
}
