import { CanDeactivateFn } from '@angular/router';
import { Home } from './home/home';

export const checkGuard: CanDeactivateFn<Home> = (component, currentRoute, currentState, nextState) => {
  var result = confirm("Sayfayı Kapatmak Üzeresiniz");
  return result;
};
