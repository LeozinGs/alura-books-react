import './styles.css';

const List = ({ className, itemsList, listItemName }) => {

    const isImageOrString = (item) => typeof item === "string" && item.startsWith("data:image") || item.startsWith("http") || /\.(jpg|jpeg|svg|png|gif|bmp|webp)$/.test(item);

    return (
        <ul className={className}>
            {itemsList.map((item) => {
                return <li className={listItemName}>
                    {isImageOrString(item) ?
                        <img src={item} />
                        :
                        <p>{item}</p>
                    }
                </li>
            })
            }
        </ul>
    );
}

export default List;