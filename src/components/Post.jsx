export default function Post({img, author, content}) {
    return (
        <div className="card">
            <img src={img} />
            <strong>{author}</strong>
            <p>{content}</p>
        </div>
    );
}
