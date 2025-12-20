export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

export const itemVariants = {
    hidden: {
        opacity: 0,
        y: 60,
        filter: "blur(10px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 200,
            duration: 0.8
        },
    },
};

export const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.6,
        },
    },
};

export const titleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
        },
    },
};

export const buttonVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 300,
            delay: 0.6
        },
    },
    hover: {
        scale: 1.05,
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 400,
        },
    },
    tap: {
        scale: 0.95,
    },
};


export const statItemVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.9,
        filter: "blur(6px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 20,
        },
    },
    hover: {
        scale: 1.05,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 15,
        },
    },
};

export const imageVariants = {
    hidden: {
        opacity: 0,
        x: -60,
        scale: 0.9,
        filter: "blur(10px)",
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.8,
        },
    },
    hover: {
        scale: 1.02,
        transition: {
            duration: 0.3,
        },
    },
};

export const paragraphVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1 + 0.4,
            duration: 0.6,
        },
    }),
};