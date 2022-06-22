import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="container p-0">
        <div className="row">
          <div className="col-lg-4 p-3 col-xl-4 col-md-4">
            <div className="card bg-light border-0 h-100">
              <div className="card-body d-flex align-items-center justify-content-center">
                <div
                  style={{
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "10px",
                    fontSize: "2rem",
                  }}
                  className="feature bg-primary text-white d-flex align-items-center justify-content-center"
                >
                  <i class="fa-solid fa-book"></i>
                </div>
              </div>
              <div className="text container">
                <h2>Fresh new layout</h2>
                <p>
                  With Bootstrap 5, we've created a fresh new layout for this
                  template!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-3 col-xl-4 col-md-4">
            <div className="card bg-light border-0 h-100">
              <div className="card-body d-flex align-items-center justify-content-center">
                <div
                  style={{
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "10px",
                    fontSize: "2rem",
                  }}
                  className="feature bg-primary text-white d-flex align-items-center justify-content-center"
                >
                  <i class="fa-solid fa-download"></i>
                </div>
              </div>
              <div className="text container">
                <h2>Free to download</h2>
                <p>
                  As always, Start Bootstrap has a powerful collectin of free
                  templates.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-3 col-xl-4 col-md-4">
            <div className="card bg-light border-0 h-100">
              <div className="card-body d-flex align-items-center justify-content-center">
                <div
                  style={{
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "10px",
                    fontSize: "2rem",
                  }}
                  className="feature bg-primary text-white d-flex align-items-center justify-content-center"
                >
                  <i class="fa-regular fa-closed-captioning"></i>
                </div>
              </div>
              <div className="text container">
                <h2>Jumbotron hero header</h2>
                <p>
                  The heroic part of this template is the jumbotron hero header!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-3 col-xl-4 col-md-4">
            <div className="card bg-light border-0 h-100">
              <div className="card-body d-flex align-items-center justify-content-center">
                <div
                  style={{
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "10px",
                    fontSize: "2rem",
                  }}
                  className="feature bg-primary text-white d-flex align-items-center justify-content-center"
                >
                  <i class="fa-solid fa-audio-description"></i>
                </div>
              </div>
              <div className="text container">
                <h2>Feature boxes</h2>
                <p>
                  We've created some custom feature boxes using Bootstrap icons!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-3 col-xl-4 col-md-4">
            <div className="card bg-light border-0 h-100">
              <div className="card-body d-flex align-items-center justify-content-center">
                <div
                  style={{
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "10px",
                    fontSize: "2rem",
                  }}
                  className="feature bg-primary text-white d-flex align-items-center justify-content-center"
                >
                  <i class="fa-solid fa-code"></i>
                </div>
              </div>
              <div className="text container">
                <h2>Simple clean code</h2>
                <p>
                  We keep our dependencies up to date and squash bugs as they
                  come!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-3 col-xl-4 col-md-4">
            <div className="card bg-light border-0 h-100">
              <div className="card-body d-flex align-items-center justify-content-center">
                <div
                  style={{
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "10px",
                    fontSize: "2rem",
                  }}
                  className="feature bg-primary text-white d-flex align-items-center justify-content-center"
                >
                  <i class="fa-solid fa-check"></i>
                </div>
              </div>
              <div className="text container">
                <h2>A name you trust</h2>
                <p>
                  Start Bootstrap has been the leader in free Bootstrap
                  templates since 2013!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
