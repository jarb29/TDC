import { useForm, $Form, $Number, $Text, $Select, $Password, $Button, CustomField, Valid, Invalid  } from '@tdc-cl/x-form';
// import { createTodo, getTodos } from '../api/todos-api'
import { useAuth0 } from "@auth0/auth0-react";
// import { FeedContent } from 'semantic-ui-react';


function MyLoginFormComponent() {

    const {
        user,
        isAuthenticated,
        returnTo,
        loginWithRedirect,
        logout,
      } = useAuth0();

    const $Edad = CustomField.extends($Number).with({
        validate(value) {
            /* Remember to put the ^ and $ in your regex */
            if (value <18) {
                return Invalid("Lo siento pero debes ser mayor de 18");
            }
            return Valid(value);
        }
    });
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const $Email = CustomField.extends($Text).with({
        validate(value) {
            if (!emailRex.test(value)) {
                return Invalid('Invalid email address');
            } 
            return Valid(value);
        }
    });

    const $RepeatPassword = CustomField.extends($Password).with({
        label: 'Repetir Contraseña',

        validate(value) {
            const { password } = form.fields;
            if (!password.is(value)) {
                return Invalid('Passwords do not match');
            }
            return Valid(value);
        },
    });

    const classNames = {
        FieldContainer: 'form-group',
        Label: 'mb-1',
        Optional: 'text-gray-600',
        Input: 'form-control',
        Error: 'text-red-500 semibold',
    }

    const form = useForm($Form({
        fields: {
            
            first_name: $Text('Nombre').with({
                classNames
            }),
            last_name: $Text('Apellido').with({
                classNames
            }),
            age: $Edad('Edad').with({
                classNames
            }),
            num_children: $Number('Numero de Hijos').with({
                classNames
            }),
            email: $Email('Email').with({
                classNames
            }),
            gender: $Select('Gender').with({
                options: [
                    { value: 'F', label: 'Femenino' },
                    { value: 'M', label: 'Masculino' },
                    { value: 'X', label: 'Otro (especifique)' },
                ], 
                classNames
              }),
            gender_specify: $Text('Especifique genero)').with({
                classNames
            }),
            password: $Password('Clave').with({
                classNames}),

            repeatPass: $RepeatPassword().with({
                classNames
            })
        },

        submit: $Button('Crear cuenta', {

             async onValid(values) {
                // make a request to your endpoint he   

                console.log(values , "los valores antes")
                function values_new(values) {
                    let result;
                    if (values.gender.value !== "X") {
                      result = {
                        "first_name": values.first_name,
                        "last_name": values.last_name,
                        "age": values.age,
                        "num_children": values.num_children,
                        "gender": values.gender, // "F": femenino, "M": masculino, o "X": otro (especifique)
                        "email": values.email,
                        "password": values.password
                    }
                    } else {
                      result = {
                        "first_name": values.first_name,
                        "last_name": values.last_name,
                        "age": values.age,
                        "num_children": values.num_children,
                        "gender": values.gender, // "F": femenino, "M": masculino, o "X": otro (especifique)
                        "gender_specify": values.gender_specify,
                        "email": values.email,
                        "password": values.password
                    }
                    }
                    return result;
                  }
                let new_values = values_new(values)

            try {
                const response = await fetch('http://.../api/sign-up/',  {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(new_values),
                });
                
                // then do whatever you want with the response
                response.then(res => console.log(res))
                
            } catch { 
                alert('200', "esta alerta es generada en el error")
            };
        
              },
              onInvalid: 'disable',
        }),
    }));
    return form.render();
}

export default MyLoginFormComponent;