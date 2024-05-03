import React, { RefObject } from "react";
import {
  UserPlusIcon,
  PaperAirplaneIcon,
  LinkIcon,
} from "@heroicons/react/20/solid";
import { ref, set } from "firebase/database";
import Swal, { SweetAlertResult } from "sweetalert2";

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

class AdminPanel extends React.Component<{firebase:any,database:any},{}> {
  emailButton:RefObject<HTMLInputElement>;
  sendTextButton:RefObject<HTMLTextAreaElement>;
  whoToButton:RefObject<HTMLSelectElement>;
  messageTypeButton:RefObject<HTMLSelectElement>;
  typeOfMember:RefObject<HTMLSelectElement>;

  // listserv fields and buttons
  listservEmailField:RefObject<HTMLInputElement>;
  listservSubjectField:RefObject<HTMLInputElement>;
  listservWhoToButton:RefObject<HTMLSelectElement>;
  sendEmailButton:RefObject<HTMLTextAreaElement>;

  constructor(props:{firebase:any,database:any}) {
    super(props);
    this.addNewUser = this.addNewUser.bind(this);
    this.sendText = this.sendText.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    
    this.emailButton = React.createRef<HTMLInputElement>();
    this.sendTextButton = React.createRef<HTMLTextAreaElement>();
    this.whoToButton = React.createRef<HTMLSelectElement>();
    this.messageTypeButton = React.createRef<HTMLSelectElement>();
    this.typeOfMember = React.createRef<HTMLSelectElement>();
    
    //for email listerv sends
    this.listservEmailField = React.createRef<HTMLInputElement>();
    this.listservSubjectField = React.createRef<HTMLInputElement>();
    this.listservWhoToButton = React.createRef<HTMLSelectElement>();
    this.sendEmailButton = React.createRef<HTMLTextAreaElement>();

    //the backend only allows this if they are already set as admin
    //dw about the security, i set up all the database rules correctly - steve
  }


  // sendEmail with EmailJS

  // class AdminPanel extends React.Component {
  //   // Other component methods...

  //   sendEmail() {
  //     console.log('Starting to send email');

  //     // Assuming you have already obtained references/values for your email form fields
  //     const text = this.sendEmailButton.current.value;
  //     const whoTo = this.listservWhoToButton.current.value;

  //     if (text.length < 5) {
  //       Swal.fire({
  //         icon: "error",
  //         text: "Message too short",
  //       });
  //       return;
  //     }

  //     // Your EmailJS user ID, service ID, and template ID
  //     const serviceID = 'your_service_id';
  //     const templateID = 'your_template_id';
  //     const userID = 'your_user_id';

  //     const templateParams = {
  //       message: text,
  //       to_email: whoTo,
  //       // Add other template parameters if needed
  //     };

  //     emailjs.send(serviceID, templateID, templateParams, userID)
  //       .then((response) => {
  //         console.log('Email successfully sent!', response.status, response.text);
  //         Swal.fire({
  //           title: "Success!",
  //           icon: "success",
  //           text: "Email successfully sent!",
  //         });
  //       }, (error) => {
  //         console.error('Failed to send email. Error: ', error);
  //         Swal.fire({
  //           title: "Email send failure",
  //           text: "Do not attempt to resend the message. Contact support.",
  //           icon: "error",
  //         });
  //       });
  //   }

  //   // Other component methods...
  // }



  // DATABASE HANDLING + SENDING FUNCTIONALITY
  // fetchUsers = () => {
  //   this.setState({ loading: true });
  //   let usersRef = admin.database().ref("users");
  //   usersRef.on('value', snapshot => {
  //     const usersData = snapshot.val();
  //     const userList = Object.keys(usersData).map(key => ({
  //       ...usersData[key],
  //       uid: key,
  //     }));
  //     this.setState({ users: userList, loading: false });
  //   });

  //   // Clean up the subscription
  //   this.componentWillUnmount = () => usersRef.off();
  // };

  // sendEmails = () => {
  //   const { users, selectedGroup } = this.state;
  //   const filteredEmails = users.filter(user => user.role === selectedGroup).map(user => user.email);

  //   // Assuming you have a method to trigger email sending process, like using EmailJS directly
  //   filteredEmails.forEach(email => {
  //     // Define the parameters for your email template
  //     const templateParams = {
  //       to_email: email, // or any other email parameter required by your template
  //       message: "Your message here", // Customize your message or other parameters
  //       // Include any other template parameters here
  //     };

  //     // Send the email using EmailJS or any other email sending service you're using
  //     emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
  //       .then(response => {
  //         console.log('Email successfully sent!', response);
  //         // Handle success response (e.g., updating the UI or notifying the user)
  //       })
  //       .catch(error => {
  //         console.error('Failed to send email:', error);
  //         // Handle error response
  //       });
  //   });
  // };

  // handleGroupChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   this.setState({ selectedGroup: event.target.value });
  // };

