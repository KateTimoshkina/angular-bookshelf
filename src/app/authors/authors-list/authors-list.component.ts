import { Component, OnDestroy, OnInit } from '@angular/core';
import { Author } from '../../shared/models/author.model';
import { AuthorsService } from '../authors.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit, OnDestroy {
  authorsSubscription: Subscription;
  authors: Author[];

  constructor(private authorsService: AuthorsService) { }

  ngOnInit() {
    this.authors = [];
    this.authorsSubscription = this.authorsService.authorsChanged.subscribe(
      (authors: Author[]) => this.authors = authors
    );
  }

  ngOnDestroy() {
    this.authorsSubscription.unsubscribe();
  }

}
