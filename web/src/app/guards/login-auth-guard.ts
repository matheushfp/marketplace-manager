import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { UserAuthService } from "../services/user-auth";
import { UserService } from "../services/user";
import { firstValueFrom } from "rxjs";

export const loginAuthGuard: CanActivateFn = async (route, state) => {
  const _userAuthService = inject(UserAuthService);
  const _userService = inject(UserService);
  const _router = inject(Router);

  const HAS_TOKEN = _userAuthService.getUserToken();

  // Sem token, permite acesso à pagina de login
  if(!HAS_TOKEN)
    return true;

  try {
    await firstValueFrom(_userService.validateUser());

    // Token válido
    return _router.navigate(["/products"]);
  } catch(error) {
    return true;
  }
}
