import { Directive, Input } from '@angular/core';
interface RowContentContext<T extends object> {
  $implicit: T;
}
@Directive({
  selector: '[typedContext]',
})
export class TypedContextDirective<T extends object> {
  @Input('typedContext') data!: T;
  static ngTemplateContextGuard<TContextItem extends object>(
    dir: TypedContextDirective<TContextItem>,
    ctx: unknown,
  ): ctx is RowContentContext<TContextItem> {
    return true;
  }
}
