import React from 'react';
import { Button, ConfigProvider } from 'antd';
import s from './UserForm.module.css';
import TextField from '../TextField/TextField';

export const WithoutHookUserForm = ({users, setUsers, setAddUserForm, addUserForm }) => {


    const serialize = (event) => {
        event.preventDefault();
        const target = event.target;
        const formData = new FormData(target);
        const data = Object.fromEntries(formData);
        console.log("data", data);
        // target.reset()
        setUsers([...users, data])
        localStorage.setItem('usersData', JSON.stringify([...users, data]))
        
    };

    return (
        <div className={s.wrapper}>
            <h1>Add User</h1>
            <form className={s.input_box} onSubmit={serialize}>
                <TextField
                    name="firstname"
                    type="text"
                    required={true}
                    placeholder="First name"
                    icon='bx bxs-user'
                    autocomplete="off"
                />
                <TextField
                    name="lastname"
                    type="text"
                    required={true}
                    placeholder="Last name"
                    icon="bx bxs-user"
                />
                <TextField
                    name="email"
                    type="email"
                    required={true}
                    placeholder="Email"
                    icon="bx bxs-envelope"
                />
                <TextField
                    name="phone"
                    type="phone"
                    required={true}
                    maxLength={12}
                    placeholder="Phone Number"
                    icon="bx bxs-phone"
                />
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





// import { useForm } from 'react-hook-form';
// import { Button, ConfigProvider} from 'antd';

// import s from './UserForm.module.css'

// export const UserForm = () => {

//     const {register, handleSubmit, watch, formState:{errors}} = useForm()

//     const onSubmit = data => {console.log('data', data)}
//     console.log('watch', watch('First name'))
    

//     return(
//         <div className={s.wrapper}>
//             <form id='form' className='add_form' onSubmit={handleSubmit(onSubmit)}>
//                 <h1>Add User</h1>

//                 <div className={s.input_box}>
//                     <div className={s.input_field}>
//                     <input name="name" 
//                         type='text' 
//                         {...register('Firstname', { required: true })} 
//                         placeholder='First name' 
//                         className={errors.Firstname ? s.error : ''}
//                     />
//                         <div className={s.errors}>
//                             {errors.Firstname ? "First name number is required" : ' '}
//                         </div>
                        
//                         <i className='bx bxs-user'/>
//                     </div>
//                     <div className={s.input_field}>
//                         <input type='text' {...register('Lastname', {required: true})} placeholder='Last name' className={errors.Lastname ? s.error : ''}/>

//                         <div className={s.errors}>
//                             {errors.Lastname?.type==='required'&&"Last name number is required"}
//                         </div>
                        
//                         <i className='bx bxs-user'/>
//                     </div>
//                 </div>

//                 <div className={s.input_box}>
//                     <div className={s.input_field}>
//                         <input name="email" type='email' {...register('Email', {required: true, })} placeholder='Email' className={errors.Email ? s.error : ''}/>

//                         <div className={s.errors}>
//                             {errors.Email?.type==='required'&&"Email number is required"}
//                         </div>
                        
//                         <i className='bx bxs-envelope'/>
//                     </div>
//                     <div className={s.input_field}>
//                         <input name="phone" type='phone' {...register('PhoneNumber', {required: true, maxLength: 12})} placeholder='Phone Number' className={errors.PhoneNumber ? s.error : ' '}/>

//                         <div className={s.errors}>
//                             {errors.PhoneNumber?.type==='required'&&"Mobile number is required"}
//                             {errors.PhoneNumber?.type==='maxLength'&&"Mobile number is too much"}
//                         </div>

//                         <i className='bx bxs-phone' /> 
//                     </div>
                    
//                 </div>
                
            
                
//                 <ConfigProvider
//                     theme={{
//                     token: {
//                         colorPrimary: '#c118ff',
//                         fontSize: 16
//                     },
//                     }}
//                 >
                 

//                 <div className={s.btn}>
//                      <Button type="primary" htmlType="submit">Sumbit</Button>
//                      <Button htmlType="button" >Reset</Button>
//                 </div>

//                 </ConfigProvider>
//             </form>
//         </div>
//     )
    
// }




// import { useState } from "react"
// import { Button, Input, Select, Space } from 'antd';

// import s from './UserForm.module.css'

// export const UserForm = () => {

//     const [email, setEmail] = useState('')
//     const [name, setName] = useState('')
//     const [surname, setSurname] = useState('')

//     const [emailDirty, setEmailDirty] = useState(false)
//     const [nameDirty, setNameDirty] = useState(false)
//     const [surnameDirty, setSurnameDirty] = useState(false)

//     const [emailError, setEmailError] = useState('Email не может быть пустым')
//     const [nameError, setNameError] = useState('Имя не может быть пустым')
//     const [surnameError, setSurnameError] = useState('Фамилия не может быть пустым')

//     const emailHandler = (e) => {
//         setEmail(e.target.value)
//         const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//         if (!re.test(String(e.target.value).toLowerCase())){
//             setEmailError("Некорректный email")
//         }
//         else {
//             setEmailError("")
//         }
//     }

//     const blurHandler = (e) => {
//         switch(e.targe.name){
//             case 'email':
//                 setEmailDirty(true)
//                 break
//             case 'name': 
//                 setNameDirty(true)
//                 break
//             case 'surname':
//                 setSurnameDirty(true)
//                 break
//         }
//     }

   



//     return(
//         <div className={s.addform}>
//             <form>
//                 <h1>Add new user</h1>

//                 {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
//                 <Input className={s.input} value={email} onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} name='email' type='text' placeholder="Enter your email...."/>

//                 {(nameDirty && nameError) && <div style={{color:'red'}}>{nameError}</div>}
//                 <Input className={s.input} value={name} onBlur={e => blurHandler(e)} name='name' type='text' placeholder="Enter your name...."/>

//                 {(surnameDirty && surnameError) && <div style={{color:'red'}}>{surnameError}</div>}
//                 <Input className={s.input} value={surname} onBlur={e => blurHandler(e)} name='surname' type='text' placeholder="Enter your surname..."/>

//                     <Select placeholder="Select a option">
//                         <option value="male">male</option>
//                         <option value="female">female</option>
//                     </Select>
                

//                 <div className={s.btn}>
//                     <Button type="primary" htmlType="submit">Sumbit</Button>
//                     <Button htmlType="button">Reset</Button>
//                 </div>
                
//             </form>
//         </div>
//     )
    
// }



