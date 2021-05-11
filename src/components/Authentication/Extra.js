// import React, { useRef } from "react";
// import { useForm } from "react-hook-form";

// const Extra = () => {
//     const { register, formState: { errors }, handleSubmit, watch } = useForm({});
//     const password = useRef({});
//     password.current = watch("password", "");
//     const onSubmit = async data => {
//         alert(JSON.stringify(data));
//     };
//     return (
//         <form onClick={handleSubmit(onSubmit)}>
//             <label>Password</label>
//             <div>
//                 <input
//                     name="password"
//                     type="password"
//                     {...register("password", {
//                         required: true, minLength: {
//                             value: 8,
//                             message: "Password must have at least 8 characters"
//                         }
//                     })}
//                 />
//                 {errors.password && <p>{errors.password.message}</p>}
//             </div>


//             <div>
//                 <input
//                     name="password_repeat"
//                     type="password"
//                     {...register("password_repeat", {
//                         required: true, validate: value =>
//                             value === password.current || "The passwords do not match"
//                     })}
//                 />
//                 {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
//             </div>
//             {/* <label>Repeat password</label> */}
//             {/* <input
//                 name="password_repeat"
//                 type="password"
//                 ref={register({
//                     validate: value =>
//                         value === password.current || "The passwords do not match"
//                 })}
//             /> */}
//             {/* {errors.password_repeat && <p>{errors.password_repeat.message}</p>} */}

//             <input type="submit" />
//         </form>
//     );
// };

// export default Extra;