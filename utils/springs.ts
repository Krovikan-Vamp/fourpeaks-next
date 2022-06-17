import { useSpring, useSprings } from "react-spring";

function fadeInSprings(array: any[]) {
    return useSprings(
        array.length,
        array.map((item, index) => ({ from: { opacity: 0, y: 100 }, to: { opacity: 1, y: 0 }, delay: index * 100 }))
    ).map((spring) => spring);    
}

function fadeInSpring() {
    return useSpring({ from: { opacity: 0, y: 100 }, to: { opacity: 1, y: 0 } })
}

export { fadeInSprings, fadeInSpring };