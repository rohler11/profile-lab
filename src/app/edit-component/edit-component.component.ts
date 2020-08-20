import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileServiceService } from '../profile-service.service';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css'],
})
export class EditComponentComponent implements OnInit {
  constructor(private service: ProfileServiceService, private router: Router) {}

  ngOnInit(): void {}

  editProfileForm(form: NgForm) {
    this.service.setUserProfile(form.value);
    this.router.navigate(['profile']);
  }

  // setUserProfile(form: NgForm) {
  //   let newProfile: UserProfile = {
  //     name: form.value.name,
  //     contact: form.value.contact,
  //     bio: form.value.bio,
  //   };
  //   this.service.setUserProfile(newProfile);
  //   this.router.navigate(['profile']);
  // }
}
