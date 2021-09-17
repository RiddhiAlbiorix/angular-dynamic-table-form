import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { RadioQuestion } from './question-radio';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {

  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new TextboxQuestion({
        key: 'FirstName',
        label: 'First name',
        type: 'text',
        value: 'Riddhi',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'LastName',
        label: 'Last name',
        type: 'text',
        value: 'Kadiya',
        required: true,
        order: 2
      }),

      new RadioQuestion({
        key: 'Gender',
        label: 'Gender',
        type: 'radio',
        options: [
          { key: 'Male', value: 'Male' },
          { key: 'Female', value: 'Female' }
        ],
        value: 'Female',
        required: true,
        order: 4
      }),

      new TextboxQuestion({
        key: 'Age',
        label: 'Age',
        type: 'number',
        value: '30',
        required: true,
        order: 5
      }),

      new DropdownQuestion({
        key: 'Status',
        label: 'Status',
        options: [
          { key: 'Active', value: 'Active' },
          { key: 'Inactive', value: 'Inactive' }
        ],
        value: 'Active',
        order: 6
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
