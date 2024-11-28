import './App.css';
import Items from './components/Items';
import Categories from './components/Categories'

function App() {
  return (
    <div className="min-h-screen w-screen bg-black text-white py-2">
      <div className=' flex flex-col items-center justify-center'>
        <h1 className='p-3 text-4xl font-bold '>FILTERABLE GALLERY</h1>
        <Categories />
        <Items />
      </div>
    </div>
  );
}

export default App;
