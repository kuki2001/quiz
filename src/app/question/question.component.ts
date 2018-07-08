import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  qList: Question[];

  constructor() {
    this.qList = [
      {
        id:1,
        questionStr:"what is your name?",
        answers:[
          { 
            id:1,
            answerStr:"Adi",
            isTrue:false
          },
          { 
            id:2,
            answerStr:"Menny",
            isTrue:false
          },
          { 
            id:3,
            answerStr:"Hila",
            isTrue:true
          },
          { 
            id:4,
            answerStr:"Maayyan",
            isTrue:false
          }
        ]
      },
      {
        id:2,
        questionStr:"Whe do you live?",
        answers:[
          { 
            id:1,
            answerStr:"Bet EL",
            isTrue:false
          },
          { 
            id:2,
            answerStr:"Reshon",
            isTrue:false
          },
          { 
            id:3,
            answerStr:"Jerusalem",
            isTrue:false
          },
          { 
            id:4,
            answerStr:"Modiin",
            isTrue:true
          }
        ]
      }

     ]
   }

  ngOnInit() {
  }



}
