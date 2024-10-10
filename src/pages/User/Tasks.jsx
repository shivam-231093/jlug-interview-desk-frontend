import React from 'react';
import Page from '../../assets/Page.png'; 
import Pencil from '../../assets/Pencil.png';
import Application from '../../assets/Application.png';
import {Link} from 'react-router-dom'

const tasks = [
    { name: 'ToDo Application', type: 'App/Web', by: 'Admin2', sub:'Pending', status: 'Active', icon: Application },
    { name: 'Portfolio Application', type: 'App/Web', by: 'Admin3',sub:'Submitted', status: 'Active', icon: Application },
    { name: 'Biography', type: 'Document', by: 'Admin3' , sub:'Submitted', status: 'Active', icon: Page},
];

const TaskList = () => {
    return (
        <div className="flex-1 pt-10 w-100">
        <div className= " w-full px-6 md:px-6 lg:px-10  pb-10 lg:pb-20 xl:pb-20">
          <header className="w-full h-16">
            <div className="mt-auto max-w-full pl-6 ">
              <h1 className="text-4xl tracking-tight font-semibold text-left">Tasks</h1>
            </div>
          </header>
          <div className="bg-white m-auto w-[95%] min-h-[70vh] flex flex-col p-10 rounded-xl drop-shadow-lg">
          {tasks.length > 0 ? (
            <div role="list" className="flex flex-col gap-6 pl-4 pr-4">
                {tasks.map((task) => (
                    <div key={task.name} className="flex justify-between items-center gap-x-6 py-2 w-full min-h-[10px]">
                        <div className="flex w-full gap-x-4 items-center">
                            <img
                                src={task.icon}
                                alt={`Avatar of ${task.name}`}
                                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                            />
                            <div className="w-[25%] flex flex-auto items-center">
                                <p className="text-4 font-medium leading-6 text-center text-gray-900">{task.name}</p>
                            </div>
                            <div className="min-w-[15%] flex flex-auto items-center">
                                <p className="text-4 font-bold leading-6 text-center text-gray-900">{task.type}</p>
                            </div>                        
                            <div className="min-w-[15%] flex flex-auto items-center text-center">
                                <p className="text-4 font-medium leading-6 text-center text-gray-900">{task.by}</p>
                            </div>
                            <div className='flex flex-row w-[45%] items-center  text-center justify-around gap-12'> 
                                <div className={`font-semibold border-2 text-center h-[50%] ${task.sub === 'Submitted' ? 'border-[#01ED01, text-[#01ED01] ' : 'border-[#FFA500] text-[#FFA500]'} px-4  rounded-lg `}>
                                    {task.sub}
                                </div>           
                                <div className={`font-semibold border-2 text-center h-[50%] ${task.status === 'Active' ? 'border-[#01ED01] text-[#01ED01] ' : 'border-[#FF3A3A] text-[#FF3A3A]'}px-4  rounded-lg`}>
                                    {task.status}
                                </div>                          
                                <Link to='/userd/view'>
                                    <div className='font-semibold border-2 text-center h-[50%] border-[#23B0FF] text-[#23B0FF] px-4  rounded-lg '>
                                        View
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            ) : (
                <div className="text-center justify-center font-semibold text-lg text-gray-500">
                    <p>No bookmarks available</p>
                </div>
            )}
          </div>
        </div>

        </div>
    );
};

export default TaskList;