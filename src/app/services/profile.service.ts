import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
  private username: string;
  private clientid = '69b0d23e02ad69fd8cb3';
  private clientsecret = '1c53a114238cca3f4528eafa5069fa5bbfad9ad6';

  constructor(private http: Http, ) {
    console.log('service is now ready')
    this.username = 'olamijinadebayo';
  }
  getProfileInfo() {
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id = ' + this.clientid + '&client_secret=' + this.clientsecret)
      .map(res => res.json());
  }

}
