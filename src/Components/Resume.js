import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span> &bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p><span style={{ fontWeight: "bold" }}>Relevant Courses: </span>{education.description}</p>
          <p></p>
        </div>
      );
    });
    var education1 = data.education1.map(function (education1) {
      return (
        <div key={education1.school}>
          <h3>{education1.school}</h3>
          <p className="info">
            {education1.degree}<span> &bull;</span>
            <em className="date">{education1.graduated}</em>
          </p>
          <p><span style={{ fontWeight: "bold" }}>Relevant Courses: </span>{education1.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p><ul>{work.description.map(point =>
            <li>
              <span>&bull; </span>{point}
            </li>
          )}</ul></p>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
            <div className="twelve columns">{education1}</div>
          </div>
        </div>
      </div>


      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
