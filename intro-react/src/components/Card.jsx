import style from './Card.module.css'

export function Card() {
    return (
        <div className={ style.card }>
            <div className={ style.header }>
                <div className={ style.userContainer }>
                    <img src="https://github.com/g4brielklein.png" alt="User profile picture" />
                    <div className={ style.userInfo }>
                        <strong>Gabriel Klein</strong>
                        <span>Software Developer</span>
                    </div>
                </div>
                <time title="November 7, 2024, 3:11PM" dateTime="2024-11-07 15:11:25">Published 1hr ago</time>
            </div>
            <div className={ style.content }>
                <p>
                    Hey everybody, I want to let you guys know that I've just started at 
                    a new position as a Software Developer at TechHub! 🚀

                    #softwareEngineering #development
                </p>
            </div>
            <div className={ style.comments }>
                <strong>Leave your feedback</strong>
                <textarea></textarea>
                <button>Publish</button>
            </div>
        </div>
    )
}
