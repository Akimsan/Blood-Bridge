import React from 'react';
import div from '../assets/b.jpg';
import div2 from '../assets/a.jpg';
import div3 from '../assets/n.jpeg';
import VideoComponent from '../components/Vdeo';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-gray-200 backdrop-blur-lg max-h-full w-full">
      <div className="flex w-full h-full">
        <div className="flex flex-col w-full sm:w-1/3 md:w-1/4 lg:w-1/6 h-screen bg-white pt-20">
          <div className="mt-3 h-12 mx-2 rounded-lg shadow-2xl text-center text-red-950 font-bold">
            <a className="text-left" href="#"><Link to="/register">Register</Link></a>
          </div>

          <div className="mt-6 h-12 mx-2 rounded-lg shadow-2xl text-center text-red-950 font-bold">
            <a href="#">View blood groups</a>
          </div>

          <div className="mt-6 h-12 mx-2 rounded-lg shadow-2xl text-center text-red-950 font-bold">
            <a href="#">Profile</a>
          </div>

          <div className="mt-6 h-12 mx-2 rounded-lg shadow-2xl text-center text-red-950 font-bold">
            <a href="#">Logout</a>
          </div>

          <div className="mt-6 pt-10 h-full rounded-lg shadow-2xl text-center">
            <img className="h-full contrast-200 rounded-lg" src={div} alt=""/>
          </div>
        </div>

        <div className="flex w-full sm:w-2/3 md:w-3/4 lg:w-5/6 h-screen bg-custom-background2 text-center">
          <div className="w-1/2 h-full grid-cols-3 ">
             <div>  
              <img className="center h-72 mt-16 w-full rounded-lg" src={div2} alt=""/>
             </div>
             
             <div className=''>
               <h1 className=' mt-9  text-3xl font-bold font-serif'>Save lives with every drop</h1>
             </div>

              <div >
                <p className="mt-5">  Lifeline connects donors with those in need, making blood donation easy and impactful. Find donation centers, track your contributions, and see how you’re making a difference. Join us today and help save lives, one donation at a time.    </p>
             </div>
               
            
          </div>

          <div className=" w-1/2 h-full">
               <VideoComponent />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
