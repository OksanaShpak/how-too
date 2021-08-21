import icon from "../assets/img/arrow-up.svg";

function Spoiler({quantity = "5"}) {
return (
<div>
    <div className="spoiler">
        {
        new Array(+quantity).fill(1).map((el, index)=> (
        <div className="spoiler__item" key={index}>
            <input className="spoiler__checkbox" type="checkbox" id={`spoiler__checkbox-${index}`} />
            <label className="spoiler__title" htmlFor={`spoiler__checkbox-${index}`} role="button" aria-label="open close text">
                <span>lOREM IPSUM</span>
                <img src={icon} alt="arrow icon" />
            </label>
            <div className="spoiler__text">
                Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed
                quis massa pulvinar justo interdum tempor. Maecenas lobortis
                tristique massa, sit amet malesuada elit dignissim ut.
            </div>
        </div>
        ))
        }
    </div>
</div>
);
}

export default Spoiler;