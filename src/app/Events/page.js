'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const dummyEvents = [
  {
    id: 1,
    title: 'Annual Tech Conference',
    date: '2024-10-26',
    location: 'Convention Center, New York',
    image: '/assets/img/backgrounds/18.jpg',
    description: 'Join us for the largest tech conference of the year. Featuring keynote speakers from top tech companies.'
  },
  {
    id: 2,
    title: 'Marketing Summit 2024',
    date: '2024-11-15',
    location: 'Grand Hall, London',
    image: '/assets/img/backgrounds/17.jpg',
    description: 'A summit for marketing professionals to discuss the latest trends and strategies in digital marketing.'
  },
  {
    id: 3,
    title: 'Product Launch Gala',
    date: '2024-12-01',
    location: 'The Waterfront, San Francisco',
    image: '/assets/img/backgrounds/2.jpg',
    description: 'An exclusive evening to celebrate the launch of our new flagship product. By invitation only.'
  },
  {
    id: 4,
    title: 'Team Building Retreat',
    date: '2025-01-20',
    location: 'Mountain Resort, Aspen',
    image: '/assets/img/backgrounds/5.jpg',
    description: 'An off-site retreat for all employees to foster collaboration and teamwork in a relaxed environment.'
  },
];

export default function EventsPage() {
  const [events, setEvents] = useState(dummyEvents);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newEventWithId = {
      ...newEvent,
      id: events.length + 1,
      image: '/assets/img/backgrounds/4.jpg', // Default image for new events
    };
    setEvents([newEventWithId, ...events]);
    // Here you would typically close the offcanvas and reset the form
    // For now, we'll let the bootstrap attributes handle closing.
    setNewEvent({ title: '', date: '', location: '', description: '' });
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="row g-4 mb-4">
        <div className="col-sm-6 col-xl-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-start justify-content-between">
                <div className="content-left">
                  <span className="fw-medium">Total Events</span>
                  <div className="d-flex align-items-end mt-2">
                    <h3 className="mb-0 me-2">{events.length}</h3>
                  </div>
                  <small>All upcoming and past events</small>
                </div>
                <span className="badge bg-label-primary rounded p-2">
                  <i className="ri-calendar-event-line ri-22px"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-9 d-flex align-items-center justify-content-end">
          {/* This button can be used to trigger a modal or navigate to a new page for adding an event */}
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#addEventOffcanvas"
            aria-controls="addEventOffcanvas"
          >
            <i className="ri-add-line me-1"></i> Add Event
          </button>
        </div>
      </div>
      <div className="row g-4">
        {events.map((event) => (
          <div key={event.id} className="col-md-6 col-lg-4">
            <div className="card">
              <Image className="card-img-top" src={event.image} alt={event.title} width={300} height={200} style={{objectFit: 'cover'}} />
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{event.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="ri-calendar-line me-2"></i>
                  {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </li>
                <li className="list-group-item">
                  <i className="ri-map-pin-line me-2"></i>
                  {event.location}
                </li>
              </ul>
              <div className="card-body">
                <a href="#" className="btn btn-outline-primary">
                  View Details
                </a>
                <a href="#" className="btn btn-text-secondary ms-2">
                  Edit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Event Offcanvas */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="addEventOffcanvas"
        aria-labelledby="addEventOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 id="addEventOffcanvasLabel" className="offcanvas-title">Add New Event</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body mx-0 flex-grow-0">
          <form className="add-new-event-form pt-0" onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="eventTitle">Event Title</label>
              <input type="text" className="form-control" id="eventTitle" name="title" value={newEvent.title} onChange={handleInputChange} placeholder="Annual Conference" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="eventDate">Date</label>
              <input type="date" className="form-control" id="eventDate" name="date" value={newEvent.date} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="eventLocation">Location</label>
              <input type="text" className="form-control" id="eventLocation" name="location" value={newEvent.location} onChange={handleInputChange} placeholder="Convention Center" required />
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="eventDescription">Description</label>
              <textarea className="form-control" id="eventDescription" name="description" rows="3" value={newEvent.description} onChange={handleInputChange}></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary me-sm-3 me-1"
              data-bs-dismiss="offcanvas"
            >
              Submit
            </button>
            <button
              type="reset"
              className="btn btn-label-secondary"
              data-bs-dismiss="offcanvas"
              onClick={() => setNewEvent({ title: '', date: '', location: '', description: '' })}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
