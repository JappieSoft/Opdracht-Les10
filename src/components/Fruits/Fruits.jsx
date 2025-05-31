function Fruits({img, title, children}) {
    return (
        <div>
            <article>
                <div>
                    <article>
                        <img src={img} alt={title}/>
                        <h3>{title}</h3>
                        {typeof children === 'function' ? children({title, name}) : children}
                    </article>
                </div>
            </article>
        </div>

    )
}

export default Fruits;