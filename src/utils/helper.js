export function filterData(searchInput,allRest){
    const filterData= allRest.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase()));
    return filterData;
  }