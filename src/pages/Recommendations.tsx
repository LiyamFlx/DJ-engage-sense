import React from 'react';
import { TrackRecommendationPanel } from '../components/recommendations/TrackRecommendationPanel';
import { useAudioStore } from '../store/audioStore';
import { useTrackRecommendations } from '../hooks/useTrackRecommendations';

const Recommendations: React.FC = () => {
  const { audioData, metrics } = useAudioStore();
  const recommendations = useTrackRecommendations(
    audioData?.metrics ?? null,
    metrics
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Track Recommendations</h1>
      <TrackRecommendationPanel
        recommendations={recommendations}
        onSelectTrack={(track) => console.log('Selected track:', track)}
      />
    </div>
  );
};

export default Recommendations;