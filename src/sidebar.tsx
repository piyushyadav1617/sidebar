import  { useState } from 'react';
import orgIcon from './icons/organizations.svg'
import supportIcon from './icons/support.svg'
import settingIcon from './icons/setting.svg'
import teamIcon from './icons/team.svg'
import dashboardIcon from './icons/dashboard.svg'
import upgradeIcon from './icons/upgrade.svg'
import './sidebar.css';

const Sidebar = () => {
  const [open, setOpen] = useState(true);




  return (
    <div className={`flex flex-col flex-shrink-0 items-center text-white mr-10 bg-black ${open? "w-full sm:w-[18rem]": "w-[4rem] "} h-[100vh] transition`}>

        <div className={`flex ${open? "justify-end": "justify-center"} w-full`}>
        <button className="px-2 pt-1 hover:text-[#9EFF00]" onClick={() => setOpen(!open)}>{open ? '<<<' : '>>>'}</button>
        </div>
        

        <div className='w-full flex flex-col items-center'>
             <h3 className=" text-2xl text-bold mb-12">{open? "Organization":""}</h3>
             <div className={`main-menu flex flex-col w-full`}>
                    <h4 className='text-[0.75rem] opacity-50 ml-8 pl-8'>{open?"MAIN MENU":""}</h4>
                    <div className={`my-6 flex flex-col w-full ${open?"":"items-center"}`}>
                      <button className={`hover:bg-white hover:bg-opacity-40 ${open? "ml-8 pl-8 w-3/4 py-2": "p-2"} mb-4 rounded-md flex items-center space-x-2`}><span><img src={orgIcon} alt="" /></span>{open? <span>Organization</span>:""}</button> 
                      <button className={`hover:bg-white hover:bg-opacity-40 ${open? "ml-8 pl-8 w-3/4 py-2": "p-2"} mb-4 rounded-md flex items-center space-x-2`}><span><img src={dashboardIcon} alt="" /></span>{open?<span>Dashboard</span>:""}</button>

                      <button className={`hover:bg-white hover:bg-opacity-40 ${open? "ml-8 pl-8 w-3/4 py-2": "p-2"} mb-4 rounded-md flex items-center space-x-2`}><span><img src={teamIcon} alt="" /></span>{open?<span>Team & Members</span>:""}</button>
                      <button className={`hover:bg-white hover:bg-opacity-40 ${open? "ml-8 pl-8 w-3/4 py-2": "p-2"} mb-4 rounded-md flex items-center space-x-2`}><span><img src={upgradeIcon} alt="" /></span>{open?<span>Upgrade & Plans</span>:""}</button>
                       
                    </div>
             </div>
             <div className={`General flex flex-col w-full`}>
                    <h4 className='text-[0.75rem] opacity-50 ml-8 pl-8'>{open?"General":""}</h4>
                    <div className={`my-6 flex flex-col w-full ${open?"":"items-center"}`}>
                      <button className={`hover:bg-white hover:bg-opacity-40 ${open? "ml-8 pl-8 w-3/4 py-2": "p-2"} mb-4 rounded-md flex items-center space-x-2`}><span><img src={supportIcon} alt="" /></span>{open?<span>Support</span>:""}</button>
                      <button className={`hover:bg-white hover:bg-opacity-40 ${open? "ml-8 pl-8 w-3/4 py-2": "p-2"} mb-4 rounded-md flex items-center space-x-2`}><span><img src={settingIcon} alt="" /></span>{open?<span className='transition duration-300'>Settings</span>:""}</button>
                    </div>
                
             </div>

      </div>
      
        
    </div>
      

  );
};

export default Sidebar;

