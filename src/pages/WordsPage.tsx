import { useParams } from "react-router-dom"

const WordsPage = () => {
    const { day } = useParams<{ day: string }>()
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div>Day {day} WordsPage</div>
        </div>
    )
}

export default WordsPage