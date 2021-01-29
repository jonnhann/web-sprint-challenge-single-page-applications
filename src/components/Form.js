import React, {useState, useEffect} from "react";
import * as yup from "yup";
import axios from "axios"
import {useForm} from 'react-hook-form';


export default function PizzaForm(){
  
    const {register, handleSubmit, errors } = useForm();
    const [post, setPost] = useState([]);
  

    const defaultState = {
        name: "",
        size: "",
        olive:"",
        beef:"",
        onion:"",
        ham:"",
    };

    


    const formSubmit = e =>{
        console.log ("form submitted!")
        axios
        .post("https://reqres.in/api/users", e)
        .then(response => {
            console.log(response)
            setPost([...post, response.data]);
        
        })
        .catch(err => console.log(err.response))
    };




  
    


    return(

        <form onSubmit = {handleSubmit(formSubmit)}>
            <label htmlFor = "name">
                Name
                </label>
                <input ref={register({required: true, minLength: 2})} type="text" name="name" data-cy="name"
                 
                 value={post.name}
                 />
               {errors.name && <p>Please enter your name</p>}
                 <br></br>
            
  

            <label htmlFor = "size">
                Size
                </label>
                <select ref={register} name = "size" >
                    <option value = "Small">Small</option>
   
                    <option value = "Medium">Medium</option>
                  
                    <option value = "Large">Large</option>
                </select>
                <br></br>
 

            <label htmlFor='toppings' className='toppings'>Toppings:  <br></br></label>
            <label  htmlFor = "olive" className="olive" data-cy="olive">
                <input  ref={register} type="checkbox" name="olive"  />
                Olives
            </label>

            <label htmlFor = "beef" className="beef" data-cy='beef'>
                 <input ref={register} type="checkbox" name="beef" />
                 Beef
            </label>

            <label htmlFor = "onion" className="onion" data-cy='onion'>
                <input ref={register} type="checkbox" name="onion" />
                Onions
            </label>

            <label htmlFor = "ham" className="ham" data-cy='ham'>
                <input ref={register} type="checkbox" name="ham" />
                Ham <br></br>
            </label>
            <label htmlFor = 'instructions' data-cy='instructions'>Special Instructions<br></br></label>
            <input ref={register} type='text' name='instructions'></input><br></br>

            <button type="submit">
                Add to Order
            </button>

            <pre>{JSON.stringify(post,null,2)}</pre>
            
            


        </form>


    );
};