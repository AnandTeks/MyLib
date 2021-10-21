import { Component, OnInit } from '@angular/core';
import {SharedService} from '@anandmohankp/shared';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      my-lib works !!!
    </p>
    <a> Shared library content --- {{serviceContent}}</a>
  `,
})
export class MyLibComponent implements OnInit {
  serviceContent:string = "";
  constructor(private sharedService: SharedService){
    this.serviceContent = this.sharedService.getSharedServiceContent();
  }

  ngOnInit(): void {
  }

}
