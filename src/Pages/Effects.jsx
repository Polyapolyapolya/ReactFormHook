import React from 'react'
import * as motion from "motion/react-client"
export default function Effects() {
  return (
    <>
      <hr />
      <p>Кнопка меняет своё состаяние</p>
      <motion.button
        whileHover={{ scale: 1.1, background: '#01d4a3ff' }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: "#2196f3",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
        Наведи на меня
      </motion.button>
      <hr/>
      <p>Внезапное появление</p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut'  }}
        style={{
          padding: "20px",
          backgroundColor: "#e0f7fa",
          borderRadius: "8px",
          margin: "20px 0"
        }}
        >
        Появляюсь плавно
      </motion.div>
      <hr/>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={
          {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.5
              }
            }
          }
        }

        style={{ listStyle: "none", padding: 0 }}
      >
        <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} style={{
          padding: "20px",
          backgroundColor: "#e0f7fa",
          borderRadius: "8px",
          margin: "20px 0",
          fontSize: "16px"
        }}>Текст 1</motion.li>
        <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} style={{
          padding: "20px",
          backgroundColor: "#e0f7fa",
          borderRadius: "8px",
          margin: "20px 0",
          fontSize: "16px"
        }}>Текст 2</motion.li>
        <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} style={{
          padding: "20px",
          backgroundColor: "#e0f7fa",
          borderRadius: "8px",
          margin: "20px 0",
          fontSize: "16px"
        }}>Текст 3</motion.li>
        <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} style={{
          padding: "20px",
          backgroundColor: "#e0f7fa",
          borderRadius: "8px",
          margin: "20px 0",
          fontSize: "16px"
        }}>Текст 4</motion.li>
      </motion.ul>
    </>
  )
}
