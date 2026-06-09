export type InfoBoxData = {
  variant: 'merksatz' | 'warnung';
  title?: string;
  text: string;
};

export type QuizQuestion = {
  question: string;
  type: 'single' | 'multi';
  options: string[];
  correctIndexes: number[];
  explanation: string;
};

export type LearnContent = {
  heading: string;
  text: string;
  infoBox?: InfoBoxData;
};

export type Module = {
  id: number;
  title: string;
  emoji: string;
  description: string;
  videoId?: string;
  learnContent: LearnContent[];
  quiz: QuizQuestion[];
};
