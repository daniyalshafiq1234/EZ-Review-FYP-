import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import {getReviewerNotStartedDocuments,getReviewerInProgressDocuments,getReviewerCompletedDocuments,dynamicBoardStateChanged} from '../../../redux/kanbanboard/draggable/Actions'

import { v4 as uuidv4 } from 'uuid';
import fonts from '../../../styles/Fonts.module.css'

// const itemsFromBackend = [
//   { id: '1', content: "First task" },
//   { id: '2', content: "Second task" },
//   { id: '3', content: "Third task" },
//   { id: '4', content: "Fourth task" },
//   { id: '5', content: "Fifth task" }
// ];

// const columnsFromBackend = {
//   ['1']: {
//     name: "Not assigned ",
//     items: itemsFromBackend
//   },
//   ['2']: {
//     name: "Review not started ",
//     items: []
//   },
//   ['3']: {
//     name: "Review in progress ",
//     items: []
//   },
//   ['4']: {
//     name: "Review completed ",
//     items: []
//   }
// };

const onDragEnd = (result, columns, setColumns, dispatch) => {
    
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    console.log("REMOVED====>",removed)
    destItems.splice(destination.index, 0, removed);

    if(destination.droppableId=='two'){
      // {toColumn,docId} = data
      dispatch(dynamicBoardStateChanged('two',removed.id))
    }
    else if(destination.droppableId=='three'){
      dispatch(dynamicBoardStateChanged('three',removed.id))
    }
    else if(destination.droppableId=='four'){
      dispatch(dynamicBoardStateChanged('four',removed.id))
    }



    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    console.log("coulmuns====>",columns)
    console.log("result======>",result)
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

function KanbanDraggable() {

  const columnsFromBackend = useSelector(state => state.KanbanDraggableReviewerDash.allDocs)
  
  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(getReviewerNotStartedDocuments())

      dispatch(getReviewerInProgressDocuments())
      //alag alag useEffect bnalo?     
      dispatch(getReviewerCompletedDocuments())
  },[])
  useEffect(()=>{
    setColumns(columnsFromBackend)
  },[columnsFromBackend])   
  
  const [columns, setColumns] = useState(columnsFromBackend);
  
  return (
    <div className='authorDashKanbanBoardWrap' style={{width:'100%'}}>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns,dispatch)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
            className='kanbanCol1'
            //   style={{
            //     display: "flex",
            //     flexDirection: "column",
            //     alignItems: "center"
            //   }}
              key={columnId}
            >
               <div className='kanbanColHeading' style={{fontSize:'1rem',marginLeft:'1em',marginTop:'0',paddingTop:'0.5em'}}>
                    <span className={fonts.kanbanColHeadingFont}>{column.name}</span>
                </div>
              <div>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "#d4d4d4"
                            : "#f4f5f7",
                            height:'86vh',
                            paddingTop:'0.3em'
                        }}
                      >
                          {/* <div className='kanbanColHeading' style={{fontSize:'1rem',marginLeft:'1em',marginTop:'0',paddingTop:'0.5em'}}>
                            <span className={fonts.kanbanColHeadingFont}>{column.name}</span>
                          </div> */}
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={JSON.stringify(item.id)}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className='kanbanCard'
                                    style={{
                                      userSelect: "none",
                                      backgroundColor: snapshot.isDragging
                                        ? "#d4e7ff"
                                        : "white",
                                      color: "black",
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    <div className='kanbanCardTitle'>
                                      {item.document_title}
                                    </div>
                                   
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default KanbanDraggable;
