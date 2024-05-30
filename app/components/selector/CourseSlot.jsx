import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes.js'

const CourseSlot = ({ course }) => {
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        spec: { type: 'COURSE', course },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                border: '1px solid #ccc',
                padding: '10px',
                marginBottom: '10px',
            }}
        >
            {course.name}
        </div>
    );
};

export default CourseSlot;