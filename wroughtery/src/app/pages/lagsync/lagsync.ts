import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnvilMark } from '../../shared/anvil-mark/anvil-mark';

interface Store {
  readonly name: string;
  readonly url: string;
}
interface Spec {
  readonly key: string;
  readonly value: string;
}
interface Shot {
  readonly src: string;
  readonly alt: string;
  readonly caption: string;
}

/**
 * The LagSync bridge page — same record-label model as Orbital: the forge shell
 * is untouched and LagSync's own cyan signature (#00b8db, from lagsync.com) is
 * CONTAINED to the content area. The single primary CTA stays ember (umbrella
 * convention); the per-browser store links sit below it as mono chips.
 *
 * LagSync is a plain, sensor-free utility (no AI) → COLD anvil on the grid and
 * here. Live product: links out to lagsync.com and the real store listings.
 *
 * Family reconciliation: LagSync's site uses Space Mono → here its mono is the
 * shared IBM Plex Mono; body is IBM Plex Sans. Cyan stays its contained accent.
 */
@Component({
  selector: 'app-lagsync',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, AnvilMark],
  styleUrl: './lagsync.scss',
  templateUrl: './lagsync.html',
})
export class LagSync {
  /** The live site — browser-detection picks the right store. */
  protected readonly site = 'https://lagsync.com';

  /** Direct store listings (from the LagSync site config). */
  protected readonly stores: readonly Store[] = [
    {
      name: 'Chrome',
      url: 'https://chromewebstore.google.com/detail/lagsync-bluetooth-audio-f/ijhhkocgkagcfkoinilkjdcadljdjmaf',
    },
    {
      name: 'Firefox',
      url: 'https://addons.mozilla.org/en-US/firefox/addon/lagsync-bluetooth-audio-fix/',
    },
    {
      name: 'Edge',
      url: 'https://microsoftedge.microsoft.com/addons/detail/lagsync-bluetooth-audio/ocigopodjjobggdnklngfaceeedlkbol',
    },
    { name: 'Safari', url: 'https://apps.apple.com/app/id6766511020' },
    {
      name: 'Brave',
      url: 'https://chromewebstore.google.com/detail/lagsync-bluetooth-audio-f/ijhhkocgkagcfkoinilkjdcadljdjmaf',
    },
  ];

  protected readonly specs: readonly Spec[] = [
    { key: 'Browsers', value: 'Chrome · Firefox · Edge · Safari · Brave' },
    { key: 'Works on', value: 'YouTube · Twitch · Netflix · Prime Video' },
    { key: 'Delay range', value: '0–500 ms, codec presets' },
    { key: 'Privacy', value: '100% on-device · no telemetry' },
    { key: 'Version', value: '1.2.2' },
    { key: 'Price', value: 'Free' },
  ];

  protected readonly shots: readonly Shot[] = [
    {
      src: 'assets/lagsync/screen1.png',
      alt: 'LagSync with perfect lip-sync settings tuned for streaming sites',
      caption: 'Perfect lip-sync — tuned for streaming sites',
    },
    {
      src: 'assets/lagsync/screen2.png',
      alt: 'LagSync codec presets: aptX, AAC, SBC, High',
      caption: 'Smart headset presets — aptX · AAC · SBC · High',
    },
    {
      src: 'assets/lagsync/screen4.png',
      alt: 'LagSync syncing audio on any website',
      caption: 'Universal — sync audio on any site',
    },
  ];
}
