import { useRef, useState } from 'react';

import { Pause, Play } from './Icons';

export default function Music(props: { src: string }) {

    const { src } = props
    const audio = useRef(null)
    const [played, setPlayed] = useState(false)

    function toggle(ref: any) {
        if (played) {
            setPlayed(false)
            ref.current.pause()
        } else {
            setPlayed(true)
            ref.current.play()
        }
    }



    return (
        <button onClick={() => toggle(audio)}>
            {played ?
                <Pause className="w-8" /> :
                <Play className="w-8" />}
            <audio ref={audio} loop src={src} />
        </button>
    )
}