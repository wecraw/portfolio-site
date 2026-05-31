import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  download() {
    const url =
      'https://raw.githubusercontent.com/wecraw/resume/356094c18bb079a0e4398081dcf66916357c4153/wec_resume_2024.pdf';
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'wec_resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
      });
  }
}
