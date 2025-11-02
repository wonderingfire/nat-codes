import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";

@Component({
  selector: 'app-root',
  imports: [Header, Hero],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  logoText = '<NC />';
  protected readonly title = signal('nat-codes');
}
