import {
    // GET_FORM,
    GET_FORM_SUCCESSFUL,
    // GET_FORM_FAILED,
    // UPDATE_FORM,
    UPDATE_NAME,
    POST_FORM,
    FormAction,
    UPDATE_LAST,
    UPDATE_COMPANY,
    UPDATE_DEPARTMENT,
    UPDATE_POSITION,
    UPDATE_EMAIL
} from "./actions_form";

export interface IFormState {
    firstName: string;
    lastName: string;
    company: string;
    department: string;
    position: string;
    email: string;
}

const initialState = {
    firstName: "",
    lastName: "",
    company: "",
    department: "",
    position: "",
    email: ""
};

export const formReducer = (
    state: IFormState = initialState,
    action: FormAction
): IFormState => {
    switch (action.type) {
        case GET_FORM_SUCCESSFUL: {
            return { ...state, ...action.form };
        }
        case UPDATE_NAME: {
            return { ...state, firstName: action.firstName };
        }
        case UPDATE_LAST: {
            return { ...state, lastName: action.lastName };
        }
        case UPDATE_COMPANY: {
            return { ...state, company: action.company };
        }
        case UPDATE_DEPARTMENT: {
            return { ...state, department: action.department };
        }
        case UPDATE_POSITION: {
            return { ...state, position: action.position };
        }
        case UPDATE_EMAIL: {
            return { ...state, email: action.email };
        }
        case POST_FORM: {
            return { ...state };
        }

        default: {
            return state;
        }
    }
};
