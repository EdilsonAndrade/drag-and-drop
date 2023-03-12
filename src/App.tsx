import queryData from './data.json'
import { Card } from './components/Card';
import {DragDropContext, DropResult} from 'react-beautiful-dnd'
import { Droppable } from 'react-beautiful-dnd';
import { useEffect, useState } from 'react';
import { Person } from './types/person';
import classNames from 'classnames';
function App() {
  const [personData, setPersonData] = useState<Person[]>([])
  const onDragEnd = (result: DropResult) =>{

    const {destination, source, draggableId} = result;
    if(!destination)
      return;


      if(destination.droppableId === source.droppableId &&
        destination.index === source.index){
          return;
        }
    setPersonData([]);
    const newDestination = personData[destination.index]
    const newSource = personData[source.index]
    const newData = Array.from(personData);
    if(newDestination && newSource){
      newData.splice(source.index,1)
      newData.splice(destination.index,0,newSource)
      
    }
 
    setPersonData(newData);
    
  }

  useEffect(()=>{
    if(queryData){
      setPersonData(queryData.data)
    }
  },[])

  return (
      <div className="w-120 flex flex-col">
        <DragDropContext onDragEnd={onDragEnd} >
          <Droppable droppableId={'people'} >
            {(provided, snapshot) =>(
                  <div {...provided.droppableProps} ref={provided.innerRef} className={classNames({
                           "bg-lime-200": snapshot.isDraggingOver
                   })}>
                      {personData.map((person, index)=>(
                          <Card key={person._id} person={person}  index={index} id={person._id} />
                      ))}
                  
                  {provided.placeholder}
              </div>
              )}
      
               </Droppable>

        </DragDropContext>
      </div>
  );
}

export default App;
