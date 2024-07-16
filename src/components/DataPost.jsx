import DinamicPost from "./DinamicPost";
import Post from "./Post";

export default function DataPost() {
    return (
        <div>
            <Post
                author={"Carlos Primeiro"}
                img={"https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=600"}
                content={"Mussum Ipsum, cacilds vidis litro abertis.  Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Sapien in monti palavris qui num significa nadis i pareci latim. In elementis mé pra quem é amistosis quis leo. Suco de cevadiss deixa as pessoas mais interessantis."}
            />
            <DinamicPost>
                <h1>Geração Tech GT02-SUL</h1>
            </DinamicPost>
            <Post
                author={"Carlos Segundo"}
                img={"https://images.pexels.com/photos/48262/pexels-photo-48262.jpeg?auto=compress&cs=tinysrgb&w=600"}
                content={"Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Si num tem leite então bota uma pinga aí cumpadi! Paisis, filhis, espiritis santis. Atirei o pau no gatis, per gatis num morreus."}
            />
            <DinamicPost>
                <img src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </DinamicPost>
            <Post
                author={"Natan Primeiro"}
                img={"https://images.pexels.com/photos/1153838/pexels-photo-1153838.jpeg?auto=compress&cs=tinysrgb&w=600"}
                content={"Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. Suco de cevadiss deixa as pessoas mais interessantis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per."}
            />
            <DinamicPost>
                <h1>Geração Tech GT02-SUL</h1>
            </DinamicPost>
        </div>
    );
}
