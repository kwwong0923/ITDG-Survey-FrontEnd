import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { Survey } from 'src/app/models/survey.model';
import { ApiService } from 'src/app/shared/api.service';

//form for routing 
@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})

export class SurveyListComponent extends BasePageComponent implements OnInit {

  surveys: Survey[] = [];
  constructor
  (
    route: ActivatedRoute,
    private apiService: ApiService
  ) 
  {     
    super(route);
    console.log(this.surveys);

  }

  override ngOnInit(): void 
  {
    console.log("ngOnInit!")
    this.apiService
      .getSurveys()
      .subscribe((surveys)=> this.surveys = surveys);
      console.log(this.surveys);
  }
}
