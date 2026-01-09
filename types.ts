
export interface VideoRecommendation {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  duration: string;
  genre: string;
  description: string;
  rating: number;
  source: string;
}

export interface UserProfile {
  name: string;
  email: string;
  history: VideoRecommendation[];
  favorites: VideoRecommendation[];
}

export enum Genre {
  SCIFI = 'Sci-Fi',
  DOCUMENTARY = 'Documentary',
  TRAVEL = 'Travel',
  FOOD = 'Food & Culture',
  COMEDY = 'Comedy',
  TECH = 'Tech & Gadgets',
  CINEMA = 'Video Essays',
  NATURE = 'Nature',
  STORYTELLING = 'Storytelling'
}

export enum Duration {
  SNACK = '5-10 mins',
  MEAL = '15-25 mins',
  FEAST = '30-45 mins',
  BINGE = '60+ mins'
}
