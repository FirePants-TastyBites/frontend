import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

function ErrorBoundary() {
    const navigate = useNavigate();

    return (
        <main className="error-boundary">
            <header>
                <h1>OH NO!</h1>
                <GreenLine />
            </header>
            <section>
                <p>The page you are looking for is not available at the moment.</p>
                <p>In the meantime, you can try refreshing the page or come back in a little while. We appreciate your patience!</p>
                <section>
                    <Button label={"Take Me Back"} type={"primary"} onClick={() => navigate(-1)} />
                </section>
            </section>
        </main>
    );
}

export default ErrorBoundary;