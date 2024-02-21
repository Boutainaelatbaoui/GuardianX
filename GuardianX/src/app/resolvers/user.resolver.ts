import { ResolveFn } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { Inject, inject } from '@angular/core';

export const userResolver: ResolveFn<String> = (route, state) => {
  const userService = inject(UserService);
  return userService.getUserContent();
};
