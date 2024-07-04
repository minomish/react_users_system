// import React from 'react';
// import s from './TextField.module.css';

// const TextField = (props) => {
//     const {name, type, required, placeholder, icon, autocomplete} = props;

//     return (
//         <div className={s.input_field}>
//             <input
//                 name={name}
//                 type={type}
//                 placeholder={placeholder}
//                 autoComplete={autocomplete}
//             />
            
//             <i className={icon} />
//         </div>
//     );
// };

// export default TextField;






//валидация реализованная через хук React Hook Form, для UserForm

// import React from 'react';
// import s from './TextField.module.css';

// const TextField = ({ name, type, register, rules={}, errors, placeholder, icon, autocomplete }) => {

//     return (
//         <div className={s.input_field}>
//             <input
//                 name={name}
//                 type={type}
//                 {...register(name, { ...rules })}
//                 placeholder={placeholder}
//                 autoComplete={autocomplete}
//                 className={errors[name] ? s.error : ''}
                
//             />
//             <div className={s.errors}>
//                 {/* {errors[name]?.type === 'required' && `${placeholder} is required`} */}
//                 {errors[name]?.message}
//             </div>
//             <i className={icon} />
//         </div>
//     );
// };

// export default TextField;


import React from 'react';
import s from './TextField.module.css';

const TextField = ({ name, type, register, rules={}, errors, placeholder, icon,autocomplete, value, onChange }) => {
  return (
    <div className={s.input_field}>
      <input
        name={name}
        type={type}
        {...register(name, { ...rules })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={errors[name] ? s.error : ''}
      />
      <div className={s.errors}>
        {errors[name]?.message}
      </div>
      <i className={icon} />
    </div>
  );
};

export default TextField;






// с использованием handleAddFormChange    ( //второй способ сборки объекта) 

// import React from 'react';
// import s from './TextField.module.css';

// const TextField = (props) => {
//     const {name, type, required, placeholder, icon, autocomplete, handleAddFormChange} = props;

//     return (
//         <div className={s.input_field}>
//             <input
//                 name={name}
//                 type={type}
//                 placeholder={placeholder}
//                 autoComplete={autocomplete}
//                 onChange={handleAddFormChange}
//             />
            
//             <i className={icon} />
//         </div>
//     );
// };

// export default TextField;
