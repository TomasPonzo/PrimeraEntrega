import ProfileCard from "./ProfileCard";
import Iphone12 from "./img/iphone12.png";
import Iphone13 from "./img/iphon13.png";
import Iphone14 from "./img/iphone14.png";


function App() {

    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Apple</p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard titulo="Iphone12" arroba="@i12" img={Iphone12} />
                        </div>
                        <div className="column is-4">
                            <ProfileCard titulo="Iphone13" arroba="@i13" img={Iphone13} />
                        </div>
                        <div className="column is-4">
                            <ProfileCard titulo="Iphone14" arroba="@i14" img={Iphone14} />
                        </div>
                    </div>
                </section>


            </div>



        </div>

    )
}

export default App;
