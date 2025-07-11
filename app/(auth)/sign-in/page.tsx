import AuthForm from '@/components/AuthForm'
import { signInSchema } from '@/lib/validation'
import React from 'react'

const page = () => {
  return (
    <AuthForm
        type="SIGN_IN"
        schema={signInSchema}
        defaultValues={{
            fullName: "",
            email: "",
            password: "",
            universityId: 0,
            universityCard: [],
        }}
        onSubmit={() => {}}
    />
  )
}

export default page
