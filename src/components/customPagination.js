import { Pagination } from '@material-ui/lab';
import React from 'react'
function CustomPagination({setPage,numbOfPages=10}) {
    const handlePageChange=(page)=>{
        setPage(page);
        window.scroll(0,0)
    }
    return (
        <div>
         <Pagination
         count={numbOfPages}
         onChange={(e)=>handlePageChange(e.target.textContent)}
         />   
        </div>
    )
}

export default CustomPagination
