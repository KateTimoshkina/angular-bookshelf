import { Component, OnInit } from '@angular/core';
import { Author } from '../../shared/models/author.model';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors-detailed',
  templateUrl: './authors-detailed.component.html',
  styleUrls: ['./authors-detailed.component.css']
})
export class AuthorsDetailedComponent implements OnInit {
  author: Author;

  constructor(private route: ActivatedRoute,
              private authorsService: AuthorsService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.author = this.authorsService.getAuthor(params['authorId']);
      }
    );
  }

}
