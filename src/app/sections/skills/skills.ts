import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  imports: [MatCardModule],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class SkillsSection {
  protected readonly skills = [
    { category: 'Frontend', items: ['Angular', 'Angular Material', 'TypeScript'] },
    { category: 'Backend', items: ['Java', 'Spring Boot'] },
    { category: 'Mobile', items: ['Ionic'] },
    { category: 'Banco de Dados', items: ['Firebird, SQL Server'] },
    { category: 'Ferramentas', items: ['IA', 'Git', 'GitHub', 'DBeaver'] },
  ];
}
