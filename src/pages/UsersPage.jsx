import axios from "axios";
import { useEffect, useState } from "react";
import UserCards from "../ui/UserCards";
import FilterUser from "../ui/FilterUser";
import { useSelector } from "react-redux";

const UsersPage = () => {
    const userName = useSelector((state) => state.search.search);
    const [users, setUsers] = useState([]);
    const [searchedUsers, setSearchedUsers] = useState([]);
    const [openDropdownId, setOpenDropdownId] = useState(null);

    //filtered data from redux
console.log(userName)
    useEffect(() => {
        axios.get("http://localhost:3000/user")
            .then((res) => {
                setUsers(res.data.result);
                if (userName) {
                    const lowerSearchedName = userName.toLowerCase();
                    const searchResult = res.data.result.filter(user => (user.first_name.toLowerCase()  == lowerSearchedName) || ((user.first_name+" "+ user.last_name).toLowerCase()  == lowerSearchedName));
                    setSearchedUsers(searchResult);
                }
            })
            .catch((error) => console.error("Error fetching users:", error));
    }, [userName]);
    const domain= users.map(item=> item.domain)
    console.log(domain);
    const uniqueDomain = [...new Set(domain)];
    const handleDropdown = (id) => {
        setOpenDropdownId(id === openDropdownId ? null : id);
    };
console.log(searchedUsers);
    return (
        <div className="md:mx-12 mx-2">
            <div className="my-5">
                <FilterUser domainNames={uniqueDomain}></FilterUser>
                {/* <p>{userName}</p> */}
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-5 gap-2 ">
                {searchedUsers.length > 0 ? searchedUsers.map((user) => (
                    <UserCards
                        key={user.id}
                        user={user}
                        open={user.id === openDropdownId}
                        handleDropdown={handleDropdown}
                       
                    />
                )) : users.map((user) => (
                    <UserCards
                        key={user.id}
                        user={user}
                        open={user.id === openDropdownId}
                        handleDropdown={handleDropdown}
                        
                    />
                ))}
            </div>
        </div>
    );
};

export default UsersPage;
