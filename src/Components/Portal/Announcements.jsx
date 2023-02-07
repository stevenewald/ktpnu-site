import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

class Announcements extends React.Component {
  render() {
    return (
      <div className="max-w-lg">
        <div className="flow-root">
          <ul role="list" className="-mb-8">
            {this.props.announcements.map((event, eventIdx) => (
              <li key={event.id}>
                <div className="relative pb-8">
                  {eventIdx !== this.props.announcements.length - 1 ? (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span
                        className={classNames(
                          event.iconBackground,
                          "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                        )}
                      >
                        <event.icon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm text-gray-900 font-medium">
                          {event.message}{" "}
                        </p>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        <time dateTime={event.datetime}>{event.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default Announcements;
