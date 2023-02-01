import './Tags.css';

const Tags = ({ tags }) => {
    return (
        <div className="tags">
            {tags.map(tag => {
                return (
                    <div className="tag" key={tag}>
                        <p>{tag}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Tags;
