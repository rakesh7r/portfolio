import { motion } from 'motion/react'
export default function ZoomIn({ children, zoom = 1.2 }: { children: React.ReactNode; zoom?: number }) {
    return (
        <motion.div whileHover={{ scale: zoom }} whileTap={{ scale: 0.85 }} className="cursor-pointer">
            {children}
        </motion.div>
    )
}
