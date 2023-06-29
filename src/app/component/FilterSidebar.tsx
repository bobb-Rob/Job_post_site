import React from 'react';
import { LiaGlobeAmericasSolid } from 'react-icons/lia';

export default function FilterSidebar () {
  return (
    <section>
      <div>
        <input
          type="checkbox"
          name="full-name"
          id="fullname"
          className="mr-2"
        />
        <span>Full name</span>
      </div>
      <div>
        <span>Location</span>
        <div>
          <LiaGlobeAmericasSolid className="text-myGray" />
          <input
            type="text"
            className="w-full focus:outline-none"
          />
        </div>
      </div>
    </section>
  );
}
