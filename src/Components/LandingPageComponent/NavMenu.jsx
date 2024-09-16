import React from 'react'
import AI_IMAGE from '../../images/ai-image.avif'

export const NavMenu = ({ onMouseEnter, onMouseLeave, index }) => {
  console.log('INDEXXXX=---> ', index)
  switch (index) {
    case 0:
      return (
        <div
          className='fixed top-[80px] w-[90vw] h-auto bg-white left-1/2 transform -translate-x-1/2 '
          // onMouseEnter={onMouseEnter}
          // onMouseLeave={onMouseLeave}
        >
          <div className="grid grid-cols-12 gap-4 m-6">
            {/* About Us Section */}
            <div className="col-span-5 text-start">
              <p className='font-bold text-xl'>
                AI driven innovation
              </p>
              <div className="exp-pra mt-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, suscipit. Accusantium, at. Nobis accusantium soluta adipisci at neque sequi magni nulla in placeat ipsam? Veritatis temporibus eius dolorum voluptatibus 
                </p>
                <p className='mt-2'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, suscipit. Accusantium, at. 
                </p>
              </div>
              <div className="mt-10">
                <img
                  src={AI_IMAGE}
                  alt=""
                  className="object-cover h-[130px] rounded-[12px]"
                />
              </div>
            </div>

            {/* Links Section */}
            <div className="col-span-7 p-2 grid grid-cols-3 gap-4">
              {/* First Column of Links */}
              <div className="text-start">
                <ul>
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                  <li>Link 4</li>
                  <li>Link 5</li>
                </ul>
              </div>
              {/* Second Column of Links */}
              <div className="">
                <ul>
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                </ul>
              </div>
              <div className="">
                <ul>
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      );
    case 1:
      return (
        <div
        //   className='absolute w-[90vw] h-[400px] bg-teal-300 left-1/2 transform -translate-x-1/2 mt-[400px]'
          className='fixed top-[80px] w-[90vw] h-auto bg-white left-1/2 transform -translate-x-1/2'
          // onMouseEnter={onMouseEnter}
          // onMouseLeave={onMouseLeave}
        >
          <div className="grid grid-cols-12 gap-4 m-6">
            {/* About Us Section */}
            <div className="col-span-5 text-start">
              <p className='font-bold text-xl'>
                AI driven SERVICEEEEE
              </p>
              <div className="exp-pra mt-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, suscipit. Accusantium, at. Nobis accusantium soluta adipisci at neque sequi magni nulla in placeat ipsam? Veritatis temporibus eius dolorum voluptatibus 
                </p>
                <p className='mt-2'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, suscipit. Accusantium, at. 
                </p>
              </div>
              <div className="mt-10">
                <img
                  src={AI_IMAGE}
                  alt=""
                  className="object-cover h-[130px] rounded-[12px]"
                />
              </div>
            </div>

            {/* Links Section */}
            <div className="col-span-7 p-2 grid grid-cols-3 gap-4">
              {/* First Column of Links */}
              <div className="text-start">
                <ul>
                  <li>Link SERVICEEEEE 1</li>
                  <li>Link SERVICEEEEE 2</li>
                  <li>Link SERVICEEEEE 3</li>
                  <li>Link SERVICEEEEE 4</li>
                  <li>Link SERVICEEEEE 5</li>
                </ul>
              </div>
              {/* Second Column of Links */}
              <div className="">
                <ul>
                  <li>Link SERVICEEEEE 1</li>
                  <li>Link SERVICEEEEE 2</li>
                  <li>Link SERVICEEEEE 3</li>
                </ul>
              </div>
              <div className="">
                <ul>
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      );
    default:
      break;
  }

  
};
