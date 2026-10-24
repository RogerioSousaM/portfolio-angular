import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  imports: [MatButtonModule, MatMenuModule, MatToolbarModule],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class HeaderSection {
  protected readonly activeSection = signal('home');

  protected scrollToSection(sectionId: string): void {
    this.activeSection.set(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
