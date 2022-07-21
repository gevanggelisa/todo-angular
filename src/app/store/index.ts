import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers/reducers';

export const myStore = StoreModule.forRoot(rootReducer);
