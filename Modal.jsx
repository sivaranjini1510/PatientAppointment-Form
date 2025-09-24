import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, formData }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Modal Header */}
        <div className="modal-header">
          <h2 className="modal-title">Appointment Details</h2>
          <button onClick={onClose} className="modal-close-btn">
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div className="modal-content">
          <div className="modal-grid">
            <div className="modal-section">
              <div className="section-group">
                <h3 className="section-title">Patient Information</h3>
                <div className="info-card">
                  <div className="info-row">
                    <span className="info-label">Name:</span>
                    <span className="info-value">{formData.patientName || 'Not provided'}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Gender:</span>
                    <span className="info-value">{formData.gender || 'Not specified'}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Email:</span>
                    <span className="info-value">{formData.email || 'Not provided'}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Phone:</span>
                    <span className="info-value">{formData.countryCode} {formData.phone || 'Not provided'}</span>
                  </div>
                </div>
              </div>

              <div className="section-group">
                <h3 className="section-title">Appointment Details</h3>
                <div className="info-card">
                  <div className="info-row">
                    <span className="info-label">Date:</span>
                    <span className="info-value">{formData.date || 'Not selected'}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Time Range:</span>
                    <span className="info-value">{formData.timeRange}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Doctor:</span>
                    <span className="info-value">{formData.doctor || 'Not selected'}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Priority:</span>
                    <span className="info-value">{formData.appointmentPriority || 'Not specified'}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Live Consultant:</span>
                    <span className="info-value">{formData.liveConsultant || 'Not specified'}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Status:</span>
                    <span className="info-value">{formData.status || 'Not specified'}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Nurse:</span>
                    <span className="info-value">{formData.nurse || 'Not assigned'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-section">
              <div className="section-group">
                <h3 className="section-title">Case Information</h3>
                <div className="info-card">
                  <div className="info-row">
                    <span className="info-label">Case ID:</span>
                    <span className="info-value case-id">{formData.caseId}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Encounter ID:</span>
                    <span className="info-value case-id">{formData.encounterId}</span>
                  </div>
                </div>
              </div>

              <div className="section-group">
                <h3 className="section-title">Payment Information</h3>
                <div className="info-card">
                  <div className="info-row">
                    <span className="info-label">Payment Mode:</span>
                    <span className="info-value">{formData.paymentMode}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Payment Status:</span>
                    <span className={`status-badge ${getStatusClass(formData.paymentStatus)}`}>
                      {formData.paymentStatus || 'Not specified'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="success-message">
                <div className="success-content">
                  <p className="success-title">
                    <strong>Appointment Created Successfully!</strong>
                  </p>
                  <p className="success-text">
                    All appointment details have been saved to the system. The patient will receive a confirmation email shortly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button onClick={onClose} className="modal-close-button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const getStatusClass = (status) => {
  switch (status) {
    case 'Paid':
      return 'status-paid';
    case 'Pending':
      return 'status-pending';
    case 'Partial':
      return 'status-partial';
    case 'Cancelled':
      return 'status-cancelled';
    default:
      return 'status-default';
  }
};

export default Modal;
