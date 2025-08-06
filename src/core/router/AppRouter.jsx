import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentLayout from '../layouts/student/pages/StudentLayout'
import ProfilePage from '../../modules/student/profile/pages/ProfilePage.jsx'
import PendingTasksPage from '../../modules/student/pending-tasks/pages/PendingTasksPage';
import PendingTaskDetailPage from '../../modules/student/pending-tasks/pages/PendingTaskDetailPage';
import CoursesPage from '../../modules/student/courses/pages/CoursesPage.jsx';
import CourseDetailPage from '../../modules/student/courses/pages/CourseDetailPage.jsx';
import ForumDiscussionPage from '../../modules/student/courses/pages/ForumDiscussionPage.jsx';
import DrawerQuiz from '../../modules/student/courses/components/drawer/DrawerQuiz.jsx';
import CalendarPage from '../../modules/student/calendar/pages/CalendarPage.jsx';
import CourseRecordingsPage from '../../modules/student/courses/pages/CourseRecordingsPage';
import FilePage from '../../modules/student/courses/pages/FilePage.jsx';
import TaskDetailPage from '../../modules/student/courses/pages/TaskDetailPage.jsx';
import AdminLayout from '../layouts/admin/pages/AdminLayout.jsx';
import QuizPage from '../../modules/student/courses/pages/QuizPage.jsx';
import CourseAdminPage from '../../modules/admin/courses/pages/CourseAdminPage.jsx';
import CrearProfesor from '../../modules/admin/courses/pages/crearProfesor.jsx';
import CrearEstudiante from '../../modules/admin/courses/pages/crearEstudiante.jsx';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentLayout />}>
          <Route index path="home" element={<div>Student Home Page</div>} />
          <Route path="courses" element={ <CoursesPage/>} />

          <Route path="courses/detail" element={ <CourseDetailPage/> } />
          <Route path="pending-tasks" element={<PendingTasksPage />} />
          <Route path="pending-tasks/:id" element={<PendingTaskDetailPage />} />
          <Route path="califications" element={<div>Califications Page</div>} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="calendar" element={ <CalendarPage/> } />
          <Route path="courses/detail/forum" element={ <ForumDiscussionPage/>} />
          <Route path="quiz" element={<QuizPage/>} />

          <Route path="courses/detail/file" element={<FilePage />} />
          <Route path="courses/detail/task" element={<TaskDetailPage />} />
          <Route path="courses/detail/recordings/:id" element={<CourseRecordingsPage />} />
        </Route>

        <Route path="/admin" element={ <AdminLayout/> } >

          <Route index path="home" element={<div>Admin Home Page</div>} />
          <Route path="courses" element={<CourseAdminPage/>} />

          <Route path="teachers" element={<CrearProfesor/>} />
          <Route path="students" element={<CrearEstudiante/>} />


          <Route path="assigments" element={<div>Admin Assigments Page</div>} />
          <Route path="profile" element={<div>Admin Profile Page</div>} />
          
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
