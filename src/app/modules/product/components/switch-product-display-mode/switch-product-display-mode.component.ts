import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
import { CardItemDirective } from '../../directives/card-item.directive';
import { ListItemDirective } from '../../directives/list-item.directive';
import { TableItemDirective } from '../../directives/table-item.directive';
import { TableHeaderItemDirective } from '../../directives/table-header-item.directive';

@Component({
  selector: 'app-switch-product-display-mode',
  templateUrl: './switch-product-display-mode.component.html',
})
export class SwitchProductDisplayModeComponent {
  @Input() items: any[] = [];
  @Input() mode: 'list' | 'card' | 'table' = 'table';

  // read structural directives as TemplateRefs
  @ContentChild(CardItemDirective, { read: TemplateRef, static: true })
  public cardItemTemplate: TemplateRef<CardItemDirective>;

  @ContentChild(ListItemDirective, { read: TemplateRef, static: true })
  public listItemTemplate: TemplateRef<ListItemDirective>;

  @ContentChild(TableItemDirective, { read: TemplateRef, static: true })
  public tableItemTemplate: TemplateRef<TableItemDirective>;

  @ContentChild(TableHeaderItemDirective, { read: TemplateRef, static: true })
  public tableHeaderItemTemplate: TemplateRef<TableHeaderItemDirective>;
}
