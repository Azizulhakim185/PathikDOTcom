const calculateAvgRating = reviews =>{
     const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
    
      const avgRating =
        totalRating === 0
          ? ""
          : totalRating === 1
          ? totalRating
          : (totalRating / reviews?.length).toFixed(1); // Adding .toFixed(1) for one decimal point if needed
        


return {
    totalRating,
    avgRating
}
}
export default calculateAvgRating;