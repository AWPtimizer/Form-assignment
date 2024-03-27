import React, { useContext } from 'react'
import { UserInfo } from '../states/UserInfoContext';

function Form() {
  const { username, email } = useContext(UserInfo);
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="bg-gray-900 p-4 rounded text-white flex flex-col justify-center items-start">
        <h2 className="text-xl font-bold">Username: {username}</h2>
        <h2 className="text-xl font-bold">Email: {email}</h2>
      </div>
    </div>
  )
}

export default Form
