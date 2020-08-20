import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileServiceService } from '../profile-service.service';
import { UserProfile } from '../interfaces/user-profile';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css'],
})
export class EditComponentComponent implements OnInit {
  constructor(private service: ProfileServiceService, private router: Router) {}

  profiles: UserProfile;

  ngOnInit(): void {
    this.profiles = this.service.getUserProfile();
  }

  editProfileForm(form: NgForm) {
    this.service.setUserProfile(form.value);
    this.router.navigate(['profile']);
  }
}
