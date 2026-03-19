import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const services = [
    { 
      title: "How to Apply for Learner's License", 
      icon: "👤", 
      details: ["Details", "Requirements", "Apply Link"],
      expanded: true
    },
    { title: "Apply for Permanent DL", icon: "🪪", expanded: false },
    { title: "DL Renewal Process", icon: "🔄", expanded: false },
    { title: "Book Driving Test Slot", icon: "🗓️", expanded: false },
  ];

  return (
    <aside className="sidebar">
      <h2>DRIVER'S LICENSE SERVICES</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className={`service-card ${service.expanded ? 'expanded' : ''}`}>
            <div className="service-header">
              <span className="service-icon">{service.icon}</span>
              <span className="service-title">{service.title}</span>
              <span className="arrow">›</span>
            </div>
            {service.expanded && (
              <ul className="service-details">
                {service.details.map((detail, idx) => (
                  <li key={idx}>
                    <span className="detail-icon">ℹ️</span>
                    {detail}
                    <span className="small-arrow">›</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
