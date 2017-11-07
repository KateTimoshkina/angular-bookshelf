import { Component, OnInit } from '@angular/core';
import { Author } from '../../shared/models/author.model';
import { ActivatedRoute, Params } from '@angular/router';
import { DataStorageService } from '../../shared/services/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-authors-detailed',
  templateUrl: './authors-detailed.component.html',
  styleUrls: ['./authors-detailed.component.css']
})
export class AuthorsDetailedComponent implements OnInit {
  author: Author;
  locked: boolean;

  constructor(private route: ActivatedRoute,
              private dsService: DataStorageService) { }

  ngOnInit() {
    const me = this;
    me.locked = true;
    me.route.params.subscribe(
      (params: Params) => {
        me.dsService.getAuthor(params['authorId'])
          .subscribe(
            (response: Response) => {
              const data = response.json();
              const rawAuthor = data.payload;
              me.author = new Author(rawAuthor);
              console.log(me.author);
              me.locked = false;
            }
          );
      }
    );
  }

}
