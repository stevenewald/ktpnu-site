import React from "react";
import { UserPlusIcon } from "@heroicons/react/20/solid";
import { ref, set } from "firebase/database";
import Swal from "sweetalert2";

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

class AdminPanel extends React.Component {
  constructor(props) {
    super(props);
    this.addNewUser = this.addNewUser.bind(this);
    this.emailButton = React.createRef();
    //the backend only allows this if they are already set as admin
    //dw about the security, i set up all the database rules correctly - steve
  }

  
  addNewUser() {
    const newEmail = this.emailButton.current.value;
    this.emailButton.current.value = "";
    if(!newEmail.includes("@u.northwestern.edu")) {
        Swal.fire({icon:'error',title:'Invalid email',text:'Email must be a u.northwestern.edu email.'})
    } else if(!validateEmail(newEmail)) {
        Swal.fire({icon:'error',title:'Invalid email'});
    } else {
        const formattedEmail = newEmail.substring(0,newEmail.length-19);
        Swal.fire({
            title: 'Is this correct?',
            text: "Do you want to add " + newEmail + " to the system?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, add them as a member'
          }).then((result) => {
            if (result.isConfirmed) {
                set(ref(this.props.database, "allowed_accounts/" + formattedEmail), "").then((res) => {
                    Swal.fire({icon:'success',title:'Successfully added!',text:'Successfully added ' + newEmail});
                }).catch((err) => {
                    Swal.fire({icon:'error',title:'Couldn\'t add ' + newEmail,text:err})
                })
            }
          })
    }
  }
  render() {
    return (
      <div className="flex">
        <div className="mt-4 pl-4 w-1/2">
          <div className="bg-gray-100 shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Add new user
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>Enter the email of the user you want to add</p>
              </div>
              <form className="mt-5 sm:flex sm:items-center">
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="person@u.northwestern.edu"
                    ref={this.emailButton}
                  />
                </div>
                <button
                  type="button"
                  onClick={this.addNewUser}
                  className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  <UserPlusIcon className="-ml-1 mr-2 h-5 w-5" />
                  Add User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {}
}

export default AdminPanel;
