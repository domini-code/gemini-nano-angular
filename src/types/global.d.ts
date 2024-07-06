export {};
declare global {
  interface Window {
    ai: AnimationMetadataType;
  }
}

type TextSession = {
  prompt: (question: string) => Promise<string>;
};

type AIType = {
  createTextSession: () => Promise<TextSession>;
};
