import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnvilMark } from '../anvil-mark/anvil-mark';

/** The forge shell footer — shared chrome on every page. */
@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, AnvilMark],
  styleUrl: './footer.scss',
  template: `
    <footer class="foot">
      <div class="foot__top">
        <div class="foot__brand">
          <app-anvil-mark variant="hot" wordmark [height]="30" [wordmarkSize]="30" />
          <p class="foot__line display">
            Wrought, <span class="ember">not bought.</span>
          </p>
        </div>

        <nav class="foot__nav mono" aria-label="Footer">
          <a routerLink="/">Studio</a>
          <a routerLink="/tools">Tools</a>
          <a routerLink="/orbital">Orbital</a>
        </nav>
      </div>

      <p class="foot__palette mono">
        wroughtery.com · iron #211E1B / steel #45525A / ember #C24E2A / ash
        #8C857B / bone #EFEAE0 / paper #E9E8E3
      </p>
    </footer>
  `,
})
export class Footer {}
