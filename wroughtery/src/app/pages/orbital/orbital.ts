import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnvilMark } from '../../shared/anvil-mark/anvil-mark';

interface Spec {
  readonly key: string;
  readonly value: string;
}

/**
 * The Orbital bridge page — like a record label's release page: it shares the
 * forge structure (header / type / hairlines / footer come from the shell) but
 * wears its own record's colour. Orbital's phosphor teal is *contained* to the
 * content area here; the shell stays pure forge, and the single CTA stays ember
 * (the umbrella "CTA = ember" convention).
 *
 * Token reconciliation to the family (README "Reconciling Orbital's tokens"):
 *   - readouts/numerals → IBM Plex Mono (was Space Mono)
 *   - body              → IBM Plex Sans
 *   - amber "level point" → nudged onto Ember #C24E2A so the warm note belongs
 *
 * NOTE (provisional): the Orbital app repo was not present in this workspace,
 * so ink / phosphor-teal values are chosen to fit the described instrument and
 * are flagged TODO in orbital.scss — reconcile against the real app tokens.
 */
@Component({
  selector: 'app-orbital',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, AnvilMark],
  styleUrl: './orbital.scss',
  templateUrl: './orbital.html',
})
export class Orbital {
  protected readonly specs: readonly Spec[] = [
    { key: 'Platform', value: 'Android 8.0+' },
    { key: 'Sensors', value: 'Accelerometer · Gyroscope' },
    { key: 'Price', value: 'Free' },
    { key: 'Version', value: '1.0.0' },
    { key: 'Size', value: '4.2 MB' },
  ];
}
