import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const UserContext = ({ children }) => {
  const [baseUrl] = useState(
    "https://backend.fotplus.com"
    // "https://fot-staging-server.westus2.cloudapp.azure.com"
  );
  // https://fot-staging-server.westus2.cloudapp.azure.com/api/v1

  const [superAdminBaseUrl] = useState(
    "https://backend.fotplus.com/api/v1/super-admin"
    // "https://fot-staging-server.westus2.cloudapp.azure.com/api/v1/super-admin"
  );

  const [baseUrlCandidate] = useState(
    "https://backend.fotplus.com/api/v1/candidate"
    // "https://fot-staging-server.westus2.cloudapp.azure.com/api/v1/candidate"
  );

  const [signUp, setSignUp] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    otp: "",
  });

  const [forgotPassword, setForgotPassword] = useState({
    email: "",
    otp: "",
    password: "",
    password_confirmation: "",
  });

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [twoFactorAuth, setTtwoFactorAuth] = useState({
    email: "",
    password: "",
    otp: "",
  });

  const [inviteUser, setInviteUser] = useState({
    invite_emails: [], // Required
    role: "", // Fetch role endpoint to get roles. Required if not custom role
    custom_role: "", // Only required if an existing role is not selected
    permissions: [], // Fetch permissions endpoint to get permissions. Only required alongside custom role
    auto_generate_details: 0, // Either 0 or 1. Required
    default_password: "",
  });

  const [organiztionUpdate, setOrganiztionUpdate] = useState({
    name: "",
    logo: "",
    about: "",
    email: "",
    phone: "",
    website: "",
    no_of_employees: "1-50",
    industry: "",
  });

  const [assessments, setAssessments] = useState({
    name: "",
    instructions: "",
    instruction_timer: "1",
    duration: "",
    type: "MCQ",
    code: "",
    difficulty_level: "",
    topic: "",
    display_calculator: "0",
    enable_speech: "0",
    allow_practice_questions: "0",
    conceal_candidate_data: "1",
    total_possible_questions: "",
    question_per_assessment: "",
    randomize_param: "simple",
    randomize_questions: "0",
    randomize_options: "0",
    randomize_difficulty_levels: "0",
    fixed_no_of_questions: "0",
  });

  const [editAssessment, setEditAssessment] = useState({
    name: "",
    instructions: "",
    instruction_timer: "1",
    duration: "",
    type: "MCQ",
    code: "",
    difficulty_level: "",
    topic: "",
    display_calculator: "0",
    enable_speech: "0",
    allow_practice_questions: "0",
    conceal_candidate_data: "1",
    total_possible_questions: "",
    question_per_assessment: "",
    randomize_param: "simple",
    randomize_questions: "0",
    randomize_options: "0",
    randomize_difficulty_levels: "0",
    fixed_no_of_questions: "0",
  });

  const [createQuestion, setCreateQuestion] = useState({
    question_type: "",
    question_category: "",
    question_text: "",
    question_file: "",
    option_layout: "vertical",
    option_type: "single selection",
    option_category: "",
    approved: "",
    options: [],
    correct_answer: [],
    question_mark: "",
    question_group: "",
    question_topic: "",
    question_difficulty: "",
  });
  const [editQuestion, setEditQuestion] = useState({
    question_type: "",
    question_category: "",
    question_text: "",
    question_file: "",
    option_layout: "",
    option_type: "",
    option_category: "",
    approved: 0,
    options: [],
    correct_answer: [],
    question_mark: "",
    question_group: "",
    question_topic: "",
    question_difficulty: "",
  });

  const [examCampaign, setExamCampaign] = useState({
    nin_dependent: null,
    payment_required: null,
    campaign_name: "",
    campaign_type: "", // proctored or unproctored
    script_marking: "",
    currency: null,
    fee: "",
    sessions: [],
    assessments: [],
    bundle_assessments: false,
    set_assessment_codes: false,
    sequential_mode: false,
    combined_mode: false,
    enable_multilingual_experience: false,
    set_terms: false,
    terms_data: [],
    lockdown_browser: false,
    set_supporting_docs: false,
    supporting_docs: [],
    result_type: "", // Can be scores obtained or pass/fail decision,
    notification_option: false,
    notification_data: [
      // email notification,
      // candidate portal notification,
      // instant screen display
    ],
    exam_survey: false,
    survey_data: [
      // https://forms.google.com/survey
    ],
    persistence_option: true,
  });

  const [editExamCampaign, setEditExamCampaign] = useState({
    nin_dependent: null,
    payment_required: null,
    campaign_name: "",
    campaign_type: "", // proctored or unproctored
    script_marking: "",
    currency: null,
    fee: "",
    sessions: [],
    assessments: [],
    bundle_assessments: false,
    set_assessment_codes: false,
    sequential_mode: false,
    combined_mode: false,
    enable_multilingual_experience: false,
    set_terms: false,
    terms_data: [],
    lockdown_browser: false,
    set_supporting_docs: false,
    supporting_docs: [],
    result_type: "", // Can be scores obtained or pass/fail decision,
    notification_option: false,
    notification_data: [
      // email notification,
      // candidate portal notification,
      // instant screen display
    ],
    exam_survey: false,
    survey_data: [
      // https://forms.google.com/survey
    ],
    persistence_option: true,
  });

  const [organizationBilling, setOrganizationBilling] = useState({
    address_1: "",

    address_2: "",

    city: "",

    state: "",

    zip_code: "",

    country: "",
  });

  const [toggleSideBar, setToggleSideBar] = useState(true);

  const SideBarVisibility = () => {
    setToggleSideBar(!toggleSideBar);
  };

  return (
    <AppContext.Provider
      value={{
        baseUrl,
        toggleSideBar,
        SideBarVisibility,
        superAdminBaseUrl,
        signUp,
        setSignUp,
        forgotPassword,
        setForgotPassword,
        login,
        setLogin,
        twoFactorAuth,
        setTtwoFactorAuth,
        inviteUser,
        setInviteUser,
        organiztionUpdate,
        setOrganiztionUpdate,
        assessments,
        setAssessments,
        createQuestion,
        setCreateQuestion,
        editQuestion,
        setEditQuestion,
        examCampaign,
        setExamCampaign,
        editExamCampaign,
        setEditExamCampaign,
        editAssessment,
        setEditAssessment,
        baseUrlCandidate,
        organizationBilling,
        setOrganizationBilling,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
