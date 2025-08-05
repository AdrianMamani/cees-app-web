import React from 'react';
import { createPortal } from 'react-dom';

/**
 * Fullscreen drawer/panel for presentations or tutorials.
 */
const DrawerScreen = ({ open, onClose, content }) => {
  if (!open || typeof document === 'undefined') return null;

  console.log("DrawerScreen content:", content);
  
  return createPortal(
    <div className="fixed inset-0 bg-white z-50 overflow-auto p-4">
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        onClick={onClose}
        aria-label="Close fullscreen panel"
      >
        ✕
      </button>
      <div>{content.title}</div>
    </div>,
    document.body
  );
};

export default DrawerScreen;