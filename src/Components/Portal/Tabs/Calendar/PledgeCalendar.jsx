import React from "react";
import request from "axios";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { Tab } from "@headlessui/react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Modal from "react-modal";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

const tabNames = ["Upcoming Events", "Calendar View"];

const localizer = momentLocalizer(moment);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
    borderRadius: "10px",
    borderColor: "#7c3aed",
    boxShadow: "rgb(0 0 0 / 10%) 0px 0px 5px 2px",
  },
};

class PledgeCalendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // State of API call (true if cannot reach endpoint)
      loading: false,

      // Raw response from GET request to notion's API
      notionPageData: null,

      // List of columns for the calendar table
      notionCols: [],

      // List of dictionaries for each event, with the columns as keys and
      // the corresponding row's data points as each value
      notionEvents: [],

      // Same as notion events but does not contain past events (for Upcoming Events)
      notionEventsFuture: [],

      // Calendar UI data structure
      calEvents: [],

      // Modal
      showModal: false,
      selectedEvent: null,
    };

    // ID of notion page
    this.NOTION_ID = "97757d83c1bc42708c8a2cd51f96e9aa";
    this.GCAL_ID =
      "c82f1fdd31eb61e26a3646e34ebde02efff386dff751179c6733a9e372c61cda@group.calendar.google.com";
    this.API_KEY = "AIzaSyBj2UQzQuZJrqC4SI5MZ_tBL6jWD9z-sVE";
  }

  filterOutPastEvents() {
    // If event is in the past, don't include it (return null,
    // then remove the null elements later)
    const today = new Date();
    const millisecondsPerDay = 24 * 60 * 60 * 1000;

    this.setState((prevState) => {
      return {
        notionEventsFuture: prevState.notionEvents.filter((event) => {
          return (
            today - new Date(Date.parse(event["Date"])) < millisecondsPerDay
          );
        }),
      };
    });
  }

  createEventDates() {
    // Create calEvents DS in the correct form for
    // BigCalender with data from notionEvents
    this.setState({
      calEvents: this.state.notionEvents.map((event, index) => {
        // Parse each event's fields
        let name = event["Name"];
        let date = new Date(Date.parse(event["Date"]));
        let type = event["Type"];
        let mand = event["Mandatory?"];
        let desc = event["Description"];

        // Turn "Yes" for the mandatory field into
        // "Mandatory" or "Not Mandatory"
        let mandDesc = "";
        if (mand == "Yes") {
          mandDesc = "Mandatory";
        } else {
          mandDesc = "Not Mandatory";
        }

        // Add the type and whether or not the
        // event is mandatory to the description
        let fullDesc = `${type} Event (${mandDesc}): ${desc}`;

        // Create a new event
        let currEvent = {
          id: index,
          title: name,
          start: date,
          end: date,
          desc: fullDesc,
        };

        return currEvent;
      }),
    });
  }

  onSelectEvent = (event) => {
    this.setState({ showModal: true, selectedEvent: event });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedEvent: null });
  };

  componentDidMount() {
    this.loadNotionPage();
  }

  // Parse data from notion
  loadNotionPage() {
    this.fetchNotionContent(this.NOTION_ID)
      .then((res) => {
        this.setState({ notionPageData: res.data }, () => {
          if (this.state.notionPageData) {
            // Set the keys of the data to the notionCols, except the "id" column
            this.setState(
              {
                notionCols: Object.keys(this.state.notionPageData[0]).filter(
                  (col) => col !== "id"
                ),
              },
              () => {
                // Order of the columns to display
                let sortedCols = [
                  "Name",
                  "Date",
                  "Type",
                  "Mandatory?",
                  "Description",
                ];

                // Update the notionCols
                this.setState({ notionCols: sortedCols }, () => {
                  // For each data point (row) from the API, put each respective
                  // data point into each column in the notionEvents list
                  let newNotionEvents = this.state.notionPageData.map(
                    (event) => {
                      let newEvent = {};
                      this.state.notionCols.forEach((col) => {
                        // The 'Type' key has a value that is an array for some reason
                        if (col === "Type") {
                          newEvent[col] = event[col][0];
                        } else {
                          // The 'Mandatory?' field is a boolean, so map it to a string
                          if (col === "Mandatory?") {
                            newEvent[col] = event[col] ? "Yes" : "No";

                            // Format the "Date" field
                          } else if (col === "Date") {
                            // Correct the timezone for CST
                            let dateStr = event[col] + "T12:00:00.000-0600";

                            // Convert date field to more readable format
                            let eventDate = new Date(dateStr);
                            newEvent[col] = eventDate.toLocaleDateString(
                              "en-US",
                              { month: "long", day: "numeric", year: "numeric" }
                            );

                            // Every other field is a 1-to-1 mapping
                          } else {
                            newEvent[col] = event[col];
                          }
                        }
                      });

                      // Necessitate Name, Date, and Type categories. Otherwise,
                      // don't add the row to the list
                      let necessaryCols = {
                        Name: undefined,
                        Date: "Invalid Date",
                        Type: "",
                      };
                      for (const key of Object.keys(necessaryCols)) {
                        if (
                          !newEvent.hasOwnProperty(key) ||
                          newEvent[key] === necessaryCols[key]
                        ) {
                          console.log(
                            key,
                            "field is not inputted for a row in Notion."
                          );
                          newEvent = {};
                        }
                      }

                      // If the event is valid, add it to the list
                      // of events from Notion
                      return newEvent;
                    }
                  );

                  // Remove empty events from ones that had empty notion data
                  newNotionEvents = newNotionEvents.filter(
                    (event) => Object.keys(event).length !== 0
                  );

                  // Sort the events by date (oldest to newest)
                  newNotionEvents.sort((a, b) => {
                    let a_date = new Date(Date.parse(a["Date"]));
                    let b_date = new Date(Date.parse(b["Date"]));
                    return a_date - b_date;
                  });

                  // Make notionEvents equal to the temporary one we just created
                  this.setState({ notionEvents: newNotionEvents }, () => {
                    // Remove empty events caused by them having passed
                    // this.setState({ notionEventsFuture: this.state.notionEvents.filter(event => Object.keys(event).length !== 0) }, () => {
                    this.filterOutPastEvents();

                    // After notionEvents is created, add them to the UI
                    this.createEventDates();
                  });
                });
              }
            );
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });

    // Notion API fetch is no longer in progress
    this.setState({ loading: false });
  }

  // Fetch data from Notion's API endpoint
  fetchNotionContent = (pageId) => {
    const apiCompletionPromise = request({
      method: "GET",
      url: "https://notion-api.splitbee.io/v1/table/" + pageId,
    });
    return apiCompletionPromise;
  };

  classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  render() {
    return (
      <>
        <div className="overflow-y-auto m-8">
          {/* Header */}
          <div className="">
            {/* Icon and Title */}
            <div className="flex items-center pb-2">
              {/* Calendar Icon */}
              <div className="flex justify-center items-center">
                <CalendarDaysIcon className="text-indigo-700 mr-[0.5rem] h-[2.5rem] w-[2.5rem]" />
              </div>

              {/* Title */}
              <div className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                KTP Pledge Calendar
              </div>
            </div>

            {/* Subtitle */}
            {false && (
              <div className="mx-auto text-sm inline-block text-gray-500 flex items-center">
                Use this calendar to plan and stay on top of all your pledge
                events and deadlines.
              </div>
            )}
            <div className="mx-auto text-sm inline-block text-gray-500 flex items-center">
              This calendar contains upcoming pledge events.
            </div>
          </div>

          <Tab.Group>
            <Tab.List className="flex space-x-1 drop-shadow-md mb-4 mt-6">
              {/* Render tabs */}
              {Object.values(tabNames).map((tabName) => (
                <Tab
                  className={({ selected }) =>
                    this.classNames(
                      "w-[10rem] rounded-lg py-2 text-sm font-medium leading-5 text-white",
                      "focus:outline-none shadow",
                      selected
                        ? "bg-indigo-700"
                        : "bg-white text-indigo-700 hover:bg-white/[0.2] border border-indigo-700"
                    )
                  }
                >
                  {tabName}
                </Tab>
              ))}
              <a
                href="https://calendar.google.com/calendar/u/0?cid=0d50eaeb066499c78cb55207b8499ba6dbc9f06ab7e903f45c46eada3b947f5c@group.calendar.google.com"
                target="_blank"
                className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add events to your Google calendar
                <ArrowTopRightOnSquareIcon
                  className="-mr-0.5 h-5 w-5"
                  aria-hidden="true"
                />
              </a>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                {this.state.notionPageData ? (
                  <div className="bg-white w-full h-full">
                    <div className="bg-white sm:rounded-lg">
                      {/* Table */}
                      <div className="mt-6 overflow-x-auto scrollbar-hide overscroll-x-none">
                        <table>
                          <thead>
                            {/* Render columns */}
                            <tr>
                              {this.state.notionCols.map((column, index) => (
                                <th key={index} className={`th-${index}`}>
                                  {column}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {/* Render rows */}
                            {this.state.notionEventsFuture.map(
                              (event, index) => (
                                <tr key={index}>
                                  {/* Render each point in each row */}
                                  {Object.entries(event).map(([key, value]) => (
                                    <td>{value}</td>
                                  ))}
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-4">Loading...</div>
                )}
              </Tab.Panel>
              <Tab.Panel className="h-[72vh]">
                <BigCalendar
                  localizer={localizer}
                  events={this.state.calEvents}
                  defaultView="month"
                  selectable
                  onSelectEvent={this.onSelectEvent}
                />
                <Modal
                  isOpen={this.state.showModal}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel="Event Details"
                  portalClassName="modal-portal"
                >
                  {this.state.selectedEvent && (
                    <div>
                      <h3 style={{ fontWeight: "bold" }}>
                        {this.state.selectedEvent.title}
                      </h3>
                      <p>
                        Date: {this.state.selectedEvent.start.toDateString()}
                      </p>
                      <p>Description: {this.state.selectedEvent.desc}</p>
                    </div>
                  )}
                </Modal>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </>
    );
  }
}

export default PledgeCalendar;
