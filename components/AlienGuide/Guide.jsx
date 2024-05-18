import { useState, useEffect, useContext } from 'react'

import { motion } from 'framer-motion'

import Terms from 'Terms'

const Guide = ({term, requestLocation, setPlanet, }) => {

    const [isGuideOpen, setIsGuideOpen] = useState(true);

    const [currentTerm, setCurrentTerm] = useState();
    const [previousTerm, setPreviousTerm] = useState();

    const [chapter, setChapter] = useState();

    useEffect(() => {
        setChapter(1);
    }, [currentTerm])

    


    return (
        <div>
            This is the guide.
            <Terms term={term}/>
        </div>
    )
}

export default Guide;