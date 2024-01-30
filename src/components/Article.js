function Article({ title, date="January 1, 1970", preview, minutes }) {
    let numIcon = 0;
    let typeIcon = "";
    let iconList = "";
    if (minutes < 30) {
        typeIcon = "☕️";
        numIcon = Math.ceil(minutes / 3);
    } else {
        typeIcon = "🍱";
        numIcon = Math.ceil(minutes / 10);
    }
    for (let i = 0; i < numIcon; i++) {
        iconList += typeIcon;
    } 
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{iconList} {minutes} minutes read</p>
        </article>
    );
}

export default Article;