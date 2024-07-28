import { useState, useEffect, useContext } from 'react';

import { motion, useAnimation } from 'framer-motion';

import useWindowSize from "../../utilities/useWindowSize";

import Starfield from "../../components/Starfield/Starfield";

const Star = ({ title, description, xPos, yPos, focusedStar, setFocusedStar }) => {
    return (
        <div style={{
            position: 'relative',
            color: 'white',
            fontFamily: 'Arial',
        }}>
            <div style={{
                width: '8px',
                height: '8px',
                marginLeft: '-4px',
                marginTop: '-4px',
                borderRadius: '8px',
                backgroundColor: 'white',
                boxShadow: '1px 1px 10px black, 1px -1px 10px black, 1px -1px 10px black, -1px -1px 10px black',
            }} />
            <span style={{
                position: 'absolute',
                left: '12px',
                top: '-4px',
                textShadow: '1px 1px 10px black, 1px -1px 10px black, 1px -1px 10px black, -1px -1px 10px black',
                cursor: 'pointer',
            }}
                onClick={() => setFocusedStar(title)}>{title}</span>
        </div>
    )
}

const KnowledgeTree = ({ isOpen, setIsOpen }) => {

    const windowSize = useWindowSize();

    const originalStars = [
        { id: 1, title: 'HTML', x: 1000, y: 1000, originIds: [] },
        { id: 2, title: 'CSS', x: 1000, y: 1200, originIds: [] },
        { id: 3, title: 'JavaScript ES6', x: 1200, y: 1000, originIds: [] },
        { id: 4, title: 'ReactJS', x: 1600, y: 1000, originIds: [5] },
        { id: 5, title: 'NodeJS', x: 1400, y: 1000, originIds: [3] },
        { id: 6, title: 'React Hooks', x: 1800, y: 1000, originIds: [4] },
        { id: 7, title: 'Framer Motion', x: 2000, y: 1000, originIds: [6] },
        { id: 8, title: 'Styled Components', x: 1200, y: 1200, originIds: [2] },
        { id: 9, title: 'SVG', x: 800, y: 1000, originIds: [1] },
        { id: 10, title: 'SQL', x: 1200, y: 800, originIds: [] },
        { id: 11, title: 'NoSQL', x: 1200, y: 600, originIds: [10] },
        { id: 12, title: 'NextJS', x: 1800, y: 1200, originIds: [6] },
        { id: 13, title: 'Wordpress', x: 600, y: 1000, originIds: [] },
        { id: 14, title: 'Realtime DB', x: 1200, y: 400, originIds: [11] },
        { id: 15, title: 'Vercel', x: 1600, y: 1400, originIds: [12, 26] },
        { id: 16, title: 'Shopify', x: 600, y: 800, originIds: [] },
        { id: 17, title: 'PHP', x: 1000, y: 800, originIds: [] },
        { id: 18, title: 'APIs', x: 1000, y: 600, originIds: [17] },
        { id: 19, title: 'XML', x: 800, y: 800, originIds: [1] },
        { id: 20, title: 'SASS', x: 800, y: 1400, originIds: [2] },
        { id: 21, title: 'Material UI', x: 1000, y: 1600, originIds: [2] },
        { id: 22, title: 'MongoDB', x: 1400, y: 600, originIds: [11] },
        { id: 23, title: 'Bootstrap', x: 1200, y: 1400, originIds: [2] },
        { id: 24, title: 'TypeScript', x: 1400, y: 800, originIds: [3] },
        { id: 25, title: 'NPM/Yarn', x: 1400, y: 1200, originIds: [5] },
        { id: 26, title: 'Git/GitHub', x: 1400, y: 1400, originIds: [25] },
        { id: 27, title: 'React Native', x: 1600, y: 1200, originIds: [4] },
        { id: 28, title: 'Angular', x: 1600, y: 800, originIds: [5] },
        { id: 29, title: 'Redux/Router', x: 1800, y: 800, originIds: [4] },
        { id: 30, title: 'Cloud Computing', x: 800, y: 600, originIds: [18] },
        { id: 31, title: 'Google Analytics', x: 1000, y: 400, originIds: [18] },
        { id: 32, title: 'Social Media Marketing', x: 1400, y: 1600, originIds: [] },
        { id: 33, title: 'Flexbox', x: 800, y: 1200, originIds: [2] },
        { id: 34, title: 'GPTs/AI', x: 1600, y: 600, originIds: [] },
        { id: 35, title: 'SEO', x: 400, y: 1000, originIds: [] },
        { id: 36, title: 'Graphic Design', x: 1200, y: 1600, originIds: [] },
        { id: 37, title: 'React Fibre', x: 600, y: 1200, originIds: [] },
        { id: 38, title: 'VS Code', x: 1400, y: 400, originIds: [] },
    ];

    const [starPositions, setStarPositions] = useState(originalStars);
    const [starPositionRange, setStarPositionRange] = useState(80); //50% in any direction, 50% in the opposite... range radius is 50% of starPositionRange
    const [starPositionLimit, setStarPositionLimit] = useState(80);

    const [focusedStar, setFocusedStar] = useState(null);
    const controls = useAnimation();

    const [zoomLevel, setZoomLevel] = useState(0.5);
    const [xPos, setXPos] = useState(350);
    const [yPos, setYPos] = useState(-350);

    const makePositive = (n) => {
        return Math.round(Math.sqrt(n) ^ 2);
    }

    useEffect(() => {
        focusedStar ? setStarPositions(originalStars => originalStars.map((star, index) => {
            let randX = star.x + Math.random() * starPositionRange - starPositionRange / 2;
            let randY = star.y + Math.random() * starPositionRange - starPositionRange / 2;
            return ({
                ...star,
                x: randX,
                y: randY,
            })
        })) : setStarPositions(originalStars);

        controls.start({
            opacity: [0, 0, 1, 1],
            transition: {
                duration: 8,
            }
        });

    }, [focusedStar]);

    const parentVariants = {
        visible: {
            transition: {
                delay: 4,
                staggerChildren: 0.17,
            },
        },
        /*hidden: {
            opacity: '0', 
        }*/
    };

    const childVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const zoomIn = () => {
        let oldZoomLevel = zoomLevel;
        let oldXPos = xPos;
        let oldYPos = yPos;
        oldZoomLevel < 1.75 && setXPos(oldXPos-150/(oldZoomLevel+0.25))
        oldZoomLevel < 1.75 && setZoomLevel(oldZoomLevel > 1 ? oldZoomLevel + 0.25 : oldZoomLevel + 0.1)
    }

    const zoomOut = () => {
        let oldZoomLevel = zoomLevel;
        let oldXPos = xPos;
        let oldYPos = yPos;
        oldZoomLevel > 0.5 && setXPos(oldXPos+100/(oldZoomLevel-0.25))
        oldZoomLevel > 0.5 && setZoomLevel(oldZoomLevel < 1 ? oldZoomLevel - 0.1 : oldZoomLevel - 0.25)
    }

    const panUp = () => {
        let oldYPos = yPos;
        setYPos(oldYPos < 0 ? oldYPos + 200/zoomLevel : oldYPos)
    }

    const panDown = () => {
        let oldYPos = yPos;
        setYPos(oldYPos > (-1400*zoomLevel) ? oldYPos - 200/zoomLevel : oldYPos)
    }

    const panLeft = () => {
        let oldXPos = xPos;
        setXPos(oldXPos < 600 ? oldXPos + 200/zoomLevel : oldXPos)
    }

    const panRight = () => {
        let oldXPos = xPos;
        setXPos(oldXPos > (-1000*zoomLevel) ? oldXPos - 200/zoomLevel : oldXPos)
    }

    const ctrlBtns = {
        width: '40px',
        height: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BBB',
        color: '#333',
        cursor: 'pointer',
        pointerEvents: 'all',
    }

    return (
        <div style={{ display: !isOpen && 'none' }}>
            <div style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                top: '0',
                left: '0',
                zIndex: '100',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                pointerEvents: "none",
            }}>
                <div style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    padding: '1rem',
                }}>
                    <div style={{ width: '136px', height: '136px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={ctrlBtns}
                            onClick={() => panUp()}>
                            ^
                        </div>

                        <div style={{ width: '136px', display: 'flex', justifyContent: 'space-between', alignItems: 'space-between', }}>
                            <div style={ctrlBtns}
                                onClick={() => panLeft()}>
                                left
                            </div>
                            <div style={ctrlBtns}
                                onClick={() => panRight()}>
                                right
                            </div>
                        </div>
                        <div style={ctrlBtns}
                            onClick={() => panDown()}>
                            v
                        </div>
                    </div>
                </div>
                <div style={{ position: 'absolute', right: '0', bottom: '200px', padding: '1rem', height: '96px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
                    <div style={ctrlBtns}
                        onClick={() => zoomIn()}>
                        +
                    </div>
                    <div style={ctrlBtns}
                        onClick={() => zoomOut()}>
                        -
                    </div>
                </div>
                <div style={{ position: 'absolute', right: '0', top: '0', padding: '1rem', }} >
                    <div style={ctrlBtns}
                        onClick={() => setIsOpen(false)}>
                            X
                        </div>
                </div>
            </div>
            <div style={{
                position: 'absolute',
                width: '100vw',
                height: '100vh',
                zIndex: 99,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                pointerEvents: "none",
            }}>
                <div style={{
                    width: windowSize.width < windowSize.height ? windowSize.width * 0.96 : windowSize.height * 0.96,
                    height: windowSize.width < windowSize.height ? windowSize.width * 0.96 : windowSize.height * 0.96,
                    borderRadius: windowSize.width < windowSize.height ? windowSize.width * 0.48 : windowSize.height * 0.48,
                    boxShadow: '0px 0px 10px 2000px rgba(0,0,0,0.9)',
                    border: 'solid 4px #AAA'
                }} />
            </div>
            <motion.div
                variants={childVariants}
                animate={isOpen ? "visible" : "hidden"}
                style={{
                    width: "100vw",
                    height: "100vh",
                    position: "absolute",
                    zIndex: "98",
                    top: 0,
                    left: 0,
                    display: isOpen ? 'flex' : 'none',
                    overflow: "scroll",
                    backgroundColor: 'rgba(0,0,64,0.8)',
                    backdropFilter: "blur(9px)",
                    overflow: 'hidden',
                }}
            >
                <motion.div
                    initial={{
                        zoom: zoomLevel,
                        x: xPos,
                        y: yPos,
                    }}
                    animate={{
                        zoom: zoomLevel,
                        x: xPos,
                        y: yPos,
                    }}
                    transition={{
                        duration: '1',
                    }}
                    style={{
                        width: '2800px',
                        height: '2000px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                    }}>
                    <motion.svg width="2800px" height="2000px"
                        initial={{
                            opacity: 0,
                        }}
                        animate={controls}
                    >
                        {starPositions.map((star, index) => (
                            index < starPositions.length - 1 && star.originIds && star.originIds.map((originId) => (
                                <line
                                    key={`line-${star.id}-${originId}`}
                                    x1={star.x}
                                    y1={star.y}
                                    x2={starPositions[originId - 1].x}
                                    y2={starPositions[originId - 1].y}
                                    stroke={star.title === focusedStar ? "yellow" : starPositions[originId - 1].title === focusedStar ? "#4F4" : "white"}
                                    strokeWidth={(star.title === focusedStar || starPositions[originId - 1].title === focusedStar) ? "1.5" : "1"}
                                />
                            )
                            )
                        ))}
                    </motion.svg>
                    {starPositions.map(star => (
                        <>
                            <motion.div
                                key={star.id}
                                style={{
                                    position: 'absolute',
                                    left: star.x,
                                    top: star.y,
                                }}
                                animate={{
                                    left: star.x,
                                    top: star.y,
                                }}
                                transition={{ duration: 4 }}
                            >
                                <Star title={star.title} xPos={star.x} yPos={star.y} focusedStar={focusedStar} setFocusedStar={setFocusedStar} />
                            </motion.div>
                        </>
                    ))}

                </motion.div>
            </motion.div>
        </div>
    )
}

export default KnowledgeTree;