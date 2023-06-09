import React from 'react'

const Contact = () => {
    const handleClick = () => {}
  console.log("hello")
    return (
      <div className="text-2xl font-mono flex flex-col space-y-16 box-border h-50 w-50 p-4 border-4 rounded-md bg-zinc-400 bg-gradient-to-r from-blue-300 to-transparent  
        auto-cols-max mt-1 backdrop-opacity-10 text-slate-500/100 hover:text-blue-600">
       
        <div class="flex-initial ">
          <div>
            <div>
              <h3 className='text-4xl'>Email</h3>
              <p className='mt-5'>
              Luckypeach45@gmail.com
              </p>
              <img />
              <a className='border-2 rounded-md pt-1 block max-w-xs mt-2 mb-3 pl-7 text-2xl font-mono flex flex-col space-y-4 text-slate-400 text-slate-500/100 hover:text-blue-600' href='mailto:luckypeach45@gmail.com'> Click Here</a>
            </div>
          </div>
        </div>
        <div class="flex-initial ">
          <div>
            <div>
              <h3 className='text-4xl' >Instagram</h3>
              <p className='mt-5' >
                Peaches The Coder
              </p>
              <img />
              <a className='border-2 rounded-md pt-1 block max-w-xs mt-2  mb-3 pl-7 text-2xl font-mono flex flex-col space-y-4 text-slate-400 text-slate-500/100 hover:text-blue-600' href='https://www.instagram.com/peachesthecoder/'> Click Here</a>
            </div>
          </div>
        </div>
        <div class="flex-initial ">
          <div>
            <div>
              <h3 className='text-4xl'>Linkedin</h3>
              <p className='mt-5'>
                Chawntel (peaches) Stitts
              </p>
              <img />
              <a className='border-2 rounded-md pt-1 block max-w-xs mt-2 mb-3 pl-7 text-2xl font-mono flex flex-col space-y-4 text-slate-400 text-slate-500/100 hover:text-blue-600' href='https://www.linkedin.com/in/chawntel-stitts-143780157/'> Click Here</a>
            </div>
          </div>
        </div>
        <div class="flex-initial ">
          <div>
            <div>
              <h3 className='text-4xl'>Github</h3>
              <p className='mt-5'>
                You can find all my other projects here!
              </p>
              <img />
              <a className='border-2 rounded-md pt-1 block max-w-xs mt-2 mb-1 pl-7 text-2xl font-mono flex flex-col space-y-4 text-slate-400 text-slate-500/100 hover:text-blue-600' href='https://github.com/Peaches1224'> Click Here</a>
            </div>
          </div>
        </div>
      </div>

);
}

export default Contact


