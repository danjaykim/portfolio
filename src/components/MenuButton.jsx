import { motion, MotionConfig } from 'framer-motion'

// Button background: rounded-full bg-slate-400/0 transition-colors hover:bg-slate-400/20

export default function MenuButton({ open, setOpen }) {
    return (
        <motion.button
            onClick={() => setOpen((prevState) => !prevState)}
            className="relative h-14 w-14 md:hidden z-10"
            animate={open ? 'open' : 'closed'}
            initial={false}
        >
            <motion.span
                className="absolute h-1 w-7 bg-slate-700"
                style={{
                    left: '50%',
                    top: '35%',
                    x: '-50%',
                    y: '-50%',
                }}
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
                className="absolute h-1 w-7 bg-slate-700"
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
                className="absolute h-1 w-3.5 bg-slate-700"
                style={{
                    left: 'calc(50% + 10px)',
                    bottom: '35%',
                    x: '-72%',
                    y: '50%',
                }}
                variants={{
                    open: {
                        rotate: ['0deg', '0deg', '45deg'],
                        left: '50%',
                        bottom: ['35%', '50%', '55%'],
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
