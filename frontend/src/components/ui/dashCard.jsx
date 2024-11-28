import React from 'react'

export default function DashCard() {
  return (

<div class="div h-[8em] w-[20em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0">
  <div
    class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#FF5800] group-hover:scale-[800%] duration-500 z-[-1] op"
  ></div>

  <button
    class="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500"
  >
    <span
      class="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-300 before:bottom-0 before:left-0"
      ><svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="40px" fill="black"><path d="M468-240q-96-5-162-74t-66-166q0-100 70-170t170-70q97 0 166 66t74 162.67L650-513q-11.67-60.67-58.67-100.5T480-653.33q-72 0-122.67 50.66Q306.67-552 306.67-480q0 63.67 39.83 111T447-310l21 70Zm48 158q-9 1.33-18 1.67-9 .33-18 .33-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 9-.33 18-.34 9-1.67 18l-64.67-20v-16q0-139.33-97-236.33t-236.33-97q-139.33 0-236.33 97t-97 236.33q0 139.33 97 236.33t236.33 97h16L516-82Zm305 22L650-231 600-80 480-480l400 120-151 50 171 171-79 79Z"/></svg></span>
    <i class="fa-solid fa-arrow-right"></i>
  </button>

  <h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]">
    HEADING
  </h1>
</div>
  )
}