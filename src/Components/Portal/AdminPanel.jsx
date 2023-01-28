import React from "react";
import { UserPlusIcon, PaperAirplaneIcon, LinkIcon } from "@heroicons/react/20/solid";
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
    this.sendText = this.sendText.bind(this);
    this.emailButton = React.createRef();
    this.sendTextButton = React.createRef();
    this.whoToButton = React.createRef();
    this.messageTypeButton = React.createRef();
    this.typeOfMember = React.createRef();
    //the backend only allows this if they are already set as admin
    //dw about the security, i set up all the database rules correctly - steve
  }

  sendText() {
    const text = this.sendTextButton.current.value;
    if (text.length < 5) {
      Swal.fire({
        icon: "error",
        text: "Message too short",
      });
    } else {
      const whoTo = this.whoToButton.current.value;
      const whatType = this.messageTypeButton.current.value;
      Swal.fire({
        title: "Is this correct?",
        text: text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, send the text",
      }).then((res) => {
        if (res["isConfirmed"]) {
          Swal.fire({
            title: "Are you sure?",
            text: "Once you send this text, you can't unsend it. Text: " + text,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, send the text",
          }).then((res) => {
            if (res["isConfirmed"]) {
              this.props.firebase
                .functions()
                .httpsCallable("sendText")({
                  message: text,
                  whoTo: whoTo,
                  type: whatType,
                })
                .then((res) => {
                  if (res["data"]["status"] === "Success") {
                    Swal.fire({
                      title: "Success!",
                      icon: "success",
                      text:
                        "Sent message to " +
                        whoTo.toLowerCase() +
                        " (total of " +
                        String(res["data"]["amount"]) +
                        " people).",
                    });
                  } else {
                    Swal.fire({
                      title: "Message send failure",
                      text: "Do not attempt to resend the message. Contact Steve.",
                      icon: "failure",
                    });
                  }
                });
            }
          });
        }
      });
    }
  }

  addNewUser() {
    const newEmail = this.emailButton.current.value.toLowerCase();
    this.emailButton.current.value = "";
    if (!newEmail.includes("@u.northwestern.edu")) {
      Swal.fire({
        icon: "error",
        title: "Invalid email",
        text: "Email must be a u.northwestern.edu email.",
      });
    } else if (!validateEmail(newEmail)) {
      Swal.fire({ icon: "error", title: "Invalid email" });
    } else {
      const formattedEmail = newEmail.substring(0, newEmail.length - 19);
      Swal.fire({
        title: "Is this correct?",
        text: "Do you want to add " + newEmail + " to the system?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, add them as a member",
      }).then((result) => {
        if (result.isConfirmed) {
          var typeOfUser = this.typeOfMember.current.value;
          set(ref(this.props.database, "allowed_users/" + formattedEmail), typeOfUser)
            .then((res) => {
              Swal.fire({
                icon: "success",
                title: "Successfully added!",
                text: "Successfully added " + newEmail,
              });
            })
            .catch((err) => {
              Swal.fire({
                icon: "error",
                title: "Couldn't add " + newEmail,
                text: err,
              });
            });
        }
      });
    }
  }
  render() {
    return (
      <div className="">
        <div className="mt-4 px-4 w-full">
          <div className="bg-gray-100 shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Send a text
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>Enter the message you'd like to send to the members</p>
              </div>
              <form className="mt-5 flex flex-col sm:flex-row items-center">
                <div className="flex flex-row items-center">
                  <div className="w-full sm:max-w-sm mb-0">
                    <label htmlFor="email" className="sr-only">
                      Message
                    </label>
                    <textarea
                      type="text"
                      name="text"
                      id="text"
                      className="block w-full min-h-[2.5rem] h-[2.5rem] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Pledge meeting tonight @ 7:00..."
                      ref={this.sendTextButton}
                    />
                  </div>
                  <div className="sm:ml-1 sm:mr-1 relative bottom-[2px] my-2 sm:my-0">
                    <select
                      id="who-to-text"
                      name="who-to-text"
                      className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue="Pledges"
                      ref={this.whoToButton}
                    >
                      <option>Pledges</option>
                      <option>Members</option>
                      <option>Everyone</option>
                    </select>
                  </div>
                  <div className="relative bottom-[2px] my-2 sm:my-0">
                    <select
                      id="event-type"
                      name="event-type"
                      className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue="Event"
                      ref={this.messageTypeButton}
                    >
                      <option>Event</option>
                      <option>Announcement</option>
                    </select>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={this.sendText}
                  className="relative bottom-[1px] min-w-[157px] inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                >
                  <PaperAirplaneIcon className="-ml-1 mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-4 px-4 w-full">
          <div className="bg-gray-100 shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Add new user
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>Enter the email of the user you want to add</p>
              </div>
              <form className="mt-5 flex flex-col sm:flex-row items-center">
                <div className="flex flex-row items-center w-full sm:w-[297px]">
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
                  <div className="sm:ml-1 sm:mr-1 relative bottom-[2px] my-2 sm:my-0">
                    <select
                      id="type-of-user"
                      name="type-of-user"
                      className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue="Member"
                      ref={this.typeOfMember}
                    >
                      <option>Pledge</option>
                      <option>Member</option>
                      <option>Alumni</option>
                    </select>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={this.addNewUser}
                  className="inline-flex min-w-[121px] w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                >
                  <UserPlusIcon className="-ml-1 mr-2 h-5 w-5" />
                  Add User
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-4 px-4 w-full">
          <div className="bg-gray-100 shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Link to Editable Pledge Calendar on Notion
              </h3>
              <form className="mt-5 min-w-[85px] sm:flex sm:items-center">
                <a className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm" href="https://www.notion.so/97757d83c1bc42708c8a2cd51f96e9aa?v=542627b9c9d4412b8aec5711552f4bb9">
                  <LinkIcon className="-ml-1 mr-2 h-5 w-5" />
                  Notion
                </a>
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
