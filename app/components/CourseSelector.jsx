"use client"

import React from 'react'
import update from 'immutability-helper'
import { Course } from './selector/Course'
import { useCallback, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import coursesJson from '../utils/courses/courses.json'
import CourseSlot from './selector/CourseSlot'

export function CourseSelector() {
    const [courses, setCourses] = React.useState(Object.entries(coursesJson.generatedSeniorCourses).map(([key, value], index) => ({ index, id: key, ...value })));

    const moveCourse = useCallback((dragIndex, hoverIndex) => {
        setCourses((prevCourses) =>
            update(prevCourses, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevCourses[dragIndex]],
                ],
            }),
        )
    }, [])

    const renderCard = useCallback((course) => {
        return (
            <Course
                key={course.id}
                index={course.index}
                id={course.id}
                text={course.name}
                moveCourse={moveCourse}
            />
        )
    }, [])

    console.log(courses)

    return (
        <div className="border-2 rounded-xl border-rose p-4 mt-5">
            <DndProvider backend={HTML5Backend}>
                <div>
                    Course Selector
                    <div className="flex flex-row gap-5">
                        <div id="Courses" className="max-h-[500px] overflow-scroll">
                            {courses.map((course) => renderCard(course))}
                        </div>
                        <div>
                            <p>Course Selection</p>
                            <table className="border-1 border-black">
                                <tr>
                                    <th>
                                        Fall
                                    </th>
                                    <th>
                                        Spring
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        1a
                                        <CourseSlot course={{ name: "1a" }} />
                                    </td>
                                    <td>
                                        1b
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        2a
                                    </td>
                                    <td>
                                        2b
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        3a
                                    </td>
                                    <td>
                                        3b
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        4a
                                    </td>
                                    <td>
                                        4b
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </DndProvider>
        </div>
    )
}