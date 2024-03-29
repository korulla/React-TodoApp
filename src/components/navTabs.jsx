export function NavTabs({ activeTab, setActiveTab }) {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === "all" ? "active" : ""}`}
            onClick={() => handleTabClick("all")}
            id="ex1-tab-1"
            data-mdb-toggle="tab"
            href="#ex1-tabs-1"
            role="tab"
            aria-controls="ex1-tabs-1"
            aria-selected="true"
          >
            All
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === "active" ? "active" : ""}`}
            onClick={() => handleTabClick("active")}
            id="ex1-tab-2"
            data-mdb-toggle="tab"
            href="#ex1-tabs-2"
            role="tab"
            aria-controls="ex1-tabs-2"
            aria-selected="false"
          >
            Active
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${activeTab === "completed" ? "active" : ""}`}
            onClick={() => handleTabClick("completed")}
            id="ex1-tab-3"
            data-mdb-toggle="tab"
            href="#ex1-tabs-3"
            role="tab"
            aria-controls="ex1-tabs-3"
            aria-selected="false"
          >
            Completed
          </a>
        </li>
      </ul>
    </div>
  );
}
