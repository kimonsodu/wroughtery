import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * The ember glow filter + fade gradient, defined ONCE for the whole document.
 * Rendered a single time in the app shell; every hot <app-anvil-mark/>
 * references `url(#emberGlow)` / `url(#emberFade)`.
 *
 * The glow is a 3-layer SVG filter (wide faint heat #B23311 → halo #E8581C →
 * hot core #FFC06A) merged over the source — keep it intact. The gradient fades
 * the hot working-end into the cool length of the billet.
 */
@Component({
  selector: 'app-ember-defs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      focusable="false"
      style="position:absolute;width:0;height:0;overflow:hidden"
    >
      <defs>
        <linearGradient
          id="emberFade"
          gradientUnits="userSpaceOnUse"
          x1="50"
          y1="13.5"
          x2="83"
          y2="13.5"
        >
          <stop offset="0" stop-color="#C24E2A" stop-opacity="1" />
          <stop offset="0.55" stop-color="#C24E2A" stop-opacity="1" />
          <stop offset="1" stop-color="#C24E2A" stop-opacity="0" />
        </linearGradient>

        <filter
          id="emberGlow"
          x="-70%"
          y="-180%"
          width="240%"
          height="460%"
          color-interpolation-filters="linearRGB"
        >
          <feGaussianBlur in="SourceAlpha" stdDeviation="2.0" result="b3" />
          <feFlood flood-color="#B23311" flood-opacity="0.5" result="c3" />
          <feComposite in="c3" in2="b3" operator="in" result="g3" />
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.0" result="b2" />
          <feFlood flood-color="#E8581C" flood-opacity="0.85" result="c2" />
          <feComposite in="c2" in2="b2" operator="in" result="g2" />
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.45" result="b1" />
          <feFlood flood-color="#FFC06A" flood-opacity="0.95" result="c1" />
          <feComposite in="c1" in2="b1" operator="in" result="g1" />
          <feMerge>
            <feMergeNode in="g3" />
            <feMergeNode in="g2" />
            <feMergeNode in="g1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  `,
})
export class EmberDefs {}
