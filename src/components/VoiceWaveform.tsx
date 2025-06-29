import React from "react";

interface VoiceWaveformProps {
  className?: string;
}

// 11 bars, symmetrical, tallest in the center
const staticBarHeights = [12, 18, 26, 36, 48, 56, 48, 36, 26, 18, 12];

const VoiceWaveform: React.FC<VoiceWaveformProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-end justify-center gap-[2px] bg-white p-2 rounded-xl shadow-md w-fit ${className}`} title="Voice Assistant Listening…" aria-label="Voice Assistant Listening…" tabIndex={0}>
      {staticBarHeights.map((height, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full bg-sky-500"
          style={{ height: `${height}px` }}
        />
      ))}
    </div>
  );
};

export default VoiceWaveform; 