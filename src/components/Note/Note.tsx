import React from "react";
import './Note.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

interface NoteProps {
    message: string;
}

const Note: React.FC<NoteProps> = (noteProps: NoteProps) => {
    
    return (
        <div className="note">
            <div className="icon">
                <FontAwesomeIcon icon={faInfoCircle} className="icon" />
            </div>
            <div className="message">
                {noteProps.message}
            </div>
        </div>
    )
}

export default Note;