import React from 'react';
import { AudioAnalyzer } from '../components/audio/AudioAnalyzer';
import { useAudioStore } from '../store/audioStore';

const Analysis: React.FC = () => {
  const audioData = useAudioStore(state => state.audioData);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Audio Analysis</h1>
      <AudioAnalyzer audioData={audioData} />
    </div>
  );
};

export default Analysis;