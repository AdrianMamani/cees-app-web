import React, { useState } from "react";
import { ChevronUp, ChevronDown, FileText } from "lucide-react";
import { MdOutlineQuiz, MdTask } from "react-icons/md";
import { BiFolder } from "react-icons/bi";
import { useModuleExpansion } from "../../hooks/useModuleExpansion.js";
import { useDrawerStore } from "../../store/useDrawerStore.js";
import { useNavigate } from "react-router-dom";

export function ModuleCard({ module }) {
  const navigate = useNavigate();
  const { expandedModules, toggleModule } = useModuleExpansion();
  const [expandedFolders, setExpandedFolders] = useState(new Set());
  const openDrawer = useDrawerStore((state) => state.openDrawer);
  const isExpanded = expandedModules.has(module.id);

  const toggleFolder = (folderId) => {
    const newSet = new Set(expandedFolders);
    newSet.has(folderId) ? newSet.delete(folderId) : newSet.add(folderId);
    setExpandedFolders(newSet);
  };

  const renderModuleItem = (item, level = 0) => {
    const isFolder = item.type === "folder";
    const isFolderExpanded = expandedFolders.has(item.id);

    const handleClick = () => {
      if (isFolder) return toggleFolder(item.id);
      switch (item.type) {
        case "quiz":
          openDrawer("quiz", item);
          break;
        case "task":
          openDrawer("task", item);
          break;
        case "presentation":
          navigate('/courses/detail/file');
          break;
        case "tutorial":
          navigate('/courses/detail/file');
          break;
        default:
          break;
      }
    };

    return (
      <div key={item.id} className={`${level > 0 ? "ml-8" : ""}`}>
        {" "}
        <div
          className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-50"
          onClick={handleClick}
        >
          {isFolder ? (
            <BiFolder className="w-7 h-7 text-[#5CA733]" />
          ) : item.type === "quiz" ? (
            <MdOutlineQuiz className="w-7 h-7 text-[#5CA733]" />
          ) : item.type === "task" ? (
            <MdTask className="w-7 h-7 text-[#5CA733]" />
          ) : (
            <FileText className="w-7 h-7 text-[#5CA733]" />
          )}
          <div className="flex-1">
            <div className="font-medium text-[#374159]">{item.title}</div>
            {item.dueDate && (
              <div className="text-sm text-gray-600">
                Fecha límite: {item.dueDate}
              </div>
            )}
          </div>
          {isFolder &&
            (isFolderExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            ))}
        </div>
        {isFolder && isFolderExpanded && item.children && (
          <div className="mt-2">
            {item.children.map((child) => renderModuleItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div
        className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-50"
        onClick={() => toggleModule(module.id)}
      >
        <BiFolder className="w-6 h-6 text-[#1377BD]" />
        <div className="flex-1">
          <h3 className="font-semibold text-[#374159]">{module.title}</h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </div>

      {isExpanded && (
        <div className="border-t border-gray-200 p-4 space-y-2">
          {module.items.map((item) => renderModuleItem(item))}
        </div>
      )}
    </div>
  );
}
