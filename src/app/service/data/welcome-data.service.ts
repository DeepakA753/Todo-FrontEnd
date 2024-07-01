import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
    //console.log("Execute Hello World Bean Service")
  }
  //http://localhost:8080/hello-world/path-variable/Deepak

  executeHelloWorldServiceWithPathVariable(name: string) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    //   })

    return this.http.get<HelloWorldBean>(
      `${API_URL}/hello-world/path-variable/${name}`,
      //{headers}
    );
    //console.log("Execute Hello World Bean Service")
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'Deepak'
  //   let password = 'Deepak'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
