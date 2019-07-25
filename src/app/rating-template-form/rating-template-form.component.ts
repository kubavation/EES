import { ActivatedRoute, Router } from '@angular/router';
import { RatingField } from './../model/RatingField';
import { Component, OnInit } from '@angular/core';
import { RatingTemplate } from 'app/model/RatingTemplate';

@Component({
  selector: 'app-rating-template-form',
  templateUrl: './rating-template-form.component.html',
  styleUrls: ['./rating-template-form.component.css']
})
export class RatingTemplateFormComponent implements OnInit {

  template: RatingTemplate;

  constructor(private router: Router) { }

  ngOnInit() {
    this.template = new RatingTemplate();
  }

  addField(field: RatingField) {
    this.template.fields.push(field);
  }

  removeField(index: number) {
    this.template.fields.splice(index, 1);
  }

  saveTemplate() {
    //saving in service
    this.router.navigate(['/employees']);
  }

}
