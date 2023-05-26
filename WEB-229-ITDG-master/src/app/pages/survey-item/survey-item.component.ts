import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { Answer } from 'src/app/models/answer.model';
import { Survey } from 'src/app/models/survey.model';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';


@Component({
  selector: 'app-survey-item',
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.css']
})
export class SurveyItemComponent extends BasePageComponent implements OnInit {

  @Input() surveyObj: Survey;
  answerForm: FormGroup;
  newAnswer: Answer;
  constructor
  (
    route: ActivatedRoute,
    
  ) 
  {     
    super(route);
  }

  // ngOnInit(): void {
  // }

}
