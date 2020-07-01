import * as AuthActions from '../../client/modules/App/AppActions';
import {getUserInfo} from './utilHelper';

export function fetchIsAuthenticated(dispatch, request, passport) {
    return new Promise((resolve, reject) => {
       passport.authenticate('jwt-session', {session: false}, (err, user) => {
        if (user) {
            dispatch(AuthActions.tokenValid(getUserInfo(user)));
        } else {
            dispatch(AuthActions.tokenInvalid());
        }
        resolve();
       })(request);
    });
}