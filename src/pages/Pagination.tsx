import type { CSSProperties, MouseEvent } from "react"


type PaginationProps={
    currentPage:number,
    totalPage:number
    onPageChange:(a:number)=> void
}


export function  Pagination({currentPage=1, totalPage=10, onPageChange}:PaginationProps){

    const pages = Array.from({length:totalPage}, (_,currentPage)=>currentPage+1)
    
    const isFirsPage= currentPage === 1
    const isLastPage = currentPage === totalPage

    const stylePrevButton: CSSProperties = isFirsPage ? {pointerEvents: "none", opacity: 0.5} : {}
    const styleNextButton: CSSProperties = isLastPage ? {pointerEvents: "none", opacity: 0.5} : {}

    const handleFirstPage= (e:MouseEvent<HTMLAnchorElement>)=>{
            e.preventDefault();
            if(isFirsPage === false){
                onPageChange(currentPage-1)
            }
    }
    const handleLastPage= (e:MouseEvent<HTMLAnchorElement>)=>{
            e.preventDefault();
            if(isLastPage === false){
                onPageChange(currentPage+ 1)
            }
    }
    const handleChangePage= (e:MouseEvent<HTMLAnchorElement>, page:number)=>{
            e.preventDefault();
                if(page !== currentPage){
                    onPageChange(page)
                }
    }

    
    return (<>
        <nav className="flex justify-center items-center gap-5 my-2">
                <a href="#" className="flex w-10 h-10 hover:bg-white rounded-md" style={stylePrevButton}
                onClick={handleFirstPage}>
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 400"><path d="M456.0538024902344,295.0672607421875C456.0538024902344,295.0672607421875,178.92376708984375,191.92825317382812,178.92376708984375,191.92825317382812C178.92376708984375,191.92825317382812,453.36322021484375,63.67713165283203,453.36322021484375,63.67713165283203" fill="none" strokeWidth="21" stroke="url(&quot;#SvgjsLinearGradient1001&quot;)" strokeLinecap="round"></path><defs><linearGradient id="SvgjsLinearGradient1001"><stop stopColor="hsl(205, 69%, 60%)" offset="1"></stop><stop stopColor="hsl(205, 69%, 80%)" offset="1"></stop></linearGradient></defs></svg>
                </a>


            {pages.map(page=>(
                <a
                key={page}
                href="#"
                onClick={(e)=>handleChangePage(e, page)}
                className={`${currentPage === page ?"text-white bg-blue-400 px-2 rounded-md":
                 "text-gray-200 hover:bg-cyan-950 px-2  rounded-md"}
                 
                 `}>
                    {page}
                </a>
            ))}


           <a href="#" className="flex w-10 h-10 hover:bg-white rounded-md" style={styleNextButton}
           onClick={handleLastPage}>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 800 400"><path d="M456.0538024902344,295.0672607421875C456.0538024902344,295.0672607421875,178.92376708984375,191.92825317382812,178.92376708984375,191.92825317382812C178.92376708984375,191.92825317382812,453.36322021484375,63.67713165283203,453.36322021484375,63.67713165283203" fill="none" strokeWidth="21" stroke="url(&quot;#SvgjsLinearGradient1001&quot;)" strokeLinecap="round" transform="matrix(-1,0,0,1,634.9775695800781,-5.684341886080802e-14)"></path><defs><linearGradient id="SvgjsLinearGradient1001"><stop stopColor="hsl(205, 69%, 60%)" offset="0"></stop><stop stopColor="hsl(205, 69%, 80%)" offset="1"></stop></linearGradient></defs></svg>
            </a>


        </nav>
        </>)
}