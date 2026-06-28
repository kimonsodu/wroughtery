import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AnvilMark } from '../anvil-mark/anvil-mark';

/**
 * The forge shell header — shared, unchanged, on every page (the endorsed
 * frame). Spec-sheet meta strip + wordmark lockup + mono nav.
 */
@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, AnvilMark],
  styleUrl: './header.scss',
  template: `
    <header class="head">
      <div class="meta mono">
        <span>Wroughtery — Studio</span>
        <span class="meta__rev">wroughtery.com · rev 1.0</span>
      </div>

      <div class="bar">
        <a class="brand" routerLink="/" aria-label="Wroughtery — home">
          <app-anvil-mark
            variant="hot"
            wordmark
            [height]="34"
            [wordmarkSize]="34"
            title="Wroughtery"
          />
        </a>

        <nav class="nav mono" aria-label="Primary">
          <a
            routerLink="/"
            routerLinkActive="nav__link--active"
            [routerLinkActiveOptions]="{ exact: true }"
            >Studio</a
          >
          <a routerLink="/tools" routerLinkActive="nav__link--active">Tools</a>
          <a routerLink="/orbital" routerLinkActive="nav__link--active">Orbital</a>
        </nav>
      </div>
    </header>
  `,
})
export class Header {}
