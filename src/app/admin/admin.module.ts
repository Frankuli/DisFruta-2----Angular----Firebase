import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment/comment.component';
import { OrderComponent } from './order/order.component';
import { CmsComponent } from './cms/cms.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CommentComponent, OrderComponent, CmsComponent]
})
export class AdminModule { }
