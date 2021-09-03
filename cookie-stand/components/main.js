import Table from '../components/table'

function Main({newStore, stores}){
    
    return(
        <>
        <Table stores={stores} hoursOPen={hoursOpen}/>
        </>
    )
}