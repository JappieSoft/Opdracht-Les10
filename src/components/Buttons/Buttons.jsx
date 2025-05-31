function Buttons({style, buttonType, onClick}) {
    return (
                    <button className={style} onClick={onClick}>{buttonType}</button>
    )
}
export default Buttons;