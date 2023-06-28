 import * as React from 'react';
 
 export interface NavProps {
 }
 
 export default function Nav (props: NavProps) {
  return (
    <header>      
      <div
        className="bg-[url('/backgroundImg.png')] rounded-lg flex justify-center items-center p-4 h-[138px]"        
      >
        <div className="bg-white rounded flex justify-between items-center p-2 pr-1 h-14 w-2/3">
          {/* <MdOutlineWorkOutline /> */}
          <input
            className="h-full w-full roboto"
            type="text"
            placeholder='Title, companies, expertise or benefits'
          />
          <button
            type="button"
            className="bg-blue-600 p-3 rounded w-[147px] text-white roboto"
          >
            Search
          </button>        
        </div>
      </div>
    </header>
  );
 }
 