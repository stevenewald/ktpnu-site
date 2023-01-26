import React from 'react'
import request from 'axios';
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

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
    }

    // ID of notion page
    this.NOTION_ID = '7b33ed2c5812421187ac0e0d1b38e416'
  }

  componentDidMount() {
    this.loadNotionPage();
  }

  // Parse data from notion
  loadNotionPage() {
    this.fetchNotionContent(this.NOTION_ID).then(res => {
      this.setState({ notionPageData: res.data }, () => {

        if (this.state.notionPageData) {

          // Set the keys of the data to the notionCols, except the "id" column
          this.setState({ notionCols: Object.keys(this.state.notionPageData[0]).filter(col => col !== "id")}, () => {

            // Order of the columns to display
            let sortedCols = ["Name", "Date", "Type", "Mandatory?", "Description"];

            // To make the columns in the correct order, I want to make sure that
            // the columns on notion.com match what I want to sort it to. So,
            // I ensure that each column in the list that I want to sort it to
            // exists online
            if (sortedCols.every(element => this.state.notionCols.includes(element))) {
              this.setState({notionCols: sortedCols}, () => {

                // For each data point (row) from the API, put each respective
                // data point into each column in the notionEvents list
                let newNotionEvents = this.state.notionPageData.map(event => {
                    let newEvent = {};
                    this.state.notionCols.forEach(col => {

                        // The 'Type' key has a value that is an array for some reason
                        if (col === 'Type') {
                            newEvent[col] = event[col][0];
                        } else {

                            // The 'Mandatory?' field is a boolean, so map it to a string
                            if (col === 'Mandatory?') {
                              newEvent[col] = event[col] ? 'Yes' : 'No'

                            // Format the "Date" field
                            } else if (col === "Date") {

                              // Correct the timezone for CST
                              let dateStr = event[col] + 'T12:00:00.000-0600';

                              // Convert date field to more readable format
                              let date = new Date(dateStr);
                              newEvent[col] = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

                            // Every other field is a 1-to-1 mapping
                            } else {
                              newEvent[col] = event[col];
                            }
                        }
                    });
                    return newEvent;
                  })

                // Make notionEvents equal to the temporary one we just created
                this.setState({ notionEvents: newNotionEvents })
            })}});
        }});
    }).catch(err => {
      console.log(err)
    })

    // Notion API fetch is no longer in progress
    this.setState({loading: false});
  }

  // Fetch data from Notion's API endpoint
  fetchNotionContent = (pageId) => {
    const apiCompletionPromise = request({
      method: 'GET',
      url: "https://notion-api.splitbee.io/v1/table/" + pageId,
    });
    return apiCompletionPromise;
  }

  render() {
    return (
      <>
        {this.state.notionPageData ?
          <div className="bg-white w-full h-full">
            <div className="m-6 bg-white sm:rounded-lg">

              {/* Header */}
              <div className="">

                {/* Icon and Title */}
                <div className="flex items-center">

                  {/* Calendar Icon */}
                  <div className="flex">
                    <CalendarDaysIcon className="ktp-color ml-4 mt-4 mb-4 mr-2 h-8 w-8"/>
                  </div>

                  {/* Title */}
                  <div className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                    KTP Pledge Calendar
                  </div>
                </div>

                {/* Subtitle */}
                <div className="mx-auto ml-4 text-sm inline-block text-gray-500 flex items-center">
                  Use this calendar to plan and stay on top of all your pledge events.
                </div>
              </div>

              {/* Table */}
              <div className="ml-4 mr-4 mt-6 overflow-x-auto scrollbar-hide overscroll-x-none">
                <table>
                  <thead>

                    {/* Render columns */}
                    <tr>
                      {this.state.notionCols.map((column, index) => (
                        <th key={index}>{column}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>

                    {/* Render rows */}
                    {this.state.notionEvents.map((event, index) => (
                      <tr key={index}>

                        {/* Render each point in each row */}
                        {Object.entries(event).map(([key, value]) => (
                          <td>{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        : <div className="p-4">Loading...</div>}
      </>
    );
  }
}

export default PledgeCalendar
