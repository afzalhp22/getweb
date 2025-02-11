import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

const MenuItems = ({items,depthLevel}) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    /*const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };*/
    // console.log(items);
    // console.count();
    //console.log(items.submenu);
    return ( 
        /*<li className="menu-items" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >*/
        <li className={['menu-items', items.class.join(' ')].join(' ')} ref={ref}>
        {
            
            items.submenu && (items.submenu.length || Object.values(items.submenu).length) ? ( 
                <>
                    <NavLink className="menu-item-link" to={items.url} aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)} >
                    {items.title}
                    {" "}
                    {depthLevel > 0 ? <span> &raquo; </span> : <span className="arrow" / >}
                    </NavLink>
                    <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} /> 
                </>
            ) : (<NavLink className="menu-item-link" to={items.url} > {items.title} </NavLink>)
        } </li>
    );
};

export default MenuItems;