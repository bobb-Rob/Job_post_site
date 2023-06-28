'use client'
 import * as React from 'react';
 import { MdOutlineWorkOutline } from 'react-icons/md';
 import { useState } from 'react';
 
 export interface NavProps {
 }
 
 export default function Nav (props: NavProps) {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <header>      
      <div
        className="bg-[url('/backgroundImg.png')] rounded-lg flex justify-center items-center p-4 h-[138px]"        
      >
        <div className="bg-white rounded flex justify-between items-center p-2 pr-1 h-14 w-4/5 md:w-2/3">
          { isFocus ? null : <MdOutlineWorkOutline
            className="text-xl mr-2 text-myGray"
          /> }
          <input
            className="h-full w-full roboto text-xs"
            type="text"
            placeholder='Title, companies, expertise or benefits'
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button
            type="button"
            className="bg-myBlue p-3 rounded md:w-[147px] text-white roboto"
          >
            Search
          </button>      
        </div>
      </div>
    </header>
  );
 }
 