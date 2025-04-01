import React from "react";

const CtaInc = () => {
  return (
    <div className="info-section pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="card px-lg-4 px-2 py-lg-5 py-2 bg-color-3">
              <div className="card-body">
                <h3 className="heading-text-2 text-center mb-4">
                  Trusted by reputable clients around the world
                </h3>

                <div className="d-flex align-items-center flex-wrap justify-content-center mb-4">
                  <div className="me-3 mb-lg-0 mb-4">Get started as:</div>
                  <div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        An Individual
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        An Organization
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio3"
                        value="option3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio3"
                      >
                        A Test Producer
                      </label>
                    </div>
                  </div>
                </div>

                <form>
                  <div className="row">
                    <div className="col-lg-3 mb-lg-0 mb-3">
                      <input
                        type="text"
                        className="form-control form-control-size bg-white"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="col-lg-3 mb-lg-0 mb-3">
                      <input
                        type="text"
                        className="form-control form-control-size bg-white"
                        placeholder="Your official email address"
                      />
                    </div>

                    <div className="col-lg-3 mb-lg-0 mb-3">
                      <input
                        type="text"
                        className="form-control form-control-size bg-white"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div className="col-lg-3 mb-lg-0 mb-3">
                      <a
                        href="#"
                        className="btn btn-main-primary btn-size w-100"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaInc;
