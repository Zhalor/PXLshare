import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App(props) {

  return (
    <>
    <Header user={props.user} />
    <Content />
    <Footer />
    </>
  )
}

export default App;
