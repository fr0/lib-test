import {ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * A component that supports expanding and collapsing.
 */
export interface IExpandable {
  isExpanded: boolean;
  isExpandedChange: EventEmitter<boolean>;
  canExpand: boolean;
  toggleExpand(): void;
  expand();
  collapse();
}

/**
 * ```html
 *   <atlas-expandable-if></atlas-expandable-if>
 * ```
 * A content parent that has both a header and a body. Use the `header` and `body` attributes on the child content to
 * indicate which view your child content should appear in.
 * Unlike [[ExpandableComponent]] (`atlas-expandable`), this component shows/hides the `body` content via `ngIf`.
 * Use the [[canExpand]] property to indicate whether the component is currently expandable.
 */
@Component({
  selector: 'atlas-expandable-if',
  template: `
    <div class="header" (click)="clickHeader($event)" [class.extra-margin]="!canExpand && preserveSpaceForIcon">
      <img class="expand"   [attr.src]="expandIcon" *ngIf="!overrideIcon && canExpand && !isExpanded && !isExpanding"/>
      <img class="collapse" [attr.src]="collapseIcon" *ngIf="!overrideIcon && canExpand && isExpanded && !isExpanding"/>
      <img class="loading"  [attr.src]="loadingIcon" *ngIf="!overrideIcon && isExpanding"/>
      <img class="override" [attr.src]="overrideIcon" *ngIf="overrideIcon"/>
      <ng-content select="[header]"></ng-content>
    </div>
    <ng-container *ngIf="isExpanded">
      <ng-content select="[body]"></ng-content>
    </ng-container>
  `,
  styles: [`
    :host {
      display: block;
    }
    .header {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
    }
    .header > img {
      width: 12px;
      height: 12px;
      margin-right: 4px;
    }
    .extra-margin {
      margin-left: 16px;
    }
  `]
})
export class ExpandableIfComponent implements IExpandable {
  @Input() preserveSpaceForIcon: boolean = true;
  @Input() canExpand: boolean = true;
  @Input() expandIcon: string;
  @Input() collapseIcon: string;
  @Input() loadingIcon: string;
  @Input() delayedExpand = false;
  @Input() overrideIcon: string|false = false;
  @Output() isExpandedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  isExpanding = false;

  constructor(private changeDetector: ChangeDetectorRef) { }

  private _isExpanded = false;
  get isExpanded(): boolean { return this._isExpanded; }
  @Input() set isExpanded(value: boolean) {
    if (this._isExpanded !== value) {
      this._isExpanded = value;
      this.isExpandedChange.emit(value);
      this.changeDetector.markForCheck();
    }
  }

  clickHeader(event: MouseEvent) {
    if (!event.shiftKey) {
      event.preventDefault();
      event.stopPropagation();
      this.toggleExpand();
    }
  }

  toggleExpand() {
    if (this.isExpanding) { return; }
    if (this.isExpanded || this.canExpand) {
      if (this.isExpanded) {
        this.collapse();
      }
      else {
        this.expand();
      }
    }
  }
  expand() {
    if (this.delayedExpand) {
      this.isExpanding = true;
      setTimeout(() => {
        this.isExpanding = false;
        this.isExpanded = true;
      });
      this.changeDetector.markForCheck();
    }
    else {
      this.isExpanded = true;
    }
  }
  collapse() {
    this.isExpanded = false;
  }
}
