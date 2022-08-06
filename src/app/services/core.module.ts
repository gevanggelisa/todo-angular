import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, RouterReducerState, RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Auth } from '../model';
import { AuthService } from './auth/auth.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';
import { reducer as authReducer } from '../store/reducers/auth.reducers';
import { ProfileState, reducer as profileReducer } from '../store/reducers/profile.reducers';
import { RouterEffects } from '../store/effects/router.effects';
import { ProfileService } from './profile/profile.service';
import { ProfileEffects } from '../store/effects/profile.effects';
import { AuthEffects } from '../store/effects/auth.effects';
import { reducers } from '../store'

export interface AppState {
  auth: Auth;
  profile: ProfileState;
  router: RouterReducerState;
}

@NgModule({
  imports: [
    StoreModule.forRoot(
      {
        ...reducers,
        auth: authReducer,
        profile: profileReducer,
        router: routerReducer,
      },

      {
        // metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
        }
      }),
    StoreDevtoolsModule.instrument({
      maxAge: 24
    }),
    // StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    }),
    EffectsModule.forRoot([
      AuthEffects,
      RouterEffects,
      ProfileEffects
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    ProfileService
  ]
})
export class CoreModule {
}
