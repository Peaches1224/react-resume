import React from 'react'

export default function Education() {
    return (
        <div className="text-2xl font-mono flex flex-col space-y-32  box-border h-50 w-50 p-4 border-4 rounded-md bg-zinc-400 bg-gradient-to-r from-blue-300 to-transparent  
        auto-cols-max mt-1 backdrop-opacity-10 text-slate-500/100 hover:text-blue-600">
            <div>

                <h4 className='mb-5 text-4xl'>El Camino Community College <span className='inline-block pl-80'>7/2022-01/2023</span></h4>
                <h5 className='mb-5 text-2xl'>Front End Software Development Certificate</h5>
                <p className= 'text-lg mb-7'>
                    Introduction to JavaScript: Basic programming in JavaScript (ES6) to advanced ObjectOriented concepts, functional programming, design patterns, and unit testing. Version control with Git.
                    Front End Technologies: User interface design including HTML, CSS, Bootstrap, JQuery, and AJAX. Built dynamic, responsive applications using vanilla JavaScript and then JQuery.
                    Web App Design with ReactJS: Designed and built dynamic, modular user interfaces using ReactJS. Concepts include everything from basic JSX and components to advanced application development and deploying applications with AWS Elastic Beanstalk.
                </p>

                <h4 className='mb-5 text-4xl '>City College Of San Francisco <span className='inline-block pl-80'>2017-current </span></h4>
                <h5 className='mb-5 text-2xl'>Visual Communications</h5>
                <p className='text-lg'>

                    Currently getting my certification in Python and Java to become a full stack developer, while getting my prerequisites for my major. 
                </p>

            </div>
        </div>
    )
}

