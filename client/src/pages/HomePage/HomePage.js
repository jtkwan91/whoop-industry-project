import './HomePage.scss';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar.jsx';
import ProgressBar from '../../components/Progress/ProgressBar';

function HomePage() {

    return (
        <div>
            <Header />
            <Navbar />
            <ProgressBar />
        </div>
    )
}

export default HomePage;