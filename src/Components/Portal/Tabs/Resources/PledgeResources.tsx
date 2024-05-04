import React from "react";
import {
  LinkIcon,
} from "@heroicons/react/20/solid";
import { FolderOpenIcon } from "@heroicons/react/24/outline";


class PledgeResources extends React.Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
    };
  render() {
    return (
        <div className="overflow-y-auto m-8">
        {/* Header */}
        <div className="">
          {/* Icon and Title */}
          <div className="flex items-center pb-2">
            {/* Calendar Icon */}
            <div className="flex justify-center items-center">
              <FolderOpenIcon className="text-indigo-700 mr-[0.5rem] h-[2.5rem] w-[2.5rem]" />
            </div>

            {/* Title */}
            <div className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              KTP Pledge Resources
            </div>
          </div>

          {/* Subtitle */}
          {false && (
            <div className="mx-auto text-sm inline-block text-gray-500 flex items-center">
              Use this tab to reference all needed pledge resources.
            </div>
          )}
          <div className="mx-auto text-sm inline-block text-gray-500 flex items-center">
            This tab contains important pledging-related information.
          </div>
        </div>

      <div className="">
        <div className="mt-4 px-4 w-full">
          <div className="bg-gray-100 shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Important Links
              </h3>
              <div className="sm:flex sm:flex-row sm:gap-2">
                <form className="sm:mt-5 min-w-[85px] sm:flex sm:items-center">
                  <a
                    target="_blank"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                    href="https://docs.google.com/document/d/1ZXdlhcBzCufGf24VOZgQrM_jnVCZ07xV1PWHokrmJNM/edit#heading=h.dbpghy82amqq"
                  >
                    <LinkIcon className="-ml-1 mr-2 h-5 w-5" />
                    Coffee Chat Guidelines
                  </a>
                </form>
                <form className="sm:mt-5 min-w-[85px] sm:flex sm:items-center">
                  <a
                    target="_blank"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                    href="https://docs.google.com/document/d/1ZXdlhcBzCufGf24VOZgQrM_jnVCZ07xV1PWHokrmJNM/edit#heading=h.dbpghy82amqq"
                  >
                    <LinkIcon className="-ml-1 mr-2 h-5 w-5" />
                    Capstone Guidelines
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
  componentDidMount() {}
}

export default PledgeResources;
