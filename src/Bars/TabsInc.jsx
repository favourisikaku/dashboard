import React from "react";

const TabsInc = () => {
  return (
    <div className="custom-tabs-nav position-relative">
      <ul className="list-unstyled d-flex align-items-center gap-15">
        <a href="create-campaign.php" className="text-decoration-none">
          <li className="tab-count active">
            <div className="count-num-tab flex-shrink-0 me-2">1</div>

            <p className="mb-0">Setup</p>
          </li>
        </a>

        <a href="create-campaign_1.php" className="text-decoration-none">
          <li className="tab-count">
            <div className="count-num-tab flex-shrink-0 me-2">2</div>

            <p className="mb-0">Deployment</p>
          </li>
        </a>

        <a href="create-campaign_2.php" className="text-decoration-none">
          <li className="tab-count">
            <div className="count-num-tab flex-shrink-0 me-2">3</div>

            <p className="mb-0">Requirements</p>
          </li>
        </a>

        <a href="create-campaign_3.php" className="text-decoration-none">
          <li className="tab-count">
            <div className="count-num-tab flex-shrink-0 me-2">4</div>

            <p className="mb-0">Results</p>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default TabsInc;
