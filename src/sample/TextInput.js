import React from 'react'
import TextInputCustom from '../common/component/text-input/TextInputCustom'

const TextInput = () => {
  return (
    <>
     <TextInputCustom
        placeholder={'Enter Full Name'}
        label={"Full Name"}
      />
      <TextInputCustom
        placeholder={'Eg: satendrasahani19@gmail.com'}
        name="email"
        errors={{email:true}}
        label={"Email Address"}
        keyboardType='email-address'
      />
       <TextInputCustom
        placeholder={'Eg: 8573890224'}
        name="number"
        label={"Mobile Number"}
        keyboardType='phone-pad'
      />
      <TextInputCustom
        placeholder={'*************'}
        label={"Password"}
        secureTextEntry={true}
      />
       <TextInputCustom
        placeholder={'*************'}
        label={"Confirm Password"}
        secureTextEntry={true}
      />
    </>
  )
}

export default TextInput