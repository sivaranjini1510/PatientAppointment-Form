import React, { useState } from 'react';
import Modal from './Modal';
import './PatientForm.css';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    timeRange: '09:00 AM - 10:00 AM',
    patientName: '',
    gender: '',
    email: '',
    phone: '',
    countryCode: '+1 (USA)',
    doctor: '',
    appointmentPriority: '',
    liveConsultant: '',
    status: '',
    nurse: '',
    caseId: 'CAS1779344205',
    encounterId: 'ENC1779344205',
    paymentMode: 'Cash',
    paymentStatus: ''
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showDoctorDropdown, setShowDoctorDropdown] = useState(false);

  const doctors = [
    'Siva Ranjini',
    'Vimala',
    'Priya',
    'Siva Raj',
    'Nivetha',
    'Anu',
    'karthi'
  ];

  const countryCodes = [
    '+1 (USA)',
    '+44 (UK)',
    '+91 (India)',
    '+49 (Germany)',
    '+33 (France)',
    '+81 (Japan)',
    '+86 (China)'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.patientName.trim()) newErrors.patientName = 'Patient Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.doctor.trim()) newErrors.doctor = 'Doctor is required';
    if (!formData.liveConsultant.trim()) newErrors.liveConsultant = 'Live Consultant is required';

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowModal(true);
    }
  };

  const handleDoctorSelect = (doctor) => {
    setFormData(prev => ({
      ...prev,
      doctor: doctor
    }));
    setShowDoctorDropdown(false);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.doctor-dropdown-container')) {
      setShowDoctorDropdown(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="patient-form-container">
      <div className="form-wrapper">
        {/* Header */}
        <div className="form-header">
          <div className="header-left">
            <div className="select-patient-section">
              <span className="select-patient-label">Select Patient</span>
              <select className="patient-select">
                <option value="">Select Patient</option>
                <option value="john-doe">Madhesh</option>
                <option value="jane-smith">Sarath</option>
                <option value="mike-johnson">jansi</option>
                <option value="sarah-williams">Jeya</option>
              </select>
            </div>
          </div>
          <div className="header-right">
            <div className="add-patient-section">
              <span className="add-patient-label">Add New Patient</span>
              <button className="add-new-patient-btn">
                <span className="plus-icon">+</span>
                <span>New Patient</span>
              </button>
            </div>
            <button className="close-btn">
              ×
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="patient-form">
          <div className="form-grid">
            {/* First Row */}
            <div className="form-group">
              <label className="form-label">
                Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className={`form-input ${errors.date ? 'error' : ''}`}
              />
              {errors.date && <p className="error-message">{errors.date}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">
                Time Range *
              </label>
              <select
                name="timeRange"
                value={formData.timeRange}
                onChange={handleInputChange}
                className="form-input"
              >
                <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
                <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                <option value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                Patient Name *
              </label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleInputChange}
                className={`form-input ${errors.patientName ? 'error' : ''}`}
                placeholder="Enter patient name"
              />
              {errors.patientName && <p className="error-message">{errors.patientName}</p>}
            </div>

            {/* Second Row */}
            <div className="form-group">
              <label className="form-label">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="form-input"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="Enter email address"
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">
                Phone *
              </label>
              <div className="phone-input-group">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="country-code-select"
                >
                  {countryCodes.map(code => (
                    <option key={code} value={code}>{code}</option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`phone-input ${errors.phone ? 'error' : ''}`}
                  placeholder="Phone number"
                />
              </div>
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>

            {/* Third Row */}
            <div className="form-group doctor-dropdown-container">
              <label className="form-label">
                Doctor *
              </label>
              <input
                type="text"
                name="doctor"
                value={formData.doctor}
                onChange={handleInputChange}
                onFocus={() => setShowDoctorDropdown(true)}
                className={`form-input ${errors.doctor ? 'error' : ''}`}
                placeholder="Search doctor..."
              />

              {showDoctorDropdown && (
                <div className="doctor-dropdown">
                  {doctors
                    .filter(doctor =>
                      doctor.toLowerCase().includes(formData.doctor.toLowerCase())
                    )
                    .map((doctor, index) => (
                      <div
                        key={index}
                        onClick={() => handleDoctorSelect(doctor)}
                        className="doctor-option"
                      >
                        {doctor}
                      </div>
                    ))
                  }
                </div>
              )}
              {errors.doctor && <p className="error-message">{errors.doctor}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">
                Appointment Priority
              </label>
              <select
                name="appointmentPriority"
                value={formData.appointmentPriority}
                onChange={handleInputChange}
                className="form-input"
              >
                <option value="">--Select--</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                <option value="Emergency">Emergency</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                Live Consultant (On Video Conference) *
              </label>
              <select
                name="liveConsultant"
                value={formData.liveConsultant}
                onChange={handleInputChange}
                className={`form-input ${errors.liveConsultant ? 'error' : ''}`}
              >
                <option value="">--Select--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {errors.liveConsultant && <p className="error-message">{errors.liveConsultant}</p>}
            </div>

            {/* Fourth Row */}
            <div className="form-group">
              <label className="form-label">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="form-input"
              >
                <option value="">--Select--</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Confirmed">Confirmed</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                Nurse
              </label>
              <input
                type="text"
                name="nurse"
                value={formData.nurse}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter nurse name"
              />
            </div>

            <div className="form-group"></div>

            {/* Fifth Row */}
            <div className="form-group">
              <label className="form-label">
                Case ID
              </label>
              <input
                type="text"
                name="caseId"
                value={formData.caseId}
                onChange={handleInputChange}
                className="form-input readonly"
                readOnly
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Encounter ID
              </label>
              <input
                type="text"
                name="encounterId"
                value={formData.encounterId}
                onChange={handleInputChange}
                className="form-input readonly"
                readOnly
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Payment Mode
              </label>
              <select
                name="paymentMode"
                value={formData.paymentMode}
                onChange={handleInputChange}
                className="form-input"
              >
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="Insurance">Insurance</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
            </div>

            {/* Sixth Row */}
            <div className="form-group"></div>
            <div className="form-group"></div>
            <div className="form-group">
              <label className="form-label">
                Payment Status
              </label>
              <select
                name="paymentStatus"
                value={formData.paymentStatus}
                onChange={handleInputChange}
                className="form-input"
              >
                <option value="">--Select--</option>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Partial">Partial</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button type="submit" className="save-btn">
              Save
            </button>
          </div>
        </form>

        {/* Modal */}
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          formData={formData}
        />
      </div>
    </div>
  );
};

export default PatientForm;
