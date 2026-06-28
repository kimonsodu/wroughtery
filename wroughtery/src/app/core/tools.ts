/**
 * The portfolio of forged tools. `signal` is the wayfinding rule, not decoration:
 *   - 'hot'  → AI-driven / active tool  (ember billet)
 *   - 'cold' → an ordinary / sensor-driven tool (bare anvil)
 *
 * Orbital is sensor-driven, so it carries the COLD anvil on the grid — accurate
 * wayfinding, not a downgrade. The names below follow the identity doc's
 * examples; swap for the real roster as it firms up.
 */
export type ToolSignal = 'hot' | 'cold';

export interface Tool {
  readonly name: string;
  readonly signal: ToolSignal;
  /** One-line description of what it forges. */
  readonly blurb: string;
  /** Internal route, if this tool has a page under the umbrella. */
  readonly route?: string;
  /** Marks the tool as AI for the mono caption ("AI · A WROUGHTERY TOOL"). */
  readonly ai?: boolean;
}

export const TOOLS: readonly Tool[] = [
  {
    name: 'Orbital',
    signal: 'cold',
    blurb: 'Drifts faint edge-of-screen dots that ease car sickness while you work.',
    route: '/orbital',
  },
  {
    name: 'LagSync',
    signal: 'cold',
    blurb: 'Kills Bluetooth audio delay in every browser — lip-sync, restored.',
    route: '/lagsync',
  },
  {
    name: 'Bellows',
    signal: 'cold',
    blurb: 'Shape and inflate copy decks until they hold their form.',
  },
  {
    name: 'Quench',
    signal: 'cold',
    blurb: 'Cools hot drafts into final, set type — no more drift.',
  },
  {
    name: 'Emberwright',
    signal: 'hot',
    ai: true,
    blurb: 'Forge working UI from a prompt. The hot iron does the shaping.',
  },
];
