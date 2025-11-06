import { Component } from '@angular/core';
import { GithubIcon, InstagramIcon, LinkedinIcon, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-side-nav',
  imports: [LucideAngularModule],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
})
export class SideNav {
  GithubIcon = GithubIcon;
  LinkedInIcon = LinkedinIcon;
  InstagramIcon = InstagramIcon;

  socialMedias = [
    {
      link: "https://github.com/wonderingfire",
      icon: GithubIcon,
      label: 'Github'
    },
    {
      link: "https://www.linkedin.com/in/nathaniel-b-chavez/",
      icon: LinkedinIcon,
      label: 'LinkedIn'
    },
    {
      link: "https://www.instagram.com/",
      icon: InstagramIcon,
      label: 'Instagram'
    }
  ];
}
