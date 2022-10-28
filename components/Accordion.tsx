import { useState, useEffect } from 'react'

const Accordion = ({ title, children, ScrollTrigger }: any) => {
    const [collapse, setCollapse] = useState(false);

    useEffect(() => {
        ScrollTrigger.refresh()
    }, [collapse])

  return (
    <div className="cursor-pointer px-4 py-2 flex flex-col border-b mx-12 my-0">
        <div onClick={() => setCollapse(!collapse)} className="flex justify-between items-center">
            <div className="flex items-center">
                <span>{title}</span>
            </div>

            {
                collapse ? (<span>+</span>) : (<span>-</span>)
            }

        </div>

        <div className={`mt-4 ${collapse ? 'inline-block' : 'hidden'}`}>
            {children}
        </div>

    </div>
  )
}

export default Accordion