import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useRef, useState } from 'react'
import { useRouter } from "next/router"


export default function GeneralPurposeOverlay({ toggleModal, disable, title, message, path, toggle2ndModal}){
    let [open, setOpen] = useState(true);
    let [msg, setMsg] = useState("");
    const cancelButtonRef = useRef(null);
    const router = useRouter();

    const closeModal = () => {
        var state= setOpen(false);
        toggleModal(state);
    }

    const confirmModal = () => {
        var state= setOpen(false);
        var value = setMsg("now");
        toggleModal(state);
        if(toggle2ndModal){
            toggle2ndModal(state);
        }
        if(disable){
            disable(true);
        }
        router.push(path);
    }

return (
    <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={closeModal}>
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

            <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        <span className=''>{title}</span>
                        </Dialog.Title>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                            <span>{message}</span>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex justify-between sm:px-6">
                    <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={closeModal}
                        ref={cancelButtonRef}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={confirmModal}
                        ref={cancelButtonRef}
                    >
                        Confirm
                    </button>
                    </div>
                </Dialog.Panel>
                </Transition.Child>
            </div>
            </div>
        </Dialog>
    </Transition.Root>
  );
}