import React from "react";
import NewUser from './NewUser';

class NewUserCont extends React.Component {
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
        <NewUser firebase={this.props.firebase}
                provider={this.props.provider}
                database={this.props.database}
                storage={this.props.storage}
                newuser={true}/>
      </div>
    );
  }
}

export default NewUserCont;
