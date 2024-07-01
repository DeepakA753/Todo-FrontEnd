import { WelcomeDataService } from './../service/data/welcome-data.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    standalone: true,
    imports: [RouterLink, NgIf]
})

export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
  welcomeMessageFromService: string = ''
  name = ''

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) {

  }

  ngOnInit() {
    //console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];

  }

  getWelcomeMessage() {
    //console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    //console.log('last line of getWelcomeMessage')

    //console.log("get welcome message");
  }

  getWelcomeMessageWithParameter() {
    //console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    //console.log('last line of getWelcomeMessage')

    //console.log("get welcome message");
  }


  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message
    //console.log(response);
    //console.log(response.message);
  }

  handleErrorResponse(error: any) {
    //console.log(error);
    //console.log(error.error);
    //console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message
  }
}
