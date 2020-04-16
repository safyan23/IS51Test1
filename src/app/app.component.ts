import { Component, OnInit } from '@angular/core';
import { FlexModalService } from './shared-components/flex-modal/flex-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'final';
  aboutText = 'Created By Safyan Iqbal (C) 2020';
  constructor(private flexModal: FlexModalService) {

  }

  ngOnInit() {
  }

showHelpText () {
  this.flexModal.openDialog('about-modal');
  // alert(this.aboutText);
}

}
