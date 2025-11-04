import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { SideNav } from "./components/side-nav/side-nav";
import { About } from "./components/about/about";
import { Footer } from "./components/footer/footer";
import { Skills } from "./components/skills/skills";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, SideNav, About, Footer, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  logoText = '<NC />';
  protected readonly title = signal('nat-codes');
}
