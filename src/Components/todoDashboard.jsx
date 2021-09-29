import React from "react";
import { Tarea } from "./Tarea";

const tareas = [
    {_id: 1, text: 'Tarea 1'},
    {_id: 2, text: 'Tarea 2'},
    {_id: 3, text: 'Tarea 3'},
  ];

export const TodoDashboard = () => {
    return(
        <>
            <ul>
                { tareas.map(tarea => <Tarea key={ tarea._id } tarea={ tarea }/>) }
            </ul>
        </>
    );    
};