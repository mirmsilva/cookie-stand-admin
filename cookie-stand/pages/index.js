import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Form from '../components/form'
import { useEffect, useState } from 'react'


export default function Home() {
  
    const [store, setStore] = useState({});
    const [stores, setStores] = useState([]);

    const NewStore = (store)=>{
      setStore(store);
      setStores([...stores, store]);
    }

    const GetStores=() =>{
        const response = await axios.get('website here');
        setStore(response.data);
    }
    
    useEffect(()=>{
      console.log("effect is running");
      GetStores();
  
    }, []);

  return (
    <>
      <Head/>
      <Header/>
      <Main newStore={newStore} stores={stores}/>
      <Footer/>
    </>
  )
}
