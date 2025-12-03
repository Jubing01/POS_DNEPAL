//@ts-nocheck
'use client'

import { useState } from "react"

export default function (){
    
    const [Npassword, setNpassword] = useState("")
    const [Cpassword, setCpassword] = useState("")

    const handleLogin = event => {
        event.preventDefault()
        console.log(Npassword, Cpassword)
    }

    return(
            <div className="min-h-screen flex items-center justify-center bg-gray-300">
                <div className="bg-white p-8 rounded-xl shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center mb-3">
                    Reset Password
                </h2>
                <p className="text-sm text-gray-600 text-center mb-6">
                    Enter your new password below.
                </p>

                <form className="space-y-5" onSubmit={handleLogin}>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-gray-700"> New Password </label>
                        <input
                            type="password"
                            name="new_password"
                            placeholder="Enter new password"
                            required onChange={(event) => setNpassword(event.target.value)}
                            className="border border-gray-400 rounded-lg px-3 py-2 
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-gray-700"> Confirm Password </label>
                        <input
                            type="password"
                            name="confirm_password"
                            placeholder="Confirm your password"
                            required onChange={(event) => setCpassword(event.target.value)}
                            className="border border-gray-400 rounded-lg px-3 py-2 
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                        Reset Password
                    </button>
                </form>

                <div className="text-center mt-4">
                    <a href="/login" className="text-blue-600 text-sm hover:underline">Back to Login</a>
                </div>
            </div>
            </div>
    )
}