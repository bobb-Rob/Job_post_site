'use client'
 import * as React from 'react';
 import { MdOutlineWorkOutline } from 'react-icons/md';
 import { useState, useEffect } from 'react';
  
 export default function Nav () {
  const [isFocus, setIsFocus] = useState(false);
  const [placeholder, setPlaceholder] = useState('Title, companies, expertise or benefits');

  useEffect(() => {
    const handleResize = () => {
      const mobilePlaceholder = 'Title, companies, expertise...';
      const isMobileView = window.innerWidth < 768;

      setPlaceholder(isMobileView ? mobilePlaceholder : 'Title, companies, expertise or benefits');
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <header>      
      <div
        className="bg-[url('/backgroundImg.png')] bg-cover rounded-lg flex justify-center items-center p-4 h-[138px]"        
      >
        <div className="bg-white rounded flex justify-between items-center p-2 pr-1 h-14 w-[95%] md:w-2/3">
          { isFocus ? null : <MdOutlineWorkOutline
            className="text-xl mr-2 text-myGray"
            data-cy="work-icon"
          /> }
          <input
            className="h-full w-full roboto text-xs focus:outline-none"
            type="text"           
            data-cy="search"
            placeholder={placeholder}
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
 