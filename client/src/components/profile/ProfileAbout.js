import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name
      ? profile.user.name.trim().split(" ")[0]
      : null;

    const skills = profile.skills.map((skill, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-check" />
        {skill}
      </div>
    ));

    const websites = profile.websites.map((website, index) => (
      <div key={index} className="p-3">
        <i className="fa fa-globe" />
        <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">
          {" "}
          {website}
        </a>
      </div>
    ));

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <h3 className="text-center text-info">{firstName}'s Bio</h3>
            <p className="lead">
              {isEmpty(profile.bio) ? (
                <span>{firstName} does not have a bio</span>
              ) : (
                <span>{profile.bio}</span>
              )}
            </p>
            <hr />
            <h3 className="text-center text-info">Skill Set</h3>
            <div className="row">
              <div className="d-flex flex-wrap justify-content-center align-items-center">
                {skills}
              </div>
            </div>
            {profile.websites[0] === "" ? null : (
              <div>
                <hr />
                <h3 className="text-center text-info">
                  Some Websites Built By {firstName}
                </h3>
                <div className="row">
                  <div className="d-flex flex-wrap justify-content-center align-items-center">
                    {websites}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
