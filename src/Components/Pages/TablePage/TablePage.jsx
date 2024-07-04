
import { Table } from "../../Table/Table"
import s from './TablePage.module.css'
import { useNavigate } from "react-router-dom";

export const TablePage = ({users, setUsers, onDeleteUser}) => {

    const navigate = useNavigate();

    const onEditUser = (userId) => {
      navigate(`/edit/${userId}`);
    };

return(<div className={s.tablePage}>
        <Table users={users}
            setUsers={setUsers}
            onDeleteUser={onDeleteUser}
            onEditUser={onEditUser}
        />
      </div>
)}