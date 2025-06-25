const TopRatedRestaurant =(props)=>{
  const filterTopRatedRestaurant =() =>{
     
    const toprated=  props.restaurant.filter((data) => data.rate>=4.5);
    props.onFilter(toprated)
    console.log("top",toprated)
}
    return (
        <button className="bg-blue-500 text-white p-4 rounded-lg" onClick={filterTopRatedRestaurant}>TopRatedRestaurant</button>
    );
};
export default TopRatedRestaurant;