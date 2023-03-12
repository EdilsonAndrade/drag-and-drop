import {Person} from '../types/person'
import classNames from 'classnames';
import { Draggable } from 'react-beautiful-dnd';

export const Card = ({person, index, id}:{person:Partial<Person>, index:number, id:string}) =>{


  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot)=>(
        <div 
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        
     >
      <div className={classNames('border-blue-400 flex items-center justify-between w-[432px] border mx-auto mt-6',{
      "opacity-20": !person.isActive
      },{
        "bg-slate-400": snapshot.isDragging
      })}>
      <img src={person.picture} className="w-10 h-10 mx-5" alt=''/>
        <div className='flex flex-col p-5 border'>
            <strong>{person.name}</strong>
            <p>{person.address}</p>
            <p>{person.age}</p>
        </div>
      </div>
    </div>
      )}
  </Draggable>
  )
}