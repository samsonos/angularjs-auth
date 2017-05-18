import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[showHideLink]'
})
export class ShowHideLinkDirective implements OnInit, OnDestroy {

  @Input('showHideLink') className: string;

  private parentElement: HTMLElement;
  private onShowEvents: string[] = ['keypress', 'keydown', 'keyup', 'focus'];

  constructor(
      private element: ElementRef
  ) {
    this.parentElement = (<any>element.nativeElement).parentElement;
  }

  ngOnInit() {

    // Show links
    this.onShowEvents.forEach((event: string) => {
      this.element.nativeElement.addEventListener(event, this.showLinks.bind(this));
    });

    // Hide links
    this.element.nativeElement.addEventListener('blur', this.hideLinks.bind(this));
  }

  hideLinks() {
    if (this.hasParentClass()) {
      this.childLinks(false);
    }
  }

  showLinks() {
    if (this.hasParentClass()) {
      this.childLinks(true);
    }
  }

  hasParentClass(): boolean {
    return (<DOMTokenList>this.parentElement.classList).contains(this.className);
  }

  childLinks(isHide: boolean) {
    [].forEach.call(this.parentElement.querySelectorAll('a'), (element: HTMLElement) => {
      (<any>element).style.visibility = isHide ? 'hidden' : 'visible';
    });
  }

  ngOnDestroy() {

    // Remove events from links
    this.onShowEvents.forEach((event: string) => {
      this.element.nativeElement.removeEventListener(event, this.showLinks.bind(this));
    });
    this.element.nativeElement.removeEventListener('blur', this.hideLinks.bind(this));
  }
}
