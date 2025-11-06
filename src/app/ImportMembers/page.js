'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const dummyUsers = [
  {
    id: 1,
    name: 'Ana Smith',
    email: 'ana@example.com',
    mob: '123-456-7890',
    avatar: '/assets/img/avatars/2.png',
    chaptername: 'North Chapter',
    businessman: 'Yes',
    categorytype: 'Technology',
    status: 'Active',
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'john@example.com',
    mob: '234-567-8901',
    avatar: '/assets/img/avatars/3.png',
    chaptername: 'West Chapter',
    businessman: 'Yes',
    categorytype: 'Marketing',
    status: 'Pending',
  },
  {
    id: 3,
    name: 'Peter Jones',
    email: 'peter@example.com',
    mob: '345-678-9012',
    avatar: '/assets/img/avatars/4.png',
    chaptername: 'East Chapter',
    businessman: 'No',
    categorytype: 'Consulting',
    status: 'Inactive',
  },
  {
    id: 4,
    name: 'Mary Jane',
    email: 'mary@example.com',
    mob: '456-789-0123',
    avatar: '/assets/img/avatars/5.png',
    chaptername: 'South Chapter',
    businessman: 'Yes',
    categorytype: 'Finance',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Sam Wilson',
    email: 'sam.wilson@example.com',
    mob: '567-890-1234',
    avatar: '/assets/img/avatars/6.png',
    chaptername: 'North Chapter',
    businessman: 'No',
    categorytype: 'Healthcare',
    status: 'Active',
  },
  {
    id: 6,
    name: 'Bucky Barnes',
    email: 'bucky.barnes@example.com',
    mob: '678-901-2345',
    avatar: '/assets/img/avatars/7.png',
    chaptername: 'West Chapter',
    businessman: 'Yes',
    categorytype: 'Manufacturing',
    status: 'Pending',
  },
  {
    id: 7,
    name: 'Natasha Romanoff',
    email: 'natasha.r@example.com',
    mob: '789-012-3456',
    avatar: '/assets/img/avatars/8.png',
    chaptername: 'East Chapter',
    businessman: 'Yes',
    categorytype: 'Security',
    status: 'Inactive',
  },
];

export default function UsersInfoPage() {
  const [users, setUsers] = useState(dummyUsers);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleImport = (e) => {
    e.preventDefault();
    if (file) {
      console.log('Importing file:', file.name);
      // Here you would handle the file import logic,
      // e.g., using a library like xlsx to parse the Excel file
      // and then update the users state.
      // For now, we'll just log it.
      alert(`File "${file.name}" selected for import. See console for details.`);
      setFile(null);
      // You would also close the modal here.
    } else {
      alert('Please select a file to import.');
    }
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="row g-4 mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="mb-0">Users Information</h4>
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#importMembersModal"
            >
              <i className="ri-user-add-line me-1"></i> Import Members
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h5 className="card-title m-0">Members List</h5>
        </div>
        <div className="table-responsive text-nowrap">
          <table className="table">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Chapter</th>
                <th>Status</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-sm me-3">
                        <Image src={user.avatar} alt="Avatar" width={32} height={32} className="rounded-circle" />
                      </div>
                      <div>
                        <h6 className="mb-0">{user.name}</h6>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.mob}</td>
                  <td>{user.chaptername}</td>
                  <td>
                    <span className={`badge ${user.status === 'Active' ? 'bg-label-success' : user.status === 'Pending' ? 'bg-label-warning' : 'bg-label-danger'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="fw-medium">{user.categorytype}</span>
                      {user.businessman === 'Yes' && <i className="ri-briefcase-fill ri-14px text-primary ms-2" title="Businessman"></i>}
                    </div>
                  </td>
                  <td>
                    <div className="dropdown">
                      <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                        <i className="ri-more-2-line"></i>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#"><i className="ri-pencil-line me-1"></i> Edit</a>
                        <a className="dropdown-item" href="#"><i className="ri-delete-bin-7-line me-1"></i> Delete</a>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Import Members Modal */}
      {/* Add your modal HTML here, similar to the offcanvas in Events/page.js */}
      {/* This is a basic structure for the modal */}
    </div>
  );
}