import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = ({children})=>{
    const [searchValue,setSearchValue] = useState("");
    const setSearch =(value)=>{
        setSearchValue(value);
    }
    const getSearchValue = ()=>{
        return searchValue;
    }
    return(
        <SearchContext.Provider value={{setSearch,getSearchValue}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider;