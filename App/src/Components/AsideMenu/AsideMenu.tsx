import "./AsideMenu.scss"
import { AllStationsList } from "./allStationsList/AllStationsList"
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AsideMenuState, toggleAsideMenu } from "../../Libs/Redux/slices/configsSlice";
import { SearchInput } from "./searchInput";

export const AsideMenu = ()=>{

    const isOpen = useSelector(AsideMenuState)
    const dispatch = useDispatch()

    return(
        isOpen &&
        <section className="component-aside_wrapper row container-fluid">
            <aside className="bg-dark component-aside col-lg-6 col-md-8 d-flex flex-column align-items-center">
                <button className="align-self-end bg-transparent border-0 mt-3 mb-3"
                onClick={()=>dispatch(toggleAsideMenu())}>
                    <AiOutlineClose className="text-white fs-3"/>
                </button>
                <SearchInput className="align-self-start w-75"/>
                <AllStationsList/>
            </aside>
            <div className="component-aside_blur col-auto"
            onClick={()=>dispatch(toggleAsideMenu())}>
            </div>
        </section>
    )
}