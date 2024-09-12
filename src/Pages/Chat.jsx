import React, { useEffect, useState } from 'react'
import Header from '../Components/Chat/Header'
import Response from '../Components/Chat/Response'
import Prompt from '../Components/Chat/Prompt'
import Intro from '../Components/Chat/Intro'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { clearAlienMessages } from '../redux/Slice'
import WithGroq from '../Wrappers/WithGroq'
import Ping from '../Components/Chat/Ping'
import { getAlienDataByName } from '../Utils/aliens'

const Chat = ({
    loaded,
    isLoading,
    isReceiving,
    sendQuery,
    messageLatency
}) => {

    const { alien_name } = useParams()
    const dispatch = useDispatch()
    const responses = useSelector(state => state.store.responses)[alien_name]
    const currentAliensData = getAlienDataByName(alien_name)
    const [prompt, setPrompt] = useState('')
    const [staticPrompt, setStaticPrompt] = useState('')
    const [scrollInterval, setScrollInterval] = useState(null)


    const scrollToBottom = () => {
        let ele = document.getElementById('response-bottom');
        if (ele) {
            ele.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollToHeight = () => {
        let ele = document.getElementById('responses');
        if (ele) {
            ele.scrollTop = ele.scrollHeight;
        }
    }

    const onLoad = () => {
        scrollToHeight()
    }

    const sendQueryHandler = () => {
        if (prompt.trim() !== '') {
            sendQuery(prompt)
            setPrompt('')
            scrollToHeight()
            scrollToBottom()
        }
    }

    const clearAllMessage = () => {
        dispatch(clearAlienMessages({ alienName: alien_name }))
    }


    useEffect(() => {
        if (isLoading) {
            setScrollInterval(setInterval(() => {
                scrollToBottom()
            }, 100))
        }
        else {
            if (scrollInterval) {
                clearInterval(scrollInterval)
            }
            scrollToBottom()
        }
    }, [isLoading])

    useEffect(() => {
        if (isLoading) {
            setPrompt('')
            scrollToHeight()
        }
        else {
            if (!isReceiving) {
                setStaticPrompt('')
            }
            scrollToHeight()
        }
    }, [isLoading])

    useEffect(() => {
        onLoad();
    }, [responses])


    return (
        <div id='main' className='flex flex-col h-full w-full relative text-main z-50'>
            <div className='flex-0'>
                <Header
                    alienName={alien_name}
                    responses={responses}
                    currentAliensData={currentAliensData}
                    onMessageClear={clearAllMessage}
                />
            </div>
            <div id='responses' className='flex-1 overflow-auto py-2'>
                <div className='h-full'>
                    {
                        responses?.length || isLoading || isReceiving ?
                            <>
                                <Response
                                    alienName={alien_name}
                                    responses={responses}
                                    staticPrompt={staticPrompt}
                                    isLoading={isLoading}
                                    isReceiving={isReceiving}
                                    messageLatency={messageLatency}
                                />
                            </>
                            :
                            <>
                                <Intro currentAliensData={currentAliensData} loaded={loaded} />
                            </>
                    }
                </div>
            </div>
            <div className='flex-0 pt-2'>
                <div className='max-w-[800px] mx-auto'>
                    <Prompt
                        alienName={alien_name}
                        setStaticPrompt={setStaticPrompt}
                        isLoading={isLoading}
                        setPrompt={setPrompt}
                        prompt={prompt}
                        onSubmit={sendQueryHandler}
                    />
                </div>
                {/* <Ping /> */}
            </div>
        </div >
    )
}

export default WithGroq(Chat)