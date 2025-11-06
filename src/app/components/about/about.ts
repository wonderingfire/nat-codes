import { Component } from '@angular/core';
import { ABOUT_ME_PARAGRAPH, MISSION, PHILOSOPHY, VIEW_MY_CV, WHAT_I_OFFER, WHO_AM_I } from '../../constants/text-constants';
import { coreStack, missionItems, philosophyItems, whatIOfferList } from './about-data';
import { BracesIcon, BugIcon, BugOffIcon, CodeXmlIcon, LucideAngularModule, ScaleIcon, ShieldIcon } from "lucide-angular";

@Component({
  selector: 'app-about',
  imports: [LucideAngularModule],
  templateUrl: 'about.html',
  styleUrl: 'about.scss',
})
export class About {
  coreStack = coreStack;
  philosophyItems = philosophyItems;
  missionItems = missionItems;
  whatIOfferList = whatIOfferList;
  aboutMeParagraph = ABOUT_ME_PARAGRAPH;
  whoAmI = WHO_AM_I;
  viewMyCv = VIEW_MY_CV;
  mission = MISSION;
  philosophy = PHILOSOPHY;
  whatIOffer = WHAT_I_OFFER;
  CodeXmlIcon = CodeXmlIcon;
}
