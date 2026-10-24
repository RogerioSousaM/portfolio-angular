import { Component } from '@angular/core';
import { ContactSection } from '../sections/contact/contact';
import { ExperienceSection } from '../sections/experience/experience';
import { FooterSection } from '../sections/footer/footer';
import { HeaderSection } from '../sections/header/header';
import { SkillsSection } from '../sections/skills/skills';

@Component({
  imports: [
    HeaderSection,
    ExperienceSection,
    SkillsSection,
    ContactSection,
    FooterSection,
  ],
  selector: 'app-portfolio',
  styleUrl: './portfolio.scss',
  templateUrl: './portfolio.html',
})
export class PortfolioPage {}
