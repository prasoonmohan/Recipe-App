import React from 'react'
import { useState } from 'react';

function Pagination(props) {

  let [activePagination,setActivePagination] = useState(1)

    let numberOfPage = []
    for(let i=1;i<=Math.ceil((props.filteredDishes.length / props.itemsPerPage));i++){
        numberOfPage.push(i);
    }

    function showNextDishesHandler(event){
      let currentPage = event.target.id
      setActivePagination(currentPage)
      props.setcurrentPage (currentPage)
    }
    
    let page = numberOfPage.map((pageNumber)=>{
        return(
            <li id={pageNumber} className={pageNumber == activePagination ? "active" : ""}
             onClick={showNextDishesHandler}>
                {pageNumber}
            </li>
        )
    })
  return (
    <section>
      <ul className='pagination flex'>
        {page}
      </ul>
    </section>
  )
}

export default Pagination
