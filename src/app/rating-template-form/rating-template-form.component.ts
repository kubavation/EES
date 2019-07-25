import { ActivatedRoute, Router } from '@angular/router';
import { RatingField } from './../model/RatingField';
import { Component, OnInit } from '@angular/core';
import { RatingTemplate } from 'app/model/RatingTemplate';
import { Rating } from 'app/model/Rating';

@Component({
  selector: 'app-rating-template-form',
  templateUrl: './rating-template-form.component.html',
  styleUrls: ['./rating-template-form.component.css']
})
export class RatingTemplateFormComponent implements OnInit {

  template: RatingTemplate;
  newField: RatingField = new RatingField();

  constructor(private router: Router) { }

  ngOnInit() {
    this.template = new RatingTemplate();
  }

  addField() {
    this.template.fields.push(this.newField);
    this.newField = new RatingField();
  }

  removeField(index: number) {
    this.template.fields.splice(index, 1);
  }

  saveTemplate() {
    //saving in service
    console.log('saving')
    this.router.navigate(['/employees']);
  }

}
