import { NgModule } from '@angular/core';
import { BookshelvesItemComponent } from './bookshelves-item/bookshelves-item.component';
import { BookshelvesDetailedComponent } from './bookshelves-detailed/bookshelves-detailed.component';
import { BookshelvesEditComponent } from './bookshelves-edit/bookshelves-edit.component';
import { BookshelvesComponent } from './bookshelves.component';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../../../core/custom-material.module';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  declarations: [
    BookshelvesComponent,
    BookshelvesEditComponent,
    BookshelvesDetailedComponent,
    BookshelvesItemComponent
  ],
  exports: [
    BookshelvesComponent,
    BookshelvesEditComponent,
    BookshelvesDetailedComponent,
    BookshelvesItemComponent
  ]
})
export class BookshelvesModule {}
