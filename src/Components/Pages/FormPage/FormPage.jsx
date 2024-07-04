import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import s from './FormPage.module.css';
import { UserForm } from '../../UserForm/UserForm';

export const FormPage = ({ users, setUsers, isEditing }) => {

  const {id} = useParams()

  const [initialData, setInitialData] = useState (()=>{
    if(id && isEditing){
      return users.find((user)=>user.id === id)
    }
  })

  return (
    <div className={s.formpage}>
      <UserForm
        users={users}
        setUsers={setUsers}
        initialData={initialData}
        isEditing={isEditing}
      />
    </div>
  )
}
