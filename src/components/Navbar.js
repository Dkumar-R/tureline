import React from 'react'
import '../index1.css';
import '../index.css'
import logo from "../logo photo/2473755-copy.png"
// import youtube from "../logo photo/youtube.png"
// import whatapp from "../logo photo/whatapp-copy.png"
// import tiwteer from "../logo photo/tiwetter.png"
// import instragram from '../logo photo/instragram.png'
// import facebook from '../logo photo/facebook.png'

export default function Navbar() {
  return (<>
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 flex justify-between">
      <div className='flex'>
        <img className="h-10 w-10 mx-1 my-2 cursor-pointer" src={logo} alt="ChitChat Logo" />
        <li className='flex  text-2xl text-white font-bold mx-2 py-3 cursor-pointer'>Tureline</li>
      </div>
      {/* <div className="box-content h-9 w-20 my-2  flex justify-start bg-white border rounded-full"></div> */}



      {/* <div className="flex justify-items-end">
      <img className="h-6 w-6  my-4 cursor-pointer" src={youtube} alt="ChitChat Logo" />
      <img className="h-6 w-6  my-4 cursor-pointer" src={whatapp} alt="ChitChat Logo" />
      <img className="h-6 w-6  my-4 cursor-pointer" src={tiwteer} alt="ChitChat Logo" />
      <img className="h-6 w-6  my-4 cursor-pointer" src={instragram} alt="ChitChat Logo" />
      <img className="h-6 w-6 px-0 my-4 cursor-pointer" src={facebook} alt="ChitChat Logo" />
    </div> */}



      <ul className="px-20 text-white font-medium py-4 space-x-9 flex justify-end" >
        <li className="mx2 cursor-pointer ">Home</li>
        <li className="mx2 cursor-pointer">About</li>
        <li className="mx2 cursor-pointer">Contact</li>
      </ul>
    </nav>
    <main className='bg-indigo-500  flex justify-between' >
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 pt-40 pl-9">
        <div className=" text-4xl font-bold text-white mr-50">
          Life Motivation Quotes in Hindi
        </div>
        <p className="py-2 w-2/3 text-xl text-white font-semibold">Lifetime Motivational Quotes in Hindi for Success | Motivational Suvichar | Great Thoughts in Hindi</p>
        <div className="my-8 mt-10">
          <button className="mx-4  py-2 px-2 rounded-lg bg-green-500  ring-4  ring-green-200 active:bg-blue-500 active:ring-blue-200" >Read More</button>
          <button className="mx-4 py-2 px-2 rounded-lg bg-green-500  ring-4  ring-green-200 active:bg-blue-500 active:ring-blue-200">Explore</button>
        </div>
      </div>
      <div className=' flex items-center mr-10'>
        <img src={logo} alt="/www" />
      </div>
    </main>

    <main className='bg-gradient-to-l from-slate-300 px-10 py-10 '>
      <div className="bg-gradient-to-l from-red-200 group  px-10 my-32 mx-40 py-5 pt-10 rounded-2xl border-indigo-800 border bg-white shadow-lg border-transparent">
        <p className='text-2xl text-indigo-800 font-semibold group-hover:text-gray-800 '>अगर जीवन में सफलता प्राप्त करनी है तो मेहनत पर विश्वास करें! किस्मत की आजमाईश तो जुए में होती हैं..</p>
        <div className="mt-5">
          <button className='mx-4 py-2 px-2 group bg-yellow-500 focus:bg-blue-600 border ring-1 rounded-xl focus:text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
            </svg>
          </button>
          <button className='mx-4 py-2 px-2 group bg-yellow-500 focus:bg-red-600 focus:text-white ring-1 rounded-xl'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-l from-red-200 group  px-10 my-32 mx-40 py-5 pt-10 rounded-2xl border-indigo-800 border bg-white shadow-lg border-transparent">
        <p className='text-2xl text-indigo-800 font-semibold group-hover:text-gray-800 '>जीवन में शांति चाहते हैं तो दुसरों की शिकायतें करने से बेहतर है खुद को बदल लें।
          क्योंकि पुरी दुनिया में कारपेट बिछाने से खुद के पैरों में चप्पल पहन लेना अधिक सरल है।</p>
        <div className="mt-5">
          <button className='mx-4 py-2 px-2 group bg-yellow-500 focus:bg-blue-600 border ring-1 rounded-xl focus:text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
            </svg>
          </button>
          <button className='mx-4 py-2 px-2 group bg-yellow-500 focus:bg-red-600 focus:text-white ring-1 rounded-xl'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-l from-red-200 group  px-10 my-32 mx-40 py-5 pt-10 rounded-2xl border-indigo-800 border bg-white shadow-lg border-transparent">
        <p className='text-2xl text-indigo-800 font-semibold group-hover:text-gray-800 '>अपने लक्ष्य के लिए जोशीले और जुनूनी बनिए..विश्वास रखिए, परिश्रम का फल सफलता हि है…!</p>
        <div className="mt-5">
          <button className='mx-4 py-2 px-2 group bg-yellow-500 focus:bg-blue-600 border ring-1 rounded-xl focus:text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
            </svg>
          </button>
          <button className='mx-4 py-2 px-2 group bg-yellow-500 focus:bg-red-600 focus:text-white ring-1 rounded-xl'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-l from-red-200 group  px-10 my-32 mx-40 py-5 pt-10 rounded-2xl border-indigo-800 border bg-white shadow-lg border-transparent">
        <p className='text-2xl text-indigo-800 font-semibold group-hover:text-gray-800 '>समझनी है जिंदगी तो पिछे देखो, जीनी है जिंदगी तो आगे देखो…</p>
        <div className="mt-5">
          <button className='mx-4 py-2 px-2 group bg-yellow-500 focus:bg-blue-600 border ring-1 rounded-xl focus:text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
            </svg>
          </button>
          <button className='mx-4 py-2 px-2 group bg-yellow-500 focus:bg-red-600 focus:text-white ring-1 rounded-xl'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-l from-red-200 group  px-10 my-32 mx-40 py-5 pt-10 rounded-2xl border-indigo-800 border bg-white shadow-lg border-transparent">
        <p className='text-2xl text-indigo-800 font-semibold group-hover:text-gray-800 '>घायल तो यहां हर परिंदा है. मगर जो फिर से उड़ सका वहीं जिंदा है...</p>
        <div className="mt-5">
          <button className='mx-4 py-2 px-2 group bg-yellow-500 focus:bg-blue-600 border ring-1 rounded-xl focus:text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
            </svg>
          </button>
          <button className='mx-4 py-2 px-2 group bg-yellow-500 focus:bg-red-600 focus:text-white ring-1 rounded-xl'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
          </button>
        </div>
      </div>


    </main>

  </>
  )
}
