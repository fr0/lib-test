import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'lib-toolbar',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      background-color: white;
      border: 1px solid #cacaca;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 0.4rem;
    }
  `]
})
export class ToolbarComponent {
  @Input() includeText: boolean = true;
  @Input() includeIcon: boolean = true;
}

@Component({
  selector: 'lib-toolbar-button',
  template: `
    <button [disabled]="disabled" [class.toggled]="type === 'toggle' && checked"
            (click)="handleClick($event)" [attr.title]="text">
      <img [attr.src]="icon" *ngIf="includeIcon" [attr.alt]="text"/>
      <span *ngIf="includeText">{{text}}</span>
    </button>
  `,
  styles: [`
    :host {
      margin-top: 3px;
      margin-bottom: 3px;
    }

    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 0 0 auto !important;
      margin-left: 0.2rem;
      padding: 4px;
      border: 1px solid transparent;
      background: transparent;
      cursor: pointer;
      border-radius: 4px;
      transition: background-color 0.2s ease;
      outline: none;
    }

    button:focus:not([disabled]) {
      border: 1px dashed #2098D1;
    }
    
    button:hover:not([disabled]),
    button:active:not([disabled]) {
      background-color: #2098D1;
      color: white;
    }
    button:hover:not([disabled]):not(.toggled),
    button:active:not([disabled]):not(.toggled) {
      border-color: transparent;
    }

    button img {
      flex: 0 0 auto;
      width: var(--toolbar-image-size, 30px);
      height: var(--toolbar-image-size, 30px);
    }
    button span {
      flex: 0 0 auto;
    }
    button[disabled] {
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
      cursor: default;
    }
    button[disabled] span {
      opacity: 0.6;
    }
    button[disabled] img {
      opacity: 0.4;
    }
    button.toggled {
      background: #ceceff;
      border: 1px solid blue;
    }
  `]

})
export class ToolbarButtonComponent {
  @Input() icon: string;
  @Input() text: string;
  @Input() disabled: boolean = false;
  @Input() type: 'click' | 'toggle' = 'click';
  @Input() checked: boolean = false;
  @Input() canToggleOff = true;
  @Output() buttonClick = new EventEmitter<any>();
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor(private toolbar: ToolbarComponent) { }

  private _overrideIncludeIcon: boolean;
  private _overrideIncludeText: boolean;

  get includeIcon(): boolean {
    return (this._overrideIncludeIcon !== undefined) ?
      this._overrideIncludeIcon :
      this.toolbar.includeIcon;
  }
  get includeText(): boolean {
    return (this._overrideIncludeText !== undefined) ?
      this._overrideIncludeText :
      this.toolbar.includeText;
  }

  @Input() set includeIcon(value: boolean) {
    this._overrideIncludeIcon = value;
  }
  @Input() set includeText(value: boolean) {
    this._overrideIncludeText = value;
  }

  handleClick(event) {
    this.buttonClick.emit(event);
    if (this.type === 'toggle' && (this.canToggleOff || !this.checked)) {
      this.checked = !this.checked;
      this.checkedChange.emit(this.checked);
    }
  }
}

@Component({
  selector: 'lib-toolbar-separator',
  template: ``,
  styles: [`
    :host {
      flex: 0 0 auto;
      border-right: 1px solid lightgrey;
      margin: 8px 12px;
      width: 1px;
      align-self: stretch;
    }
  `]
})
export class ToolbarSeparatorComponent {

}
