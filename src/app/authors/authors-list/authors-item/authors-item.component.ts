import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../../../shared/models/author.model';

@Component({
  selector: 'app-authors-item',
  templateUrl: './authors-item.component.html',
  styleUrls: ['./authors-item.component.css']
})
export class AuthorsItemComponent implements OnInit {
  @Input() author: Author;

  constructor() { }

  ngOnInit() {

  }

}
