'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const dummyMeetings = [
  {
    id: 1,
    attendees: [
      { name: 'Ana Smith', avatar: '/assets/img/avatars/2.png' },
      { name: 'John Doe', avatar: '/assets/img/avatars/3.png' },
    ],
    date: '2024-07-25T10:00:00Z',
    outcome: 'Discussed potential collaboration on a new project. Agreed on next steps.',
    referencesGiven: 2,
    referralsReceived: 1,
    status: 'Completed',
  },
  {
    id: 2,
    attendees: [
      { name: 'Peter Jones', avatar: '/assets/img/avatars/4.png' },
      { name: 'Mary Jane', avatar: '/assets/img/avatars/5.png' },
    ],
    date: '2024-07-28T14:30:00Z',
    outcome: 'Scheduled follow-up call to finalize details.',
    referencesGiven: 1,
    referralsReceived: 3,
    status: 'Scheduled',
  },
  {
    id: 3,
    attendees: [
      { name: 'Sam Wilson', avatar: '/assets/img/avatars/6.png' },
      { name: 'Bucky Barnes', avatar: '/assets/img/avatars/7.png' },
    ],
    date: '2024-07-22T09:00:00Z',
    outcome: 'Meeting was canceled due to a scheduling conflict.',
    referencesGiven: 0,
    referralsReceived: 0,
    status: 'Canceled',
  },
  {
    id: 4,
    attendees: [
      { name: 'Natasha Romanoff', avatar: '/assets/img/avatars/8.png' },
      { name: 'Ana Smith', avatar: '/assets/img/avatars/2.png' },
    ],
    date: '2024-07-26T11:00:00Z',
    outcome: 'Shared industry insights and explored partnership opportunities.',
    referencesGiven: 5,
    referralsReceived: 2,
    status: 'Completed',
  },
];

export default function MeetingsPage() {
  const [meetings, setMeetings] = useState(dummyMeetings);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-label-success';
      case 'Scheduled':
        return 'bg-label-info';
      case 'Canceled':
        return 'bg-label-danger';
      default:
        return 'bg-label-secondary';
    }
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">
          <span className="text-muted fw-light">Dashboard /</span> Meetings
        </h4>
        <button className="btn btn-primary">
          <i className="ri-add-line me-1"></i> Schedule a Meeting
        </button>
      </div>

      <div className="card">
        <h5 className="card-header">One-to-One Meetings</h5>
        <div className="table-responsive text-nowrap">
          <table className="table">
            <thead>
              <tr>
                <th>Attendees</th>
                <th>Date</th>
                <th>Outcome</th>
                <th>Business</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {meetings.map((meeting) => (
                <tr key={meeting.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-group">
                        {meeting.attendees.map((att, index) => (
                          <div key={index} className="avatar pull-up" title={att.name}>
                            <Image src={att.avatar} alt="Avatar" width={32} height={32} className="rounded-circle" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td>{new Date(meeting.date).toLocaleString()}</td>
                  <td><span className="text-truncate d-inline-block" style={{maxWidth: '250px'}}>{meeting.outcome}</span></td>
                  <td>
                    <div>Given: <span className="fw-medium">{meeting.referencesGiven}</span></div>
                    <div>Received: <span className="fw-medium">{meeting.referralsReceived}</span></div>
                  </td>
                  <td><span className={`badge ${getStatusBadge(meeting.status)}`}>{meeting.status}</span></td>
                  <td><a href="#" className="btn btn-sm btn-text-secondary"><i className="ri-more-2-line"></i></a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
