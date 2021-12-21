import Navbar from './components/Navbar';
import Addbox from './components/Addbox';
import Todo from './components/Todobox';
import Footer from './components/Footer';

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