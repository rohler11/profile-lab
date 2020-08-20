import { Component, OnInit, Input } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service';
import { UserProfile } from '../interfaces/user-profile';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css'],
})
export class ProfileComponentComponent implements OnInit {
  profiles: UserProfile;

  constructor(private service: ProfileServiceService) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.profiles = this.service.getUserProfile();
  }
}
