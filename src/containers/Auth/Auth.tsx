import React, { useState } from 'react';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import { validate } from '../../form/FormFramework';
import styles from './Auth.module.scss';

const Auth = () => {

  const [ controls, setControls ] = useState<object>( {
    email: {
      value: '',
      type: 'email',
      label: 'Email',
      errorMessage: 'Write Correct Email',
      valid: false,
      touched: false,
      validation: {
        required: true,
        email: true
      }
    },
    password: {
      value: '',
      type: 'password',
      label: 'Password',
      errorMessage: 'Write Correct Password',
      valid: false,
      touched: false,
      validation: {
        required: true,
        minLength: 6
      }
    }
  } );
  const [ isFormValid, setIsFormValid ] = useState<boolean>( false );

  const handlerLogin = (): void => {

  };

  const handlerRegistration = (): void => {

  };

  const handlerChange = ( event, name ): void => {
    const control = { ...controls.[ name ] };
    control.touched = true;
    control.value = event.target.value;
    control.valid = validate( control.value, controls.[ name ].validation );

    let isValid = true;
    Object.keys( controls ).forEach( name => isValid = controls.[ name ].valid && isValid );

    setControls( prevState => ( { ...prevState, [ name ]: control } ) );
    setIsFormValid( isValid );
  };

  const renderInputs = () => {
    return Object.keys( controls ).map( ( name, index ) => {
      const input = controls.[ name ];
      return (
        <Input
          key={name + index}
          type={input.type}
          label={input.label}
          errorMessage={input.errorMessage}
          value={input.value}
          valid={input.valid}
          touched={input.touched}
          shouldValidate={!!input.validation}
          onChange={() => handlerChange( event, name )}
        />
      );
    } );
  };

  return (
    <div className={styles.Auth}>
      <div>
        <h1>Authorization</h1>

        <form className={styles.AuthForm}>
          {renderInputs()}
          <Button
            type="success"
            onClick={handlerLogin}
            disabled={!isFormValid}
          >LogIn</Button>
          <Button
            type="primary"
            onClick={handlerRegistration}
          >Registration</Button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
