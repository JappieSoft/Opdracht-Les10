function Fruits({img, title, name, data, setdata}) {
    return (
        <div>
            <article>
                <img src={img} alt={title}/>
                <h3>{title}</h3>
                <div className="fruitButtons">
                    <button className="calcButton" onClick={() => calcIncrement(name)}>-</button>
                    <p>{data}</p>
                    <button className="calcButton">+</button>
                </div>
            </article>
        </div>

    )
}
export default Fruits;