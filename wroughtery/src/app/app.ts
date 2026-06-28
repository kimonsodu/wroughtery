import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmberDefs } from './shared/ember-defs/ember-defs';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

/**
 * The endorsed-model shell: one forge frame (header + footer + global ember
 * defs) wraps every route. Pages render their own content inside; only the
 * Orbital page tints its *content area* teal — never the shell.
 */
@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, EmberDefs, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
