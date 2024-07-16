import Post from "./Post";

export default function DataPost() {
    return (
        <>
        <Post 
            author={"Carlos Primeiro"}
            img={"https://www.pexels.com/pt-br/foto/sentir-22691219/"}
            content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque provident error nobis iure dolore? Voluptatem beatae dolor magni minus architecto, nulla nemo repellendus quibusdam ab tenetur facere commodi ducimus soluta?"}
        />
        <Post 
            author={"Carlos Segundo"}
            img={"https://www.pexels.com/pt-br/foto/sentir-22691219/"}
            content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque provident error nobis iure dolore? Voluptatem beatae dolor magni minus architecto, nulla nemo repellendus quibusdam ab tenetur facere commodi ducimus soluta?"}
        />
        </>
    );
}

