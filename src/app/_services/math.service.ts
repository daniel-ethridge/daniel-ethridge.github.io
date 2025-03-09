import { Injectable } from '@angular/core';

export interface MathJaxObject {
    typeset: () => void;
  }

declare global {
    interface Window {
        MathJax: MathJaxObject;
    }
}

@Injectable({
  providedIn: 'root'
})

export class MathService {
  typesetMath(): boolean {
    
    if (window.MathJax) {
      window.MathJax.typeset();
      return true;
    } else {
      return false;
    }
  }
}

export class MathRenderer {
    constructor (private mathService: MathService) {}
    
    render() {
        new Promise((resolve, reject) => {
          if (this.mathService.typesetMath()) {
            resolve("Math successfully rendered");
            } else {
            reject("Math failed to render");
            }
        })
        .then(result => console.log(result))
        .catch(result => console.error(result));
      }
}