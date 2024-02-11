import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  download() {
    const url =
      'https://raw.githubusercontent.com/wecraw/resume/356094c18bb079a0e4398081dcf66916357c4153/wec_resume_2024.pdf';
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', '');
    link.click();
  }
}
