import React, {useState, useEffect} from 'react';
import UserCard from './UserCard';
import ReactPaginate from 'react-paginate';
import Axios from 'axios';
import './UserCard.css';

const PER_PAGE = 5;

const UserDetailList = (props) =>{
    
    const {userName} = props; 
    const [profileList , setProfileList] = useState({});

    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotleCount] = useState(0);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if(userName)
        handleSearch();
    }, [userName,currentPage]);

    const handleSearch = async () => {
        try {
            const resp = await Axios.get(`https://api.github.com/search/users?q=${userName}&per_page=${PER_PAGE}&page=${currentPage}`);
            
            const total_count = resp.data.total_count <= 1000 ? resp.data.total_count : 1000;
            
            setTotleCount(total_count);
            setProfileList(resp.data.items);
            
        } catch (error) {
            setProfileList("");
            setIsError(true);
        }
    }

    const pageCount = Math.ceil(totalCount / PER_PAGE);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    
    return(
        <div>
            {
                isError && 
                <div> Something went wrong!! Please refresh </div>
            }
            { 
                !isError && profileList && profileList.length ===0 &&
                    <div> No result found for this search!</div>
            }
            { !isError && profileList && profileList.length >0  &&
                <div>
                   
                    { profileList.map((profile, index) => (
                        <UserCard profile={profile} key ={profile.id}></UserCard>
                    ))
                    }

                    <ReactPaginate
                        previousLabel={"← Previous"}
                        nextLabel={"Next →"}
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                        marginPagesDisplayed={3}
                        containerClassName={"pagination"}
                        previousClassName={"pagination__link"}
                        pageClassName={"pagination__link"}
                        nextClassName={"pagination__link"}
                        // disabledClassName={"pagination__link--disabled"}
                        // activeClassName={"pagination__link--active"}
                    />
            
            <div className="Count"> Total Records: {totalCount} </div> 
                </div>
                
            }

            
        </div>
        
    )
} 

export default UserDetailList;

