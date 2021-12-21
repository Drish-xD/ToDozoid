import Navbar from './components/Navbar';
import Addbox from './components/Addbox';
import Todo from './components/Todobox';
import Footer from './components/Footer';
import "./assets/styles.css";

const App = () => {
    return (
        <div>
            <Navbar />
            <Addbox />
            <Todo />
            <Footer />
        </div>
    )
}

export default App