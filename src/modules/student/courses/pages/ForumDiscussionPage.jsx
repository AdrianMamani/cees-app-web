import { ArrowLeftIcon } from 'lucide-react';
import React, { useState } from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from 'react-router-dom';


const ForumDiscussionPage = () => {

    const [showReplies, setShowReplies] = useState(false);
    const navigete = useNavigate();

    const [comment, setComment] = useState({
        content: '',
        user: {
            name: '',
            email: ''
        },
        createdAt: new Date().toISOString()
    });

    const [comments, setComments] = useState([
        {
            content: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            user: {
                name: 'Usuario Anónimo',
                email: 'perez@gmail.com'
            },
            replies: [
                {
                    content: 'Respuesta al comentario',
                    user: {
                        name: 'Juan Pérez',
                        email: ''
                    },
                    createdAt: '2025-08-25T12:00:00Z'
                },
                {
                    content: 'Respuesta al comentario 21515',
                    user: {
                        name: 'Carlos López',
                        email: ''
                    },
                    createdAt: '2025-08-25T12:00:00Z'
                }
            ],
            createdAt: '2025-08-25T12:00:00Z'
        }
    ])

    const modules = {
        toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'align': [] }],
        ['link'],
        ['clean']
        ],
    };

    // Formatos permitidos
    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'align'
    ];

    const submitComment = (content) => {
        const newComment = {
            content: content,
            user: {
                name: 'Anthony Joseph',
                email: 'anthon@gmail.com',
            },
            createdAt: new Date().toISOString()
        };
        
        setComments([...comments, newComment]);
    };

    const handleChangeText = (value) => {
        setComment({
            ...comment,
            content: value
        });
    };

    const handleBack = () => {
        navigete(-1);
    };

    return (
        <main className='w-full p-4'>
            <h1 className='text-2xl font-semibold text-gray-800 mb-4'>Foro de Discusión</h1>
            <button className='flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 mb-4'
                onClick={handleBack}>
                <ArrowLeftIcon className='w-6 h-6' />
                <span className='ml-2 '>Volver </span>
            </button>
            <div className='bg-white p-6 rounded-lg shadow-md'>
                <h2 className='text-xl font-bold text-gray-700 mb-2'>Cual es La Capital de Peru y por que fue elegido</h2>
                <p className='text-gray-600 mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos pariatur animi consectetur adipisci, veniam quasi soluta iste voluptatum perferendis laborum ab similique voluptatibus mollitia! Commodi nobis quisquam quibusdam distinctio nostrum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, veniam! Aliquam 
                    dolores placeat doloribus necessitatibus asperiores qui, officia, quam maxime ab hic in quidem, animi accusantium modi ullam temporibus fuga!</p>
                <p className='text-sm text-gray-500'>Creado el: 2025/08/25</p>
            </div>
            
            <div className='mt-6'>
                <h3 className='text-lg font-semibold text-gray-700 mb-2'>Añadir Comentario</h3>
                <ReactQuill
                    value={comment.content}
                    onChange={handleChangeText}
                    modules={modules}
                    formats={formats}
                    placeholder="Opina sobre el tema..."
                />
                <button 
                    className='mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200'
                    onClick={() => submitComment(comment.content)}     
                >
                    Enviar Comentario
                </button>
            </div>

            <div className='mt-6'>
                <h3 className='text-lg font-semibold text-gray-700 mb-2'>Comentarios</h3>
                <div className='space-y-4 bg-gray-100'>
                    {/* Aquí se pueden mapear los comentarios del foro */}
                    {comments.map((comment, index) => (
                        <div key={index} className='p-2 rounded-lg space-y-5'>
                            <div className='bg-gray-50 p-2 rounded-lg shadow-sm'>
                                <p className='text-sm text-gray-500 mt-2'>Usuario: {comment.user.name || 'Anónimo'}</p>
                                <p className='text-xs text-gray-400'>Fecha: {comment.createdAt}</p>
                                <div 
                                    className='ql-editor'
                                    dangerouslySetInnerHTML={{__html: comment.content}} 
                                />
                                <div className='mt-2'>
                                    <button 
                                        className='text-blue-600 hover:underline'
                                        onClick={() => alert('Responder al comentario')}
                                    >
                                        Responder
                                    </button>
                                    {comment.replies && comment.replies.length > 0 && (
                                        <button 
                                        className='ml-2 text-red-600 hover:underline'
                                        onClick={() => setShowReplies(!showReplies)}
                                        >
                                            Ver Respuestas
                                        </button>
                                    )}
                                </div>
                            </div>
                            
                            {showReplies && comment.replies && comment.replies.length > 0 && (
                                <div className='ml-5 pl-4 border-l-2 border-gray-300'>
                                    {comment.replies.map((reply, replyIndex) => (
                                        <div key={replyIndex} className='bg-gray-50 p-2 rounded-lg shadow-sm mb-2'>
                                            <p className='text-sm text-gray-500'>Usuario: {reply.user.name || 'Anónimo'}</p>
                                            <p className='text-xs text-gray-400'>Fecha: {new Date(reply.createdAt).toLocaleDateString()}</p>
                                            <div 
                                                className='ql-editor'
                                                dangerouslySetInnerHTML={{__html: reply.content}} 
                                            /> 
                                            <div className='mt-2'>
                                                <button 
                                                    className='text-blue-600 hover:underline'
                                                    onClick={() => alert('Responder a la respuesta')}
                                                >
                                                    Responder
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            
        </main>
    )
}

export default ForumDiscussionPage