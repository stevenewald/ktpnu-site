import React from "react";
import Swal from "sweetalert2";
import { ref, child, get, update } from "firebase/database";
import { uploadBytes } from "firebase/storage";
import { ref as sRef, getDownloadURL } from "firebase/storage";

/*async function initNewAcc(db, config) {
  set(ref(db, "users/" + config.uid), {
    name: config.name,
    email: config.email,
    phone: config.phone,
    year: config.year,
    major: config.major,
    internships: config.internships,
    insta: config.insta,
    linkedin: config.linkedin,
    about: config.about,
    prof_pic_link:config.ppl,
    cover_pic_link:config.cpl,
    email_viewable:config.email_viewable,
    standing_viewable:config.standing_viewable,
    internships_viewable:config.internships_viewable,
    notification_level:config.notification_level,
  });
}*/

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.user = null;
    this.submitButton = React.createRef();
    this.announcementLevel = 3;
  }

  initNewAcc(db, config) {
    let timerInterval;
    if(config.name.length==0) {
      Swal.fire({
        icon:'error',
        title:'Name form not filled'
      });
    } else if(config.email.length==0) {
      Swal.fire({
        icon:'error',
        title:'Email form not filled'
      })
    } else if(config.year.length==0) {
      Swal.fire({
        icon:'error',
        title:'Year not filled'
      })
    } else if(config.major.length==0) {
      Swal.fire({
        icon:'error',
        title:'Major form not filled'
      })
    } else if(config.phone.length==0) {
      Swal.fire({
        icon:'error',
        title:'Phone input not filled in'
      })
    } else if(config.linkedin.length==0) {
      Swal.fire({
        icon:'error',
        title:'LinkedIn username not filled in'
      })
    } else if (config.about.length<20) {
      Swal.fire({
        icon:'error',
        title:'About section must be at least 20 characters long'
      })
    } else {
      update(ref(db, "users/" + config.uid), {
        name: config.name,
        email: config.email,
        phone: config.phone,
        year: config.year,
        major: config.major,
        internships: config.internships,
        instagram: config.insta,
        linkedin: config.linkedin,
        about: config.about,
        signed_up: true,
        announcement_level: this.announcementLevel,
        email_viewable: config.email_viewable,
        standing_viewable: config.standing_viewable,
        internships_viewable: config.internships_viewable,
      });
      update(ref(db, "public_users/" + config.uid), {
        name: config.name,
        email: document.getElementById("email-visible").checked
          ? config.email
          : "",
        year: document.getElementById("standing-visible").checked
          ? config.year
          : "",
        major: config.major,
        internships: document.getElementById("internships-visible").checked
          ? config.internships
          : "",
        instagram: config.insta,
        linkedin: config.linkedin,
        about: config.about,
        signed_up: true,
      }).then((res) => {
        if (this.props.newuser) {
          Swal.fire({
            title: "Account successfully created!",
            icon: "success",
            text: "Your account was successfully created. Redirecting to the brother portal...",
            timer: 3000,
            timerProgressBar: true,
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            localStorage.setItem("justSetup", "true");
            window.location.href = "/member";
          });
        } else {
          Swal.fire({
            title: "Account information updated!",
            icon: "success",
            text: "Your account information was updated.",
            timer: 3000,
            timerProgressBar: true,
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            window.location.reload();
          });
        }
      });
    }
  }
  render() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Personal details
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Just a few academic and professional details.
                  </p>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                  <div className="grid grid-cols-6 gap-6">
                    <div
                      className="col-span-6 sm:col-span-4
                        
                        "
                    >
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        value={this.props.dn}
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Primary email address
                      </label>
                      <input
                        type="text"
                        readOnly="true"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="bg-gray-100 text-gray-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone number
                      </label>
                      <input
                        type="text"
                        name="phone-number"
                        id="phone-number"
                        autoComplete="phone"
                        placeholder="Not visible by other brothers"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="year"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Year
                      </label>
                      <select
                        id="year"
                        name="year"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="Freshman">Freshman</option>
                        <option value="Sophomore">Sophomore</option>
                        <option value="Junior">Junior</option>
                        <option value="Senior">Senior</option>
                        <option value="Alumni">Alumni</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="major"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Major
                      </label>
                      <input
                        type="text"
                        name="major"
                        id="major"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <div className="block"><label
                        htmlFor="internships"
                        className="inline-block text-sm font-medium text-gray-700"
                      >
                        Notable internships&nbsp;
                      </label>
                      <label
                        htmlFor="internships"
                        className="inline-block text-sm font-medium font-light text-gray-500"
                      >(Optional)</label></div>
                      <input
                        type="text"
                        name="internships"
                        id="internships"
                        placeholder="Majority of new brothers will leave this empty"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Profile
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    This information will be visible to other NU KTP
                    brothers/alumni.
                  </p>
                </div>
                <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
                  <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="linkedin"
                        className="block text-sm font-medium text-gray-700"
                      >
                        LinkedIn Username
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                          linkedin.com/in/
                        </span>
                        <input
                          type="text"
                          name="linkedin"
                          id="linkedin"
                          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="col-span-3 sm:col-span-1">
                      <div>
                      <label
                        htmlFor="instagram"
                        className="inline-block text-sm font-medium text-gray-700"
                      >
                        Instagram Username&nbsp;
                      </label>
                      <label
                        htmlFor="instagram"
                        className="inline-block text-sm font-medium font-light text-gray-500"
                      >(Optional)</label></div>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                          instagram.com/u/
                        </span>
                        <input
                          type="text"
                          name="instagram"
                          id="instagram"
                          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    
                  </div>

                  <div>
                    <div><label
                      htmlFor="about"
                      className="inline-block text-sm font-medium text-gray-700"
                    >
                      About&nbsp;
                    </label>
                    <label
                        htmlFor="about"
                        className="inline-block text-sm font-medium font-extrabold text-gray-700"
                      >(Min. 20 characters)</label></div>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Write a few sentences about yourself."
                        defaultValue={""}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your profile. URLs are hyperlinked.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <div className="mt-1 flex items-center space-x-5">
                      <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                        <img
                          id="profPicImg"
                          className="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        ></img>
                      </span>

                      <label
                        htmlFor="file-upload2"
                        className="rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span>Upload from device</span>
                        <input
                          onChange={() => {
                            var inputElem =
                              document.getElementById("file-upload2");
                            if (inputElem.files && inputElem.files[0]) {
                              var reader = new FileReader();

                              reader.onload = function (e) {
                                document.getElementById("profPicImg").src =
                                  e.target.result;
                              };

                              reader.readAsDataURL(inputElem.files[0]);
                              const storageRef = sRef(
                                this.props.storage,
                                this.user.uid + "_profile_pic"
                              );
                              uploadBytes(storageRef, inputElem.files[0])
                                .then((snapshot) => {
                                  console.log("Uploaded bytes");
                                  getDownloadURL(snapshot.ref)
                                    .then((downloadURL) => {
                                      update(
                                        ref(
                                          this.props.database,
                                          "users/" + this.user.uid
                                        ),
                                        {
                                          profile_pic_link: downloadURL,
                                        }
                                      );
                                      update(
                                        ref(
                                          this.props.database,
                                          "public_users/" + this.user.uid
                                        ),
                                        {
                                          profile_pic_link: downloadURL,
                                        }
                                      );
                                    })
                                    .catch((err) => {
                                      alert(err);
                                    });
                                })
                                .catch((err) => {
                                  alert(err);
                                });
                            }
                          }}
                          id="file-upload2"
                          name="file-upload2"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Cover photo
                    </label>
                    <img
                      id="fullCover"
                      className="w-full hidden flex justify-center rounded-md border-2 px-6 object-cover h-[188px]"
                    ></img>
                    <div
                      id="mtCover"
                      className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
                    >
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>
                              {this.props.newuser
                                ? "Upload a file"
                                : "Upload a file to change"}
                            </span>
                            <input
                              onChange={() => {
                                var inputElem =
                                  document.getElementById("file-upload");
                                if (inputElem.files && inputElem.files[0]) {
                                  document
                                    .getElementById("mtCover")
                                    .classList.add("hidden");
                                  var reader = new FileReader();

                                  reader.onload = function (e) {
                                    document.getElementById("fullCover").src =
                                      e.target.result;
                                    document
                                      .getElementById("fullCover")
                                      .classList.remove("hidden");
                                  };

                                  reader.readAsDataURL(inputElem.files[0]);

                                  const storageRef = sRef(
                                    this.props.storage,
                                    this.user.uid + "_cover_pic"
                                  );
                                  uploadBytes(storageRef, inputElem.files[0])
                                    .then((snapshot) => {
                                      console.log("Uploaded bytes");
                                      getDownloadURL(snapshot.ref)
                                        .then((downloadURL) => {
                                          update(
                                            ref(
                                              this.props.database,
                                              "users/" + this.user.uid
                                            ),
                                            {
                                              cover_page_link: downloadURL,
                                            }
                                          );
                                          update(
                                            ref(
                                              this.props.database,
                                              "public_users/" + this.user.uid
                                            ),
                                            {
                                              cover_page_link: downloadURL,
                                            }
                                          );
                                        })
                                        .catch((err) => {
                                          alert(err);
                                        });
                                    })
                                    .catch((err) => {
                                      alert(err);
                                    });
                                }
                              }}
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Settings
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Customize your KTPortal experience
                  </p>
                </div>
                <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
                  <fieldset>
                    <legend className="sr-only">
                      Viewable profile information
                    </legend>
                    <div
                      className="text-base font-medium text-gray-900"
                      aria-hidden="true"
                    >
                      Viewable profile information
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="email-visible"
                            name="email-visible"
                            type="checkbox"
                            defaultChecked="true"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="email-visible"
                            className="font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <p className="text-gray-500">
                            Allow other brothers to reach out to you.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="standing-visible"
                            name="standing-visible"
                            type="checkbox"
                            defaultChecked="true"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="standing-visible"
                            className="font-medium text-gray-700"
                          >
                            Class standing
                          </label>
                          <p className="text-gray-500">
                            Let brothers see your year (sophomore, alumni, etc).
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="internships-visible"
                            name="internships-visible"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="internships-visible"
                            className="font-medium text-gray-700"
                          >
                            Notable Internships
                          </label>
                          <p className="text-gray-500">
                            Show any notable internships on your profile.
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="contents text-base font-medium text-gray-900">
                      Push Notifications
                    </legend>
                    <p className="text-sm text-gray-500">
                      Choose the level of SMS communication you'd like from KTP
                    </p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          onClick={() => {
                            this.announcementLevel = 3;
                          }}
                          id="push-everything"
                          name="push-amounts"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          defaultChecked={this.props.newuser ? "true" : "false"}
                        />
                        <label
                          htmlFor="push-everything"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Major announcements and events
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          onClick={() => {
                            this.announcementLevel = 2;
                          }}
                          id="push-email"
                          name="push-amounts"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="push-email"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Major announcements
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          onClick={() => {
                            this.announcementLevel = 1;
                          }}
                          id="push-nothing"
                          name="push-amounts"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="push-nothing"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Nothing
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => {
                  var userConfig = {
                    uid: this.user.uid,
                    email: document.getElementById("email-address").value,
                    name: document.getElementById("last-name").value,
                    phone: document.getElementById("phone-number").value,
                    year: document.getElementById("year").value,
                    major: document.getElementById("major").value,
                    internships: document.getElementById("internships").value,
                    insta: document.getElementById("instagram").value,
                    linkedin: document.getElementById("linkedin").value,
                    about: document.getElementById("about").value,
                    email_viewable:
                      document.getElementById("email-visible").checked,
                    standing_viewable:
                      document.getElementById("standing-visible").checked,
                    internships_viewable: document.getElementById(
                      "internships-visible"
                    ).checked,
                  };
                  this.initNewAcc(this.props.database, userConfig);
                }}
                className="hidden ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                ref={this.submitButton}
              >
                {this.props.newuser ? "Create my account" : "Update my account"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      document.getElementById("last-name").value =
        sessionStorage.getItem("fullName");
      document.getElementById("email-address").value =
        sessionStorage.getItem("emailAddress");
      document.getElementById("profPicImg").src =
        sessionStorage.getItem("photoURL");
    }, 100);
    this.props.firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.submitButton.current.classList.remove("hidden");
        if (!this.props.newuser) {
          const dbRef = ref(this.props.database);
          get(child(dbRef, "users/" + user.uid)).then((snapshot) => {
            const prof = snapshot.val();
            //todo: abstract (easy, too lazy tho)
            document.getElementById("last-name").value = prof["name"]
              ? prof["name"]
              : "";
            document.getElementById("email-address").value = prof["email"]
              ? prof["email"]
              : "";
            document.getElementById("profPicImg").src = prof["profile_pic_link"]
              ? prof["profile_pic_link"]
              : "";
            document.getElementById("phone-number").value = prof["phone"]
              ? prof["phone"]
              : "";
            document.getElementById("year").value = prof["year"]
              ? prof["year"]
              : "";
            document.getElementById("major").value = prof["year"]
              ? prof["major"]
              : "";
            document.getElementById("internships").value = prof["internships"]
              ? prof["internships"]
              : "";
            document.getElementById("instagram").value = prof["instagram"]
              ? prof["instagram"]
              : "";
            document.getElementById("linkedin").value = prof["linkedin"]
              ? prof["linkedin"]
              : "";
            document.getElementById("about").value = prof["about"]
              ? prof["about"]
              : "";
            document.getElementById("push-everything").checked =
              prof["announcement_level"] === 3;
            document.getElementById("push-email").checked =
              prof["announcement_level"] === 2;
            document.getElementById("push-nothing").checked =
              prof["announcement_level"] === 1;
            if (prof["announcement_level"]) {
              this.announcementLevel = prof["announcement_level"];
            }
            document.getElementById("email-visible").checked =
              prof["email_viewable"];
            document.getElementById("standing-visible").checked =
              prof["standing_viewable"];
            document.getElementById("internships-visible").checked =
              prof["internships_viewable"];
          });
        }
      } else {
        alert("Signed out!");
        window.location.href = "/";
      }
    });
  }
}

export default NewUser;
