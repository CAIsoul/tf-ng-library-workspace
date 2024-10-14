import { Injectable } from '@angular/core';

const sources: Array<TermInfo> = [
  {
    term: "attentionpoint",
    sigular: "Attention Point",
    plural: "Attention Points",
  }
]

@Injectable({
  providedIn: 'root'
})
export class ApplicationTermService {
  private findTermData(term: string) {
    return sources.find(d => d.term === term);
  }

  public getPluralTerm(term: string) {
    return this.findTermData(term)?.plural ?? "";
  }
}

interface TermInfo {
  term: string;
  sigular: string;
  plural: string;
}
