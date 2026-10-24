import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  imports: [MatCardModule],
  selector: 'app-experience',
  styleUrl: './experience.scss',
  templateUrl: './experience.html',
})
export class ExperienceSection {
  protected readonly experiences = [
    {
      title: 'Desenvolvedor Fullstack',
      company: 'Grupo Luta pela Vida',
      period: 'Atual',
      bullets: [
        'Desenvolvimento e manutenção de aplicações utilizando Angular (Frontend), Java (Backend) e Ionic (Mobile).',
        'Implementação de novas funcionalidades e refatoração de código, garantindo performance, escalabilidade e segurança.',
        'Colaboração com equipes multidisciplinares para entrega contínua e melhoria de processos.',
      ],
    },
    {
      title: 'Analista de Suporte / Automação',
      company: 'Algar Tech',
      period: 'Período anterior',
      bullets: [
        'Desenvolvimento e implementação de automações usando VBA para processos internos, reduzindo tempo de execução.',
        'Análise de dados para identificar gargalos e propor melhorias que aumentaram a eficiência operacional.',
      ],
    },
    {
      title: 'Suporte Técnico',
      company: 'TV Paranaíba (Afiliada Record)',
      period: 'Período anterior',
      bullets: [
        'Atuação em suporte técnico a usuários com foco em resolução rápida de problemas de software e hardware.',
        'Manutenção preventiva e corretiva de equipamentos de TI, garantindo estabilidade da operação.',
      ],
    },
  ];
}
