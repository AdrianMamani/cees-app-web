import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer'
import "@cyntler/react-doc-viewer/dist/index.css";
import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const FilePage = () => {
    const navigate = useNavigate();

    const documents = [
        {
            uri: 'https://res.cloudinary.com/doqovpova/image/upload/v1722017257/pdf/Programaci%C3%B3n_orientada_a_objetos_usando_java_H%C3%A9ctor_A_Fl%C3%B3rez_F.pdf',
            fileType: 'pdf',
            fileName: 'POO con Java.pdf'
        }
    ]        

    return (
        <div className=' p-5 space-y-3'>
            <div className=''>
                <h1 className='text-blue-500 text-3xl font-semibold'>File Page</h1>
                <p className=''>This is the file page content.</p>
            </div>
            
            <button className='flex gap-2'
                onClick={() => navigate(-1)}
            >
                <ArrowLeft className='w-5 h-5 text-gray-500' />
                <span className='ml-2 text-gray-500'>Regresar</span>
            </button>

            <div className='bg-white p-4 rounded-lg shadow-sm'>
                <h2 className='text-xl font-semibold'>Logro de Aprendizaje</h2>
                <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nisi cupiditate eveniet dignissimos omnis atque, quisquam illum 
                    quis quos cumque ut quidem eaque facilis ad porro sequi, vel consectetur. Magnam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempora, ex enim inventore 
                    velit totam odio eos sit dolorum numquam, ducimus saepe sunt perferendis magni sed impedit, esse accusamus sequi!</p>
                
                <div className='mt-4'>
                    <h3 className='text-lg font-semibold'>Material de La Clase</h3>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, atque voluptate dicta expedita nesciunt tempore corporis soluta iusto ex, vero optio, quo 
                        omnis qui consectetur? Similique consectetur illo consequuntur corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus, 
                        esse obcaecati quibusdam tenetur nobis dolorem hic consequuntur neque distinctio! Numquam iste placeat quas sint unde quos alias ducimus rem.
                    </p>
                    <div
                        style={{
                            display: 'flex',
                            margin: '30px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '20px',  
                        }}
                    >
                        <div
                            className=' w-[100%] h-[600px] border border-gray-300 rounded-lg'        
                        >
                            <DocViewer
                                documents={documents}
                                pluginRenderers={DocViewerRenderers}
                                style={{ width: '100%', height: '100%', overflowY: 'auto' }}
                                theme={{
                                    primary: '#e8ebed',  
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilePage