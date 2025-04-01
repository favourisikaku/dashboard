import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CandidateExamInc = () => {
  const { uuid } = useParams();

  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [questions, setQuestions] = useState([]);

  // Check for online status on component mount
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Event listeners for online/offline events
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Clean up event listeners when component unmounts
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      //   setIsLoading(true);

      try {
        await Promise.all([
          fetchAssessments(),
          // fetchAnswersSubmitted(),
        ]);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
      //    finally {
      //     setIsLoading(false);
      //   }
    };

    fetchData();
  }, []);

  const [answers, setAnswers] = useState(() => {
    const savedAnswers = localStorage.getItem("answers");
    if (savedAnswers) {
      return JSON.parse(savedAnswers); // Return the answers from localStorage
    }
    return {}; // Return an empty object if no answers exist in localStorage
  });

  useEffect(() => {
    // Only fetch answers if they are not available in localStorage
    const savedAnswers = localStorage.getItem("answers");
    if (!savedAnswers) {
      fetchAnswersSubmitted(); // Fetch answers from the server
    }
  }, []);

  const fetchAnswersSubmitted = async () => {
    try {
      // If answers are not available in localStorage, fetch from the server
      const savedAnswers = localStorage.getItem("answers");
      if (savedAnswers) {
        setAnswers(JSON.parse(savedAnswers));
        return; // Skip fetching from the server if answers are in localStorage
      }

      // Fetch answers from the server
      const response = await fetch(
        baseUrlCandidate + `/examinations/get-answers/${uuid}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "candidate_exam_token"
            )}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setAnswers(data.data); // Set the answers from the server
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchAssessments = async () => {
    try {
      const response = await fetch(
        baseUrlCandidate + `/examinations/questions/${uuid}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "candidate_exam_token"
            )}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setQuestions(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <nav className="navbar bg-white fixed-top activated-options">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/images/fot-logo.svg" className="img-fluid" alt="logo" />
          </a>

          <div className="d-flex gap-10 align-items-center">
            <div>
              {isOnline ? (
                <img
                  src="/images/internet-2.svg"
                  className="img-fluid"
                  alt="icon"
                />
              ) : (
                <img
                  src="/images/internet-1.svg"
                  className="img-fluid"
                  alt="icon"
                />
              )}
              {/* <img
                src="/images/internet-2.svg"
                className="img-fluid"
                alt="icon"
              /> */}
            </div>

            <div>
              <img
                src="/images/lockdown-2.svg"
                className="img-fluid"
                alt="icon"
              />
            </div>

            <div>
              <img src="/images/eye-3.svg" className="img-fluid" alt="icon" />
            </div>

            <div>
              <img
                src="/images/camera-2.svg"
                className="img-fluid"
                alt="icon"
              />
            </div>

            <div>
              <img
                src="/images/microphone-2.svg"
                className="img-fluid"
                alt="icon"
              />
            </div>
          </div>

          <div className="d-flex align-items-center gap-15">
            <button
              className="btn btn-outline-main-primary btn-size"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasQuestions"
              aria-controls="offcanvasQuestions"
            >
              View all questions
            </button>

            <a href="#" className="text-gray-1">
              Help center
            </a>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasQuestions"
        aria-labelledby="offcanvasQuestionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasQuestionsLabel"></h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="mb-4">
            <h4 className="mb-0 text-bold">Questions</h4>
            <p>Explore all questions</p>
          </div>

          <ul className="list-group list-group-flush">
            {questions.map((item) => (
              <li className="list-group-item cursor-pointer" key={item?.uuid}>
                <div className="d-flex align-items-center gap-15 mb-4">
                  <h5 className="mb-0">Question 1</h5>
                  <div className="type-badge type-badge-3 ft-sm">
                    Unanswered
                  </div>
                </div>
                <p
                  className="text-muted mb-0 text-truncate"
                  style={{ maxWidth: "150px" }}
                >
                  {item?.question}
                </p>
              </li>
            ))}
            <li className="list-group-item cursor-pointer">
              <div className="d-flex align-items-center gap-15 mb-4">
                <h5 className="mb-0">Question 2</h5>
                <div className="type-badge type-badge-2 ft-sm">Answered</div>
              </div>
              <p
                className="text-muted mb-0 text-truncate"
                style={{ maxWidth: "150px" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                inventore?
              </p>
            </li>
            <li className="list-group-item cursor-pointer">
              <div className="d-flex align-items-center gap-15 mb-4">
                <h5 className="mb-0">Question 3</h5>
              </div>
              <p
                className="text-muted mb-0 text-truncate"
                style={{ maxWidth: "150px" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                inventore?
              </p>
            </li>
            <li className="list-group-item cursor-pointer">
              <div className="d-flex align-items-center gap-15 mb-4">
                <h5 className="mb-0">Question 4</h5>
              </div>
              <p
                className="text-muted mb-0 text-truncate"
                style={{ maxWidth: "150px" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                inventore?
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CandidateExamInc;
