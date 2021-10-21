import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor() { }

  public getFirstName():string{
    return 'data from libs***';
  }
}
