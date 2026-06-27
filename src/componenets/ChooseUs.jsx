import React from 'react'
import Button from './Button'

const ChooseUs = () => {
  return (
    <> 
    {/*------------------------ shape------------------------------------------   */}
    <div className='w-full flex justify-center urple-600 '>
            <div className='w-30 h-30 -2 bg-red-700   absolute mt-6 
              rounded-full'></div>
</div>
{/* ------------------------------box/div-------------------------- */}

        <div className='w-full h-180 yan-950  bg-red-700 flex justify-center items-center' >
<div className='w-340 h-140  bg-[#f8f0cc] '>
        <div className='w-full h-20  flex justify-center   urple-500 bg-[#f8f0cc] mt-16 ' >
            <p className='font1 text-6xl flex items-center justify-center  tracking-widest 
  '>Why Choose Us?</p>
  
  </div>
  <p className='w-full h-auto  reen-400 font2 tracking-wide p-12 pb-0 pt-0  '>
  <strong>A Letter from Our Kitchen to Your Table</strong>
  <br />
  <br />

  Dear Friend,
  <br />
  <br />

  At <b>Rabia's Kitchen,</b> we believe food is more than a meal—it's a way to share comfort, joy, and love. Every croissant, pizza, and pasta is made fresh by hand using quality ingredients and prepared with care.

  <br />
  <br />

  Thank you for being part of our family. We look forward to making every visit special.

  <br />
  <br />

  With love,
  <br />
  The Rabia's Kitchen Family 👩‍🍳❤️

  <br />
  
 <div className='w-full  h-auto flex justify-end pr-70   '>
  <div className='  mber-700 -rotate-20 ' >
   <Button text="People Reviews" width='w-48 font2 text-lg heigh= h-12  ' />
</div>
 </div>
</p>

</div>
        </div>
 
    </>
  )
}

export default ChooseUs
