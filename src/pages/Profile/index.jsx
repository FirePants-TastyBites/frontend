import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import GreenLine from "../../components/GreenLine";
import './Profile.scss';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";


function Profile() {
    const userId = useSelector(state => state.order.userId);
    const [cookies, setCookies, removeCookies] = useCookies(["userId"]);
    const navigate = useNavigate();

    console.log(cookies.userId)

    useEffect(() => {
        if (!cookies.userId) {
            navigate('/error')
        }
    }, [])

    function handleLogOut() {
        removeCookies("userId");
        navigate('/');
    }

    return (
        <main className="profile">
            <header>
                <h1>HELLO SUNSHINE</h1>
                <GreenLine />
            </header>

            <section>
                <p>
                    Welcome back! Check out your order history, keep tabs on your culinary adventures, and snag exclusive deals. It's your space—explore, enjoy, and let's make your dining experience awesome!
                </p>
                <Button label={"View Your Orders"} type={"primary"} onClick={() => navigate('/order-history')}/>
                <Button label={"Order Here"} type={"secondary"} onClick={() => navigate('/menu')}/>
            </section>
            <figure>
                <img src="https://images.unsplash.com/photo-1519671282429-b44660ead0a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </figure>
            <section>
                <h2>What’s new at Tasty Bites?</h2>
                <p>
                    We're cooking up something fresh and exciting at Tasty Bites, and we can't wait to share it with you! Join us for a casual gathering of good vibes, delicious bites, and a sprinkle of surprise.
                </p>
                <p>
                    Bring your appetite, bring your friends, and let's celebrate the joy of great food and good company. It's a small happening with a big flavor, and we'd love to share it with our fantastic Tasty Bites community.
                </p>
                <Button label={"Join The Fun"} type={"primary"} />
            </section>
            <Button label={"Sign Out"} type={"secondary"} onClick={handleLogOut}/>

        </main>
    );
}

export default Profile;