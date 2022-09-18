import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  mode: string = 'Dark';

  ngOnInit(): void {}

  toggleDarkTheme() {
    document.body.classList.toggle('dark-theme');
    this.mode = this.mode === 'Dark' ? 'Light' : 'Dark';
  }
}
