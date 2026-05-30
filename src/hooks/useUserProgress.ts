import { useState, useEffect, useCallback } from 'react';

interface UserProgress {
  stars: number;
  streak: number;
  lastPlayedDate: string | null;
  dailyStars: number;
  settings: {
    soundEnabled: boolean;
    notificationsEnabled: boolean;
  };
  towerHighscore?: number;
  blastHighscore?: number;
  snakeHighscore?: number;
  floodHighscore?: number;
}

const DEFAULT_PROGRESS: UserProgress = {
  stars: 0,
  streak: 0,
  lastPlayedDate: null,
  dailyStars: 0,
  settings: {
    soundEnabled: true,
    notificationsEnabled: true,
  },
  towerHighscore: 0,
  blastHighscore: 0,
  snakeHighscore: 0,
  floodHighscore: 0
};

export function useUserProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem('vocabjoy_progress');
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...DEFAULT_PROGRESS, ...parsed, settings: { ...DEFAULT_PROGRESS.settings, ...(parsed.settings || {}) } };
      }
    } catch (e) {
      console.error('Failed to load progress', e);
    }
    return DEFAULT_PROGRESS;
  });

  useEffect(() => {
    try {
      localStorage.setItem('vocabjoy_progress', JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save progress', e);
    }
  }, [progress]);

  const updateStars = useCallback((amount: number) => {
    setProgress(prev => {
      const today = new Date().toISOString().split('T')[0];
      const isNewDay = prev.lastPlayedDate !== today;
      return {
        ...prev,
        stars: Math.max(0, prev.stars + amount),
        dailyStars: isNewDay ? Math.max(0, amount) : Math.max(0, prev.dailyStars + amount),
        lastPlayedDate: today
      };
    });
  }, []);

  const updateStreak = useCallback(() => {
    setProgress(prev => {
      const today = new Date().toISOString().split('T')[0];
      
      if (prev.lastPlayedDate === today) {
        return prev; // Already played today
      }

      let newStreak = prev.streak;
      let newDailyStars = prev.dailyStars;
      if (prev.lastPlayedDate) {
        const lastDate = new Date(prev.lastPlayedDate);
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastDate.toISOString().split('T')[0] === yesterday.toISOString().split('T')[0]) {
          newStreak += 1;
          newDailyStars = 0;
        } else if (lastDate.toISOString().split('T')[0] !== today) {
          newStreak = 1; // Streak broken
          newDailyStars = 0;
        }
      } else {
        newStreak = 1;
        newDailyStars = 0;
      }

      return {
        ...prev,
        streak: newStreak,
        lastPlayedDate: today,
        dailyStars: newDailyStars
      };
    });
  }, []);

  const updateSetting = useCallback((key: keyof UserProgress['settings'], value: boolean) => {
    setProgress(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        [key]: value
      }
    }));
  }, []);

  const updateTowerHighscore = useCallback((score: number) => {
    setProgress(prev => ({
      ...prev,
      towerHighscore: Math.max(prev.towerHighscore || 0, score)
    }));
  }, []);

  const updateBlastHighscore = useCallback((score: number) => {
    setProgress(prev => ({
      ...prev,
      blastHighscore: Math.max(prev.blastHighscore || 0, score)
    }));
  }, []);

  const updateSnakeHighscore = useCallback((score: number) => {
    setProgress(prev => ({
      ...prev,
      snakeHighscore: Math.max(prev.snakeHighscore || 0, score)
    }));
  }, []);

  const updateFloodHighscore = useCallback((score: number) => {
    setProgress(prev => ({
      ...prev,
      floodHighscore: Math.max(prev.floodHighscore || 0, score)
    }));
  }, []);

  return {
    progress,
    updateStars,
    updateStreak,
    updateSetting,
    updateTowerHighscore,
    updateBlastHighscore,
    updateSnakeHighscore,
    updateFloodHighscore,
  };
}