  sendEmail() {
    if(!(this.listservWhoToButton.current)) {
      return;
    }
    if(!(this.sendEmailButton.current)) { 
      return;
    }
    // if(!(this.listservEmailField.current)) { 
    //   return;
    // }
    // if(!(this.listservSubjectField.current)) { 
    //   return;
    // }
    if(!(this.listservWhoToButton.current)) {
      return;
    }
    const text = this.sendEmailButton.current.value;
    const whoTo = this.listservWhoToButton.current.value;

    if (text.length < 5) {
      Swal.fire({
        icon: "error",
        text: "Message too short",
      });
    } else {
      Swal.fire({
        title: "Is this correct?",
        text: text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, send the email",
      }).then((res:SweetAlertResult) => {
        if (res["isConfirmed"]) {
          Swal.fire({
            title: "Are you sure?",
            text: "Once you send this email, you can't unsend it. Email: " + text,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, send the email",
          }).then((res:SweetAlertResult) => {
            if (res["isConfirmed"]) {
              const sendEmailFunction = this.props.firebase.functions().httpsCallable('sendEmail');
              sendEmailFunction({text, whoTo })
              .then(() => {
                Swal.fire({
                  title: "Success!",
                  icon: "success",
                  text:
                    "Email has been successfully sent to " +whoTo.toLowerCase() + ".",
                });
              })
              .catch((error: any) => { 
                console.log(error);
                Swal.fire({
                  title: "Message send failure",
                  text: "Do not attempt to resend the message. Contact Tahira.",
                  icon: "error",
                });
              });   
            }
          });
        }
      });
    }
  }

  sendText() {
    if(!(this.sendTextButton.current)) { //TODO: make sure this works lol
      return;
    }
    if(!(this.whoToButton.current)) {
      return;
    }
    if(!(this.messageTypeButton.current)) {
      return;
    }
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
      }).then((res:SweetAlertResult) => {
        if (res["isConfirmed"]) {
          Swal.fire({
            title: "Are you sure?",
            text: "Once you send this text, you can't unsend it. Text: " + text,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, send the text",
          }).then((res:SweetAlertResult) => {
            if (res["isConfirmed"]) {
              this.props.firebase
                .functions()
                .httpsCallable("sendText")({
                  message: text,
                  whoTo: whoTo,
                  type: whatType,
                })
                .then((res:any) => {
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
                      icon: "error",
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
    if(!(this.emailButton.current)) {
      alert("Email button not found\n");
      return;
    }
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
          if(!(this.typeOfMember.current)) {
            alert("Type of member selector not found\n");
            return;
          }
          var typeOfUser = this.typeOfMember.current.value;
          set(
            ref(this.props.database, "allowed_users/" + formattedEmail),
            typeOfUser
          )
            .then(() => {
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
                <p>Enter the text you'd like to send to the members</p>
              </div>
              <form className="mt-5 flex flex-col sm:flex-row items-center">
                <div className="flex flex-row items-center">
                  <div className="w-full sm:max-w-sm mb-0">
                    <label htmlFor="email" className="sr-only">
                      Message
                    </label>
                    <textarea
                      name="text"
                      id="text"
                      className="block w-full sm:min-w-[13rem] min-h-[2.5rem] h-[2.5rem] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Pledge meeting tonight @ 7:00..."
                      ref={this.sendTextButton}
                    />
                  </div>
                  <div className="sm:ml-1 sm:mr-1 relative bottom-[2px] my-2 sm:my-0">
                    <select
                      id="who-to-text"
                      name="who-to-text"
                      className="mt-1 block min-w-[7rem] w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                      className="mt-1 block w-full min-w-[7rem] rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                Send an email
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>Enter the email you'd like to send to the members</p>
              </div>
              <form className="mt-5 flex flex-col sm:flex-row items-center">
                <div className="flex flex-row items-center">
                  <div className="w-full sm:max-w-sm mb-0">
                    <label htmlFor="email" className="sr-only">
                      Message
                    </label>
                    <textarea
                      name="text"
                      id="text"
                      className="block w-full sm:min-w-[17rem] min-h-[2.5rem] h-[2.5rem] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Big Little Reveal soon..."
                      ref={this.sendEmailButton}
                    />
                  </div>
                  <div className="sm:ml-1 sm:mr-1 relative bottom-[2px] my-2 sm:my-0">
                    <select
                      id="who-to-text"
                      name="who-to-text"
                      className="mt-1 block min-w-[7rem] w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      defaultValue="Pledges"
                      ref={this.listservWhoToButton}
                    >
                      <option>VPs Of Tech</option>
                      <option>Pledges</option>
                      <option>Members</option>
                      <option>Everyone</option>
                    </select>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={this.sendEmail}
                  className="relative bottom-[1px] min-w-[157px] inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                >
                  <PaperAirplaneIcon className="-ml-1 mr-2 h-5 w-5" />
                  Send Email
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
                      className="mt-1 block min-w-[7rem] w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                Notion Links
              </h3>
              <div className="sm:flex sm:flex-row sm:gap-2">
                <form className="sm:mt-5 min-w-[85px] sm:flex sm:items-center">
                  <a
                    target="_blank"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                    href="https://www.notion.so/97757d83c1bc42708c8a2cd51f96e9aa?v=542627b9c9d4412b8aec5711552f4bb9"
                  >
                    <LinkIcon className="-ml-1 mr-2 h-5 w-5" />
                    Pledge Calendar
                  </a>
                </form>
                <form className="sm:mt-5 min-w-[85px] sm:flex sm:items-center">
                  <a
                    target="_blank"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                    href="https://www.notion.so/d1fe9440ad2e489299f645134a2bf7a9?v=1909dd71e41f40c0b23c6be525c7a8a6"
                  >
                    <LinkIcon className="-ml-1 mr-2 h-5 w-5" />
                    Sprint
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {}
}

export default AdminPanel;
