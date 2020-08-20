import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileServiceService {
  profiles: UserProfile = {
    name: 'Rachel',
    contact: '989-420-6666',
    bio:
      "I'm so hungry all the time. Please help by buying me a number two with a large fry.",
  };

  constructor() {}

  getUserProfile() {
    return this.profiles;
  }

  setUserProfile(profiles: UserProfile) {
    this.profiles = profiles;
  }
}
