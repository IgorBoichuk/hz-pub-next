'use client';
import React from 'react';
import style from './header.module.scss';

import Logo from '../../../public/assets/galary/logo.png';
import { Container } from '../shared/Container/Container';

import { Navmenu } from '../shared/Navmenu/Navmenu';
// import sprite from '../../assets/galary/svg/sprite.svg';
// import { Modal } from '../shared/Navmodal/Modal';
import { AnimatePresence } from 'framer-motion';
import { useToggleModal } from '../../helpers/hooks/useToggleModal';
import Link from 'next/link';
import Image from 'next/image';
import { IconPac } from '../shared/iconsComponents/IconPac';

export const Header = () => {
	const { isModal, toggle } = useToggleModal();
	return (
		<header className={style.header}>
			<Container>
				<AnimatePresence>{isModal && <Modal close={toggle} />}</AnimatePresence>
				<div className={style.headerwrapper}>
					<Link href='/' className={style.logolink}>
						<Image src={Logo} alt='Logo' className={style.logo} width={100} height={50} />
					</Link>
					<nav className={style.navmenu}>
						<Navmenu flex='row' />
					</nav>
					{/* <Link to='tel:+380662408540' className={style.navlink}>
						+380662408540
					</Link> */}
				</div>
				<button type='button' className={style.burgerButton} onClick={toggle}>
					{/* <svg className={style.menuIconBurger} style={{ display: isModal ? 'none' : 'block' }} width='24' height='24'>
						<use xlinkHref={`${sprite}#menu`}></use>
					</svg>
					<svg className={style.menuIconCross} style={{ display: isModal ? 'block' : 'none' }} width='24' height='24'>
						<use xlinkHref={`${sprite}#cross`}></use>
					</svg> */}
					<IconPac name='burgermenu' />
					<IconPac name='cross' />
				</button>
			</Container>
		</header>
	);
};
