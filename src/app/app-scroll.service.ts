import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppScrollService {
  position: [number, number] = [0, 0];
  setPosition(x: number, y: number) {
    this.position = [x, y];
  }

  getPosition(): [number, number] {
    return this.position;
  }
}
