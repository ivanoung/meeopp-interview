import * as React from "react";
import "./App.css";

// redux
import { connect } from "react-redux";
import { IRootState } from "./States/store";
import {
    updateName,
    updateLast,
    updateCompany,
    updateDepartment,
    updatePosition,
    updateEmail,
    getForm,
    postForm
} from "./States/actions_form";
import { IFormState } from "./States/reducer_form";

interface IFormProps {
    firstName: string;
    lastName: string;
    company: string;
    department: string;
    position: string;
    email: string;
    updateName: (firstName: string) => void;
    updateLast: (lastName: string) => void;
    updateCompany: (company: string) => void;
    updateDepartment: (department: string) => void;
    updatePosition: (position: string) => void;
    updateEmail: (email: string) => void;
    getForm: () => void;
    postForm: (form: IFormState) => void;
}

// Redux
const mapStateToProps = (state: IRootState) => {
    return {
        firstName: state.form.firstName,
        lastName: state.form.lastName,
        company: state.form.company,
        department: state.form.department,
        position: state.form.position,
        email: state.form.email
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getForm: () => {
            dispatch(getForm());
        },
        updateName: (firstName: string) => {
            dispatch(updateName(firstName));
        },
        updateLast: (lastName: string) => {
            dispatch(updateLast(lastName));
        },
        updateCompany: (company: string) => {
            dispatch(updateCompany(company));
        },
        updateDepartment: (department: string) => {
            dispatch(updateDepartment(department));
        },
        updatePosition: (position: string) => {
            dispatch(updatePosition(position));
        },
        updateEmail: (email: string) => {
            dispatch(updateEmail(email));
        },
        postForm: (form: IFormState) => {
            dispatch(postForm(form));
        }
    };
};

class PureApp extends React.Component<IFormProps> {
    constructor(props: IFormProps) {
        super(props);
    }

    public handleFormChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        switch (name) {
            case "firstName": {
                return this.props.updateName(value);
            }
            case "lastName": {
                return this.props.updateLast(value);
            }
            case "company": {
                return this.props.updateCompany(value);
            }
            case "department": {
                return this.props.updateDepartment(value);
            }
            case "position": {
                return this.props.updatePosition(value);
            }
            case "email": {
                return this.props.updateEmail(value);
            }
            default: {
            }
        }
    };

    componentDidMount() {
        this.props.getForm();
    }

    public submitFormAction = e => {
        e.preventDefault();
        let formData = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            company: this.props.company,
            department: this.props.department,
            position: this.props.position,
            email: this.props.email
        };
        this.props.postForm({ ...formData });
    };

    render() {
        return (
            <div className="App">
                <body>
                    <div className="container">
                        <form>
                            <div className="form-group">
                                <label>First Name</label>
                                <input
                                    name="firstName"
                                    value={this.props.firstName}
                                    onChange={this.handleFormChange}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input
                                    name="lastName"
                                    value={this.props.lastName}
                                    onChange={this.handleFormChange}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Company</label>
                                <input
                                    name="company"
                                    value={this.props.company}
                                    onChange={this.handleFormChange}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Department</label>
                                <input
                                    name="department"
                                    value={this.props.department}
                                    onChange={this.handleFormChange}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Position</label>
                                <input
                                    name="position"
                                    value={this.props.position}
                                    onChange={this.handleFormChange}
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <input
                                    name="email"
                                    value={this.props.email}
                                    onChange={this.handleFormChange}
                                    type="text"
                                    className="form-control"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={this.submitFormAction}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </body>
            </div>
        );
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(PureApp);

export default App;
