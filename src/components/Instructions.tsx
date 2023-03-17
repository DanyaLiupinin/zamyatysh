import React from "react"

interface InstructionsProps {
    childrenRas?: number,
    childrenDva: string
}

const Instructions: React.FC<InstructionsProps> = ({childrenRas, childrenDva}) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e)
    }

    return (
        <div>
            {childrenRas}
            {childrenDva}
        </div>
    )
}

export default Instructions

// создавать интерфейсы для элементов 

/* 

interface InstructionsProps {
    childrenRas?: number,
    childrenDva: string
}

*/