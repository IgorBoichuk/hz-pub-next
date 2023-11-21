import React from 'react';
import style from './IconPac.module.scss';
import {
	Burgermenu,
	Cross,
	Cursor,
	Facebook,
	Instagram,
	Line,
	Menu,
	Quote,
} from '../../../../public/assets/galary/svg';

// type Name = 'burgermenu' | 'cross' | 'cursor' | 'facebook' | 'quoteSolid' | 'instagram' | 'line' | 'menu' | 'quote';

// interface IconPacProps {
// 	custom?: string;
// 	name: Name;
// }

export const IconPac = name => {
	switch (name) {
		case 'burgermenu':
			return <Burgermenu className={style.burgermenu} />;
		case 'cross':
			return <Cross className={style.cross} />;
		case 'cursor':
			return <Cursor className={style.cursor} />;
		case 'facebook':
			return <Facebook className={style.facebook} />;
		// case 'quoteSolid':
		// 	return <QuoteSolid className={style.quoteSolid} />;
		case 'instagram':
			return <Instagram className={style.instagram} />;
		case 'line':
			return <Line className={style.line} />;
		case 'menu':
			return <Menu className={style.menu} />;
		case 'quote':
			return <Quote className={style.quote} />;

		default:
			break;
	}
};
