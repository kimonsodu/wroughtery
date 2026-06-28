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
 * content area here; the shell stays pure forge, and the warm CTAs stay ember
 * (the umbrella "CTA = ember" convention).
 *
 * What Orbital actually is (reconciled against the real app repo, ../orbital):
 *   a transparent, always-on-top, click-through motion-cue overlay that drifts
 *   faint dots down the LEFT and RIGHT screen edges to ease car / motion
 *   sickness while you work. The dots flow with the vehicle's turns (yaw) and
 *   accel/brake (fore-aft g), so your eyes catch the motion your inner ear
 *   already feels and the two stop disagreeing. It runs on Windows (reads the
 *   laptop accelerometer) and on Android (overlay on the phone itself), and a
 *   phone can also feed its sensors to the PC over a local link — no internet.
 *
 * Tokens are reconciled to the SHIPPED icon kit (../orbital/assets/orbital-icon):
 *   ink #10151E · phosphor teal #6FD8C6 (the dots) · signal amber #E0A24A (the
 *   one steady centre point). Body-text teal/amber use paper-safe variants for
 *   AA contrast; the bright tokens live only on the dark instrument surfaces.
 */
@Component({
  selector: 'app-orbital',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, AnvilMark],
  styleUrl: './orbital.scss',
  templateUrl: './orbital.html',
})
export class Orbital {
  /** Distribution links. TODO: swap placeholders for the real listing/release URLs. */
  protected readonly play = 'https://play.google.com/store';
  protected readonly win = '#';

  protected readonly specs: readonly Spec[] = [
    { key: 'Platform', value: 'Windows 10/11 · Android 8.0+' },
    { key: 'Sensors', value: 'Accelerometer · Gyroscope' },
    { key: 'Phone link', value: 'Bluetooth · Wi-Fi · USB' },
    { key: 'Privacy', value: 'Local-only · no internet' },
    { key: 'Price', value: 'Free' },
    { key: 'Version', value: '1.0.0' },
  ];
}
