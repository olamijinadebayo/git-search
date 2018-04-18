import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  username: string;
  repos: any[];
  profile: any[];

  constructor(private profileService: ProfileService,) {
   }

  findProfile() {
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe(profile => {
      // console.log(profile);
      this.profile = profile;
    });
    this.profileService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

  ngOnInit() {
  }

}
