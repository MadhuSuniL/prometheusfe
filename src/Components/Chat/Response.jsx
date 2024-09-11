import React from 'react'
import ReactMarkdown from 'react-markdown'
import { LiaSpinnerSolid } from "react-icons/lia";
import MessageStatus from '../Meta/MessageStatus';

const Response = ({
    alienName,
    responses,
    staticPrompt,
    isLoading,
    isReceiving,
    isStreaming,
    messageLatency
}) => {


    return (
        <div className='pt-2 relative w-full'>
            {
                responses?.map((response, index) =>
                    <div className='w-full' key={index}>
                        {
                            response?.query &&
                            <div className='grid grid-cols-9 md:grid-cols-12 max-w-[750px] mx-auto'>
                                <div className='col-span-8 md:col-span-11'>
                                    <h1 className='font-extrabold text-lg text-main'>You</h1>
                                    <p className='py-3 pl-5'>{response?.query}</p>
                                </div>
                            </div>
                        }
                        <div className='py-2 bg-opacity-10 bg-main hover:bg-opacity-15 p-2 w-full'>
                            <div className='max-w-[750px] mx-auto'>
                                <h1 className='font-extrabold text-lg text-main mb-2'>{alienName}</h1>
                                <div className={`pl-5 ${isStreaming ? 'animate-pulse' : ''} ${response.success ? '' : 'p-3 animate-pulse rounded-lg border-2 border-red-700'}`}>
                                    <ReactMarkdown>
                                        {response?.content}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                isReceiving &&
                <div className='w-full'>
                    <div className='grid grid-cols-9 md:grid-cols-12 max-w-[750px] mx-auto'>
                        <div className='col-span-8 md:col-span-11'>
                            <h1 className='font-extrabold text-lg text-main font-main'>You</h1>
                            <p className='py-3'>{staticPrompt}</p>
                        </div>
                    </div>
                    <div className='py-2 bg-opacity-10 bg-main hover:bg-opacity-15 p-2 w-full'>
                        <div className='max-w-[750px] mx-auto'>
                            <h1 className='font-extrabold text-lg text-main mb-2'>{alienName}</h1>
                            <div className={`pl-5`}>
                                {cursor}
                                <MessageStatus isLoading={isLoading} messageLatency={messageLatency} />
                            </div>
                        </div>
                    </div>
                </div>
            }
            <span id='response-bottom'></span>
        </div>
    )
}

export default Response


const cursor = <div className='flex h-full items-center justify-center'>
    <LiaSpinnerSolid className='animate-spin text-main text-2xl text-center' />
</div>
