
import { UserForm } from "../../UserForm/UserForm"
import s from './ErrorPage.module.css'


export const ErrorPage = ({isEditing}) =>{

  return (
    <div className={s.wrapper}>
      <UserForm
         isEditing={true}
      />
    </div>
  )
}

