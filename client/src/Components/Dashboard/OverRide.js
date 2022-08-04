/* This example requires Tailwind CSS v2.0+ */
import React, {useContext} from 'react'
import { Riders } from '../Helper/Context';
import { Fragment, useRef} from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function OverRide() {
  // const [open, setOpen] = useState(true)
  const {rides, setRides} = useContext(Riders)

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={rides} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setRides}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-black rounded-3xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className='rounded-3xl overflow-hidden'>
                  <img src="https://images.unsplash.com/photo-1512203492609-972c16baa28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmljeWNsZSUyMHJhY2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className='max-w-full max-h-full m-auto block rounded-3xl md:my-1' alt="Profile"/>
                </div>
                <div className='flex justify-between mx-3 my-1'>
                  <h3><span>Type:</span> Road Bike</h3>
                  <p className='rounded-3xl px-2 py-1 shade sm:w-auto md:w-1/5'>KSH. 1500</p>
                </div>
                <h3 className='mx-3'>Description:</h3>
                <p className='mx-3'>The lightweight frame makes this type of bicycle particularly good for numerous pavement uses</p>
                <div className='m-3 flex justify-between'>
                  <p className='font-bold text-lg'>From: <span className='italic text-base'>30-7</span></p>
                  <p className='font-bold text-lg'>To: <span className='italic text-base'>10-8</span></p>
                  <button
                    type="button"
                    className="w-1/3 inline-flex justify-center rounded-lg border border-transparent shadow-sm md:px-4 py-2 bg-indigo-700 text-base font-medium text-white hover:bg-indigo-500 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setRides(false)}
                  >
                    Hire
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
