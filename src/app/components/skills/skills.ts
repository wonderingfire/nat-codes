import { Component } from '@angular/core';
import { technicalExpertise } from './skills-data';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-skills',
  imports: [LucideAngularModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = '<skills />';
  technicalExpertise = technicalExpertise;
}
