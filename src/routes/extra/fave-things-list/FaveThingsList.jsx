import "./fave-things-list.scss";
import { items } from "./listArray";

const FaveThingsList = () => {
  return (
    <div className="fave-things-list">
      <h2 className="list-title">Favorite things right now</h2>
      <ul className="list">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="list-item"
            >
              {/* Construct a single string with all the details on one line */}
              {`${item.title} — ${item.type}${
                item.author ? ` by ${item.author}` : ""
              }${item.artist ? `  by ${item.artist}` : ""}
              `}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaveThingsList;
