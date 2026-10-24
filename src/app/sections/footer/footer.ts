import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class FooterSection {
  protected readonly currentYear = new Date().getFullYear();
}
