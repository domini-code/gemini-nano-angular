import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GeminiNanoService {
  private readonly _tuning = 'answer in plain text without markdown style';

  async generateResponse(question: string): Promise<string> {
    try {
      if (!window.ai || typeof window.ai.createTextSession !== 'function') {
        throw new Error(
          'AI API is not available. Please ensure you are using Chrome Canary with the appropriate flags enabled.'
        );
      }

      const createTextSession = await window.ai.createTextSession();
      const prompt = `${question} ${this._tuning}`;
      return await createTextSession.prompt(prompt);
    } catch (error) {
      return `Error: Error generating text: ${error}`;
    }
  }
}
