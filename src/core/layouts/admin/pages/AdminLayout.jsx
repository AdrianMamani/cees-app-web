import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../components/AdminSidebar'

const AdminLayout = () => {
  return (
    <div className='flex h-screen bg-gray-50'>
        <div className='hidden lg:block lg:w-60'>
            <AdminSidebar />
        </div>

        <main className='flex-1 flex flex-col min-h-screen'>
            <div className='flex-1 overflow-auto'>
                <div className='max-w-7xl mx-auto p-4 sm:p-6 lg:p-2'>
                    <Outlet />
                </div>
            </div>    
        </main>
    </div>
  )
}

export default AdminLayout