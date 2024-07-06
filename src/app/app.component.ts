import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { GeminiNanoService } from './gemini-nano.service';
interface PromptOutput {
  prompt: string;
  output: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public userInput = '';

  public suggestions = ([] = [
    'Tell me a joke',
    'Tell me about Dominican Republic',
  ]);

  public promptOutputs: PromptOutput[] = [];
  private readonly _geminiNanoSvc = inject(GeminiNanoService);

  sendQuestion(prompt?: string): void {
    const query = prompt || this.userInput;

    this._geminiNanoSvc.generateResponse(query).then((response: string) => {
      this.promptOutputs.unshift({ prompt: query, output: response });
      this.userInput = '';
    });
  }
}
