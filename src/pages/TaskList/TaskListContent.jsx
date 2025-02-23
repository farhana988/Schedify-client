/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { MdDelete } from "react-icons/md";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const TaskListContent = ({ categories, deleteTask, handleDragEnd, tasks }) => {
  return (
    <div
      className=" grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-3 lg:gap-6"
    > 
      <DragDropContext onDragEnd={handleDragEnd}>
        {categories.map((category) => (
          <Droppable key={category.status} droppableId={category.status}>
            {(provided) => (
              <div
                className="bg-gray-100 p-4 rounded-b-lg relative"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2
                  className={`text-xl font-bold  text-center text-white p-4 rounded-t-lg 
                    absolute
                      -top-14 left-0 w-full  ${
                        category.status === "todo"
                          ? "bg-blue-500"
                          : category.status === "inProgress"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                >
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {tasks
                    .filter((task) => task.category === category.status)
                    .map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-white p-4 rounded-b-lg shadow relative space-y-1 mt-2"
                          >
                            {/* delete */}
                            <button
                              className="absolute top-2 right-2 cursor-pointer"
                              onClick={() => deleteTask.mutate(task._id)}
                            >
                              <MdDelete size={20} />
                            </button>
                            {/* date */}
                            <p className="text-xs opacity-80 ">
                             {format(new Date(task.date), "p - P")}
                            </p>
                            {/* title */}
                            <h4 className="font-bold">{task.title}</h4>
                            {/* des */}
                            <p className="text-sm opacity-80">
                              {task.description}
                            </p>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
};

export default TaskListContent;
