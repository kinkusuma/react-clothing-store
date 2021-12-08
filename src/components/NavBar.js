import React, { useState } from "react";
import { RiTShirtFill, RiShoppingBagLine, RiHeart2Line } from "react-icons/ri";
import NavBarItem from "./NavBarItem";
import NavUserItem from "./NavUserItem";
import NavUserProfile from "./NavUserProfile";

export default function NavBar(props) {
  const { cartValue, likeValue } = props;
  const navItems = ['Men', 'Women', 'Kids', 'Baby', 'Sale'];
  const [current, setCurrent] = useState(navItems[0]);

  return (
    <div className='mb-7 grid md:grid-cols-6 justify-center items-center'>
      <div className='flex justify-center md:justify-start gap-3 font-mono font-bold'>
        <RiTShirtFill size='26' color='#22333b'/>
        ABCDZ
      </div>
      <div className='md:col-span-3 py-1 flex flex-row md:gap-5'>
        { navItems.map(item =>
          <NavBarItem
            name={item}
            current={current === item}
            onClick={()=>{setCurrent(item)}}
          />
        )}
      </div>
      <div className='md:col-span-2 flex flex-row justify-center md:justify-end gap-7'>
        <NavUserItem icon={<RiShoppingBagLine size='24' />} count={cartValue} />
        <NavUserItem icon={<RiHeart2Line size='24' />} count={likeValue} />
        <NavUserProfile image='https://randomuser.me/api/portraits/women/90.jpg' />
      </div>
    </div>
  )
}
