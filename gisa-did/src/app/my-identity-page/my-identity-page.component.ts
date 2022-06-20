import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-identity-page',
  templateUrl: './my-identity-page.component.html',
  styleUrls: ['./my-identity-page.component.css']
})
export class MyIdentityPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sampleData = [
    {"type": "firstName", "value": "Max", "displayName": "First Name"},
    {"type": "last-name", "value": "Mustermann", "displayName": "Last Name"},
    {"type": "adress", "value": "700 Main St. 3, 01234 Bernburg", "displayName": "Adress"}
  ]

}
