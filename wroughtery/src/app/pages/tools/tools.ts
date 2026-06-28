import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnvilMark } from '../../shared/anvil-mark/anvil-mark';
import { SectionHead } from '../../shared/section-head/section-head';
import { TOOLS } from '../../core/tools';

/** The portfolio grid — hot/cold anvils rendered straight from tool data. */
@Component({
  selector: 'app-tools',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, AnvilMark, SectionHead, NgTemplateOutlet],
  styleUrl: './tools.scss',
  templateUrl: './tools.html',
})
export class Tools {
  protected readonly tools = TOOLS;
}
