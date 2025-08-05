import Sider from 'antd/es/layout/Sider';
import logo from '../../../../assets/logo-cees.svg';
import { Link, useLocation } from 'react-router-dom'
import { PiChalkboardTeacherFill, PiStudentFill } from 'react-icons/pi';
import { MdAssignmentAdd } from 'react-icons/md';
import { LuContactRound, LuGraduationCap, LuLogOut } from 'react-icons/lu';

const AdminSidebar = () => {
    const location = useLocation();

    const menuItems = [
        { path: "/admin/courses", label: "Cursos", icon: <LuGraduationCap /> },
        { path: "/admin/teachers", label: "Profesores", icon: <PiChalkboardTeacherFill /> },
        { path: "/admin/students", label: "Estudiantes", icon: <PiStudentFill /> },
        { path: "/admin/assigments", label: "Asignaciones", icon: <MdAssignmentAdd /> },
        { path: "/admin/profile", label: "Perfil", icon: <LuContactRound /> }
    ];

    return (
        <Sider
            width={250}
            className="bg-white text-gray-800 shadow-md"
            placement="left"
            breakpoint='lg'
            trigger={null}
            collapsible
            style={{ position: 'fixed', height: '100vh', left: 0, top: 0, zIndex: 1000 }}
            closable={false}
            open={true}
            onClose={() => {}}
            theme="light"
        >
            <div className='flex items-center justify-center h-50 text-lg p-10'>
                <img src={logo} alt="Logo CEES" />
            </div>
            <nav className='m-4'>
                <ul className='space-y-2'>
                    {menuItems.map(({ path, label, icon }) => (
                        <li key={path} className={`rounded-lg ${location.pathname === path ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"}`}>
                            <Link
                                to={path}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200"
                            >
                                <span className="text-gray-500 flex items-center gap-2">
                                    {icon} {label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className="mt-4 border-t pt-2">
                    <li className="hover:bg-gray-100 rounded-lg">
                    <Link to="/logout" className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-gray-700">
                        <LuLogOut /> Cerrar Sesión
                    </Link>
                    </li>
                </ul>
            </nav>
        </Sider>
    )
}

export default AdminSidebar