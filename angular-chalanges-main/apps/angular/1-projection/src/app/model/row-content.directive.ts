import { Directive, Input } from '@angular/core';
interface RowContentContext<T extends object> {
  $implicit: T;
}
@Directive({
  selector: 'ng-template[appRowContent]',
})
export class RowContentDirective<T extends object> {
  @Input('appRowContent') data: T[] | null = null;

  static ngTemplateContextGuard<TContextItem extends object>(
    dir: RowContentDirective<TContextItem>,
    ctx: unknown,
  ): ctx is RowContentContext<TContextItem> {
    return true;
  }
}
