import React, { useRef, useState, useMemo } from "react";
import { LuFileUp } from "react-icons/lu";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TaskDetailPage = () => {
  const quillRef = useRef(null);
  const [files, setFiles] = useState([]);

  // memoizamos la definición del toolbar
  const modules = useMemo(
    () => ({
      toolbar: {
        container: "#custom-toolbar",
        handlers: {
          attach: () => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = "*/*";
            input.onchange = () => {
              const file = input.files?.[0];
              if (file) setFiles((prev) => [...prev, file]);
            };
            input.click();
          },
        },
      },
    }),
    []
  );

  // memoizamos formats
  const formats = useMemo(
    () => [
      "header",
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "align",
    ],
    []
  );

  // Handler para envío
  const handleSend = () => {
    const editor = quillRef.current.getEditor();
    const htmlContent = editor.root.innerHTML;
    console.log("Contenido HTML:", htmlContent);
    
    const formData = new FormData();
    formData.append("content", htmlContent);
    files.forEach((file, idx) => {
      formData.append("files", file);
    });

    // Ejemplo de envío:
    // fetch('/api/send', { method: 'POST', body: formData })
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch(err => console.error(err));

    console.log("FormData preparado:", formData);
  };

  return (
    <div className="p-5 space-y-3">
      <h1 className="text-blue-500 text-3xl font-semibold">Task Detail Page</h1>

      <button className="flex gap-2" onClick={() => window.history.back()}>
        <span className="w-5 h-5 text-gray-500">&#10094;</span>
        <span className="ml-2 text-gray-500">Regresar</span>
      </button>

      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold">Task Details</h2>
        <p className="text-gray-600">
          Aquí los detalles de la tarea...
        </p>
      </div>

      {/* Tarjetas de archivos seleccionados */}
      {files.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-xl font-medium">Archivos a enviar</h2>
          {files.map((file, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-3 flex justify-between items-center bg-gray-50"
            >
              <span className="text-gray-800">{file.name}</span>
              <button
                onClick={() => setFiles(prev => prev.filter((_, i) => i !== idx))}
                className="text-red-500 hover:underline"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Toolbar personalizado */}
      <div id="custom-toolbar" className="mb-2 flex gap-2">
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-strike" />
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
        <button className="ql-align" value="center" />
        <button className="ql-link" />
        <button className="ql-attach"><LuFileUp/></button>
      </div>

      {/* Editor Quill */}
      <ReactQuill
        ref={quillRef}
        theme="snow"
        modules={modules}
        formats={formats}
        placeholder="Opina sobre el tema..."
      />

      {/* Botón de envío */}
      <button
        onClick={handleSend}
        className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg"
      >
        Enviar
      </button>
    </div>
  );
};

export default TaskDetailPage;
