import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic App will detect faces in your pictures'}
            </p>
            <div className='center'>
                <div className='form pa4 br3 shadow-5'>
                    <input className='f4 br3 pa2 w-70 center' type='text' placeholder='Image Link'
                        onChange={onInputChange}                                                 
                        />
                    <button
                        className='w-30 br3 grow f4 link ph3 pv2 dib shadow-2 white bg-light-purple'
                        onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;