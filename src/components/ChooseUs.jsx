import React from 'react'
import Button from './Button'

const ChooseUs = () => {
  return (
    <> 
    {/*------------------------ shape------------------------------------------   */}
    <div className='w-full flex justify-center  '>
            <div className='w-30 h-30 -2 bg-red-700   absolute mt-6 
              rounded-full'></div>
    </div>
    
    {/* ------------------------------box/div-------------------------- */}
    {/* Changed: min-h-screen -> h-auto, items-center -> items-start md:items-center, added pt-32 md:pt-0 and px-4 md:px-0 */}
    <div className='w-full h-auto md:h-180 yan-950  bg-red-700 flex justify-center items-start md:items-center pt-32 pb-30' >
        
        <div className='w-[95%] sm:w-[85%] md:w-340 h-auto md:h-140  bg-[#f8f0cc] '>
            
            {/* Changed: mt-16 -> mt-8 md:mt-16 so it doesn't waste space inside the box on mobile */}
            <div className='w-full h-20 flex justify-center urple-500 bg-[#f8f0cc] mt-8 md:mt-16' >
                <p className='font1 text-3xl sm:text-4xl md:text-6xl flex items-center justify-center tracking-widest'>
                    Why Choose Us?
                </p>
            </div>
            
            <div className='w-full h-auto font2 tracking-wide p-4 sm:p-8 md:p-12 pb-0 pt-0 text-sm sm:text-base md:text-lg'>
                <strong>A Letter from Our Kitchen to Your Table</strong>
                <br /><br />
                Dear Friend,
                <br /><br />
                At <b>Rabia's Kitchen,</b> we believe food is more than a meal—it's a way to share comfort, joy, and love. Every croissant, pizza, and pasta is made fresh by hand using quality ingredients and prepared with care.
                <br /><br />
                Thank you for being part of our family. We look forward to making every visit special.
                <br /><br />
                With love,
                <br />
                The Rabia's Kitchen Family 👩‍🍳❤️
                <br />
                
                <div className='w-full h-auto flex justify-end  pr-4 sm:pr-20 md:pr-70'>
                    <div className='-rotate-20'>
                        <Button
                            text="People Reviews"
                            width="w-36 h-10 text-sm sm:w-44 sm:h-11 sm:text-base md:w-48 md:h-12 md:text-lg font2"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ChooseUs