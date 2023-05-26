import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { ApiService} from '../../shared/api.service';
import { SurveyModel } from './activesurvey.model';
import { Router } from '@angular/router';
import { Survey } from 'src/app/models/survey.model';
@Component({
  selector: 'app-activesurvey',
  templateUrl: './activesurvey.component.html',
  styleUrls: ['./activesurvey.component.css']
})
export class ActivesurveyComponent implements OnInit 
{
  surveyForm: FormGroup;
  newSurvey: Survey;

  constructor
  (
    private apiService: ApiService
  ){} 

  ngOnInit(): void 
  {
    this.surveyForm = new FormGroup
    (
      {
        topic: new FormControl(null, Validators.required),
        description: new FormControl(null, Validators.required),
        questions: new FormArray([]),
      }
    );
  }
   
  onSubmit()
  {
    this.newSurvey = 
    {
      topic: this.surveyForm.value.topic,
      description: this.surveyForm.value.description,
      questions: this.surveyForm.value.questions,
    }
    this.apiService.postSurvey(this.newSurvey);    
  }

  addQuestion()
  {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.surveyForm.get("questions")).push(control);
  }

  getControl()
  {
    return (<FormArray>this.surveyForm.get("questions")).controls;
  }

  onCancel()
  {
    this.surveyForm.reset();
  }
}

  
  
