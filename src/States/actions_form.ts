import { Action, Dispatch } from "redux";
import axios from "axios";
import { IFormState } from "./reducer_form";
import database from "../Config/fbConfig";
import { ThunkResult } from "./store";
import firebase from "../Config/fbConfig";
/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export const GET_FORM = "GET_FORM";
export type GET_FORM = typeof GET_FORM;
export interface IGetFormAction extends Action {
    type: GET_FORM;
    form: IFormState;
}

export const UPDATE_FORM = "UPDATE_FORM";
export type UPDATE_FORM = typeof UPDATE_FORM;
export interface IUpdateFormAction extends Action {
    type: UPDATE_FORM;
    form: IFormState;
}

export const UPDATE_NAME = "UPDATE_NAME";
export type UPDATE_NAME = typeof UPDATE_NAME;
export interface IUpdateNameAction extends Action {
    type: UPDATE_NAME;
    firstName: string;
}

export const UPDATE_LAST = "UPDATE_LAST";
export type UPDATE_LAST = typeof UPDATE_LAST;
export interface IUpdateLastAction extends Action {
    type: UPDATE_LAST;
    lastName: string;
}
export const UPDATE_COMPANY = "UPDATE_COMPANY";
export type UPDATE_COMPANY = typeof UPDATE_COMPANY;
export interface IUpdateCompanyAction extends Action {
    type: UPDATE_COMPANY;
    company: string;
}
export const UPDATE_DEPARTMENT = "UPDATE_DEPARTMENT";
export type UPDATE_DEPARTMENT = typeof UPDATE_DEPARTMENT;
export interface IUpdateDepartmentAction extends Action {
    type: UPDATE_DEPARTMENT;
    department: string;
}
export const UPDATE_POSITION = "UPDATE_POSITION";
export type UPDATE_POSITION = typeof UPDATE_POSITION;
export interface IUpdatePositionAction extends Action {
    type: UPDATE_POSITION;
    position: string;
}
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export type UPDATE_EMAIL = typeof UPDATE_EMAIL;
export interface IUpdateEmailAction extends Action {
    type: UPDATE_EMAIL;
    email: string;
}

export const POST_FORM = "POST_FORM";
export type POST_FORM = typeof POST_FORM;
export interface IPostFormAction extends Action {
    type: POST_FORM;
}

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */

export type FormAction =
    | IGetFormAction
    | IUpdateFormAction
    | IUpdateNameAction
    | IUpdateLastAction
    | IUpdateCompanyAction
    | IUpdateDepartmentAction
    | IUpdatePositionAction
    | IUpdateEmailAction
    | IPostFormAction;

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export function getForm(form: IFormState): IGetFormAction {
    return {
        type: GET_FORM,
        form
    };
}

export function updateName(firstName: string): IUpdateNameAction {
    return {
        type: UPDATE_NAME,
        firstName
    };
}

export function updateLast(lastName: string): IUpdateLastAction {
    return {
        type: UPDATE_LAST,
        lastName
    };
}

export function updateCompany(company: string): IUpdateCompanyAction {
    return {
        type: UPDATE_COMPANY,
        company
    };
}

export function updateDepartment(department: string): IUpdateDepartmentAction {
    return {
        type: UPDATE_DEPARTMENT,
        department
    };
}

export function updatePosition(position: string): IUpdatePositionAction {
    return {
        type: UPDATE_POSITION,
        position
    };
}

export function updateEmail(email: string): IUpdateEmailAction {
    return {
        type: UPDATE_EMAIL,
        email
    };
}

export function submitForm(): IPostFormAction {
    return {
        type: POST_FORM
    };
}

export function getDataFromFirebase(): ThunkResult<void> {
    return async (dispatch: Dispatch<FormAction>) => {
        return firebase.auth().onAuthStateChanged(async user => {
            console.log("hi", user);
            if (user) {
                const result = await axios.get(
                    "https://meeopp-interview.firebaseio.com/users/" +
                        user.uid +
                        ".json?auth=IC5vnzNv89Z59K5oBj13e9GXo8QyZzHQCSidIQWi"
                );

                if (result) {
                    // dispatch(getForm({}));
                } else {
                    // dispatch(getFormFailure());
                }
            }
        });
    };
}

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
// export function localLoginSuccess(
//     userInfoPackage: any
// ): ILocalLoginSuccessAction {
//     return {
//         type: LOCAL_LOGIN_SUCCESS,
//         userInfoPackage
//     };
// }

// export function localLoginFail(errMsg: string): ILocalLoginFailAction {
//     return {
//         type: LOCAL_LOGIN_FAIL,
//         errMsg
//     };
// }

// export function localLogin(username: string, password: string) {
//     return (
//         dispatch: Dispatch<ILocalLoginSuccessAction | ILocalLoginFailAction>
//     ) => {
//         const loginPackage: ILoginPackage = {
//             username,
//             password
//         };

//         axios
//             .post(`${API_SERVER}/api/auth/login`, loginPackage)
//             .then((res: any) => {
//                 if (res.status === 200) {
//                     dispatch(localLoginSuccess(res.data));
//                 } else {
//                     dispatch(localLoginFail(res.status));
//                     throw new Error("Login failed, please try again.");
//                 }
//             })
//             .catch((err: any) => {
//                 dispatch(localLoginFail(err.response.data || err));
//                 AppToaster.show({
//                     message: "Error, try again\n" + err.response.data || err,
//                     intent: Intent.WARNING,
//                     icon: "cross",
//                     timeout: 2000
//                 });
//             });
//     };
// }

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
