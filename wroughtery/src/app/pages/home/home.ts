import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnvilMark } from '../../shared/anvil-mark/anvil-mark';
import { SectionHead } from '../../shared/section-head/section-head';
import { TOOLS } from '../../core/tools';

/** Studio home — the umbrella identity, pure forge. */
@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, AnvilMark, SectionHead],
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  /** The shipped tools that have their own bridge page under the umbrella. */
  protected readonly shipped = TOOLS.filter((t) => t.route);
}
