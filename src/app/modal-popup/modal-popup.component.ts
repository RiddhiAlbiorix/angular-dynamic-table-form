import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { QuestionBase } from '../common/question-base';
import { QuestionService } from '../common/question.service';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  providers:  [QuestionService]
})
export class ModalPopupComponent implements OnInit {

  questions$: Observable<QuestionBase<any>[]>;

  constructor(
    service: QuestionService,
    private dialogRef: MatDialogRef<ModalPopupComponent>,
    ) {
      this.questions$ = service.getQuestions();
  }

  ngOnInit(): void {
  }

  Update(): void {
    // this.dialogRef.close(this.personalInfo.value);
  }

  close() {
    this.dialogRef.close();
  }
}
