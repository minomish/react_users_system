import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Button, ConfigProvider, message } from 'antd';
import s from './UserForm.module.css';
import TextField from '../TextField/TextField';


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;

export const UserForm = ({users, setUsers,initialData, isEditing}) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [selectData, setSelectData] = useState(initialData || {})

    const serialize = (data) => {
        if(isEditing){
            const updateUsers = users.map((user)=> user.id === initialData.id ? {...user, ...data} : user)
            console.log("data on edit", data)
            setUsers(updateUsers)
            localStorage.setItem('usersData', JSON.stringify(updateUsers))
        }else{
            data.id = Math.random().toString(36).substring(2,12+2);
            console.log("data", data);
            setUsers([...users, data])
            localStorage.setItem('usersData', JSON.stringify([...users, data]))
        }
        
    }
    
    console.log("errors", errors);

    const handleChange = (event) => {
        const target = event.target;
        console.log("target", event.target)
        const {name, value} = target
        setSelectData({...selectData, [name]: value})

        // const formData = new FormData(target);
        // const data = Object.fromEntries(formData);
    }


    return (
        <div className={s.wrapper}>
            <h1>{isEditing ? "Edit User" : "Add User"}</h1>
            <form id='form' className={s.input_box} onSubmit={handleSubmit(serialize)}>
                <TextField
                    name="firstname"
                    type="text"
                    register={register}
                    rules={{required: "First name is required!"}}
                    errors={errors}
                    placeholder="First name"
                    icon='bx bxs-user'
                    autocomplete="off"
                    value={selectData.firstname}
                    onChange={handleChange}
                />
                <TextField
                    name="lastname"
                    type="text"
                    register={register}
                    rules={{required: "Last name is required!"}}
                    errors={errors}
                    placeholder="Last name"
                    icon="bx bxs-user"
                    value={selectData.lastname}
                    onChange={handleChange}
                    
                />
            
                <TextField
                    name="email"
                    register={register}
                    rules={{required: "Email is required!",pattern: {value: emailRegex, message: "Email format is not respected!" }}}
                    errors={errors}
                    placeholder="Email"
                    icon="bx bxs-envelope"
                    value={selectData.email}
                    onChange={handleChange}
                />
                <TextField
                    name="phone"
                    register={register}
                    rules={{required: "Phone number is required!", pattern: {value:phoneRegex, message: "Phone format is not respected!"}}}
                    errors={errors}
                    placeholder="Phone Number"
                    icon="bx bxs-phone"
                    value={selectData.phone}
                    onChange={handleChange}
                />
                <TextField
                    name="skills"
                    register={register}
                    rules={{required: "Skills is required!"}}
                    errors={errors}
                    placeholder="Skills"
                    icon="bx bxs-user-rectangle"
                    value={selectData.skills}
                    onChange={handleChange}
                />
                
                {/* <RadioField
                    name="gender"
                    options={[
                        { label: 'Male', value: 'male' },
                        { label: 'Female', value: 'female' },
                        { label: 'Other', value: 'other' }
                    ]}
                    register={register}
                    errors={errors}
                    selectedValue={selectData.gender}
                    onChange={handleChange}
                />  */}


                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#c118ff',
                            fontSize: 16
                        },
                    }}
                >
                    <div className={s.btn}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                        <Button htmlType="reset">Reset</Button>
                    </div>
                </ConfigProvider>
            </form>
        </div>
    );
};




//второй способ сохранений данных в localstorage
   // const serialize = (data) => {
    //     data.id = Math.random().toString(36).substring(2,12+2);
    //     console.log("data", data);
    //     // event.preventDefault();
    //     // const target = event.target;
    //     // const formData = new FormData(target);
    //     // const data = Object.fromEntries(formData);
    //     // console.log("data", data);
    //     // // target.reset()
    //     setUsers([...users, data])
    //     localStorage.setItem('usersData', JSON.stringify([...users, data]))

    //     // setShowAlert(true);
// }

