import React from 'react';
import { CourseProgress } from "./CourseProgress.jsx";
import { CourseActions } from "./CourseActions.jsx";
import { ModuleCard } from "./ModuleCard.jsx";
import { useCourseData } from "../../hooks/useCourseData.js";
import Drawer from '../drawer/Drawer.jsx';

const ContentTab = () => {
  const { modules, courseProgress } = useCourseData();

  return (
      <div className="mx-auto px-4 pb-6">
        {/* Main conatiner */}
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          {/* Content Area */}
          <div className="flex-1 min-w-0">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#374159] mb-4">Contenido del curso</h2>
            </div>

            {/* Modules */}
            <div className="space-y-7">
              {modules.map((module) => (
                  <ModuleCard key={module.id} module={module}/>
              ))}
            </div>
          </div>
          <Drawer />

          {/* Recordings and Progress */}
          <div className="lg:w-[280px] flex-shrink-0">
            <div className="space-y-6 top-4">
              <CourseActions/>
              <CourseProgress
                  percentage={courseProgress.percentage}
                  completedModules={courseProgress.completedModules}
                  totalModules={courseProgress.totalModules}
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default ContentTab;