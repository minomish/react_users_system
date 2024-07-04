import React from 'react';
import s from './Table.module.css';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'

export const Table = ({ users, onDeleteUser, onEditUser }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <h1>User table</h1>
        
        <div className={s.searchBar}>
          <input type="text" placeholder="Search User..." />
          <button className={s.btn}>Search</button>
          <a href="/create" className={s.btn}>Add User</a>
        </div>
      </div>
      <table className={s.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Skills</th>
            <th>Gender</th>
            <th>Registration date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.skills}</td>
              <td>{user.gender}</td>
              <td>{user.reg_date}</td>
              <td className={s.actionIcons}>
                <EditOutlined onClick={() => onEditUser(user.id)} />
                <DeleteOutlined onClick={()=> {
                  onDeleteUser(user.id)
                }}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
