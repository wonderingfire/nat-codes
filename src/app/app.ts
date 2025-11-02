import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { SideNav } from "./components/side-nav/side-nav";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, SideNav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  logoText = '<NC />';
  protected readonly title = signal('nat-codes');
}
