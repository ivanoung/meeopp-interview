import { Action, Dispatch } from "redux";
import { IFormState } from "./reducer_form";
import { db } from "../States/store";

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */
export const GET_FORM_SUCCESSFUL = "GET_FORM_SUCCESSFUL";
export type GET_FORM_SUCCESSFUL = typeof GET_FORM_SUCCESSFUL;
export interface IGetFormSuccessfulAction extends Action {
    type: GET_FORM_SUCCESSFUL;
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
    | IGetFormSuccessfulAction
    | IUpdateFormAction
    | IUpdateNameAction
    | IUpdateLastAction
    | IUpdateCompanyAction
    | IUpdateDepartmentAction
    | IUpdatePositionAction
    | IUpdateEmailAction
    | IPostFormAction;

/* ===== ===== ===== ===== ===== ===== ===== ===== ===== */

// Retriving data from DB
export function getForm() {
    return (dispatch: Dispatch<IGetFormSuccessfulAction>) => {
        db.collection("formData")
            .doc("cDRbAixBPxuNtrEkHKVi")
            .get()
            .then(result => {
                const theState = { ...result["_document"]["proto"]["fields"] };
                console.log(theState);
                const formResult: IFormState = {
                    firstName: theState.firstName.stringValue,
                    lastName: theState.lastName.stringValue,
                    company: theState.company.stringValue,
                    department: theState.department.stringValue,
                    position: theState.position.stringValue,
                    email: theState.email.stringValue
                };

                dispatch(getFormSuccessful(formResult));
                console.log(result);
            });
    };
}

// Updating form information to DB
export function postForm(form: IFormState) {
    return () => {
        db.collection("formData")
            .doc("cDRbAixBPxuNtrEkHKVi")
            .update({ ...form })
            .then(() => {
                console.log("good job");
            });
    };
}

export function getFormSuccessful(form: IFormState): IGetFormSuccessfulAction {
    return {
        type: GET_FORM_SUCCESSFUL,
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
