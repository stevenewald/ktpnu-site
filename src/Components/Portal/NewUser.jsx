import React from "react";
import Swal from "sweetalert2";
import { ref, set } from "firebase/database";

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
  constructor() {
    super();
    this.user = null;
    this.submitButton = React.createRef();
  }

  initNewAcc(db, fb, name, uid, email, ppl) {
    set(ref(db, "users/" + uid), {
      name: name,
      email: email,
      prof_pic_link: ppl,
    })
      .then((res) => {
        alert(JSON.stringify(res));
      })
      .catch((err) => {
        alert(err);
      });
  }
  render() {
    return (
      <div className="bg-gray-100">
        <div>
          <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Let's set up your profile
              </p>
              <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
                Your NU KTP account gives you access to events, announcements,
                and a growing network of brothers.
              </p>
            </div>
          </div>
        </div>
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
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone number
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        placeholder="Not visible by other brothers"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Year
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Freshman</option>
                        <option>Sophomore</option>
                        <option>Junior</option>
                        <option>Senior</option>
                        <option>Alumni</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Major
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Notable internships
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
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
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Instagram Username
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                          instagram.com/u/
                        </span>
                        <input
                          type="text"
                          name="company-website"
                          id="company-website"
                          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="col-span-3 sm:col-span-1">
                      <label
                        htmlFor="company-website"
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
                          name="company-website"
                          id="company-website"
                          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      About
                    </label>
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
                        htmlFor="file-upload"
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
                            <span>Upload a file</span>
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
                            id="comments"
                            name="comments"
                            type="checkbox"
                            defaultChecked="true"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="comments"
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
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            defaultChecked="true"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="candidates"
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
                            id="offers"
                            name="offers"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="offers"
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
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
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
                          id="push-email"
                          name="push-notifications"
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
                          id="push-nothing"
                          name="push-notifications"
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
                    email: this.user.email,
                    display_name: this.user.displayName,
                  };
                  this.initNewAcc(
                    this.props.database,
                    this.props.firebase,
                    this.user.displayName,
                    this.user.uid,
                    this.user.email,
                    "google.com"
                  );

                  let timerInterval;
                  Swal.fire({
                    title: "Creating your account",
                    icon: "success",
                    text: "Your NUKTP account is being initialized",
                    timer: 10000,
                    timerProgressBar: true,
                    willClose: () => {
                      clearInterval(timerInterval);
                    },
                  }).then((result) => {
                    localStorage.setItem("justSetup", "true");
                    //window.location.href = "/member";
                  });
                }}
                className="hidden ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                ref={this.submitButton}
              >
                Create my account
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    document.getElementById("last-name").value =
      sessionStorage.getItem("fullName");
    document.getElementById("email-address").value =
      sessionStorage.getItem("emailAddress");
    document.getElementById("profPicImg").src =
      sessionStorage.getItem("photoURL");
    this.props.firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.submitButton.current.classList.remove("hidden");
      } else {
        alert("Signed out!");
        window.location.href = "/";
      }
    });
  }
}

export default NewUser;
