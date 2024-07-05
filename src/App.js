import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from './Components/Pages/ErrorPage/ErrorPage';
import { FormPage } from './Components/Pages/FormPage/FormPage';
import { TablePage } from './Components/Pages/TablePage/TablePage';
import { MainPage } from './Components/Pages/MainPage/MainPage';
import { tableData } from './tableData';
import { Modal } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import s from './styles/App.css'

function App() {

  let localStorageData = JSON.parse(localStorage.getItem('usersData'))

  if(!localStorageData){
    localStorageData = tableData
    localStorage.setItem('usersData', JSON.stringify(localStorageData));
  }
  
  const [users, setUsers] = useState(localStorageData)
  const [isEditing, setIsEditing] = useState(false)
  console.log("test")
  const onDeleteUser = (id) => {
    Modal.confirm({
      title:"Are you sure?",
      okText: 'Yes',
      okType: 'danger',
      icon: <ExclamationCircleOutlined />,
      onOk:()=>{let localStorageData2 = users.filter((user)=> user.id !== id)
        setUsers(localStorageData2)
        localStorageData = localStorage.setItem('usersData', JSON.stringify(localStorageData2))},
    })
  }

  const pages = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: "/",
          element: (
            <FormPage
              users={users}
              setUsers={setUsers}
            />
          ),
        },
        {
          path: "/create",
          element: (
            <FormPage
              users={users}
              setUsers={setUsers}
            />
          ),
        },
        {
          path: "/two",
          element: <TablePage 
              users={users}
              setUsers={setUsers}
              onDeleteUser={onDeleteUser}
          />,
        },
        {
          path: "/edit/:id",
          element: <FormPage 
            users={users}
            setUsers={setUsers}
            isEditing={true}
          />,
        },
        {
          path: "/edit",
          element: <ErrorPage 
            isEditing={true}
          />,
        },
      ],
    },
  ])

  return <div className='App'>
            <RouterProvider router={pages} />
        </div>;
}

export default App;

  // const handleAddFormChange = (e) => {                 //второй способ сборки объекта
  //   e.preventDefault();
  //   const fieldName = e.target.getAttribute('name');
  //   console.log('fieldName', fieldName)
  //   const fieldValue = e.target.value;
  //   console.log('fieldValue', fieldValue)
  //   const newFormData = { ...addFormData }; 
  //   console.log('newFormData', newFormData)
  //   newFormData[fieldName] = fieldValue;
  //   console.log('newFormData', newFormData)
  //   setAddFormData(newFormData);
  // }
 

  // const addUser = () => {
  //   const newUsers = [...users, addFormData];
  //   setUsers(newUsers);
  //   localStorage.setItem('userData', JSON.stringify(newUsers));
  // }

// const addData = (newData) => {
//   const storedUserData = localStorage.getItem('userData');
//   const parsedUserData = JSON.parse(storedUserData)
  
//   const initialUser = parsedUserData ? [...tableData, parsedUserData] : tableData;
//   parsedUserData.push(newData);
//   localStorage.setItem('userData', JSON.stringify(initialUser));
// }
 


// const App = () => {     

//   return (      //второй способ составление пути
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MainPage />} >
//             <Route index element={<div>No page is selected.</div> } />
//             <Route path="one" element={<FormPage />} />
//             <Route path="two" element={<TablePage />} />
//             <Route path="error" element={<ErrorPage/>} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
    
//   );
// }

// export default App;





