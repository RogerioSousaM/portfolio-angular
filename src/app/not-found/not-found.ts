import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-not-found',
  styleUrl: './not-found.scss',
  templateUrl: './not-found.html',
})
export class NotFoundPage implements OnInit {
  private readonly router = inject(Router);

  ngOnInit(): void {
    console.error(
      '404 Error: User attempted to access non-existent route:',
      this.router.url,
    );
  }
}
