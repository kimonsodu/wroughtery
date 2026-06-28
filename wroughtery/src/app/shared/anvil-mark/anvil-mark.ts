import {
  Component,
  ChangeDetectionStrategy,
  booleanAttribute,
  numberAttribute,
  computed,
  input,
} from '@angular/core';

/**
 * The Wroughtery mark — an anvil with (optionally) a glowing hot billet.
 *
 * This is where the signal system is enforced *in code*: data decides
 * `variant`, never a hand-edit.
 *   - variant="hot"  → anvil + ember billet (umbrella / active / AI tool)
 *   - variant="cold" → bare anvil          (an ordinary / sensor-driven tool)
 *
 * The anvil + the cool overhang use `currentColor`, so the whole mark recolors
 * with CSS `color`: iron on light, bone on dark. Only the hot end is ember.
 *
 * The ember glow filter + fade gradient are defined ONCE globally
 * (see <app-ember-defs/> in the app shell) and referenced here by id, so
 * many hot marks on one page share a single filter and never collide on ids.
 */
@Component({
  selector: 'app-anvil-mark',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './anvil-mark.scss',
  template: `
    <span class="lockup" [class.lockup--stacked]="stacked()">
      <svg
        class="mark"
        [attr.viewBox]="viewBox()"
        [style.height]="markHeight()"
        [attr.role]="wordmark() ? null : 'img'"
        [attr.aria-hidden]="wordmark() ? 'true' : null"
        [attr.aria-label]="wordmark() ? null : title()"
      >
        @if (!wordmark()) {
          <title>{{ title() }}</title>
        }

        <!-- anvil body + cool overhang (recolors with currentColor) -->
        <path
          d="M 3.5 18.2 Q 3 18.5 3.5 18.8 C 12 26 25 32 38 32 C 42 32 46 34 46 42 C 46 50 38 52 33.5 53 Q 33 53.5 33 54.5 L 33 57 Q 33 58 34 58 L 43 58 C 49 58 53 55 60 55 C 66 55 70 58 74 58 L 82 58 Q 83 58 83 57 L 83 54.5 Q 83 53.5 82.5 53 C 82 52 65 50 65 40 C 65 30 85 23 103.5 22 Q 104 22 104 21.5 L 104 16.5 Q 104 16 103.5 16 L 41.5 16 Q 41 16 41 16.5 L 41 18 Q 41 18.5 40.5 18.5 L 3.5 18.2 Z"
          fill="currentColor"
        />

        @if (variant() === 'hot') {
          <!-- the long billet: cool length runs off the heel (currentColor) -->
          <path
            d="M52.2 11 L117.8 11 Q120 11 120 13.2 L120 13.8 Q120 16 117.8 16 L52.2 16 Q50 16 50 13.8 L50 13.2 Q50 11 52.2 11 Z"
            fill="currentColor"
          />
          <!-- the hot working end: ember fade + glow -->
          <path
            d="M52.2 11 L83 11 L83 16 L52.2 16 Q50 16 50 13.8 L50 13.2 Q50 11 52.2 11 Z"
            fill="url(#emberFade)"
            filter="url(#emberGlow)"
          />
        }
      </svg>

      @if (wordmark()) {
        <span class="wordmark display" [style.font-size]="wordmarkFont()"
          >Wroughtery</span
        >
      }
    </span>
  `,
})
export class AnvilMark {
  /** hot = ember billet (umbrella/AI/active); cold = bare anvil (ordinary tool). */
  readonly variant = input<'hot' | 'cold'>('hot');
  /** Render the "Wroughtery" wordmark beside the mark. */
  readonly wordmark = input(false, { transform: booleanAttribute });
  /** Stack the wordmark under the mark instead of beside it. */
  readonly stacked = input(false, { transform: booleanAttribute });
  /** Mark height in px (width is auto). */
  readonly height = input(50, { transform: numberAttribute });
  /** Wordmark font size in px (only used when wordmark is true). */
  readonly wordmarkSize = input(54, { transform: numberAttribute });
  /** Accessible title for the mark. */
  readonly title = input('Wroughtery');
  /**
   * Scale the lockup down on narrow viewports (caps at the given sizes on
   * wide screens). Use for large standalone lockups like the home hero;
   * the small header/footer lockups don't need it.
   */
  readonly responsive = input(false, { transform: booleanAttribute });

  // Hot keeps the extra width for the overhanging bar; cold crops to the anvil.
  protected readonly viewBox = computed(() =>
    this.variant() === 'hot' ? '0 8 132 52' : '0 8 108 52',
  );

  // Responsive sizes clamp to a vw-based floor so a big lockup can't overflow
  // a phone; inline px otherwise. The floor never exceeds the requested size.
  protected readonly markHeight = computed(() => {
    const h = this.height();
    return this.responsive() ? `clamp(${Math.min(h, 40)}px, 11vw, ${h}px)` : `${h}px`;
  });
  protected readonly wordmarkFont = computed(() => {
    const w = this.wordmarkSize();
    return this.responsive() ? `clamp(${Math.min(w, 30)}px, 8vw, ${w}px)` : `${w}px`;
  });
}
