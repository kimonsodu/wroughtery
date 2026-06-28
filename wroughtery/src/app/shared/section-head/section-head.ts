import { Component, ChangeDetectionStrategy, input } from '@angular/core';

/**
 * The section primitive: mono eyebrow (NN ember + LABEL ash) → Bricolage 700
 * H2 → Plex Sans intro, opened by a top hairline. This is the shared
 * spec-sheet rhythm that makes every section read as the same instrument.
 */
@Component({
  selector: 'app-section-head',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './section-head.scss',
  template: `
    <div class="eyebrow-row">
      @if (index()) {
        <span class="idx">{{ index() }}</span>
      }
      <span class="eyebrow">{{ label() }}</span>
    </div>
    @if (level() === 'h1') {
      <h1 class="display heading">{{ heading() }}</h1>
    } @else {
      <h2 class="display heading">{{ heading() }}</h2>
    }
    @if (intro()) {
      <p class="intro">{{ intro() }}</p>
    }
  `,
})
export class SectionHead {
  /** Two-digit ember index, e.g. "01". Optional. */
  readonly index = input('');
  /** Uppercase mono label, e.g. "Lockups". */
  readonly label = input('');
  /** Bricolage 700 heading. */
  readonly heading = input('');
  /** Optional Plex Sans intro paragraph. */
  readonly intro = input('');
  /** Heading level — set 'h1' for a page's first/primary section heading. */
  readonly level = input<'h1' | 'h2'>('h2');
}
