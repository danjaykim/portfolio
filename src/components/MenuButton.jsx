import { useState } from 'react'
import { motion, MotionConfig } from 'framer-motion'

export default function MenuButton() {
    const [active, setActive] = useState(false)

    return (
        <motion.button
            onClick={() => setActive((pv) => !pv)}
            className="relative h-20 w-20 rounded-full bg-slate-400/0 transition-colors hover:bg-slate-400/20"
            animate={active ? 'open' : 'closed'}
            initial={false}
        >
            <motion.span
                className="absolute h-1 w-10 bg-slate-700"
                style={{ left: '50%', top: '35%', x: '-50%', y: '-50%' }}
                variants={{
                    open: {
                        rotate: ['0deg', '0deg', '45deg'],
                        top: ['35%', '50%', '50%'],
                    },
                    closed: {
                        rotate: ['45deg', '0deg', '0deg'],
                        top: ['50%', '50%', '35%'],
                    },
                }}
            />
            <motion.span
                className="absolute h-1 w-10 bg-slate-700"
                style={{
                    left: '50%',
                    top: '50%',
                    x: '-50%',
                    y: '-50%',
                }}
                variants={{
                    open: {
                        rotate: ['0deg', '0deg', '-45deg'],
                    },
                    closed: {
                        rotate: ['-45deg', '0deg', '0deg'],
                    },
                }}
            />
            <motion.span
                className="absolute h-1 w-5 bg-slate-700"
                style={{
                    left: 'calc(50% + 10px)',
                    bottom: '35%',
                    x: '-50%',
                    y: '50%',
                }}
                variants={{
                    open: {
                        rotate: ['0deg', '0deg', '45deg'],
                        left: '50%',
                        bottom: ['35%', '50%', '50%'],
                    },
                    closed: {
                        rotate: ['45deg', '0deg', '0deg'],
                        left: 'calc(50% + 10px)',
                        bottom: ['50%', '50%', '35%'],
                    },
                }}
            />
        </motion.button>
    )
}
