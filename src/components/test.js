(function () {
	/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
	'use strict';
	var aa = '-t-k0-und',
		ba = 'Africa Latin',
		ca = 'CYRILLIC TYPEWRITTER',
		f = 'DIV',
		da = 'Deutsch',
		ea = 'Din\u00e9 bizaad - Modern',
		ha = 'Edge',
		ia = 'English',
		ja = 'Fran\u00e7ais',
		ka = 'GOOGLE_INPUT_CHEXT_FLAG',
		la = 'GOOGLE_INPUT_NON_CHEXT_FLAG',
		ma = 'IFRAME',
		na = 'INPUT',
		oa = 'IS_INPUT_ACTIVE',
		pa = 'Inscript',
		qa = 'Invalid event type',
		ra = 'Italiano',
		sa = 'Move cursor to a text field before you click a candidate',
		ta = 'Nederlands',
		ua = 'Opera',
		va = 'PHONETIC',
		wa = 'Portugu\u00eas',
		xa = 'Portugu\u00eas brasileiro',
		ya = 'Portugu\u00eas europeu',
		za = 'SCRIPT',
		m = 'SPAN',
		Aa = 'TEXTAREA',
		Ba = 'US International',
		Ca = 'Uneven number of arguments',
		Da = 'about:invalid#zClosurez',
		Ea = 'absolute',
		Fa = 'act',
		Ga = 'action',
		Ha = 'activedescendant',
		Ia = 'af-t-i0-handwrit',
		Ja = 'am-t-i0-handwrit',
		La = 'am-t-i0-und',
		Ma = 'ar-t-i0-handwrit',
		Na = 'ar-t-i0-und',
		Oa = 'ar-t-k0-und',
		Pa = 'aria-label',
		Qa = 'as-t-i0-handwrit',
		Ra = 'assertive',
		Sa = 'autocapitalize',
		Ta = 'az-t-i0-handwrit',
		Ua = 'be-t-i0-handwrit',
		Va = 'be-t-i0-und',
		Wa = 'be-t-k0-und',
		Xa = 'bg-t-i0-handwrit',
		Ya = 'bg-t-i0-und',
		Za = 'bg-t-k0-qwerty',
		$a = 'bg-t-k0-und',
		ab = 'blur',
		bb = 'bn-t-i0-handwrit',
		cb = 'bn-t-i0-und',
		db = 'bn-t-k0-und',
		eb = 'bn-t-und-latn-k0-und',
		fb = 'bo-t-i0-handwrit',
		gb = 'bs-t-i0-handwrit',
		hb = 'bs-t-k0-und',
		ib = 'ca-t-i0-handwrit',
		jb = 'ca-t-k0-und',
		kb = 'ccp-t-k0-und',
		lb = 'ceb-t-i0-handwrit',
		mb = 'cfx',
		nb = 'changeState',
		ob = 'character',
		pb = 'checked',
		qb = 'chr-t-k0-und',
		rb = 'chr-t-und-latn-k0-und',
		sb = 'ckb-t-k0-ar',
		tb = 'ckb-t-k0-en',
		n = 'click',
		ub = 'co-t-i0-handwrit',
		vb = 'co-t-k0-accents',
		wb = 'complete',
		xb = 'compositionend',
		zb = 'contextmenu',
		Ab = 'crk-t-k0-phone',
		Bb = 'cs-t-i0-handwrit',
		Cb = 'cs-t-k0-qwertz',
		Db = 'cs-t-k0-und',
		Eb = 'cy-t-i0-handwrit',
		Fb = 'cy-t-k0-und',
		Gb = 'da-t-i0-handwrit',
		Hb = 'da-t-k0-und',
		Ib = 'dblclick',
		Jb = 'de-ch-t-k0-und',
		Kb = 'de-t-i0-handwrit',
		Lb = 'de-t-i0-und',
		Mb = 'de-t-k0-accents',
		Nb = 'de-t-k0-intl',
		Ob = 'de-t-k0-und',
		Pb = 'delete',
		Sb = 'direction',
		Tb = 'disabled',
		Ub = 'dz-t-k0-und',
		Vb = 'el-t-i0-handwrit',
		Wb = 'el-t-i0-und',
		Xb = 'el-t-k0-und',
		q = 'en',
		Yb = 'en-t-i0-handwrit',
		Zb = 'en-t-i0-und',
		$b = 'en-t-k0-dvorak',
		ac = 'en-t-k0-und',
		bc = 'en-us-t-k0-intl',
		cc = 'eo-t-i0-handwrit',
		dc = 'es-t-i0-handwrit',
		ec = 'es-t-i0-und',
		fc = 'es-t-k0-accents',
		gc = 'es-t-k0-intl',
		hc = 'es-t-k0-und',
		ic = 'et-t-i0-handwrit',
		jc = 'et-t-k0-und',
		kc = 'eu-t-i0-handwrit',
		lc = 'eu-t-k0-und',
		mc = 'fa-t-i0-handwrit',
		nc = 'fa-t-i0-und',
		oc = 'fa-t-k0-und',
		pc = 'ff-t-k0-adlm',
		qc = 'fi-t-i0-handwrit',
		rc = 'fi-t-k0-und',
		sc = 'fil-t-i0-handwrit',
		tc = 'focus',
		uc = 'fr-t-i0-handwrit',
		vc = 'fr-t-i0-und',
		wc = 'fr-t-k0-accents',
		xc = 'fr-t-k0-intl',
		yc = 'fr-t-k0-und',
		r = 'function',
		zc = 'fy-t-i0-handwrit',
		Ac = 'fy-t-k0-accents',
		Bc = 'ga-t-i0-handwrit',
		Cc = 'ga-t-k0-accents',
		Dc = 'ga-t-k0-und',
		Ec = 'gd-t-i0-handwrit',
		Fc = 'gd-t-k0-accents',
		Gc = 'gl-t-i0-handwrit',
		Hc = 'gl-t-k0-und',
		Ic = 'gu-t-i0-handwrit',
		Jc = 'gu-t-i0-und',
		Kc = 'gu-t-k0-phone2',
		Lc = 'gu-t-k0-und',
		Mc = 'gu-t-und-latn-k0-qwerty',
		Nc = 'haw-t-i0-handwrit',
		Oc = 'haw-t-k0-accents',
		Pc = 'haw-t-k0-und',
		Qc = 'he',
		Rc = 'he-t-i0-handwrit',
		Sc = 'he-t-i0-und',
		Tc = 'he-t-k0-und',
		Uc = 'hi-t-i0-handwrit',
		Vc = 'hi-t-i0-und',
		Wc = 'hi-t-k0-phone',
		Xc = 'hi-t-k0-qwerty',
		Yc = 'hi-t-k0-und',
		Zc = 'hidden',
		$c = 'hmn-t-i0-handwrit',
		ad = 'horizontal',
		bd = 'hr-t-i0-handwrit',
		cd = 'hr-t-k0-und',
		dd = 'ht-t-i0-handwrit',
		ed = 'ht-t-k0-und',
		fd = 'https://inputtools.google.com',
		gd = 'https://inputtools.google.com/sync/pref?app=',
		hd = 'hu-t-i0-handwrit',
		id = 'hu-t-k0-101key',
		jd = 'hy-hyr-t-k0-und',
		kd = 'hy-hyt-t-k0-und',
		ld = 'hy-t-i0-handwrit',
		md = 'id-t-i0-handwrit',
		nd = 'id-t-k0-und',
		od = 'inline-block',
		pd = 'is-t-i0-handwrit',
		qd = 'is-t-k0-und',
		rd = 'it-t-i0-handwrit',
		sd = 'it-t-i0-und',
		td = 'it-t-k0-accents',
		ud = 'it-t-k0-intl',
		vd = 'it-t-k0-und',
		wd = 'ita-ff-black-enabled',
		xd = 'ita-ff-white-enabled',
		yd = 'ita-hwt-button',
		zd = 'ita-hwt-candidate-hover',
		Ad = 'ita-hwt-enter-img-white',
		Bd = 'ita-hwt-ime-full',
		Cd = 'ita-hwt-ime-init-opaque',
		Dd = 'ita-hwt-ime-opaque',
		Ed = 'ita-hwt-jfk',
		Fd = 'ita-hwt-jfk-action',
		Gd = 'ita-hwt-jfk-hover',
		Hd = 'ita-hwt-jfk-standard',
		Id = 'ita-kd-btn-sbc',
		Jd = 'ita-kd-btn-zh_pun',
		Kd = 'ita-kd-icon-button-hover',
		Ld = 'ita-kd-icon-hover',
		Md = 'ita-kd-img',
		Nd = 'ita-kd-inputtools-div',
		Od = 'ita-kd-menuitem',
		Pd = 'ita-kd-menuitem-hover',
		Qd = 'ita-kd-selected',
		Rd = 'ita-ppe-cur',
		Sd = 'ita-ppe-dis',
		Td = 'ita-ppe-dis-text',
		Ud = 'ita-ppe-td',
		Vd = 'ita-ppe-uds',
		Wd = 'iu-t-k0-inuktitu',
		Xd = 'iu-t-k0-nunavik',
		Yd = 'iu-t-k0-nunavut',
		Zd = 'ja-hira-t-i0-und',
		$d = 'ja-t-i0-handwrit',
		ae = 'ja-t-i0-mozcjp',
		be = 'ja-t-i0-mozcus',
		ce = 'ja-t-ja-hira-i0-und',
		de = 'jv-t-i0-handwrit',
		ee = 'jw-t-k0-und',
		fe = 'ka-t-i0-handwrit',
		ge = 'ka-t-k0-legacy',
		he = 'ka-t-k0-und',
		ie = 'key',
		t = 'keydown',
		u = 'keypress',
		je = 'keyup',
		ke = 'kk-t-i0-handwrit',
		le = 'kk-t-k0-und',
		me = 'km-t-i0-handwrit',
		ne = 'km-t-k0-und',
		oe = 'kn-t-i0-handwrit',
		pe = 'kn-t-i0-und',
		qe = 'kn-t-k0-und',
		re = 'kn-t-und-latn-k0-und',
		se = 'ko-t-i0-handwrit',
		te = 'ko-t-k0-und',
		ue = 'ku-t-i0-handwrit',
		ve = 'ku-t-k0-und',
		we = 'ky-cyrl-t-k0-und',
		xe = 'ky-t-i0-handwrit',
		ye = 'la-t-i0-handwrit',
		ze = 'latn-002-t-k0-und',
		Ae = 'latn_002',
		Be = 'lb-t-i0-handwrit',
		Ce = 'lb-t-k0-accents',
		De = 'letter-spacing',
		Ee = 'lo-t-i0-handwrit',
		Fe = 'lo-t-k0-und',
		Ge = 'lt-t-i0-handwrit',
		He = 'lt-t-k0-und',
		Ie = 'ltr',
		Je = 'lv-t-i0-handwrit',
		Ke = 'lv-t-k0-und',
		Le = 'mez-t-k0-und',
		Me = 'mg-t-i0-handwrit',
		Ne = 'mi-t-i0-handwrit',
		Oe = 'mi-t-k0-und',
		Pe = 'mk-t-i0-handwrit',
		Qe = 'mk-t-k0-und',
		Re = 'ml-t-i0-handwrit',
		Se = 'ml-t-i0-und',
		Te = 'ml-t-k0-und',
		Ue = 'ml-t-und-latn-k0-und',
		Ve = 'mn-cyrl-t-k0-und',
		We = 'mn-t-i0-handwrit',
		Xe = 'mni-mtei-t-k0-phone',
		Ye = 'mousedown',
		Ze = 'mousemove',
		$e = 'mouseout',
		v = 'mouseover',
		af = 'mouseup',
		bf = 'mr-t-i0-handwrit',
		cf = 'mr-t-i0-und',
		df = 'mr-t-k0-devanaga',
		ef = 'mr-t-k0-phone',
		ff = 'mr-t-k0-und',
		gf = 'ms-t-i0-handwrit',
		hf = 'ms-t-k0-und',
		jf = 'mt-t-i0-handwrit',
		kf = 'mt-t-k0-und',
		lf = 'mul-t-i0-handwrit',
		mf = 'my-t-i0-handwrit',
		nf = 'my-t-k0-myansan',
		of = 'my-t-k0-und',
		pf = 'namaste',
		qf = 'nb-t-i0-handwrit',
		rf = 'ne-t-i0-handwrit',
		sf = 'ne-t-i0-und',
		tf = 'ne-t-und-latn-k0-und',
		uf = 'nl-t-i0-handwrit',
		vf = 'nl-t-i0-und',
		wf = 'nl-t-k0-accents',
		xf = 'nl-t-k0-intl',
		yf = 'nl-t-k0-und',
		zf = 'nn-t-i0-handwrit',
		Af = 'no-t-i0-handwrit',
		Bf = 'no-t-k0-und',
		Cf = 'none',
		Df = 'number',
		Ef = 'nv-t-k0-std',
		Ff = 'nv-t-k0-und',
		Gf = 'ny-t-i0-handwrit',
		Hf = 'object',
		If = 'oj-t-k0-ojibwe',
		Jf = 'one-t-k0-und',
		Kf = 'or-t-i0-handwrit',
		Lf = 'or-t-i0-und',
		Mf = 'or-t-k0-und',
		Nf = 'or-t-und-latn-k0-und',
		Of = 'osa-t-k0-und',
		Pf = 'pa-guru-t-k0-und',
		Qf = 'pa-guru-t-und-latn-k0-und',
		Rf = 'pa-t-i0-handwrit',
		Sf = 'pa-t-i0-und',
		Tf = 'pl-t-i0-handwrit',
		Uf = 'pl-t-k0-accents',
		Vf = 'pl-t-k0-und',
		Wf = 'position',
		Xf = 'prs-t-k0-und',
		Yf = 'ps-t-k0-und',
		Zf = 'pt-BR',
		$f = 'pt-PT',
		ag = 'pt-br-t-i0-handwrit',
		bg = 'pt-br-t-i0-und',
		cg = 'pt-br-t-k0-accents',
		dg = 'pt-br-t-k0-intl',
		eg = 'pt-br-t-k0-und',
		fg = 'pt-pt-t-i0-handwrit',
		gg = 'pt-pt-t-i0-und',
		hg = 'pt-pt-t-k0-accents',
		ig = 'pt-pt-t-k0-intl',
		jg = 'pt-pt-t-k0-und',
		kg = 'pt-t-i0-handwrit',
		lg = 'pt-t-i0-und',
		mg = 'px',
		ng = 'readystatechange',
		og = 'rhg-rohg-t-k0-und',
		pg = 'ro-t-i0-handwrit',
		qg = 'ro-t-k0-extended',
		rg = 'ro-t-k0-legacy',
		sg = 'ro-t-k0-und',
		tg = 'rom-t-k0-und',
		ug = 'rtl',
		vg = 'ru-t-i0-handwrit',
		wg = 'ru-t-i0-und',
		xg = 'ru-t-k0-aatseel',
		yg = 'ru-t-k0-qwerty',
		zg = 'ru-t-k0-und',
		Ag = 'ru-t-k0-yazhert',
		Bg = 'sa-t-i0-und',
		Cg = 'sa-t-k0-devanaga',
		Dg = 'sa-t-und-latn-k0-und',
		Eg = 'sd-t-k0-und',
		Fg = 'selected',
		Gg = 'shortcut',
		Hg = 'shortcut_',
		Ig = 'si-t-i0-handwrit',
		Jg = 'si-t-i0-und',
		Kg = 'si-t-k0-und',
		Lg = 'sk-t-i0-handwrit',
		Mg = 'sk-t-k0-qwerty',
		Ng = 'sk-t-k0-und',
		Og = 'sl-t-i0-handwrit',
		Pg = 'sl-t-k0-und',
		Qg = 'sm-t-i0-handwrit',
		Rg = 'sm-t-k0-accents',
		Sg = 'sn-t-i0-handwrit',
		Tg = 'so-t-i0-handwrit',
		Ug = 'sq-t-i0-handwrit',
		Vg = 'sq-t-k0-und',
		Wg = 'sr-cyrl-t-k0-und',
		Xg = 'sr-latn-t-k0-und',
		Yg = 'sr-t-i0-handwrit',
		Zg = 'sr-t-i0-und',
		$g = 'srp-t-k0-und',
		ah = 'start',
		w = 'string',
		bh = 'style="-webkit-user-select: none; "',
		ch = 'su-t-i0-handwrit',
		dh = 'sv-t-i0-handwrit',
		eh = 'sv-t-k0-und',
		fh = 'sw-t-i0-handwrit',
		gh = 'sw-t-k0-und',
		hh = 'synthetic-keydown',
		ih = 'synthetic-keypress',
		jh = 'synthetic-keyup',
		kh = 'ta',
		lh = 'ta-t-i0-handwrit',
		mh = 'ta-t-i0-und',
		nh = 'ta-t-k0-itrans',
		oh = 'ta-t-k0-ta99',
		ph = 'ta-t-k0-typewriter',
		qh = 'ta-t-k0-und',
		rh = 'ta-t-und-latn-k0-und',
		sh = 'tabindex',
		th = 'te-t-i0-handwrit',
		uh = 'te-t-i0-und',
		vh = 'te-t-k0-und',
		wh = 'te-t-und-latn-k0-und',
		xh = 'text-decoration',
		yh = 'text-transform',
		zh = 'tg-t-i0-handwrit',
		Ah = 'tg-t-k0-und',
		Bh = 'th-t-i0-handwrit',
		Ch = 'th-t-i0-und',
		Dh = 'th-t-k0-pattajoti',
		Eh = 'th-t-k0-tis',
		Fh = 'th-t-k0-und',
		Gh = 'ti-ethi-t-k0-und',
		Hh = 'ti-t-i0-handwrit',
		Ih = 'ti-t-i0-und',
		Jh = 'ti-t-k0-und',
		Kh = 'tl-t-k0-und',
		Lh = 'tlang',
		Mh = 'touchend',
		Nh = 'touchmove',
		Oh = 'touchstart',
		Ph = 'tr-t-i0-handwrit',
		Qh = 'tr-t-k0-f-accents',
		Rh = 'tr-t-k0-lagacy',
		Sh = 'tr-t-k0-legacy',
		Th = 'tr-t-k0-q-accents',
		Uh = 'tr-t-k0-und',
		Vh = 'translate',
		Wh = 'tsbc',
		Xh = 'tt-t-k0-und',
		Yh = 'ug-t-k0-und',
		Zh = 'uk-t-i0-handwrit',
		$h = 'uk-t-i0-und',
		ai = 'uk-t-k0-101key',
		bi = 'und-ethi-t-k0-und',
		ci = 'und-t-i0-handwrit',
		di = 'ur-t-i0-handwrit',
		ei = 'ur-t-i0-und',
		fi = 'ur-t-k0-und',
		gi = 'us_intl',
		hi = 'uz-cyrl-t-k0-legacy',
		ii = 'uz-cyrl-t-k0-und',
		ji = 'uz-latn-t-k0-und',
		ki = 'uz-t-i0-handwrit',
		li = 'uzs-t-k0-und',
		mi = 'vertical',
		ni = 'vertical-align',
		oi = 'vi-t-i0-handwrit',
		pi = 'vi-t-i0-und',
		qi = 'vi-t-k0-legacy',
		ri = 'vi-t-k0-und',
		si = 'vi-t-k0-viqr',
		ti = 'visible',
		ui = 'vk-btn',
		vi = 'vk-sf-h',
		wi = 'vkd',
		xi = 'xh-t-i0-handwrit',
		yi = 'yi-t-i0-handwrit',
		zi = 'yi-t-k0-und',
		Ai = 'yo-ng-t-k0-und',
		Bi = 'yue-hant-t-i0-jyutping',
		Ci = 'yue-hant-t-i0-und',
		Di = 'yue-hant-t-i0-yale',
		Ei = 'zh-CN',
		Fi = 'zh-HK',
		Gi = 'zh-Hans',
		Hi = 'zh-TW',
		Ii = 'zh-hans-t-i0-handwrit',
		Ji = 'zh-hans-t-i0-voice',
		Ki = 'zh-hant-t-i0-cangjie-1982',
		Li = 'zh-hant-t-i0-handwrit',
		Mi = 'zh-hant-t-i0-pinyin',
		Ni = 'zh-hant-t-i0-und',
		Oi = 'zh-t-i0-handwrit',
		Pi = 'zh-t-i0-pinyin',
		Qi = 'zh-t-i0-pinyin-x0-shuangpin-abc',
		Ri = 'zh-t-i0-pinyin-x0-shuangpin-flypy',
		Si = 'zh-t-i0-pinyin-x0-shuangpin-jiajia',
		Ti = 'zh-t-i0-pinyin-x0-shuangpin-ms',
		Ui = 'zh-t-i0-pinyin-x0-shuangpin-ziguang',
		Vi = 'zh-t-i0-pinyin-x0-shuangpin-ziranma',
		Wi = 'zh-t-i0-wubi-1986',
		Xi = 'zh-yue-t-i0-handwrit',
		Yi = 'zu-t-i0-handwrit',
		Zi =
			'\u00c01234567890\u00bd\u00bbQWERTYUIOP\u00db\u00ddASDFGHJKL\u00ba\u00de\u00dc\u00e2ZXCVBNM\u00bc\u00be\u00bf ',
		$i =
			'\u00c01234567890\u00bd\u00bbQWERTYUIOP\u00db\u00dd\u00dcASDFGHJKL\u00ba\u00deZXCVBNM\u00bc\u00be\u00bf ',
		aj = '\u02bb\u014clelo Hawai\u02bbi',
		bj =
			'\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940 (\u092b\u094b\u0928\u0947\u091f\u093f\u0915)',
		cj = '\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940(INSCRIPT)',
		dj = '\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940(PHONETIC)',
		x,
		ej = function (a) {
			a = [
				Hf == typeof globalThis && globalThis,
				a,
				Hf == typeof window && window,
				Hf == typeof self && self,
				Hf == typeof global && global,
			];
			for (var b = 0; b < a.length; ++b) {
				var c = a[b];
				if (c && c.Math == Math) return c;
			}
			throw Error('Cannot find global object');
		},
		hj = function (a, b) {
			if (b)
				a: {
					var c = fj;
					a = a.split('.');
					for (var d = 0; d < a.length - 1; d++) {
						var e = a[d];
						if (!(e in c)) break a;
						c = c[e];
					}
					a = a[a.length - 1];
					d = c[a];
					b = b(d);
					b != d &&
						null != b &&
						gj(c, a, {
							configurable: !0,
							writable: !0,
							value: b,
						});
				}
		},
		y = function (a, b) {
			a.prototype = ij(b.prototype);
			a.prototype.constructor = a;
			if (jj) jj(a, b);
			else
				for (var c in b)
					if ('prototype' != c)
						if (Object.defineProperties) {
							var d = Object.getOwnPropertyDescriptor(b, c);
							d && Object.defineProperty(a, c, d);
						} else a[c] = b[c];
			a.ca = b.prototype;
		},
		kj = function (a) {
			return a ? a : Array.prototype.fill;
		},
		nj = function (a) {
			if (a && a != z) return lj(a.document);
			null === mj && (mj = lj(z.document));
			return mj;
		},
		lj = function (a) {
			return (a = a.querySelector && a.querySelector('script[nonce]')) &&
				(a = a.nonce || a.getAttribute('nonce')) &&
				oj.test(a)
				? a
				: '';
		},
		pj = function () {},
		qj = function (a) {
			a.Bd = void 0;
			a.qa = function () {
				return a.Bd ? a.Bd : (a.Bd = new a());
			};
		},
		rj = function (a) {
			var b = typeof a;
			b = b != Hf ? b : a ? (Array.isArray(a) ? 'array' : b) : 'null';
			return 'array' == b || (b == Hf && typeof a.length == Df);
		},
		sj = function (a) {
			var b = typeof a;
			return (b == Hf && null != a) || b == r;
		},
		vj = function (a) {
			return (
				(Object.prototype.hasOwnProperty.call(a, tj) && a[tj]) ||
				(a[tj] = ++uj)
			);
		},
		wj = function (a, b, c) {
			return a.call.apply(a.bind, arguments);
		},
		xj = function (a, b, c) {
			if (!a) throw Error();
			if (2 < arguments.length) {
				var d = Array.prototype.slice.call(arguments, 2);
				return function () {
					var e = Array.prototype.slice.call(arguments);
					Array.prototype.unshift.apply(e, d);
					return a.apply(b, e);
				};
			}
			return function () {
				return a.apply(b, arguments);
			};
		},
		A = function (a, b, c) {
			Function.prototype.bind &&
			-1 != Function.prototype.bind.toString().indexOf('native code')
				? (A = wj)
				: (A = xj);
			return A.apply(null, arguments);
		},
		yj = function (a, b) {
			var c = Array.prototype.slice.call(arguments, 1);
			return function () {
				var d = c.slice();
				d.push.apply(d, arguments);
				return a.apply(this, d);
			};
		},
		zj = function () {
			return Date.now();
		},
		Aj = function (a, b) {
			a = a.split('.');
			var c = z;
			a[0] in c ||
				'undefined' == typeof c.execScript ||
				c.execScript('var ' + a[0]);
			for (var d; a.length && (d = a.shift()); )
				a.length || void 0 === b
					? c[d] && c[d] !== Object.prototype[d]
						? (c = c[d])
						: (c = c[d] = {})
					: (c[d] = b);
		},
		C = function (a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.ca = b.prototype;
			a.prototype = new c();
			a.prototype.constructor = a;
			a.Mq = function (d, e, g) {
				for (
					var h = Array(arguments.length - 2), k = 2;
					k < arguments.length;
					k++
				)
					h[k - 2] = arguments[k];
				return b.prototype[e].apply(d, h);
			};
		},
		Bj = function (a) {
			return a;
		},
		Cj = function (a) {
			if (Error.captureStackTrace) Error.captureStackTrace(this, Cj);
			else {
				var b = Error().stack;
				b && (this.stack = b);
			}
			a && (this.message = String(a));
		},
		Dj = function (a, b) {
			a = a.split('%s');
			for (var c = '', d = a.length - 1, e = 0; e < d; e++)
				c += a[e] + (e < b.length ? b[e] : '%s');
			Cj.call(this, c + a[d]);
		},
		Ej = function (a) {
			return a[a.length - 1];
		},
		Fj = function (a, b) {
			if (typeof a === w)
				return typeof b !== w || 1 != b.length ? -1 : a.indexOf(b, 0);
			for (var c = 0; c < a.length; c++)
				if (c in a && a[c] === b) return c;
			return -1;
		},
		D = function (a, b, c) {
			for (
				var d = a.length, e = typeof a === w ? a.split('') : a, g = 0;
				g < d;
				g++
			)
				g in e && b.call(c, e[g], g, a);
		},
		Gj = function (a, b) {
			for (
				var c = a.length,
					d = [],
					e = 0,
					g = typeof a === w ? a.split('') : a,
					h = 0;
				h < c;
				h++
			)
				if (h in g) {
					var k = g[h];
					b.call(void 0, k, h, a) && (d[e++] = k);
				}
			return d;
		},
		Hj = function (a, b, c) {
			for (
				var d = a.length,
					e = Array(d),
					g = typeof a === w ? a.split('') : a,
					h = 0;
				h < d;
				h++
			)
				h in g && (e[h] = b.call(c, g[h], h, a));
			return e;
		},
		Ij = function (a, b) {
			var c = [];
			D(a, function (d, e) {
				c = b.call(void 0, c, d, e, a);
			});
			return c;
		},
		Jj = function (a, b, c) {
			for (
				var d = a.length, e = typeof a === w ? a.split('') : a, g = 0;
				g < d;
				g++
			)
				if (g in e && b.call(c, e[g], g, a)) return !0;
			return !1;
		},
		Kj = function (a, b, c) {
			for (
				var d = a.length, e = typeof a === w ? a.split('') : a, g = 0;
				g < d;
				g++
			)
				if (g in e && !b.call(c, e[g], g, a)) return !1;
			return !0;
		},
		Mj = function (a, b) {
			b = Lj(a, b, void 0);
			return 0 > b ? null : typeof a === w ? a.charAt(b) : a[b];
		},
		Lj = function (a, b, c) {
			for (
				var d = a.length, e = typeof a === w ? a.split('') : a, g = 0;
				g < d;
				g++
			)
				if (g in e && b.call(c, e[g], g, a)) return g;
			return -1;
		},
		E = function (a, b) {
			return 0 <= Fj(a, b);
		},
		Nj = function (a) {
			if (!Array.isArray(a))
				for (var b = a.length - 1; 0 <= b; b--) delete a[b];
			a.length = 0;
		},
		Oj = function (a, b) {
			E(a, b) || a.push(b);
		},
		Pj = function (a, b) {
			b = Fj(a, b);
			var c;
			(c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
			return c;
		},
		Qj = function (a) {
			return Array.prototype.concat.apply([], arguments);
		},
		Rj = function (a) {
			var b = a.length;
			if (0 < b) {
				for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
				return c;
			}
			return [];
		},
		Sj = function (a, b) {
			for (var c = 1; c < arguments.length; c++) {
				var d = arguments[c];
				if (rj(d)) {
					var e = a.length || 0,
						g = d.length || 0;
					a.length = e + g;
					for (var h = 0; h < g; h++) a[e + h] = d[h];
				} else a.push(d);
			}
		},
		Uj = function (a, b, c, d) {
			Array.prototype.splice.apply(a, Tj(arguments, 1));
		},
		Tj = function (a, b, c) {
			return 2 >= arguments.length
				? Array.prototype.slice.call(a, b)
				: Array.prototype.slice.call(a, b, c);
		},
		Vj = function (a) {
			for (var b = {}, c = 0, d = 0; d < a.length; ) {
				var e = a[d++];
				var g = e;
				g = sj(g) ? 'o' + vj(g) : (typeof g).charAt(0) + g;
				Object.prototype.hasOwnProperty.call(b, g) ||
					((b[g] = !0), (a[c++] = e));
			}
			a.length = c;
		},
		Xj = function (a, b) {
			a.sort(b || Wj);
		},
		Zj = function (a, b) {
			if (!rj(a) || !rj(b) || a.length != b.length) return !1;
			for (var c = a.length, d = Yj, e = 0; e < c; e++)
				if (!d(a[e], b[e])) return !1;
			return !0;
		},
		Wj = function (a, b) {
			return a > b ? 1 : a < b ? -1 : 0;
		},
		Yj = function (a, b) {
			return a === b;
		},
		ak = function (a) {
			for (var b = [], c = 0; c < arguments.length; c++) {
				var d = arguments[c];
				if (Array.isArray(d))
					for (var e = 0; e < d.length; e += 8192)
						for (
							var g = ak.apply(null, Tj(d, e, e + 8192)), h = 0;
							h < g.length;
							h++
						)
							b.push(g[h]);
				else b.push(d);
			}
			return b;
		},
		bk = function (a, b) {
			var c = a.length - b.length;
			return 0 <= c && a.indexOf(b, c) == c;
		},
		ek = function (a, b) {
			var c = 0;
			a = ck(String(a)).split('.');
			b = ck(String(b)).split('.');
			for (
				var d = Math.max(a.length, b.length), e = 0;
				0 == c && e < d;
				e++
			) {
				var g = a[e] || '',
					h = b[e] || '';
				do {
					g = /(\d*)(\D*)(.*)/.exec(g) || ['', '', '', ''];
					h = /(\d*)(\D*)(.*)/.exec(h) || ['', '', '', ''];
					if (0 == g[0].length && 0 == h[0].length) break;
					c =
						dk(
							0 == g[1].length ? 0 : parseInt(g[1], 10),
							0 == h[1].length ? 0 : parseInt(h[1], 10)
						) ||
						dk(0 == g[2].length, 0 == h[2].length) ||
						dk(g[2], h[2]);
					g = g[3];
					h = h[3];
				} while (0 == c);
			}
			return c;
		},
		dk = function (a, b) {
			return a < b ? -1 : a > b ? 1 : 0;
		},
		F = function (a) {
			return -1 != fk.indexOf(a);
		},
		gk = function (a) {
			for (
				var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d;
				(d = b.exec(a));

			)
				c.push([d[1], d[2], d[3] || void 0]);
			return c;
		},
		hk = function (a, b, c) {
			for (var d in a) b.call(c, a[d], d, a);
		},
		ik = function (a) {
			var b = [],
				c = 0,
				d;
			for (d in a) b[c++] = a[d];
			return b;
		},
		jk = function (a) {
			var b = [],
				c = 0,
				d;
			for (d in a) b[c++] = d;
			return b;
		},
		kk = function (a, b) {
			return null !== a && b in a;
		},
		lk = function (a, b) {
			for (var c in a) if (a[c] == b) return !0;
			return !1;
		},
		mk = function (a) {
			for (var b in a) return !1;
			return !0;
		},
		nk = function (a) {
			var b = {},
				c;
			for (c in a) b[c] = a[c];
			return b;
		},
		pk = function (a, b) {
			for (var c, d, e = 1; e < arguments.length; e++) {
				d = arguments[e];
				for (c in d) a[c] = d[c];
				for (var g = 0; g < ok.length; g++)
					(c = ok[g]),
						Object.prototype.hasOwnProperty.call(d, c) &&
							(a[c] = d[c]);
			}
		},
		qk = function (a) {
			var b = arguments.length;
			if (1 == b && Array.isArray(arguments[0]))
				return qk.apply(null, arguments[0]);
			if (b % 2) throw Error(Ca);
			for (var c = {}, d = 0; d < b; d += 2)
				c[arguments[d]] = arguments[d + 1];
			return c;
		},
		rk = function (a) {
			var b = arguments.length;
			if (1 == b && Array.isArray(arguments[0]))
				return rk.apply(null, arguments[0]);
			for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
			return c;
		},
		sk = function () {
			return F('Trident') || F('MSIE');
		},
		tk = function () {
			return F('Firefox') || F('FxiOS');
		},
		uk = function () {
			return (F('Chrome') || F('CriOS')) && !F(ha);
		},
		vk = function () {
			function a(e) {
				e = Mj(e, d);
				return c[e] || '';
			}
			var b = fk;
			if (!sk()) {
				b = gk(b);
				var c = {};
				D(b, function (e) {
					c[e[0]] = e[1];
				});
				var d = yj(kk, c);
				F(ua)
					? a(['Version', ua])
					: F(ha)
					? a([ha])
					: F('Edg/')
					? a(['Edg'])
					: uk() && a(['Chrome', 'CriOS', 'HeadlessChrome']);
			}
		},
		wk = function () {
			return function () {
				return 6;
			};
		},
		xk = function () {
			return !1;
		},
		yk = function () {
			return null;
		},
		Ak = function () {
			if (void 0 === zk) {
				var a = null,
					b = z.trustedTypes;
				if (b && b.createPolicy) {
					try {
						a = b.createPolicy('goog#html', {
							createHTML: Bj,
							createScript: Bj,
							createScriptURL: Bj,
						});
					} catch (c) {
						z.console && z.console.error(c.message);
					}
					zk = a;
				} else zk = a;
			}
			return zk;
		},
		Dk = function (a, b) {
			this.A = (a === Bk && b) || '';
			this.B = Ck;
		},
		Ek = function (a) {
			return a instanceof Dk && a.constructor === Dk && a.B === Ck
				? a.A
				: 'type_error:Const';
		},
		Fk = function (a) {
			return new Dk(Bk, a);
		},
		Hk = function (a, b) {
			this.A = b === Gk ? a : '';
		},
		Ik = function (a) {
			return a instanceof Hk && a.constructor === Hk
				? a.A
				: 'type_error:TrustedResourceUrl';
		},
		Mk = function (a, b) {
			var c = Ek(a);
			if (!Jk.test(c))
				throw Error('Invalid TrustedResourceUrl format: ' + c);
			a = c.replace(Kk, function (d, e) {
				if (!Object.prototype.hasOwnProperty.call(b, e))
					throw Error(
						'Found marker, "' +
							e +
							'", in format string, "' +
							c +
							'", but no valid label mapping found in args: ' +
							JSON.stringify(b)
					);
				d = b[e];
				return d instanceof Dk ? Ek(d) : encodeURIComponent(String(d));
			});
			return Lk(a);
		},
		Lk = function (a) {
			var b = Ak();
			a = b ? b.createScriptURL(a) : a;
			return new Hk(a, Gk);
		},
		Nk = function (a, b, c) {
			if (null == c) return b;
			if (typeof c === w) return c ? a + encodeURIComponent(c) : '';
			for (var d in c)
				if (Object.prototype.hasOwnProperty.call(c, d)) {
					var e = c[d];
					e = Array.isArray(e) ? e : [e];
					for (var g = 0; g < e.length; g++) {
						var h = e[g];
						null != h &&
							(b || (b = a),
							(b +=
								(b.length > a.length ? '&' : '') +
								encodeURIComponent(d) +
								'=' +
								encodeURIComponent(String(h))));
					}
				}
			return b;
		},
		Pk = function (a, b) {
			this.A = b === Ok ? a : '';
		},
		Qk = function (a) {
			return a instanceof Pk && a.constructor === Pk
				? a.A
				: 'type_error:SafeUrl';
		},
		Uk = function (a) {
			if (a instanceof Pk) return a;
			a = typeof a == Hf && a.nb ? a.$a() : String(a);
			if (Rk.test(a)) a = new Pk(a, Ok);
			else {
				a = String(a);
				a = a.replace(/(%0A|%0D)/g, '');
				var b = a.match(Sk);
				a = b && Tk.test(b[1]) ? new Pk(a, Ok) : null;
			}
			return a;
		},
		Wk = function (a, b) {
			this.A = b === Vk ? a : '';
		},
		Xk = function (a) {
			return a instanceof Wk && a.constructor === Wk
				? a.A
				: 'type_error:SafeStyle';
		},
		$k = function (a) {
			var b = '',
				c;
			for (c in a)
				if (Object.prototype.hasOwnProperty.call(a, c)) {
					if (!/^[-_a-zA-Z0-9]+$/.test(c))
						throw Error(
							'Name allows only [-_a-zA-Z0-9], got: ' + c
						);
					var d = a[c];
					null != d &&
						((d = Array.isArray(d) ? Hj(d, Yk).join(' ') : Yk(d)),
						(b += c + ':' + d + ';'));
				}
			return b ? new Wk(b, Vk) : Zk;
		},
		Yk = function (a) {
			if (a instanceof Pk)
				return (
					'url("' +
					Qk(a).replace(/</g, '%3c').replace(/[\\"]/g, '\\$&') +
					'")'
				);
			if (a instanceof Dk) a = Ek(a);
			else {
				a = String(a);
				var b = a
					.replace(al, '$1')
					.replace(al, '$1')
					.replace(bl, 'url');
				if (cl.test(b)) {
					if ((b = !dl.test(a))) {
						for (var c = (b = !0), d = 0; d < a.length; d++) {
							var e = a.charAt(d);
							"'" == e && c
								? (b = !b)
								: '"' == e && b && (c = !c);
						}
						b = b && c && el(a);
					}
					a = b ? fl(a) : 'zClosurez';
				} else a = 'zClosurez';
			}
			if (/[{;}]/.test(a))
				throw new Dj('Value does not allow [{;}], got: %s.', [a]);
			return a;
		},
		el = function (a) {
			for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
				var e = a.charAt(d);
				if (']' == e) {
					if (b) return !1;
					b = !0;
				} else if ('[' == e) {
					if (!b) return !1;
					b = !1;
				} else if (!b && !c.test(e)) return !1;
			}
			return b;
		},
		fl = function (a) {
			return a.replace(bl, function (b, c, d, e) {
				var g = '';
				d = d.replace(/^(['"])(.*)\1$/, function (h, k, l) {
					g = k;
					return l;
				});
				b = (Uk(d) || gl).$a();
				return c + g + b + g + e;
			});
		},
		il = function (a, b) {
			this.A = b === hl ? a : '';
			this.nb = !0;
		},
		jl = function (a, b) {
			if (-1 != a.indexOf('<'))
				throw Error("Selector does not allow '<', got: " + a);
			var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, '');
			if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c))
				throw Error(
					'Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: ' +
						a
				);
			a: {
				for (
					var d = {
							'(': ')',
							'[': ']',
						},
						e = [],
						g = 0;
					g < c.length;
					g++
				) {
					var h = c[g];
					if (d[h]) e.push(d[h]);
					else if (lk(d, h) && e.pop() != h) {
						c = !1;
						break a;
					}
				}
				c = 0 == e.length;
			}
			if (!c)
				throw Error(
					'() and [] in selector must be balanced, got: ' + a
				);
			b instanceof Wk || (b = $k(b));
			a = a + '{' + Xk(b).replace(/</g, '\\3C ') + '}';
			return new il(a, hl);
		},
		ll = function (a) {
			function b(d) {
				Array.isArray(d) ? D(d, b) : (c += kl(d));
			}
			var c = '';
			D(arguments, b);
			return new il(c, hl);
		},
		nl = function (a) {
			a = Ek(a);
			return 0 === a.length ? ml : new il(a, hl);
		},
		kl = function (a) {
			return a instanceof il && a.constructor === il
				? a.A
				: 'type_error:SafeStyleSheet';
		},
		pl = function (a, b, c) {
			this.A = c === ol ? a : '';
		},
		ql = function (a) {
			return a instanceof pl && a.constructor === pl
				? a.A
				: 'type_error:SafeHtml';
		},
		rl = function (a) {
			var b = nj(a.ownerDocument && a.ownerDocument.defaultView);
			b && a.setAttribute('nonce', b);
		},
		zl = function (a) {
			sl.test(a) &&
				(-1 != a.indexOf('&') && (a = a.replace(tl, '&amp;')),
				-1 != a.indexOf('<') && (a = a.replace(ul, '&lt;')),
				-1 != a.indexOf('>') && (a = a.replace(vl, '&gt;')),
				-1 != a.indexOf('"') && (a = a.replace(wl, '&quot;')),
				-1 != a.indexOf("'") && (a = a.replace(xl, '&#39;')),
				-1 != a.indexOf('\x00') && (a = a.replace(yl, '&#0;')));
			return a;
		},
		Cl = function (a) {
			return -1 != a.indexOf('&') ? ('document' in z ? Al(a) : Bl(a)) : a;
		},
		Al = function (a) {
			var b = {
				'&amp;': '&',
				'&lt;': '<',
				'&gt;': '>',
				'&quot;': '"',
			};
			var c = z.document.createElement('div');
			return a.replace(Dl, function (d, e) {
				var g = b[d];
				if (g) return g;
				'#' == e.charAt(0) &&
					((e = Number('0' + e.substr(1))),
					isNaN(e) || (g = String.fromCharCode(e)));
				if (!g) {
					g = d + ' ';
					g = (e = Ak()) ? e.createHTML(g) : g;
					g = new pl(g, null, ol);
					if (El()) for (; c.lastChild; ) c.removeChild(c.lastChild);
					c.innerHTML = ql(g);
					g = c.firstChild.nodeValue.slice(0, -1);
				}
				return (b[d] = g);
			});
		},
		Bl = function (a) {
			return a.replace(/&([^;]+);/g, function (b, c) {
				switch (c) {
					case 'amp':
						return '&';
					case 'lt':
						return '<';
					case 'gt':
						return '>';
					case 'quot':
						return '"';
					default:
						return '#' != c.charAt(0) ||
							((c = Number('0' + c.substr(1))), isNaN(c))
							? b
							: String.fromCharCode(c);
				}
			});
		},
		Fl = function (a) {
			return String(a).replace(/\-([a-z])/g, function (b, c) {
				return c.toUpperCase();
			});
		},
		Gl = function (a) {
			return a.replace(/(^|[\s]+)([a-z])/g, function (b, c, d) {
				return c + d.toUpperCase();
			});
		},
		Hl = function () {
			return F('iPhone') && !F('iPod') && !F('iPad');
		},
		Il = function () {
			return Hl() || F('iPad') || F('iPod');
		},
		Jl = function (a) {
			Jl[' '](a);
			return a;
		},
		Kl = function (a, b) {
			try {
				return Jl(a[b]), !0;
			} catch (c) {}
			return !1;
		},
		Ml = function (a, b) {
			var c = Ll;
			return Object.prototype.hasOwnProperty.call(c, a)
				? c[a]
				: (c[a] = b(a));
		},
		Nl = function () {
			var a = z.document;
			return a ? a.documentMode : void 0;
		},
		G = function (a) {
			return Ml(a, function () {
				return 0 <= ek(Ol, a);
			});
		},
		Ql = function (a) {
			return Number(Pl) >= a;
		},
		H = function (a, b) {
			this.x = void 0 !== a ? a : 0;
			this.y = void 0 !== b ? b : 0;
		},
		Rl = function (a, b) {
			return new H(a.x - b.x, a.y - b.y);
		},
		Sl = function (a, b) {
			this.width = a;
			this.height = b;
		},
		Tl = function (a, b) {
			return a == b
				? !0
				: a && b
				? a.width == b.width && a.height == b.height
				: !1;
		},
		Ul = function (a) {
			return new Sl(a.width, a.height);
		},
		J = function (a) {
			return a ? new Vl(I(a)) : Wl || (Wl = new Vl());
		},
		Xl = function (a, b) {
			return typeof b === w ? a.getElementById(b) : b;
		},
		Zl = function (a, b) {
			hk(b, function (c, d) {
				c && typeof c == Hf && c.nb && (c = c.$a());
				'style' == d
					? (a.style.cssText = c)
					: 'class' == d
					? (a.className = c)
					: 'for' == d
					? (a.htmlFor = c)
					: Yl.hasOwnProperty(d)
					? a.setAttribute(Yl[d], c)
					: 0 == d.lastIndexOf('aria-', 0) ||
					  0 == d.lastIndexOf('data-', 0)
					? a.setAttribute(d, c)
					: (a[d] = c);
			});
		},
		am = function (a) {
			a = a.document;
			a = $l(a) ? a.documentElement : a.body;
			return new Sl(a.clientWidth, a.clientHeight);
		},
		cm = function (a) {
			var b = bm(a);
			a = a.parentWindow || a.defaultView;
			return L && G('10') && a.pageYOffset != b.scrollTop
				? new H(b.scrollLeft, b.scrollTop)
				: new H(
						a.pageXOffset || b.scrollLeft,
						a.pageYOffset || b.scrollTop
				  );
		},
		bm = function (a) {
			return a.scrollingElement
				? a.scrollingElement
				: !M && $l(a)
				? a.documentElement
				: a.body || a.documentElement;
		},
		dm = function (a) {
			return a ? a.parentWindow || a.defaultView : window;
		},
		fm = function (a, b, c) {
			return em(document, arguments);
		},
		em = function (a, b) {
			var c = String(b[0]),
				d = b[1];
			if (!gm && d && (d.name || d.type)) {
				c = ['<', c];
				d.name && c.push(' name="', zl(d.name), '"');
				if (d.type) {
					c.push(' type="', zl(d.type), '"');
					var e = {};
					pk(e, d);
					delete e.type;
					d = e;
				}
				c.push('>');
				c = c.join('');
			}
			c = hm(a, c);
			d &&
				(typeof d === w
					? (c.className = d)
					: Array.isArray(d)
					? (c.className = d.join(' '))
					: Zl(c, d));
			2 < b.length && im(a, c, b, 2);
			return c;
		},
		im = function (a, b, c, d) {
			function e(k) {
				k && b.appendChild(typeof k === w ? a.createTextNode(k) : k);
			}
			for (; d < c.length; d++) {
				var g = c[d];
				if (!rj(g) || (sj(g) && 0 < g.nodeType)) e(g);
				else {
					a: {
						if (g && typeof g.length == Df) {
							if (sj(g)) {
								var h =
									typeof g.item == r || typeof g.item == w;
								break a;
							}
							if (typeof g === r) {
								h = typeof g.item == r;
								break a;
							}
						}
						h = !1;
					}
					D(h ? Rj(g) : g, e);
				}
			}
		},
		hm = function (a, b) {
			b = String(b);
			'application/xhtml+xml' === a.contentType && (b = b.toLowerCase());
			return a.createElement(b);
		},
		$l = function (a) {
			return 'CSS1Compat' == a.compatMode;
		},
		jm = function (a) {
			if (1 != a.nodeType) return !1;
			switch (a.tagName) {
				case 'APPLET':
				case 'AREA':
				case 'BASE':
				case 'BR':
				case 'COL':
				case 'COMMAND':
				case 'EMBED':
				case 'FRAME':
				case 'HR':
				case 'IMG':
				case na:
				case ma:
				case 'ISINDEX':
				case 'KEYGEN':
				case 'LINK':
				case 'NOFRAMES':
				case 'NOSCRIPT':
				case 'META':
				case 'OBJECT':
				case 'PARAM':
				case za:
				case 'SOURCE':
				case 'STYLE':
				case 'TRACK':
				case 'WBR':
					return !1;
			}
			return !0;
		},
		km = function (a) {
			for (var b; (b = a.firstChild); ) a.removeChild(b);
		},
		lm = function (a) {
			return a && a.parentNode ? a.parentNode.removeChild(a) : null;
		},
		nm = function (a) {
			return mm && void 0 != a.children
				? a.children
				: Gj(a.childNodes, function (b) {
						return 1 == b.nodeType;
				  });
		},
		om = function (a, b) {
			if (!a || !b) return !1;
			if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
			if ('undefined' != typeof a.compareDocumentPosition)
				return a == b || !!(a.compareDocumentPosition(b) & 16);
			for (; b && a != b; ) b = b.parentNode;
			return b == a;
		},
		rm = function (a, b) {
			if (a == b) return 0;
			if (a.compareDocumentPosition)
				return a.compareDocumentPosition(b) & 2 ? 1 : -1;
			if (L && !Ql(9)) {
				if (9 == a.nodeType) return -1;
				if (9 == b.nodeType) return 1;
			}
			if (
				'sourceIndex' in a ||
				(a.parentNode && 'sourceIndex' in a.parentNode)
			) {
				var c = 1 == a.nodeType,
					d = 1 == b.nodeType;
				if (c && d) return a.sourceIndex - b.sourceIndex;
				var e = a.parentNode,
					g = b.parentNode;
				return e == g
					? pm(a, b)
					: !c && om(e, b)
					? -1 * qm(a, b)
					: !d && om(g, a)
					? qm(b, a)
					: (c ? a.sourceIndex : e.sourceIndex) -
					  (d ? b.sourceIndex : g.sourceIndex);
			}
			d = I(a);
			c = d.createRange();
			c.selectNode(a);
			c.collapse(!0);
			a = d.createRange();
			a.selectNode(b);
			a.collapse(!0);
			return c.compareBoundaryPoints(z.Range.START_TO_END, a);
		},
		qm = function (a, b) {
			var c = a.parentNode;
			if (c == b) return -1;
			for (; b.parentNode != c; ) b = b.parentNode;
			return pm(b, a);
		},
		pm = function (a, b) {
			for (; (b = b.previousSibling); ) if (b == a) return -1;
			return 1;
		},
		sm = function (a) {
			var b,
				c = arguments.length;
			if (!c) return null;
			if (1 == c) return arguments[0];
			var d = [],
				e = Infinity;
			for (b = 0; b < c; b++) {
				for (var g = [], h = arguments[b]; h; )
					g.unshift(h), (h = h.parentNode);
				d.push(g);
				e = Math.min(e, g.length);
			}
			g = null;
			for (b = 0; b < e; b++) {
				h = d[0][b];
				for (var k = 1; k < c; k++) if (h != d[k][b]) return g;
				g = h;
			}
			return g;
		},
		I = function (a) {
			return 9 == a.nodeType ? a : a.ownerDocument || a.document;
		},
		tm = function (a) {
			return a.contentDocument || a.contentWindow.document;
		},
		um = function (a, b) {
			if ('textContent' in a) a.textContent = b;
			else if (3 == a.nodeType) a.data = String(b);
			else if (a.firstChild && 3 == a.firstChild.nodeType) {
				for (; a.lastChild != a.firstChild; )
					a.removeChild(a.lastChild);
				a.firstChild.data = String(b);
			} else km(a), a.appendChild(I(a).createTextNode(String(b)));
		},
		vm = function (a) {
			return L && !G('9')
				? ((a = a.getAttributeNode(sh)), null != a && a.specified)
				: a.hasAttribute(sh);
		},
		wm = function (a) {
			a = a.tabIndex;
			return typeof a === Df && 0 <= a && 32768 > a;
		},
		ym = function (a) {
			var b = [];
			xm(a, b, !1);
			return b.join('');
		},
		xm = function (a, b, c) {
			if (!(a.nodeName in zm))
				if (3 == a.nodeType)
					c
						? b.push(
								String(a.nodeValue).replace(/(\r\n|\r|\n)/g, '')
						  )
						: b.push(a.nodeValue);
				else if (a.nodeName in Am) b.push(Am[a.nodeName]);
				else
					for (a = a.firstChild; a; )
						xm(a, b, c), (a = a.nextSibling);
		},
		Vl = function (a) {
			this.A = a || z.document || document;
		},
		Bm = function (a, b) {
			a = a.A;
			b = b && '*' != b ? String(b).toUpperCase() : '';
			a.querySelectorAll && a.querySelector && b
				? (b = a.querySelectorAll(b + ''))
				: (b = a.getElementsByTagName(b || '*'));
			return b;
		},
		Cm = function (a, b) {
			return a.A.createTextNode(String(b));
		},
		Dm = function (a, b) {
			a = a.A;
			for (
				var c = hm(a, 'TABLE'),
					d = c.appendChild(hm(a, 'TBODY')),
					e = 0;
				1 > e;
				e++
			) {
				for (var g = hm(a, 'TR'), h = 0; h < b; h++)
					g.appendChild(hm(a, 'TD'));
				d.appendChild(g);
			}
			return c;
		},
		Em = function (a) {
			a = a.A;
			return a.parentWindow || a.defaultView;
		},
		N = function () {
			this.Y = this.Y;
			this.Ha = this.Ha;
		},
		Fm = function (a, b) {
			b = yj(O, b);
			a.Y ? b() : (a.Ha || (a.Ha = []), a.Ha.push(b));
		},
		O = function (a) {
			a && typeof a.da == r && a.da();
		},
		Gm = function (a) {
			for (var b = 0, c = arguments.length; b < c; ++b) {
				var d = arguments[b];
				rj(d) ? Gm.apply(null, d) : O(d);
			}
		},
		P = function (a, b) {
			this.type = a;
			this.B = this.target = b;
			this.defaultPrevented = this.C = !1;
		},
		Hm = function (a) {
			a.stopPropagation();
		},
		Km = function (a, b) {
			P.call(this, a ? a.type : '');
			this.relatedTarget = this.B = this.target = null;
			this.button =
				this.screenY =
				this.screenX =
				this.clientY =
				this.clientX =
					0;
			this.key = '';
			this.charCode = this.keyCode = 0;
			this.D =
				this.metaKey =
				this.shiftKey =
				this.altKey =
				this.ctrlKey =
					!1;
			this.pointerId = 0;
			this.pointerType = '';
			this.A = null;
			if (a) {
				var c = (this.type = a.type),
					d =
						a.changedTouches && a.changedTouches.length
							? a.changedTouches[0]
							: null;
				this.target = a.target || a.srcElement;
				this.B = b;
				(b = a.relatedTarget)
					? Q && (Kl(b, 'nodeName') || (b = null))
					: c == v
					? (b = a.fromElement)
					: c == $e && (b = a.toElement);
				this.relatedTarget = b;
				d
					? ((this.clientX =
							void 0 !== d.clientX ? d.clientX : d.pageX),
					  (this.clientY =
							void 0 !== d.clientY ? d.clientY : d.pageY),
					  (this.screenX = d.screenX || 0),
					  (this.screenY = d.screenY || 0))
					: ((this.clientX =
							void 0 !== a.clientX ? a.clientX : a.pageX),
					  (this.clientY =
							void 0 !== a.clientY ? a.clientY : a.pageY),
					  (this.screenX = a.screenX || 0),
					  (this.screenY = a.screenY || 0));
				this.button = a.button;
				this.keyCode = a.keyCode || 0;
				this.key = a.key || '';
				this.charCode = a.charCode || (c == u ? a.keyCode : 0);
				this.ctrlKey = a.ctrlKey;
				this.altKey = a.altKey;
				this.shiftKey = a.shiftKey;
				this.metaKey = a.metaKey;
				this.D = Im ? a.metaKey : a.ctrlKey;
				this.pointerId = a.pointerId || 0;
				this.pointerType =
					typeof a.pointerType === w
						? a.pointerType
						: Jm[a.pointerType] || '';
				this.A = a;
				a.defaultPrevented && this.preventDefault();
			}
		},
		Nm = function (a) {
			return Lm
				? 0 == a.A.button
				: a.type == n
				? !0
				: !!(a.A.button & Mm[0]);
		},
		Pm = function (a) {
			return !(!a || !a[Om]);
		},
		Rm = function (a, b, c, d, e) {
			this.listener = a;
			this.A = null;
			this.src = b;
			this.type = c;
			this.capture = !!d;
			this.ga = e;
			this.key = ++Qm;
			this.Ac = this.Gc = !1;
		},
		Sm = function (a) {
			a.Ac = !0;
			a.listener = null;
			a.A = null;
			a.src = null;
			a.ga = null;
		},
		Tm = function (a) {
			this.src = a;
			this.A = {};
			this.B = 0;
		},
		Vm = function (a, b, c, d, e) {
			b = b.toString();
			if (b in a.A) {
				var g = a.A[b];
				c = Um(g, c, d, e);
				-1 < c &&
					(Sm(g[c]),
					Array.prototype.splice.call(g, c, 1),
					0 == g.length && (delete a.A[b], a.B--));
			}
		},
		Wm = function (a, b) {
			var c = b.type;
			c in a.A &&
				Pj(a.A[c], b) &&
				(Sm(b), 0 == a.A[c].length && (delete a.A[c], a.B--));
		},
		Xm = function (a, b, c, d, e) {
			a = a.A[b.toString()];
			b = -1;
			a && (b = Um(a, c, d, e));
			return -1 < b ? a[b] : null;
		},
		Um = function (a, b, c, d) {
			for (var e = 0; e < a.length; ++e) {
				var g = a[e];
				if (!g.Ac && g.listener == b && g.capture == !!c && g.ga == d)
					return e;
			}
			return -1;
		},
		Zm = function (a, b, c, d, e) {
			if (d && d.once) return Ym(a, b, c, d, e);
			if (Array.isArray(b)) {
				for (var g = 0; g < b.length; g++) Zm(a, b[g], c, d, e);
				return null;
			}
			c = $m(c);
			return Pm(a)
				? a.K.add(String(b), c, !1, sj(d) ? !!d.capture : !!d, e)
				: an(a, b, c, !1, d, e);
		},
		an = function (a, b, c, d, e, g) {
			if (!b) throw Error(qa);
			var h = sj(e) ? !!e.capture : !!e;
			if (h && !bn) return null;
			var k = cn(a);
			k || (a[dn] = k = new Tm(a));
			c = k.add(b, c, d, h, g);
			if (c.A) return c;
			d = en();
			c.A = d;
			d.src = a;
			d.listener = c;
			if (a.addEventListener)
				fn || (e = h),
					void 0 === e && (e = !1),
					a.addEventListener(b.toString(), d, e);
			else if (a.attachEvent) a.attachEvent(gn(b.toString()), d);
			else if (a.addListener && a.removeListener) a.addListener(d);
			else
				throw Error(
					'addEventListener and attachEvent are unavailable.'
				);
			hn++;
			return c;
		},
		en = function () {
			var a = jn,
				b = bn
					? function (c) {
							return a.call(b.src, b.listener, c);
					  }
					: function (c) {
							c = a.call(b.src, b.listener, c);
							if (!c) return c;
					  };
			return b;
		},
		Ym = function (a, b, c, d, e) {
			if (Array.isArray(b)) {
				for (var g = 0; g < b.length; g++) Ym(a, b[g], c, d, e);
				return null;
			}
			c = $m(c);
			return Pm(a)
				? a.K.add(String(b), c, !0, sj(d) ? !!d.capture : !!d, e)
				: an(a, b, c, !0, d, e);
		},
		kn = function (a, b, c, d, e) {
			if (Array.isArray(b))
				for (var g = 0; g < b.length; g++) kn(a, b[g], c, d, e);
			else
				(d = sj(d) ? !!d.capture : !!d),
					(c = $m(c)),
					Pm(a)
						? Vm(a.K, String(b), c, d, e)
						: a && (a = cn(a)) && (b = Xm(a, b, c, d, e)) && ln(b);
		},
		ln = function (a) {
			if (typeof a !== Df && a && !a.Ac) {
				var b = a.src;
				if (Pm(b)) Wm(b.K, a);
				else {
					var c = a.type,
						d = a.A;
					b.removeEventListener
						? b.removeEventListener(c, d, a.capture)
						: b.detachEvent
						? b.detachEvent(gn(c), d)
						: b.addListener &&
						  b.removeListener &&
						  b.removeListener(d);
					hn--;
					(c = cn(b))
						? (Wm(c, a),
						  0 == c.B && ((c.src = null), (b[dn] = null)))
						: Sm(a);
				}
			}
		},
		gn = function (a) {
			return a in mn ? mn[a] : (mn[a] = 'on' + a);
		},
		nn = function (a, b) {
			var c = a.listener,
				d = a.ga || a.src;
			a.Gc && ln(a);
			return c.call(d, b);
		},
		jn = function (a, b) {
			if (a.Ac) return !0;
			if (!bn) {
				if (!b)
					a: {
						b = ['window', 'event'];
						for (var c = z, d = 0; d < b.length; d++)
							if (((c = c[b[d]]), null == c)) {
								b = null;
								break a;
							}
						b = c;
					}
				b = new Km(b, this);
				return nn(a, b);
			}
			return nn(a, new Km(b, this));
		},
		cn = function (a) {
			a = a[dn];
			return a instanceof Tm ? a : null;
		},
		$m = function (a) {
			if (typeof a === r) return a;
			a[on] ||
				(a[on] = function (b) {
					return a.handleEvent(b);
				});
			return a[on];
		},
		R = function () {
			N.call(this);
			this.K = new Tm(this);
			this.kg = this;
			this.ub = null;
		},
		pn = function (a, b, c, d) {
			b = a.K.A[String(b)];
			if (!b) return !0;
			b = b.concat();
			for (var e = !0, g = 0; g < b.length; ++g) {
				var h = b[g];
				if (h && !h.Ac && h.capture == c) {
					var k = h.listener,
						l = h.ga || h.src;
					h.Gc && Wm(a.K, h);
					e = !1 !== k.call(l, d) && e;
				}
			}
			return e && !d.defaultPrevented;
		},
		qn = function (a, b, c, d) {
			this.top = a;
			this.right = b;
			this.bottom = c;
			this.left = d;
		},
		rn = function (a, b, c, d) {
			this.left = a;
			this.top = b;
			this.width = c;
			this.height = d;
		},
		sn = function (a) {
			return new rn(a.left, a.top, a.right - a.left, a.bottom - a.top);
		},
		un = function (a, b, c) {
			if (typeof b === w) (b = tn(a, b)) && (a.style[b] = c);
			else
				for (var d in b) {
					c = a;
					var e = b[d],
						g = tn(c, d);
					g && (c.style[g] = e);
				}
		},
		tn = function (a, b) {
			var c = vn[b];
			if (!c) {
				var d = Fl(b);
				c = d;
				void 0 === a.style[d] &&
					((d =
						(M
							? 'Webkit'
							: Q
							? 'Moz'
							: L
							? 'ms'
							: wn
							? 'O'
							: null) + Gl(d)),
					void 0 !== a.style[d] && (c = d));
				vn[b] = c;
			}
			return c;
		},
		xn = function (a, b) {
			var c = I(a);
			return c.defaultView &&
				c.defaultView.getComputedStyle &&
				(a = c.defaultView.getComputedStyle(a, null))
				? a[b] || a.getPropertyValue(b) || ''
				: '';
		},
		yn = function (a, b) {
			return (
				xn(a, b) ||
				(a.currentStyle ? a.currentStyle[b] : null) ||
				(a.style && a.style[b])
			);
		},
		An = function (a, b) {
			if (b instanceof H) {
				var c = b.x;
				b = b.y;
			} else (c = b), (b = void 0);
			a.style.left = zn(c);
			a.style.top = zn(b);
		},
		Bn = function (a) {
			return new H(a.offsetLeft, a.offsetTop);
		},
		Cn = function (a) {
			try {
				return a.getBoundingClientRect();
			} catch (b) {
				return {
					left: 0,
					top: 0,
					right: 0,
					bottom: 0,
				};
			}
		},
		Dn = function (a) {
			if (L && !Ql(8)) return a.offsetParent;
			var b = I(a),
				c = yn(a, Wf),
				d = 'fixed' == c || c == Ea;
			for (a = a.parentNode; a && a != b; a = a.parentNode)
				if (
					(11 == a.nodeType && a.host && (a = a.host),
					(c = yn(a, Wf)),
					(d =
						d &&
						'static' == c &&
						a != b.documentElement &&
						a != b.body),
					!d &&
						(a.scrollWidth > a.clientWidth ||
							a.scrollHeight > a.clientHeight ||
							'fixed' == c ||
							c == Ea ||
							'relative' == c))
				)
					return a;
			return null;
		},
		Fn = function (a) {
			for (
				var b = new qn(0, Infinity, Infinity, 0),
					c = J(a),
					d = c.A.body,
					e = c.A.documentElement,
					g = bm(c.A);
				(a = Dn(a));

			)
				if (
					!(
						(L && 0 == a.clientWidth) ||
						(M && 0 == a.clientHeight && a == d)
					) &&
					a != d &&
					a != e &&
					yn(a, 'overflow') != ti
				) {
					var h = En(a),
						k = new H(a.clientLeft, a.clientTop);
					h.x += k.x;
					h.y += k.y;
					b.top = Math.max(b.top, h.y);
					b.right = Math.min(b.right, h.x + a.clientWidth);
					b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
					b.left = Math.max(b.left, h.x);
				}
			d = g.scrollLeft;
			g = g.scrollTop;
			b.left = Math.max(b.left, d);
			b.top = Math.max(b.top, g);
			c = am(Em(c) || window);
			b.right = Math.min(b.right, d + c.width);
			b.bottom = Math.min(b.bottom, g + c.height);
			return 0 <= b.top &&
				0 <= b.left &&
				b.bottom > b.top &&
				b.right > b.left
				? b
				: null;
		},
		En = function (a) {
			var b = I(a),
				c = new H(0, 0);
			var d = b ? I(b) : document;
			d = !L || Ql(9) || $l(J(d).A) ? d.documentElement : d.body;
			if (a == d) return c;
			a = Cn(a);
			b = cm(J(b).A);
			c.x = a.left + b.x;
			c.y = a.top + b.y;
			return c;
		},
		Gn = function (a) {
			a = Cn(a);
			return new H(a.left, a.top);
		},
		Hn = function (a) {
			if (1 == a.nodeType) return Gn(a);
			a = a.changedTouches ? a.changedTouches[0] : a;
			return new H(a.clientX, a.clientY);
		},
		zn = function (a) {
			typeof a == Df && (a += mg);
			return a;
		},
		Jn = function (a) {
			var b = In;
			if (yn(a, 'display') != Cf) return b(a);
			var c = a.style,
				d = c.display,
				e = c.visibility,
				g = c.position;
			c.visibility = Zc;
			c.position = Ea;
			c.display = 'inline';
			a = b(a);
			c.display = d;
			c.position = g;
			c.visibility = e;
			return a;
		},
		In = function (a) {
			var b = a.offsetWidth,
				c = a.offsetHeight,
				d = M && !b && !c;
			return (void 0 === b || d) && a.getBoundingClientRect
				? ((a = Cn(a)), new Sl(a.right - a.left, a.bottom - a.top))
				: new Sl(b, c);
		},
		Kn = function (a, b) {
			a.style.display = b ? '' : Cf;
		},
		Mn = function (a, b) {
			b = J(b);
			var c = b.A;
			if (L && c.createStyleSheet) (b = c.createStyleSheet()), Ln(b, a);
			else {
				c = Bm(b, 'HEAD')[0];
				if (!c) {
					var d = Bm(b, 'BODY')[0];
					c = b.P('HEAD');
					d.parentNode.insertBefore(c, d);
				}
				d = b.P('STYLE');
				var e = nj();
				e && d.setAttribute('nonce', e);
				Ln(d, a);
				b.U(c, d);
			}
		},
		Ln = function (a, b) {
			b = kl(b);
			L && void 0 !== a.cssText
				? (a.cssText = b)
				: z.trustedTypes
				? um(a, b)
				: (a.innerHTML = b);
		},
		Nn = function (a) {
			return ug == yn(a, Sb);
		},
		Pn = function (a, b) {
			b = b ? null : a.getElementsByTagName('*');
			if (On) {
				var c = Cf;
				a.style && (a.style[On] = c);
				if (b) {
					a = 0;
					for (var d; (d = b[a]); a++) d.style && (d.style[On] = c);
				}
			} else if (L || wn)
				if (((c = 'on'), a.setAttribute('unselectable', c), b))
					for (a = 0; (d = b[a]); a++)
						d.setAttribute('unselectable', c);
		},
		Tn = function (a, b) {
			var c = $l(J(I(a)).A);
			if (!L || G('10') || (c && G('8'))) Qn(a, b, 'content-box');
			else {
				var d = a.style;
				c
					? ((d.pixelWidth = b.width), (d.pixelHeight = b.height))
					: ((c = Rn(a, 'padding')),
					  (a = Sn(a)),
					  (d.pixelWidth =
							b.width + a.left + c.left + c.right + a.right),
					  (d.pixelHeight =
							b.height + a.top + c.top + c.bottom + a.bottom));
			}
		},
		Qn = function (a, b, c) {
			a = a.style;
			Q
				? (a.MozBoxSizing = c)
				: M
				? (a.WebkitBoxSizing = c)
				: (a.boxSizing = c);
			a.width = Math.max(b.width, 0) + mg;
			a.height = Math.max(b.height, 0) + mg;
		},
		Un = function (a, b) {
			if (/^\d+px?$/.test(b)) return parseInt(b, 10);
			var c = a.style.left,
				d = a.runtimeStyle.left;
			a.runtimeStyle.left = a.currentStyle.left;
			a.style.left = b;
			b = a.style.pixelLeft;
			a.style.left = c;
			a.runtimeStyle.left = d;
			return +b;
		},
		Vn = function (a, b) {
			return (b = a.currentStyle ? a.currentStyle[b] : null)
				? Un(a, b)
				: 0;
		},
		Rn = function (a, b) {
			if (L) {
				var c = Vn(a, b + 'Left'),
					d = Vn(a, b + 'Right'),
					e = Vn(a, b + 'Top');
				a = Vn(a, b + 'Bottom');
				return new qn(e, d, a, c);
			}
			c = xn(a, b + 'Left');
			d = xn(a, b + 'Right');
			e = xn(a, b + 'Top');
			a = xn(a, b + 'Bottom');
			return new qn(
				parseFloat(e),
				parseFloat(d),
				parseFloat(a),
				parseFloat(c)
			);
		},
		Xn = function (a, b) {
			if ((a.currentStyle ? a.currentStyle[b + 'Style'] : null) == Cf)
				return 0;
			b = a.currentStyle ? a.currentStyle[b + 'Width'] : null;
			return b in Wn ? Wn[b] : Un(a, b);
		},
		Sn = function (a) {
			if (L && !Ql(9)) {
				var b = Xn(a, 'borderLeft'),
					c = Xn(a, 'borderRight'),
					d = Xn(a, 'borderTop');
				a = Xn(a, 'borderBottom');
				return new qn(d, c, a, b);
			}
			b = xn(a, 'borderLeftWidth');
			c = xn(a, 'borderRightWidth');
			d = xn(a, 'borderTopWidth');
			a = xn(a, 'borderBottomWidth');
			return new qn(
				parseFloat(d),
				parseFloat(c),
				parseFloat(a),
				parseFloat(b)
			);
		},
		ao = function (a) {
			var b = yn(a, 'fontSize');
			var c = ((c = b.match(Yn)) && c[0]) || null;
			if (b && mg == c) return parseInt(b, 10);
			if (L) {
				if (String(c) in Zn) return Un(a, b);
				if (
					a.parentNode &&
					1 == a.parentNode.nodeType &&
					String(c) in $n
				)
					return (
						(a = a.parentNode),
						(c = yn(a, 'fontSize')),
						Un(a, b == c ? '1em' : b)
					);
			}
			c = fm(m, {
				style: 'visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;',
			});
			a.appendChild(c);
			b = c.offsetHeight;
			lm(c);
			return b;
		},
		bo = function (a) {
			return (a = a.exec(fk)) ? a[1] : '';
		},
		eo = function (a) {
			return 0 <= ek(co, a);
		},
		io = function (a, b, c, d, e, g, h, k, l) {
			var p = fo(c);
			var B = En(a);
			var K = Jn(a);
			B = new rn(B.x, B.y, K.width, K.height);
			if ((K = Fn(a))) {
				var fa = sn(K);
				K = Math.max(B.left, fa.left);
				var Ka = Math.min(B.left + B.width, fa.left + fa.width);
				if (K <= Ka) {
					var Qb = Math.max(B.top, fa.top);
					fa = Math.min(B.top + B.height, fa.top + fa.height);
					Qb <= fa &&
						((B.left = K),
						(B.top = Qb),
						(B.width = Ka - K),
						(B.height = fa - Qb));
				}
			}
			K = J(a);
			Qb = J(c);
			if (K.A != Qb.A) {
				Ka = K.A.body;
				Qb = Em(Qb);
				fa = new H(0, 0);
				var Rb = dm(I(Ka));
				if (Kl(Rb, 'parent')) {
					var so = Ka;
					do {
						var mt = Rb == Qb ? En(so) : Gn(so);
						fa.x += mt.x;
						fa.y += mt.y;
					} while (
						Rb &&
						Rb != Qb &&
						Rb != Rb.parent &&
						(so = Rb.frameElement) &&
						(Rb = Rb.parent)
					);
				}
				Ka = Rl(fa, En(Ka));
				!L || Ql(9) || $l(K.A) || (Ka = Rl(Ka, cm(K.A)));
				B.left += Ka.x;
				B.top += Ka.y;
			}
			a = go(a, b);
			b = B.left;
			a & 4 ? (b += B.width) : a & 2 && (b += B.width / 2);
			b = new H(b, B.top + (a & 1 ? B.height : 0));
			b = Rl(b, p);
			e &&
				((b.x += (a & 4 ? -1 : 1) * e.x),
				(b.y += (a & 1 ? -1 : 1) * e.y));
			if (h)
				if (l) var yb = l;
				else if ((yb = Fn(c)))
					(yb.top -= p.y),
						(yb.right -= p.x),
						(yb.bottom -= p.y),
						(yb.left -= p.x);
			return ho(b, c, d, g, yb, h, k);
		},
		fo = function (a) {
			if ((a = a.offsetParent)) {
				var b = 'HTML' == a.tagName || 'BODY' == a.tagName;
				if (!b || 'static' != yn(a, Wf)) {
					var c = En(a);
					if (!b) {
						b = Nn(a);
						var d;
						if ((d = b)) {
							d = jo && eo(10);
							var e;
							if ((e = ko)) e = 0 <= ek(lo, 10);
							var g = mo && eo(85);
							d = Q || d || e || g;
						}
						b = d
							? -a.scrollLeft
							: !b || (no && G('8')) || yn(a, 'overflowX') == ti
							? a.scrollLeft
							: a.scrollWidth - a.clientWidth - a.scrollLeft;
						c = Rl(c, new H(b, a.scrollTop));
					}
				}
			}
			return c || new H();
		},
		ho = function (a, b, c, d, e, g, h) {
			a = new H(a.x, a.y);
			var k = go(b, c);
			c = Jn(b);
			h = h ? Ul(h) : Ul(c);
			a = new H(a.x, a.y);
			h = Ul(h);
			var l = 0;
			if (d || 0 != k)
				k & 4
					? (a.x -= h.width + (d ? d.right : 0))
					: k & 2
					? (a.x -= h.width / 2)
					: d && (a.x += d.left),
					k & 1
						? (a.y -= h.height + (d ? d.bottom : 0))
						: d && (a.y += d.top);
			if (g) {
				if (e) {
					d = a;
					k = h;
					l = 0;
					65 == (g & 65) &&
						(d.x < e.left || d.x >= e.right) &&
						(g &= -2);
					132 == (g & 132) &&
						(d.y < e.top || d.y >= e.bottom) &&
						(g &= -5);
					d.x < e.left && g & 1 && ((d.x = e.left), (l |= 1));
					if (g & 16) {
						var p = d.x;
						d.x < e.left && ((d.x = e.left), (l |= 4));
						d.x + k.width > e.right &&
							((k.width = Math.min(
								e.right - d.x,
								p + k.width - e.left
							)),
							(k.width = Math.max(k.width, 0)),
							(l |= 4));
					}
					d.x + k.width > e.right &&
						g & 1 &&
						((d.x = Math.max(e.right - k.width, e.left)), (l |= 1));
					g & 2 &&
						(l |=
							(d.x < e.left ? 16 : 0) |
							(d.x + k.width > e.right ? 32 : 0));
					d.y < e.top && g & 4 && ((d.y = e.top), (l |= 2));
					g & 32 &&
						((p = d.y),
						d.y < e.top && ((d.y = e.top), (l |= 8)),
						d.y + k.height > e.bottom &&
							((k.height = Math.min(
								e.bottom - d.y,
								p + k.height - e.top
							)),
							(k.height = Math.max(k.height, 0)),
							(l |= 8)));
					d.y + k.height > e.bottom &&
						g & 4 &&
						((d.y = Math.max(e.bottom - k.height, e.top)),
						(l |= 2));
					g & 8 &&
						(l |=
							(d.y < e.top ? 64 : 0) |
							(d.y + k.height > e.bottom ? 128 : 0));
					e = l;
				} else e = 256;
				l = e;
			}
			g = new rn(0, 0, 0, 0);
			g.left = a.x;
			g.top = a.y;
			g.width = h.width;
			g.height = h.height;
			e = l;
			if (e & 496) return e;
			An(b, new H(g.left, g.top));
			h = new Sl(g.width, g.height);
			Tl(c, h) ||
				((c = h),
				(h = $l(J(I(b)).A)),
				!L || G('10') || (h && G('8'))
					? Qn(b, c, 'border-box')
					: ((a = b.style),
					  h
							? ((h = Rn(b, 'padding')),
							  (b = Sn(b)),
							  (a.pixelWidth =
									c.width -
									b.left -
									h.left -
									h.right -
									b.right),
							  (a.pixelHeight =
									c.height -
									b.top -
									h.top -
									h.bottom -
									b.bottom))
							: ((a.pixelWidth = c.width),
							  (a.pixelHeight = c.height))));
			return e;
		},
		go = function (a, b) {
			return (b & 8 && Nn(a) ? b ^ 4 : b) & -9;
		},
		oo = function (a) {
			P.call(this, 'bind');
			this.A = a;
		},
		po = function (a) {
			P.call(this, 'visi');
			this.A = a;
		},
		S = function (a) {
			N.call(this);
			this.B = a;
			this.A = {};
		},
		U = function (a, b, c, d, e) {
			return T(a, b, c, d, e);
		},
		qo = function (a, b, c, d, e) {
			T(a, b, c, d, !1, e);
		},
		T = function (a, b, c, d, e, g) {
			Array.isArray(c) || (c && (ro[0] = c.toString()), (c = ro));
			for (var h = 0; h < c.length; h++) {
				var k = Zm(b, c[h], d || a.handleEvent, e || !1, g || a.B || a);
				if (!k) break;
				a.A[k.key] = k;
			}
			return a;
		},
		to = function (a, b, c, d, e, g) {
			if (Array.isArray(c))
				for (var h = 0; h < c.length; h++) to(a, b, c[h], d, e, g);
			else
				(d = d || a.handleEvent),
					(e = sj(e) ? !!e.capture : !!e),
					(g = g || a.B || a),
					(d = $m(d)),
					(e = !!e),
					(c = Pm(b)
						? Xm(b.K, String(c), d, e, g)
						: b
						? (b = cn(b))
							? Xm(b, c, d, e, g)
							: null
						: null),
					c && (ln(c), delete a.A[c.key]);
			return a;
		},
		uo = function (a) {
			hk(
				a.A,
				function (b, c) {
					this.A.hasOwnProperty(c) && ln(b);
				},
				a
			);
			a.A = {};
		},
		vo = function () {},
		wo = function (a, b, c) {
			this.A = a;
			this.B = b;
			this.F = c;
		},
		xo = function () {},
		V = function (a) {
			R.call(this);
			this.A = a || J();
			this.Jb = yo;
			this.ka = null;
			this.Ta = !1;
			this.C = null;
			this.T = void 0;
			this.F = this.aa = null;
		},
		zo = function (a, b) {
			switch (a) {
				case 1:
					return b ? 'disable' : 'enable';
				case 2:
					return b ? 'highlight' : 'unhighlight';
				case 4:
					return b ? 'activate' : 'deactivate';
				case 8:
					return b ? 'select' : 'unselect';
				case 16:
					return b ? 'check' : 'uncheck';
				case 32:
					return b ? tc : ab;
				case 64:
					return b ? 'open' : 'close';
			}
			throw Error('Invalid component state');
		},
		Ao = function (a) {
			a.T || (a.T = new S(a));
			return a.T;
		},
		Bo = function (a) {
			null == a.Jb && (a.Jb = Nn(a.Ta ? a.C : a.A.A.body));
			return a.Jb;
		},
		Co = function (a, b) {
			return a.F ? a.F[b] || null : null;
		},
		Do = function (a, b, c) {
			a.F && D(a.F, b, c);
		},
		Eo = function (a, b) {
			return a.F && b ? Fj(a.F, b) : -1;
		},
		Go = function (a) {
			V.call(this, Fo);
			this.L = a;
			this.V = this.fa = !1;
			this.O = null;
			this.ff = !0;
			this.S = '';
			this.W = this.cb = !1;
			this.H = new S(this);
		},
		Ho = function (a, b, c) {
			a.fa = !c;
			a.V = b;
			a.Lb = c ? a.A.M(c) : void 0;
			a.ha(a.Lb);
			a.fa && ((a.M().style.position = Ea), a.bf());
			a.S = a.M().style.display;
		},
		Io = function () {
			R.apply(this, arguments);
		},
		Ko = function (a, b) {
			a.J(b);
			Jo.forEach(function (c) {
				c.J(b);
			});
		},
		Oo = function (a, b, c, d, e, g) {
			if (M && !G('525')) return !0;
			if (Im && e) return Lo(a);
			if (e && !d) return !1;
			if (!Q) {
				typeof b === Df && (b = Mo(b));
				var h = 17 == b || 18 == b || (Im && 91 == b);
				if (((!c || Im) && h) || (Im && 16 == b && (d || g))) return !1;
			}
			if ((M || No) && d && c)
				switch (a) {
					case 220:
					case 219:
					case 221:
					case 192:
					case 186:
					case 189:
					case 187:
					case 188:
					case 190:
					case 191:
					case 192:
					case 222:
						return !1;
				}
			if (L && d && b == a) return !1;
			switch (a) {
				case 13:
					return Q ? (g || e ? !1 : !(c && d)) : !0;
				case 27:
					return !(M || No || Q);
			}
			return Q && (d || e || g) ? !1 : Lo(a);
		},
		Lo = function (a) {
			if (
				(48 <= a && 57 >= a) ||
				(96 <= a && 106 >= a) ||
				(65 <= a && 90 >= a) ||
				((M || No) && 0 == a)
			)
				return !0;
			switch (a) {
				case 32:
				case 43:
				case 63:
				case 64:
				case 107:
				case 109:
				case 110:
				case 111:
				case 186:
				case 59:
				case 189:
				case 187:
				case 61:
				case 188:
				case 190:
				case 191:
				case 192:
				case 222:
				case 219:
				case 220:
				case 221:
				case 163:
				case 58:
					return !0;
				case 173:
					return Q;
				default:
					return !1;
			}
		},
		Mo = function (a) {
			if (Q) a = Po(a);
			else if (Im && M)
				switch (a) {
					case 93:
						a = 91;
				}
			return a;
		},
		Po = function (a) {
			switch (a) {
				case 61:
					return 187;
				case 59:
					return 186;
				case 173:
					return 189;
				case 224:
					return 91;
				case 0:
					return 224;
				default:
					return a;
			}
		},
		Qo = function (a, b, c, d, e, g, h, k, l, p) {
			this.A = a;
			this.F = b;
			this.I = c;
			this.C = d;
			this.D = e;
			this.K = g;
			this.G = h;
			this.H = k;
			this.B = l;
			this.Y = p;
		},
		Wo = function (a) {
			var b = a.A;
			b =
				(b =
					b &&
					'composed' in b &&
					b &&
					'composedPath' in b &&
					b.composed &&
					b.composedPath()) && 0 < b.length
					? b[0]
					: a.target;
			return Ro(
				So(
					To(
						Uo(
							new Vo()
								.keyCode(a.keyCode || 0)
								.key(a.key || '')
								.shiftKey(!!a.shiftKey)
								.altKey(!!a.altKey)
								.ctrlKey(!!a.ctrlKey)
								.metaKey(!!a.metaKey)
								.target(a.target),
							b
						),
						function () {
							return a.preventDefault();
						}
					),
					function () {
						return a.stopPropagation();
					}
				)
			);
		},
		Vo = function () {
			this.C = null;
			this.D = '';
			this.I =
				this.K =
				this.G =
				this.Y =
				this.F =
				this.B =
				this.A =
				this.H =
					null;
		},
		Uo = function (a, b) {
			a.G = b;
			return a;
		},
		To = function (a, b) {
			a.K = b;
			return a;
		},
		So = function (a, b) {
			a.I = b;
			return a;
		},
		Ro = function (a) {
			return new Qo(a.C, a.D, a.H, a.A, a.B, a.F, a.Y, a.G, a.K, a.I);
		},
		$o = function (a) {
			R.call(this);
			this.C = this.B = {};
			this.F = 0;
			this.L = rk(Xo);
			this.T = rk(Yo);
			this.H = this.I = !1;
			this.G = null;
			this.A = a;
			Zm(this.A, t, this.ne, void 0, this);
			Zm(this.A, hh, this.ve, void 0, this);
			Zo &&
				(Zm(this.A, u, this.xe, void 0, this),
				Zm(this.A, ih, this.ye, void 0, this));
			Zm(this.A, je, this.pe, void 0, this);
			Zm(this.A, jh, this.we, void 0, this);
		},
		ap = function (a) {
			this.A = a || null;
			this.next = a ? null : {};
		},
		dp = function (a, b) {
			if (typeof b[a] === w)
				a = Hj(bp(b[a]), function (e) {
					return cp(e.key || '', e.keyCode, e.modifiers);
				});
			else {
				var c = b,
					d = a;
				Array.isArray(b[a]) && ((c = b[a]), (d = 0));
				for (a = []; d < c.length; d += 2)
					a.push(cp('', c[d], c[d + 1]));
			}
			return a;
		},
		bp = function (a) {
			a = a
				.replace(/[ +]*\+[ +]*/g, '+')
				.replace(/[ ]+/g, ' ')
				.toLowerCase();
			a = a.split(' ');
			for (var b = [], c, d = 0; (c = a[d]); d++) {
				var e = c.split('+'),
					g = null,
					h = null;
				c = 0;
				for (var k, l = 0; (k = e[l]); l++) {
					switch (k) {
						case 'shift':
							c |= 1;
							continue;
						case 'ctrl':
							c |= 2;
							continue;
						case 'alt':
							c |= 4;
							continue;
						case 'meta':
							c |= 8;
							continue;
					}
					e = void 0;
					g = k;
					if (!ep) {
						h = {};
						for (e in fp) h[fp[e]] = Mo(parseInt(e, 10));
						ep = h;
					}
					h = ep[g];
					g = k;
					break;
				}
				b.push({
					key: g,
					keyCode: h,
					modifiers: c,
				});
			}
			return b;
		},
		gp = function (a, b) {
			32 == a.G && 32 == b.A && (0, b.B)();
			a.G = null;
		},
		hp = function (a) {
			return Zo && a.D && a.C;
		},
		ip = function (a, b, c) {
			var d = b.shift();
			D(d, function (e) {
				if ((e = a[e]) && (0 == b.length || e.A))
					throw Error(
						'Keyboard shortcut conflicts with existing shortcut'
					);
			});
			b.length
				? D(d, function (e) {
						e = e.toString();
						var g = new ap();
						e = e in a ? a[e] : (a[e] = g);
						ip(e.next, b.slice(0), c);
				  })
				: D(d, function (e) {
						a[e] = new ap(c);
				  });
		},
		jp = function (a, b) {
			var c = b.shift();
			D(c, function (d) {
				var e = a[d];
				e &&
					(0 == b.length
						? e.A && delete a[d]
						: e.next &&
						  (jp(e.next, b.slice(0)), mk(e.next) && delete a[d]));
			});
		},
		kp = function (a, b) {
			for (var c = 0; c < b.length; c++) {
				var d = a[b[c]];
				if (d) return d;
			}
		},
		lp = function (a, b, c) {
			for (; 0 < c.length && b; ) {
				var d = c.shift();
				if (
					(d = kp(b, d)) &&
					((0 == c.length && d.A) || lp(a, d.next, c.slice(0)))
				)
					return !0;
			}
			return !1;
		},
		cp = function (a, b, c) {
			c = c || 0;
			b = ['c_' + b + '_' + c];
			'' != a && b.push('n_' + a + '_' + c);
			return b;
		},
		np = function (a, b, c) {
			a: {
				var d = b.A;
				if ('' != b.F) {
					var e = b.F;
					if (
						'Control' == e ||
						'Shift' == e ||
						'Meta' == e ||
						'AltGraph' == e
					) {
						d = !1;
						break a;
					}
				} else if (16 == d || 17 == d || 18 == d) {
					d = !1;
					break a;
				}
				e = b.H;
				var g =
						e.tagName == Aa ||
						e.tagName == na ||
						'BUTTON' == e.tagName ||
						'SELECT' == e.tagName,
					h =
						!g &&
						(e.isContentEditable ||
							(e.ownerDocument &&
								'on' == e.ownerDocument.designMode));
				d =
					(!g && !h) || a.L[d] || a.H
						? !0
						: h
						? !1
						: b.C || b.D || b.K
						? !0
						: e.tagName == na && a.T[e.type]
						? 13 == d
						: e.tagName == na || 'BUTTON' == e.tagName
						? 32 != d
						: !1;
			}
			if (d)
				if (!c && hp(b)) a.D = !1;
				else {
					c = Mo(b.A);
					d = cp(
						b.F,
						c,
						(b.I ? 1 : 0) |
							(b.D ? 2 : 0) |
							(b.C ? 4 : 0) |
							(b.K ? 8 : 0)
					);
					e = kp(a.C, d);
					if (!e || 1500 <= zj() - a.F) (a.C = a.B), (a.F = zj());
					(e = kp(a.C, d)) &&
						e.next &&
						((a.C = e.next), (a.F = zj()));
					e &&
						(e.next
							? (0, b.B)()
							: ((a.C = a.B),
							  (a.F = zj()),
							  (0, b.B)(),
							  a.I && (0, b.Y)(),
							  (d = e.A),
							  (e = a.J(new mp(Gg, d, b.G))),
							  (e &= a.J(new mp(Hg + d, d, b.G))) || (0, b.B)(),
							  Q && (a.G = c)));
				}
		},
		mp = function (a, b, c) {
			P.call(this, a, c);
			this.A = b;
		},
		pp = function (a) {
			R.call(this);
			this.F = !1;
			this.B = {};
			this.C = 0;
			this.D = new S(this);
			this.A = new $o(a);
			this.A.ta(this);
			T(this.D, a, t, this.dg, op);
			T(this.D, a, u, this.eg, op);
			T(this.D, a, je, this.fg, op);
		},
		qp = function (a) {
			return (
				(a.shiftKey || 16 == a.keyCode ? 1 : 0) |
				(a.ctrlKey || 17 == a.keyCode ? 2 : 0) |
				(a.altKey || 18 == a.keyCode ? 4 : 0) |
				(a.metaKey || 91 == a.keyCode ? 8 : 0)
			);
		},
		rp = function (a) {
			a = bp(a);
			if (1 == a.length) {
				a = a[0];
				var b = a.keyCode;
				if (!b || 1 & a.modifiers)
					return (
						(a.keyCode =
							1 & a.modifiers
								? 16
								: 4 & a.modifiers
								? 18
								: 8 & a.modifiers
								? 91
								: 17),
						((b || a.keyCode) & 255) | (a.modifiers << 8)
					);
			}
		},
		sp = function () {
			N.call(this);
		},
		tp = function () {
			N.call(this);
			this.A = {};
			this.B = new S(this);
			U(this.B, window, ['beforeunload', 'unload'], this.C);
		},
		up = function (a) {
			return tp.qa().A[a] || new sp(a);
		},
		yp = function () {
			return (
				(mo && eo(25)) ||
				(L && eo(8)) ||
				No ||
				(vp && eo(19)) ||
				(wn && eo(12.1)) ||
				(jo && eo(5.1)) ||
				(wp && eo(3.2)) ||
				(xp && eo(2.1))
			);
		},
		zp = function (a) {
			N.call(this);
			this.C = a;
			this.A = {};
			this.B = {};
			this.D = {};
			this.F = {};
		},
		Bp = function (a, b) {
			b = b.replace('{APP}', Ap);
			b = b.replace('{CODE}', a.Ie);
			var c = new Image();
			a.F[a.Ad] = c;
			a.fd || (c.onload = c.onerror = A(a.cg, a, a.Ad));
			a.Ad++;
			c.src = b;
		},
		Cp = function () {},
		Fp = function (a, b, c) {
			a.C = null;
			b || (b = []);
			a.G = void 0;
			a.D = -1;
			a.A = b;
			a: {
				if ((b = a.A.length)) {
					--b;
					var d = a.A[b];
					if (
						!(
							null === d ||
							typeof d != Hf ||
							Array.isArray(d) ||
							(Dp && d instanceof Uint8Array)
						)
					) {
						a.F = b - a.D;
						a.B = d;
						break a;
					}
				}
				a.F = Number.MAX_VALUE;
			}
			a.K = {};
			if (c)
				for (b = 0; b < c.length; b++)
					if (((d = c[b]), d < a.F))
						(d += a.D), (a.A[d] = a.A[d] || Ep);
					else {
						var e = a.F + a.D;
						a.A[e] || (a.B = a.A[e] = {});
						a.B[d] = a.B[d] || Ep;
					}
		},
		Gp = function (a, b) {
			if (b < a.F) {
				b += a.D;
				var c = a.A[b];
				return c !== Ep ? c : (a.A[b] = []);
			}
			if (a.B) return (c = a.B[b]), c === Ep ? (a.B[b] = []) : c;
		},
		Hp = function (a) {
			a = Gp(a, 5);
			return null == a ? -1 : a;
		},
		Jp = function (a) {
			var b = Ip;
			a.C || (a.C = {});
			if (!a.C[3]) {
				var c = Gp(a, 3);
				for (var d = [], e = 0; e < c.length; e++) d[e] = new b(c[e]);
				a.C[3] = d;
			}
			b = a.C[3];
			b == Ep && (b = a.C[3] = []);
			return b;
		},
		Lp = function (a) {
			Fp(this, a, Kp);
		},
		Ip = function (a) {
			Fp(this, a, null);
		},
		Qp = function (a) {
			Mp.ita_icon_style || ((Mp.ita_icon_style = !0), Mn(Np(), Op.body));
			a = Pp[a];
			return 'ita-icon-' + (a ? Hp(a) : 0);
		},
		Rp = function (a) {
			(a = Qp(a)) && (a = 'ita-kd-img ' + a);
			return a || '';
		},
		Np = function () {
			var a = [],
				b = 0;
			hk(Pp, function (d) {
				d = Hp(d);
				d > b && (b = d);
			});
			for (var c = 0; c <= b; c++)
				a.push(
					jl('.ita-icon-' + c, {
						'background-position':
							-((c % 10) * 50 + 14) +
							'px ' +
							-(50 * Math.floor(c / 10) + 17) +
							mg,
					})
				);
			return ll(a);
		},
		Sp = function (a, b) {
			return (
				xn(a, b) ||
				(a.currentStyle ? a.currentStyle[b] : null) ||
				a.style[b]
			);
		},
		Tp = function (a) {
			return typeof a.className == w
				? a.className
				: (a.getAttribute && a.getAttribute('class')) || '';
		},
		Up = function (a) {
			return a.classList ? a.classList : Tp(a).match(/\S+/g) || [];
		},
		Vp = function (a, b) {
			typeof a.className == w
				? (a.className = b)
				: a.setAttribute && a.setAttribute('class', b);
		},
		Wp = function (a, b) {
			return a.classList ? a.classList.contains(b) : E(Up(a), b);
		},
		W = function (a, b) {
			if (a.classList) a.classList.add(b);
			else if (!Wp(a, b)) {
				var c = Tp(a);
				Vp(a, c + (0 < c.length ? ' ' + b : b));
			}
		},
		Xp = function (a, b) {
			if (a.classList)
				D(b, function (e) {
					W(a, e);
				});
			else {
				var c = {};
				D(Up(a), function (e) {
					c[e] = !0;
				});
				D(b, function (e) {
					c[e] = !0;
				});
				b = '';
				for (var d in c) b += 0 < b.length ? ' ' + d : d;
				Vp(a, b);
			}
		},
		Yp = function (a, b) {
			a.classList
				? a.classList.remove(b)
				: Wp(a, b) &&
				  Vp(
						a,
						Gj(Up(a), function (c) {
							return c != b;
						}).join(' ')
				  );
		},
		Zp = function (a, b) {
			a.classList
				? D(b, function (c) {
						Yp(a, c);
				  })
				: Vp(
						a,
						Gj(Up(a), function (c) {
							return !E(b, c);
						}).join(' ')
				  );
		},
		$p = function (a, b, c) {
			Yp(a, b);
			W(a, c);
		},
		aq = function () {},
		cq = function (a) {
			if (a instanceof aq) return a;
			if (typeof a.tb == r) return a.tb(!1);
			if (rj(a)) {
				var b = 0,
					c = new aq();
				c.next = function () {
					for (;;) {
						if (b >= a.length) throw bq;
						if (b in a) return a[b++];
						b++;
					}
				};
				return c;
			}
			throw Error('Not implemented');
		},
		eq = function (a, b, c, d, e) {
			this.K = !!b;
			this.B = null;
			this.D = 0;
			this.T = !1;
			this.O = !c;
			a && dq(this, a, d);
			this.F = void 0 != e ? e : this.D || 0;
			this.K && (this.F *= -1);
		},
		dq = function (a, b, c, d) {
			if ((a.B = b))
				a.D =
					typeof c === Df ? c : 1 != a.B.nodeType ? 0 : a.K ? -1 : 1;
			typeof d === Df && (a.F = d);
		},
		fq = function () {},
		gq = function (a) {
			for (var b = [], c = 0, d = a.Pb(); c < d; c++) b.push(a.jb(c));
			return b;
		},
		hq = function (a) {
			a = a.nc();
			return 1 == a.nodeType ? a : a.parentNode;
		},
		iq = function (a, b) {
			eq.call(this, a, b, !0);
		},
		jq = function (a, b, c, d, e) {
			this.C = this.A = null;
			this.Y = this.L = 0;
			this.G = !!e;
			if (a) {
				this.A = a;
				this.L = b;
				this.C = c;
				this.Y = d;
				if (1 == a.nodeType && 'BR' != a.tagName)
					if (((a = a.childNodes), (b = a[b])))
						(this.A = b), (this.L = 0);
					else {
						a.length && (this.A = Ej(a));
						var g = !0;
					}
				1 == c.nodeType &&
					((this.C = c.childNodes[d]) ? (this.Y = 0) : (this.C = c));
			}
			eq.call(this, this.G ? this.C : this.A, this.G, !0);
			if (g)
				try {
					this.next();
				} catch (h) {
					if (h != bq) throw h;
				}
		},
		kq = function () {},
		lq = function (a, b) {
			a = a.B.getClientRects();
			return a.length
				? ((a = b ? a[0] : Ej(a)),
				  new H(b ? a.left : a.right, b ? a.top : a.bottom))
				: null;
		},
		mq = function (a, b, c) {
			c = c && !b.ya();
			b = b.jc();
			try {
				return c
					? 0 <= a.Ca(b, 0, 1) && 0 >= a.Ca(b, 1, 0)
					: 0 <= a.Ca(b, 0, 0) && 0 >= a.Ca(b, 1, 1);
			} catch (d) {
				if (!L) throw d;
				return !1;
			}
		},
		nq = function (a) {
			this.B = a;
		},
		pq = function (a) {
			var b = I(a).createRange();
			if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length);
			else if (oq(a)) {
				for (var c, d = a; (c = d.firstChild) && oq(c); ) d = c;
				b.setStart(d, 0);
				for (d = a; (c = d.lastChild) && oq(c); ) d = c;
				b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length);
			} else
				(c = a.parentNode),
					(a = Fj(c.childNodes, a)),
					b.setStart(c, a),
					b.setEnd(c, a + 1);
			return b;
		},
		qq = function (a, b, c, d) {
			var e = I(a).createRange();
			e.setStart(a, b);
			e.setEnd(c, d);
			return e;
		},
		rq = function (a) {
			this.B = a;
		},
		sq = function (a) {
			this.C = this.A = this.K = null;
			this.F = this.D = -1;
			this.B = a;
		},
		tq = function (a) {
			var b = I(a).body.createTextRange();
			if (1 == a.nodeType)
				b.moveToElementText(a),
					oq(a) && !a.childNodes.length && b.collapse(!1);
			else {
				for (var c = 0, d = a; (d = d.previousSibling); ) {
					var e = d.nodeType;
					if (3 == e) c += d.length;
					else if (1 == e) {
						b.moveToElementText(d);
						break;
					}
				}
				d || b.moveToElementText(a.parentNode);
				b.collapse(!d);
				c && b.move(ob, c);
				b.moveEnd(ob, a.length);
			}
			return b;
		},
		uq = function (a) {
			a.K = a.A = a.C = null;
			a.D = a.F = -1;
		},
		vq = function (a, b) {
			for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
				var g = c[d];
				if (oq(g)) {
					var h = tq(g),
						k = h.htmlText != g.outerHTML;
					if (
						a.ya() && k
							? 0 <= a.Ca(h, 1, 1) && 0 >= a.Ca(h, 1, 0)
							: a.B.inRange(h)
					)
						return vq(a, g);
				}
			}
			return b;
		},
		xq = function (a, b, c) {
			c = c || a.pd();
			if (!c || !c.firstChild) return c;
			for (var d = 1 == b, e = 0, g = c.childNodes.length; e < g; e++) {
				var h = d ? e : g - e - 1,
					k = c.childNodes[h];
				try {
					var l = wq(k);
				} catch (B) {
					continue;
				}
				var p = l.jc();
				if (a.ya())
					if (!oq(k)) {
						if (0 == a.Ca(p, 1, 1)) {
							a.D = a.F = h;
							break;
						}
					} else {
						if (mq(l, a)) return xq(a, b, k);
					}
				else {
					if (mq(a, l)) {
						if (!oq(k)) {
							d ? (a.D = h) : (a.F = h + 1);
							break;
						}
						return xq(a, b, k);
					}
					if (0 > a.Ca(p, 1, 0) && 0 < a.Ca(p, 0, 1))
						return xq(a, b, k);
				}
			}
			return c;
		},
		yq = function (a, b) {
			var c = 1 == b,
				d = c ? a.va() : a.Ka();
			if (1 == d.nodeType) {
				d = d.childNodes;
				for (
					var e = d.length, g = c ? 1 : -1, h = c ? 0 : e - 1;
					0 <= h && h < e;
					h += g
				) {
					var k = d[h];
					if (
						!oq(k) &&
						0 ==
							a.B.compareEndPoints(
								(1 == b ? 'Start' : 'End') +
									'To' +
									(1 == b ? 'Start' : 'End'),
								wq(k).jc()
							)
					)
						return c ? h : h + 1;
				}
				return -1 == h ? 0 : h;
			}
			a = a.B.duplicate();
			b = tq(d);
			a.setEndPoint(c ? 'EndToEnd' : 'StartToStart', b);
			a = a.text.length;
			return c ? d.length - a : a;
		},
		zq = function (a) {
			return 3 == a.nodeType ? a.nodeValue : a.innerText;
		},
		Aq = function (a) {
			this.B = a;
		},
		Bq = function (a) {
			this.B = a;
		},
		Dq = function (a) {
			return Cq
				? new sq(a, I(a.parentElement()))
				: M
				? new Bq(a)
				: Q
				? new rq(a)
				: wn
				? new Aq(a)
				: new nq(a);
		},
		wq = function (a) {
			if (L && !Ql(9)) {
				var b = new sq(tq(a), I(a));
				if (oq(a)) {
					for (var c, d = a; (c = d.firstChild) && oq(c); ) d = c;
					b.A = d;
					b.D = 0;
					for (d = a; (c = d.lastChild) && oq(c); ) d = c;
					b.C = d;
					b.F = 1 == d.nodeType ? d.childNodes.length : d.length;
					b.K = a;
				} else
					(b.A = b.C = b.K = a.parentNode),
						(b.D = Fj(b.K.childNodes, a)),
						(b.F = b.D + 1);
				a = b;
			} else
				a = M
					? new Bq(pq(a))
					: Q
					? new rq(pq(a))
					: wn
					? new Aq(pq(a))
					: new nq(pq(a));
			return a;
		},
		oq = function (a) {
			return jm(a) || 3 == a.nodeType;
		},
		Eq = function () {
			this.B = this.C = this.D = this.A = this.K = null;
			this.F = !1;
		},
		Fq = function (a, b) {
			var c = new Eq();
			c.K = a;
			c.F = !!b;
			return c;
		},
		Hq = function (a, b, c, d) {
			var e = new Eq();
			e.F = Gq(a, b, c, d);
			if (sj(a) && 1 == a.nodeType && !jm(a)) {
				var g = a.parentNode;
				b = Fj(g.childNodes, a);
				a = g;
			}
			sj(c) &&
				1 == c.nodeType &&
				!jm(c) &&
				((g = c.parentNode), (d = Fj(g.childNodes, c)), (c = g));
			e.F
				? ((e.A = c), (e.D = d), (e.C = a), (e.B = b))
				: ((e.A = a), (e.D = b), (e.C = c), (e.B = d));
			return e;
		},
		Iq = function (a) {
			var b;
			if (!(b = a.K)) {
				b = a.xa();
				var c = a.Ra(),
					d = a.Qa(),
					e = a.xb();
				if (L && !Ql(9)) {
					var g = b,
						h = c,
						k = d,
						l = e,
						p = !1;
					1 == g.nodeType &&
						((h = g.childNodes[h]),
						(p = !h),
						(g = h || g.lastChild || g),
						(h = 0));
					var B = tq(g);
					h && B.move(ob, h);
					g == k && h == l
						? B.collapse(!0)
						: (p && B.collapse(!1),
						  (p = !1),
						  1 == k.nodeType &&
								((k =
									(h = k.childNodes[l]) || k.lastChild || k),
								(l = 0),
								(p = !h)),
						  (g = tq(k)),
						  g.collapse(!p),
						  l && g.moveEnd(ob, l),
						  B.setEndPoint('EndToEnd', g));
					l = new sq(B, I(b));
					l.A = b;
					l.D = c;
					l.C = d;
					l.F = e;
					b = l;
				} else
					b = M
						? new Bq(qq(b, c, d, e))
						: Q
						? new rq(qq(b, c, d, e))
						: wn
						? new Aq(qq(b, c, d, e))
						: new nq(qq(b, c, d, e));
				b = a.K = b;
			}
			return b;
		},
		Jq = function () {},
		Kq = function () {
			this.C = this.A = this.B = null;
		},
		Lq = function (a) {
			if (!a.A && ((a.A = []), a.B))
				for (var b = 0; b < a.B.length; b++) a.A.push(a.B.item(b));
			return a.A;
		},
		Mq = function (a) {
			a.C ||
				((a.C = Lq(a).concat()),
				a.C.sort(function (b, c) {
					return b.sourceIndex - c.sourceIndex;
				}));
			return a.C;
		},
		Nq = function (a) {
			this.G = this.C = this.A = null;
			a &&
				((this.G = Mq(a)),
				(this.A = this.G.shift()),
				(this.C = Ej(this.G) || this.A));
			eq.call(this, this.A, !1, !0);
		},
		Oq = function () {
			this.A = [];
			this.C = [];
			this.D = this.B = null;
		},
		Pq = function (a) {
			a.B ||
				((a.B = gq(a)),
				a.B.sort(function (b, c) {
					var d = b.xa();
					b = b.Ra();
					var e = c.xa();
					c = c.Ra();
					return d == e && b == c ? 0 : Gq(d, b, e, c) ? 1 : -1;
				}));
			return a.B;
		},
		Qq = function (a) {
			this.A = null;
			this.C = 0;
			a &&
				(this.A = Hj(Pq(a), function (b) {
					return cq(b);
				}));
			eq.call(this, a ? this.I() : null, !1, !0);
		},
		Sq = function (a) {
			return (a = (a || window).getSelection()) && Rq(a);
		},
		Rq = function (a) {
			var b = !1;
			if (a.createRange)
				try {
					var c = a.createRange();
				} catch (e) {
					return null;
				}
			else if (a.rangeCount) {
				if (1 < a.rangeCount) {
					b = new Oq();
					c = 0;
					for (var d = a.rangeCount; c < d; c++)
						b.A.push(a.getRangeAt(c));
					return b;
				}
				c = a.getRangeAt(0);
				b = Gq(
					a.anchorNode,
					a.anchorOffset,
					a.focusNode,
					a.focusOffset
				);
			} else return null;
			(a = c) && a.addElement
				? ((b = new Kq()), (b.B = a), (a = b))
				: (a = Fq(Dq(a), b));
			return a;
		},
		Gq = function (a, b, c, d) {
			if (a == c) return d < b;
			var e;
			if (1 == a.nodeType && b)
				if ((e = a.childNodes[b])) (a = e), (b = 0);
				else if (om(a, c)) return !0;
			if (1 == c.nodeType && d)
				if ((e = c.childNodes[d])) (c = e), (d = 0);
				else if (om(c, a)) return !1;
			return 0 < (rm(a, c) || b - d);
		},
		Tq = function (a, b) {
			b = Em(b);
			try {
				for (; b && b != Mp && b.frameElement; b = b.parent) {
					var c = Hn(b.frameElement);
					a.x += c.x;
					a.y += c.y;
				}
			} catch (d) {}
		},
		Uq = function (a) {
			var b = a.getBoundingClientRect();
			if (L) {
				var c = Hn(a);
				a = Jn(a);
				b.left = c.x;
				b.right = c.x + a.width;
				b.top = c.y;
				b.bottom = c.y + a.height;
			}
			return b;
		},
		Vq = function (a, b) {
			b = void 0 === b ? null : b;
			if (!b) b = Sq(Em(a));
			else if (3 == b.xa().nodeType && 3 == b.Qa().nodeType) {
				var c = lq(Iq(b), !0),
					d = lq(Iq(b), !1);
				if (c && d) return new H(c.x, d.y);
			}
			if (!b) return new H(0, 0);
			c = hm(a.A, m);
			c.appendChild(Cm(a, '\u200b'));
			!L || G(9)
				? b.Lc(c, !1)
				: ((d = null),
				  b.lb() || ((d = b.kb()), b.collapse(!1)),
				  (c = b.df(c)),
				  d &&
						(b.collapse(!0),
						b.kc().moveStart(ob, 0 - d.length),
						b.select()));
			b = Uq(c);
			a.ab(c);
			return new H(b.left, b.bottom);
		},
		Wq = function (a, b) {
			var c = J(a),
				d = 0;
			if (typeof b === Df) d = b;
			else if (L && !G(9)) {
				if ((b = c.A.selection.createRange()))
					try {
						var e = a.createTextRange(),
							g = e.duplicate();
						e.moveToBookmark(b.getBookmark());
						g.setEndPoint('EndToStart', e);
						d = g.text.length;
					} catch (p) {}
			} else d = a.selectionStart;
			e = '_h#' + vj(a);
			var h = c.M(e);
			h
				? c.Mc(h)
				: (h = c.P('PRE', {
						id: e,
				  }));
			h.parentNode || c.A.body.appendChild(h);
			var k = [];
			D(a.value, function (p, B, K) {
				k.push(
					' ' == p && B + 1 != K.length && ' ' == K[B + 1]
						? '\u00a0'
						: p
				);
			});
			k = k.join('');
			c.U(h, Cm(c, k.substring(0, d)));
			e = hm(c.A, m);
			e.appendChild(Cm(c, '\u200b'));
			c.U(h, e);
			c.U(h, Cm(c, k.substring(d) + ' '));
			c = Up(a);
			D(c, function (p) {
				W(h, p);
			});
			var l =
				'white-space:pre-wrap;word-wrap:pre-wrap;position:absolute;z-index:-9;visibility:hidden;display:block;';
			D(
				[
					'font-family',
					'font-size',
					'font-weight',
					'font-style',
					yh,
					xh,
					De,
					'word-spacing',
					'line-height',
					'text-align',
					ni,
					Sb,
					'width',
					'height',
					'margin-top',
					'margin-right',
					'margin-bottom',
					'margin-left',
					'padding-top',
					'padding-right',
					'padding-bottom',
					'padding-left',
					'border-top-width',
					'border-right-width',
					'border-bottom-width',
					'border-left-width',
					'border-top-style',
					'border-right-style',
					'border-bottom-style',
					'border-left-style',
					'overflow-x',
					'overflow-y',
				],
				function (p) {
					try {
						var B = Sp(a, p);
						B && (l += p + ':' + B + ';');
					} catch (K) {}
				}
			);
			h.style.cssText = l;
			c = yn(a, 'overflowX');
			h.style.overflowX = c && c != ti ? c : 'auto';
			c = yn(a, 'overflowY');
			h.style.overflowY = c && c != ti ? c : 'auto';
			h.scrollTop = a.scrollTop;
			h.scrollLeft = a.scrollLeft;
			An(h, En(a));
			c = Uq(e);
			return a.tagName.toUpperCase() == na
				? new H(c.left, Math.ceil(Hn(a).y + Jn(a).height))
				: new H(c.left, Math.ceil(c.bottom));
		},
		Xq = function (a, b) {
			this.A = a instanceof H ? a : new H(a, b);
		},
		$q = function (a) {
			this.K = a;
			this.C = Yq(a);
			this.F = J(this.C);
			a = Zq(this);
			this.B = a[0];
			this.A = a[1];
			this.D = this.C.value.slice(this.B, this.A);
		},
		Zq = function (a) {
			if (void 0 !== a.C.selectionStart)
				return [a.C.selectionStart, a.C.selectionEnd];
			var b = a.F.A.selection.createRange();
			if (b)
				try {
					var c = a.C.createTextRange(),
						d = c.duplicate();
					c.moveToBookmark(b.getBookmark());
					d.setEndPoint('EndToStart', c);
					var e = d.text.length;
					return [e, e + b.text.length];
				} catch (g) {}
			return [0, 0];
		},
		ar = function (a) {
			this.C = this.A = null;
			this.B = this.D = 0;
			this.K = '';
			this.G = a;
			this.F = J(Yq(a));
			if ((a = Sq(Em(this.F))))
				(this.A = a.xa()),
					(this.D = a.Ra()),
					(this.C = a.Qa()),
					(this.B = a.xb()),
					(this.K = a.kb());
		},
		br = function (a) {
			0 > a.D && (a.D = 0);
			var b = 3 == a.A.nodeType ? a.A.data.length : a.A.childNodes.length;
			a.D > b && (a.D = b);
			0 > a.B && (a.B = 0);
			b = 3 == a.C.nodeType ? a.C.data.length : a.C.childNodes.length;
			a.B > b && (a.B = b);
			return Hq(a.A, a.D, a.C, a.B);
		},
		dr = function (a, b) {
			R.call(this);
			a && cr(this, a, b);
		},
		cr = function (a, b, c) {
			a.Sc && er(a);
			a.Sb = b;
			a.Rc = Zm(a.Sb, u, a, c);
			a.Cd = Zm(a.Sb, t, a.Af, c, a);
			a.Sc = Zm(a.Sb, je, a.Wf, c, a);
		},
		er = function (a) {
			a.Rc &&
				(ln(a.Rc),
				ln(a.Cd),
				ln(a.Sc),
				(a.Rc = null),
				(a.Cd = null),
				(a.Sc = null));
			a.Sb = null;
			a.wa = -1;
			a.Sa = -1;
		},
		fr = function (a, b, c, d) {
			Km.call(this, d);
			this.type = ie;
			this.keyCode = a;
			this.charCode = b;
			this.repeat = c;
		},
		gr = function (a, b) {
			this.C = a;
			this.D = b;
			this.B = 0;
			this.A = null;
		},
		hr = function (a, b) {
			a.D(b);
			100 > a.B && (a.B++, (b.next = a.A), (a.A = b));
		},
		ir = function (a) {
			z.setTimeout(function () {
				throw a;
			}, 0);
		},
		lr = function (a, b) {
			var c = a;
			b && (c = A(a, b));
			typeof z.setImmediate !== r ||
			(z.Window &&
				z.Window.prototype &&
				!F(ha) &&
				z.Window.prototype.setImmediate == z.setImmediate)
				? (jr || (jr = kr()), jr(c))
				: z.setImmediate(c);
		},
		kr = function () {
			var a = z.MessageChannel;
			'undefined' === typeof a &&
				'undefined' !== typeof window &&
				window.postMessage &&
				window.addEventListener &&
				!F('Presto') &&
				(a = function () {
					var e = hm(document, ma);
					e.style.display = Cf;
					document.documentElement.appendChild(e);
					var g = e.contentWindow;
					e = g.document;
					e.open();
					e.close();
					var h = 'callImmediate' + Math.random(),
						k =
							'file:' == g.location.protocol
								? '*'
								: g.location.protocol + '//' + g.location.host;
					e = A(function (l) {
						if (('*' == k || l.origin == k) && l.data == h)
							this.port1.onmessage();
					}, this);
					g.addEventListener('message', e, !1);
					this.port1 = {};
					this.port2 = {
						postMessage: function () {
							g.postMessage(h, k);
						},
					};
				});
			if ('undefined' !== typeof a && !sk()) {
				var b = new a(),
					c = {},
					d = c;
				b.port1.onmessage = function () {
					if (void 0 !== c.next) {
						c = c.next;
						var e = c.Xd;
						c.Xd = null;
						e();
					}
				};
				return function (e) {
					d.next = {
						Xd: e,
					};
					d = d.next;
					b.port2.postMessage(0);
				};
			}
			return function (e) {
				z.setTimeout(e, 0);
			};
		},
		mr = function () {
			this.B = this.A = null;
		},
		or = function () {
			var a = nr,
				b = null;
			a.A &&
				((b = a.A),
				(a.A = a.A.next),
				a.A || (a.B = null),
				(b.next = null));
			return b;
		},
		pr = function () {
			this.next = this.B = this.A = null;
		},
		tr = function (a, b) {
			qr || rr();
			sr || (qr(), (sr = !0));
			nr.add(a, b);
		},
		rr = function () {
			if (z.Promise && z.Promise.resolve) {
				var a = z.Promise.resolve(void 0);
				qr = function () {
					a.then(ur);
				};
			} else
				qr = function () {
					lr(ur);
				};
		},
		ur = function () {
			for (var a; (a = or()); ) {
				try {
					a.A.call(a.B);
				} catch (b) {
					ir(b);
				}
				hr(vr, a);
			}
			sr = !1;
		},
		wr = function (a) {
			if (!a) return !1;
			try {
				return !!a.$goog_Thenable;
			} catch (b) {
				return !1;
			}
		},
		yr = function (a) {
			this.A = 0;
			this.G = void 0;
			this.D = this.B = this.C = null;
			this.F = this.K = !1;
			if (a != pj)
				try {
					var b = this;
					a.call(
						void 0,
						function (c) {
							xr(b, 2, c);
						},
						function (c) {
							xr(b, 3, c);
						}
					);
				} catch (c) {
					xr(this, 3, c);
				}
		},
		zr = function () {
			this.next = this.C = this.B = this.D = this.A = null;
			this.F = !1;
		},
		Br = function (a, b, c) {
			var d = Ar.get();
			d.D = a;
			d.B = b;
			d.C = c;
			return d;
		},
		Cr = function (a, b) {
			if (0 == a.A)
				if (a.C) {
					var c = a.C;
					if (c.B) {
						for (
							var d = 0, e = null, g = null, h = c.B;
							h &&
							(h.F || (d++, h.A == a && (e = h), !(e && 1 < d)));
							h = h.next
						)
							e || (g = h);
						e &&
							(0 == c.A && 1 == d
								? Cr(c, b)
								: (g
										? ((d = g),
										  d.next == c.D && (c.D = d),
										  (d.next = d.next.next))
										: Dr(c),
								  Er(c, e, 3, b)));
					}
					a.C = null;
				} else xr(a, 3, b);
		},
		Gr = function (a, b) {
			a.B || (2 != a.A && 3 != a.A) || Fr(a);
			a.D ? (a.D.next = b) : (a.B = b);
			a.D = b;
		},
		Ir = function (a, b, c, d) {
			var e = Br(null, null, null);
			e.A = new yr(function (g, h) {
				e.D = b
					? function (k) {
							try {
								var l = b.call(d, k);
								g(l);
							} catch (p) {
								h(p);
							}
					  }
					: g;
				e.B = c
					? function (k) {
							try {
								var l = c.call(d, k);
								void 0 === l && k instanceof Hr ? h(k) : g(l);
							} catch (p) {
								h(p);
							}
					  }
					: h;
			});
			e.A.C = a;
			Gr(a, e);
			return e.A;
		},
		xr = function (a, b, c) {
			if (0 == a.A) {
				a === c &&
					((b = 3),
					(c = new TypeError('Promise cannot resolve to itself')));
				a.A = 1;
				a: {
					var d = c,
						e = a.I,
						g = a.Y;
					if (d instanceof yr) {
						Gr(d, Br(e || pj, g || null, a));
						var h = !0;
					} else if (wr(d)) d.then(e, g, a), (h = !0);
					else {
						if (sj(d))
							try {
								var k = d.then;
								if (typeof k === r) {
									Jr(d, k, e, g, a);
									h = !0;
									break a;
								}
							} catch (l) {
								g.call(a, l);
								h = !0;
								break a;
							}
						h = !1;
					}
				}
				h ||
					((a.G = c),
					(a.A = b),
					(a.C = null),
					Fr(a),
					3 != b || c instanceof Hr || Kr(a, c));
			}
		},
		Jr = function (a, b, c, d, e) {
			function g(l) {
				k || ((k = !0), d.call(e, l));
			}
			function h(l) {
				k || ((k = !0), c.call(e, l));
			}
			var k = !1;
			try {
				b.call(a, h, g);
			} catch (l) {
				g(l);
			}
		},
		Fr = function (a) {
			a.K || ((a.K = !0), tr(a.H, a));
		},
		Dr = function (a) {
			var b = null;
			a.B && ((b = a.B), (a.B = b.next), (b.next = null));
			a.B || (a.D = null);
			return b;
		},
		Er = function (a, b, c, d) {
			if (3 == c && b.B && !b.F) for (; a && a.F; a = a.C) a.F = !1;
			if (b.A) (b.A.C = null), Lr(b, c, d);
			else
				try {
					b.F ? b.D.call(b.C) : Lr(b, c, d);
				} catch (e) {
					Mr.call(null, e);
				}
			hr(Ar, b);
		},
		Lr = function (a, b, c) {
			2 == b ? a.D.call(a.C, c) : a.B && a.B.call(a.C, c);
		},
		Kr = function (a, b) {
			a.F = !0;
			tr(function () {
				a.F && Mr.call(null, b);
			});
		},
		Hr = function (a) {
			Cj.call(this, a);
		},
		Nr = function (a, b, c) {
			if (typeof a === r) c && (a = A(a, c));
			else if (a && typeof a.handleEvent == r) a = A(a.handleEvent, a);
			else throw Error('Invalid listener argument');
			return 2147483647 < Number(b) ? -1 : z.setTimeout(a, b || 0);
		},
		Or = function (a) {
			switch (a.type) {
				case t:
				case u:
					if (
						a.ctrlKey ||
						a.metaKey ||
						a.altKey ||
						(a.shiftKey && 32 == a.keyCode)
					)
						return !0;
					break;
				case n:
					if (a.ctrlKey || a.metaKey || a.altKey || a.shiftKey)
						return !0;
					break;
				case ie:
					if (a.ctrlKey || a.metaKey || a.altKey || a.shiftKey || a.D)
						return !0;
			}
			return !1;
		},
		Pr = function (a) {
			a instanceof Km && (a = a.A);
			if (a.getAttribute) {
				if (a.getAttribute('isFake')) return !0;
			} else if (a.isFake) return !0;
			return !1;
		},
		Rr = function (a, b, c, d) {
			c = void 0 === c ? 0 : c;
			var e = Em(J(a)),
				g = e.document,
				h = [t, u, je];
			try {
				if (g.createEvent) {
					if ('chext' != Ap || (b != Qr && b != xb)) {
						var k = g.createEvent('Events');
						k.initEvent(b, !0, !0);
						k.view = e;
						k.isFake = !0;
						k.charCode = 0;
						k.keyCode = c;
						if (d) for (var l in d) k[l] = d[l];
					} else
						(k = g.createEvent('CustomEvent')),
							k.initCustomEvent(b, !0, !0, d);
					a.dispatchEvent(k);
				} else if (E(h, b) && g.createEventObject && a.fireEvent) {
					k = g.createEventObject();
					k.bubbles = !0;
					k.cancelable = !0;
					k.view = e;
					k.ctrlKey = !1;
					k.altKey = !1;
					k.shiftKey = !0;
					k.metaKey = !1;
					k.keyCode = c;
					if (k.setAttribute && (k.setAttribute('isFake', !0), d))
						for (var p in d) k.setAttribute(p, d[p]);
					a.fireEvent('on' + b, k);
				}
			} catch (B) {}
		},
		Tr = function (a, b, c) {
			if (Sr)
				switch (b) {
					case 1:
					case 2:
					case 4:
					case 8:
						Rr(a, t, 229);
						Rr(a, 'compositionstart');
						Rr(a, 'compositionupdate');
						break;
					case 3:
					case 5:
					case 6:
					case 9:
						var d = {};
						c && (d.data = c);
						Nr(function () {
							Rr(a, xb, void 0, d);
							Rr(a, Qr, void 0, d);
							Rr(a, 'input');
							Rr(a, je);
						});
				}
		},
		Vr = function (a, b, c) {
			Array.isArray(c) && (c = c.join(' '));
			var d = 'aria-' + b;
			'' === c || void 0 == c
				? (Ur ||
						(Ur = {
							atomic: !1,
							autocomplete: Cf,
							dropeffect: Cf,
							haspopup: !1,
							live: 'off',
							multiline: !1,
							multiselectable: !1,
							orientation: mi,
							readonly: !1,
							relevant: 'additions text',
							required: !1,
							sort: Cf,
							busy: !1,
							disabled: !1,
							hidden: !1,
							invalid: 'false',
						}),
				  (c = Ur),
				  b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d))
				: a.setAttribute(d, c);
		},
		Wr = function (a, b, c) {
			N.call(this);
			this.A = a;
			this.F = b || 0;
			this.B = c;
			this.C = A(this.D, this);
		},
		Yr = function (a) {
			Xr();
			return new il(a, hl);
		},
		Zr = function (a) {
			var b = a.nodeName.toUpperCase();
			this.F = b == ma;
			this.K = b != Aa && b != na;
			this.B = a;
			this.C = null;
			this.A = J(this.C);
			this.D = {};
		},
		Yq = function (a) {
			var b =
				a.C ||
				(a.F
					? (
							a.B.contentDocument ||
							a.B.contentWindow.document ||
							a.B.document
					  ).body
					: a.B);
			a.C != b && ((a.C = b), (a.A = J(b)));
			return b;
		},
		$r = function (a, b, c, d) {
			if (0 != d)
				for (var e in a.D) {
					var g = a.D[e];
					g != b &&
						((b instanceof $q && g instanceof $q) ||
							(b instanceof ar &&
								g instanceof ar &&
								(g.A == g.C && 3 == g.A.nodeType
									? g.A
									: null) ==
									(b.A == b.C && 3 == b.A.nodeType
										? b.A
										: null))) &&
						g.Ud(c, d);
				}
		},
		bs = function (a, b) {
			a = a.match(as);
			b = b.match(as);
			return a[3] == b[3] && a[1] == b[1] && a[4] == b[4];
		},
		cs = function (a, b) {
			if (a) {
				a = a.split('&');
				for (var c = 0; c < a.length; c++) {
					var d = a[c].indexOf('='),
						e = null;
					if (0 <= d) {
						var g = a[c].substring(0, d);
						e = a[c].substring(d + 1);
					} else g = a[c];
					b(g, e ? decodeURIComponent(e.replace(/\+/g, ' ')) : '');
				}
			}
		},
		ds = function (a, b) {
			if (a)
				for (var c = 0; c < b.length; c++)
					0 == c ? Vp(a, b[0]) : W(a, b[c]);
		},
		fs = function (a) {
			a = a || document;
			var b = [],
				c = [];
			Sj(
				b,
				(a || document).getElementsByTagName(ma),
				(a || document).getElementsByTagName('FRAME')
			);
			D(b, function (d) {
				var e = vj(document),
					g = vj(d),
					h = es[e];
				h || (h = es[e] = {});
				try {
					var k = window.location.href || '';
					if (!(g in h))
						if (d.src) {
							var l = d.src.indexOf('//'),
								p = 0 > l ? 'N/A' : d.src.slice(0, l);
							h[g] =
								('' != p && 'http:' != p && 'https:' != p) ||
								bs(d.src, k);
						} else h[g] = !0;
					var B = h[g] ? tm(d) : null;
				} catch (K) {
					(h[g] = !1), (B = null);
				}
				(d = B) && c.push(d);
			});
			return c;
		},
		hs = function (a, b) {
			Tn(b, Jn(a));
			D(gs, function (c) {
				un(b, c, xn(a, c));
			});
		},
		js = function () {
			N.call(this);
			this.B = {};
			this.K = {};
			this.A = [];
			this.F = Fo;
			this.C = new S(this);
			is(this);
		},
		ms = function () {
			var a = vj(Op);
			ks[a] || (ks[a] = new js());
			ls = ks[a];
			is(ls);
		},
		is = function (a) {
			a.A = fs(a.F.A);
			for (var b in a.B) ns(a, b, a.D);
			ns(a, u, a.G);
		},
		ns = function (a, b, c) {
			T(a.C, a.F.A, b, c, !0, a);
			D(
				a.A,
				function (d) {
					try {
						T(this.C, d, b, c, !0, this);
					} catch (e) {}
				},
				a
			);
		},
		os = function (a, b, c) {
			to(a.C, a.F.A, b, c, !0, a);
			D(
				a.A,
				function (d) {
					try {
						to(this.C, d, b, c, !0, this);
					} catch (e) {}
				},
				a
			);
		},
		ps = function (a, b, c, d, e) {
			var g = b.ownerDocument,
				h = !1;
			a.A = Gj(a.A, function (l) {
				try {
					l == g && (h = !0);
				} catch (p) {
					return !1;
				}
				return !0;
			});
			if (g && g != a.F.A && !h) {
				a.A.push(g);
				try {
					T(a.C, g, c, a.D, !0, a);
				} catch (l) {}
			}
			if (c)
				if (Array.isArray(c))
					for (var k = 0; k < c.length; k++) ps(a, b, c[k], d, e);
				else {
					k = a.B[c];
					k || ((k = {}), (a.B[c] = k), ns(a, c, a.D));
					a = k[vj(b)];
					a || ((a = []), (k[vj(b)] = a));
					b = null;
					for (c = 0; c < a.length; c++)
						if (((b = a[c]), b.hc(d, e))) return;
					b = new qs(d, e);
					a.push(b);
				}
			else throw Error(qa);
		},
		rs = function (a, b, c, d, e) {
			if (c)
				if (Array.isArray(c))
					for (var g = 0; g < c.length; g++) rs(a, b, c[g], d, e);
				else {
					if ((g = a.B[c])) {
						var h = g[vj(b)];
						if (h) {
							for (var k = 0; k < h.length; k++)
								if (h[k].hc(d, e)) {
									Array.prototype.splice.call(h, k, 1);
									break;
								}
							0 == h.length && delete g[vj(b)];
						}
						mk(g) && (delete a.B[c], os(a, c, a.D));
					}
				}
			else throw Error(qa);
		},
		ts = function () {
			if (ls) return ls;
			ss.K.add('a', ms, !1, !1, void 0);
			ms();
			return ls;
		},
		us = function (a, b, c, d) {
			ps(ts(), a, b, c, d);
		},
		vs = function (a, b, c, d) {
			rs(ts(), a, b, c, d);
		},
		qs = function (a, b) {
			this.listener = a;
			this.ga = b;
		},
		ws = function (a) {
			R.call(this);
			this.C = this.D = this.G = null;
			this.F = new S(this);
			a.Ia
				? (this.A = a)
				: ((this.G = a),
				  (this.A = new Zr(this.G)),
				  (this.D = Yq(this.A)),
				  (a = this.A),
				  (this.C = a.F ? tm(a.B) : Yq(a)));
		},
		xs = function (a, b, c) {
			a.B || ((a.B = new pp(a)), (a.B.A.I = !0), (a.B.A.H = !0));
			if (!a.B.Hd(b)) {
				c = c || b;
				var d = Hg + c;
				a.B.He(c, b);
				T(a.F, a.B, d, a.Vb, void 0);
			}
		},
		ys = function (a, b, c) {
			a.B &&
				a.B.Hd(b) &&
				((c = Hg + (c || b)), a.B.wg(b), to(a.F, a.B, c, a.Vb));
		},
		zs = function (a, b) {
			P.call(this, a);
			this.A = b;
		},
		Bs = function (a) {
			var b = hm(document, za);
			a = Mk(As, {
				id: a,
			});
			b.src = Ik(a);
			rl(b);
			document.body.appendChild(b);
		},
		Ds = function (a) {
			var b = Cs;
			this.F = [];
			this.T = b;
			this.L = a || null;
			this.D = this.A = !1;
			this.C = void 0;
			this.I = this.O = this.G = !1;
			this.K = 0;
			this.B = null;
			this.H = 0;
		},
		Fs = function (a, b, c) {
			a.A = !0;
			a.C = c;
			a.D = !b;
			Es(a);
		},
		Hs = function (a) {
			if (a.A) {
				if (!a.I) throw new Gs(a);
				a.I = !1;
			}
		},
		Is = function (a, b, c, d) {
			a.F.push([b, c, d]);
			a.A && Es(a);
		},
		Js = function (a) {
			return Jj(a.F, function (b) {
				return typeof b[1] === r;
			});
		},
		Es = function (a) {
			if (a.K && a.A && Js(a)) {
				var b = a.K,
					c = Ks[b];
				c && (z.clearTimeout(c.ka), delete Ks[b]);
				a.K = 0;
			}
			a.B && (a.B.H--, delete a.B);
			b = a.C;
			for (var d = (c = !1); a.F.length && !a.G; ) {
				var e = a.F.shift(),
					g = e[0],
					h = e[1];
				e = e[2];
				if ((g = a.D ? h : g))
					try {
						var k = g.call(e || a.L, b);
						void 0 !== k &&
							((a.D = a.D && (k == b || k instanceof Error)),
							(a.C = b = k));
						if (
							wr(b) ||
							(typeof z.Promise === r && b instanceof z.Promise)
						)
							(d = !0), (a.G = !0);
					} catch (l) {
						(b = l), (a.D = !0), Js(a) || (c = !0);
					}
			}
			a.C = b;
			d &&
				((k = A(a.Y, a, !0)),
				(d = A(a.Y, a, !1)),
				b instanceof Ds ? (Is(b, k, d), (b.O = !0)) : b.then(k, d));
			c && ((b = new Ls(b)), (Ks[b.ka] = b), (a.K = b.ka));
		},
		Gs = function () {
			Cj.call(this);
		},
		Ms = function () {
			Cj.call(this);
		},
		Ls = function (a) {
			this.ka = z.setTimeout(A(this.B, this), 0);
			this.A = a;
		},
		Qs = function (a, b) {
			var c = b || {};
			b = c.document || document;
			var d = Ik(a).toString(),
				e = hm(document, za),
				g = {
					gf: e,
					Hb: void 0,
				},
				h = new Ds(g),
				k = null,
				l = null != c.timeout ? c.timeout : 5e3;
			0 < l &&
				((k = window.setTimeout(function () {
					Ns(e, !0);
					var p = new Os(
						1,
						'Timeout reached for loading script ' + d
					);
					Hs(h);
					Fs(h, !1, p);
				}, l)),
				(g.Hb = k));
			e.onload = e.onreadystatechange = function () {
				(e.readyState &&
					'loaded' != e.readyState &&
					e.readyState != wb) ||
					(Ns(e, c.vf || !1, k), Hs(h), Fs(h, !0, null));
			};
			e.onerror = function () {
				Ns(e, !0, k);
				var p = new Os(0, 'Error while loading script ' + d);
				Hs(h);
				Fs(h, !1, p);
			};
			g = c.attributes || {};
			pk(g, {
				type: 'text/javascript',
				charset: 'UTF-8',
			});
			Zl(e, g);
			e.src = Ik(a);
			rl(e);
			Ps(b).appendChild(e);
			return h;
		},
		Ps = function (a) {
			var b = (a || document).getElementsByTagName('HEAD');
			return b && 0 != b.length ? b[0] : a.documentElement;
		},
		Cs = function () {
			if (this && this.gf) {
				var a = this.gf;
				a && a.tagName == za && Ns(a, !0, this.Hb);
			}
		},
		Ns = function (a, b, c) {
			null != c && z.clearTimeout(c);
			a.onload = pj;
			a.onerror = pj;
			a.onreadystatechange = pj;
			b &&
				window.setTimeout(function () {
					lm(a);
				}, 0);
		},
		Os = function (a, b) {
			var c = 'Jsloader error (code #' + a + ')';
			b && (c += ': ' + b);
			Cj.call(this, c);
			this.code = a;
		},
		Rs = function () {
			this.O = X ? 0 : 2;
			this.T = !X;
			this.B = X ? 50 : 6;
			this.A = 5;
			this.H = this.K = !1;
			this.G = 50;
			this.ba = !1;
			this.S = this.aa = this.W = !0;
			this.V = this.Jb = !1;
			this.ic = null;
			this.rb = this.Y = !0;
			this.Wa = !1;
			this.Ha = null;
			this.D = this.R = !0;
			this.fc = !1;
			this.I = /[()\-_=+\[{\]}\\|;:'",<.>\/? \r]/g;
			this.Kb = /[^a-z0-9 \r]/i;
			this.F = /[a-z]/i;
			this.fa = /xyz/g;
			this.ea = /xyz/g;
			this.C = !1;
		},
		Ts = function () {
			Ss || (Ss = new R());
			return Ss;
		},
		Ws = function (a) {
			Us(a);
			Vs[a] && Ts().J(new zs('cfga', a));
		},
		Ys = function (a, b) {
			Xs[b] || (Xs[b] = {});
			if (Xs[b][a]) return Xs[b][a];
			Vs[a] || (Vs[a] = new Rs());
			var c = Vs[a],
				d = new Rs(),
				e;
			for (e in c) d[e] = c[e];
			return (Xs[b][a] = d);
		},
		Us = function (a) {
			void 0 === Vs[a] &&
				((Vs[a] = null),
				Qs(
					Mk(Zs, {
						fileName: a.replace(/-/g, '_'),
					}),
					{
						timeout: 1e4,
					}
				));
		},
		$s = function (a, b) {
			for (var c in b) {
				var d = b[c];
				switch (Number(c)) {
					case 19:
						a.pa = d;
						break;
					case 21:
						a.transform = d;
						break;
					case 18:
						a.Ic = d;
						break;
					case 20:
						a.Nb = d;
						break;
					case 0:
						a.L = Number(d);
						break;
					case 15:
						a.A = Number(d);
						break;
					case 10:
						a.K = !!d;
						break;
					case 29:
						a.H = !!d;
						break;
					case 14:
						a.B = X ? 50 : Number(d);
						break;
					case 13:
						a.G = Number(d);
						break;
					case 11:
						a.T = !X && !!d;
						break;
					case 28:
						a.ba = !!d;
						break;
					case 30:
						a.W = !!d;
						break;
					case 1:
						a.O = X ? 0 : Number(d);
						break;
					case 4:
						a.aa = !!d;
						break;
					case 3:
						a.S = !!d;
						break;
					case 8:
						a.Jb = !!d;
						break;
					case 5:
						a.V = !!d;
						break;
					case 16:
						a.ic = d;
						break;
					case 2:
						a.Y = !!d;
						break;
					case 6:
						a.rb = !!d;
						break;
					case 32:
						a.Wa = !!d;
						break;
					case 23:
						a.Ha = d;
						break;
					case 12:
						a.R = !!d;
						break;
					case 9:
						a.D = !!d;
						break;
					case 31:
						a.fc = !!d;
						break;
					case 27:
						a.I = d;
						break;
					case 26:
						a.Kb = d;
						break;
					case 22:
						a.F = d;
						break;
					case 25:
						a.fa = d;
						break;
					case 24:
						a.ea = d;
						break;
					case 17:
						a.ub = d;
						break;
					case 33:
						a.C = !!d;
				}
			}
		},
		bt = function (a, b) {
			var c = Vs[a];
			c &&
				($s(c, b),
				hk(Xs, function (d) {
					d[a] && $s(d[a], b);
				}),
				Ws(a));
			at[a] = b;
		},
		ht = function (a) {
			this.code = a;
			this.type = null;
			this.A = q;
			0 <= this.code.indexOf('-i0')
				? ((this.type = 'im'),
				  bk(this.code, '-handwrit')
						? (this.type = 'hw')
						: bk(this.code, '-voice') && (this.type = 'vo'))
				: 0 <= this.code.indexOf('-k0')
				? (this.type = wi)
				: 0 == this.code.lastIndexOf('xkb', 0) && (this.type = 'xkb');
			a = this.code.split(/-t|-i0|-k0|:/);
			'yue-hant' === a[0] && (a[0] = Fi);
			switch (this.code) {
				case Ci:
					a[0] = Fi;
					break;
				case Pi:
				case Wi:
					a[0] = Gi;
			}
			this.A =
				'xkb' === this.type
					? ct[this.code]
						? ct[this.code]
						: dt(a[a.length - 1])
					: dt(a[0]);
			if (this.type === wi)
				if (et[this.code]) this.Ua = et[this.code];
				else if (ft[this.code]) this.Ua = ft[this.code].slice(4);
				else {
					var b = this.code.split('-t-');
					a = b[0];
					b = b[1];
					a = a.replace(/-/g, '_');
					'en_us' === a && (a = 'us');
					!E(gt, a) || ('und-latn-k0-und' !== b && 'k0-und' !== b)
						? 'k0-und' === b
							? (this.Ua = a)
							: ((b = b.match(/k0-(.*)/)),
							  b[1] &&
									(this.Ua =
										a +
										'_' +
										b[1]
											.replace('qwerty', 'phone')
											.replace('-', '_')))
						: (this.Ua =
								a + ('k0-und' === b ? '_inscript' : '_phone'));
				}
		},
		lt = function (a) {
			if (!a) return null;
			if ('nacl_mozc_jp' === a || 'nacl_mozc_us' === a) a = ce;
			0 != a.lastIndexOf('xkb', 0) &&
				(lk(it, a) || (a = jt(a)),
				(a = a.replace(/_/g, '-')),
				lk(it, a) || (a = jt(a + '-und')));
			return kt[a]
				? kt[a]
				: lk(it, a)
				? ((kt[a] = new ht(a)), kt[a])
				: null;
		},
		jt = function (a) {
			if (nt[a]) return nt[a];
			if ('vkd_iw' === a) return Tc;
			if ('im_t13n_iw' === a) return Sc;
			if (a === Rh) return Sh;
			var b = a.split('_'),
				c = '';
			0 == a.lastIndexOf('im_t13n', 0)
				? (c = b[2] + '-t-i0-und')
				: 0 == a.lastIndexOf('vkd_', 0) &&
				  (2 === b.length
						? (c = b[1] + aa)
						: E(gt, b[1])
						? (c =
								'inscript' === b[2]
									? b[1] + aa
									: b[1] + '-t-und-latn-k0-und')
						: ((c = b[1] + '-t-k0-' + b[2]),
						  lk(it, c) || (c = b[1] + '-' + b[2] + aa)));
			return lk(it, c) ? c : a;
		},
		qt = function (a) {
			return E(ot, a.code) || E(pt, a.code);
		},
		rt = function (a) {
			return X || 'im' !== a.type ? !1 : /^(zh|yue)/.test(a.code);
		},
		dt = function (a) {
			if ('und-ethi' === a) return 'am';
			a = a.split('-');
			return 2 === a.length
				? 2 === a[1].length
					? a[0] + '-' + a[1].toUpperCase()
					: a[0] + '-' + a[1].charAt(0).toUpperCase() + a[1].slice(1)
				: kk(st, a[0])
				? st[a[0]]
				: a[0];
		},
		tt = function (a, b) {
			this.B = a;
			this.A = b ? b : 'callback';
			this.Hb = 5e3;
		},
		vt = function (a, b, c) {
			return function () {
				ut(a, !1);
				c && c(b);
			};
		},
		wt = function (a, b) {
			return function (c) {
				ut(a, !0);
				b.apply(void 0, arguments);
			};
		},
		ut = function (a, b) {
			a = '_callbacks___' + a;
			if (z[a])
				if (b)
					try {
						delete z[a];
					} catch (c) {
						z[a] = void 0;
					}
				else z[a] = pj;
		},
		xt = function (a, b) {
			this.B = {};
			this.A = [];
			this.D = this.C = 0;
			var c = arguments.length;
			if (1 < c) {
				if (c % 2) throw Error(Ca);
				for (var d = 0; d < c; d += 2)
					this.set(arguments[d], arguments[d + 1]);
			} else if (a)
				if (a instanceof xt)
					for (c = a.Ya(), d = 0; d < c.length; d++)
						this.set(c[d], a.get(c[d]));
				else for (d in a) this.set(d, a[d]);
		},
		yt = function (a, b) {
			return a === b;
		},
		At = function (a) {
			if (a.C != a.A.length) {
				for (var b = 0, c = 0; b < a.A.length; ) {
					var d = a.A[b];
					zt(a.B, d) && (a.A[c++] = d);
					b++;
				}
				a.A.length = c;
			}
			if (a.C != a.A.length) {
				var e = {};
				for (c = b = 0; b < a.A.length; )
					(d = a.A[b]), zt(e, d) || ((a.A[c++] = d), (e[d] = 1)), b++;
				a.A.length = c;
			}
		},
		zt = function (a, b) {
			return Object.prototype.hasOwnProperty.call(a, b);
		},
		Bt = function (a) {
			if (a.Pa && typeof a.Pa == r) return a.Pa();
			if (typeof a === w) return a.split('');
			if (rj(a)) {
				for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
				return b;
			}
			return ik(a);
		},
		Ct = function (a) {
			if (a.Ya && typeof a.Ya == r) return a.Ya();
			if (!a.Pa || typeof a.Pa != r) {
				if (rj(a) || typeof a === w) {
					var b = [];
					a = a.length;
					for (var c = 0; c < a; c++) b.push(c);
					return b;
				}
				return jk(a);
			}
		},
		Dt = function (a, b) {
			if (a.forEach && typeof a.forEach == r) a.forEach(b, void 0);
			else if (rj(a) || typeof a === w) D(a, b, void 0);
			else
				for (var c = Ct(a), d = Bt(a), e = d.length, g = 0; g < e; g++)
					b.call(void 0, d[g], c && c[g], a);
		},
		Et = function () {
			this.C = this.B = this.A = null;
		},
		Ft = function (a) {
			a.A ||
				((a.A = new xt()),
				(a.B = 0),
				a.C &&
					cs(a.C, function (b, c) {
						a.add(decodeURIComponent(b.replace(/\+/g, ' ')), c);
					}));
		},
		Gt = function (a) {
			var b = Ct(a);
			if ('undefined' == typeof b) throw Error('Keys are undefined');
			var c = new Et();
			a = Bt(a);
			for (var d = 0; d < b.length; d++) {
				var e = b[d],
					g = a[d];
				if (Array.isArray(g)) {
					var h = c,
						k = h,
						l = e;
					Ft(k);
					l = String(l);
					zt(k.A.B, l) &&
						((k.C = null),
						(k.B -= k.A.get(l).length),
						(k = k.A),
						zt(k.B, l) &&
							(delete k.B[l],
							k.C--,
							k.D++,
							k.A.length > 2 * k.C && At(k)));
					0 < g.length &&
						((h.C = null),
						h.A.set(String(e), Rj(g)),
						(h.B += g.length));
				} else c.add(e, g);
			}
			return c;
		},
		Ht = function (a, b) {
			Ft(a);
			b = String(b);
			return zt(a.A.B, b);
		},
		It = function (a, b) {
			N.call(this);
			this.H = a || fd;
			this.F = b || 'cb';
			this.I = up('ppe');
			this.K = 0;
		},
		Jt = function (a) {
			switch (a) {
				case 200:
				case 201:
				case 202:
				case 204:
				case 206:
				case 304:
				case 1223:
					return !0;
				default:
					return !1;
			}
		},
		Kt = function () {
			R.call(this);
			this.C = 0;
			this.B = !1;
			this.A = null;
			this.D = this.F = !1;
		},
		Lt = function (a) {
			if (a.A) {
				var b = a.A;
				a.A = null;
				a.C = 0;
				a.J('ready');
				try {
					b.A = pj;
				} catch (c) {}
			}
		},
		Mt = function (a) {
			a.F || ((a.F = !0), a.J(wb), a.J('error'));
		},
		Nt = function () {},
		Pt = function (a) {
			var b;
			(b = a.A) ||
				((b = {}), Ot(a) && ((b[0] = !0), (b[1] = !0)), (b = a.A = b));
			return b;
		},
		Qt = function () {},
		Rt = function (a) {
			return (a = Ot(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
		},
		Ot = function (a) {
			if (
				!a.B &&
				'undefined' == typeof XMLHttpRequest &&
				'undefined' != typeof ActiveXObject
			) {
				for (
					var b = [
							'MSXML2.XMLHTTP.6.0',
							'MSXML2.XMLHTTP.3.0',
							'MSXML2.XMLHTTP',
							'Microsoft.XMLHTTP',
						],
						c = 0;
					c < b.length;
					c++
				) {
					var d = b[c];
					try {
						return new ActiveXObject(d), (a.B = d);
					} catch (e) {}
				}
				throw Error(
					'Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed'
				);
			}
			return a.B;
		},
		St = function (a) {
			R.call(this);
			this.headers = new xt();
			this.H = a || null;
			this.B = !1;
			this.G = this.A = null;
			this.T = '';
			this.C = this.L = this.D = this.I = !1;
			this.O = 0;
			this.F = null;
			this.aa = '';
			this.R = this.S = !1;
		},
		Ut = function (a, b, c, d) {
			var e = new St();
			Tt.push(e);
			b && e.K.add(wb, b, !1, void 0, void 0);
			e.K.add('ready', e.uf, !0, void 0, void 0);
			e.sd(!0);
			e.rd(a, 'POST', c, d);
		},
		Vt = function (a) {
			return (
				L && G(9) && typeof a.timeout === Df && void 0 !== a.ontimeout
			);
		},
		Wt = function (a) {
			return 'content-type' == a.toLowerCase();
		},
		Zt = function (a) {
			a.B = !1;
			a.A && ((a.C = !0), a.A.abort(), (a.C = !1));
			Xt(a);
			Yt(a);
		},
		Xt = function (a) {
			a.I || ((a.I = !0), a.J(wb), a.J('error'));
		},
		au = function (a) {
			if (
				a.B &&
				'undefined' != typeof $t &&
				(!a.G[1] || 4 != (a.A ? a.A.readyState : 0) || 2 != a.oc())
			)
				if (a.D && 4 == (a.A ? a.A.readyState : 0)) Nr(a.Ye, 0, a);
				else if ((a.J(ng), 4 == (a.A ? a.A.readyState : 0))) {
					a.B = !1;
					try {
						a.Qc() ? (a.J(wb), a.J('success')) : Xt(a);
					} finally {
						Yt(a);
					}
				}
		},
		Yt = function (a, b) {
			if (a.A) {
				bu(a);
				var c = a.A,
					d = a.G[0] ? pj : null;
				a.A = null;
				a.G = null;
				b || a.J('ready');
				try {
					c.onreadystatechange = d;
				} catch (e) {}
			}
		},
		bu = function (a) {
			a.A && a.R && (a.A.ontimeout = null);
			a.F && (z.clearTimeout(a.F), (a.F = null));
		},
		cu = function (a) {
			N.call(this);
			this.K = 0;
			this.F = a || fd;
			this.A =
				!L || Ql(10) || bs(window.location.href, this.F)
					? new St()
					: new Kt();
			this.B = null;
			this.D = new S(this);
			this.G = up('ppe');
			this.A.sd && this.A.sd(!0);
		},
		du = function (a) {
			N.call(this);
			this.C = null;
			this.active = !1;
			this.A = null;
			this.D = a || Io.qa();
		},
		eu = function (a, b, c) {
			var d = 'old' + b;
			if (c) {
				c = a.getAttribute(b);
				var e = a.hasAttribute(b);
				'off' != c &&
					(a.setAttribute(b, 'off'), e && a.setAttribute(d, c));
			} else
				(c = a.getAttribute(d)),
					a.hasAttribute(d)
						? (a.setAttribute(b, c), a.removeAttribute(d))
						: a.removeAttribute(b);
		},
		fu = function (a) {
			du.call(this);
			this.B = Ij(a, function (b, c) {
				b.push(c());
				return b;
			});
			this.F = {};
			this.K = [];
		},
		gu = function (a, b, c, d, e, g) {
			this.source = a;
			this.target = b;
			this.A = c;
			this.B = e || !1;
			this.type = d || 0;
			this.C = g || '';
		},
		hu = function (a, b, c, d, e) {
			this.source = a;
			this.target = b;
			this.A = c || '';
			this.C = d || '';
			this.B = e || 0;
			this.timestamp = new Date().getTime();
		},
		iu = function (a, b) {
			P.call(this, 'cmt');
			this.F = a;
			this.A = b;
		},
		ju = function () {
			this.A = {};
		},
		lu = function (a) {
			ku[a] || (ku[a] = new ju());
			return ku[a];
		},
		mu = function (a, b, c, d, e, g, h) {
			this.A = [];
			this.B = (e || 2) * d.B + 1;
			this.source = b;
			this.D = a;
			this.G = c;
			this.type = g || 0;
			this.K = d;
			this.H = h || {};
			this.F = '';
			this.C = !0;
		},
		ou = function (a) {
			var b = {
				text: nu(a),
				itc: a.G,
				num: String(a.B),
				cp: '0',
				cs: '1',
				ie: 'utf-8',
				oe: 'utf-8',
				app: Ap,
			};
			pk(b, a.H);
			return b;
		},
		nu = function (a) {
			var b = a.F + a.D;
			if (1 == a.type) return b;
			b = b ? '|' + b.replace(/[,|:]/g, escape) + ',' : '';
			var c = a.source;
			1 != a.K.L && (c = c.replace(/[,|:%]/g, escape));
			return b + c;
		},
		pu = function (a) {
			P.call(this, 'mup');
			this.A = a;
		},
		qu = function (a, b, c, d, e) {
			this.source = a;
			this.target = b;
			this.A = 1;
			this.B = c || '';
			this.C = d || '';
			this.D = e || [];
		},
		ru = function () {
			this.A = {};
			this.B = [];
		},
		tu = function (a) {
			su[a] || (su[a] = new ru());
			return su[a];
		},
		vu = function (a, b, c, d, e, g) {
			a.A[b] || (a.A[b] = []);
			c = c && ck(c);
			for (var h = a.A[b], k = !1, l = 0; l < h.length; l++)
				h[l].target == c && (h[l].A++, (k = !0));
			k || h.push(new qu(b, c, d));
			uu && a.B.push(new qu(b, c, d, e, g));
		},
		wu = function (a, b) {
			if (!a.A[b]) return [];
			a = a.A[b].slice(0);
			Xj(a, function (c, d) {
				return d.A - c.A;
			});
			return a;
		},
		xu = function (a) {
			return 0 == a.B.length
				? null
				: {
						feedback: Hj(a.B, function (b) {
							return b.toJSON();
						}),
				  };
		},
		yu = function (a, b) {
			this.Cc = a;
			this.offset = b;
		},
		zu = function (a) {
			this.A = [];
			this.offset = a;
		},
		Au = function (a) {
			this.A = a;
			this.B = jk(a);
		},
		Bu = function (a, b) {
			var c = new zu(b.length);
			D(a.B, function (d) {
				var e = b.indexOf(d);
				-1 < e &&
					e <= c.offset &&
					(e < c.offset && ((c.A = []), (c.offset = e)), c.A.push(d));
			});
			return c;
		},
		Cu = function (a, b) {
			if (!b) return [];
			for (var c = [], d = [], e = b; 2 > c.length && e; ) {
				var g = Bu(a, e);
				if (0 != g.A.length)
					for (var h = 0; h < g.A.length; h++)
						for (
							var k = g.A[h], l = a.A[k], p = 0;
							p < l.length;
							p++
						)
							d.push(
								new yu(
									e.slice(0, g.offset) + l[p],
									g.offset + k.length
								)
							);
				else d.push(new yu(e, e.length));
				if (1 == c.length)
					for (c = c.pop(), e = 0; e < d.length; e++)
						(d[e].Cc = c.Cc + d[e].Cc), (d[e].offset += c.offset);
				c = d;
				d = [];
				if (0 == c.length) break;
				e = b.slice(c[0].offset);
			}
			return c;
		},
		Eu = function (a, b) {
			R.call(this);
			this.B = a;
			this.A = b;
			this.F = (a = this.A.ic) ? new Au(a) : null;
			this.G = up('ppe');
			'chext' == Ap ? (this.C = Du) : yp() && (this.C = new cu());
		},
		Fu = function (a, b) {
			for (var c = 0, d; (d = b[c]); c++)
				d.A.length >= d.B
					? ((d.C = !0), d.A.splice(d.B - 1, d.A.length - d.B + 1))
					: (d.C = !1);
			a.J(new pu(b));
		},
		Gu = function (a, b) {
			if (a.F && !(b.A.length >= b.B)) {
				var c = Cu(a.F, b.source);
				for (
					a = {
						sb: 0,
					};
					a.sb < c.length &&
					(0 <=
						Lj(
							b.A,
							(function (d) {
								return function (e) {
									return e.target == c[d.sb].Cc;
								};
							})(a)
						) ||
						(b.A.push(
							new gu(
								b.source.slice(0, c[a.sb].offset),
								c[a.sb].Cc,
								'',
								2
							)
						),
						!(b.A.length >= b.B)));
					a = {
						sb: a.sb,
					},
						a.sb++
				);
			}
		},
		Hu = function (a, b) {
			if (!a.A.aa && b.source) {
				var c = b.A[0];
				if (
					!c ||
					c.B ||
					!a.A.H ||
					(4 != c.type && 3 != c.type && 5 != c.type)
				)
					if (
						((c = Lj(b.A, function (e) {
							return e.target == b.source;
						})),
						!(0 == c || (0 < c && !a.A.Wa)))
					) {
						var d = new gu(b.source, b.source, '');
						a.A.Wa
							? (0 <= c && b.A.splice(c, 1),
							  2 > b.A.length
									? b.A.push(d)
									: b.A.splice(1, 0, d))
							: b.A.length >= a.A.B
							? b.A.splice(a.A.B - 1, 0, d)
							: b.A.push(d);
					}
			}
		},
		Iu = function (a, b, c) {
			R.call(this);
			this.status = 0;
			this.source = '';
			this.A = 0;
			this.T = '';
			this.C = -1;
			this.H = !0;
			this.aa = this.Ea = this.I = !1;
			this.L = b;
			this.B = c;
			this.D = [];
			this.R = new Eu(this.L.code, c);
			this.O = a;
			this.V = new S(this);
			this.O.ta(this);
			T(this.V, this.R, 'mup', this.Ab, void 0);
		},
		Ju = function (a) {
			return 0 > a.C || 0 == a.D.length ? 0 : Math.floor(a.C / a.B.B);
		},
		Ku = function (a, b, c) {
			(c = void 0 === c ? '' : c) || a.J('dlc');
			a.O.push(b, c);
			a.reset();
		},
		Lu = function (a) {
			a.J('mup');
		},
		Nu = function (a, b, c) {
			if (a.Ea) (a.status = 1), Lu(a);
			else {
				var d = a.ib();
				if (d || c) {
					b = new mu(a.Za(), d, a.L.code, a.B, b, c, a.md());
					if (a.B.V || 1 == c) b.F = a.T;
					a.status = 2;
					Lu(a);
					d = a.R;
					if (1 == c ? 0 : a.aa) Gu(d, b), Fu(d, [b]);
					else if ((a = lu(d.B).load(nu(b))) && b.B <= a[0])
						d.G.push('od', 2), d.D(b, !1, !0, a);
					else {
						a = xu(tu(d.B));
						c = Du;
						var e = 0 == b.type ? '/request' : '/predict';
						0 == b.type && a && d.C
							? d.C.C(e, ou(b), A(d.D, d, b, !0), void 0, Mu, a)
							: c.C(e, ou(b), A(d.D, d, b, !1));
					}
				}
			}
		},
		Ou = function (a, b, c) {
			Iu.call(this, a, b, c);
			this.F = [];
			this.G = up('ppe');
		},
		Pu = function (a) {
			var b = a.D[a.C];
			a.G.push('slen', b.source.length);
			a.G.push('tlen', b.target.length);
			a.G.push('ci', a.C);
			a.G.push('dur', zj() - a.kf);
		},
		Ru = function (a, b, c) {
			R.call(this);
			this.target = a;
			this.D = b || a;
			this.I = c || new rn(NaN, NaN, NaN, NaN);
			this.B = I(a);
			this.A = new S(this);
			Fm(this, this.A);
			this.deltaY =
				this.deltaX =
				this.S =
				this.R =
				this.screenY =
				this.screenX =
				this.clientY =
				this.clientX =
					0;
			this.H = !0;
			this.C = !1;
			Zm(this.D, [Oh, Ye], this.bd, !1, this);
			this.F = Qu;
		},
		Uu = function (a, b, c) {
			var d = cm(J(a.B).A);
			b += d.x - a.L.x;
			c += d.y - a.L.y;
			a.L = d;
			a.deltaX += b;
			a.deltaY += c;
			return new H(Su(a, a.deltaX), Tu(a, a.deltaY));
		},
		Wu = function (a, b, c, d) {
			a.target.style.left = c + mg;
			a.target.style.top = d + mg;
			a.J(new Vu('drag', a, b.clientX, b.clientY, b, c, d));
		},
		Su = function (a, b) {
			var c = a.I;
			a = isNaN(c.left) ? null : c.left;
			c = isNaN(c.width) ? 0 : c.width;
			return Math.min(
				null != a ? a + c : Infinity,
				Math.max(null != a ? a : -Infinity, b)
			);
		},
		Tu = function (a, b) {
			var c = a.I;
			a = isNaN(c.top) ? null : c.top;
			c = isNaN(c.height) ? 0 : c.height;
			return Math.min(
				null != a ? a + c : Infinity,
				Math.max(null != a ? a : -Infinity, b)
			);
		},
		Vu = function (a, b, c, d, e, g, h) {
			P.call(this, a);
			this.clientX = c;
			this.clientY = d;
			this.left = void 0 !== g ? g : b.deltaX;
			this.top = void 0 !== h ? h : b.deltaY;
		},
		Xu = function (a, b, c) {
			Ru.call(this, a, b, c);
			b && this.B != I(b) && (this.G = dm(I(b)).frameElement);
		},
		Yu = function (a, b) {
			var c = b.documentElement,
				d = !Qu;
			U(a.A, b, [Nh, Ze], a.aa, d);
			U(a.A, b, [Mh, af], a.wb, d);
			Qu
				? (c.setCapture(!1), T(a.A, c, 'losecapture', a.wb, void 0))
				: T(a.A, dm(b), ab, a.wb, void 0);
		},
		Zu = function (a, b) {
			I(b.target) != a.B &&
				a.G &&
				((b.clientX += a.G.offsetLeft), (b.clientY += a.G.offsetTop));
		},
		av = function (a) {
			if (a && vp) {
				if (null == $u) {
					var b = J(),
						c = b.A,
						d = hm(b.A, 'div');
					d.style.backgroundColor = 'rgb(1, 2, 3)';
					b.U(c.body, d);
					c = xn(d, 'backgroundColor');
					c = c.replace(/ /g, '');
					c =
						'rgb(0,0,0)' === c
							? 'black'
							: 'rgb(255,255,255)' === c
							? 'white'
							: Cf;
					b.ab(d);
					$u = c;
				}
				switch ($u) {
					case 'white':
						$p(a, wd, xd);
						break;
					case 'black':
						$p(a, xd, wd);
						break;
					default:
						Zp(a, [wd, xd]);
				}
			}
		},
		bv = function (a) {
			P.call(this, 'clkc');
			this.index = a;
		},
		cv = function (a) {
			this.A = a;
		},
		dv = function (a, b) {
			a && (a.tabIndex = b ? 0 : -1);
		},
		ev = function (a, b) {
			b = b.M();
			Pn(b, Q);
			L && (b.hideFocus = !0);
			(a = a.A) &&
				(a ? b.setAttribute('role', a) : b.removeAttribute('role'));
		},
		fv = function () {},
		hv = function (a, b, c) {
			if ((a = a.M ? a.M() : a)) {
				var d = [b];
				L && !G('7') && ((d = gv(Up(a), b)), d.push(b));
				(c ? Xp : Zp)(a, d);
			}
		},
		iv = function (a, b) {
			var c;
			if ((c = a.M())) {
				if (!b && a.za & 32) {
					try {
						c.blur();
					} catch (d) {}
					a.za & 32 && a.ke(null);
				}
				(vm(c) && wm(c)) != b &&
					(b
						? (c.tabIndex = 0)
						: ((c.tabIndex = -1), c.removeAttribute('tabIndex')));
			}
		},
		lv = function (a, b, c) {
			jv ||
				(jv = {
					1: Tb,
					8: Fg,
					16: pb,
					64: 'expanded',
				});
			b = jv[b];
			var d = a.getAttribute('role') || null;
			d && ((d = kv[d] || b), (b = b == pb || b == Fg ? d : b));
			b && Vr(a, b, c);
		},
		mv = function () {
			return 'goog-control';
		},
		gv = function (a, b) {
			var c = [];
			b && (a = Qj(a, [b]));
			D([], function (d) {
				!Kj(d, yj(E, a)) || (b && !E(d, b)) || c.push(d.join('_'));
			});
			return c;
		},
		nv = function (a, b) {
			if (!a.A) {
				var c = mv();
				c.replace(/\xa0|\s/g, ' ');
				a.A = {
					1: c + '-disabled',
					2: c + '-hover',
					4: c + '-active',
					8: c + '-selected',
					16: c + '-checked',
					32: c + '-focused',
					64: c + '-open',
				};
			}
			return a.A[b];
		},
		pv = function (a, b, c) {
			V.call(this, c);
			if (!b) {
				for (b = this.constructor; b; ) {
					var d = vj(b);
					if ((d = ov[d])) break;
					b =
						(b = Object.getPrototypeOf(b.prototype)) &&
						b.constructor;
				}
				b = d ? (typeof d.qa === r ? d.qa() : new d()) : null;
			}
			this.D = b;
			this.jd = void 0 !== a ? a : null;
		},
		sv = function (a, b) {
			qv(a, 2, b) && rv(a, 2, b);
		},
		tv = function (a, b) {
			qv(a, 4, b) && rv(a, 4, b);
		},
		uv = function (a, b) {
			qv(a, 64, b) && rv(a, 64, b);
		},
		rv = function (a, b, c, d) {
			if (!d && 1 == b) a.Gb(!c);
			else if (39 & b && c != !!(a.za & b)) {
				var e = a.D;
				if ((d = a.M())) (e = nv(e, b)) && hv(a, e, c), lv(d, b, c);
				a.za = c ? a.za | b : a.za & ~b;
			}
		},
		vv = function (a) {
			return !!(255 & a) && !!(39 & a);
		},
		qv = function (a, b, c) {
			return (
				!!(39 & b) &&
				!!(a.za & b) != c &&
				(!(0 & b) || a.J(zo(b, c))) &&
				!a.Y
			);
		},
		wv = function (a, b) {
			if (vv(16)) {
				var c = !(a.za & 16);
				qv(a, 16, c) && rv(a, 16, c);
			}
			vv(8) && qv(a, 8, !0) && rv(a, 8, !0);
			vv(64) && uv(a, !(a.za & 64));
			c = new P(Ga, a);
			b &&
				((c.altKey = b.altKey),
				(c.ctrlKey = b.ctrlKey),
				(c.metaKey = b.metaKey),
				(c.shiftKey = b.shiftKey),
				(c.D = b.D));
			return a.J(c);
		},
		xv = function () {
			return new pv(null);
		},
		zv = function (a) {
			N.call(this);
			this.B = a;
			this.A = !1;
			this.C = new S(this);
			Fm(this, this.C);
			a = this.B.C;
			U(
				U(T(this.C, a, yv.bc, this.F, void 0), a, yv.cc, this.K),
				a,
				n,
				this.D
			);
		},
		Bv = function (a, b) {
			if (!Av) return (a.button = 0), (a.type = b), a;
			var c = document.createEvent('MouseEvents');
			c.initMouseEvent(
				b,
				a.bubbles,
				a.cancelable,
				a.view || null,
				a.detail,
				a.screenX,
				a.screenY,
				a.clientX,
				a.clientY,
				a.ctrlKey,
				a.altKey,
				a.shiftKey,
				a.metaKey,
				0,
				a.relatedTarget || null
			);
			return c;
		},
		Y = function (a, b, c) {
			V.call(this, c);
			this.td = b || cv.qa();
			this.Zb = a || mi;
		},
		Cv = function (a) {
			return a.Dd || a.M();
		},
		Dv = function (a, b) {
			var c = Ao(a),
				d = Cv(a);
			b
				? U(
						U(T(c, d, tc, a.he, void 0), d, ab, a.ge),
						a.zb || (a.zb = new dr(Cv(a))),
						ie,
						a.je
				  )
				: to(
						to(to(c, d, tc, a.he), d, ab, a.ge),
						a.zb || (a.zb = new dr(Cv(a))),
						ie,
						a.je
				  );
		},
		Iv = function (a, b) {
			var c = Co(a, a.Na);
			if (
				(c && typeof c.qc == r && c.qc(b)) ||
				(a.na && a.na != c && typeof a.na.qc == r && a.na.qc(b))
			)
				return !0;
			if (b.shiftKey || b.ctrlKey || b.metaKey || b.altKey) return !1;
			switch (b.keyCode) {
				case 27:
					if (a.Ob) Cv(a).blur();
					else return !1;
					break;
				case 36:
					Ev(a);
					break;
				case 35:
					Fv(a);
					break;
				case 38:
					if (a.Zb == mi) Gv(a);
					else return !1;
					break;
				case 37:
					if (a.Zb == ad) Bo(a) ? Hv(a) : Gv(a);
					else return !1;
					break;
				case 40:
					if (a.Zb == mi) Hv(a);
					else return !1;
					break;
				case 39:
					if (a.Zb == ad) Bo(a) ? Gv(a) : Hv(a);
					else return !1;
					break;
				default:
					return !1;
			}
			return !0;
		},
		Jv = function (a) {
			0 != a.Ob && a.Ta && Dv(a, !1);
			a.Ob = !1;
			a.yb && a.mb && dv(Cv(a), !1);
		},
		Kv = function (a, b) {
			(b = Co(a, b)) ? sv(b, !0) : -1 < a.Na && sv(Co(a, a.Na), !1);
		},
		Ev = function (a) {
			Lv(
				a,
				function (b, c) {
					return (b + 1) % c;
				},
				(a.F ? a.F.length : 0) - 1
			);
		},
		Fv = function (a) {
			Lv(
				a,
				function (b, c) {
					b--;
					return 0 > b ? c - 1 : b;
				},
				0
			);
		},
		Hv = function (a) {
			Lv(
				a,
				function (b, c) {
					return (b + 1) % c;
				},
				a.Na
			);
		},
		Gv = function (a) {
			Lv(
				a,
				function (b, c) {
					b--;
					return 0 > b ? c - 1 : b;
				},
				a.Na
			);
		},
		Lv = function (a, b, c) {
			c = 0 > c ? Eo(a, a.na) : c;
			var d = a.F ? a.F.length : 0;
			c = b.call(a, c, d);
			for (var e = 0; e <= d; ) {
				var g = Co(a, c),
					h;
				if ((h = g)) h = g.isVisible() && g.isEnabled() && !0;
				if (h) {
					Kv(a, c);
					break;
				}
				e++;
				c = b.call(a, c, d);
			}
		},
		Mv = function (a, b) {
			Y.call(this, void 0, void 0, b);
			this.model = a;
			this.R = [];
			this.B = this.A;
			this.O = this.Z = null;
		},
		Nv = function (a) {
			a = Dm(a.B, 2);
			a.cellPadding = '0';
			a.cellSpacing = '0';
			a.border = '0';
			Vp(a, 'ita-ppe-tbl');
			Vp(a.firstChild, Ud);
			a.rows[0].cells[1].style.width = '1px';
			for (var b = 0; 1 > b; b++) {
				Vp(a.rows[b], Ud);
				for (var c = 0; 2 > c; c++) Vp(a.rows[b].cells[c], Ud);
			}
			return a;
		},
		Ov = function (a, b) {
			a.H = a.B.P(f, ['ita-ppe-pgu', Md]);
			a.G = a.B.P(f, ['ita-ppe-pgd', Md]);
			var c = a.B.P(f, 'ita-ppe-navi-box');
			a.B.ia(c, a.H, a.G);
			a.B.ia(b, c);
		},
		Qv = function (a) {
			a.D.style.display = Cf;
			if (0 == a.model.status || (0 == a.model.D.length && !a.model.B.R))
				a.oa(!1);
			else {
				a.model.B.R && (a.B.Mc(a.L), a.ed());
				if (2 == a.model.status) W(a.I, Td);
				else {
					Yp(a.I, Td);
					a.R = [];
					a.B.Mc(a.I);
					var b = Ju(a.model) * a.model.B.B,
						c = b + a.model.B.B,
						d = a.model.D.length;
					c > d && (c = d);
					for (var e = b; e < c; e++) {
						var g = a.model.D[e],
							h = '',
							k = e + 1 - b;
						if (
							1 < d ||
							(3 != g.type && 4 != g.type && 5 != g.type)
						)
							switch (a.model.B.O) {
								case 1:
									h = a.model.B.ub(k) + '. ';
									break;
								case 2:
									h = String(k) + '. ';
							}
						h = a.B.P(f, 'ita-ppe-can', h + g.target);
						a.model.C == e && W(h, 'ita-ppe-hlt');
						a.model.B.T || (h.style.display = 'inline');
						a.model.B.fc &&
							g.A &&
							a.B.ia(
								h,
								a.B.P(m, 'ita-ppe-ant', ' (' + g.A + ')')
							);
						a.R.push(h);
					}
					a.B.ia(a.I, a.R);
					Pn(a.I);
				}
				a: if (!X) {
					if (
						1 == a.model.D.length &&
						((b = a.model.D[0].type), 3 == b || 4 == b || 5 == b)
					) {
						a.H.style.display = Cf;
						a.G.style.display = Cf;
						break a;
					}
					a.H.style.display = od;
					a.G.style.display = od;
					b = Ju(a.model);
					c = Math.ceil(a.model.D.length / a.model.B.B);
					3 != a.model.status
						? (W(a.H, Sd), W(a.G, Sd))
						: (0 == b ? W(a.H, Sd) : Yp(a.H, Sd),
						  b != c - 1 || a.model.H ? Yp(a.G, Sd) : W(a.G, Sd));
				}
				a.O && Pv(a, a.O);
				if (!X) {
					b = a.M();
					if (0 > b.offsetLeft) b.style.left = '0px';
					else {
						var l = Fn(b);
						b.offsetLeft + b.offsetWidth > l.right &&
							(b.style.left = l.right - b.offsetWidth + mg);
					}
					0 > b.offsetTop
						? (b.style.top = '0px')
						: (l || (l = Fn(b)),
						  b.offsetTop + b.offsetHeight > l.bottom &&
								(b.style.top =
									b.offsetTop - b.offsetHeight - 18 + mg));
				}
				a.oa(!0);
			}
		},
		Pv = function (a, b) {
			var c = a.M();
			X
				? (c.style.top = b.A.y + Em(a.A).scrollY + mg)
				: ((a.O = b), b.Ma(c, 8));
		},
		Rv = function (a, b) {
			Mv.call(this, a, b);
		},
		Sv = function (a, b) {
			this.A = a;
			this.D = b;
			this.K = {};
			this.H = {};
			this.B = null;
			this.F = '';
			this.C = !0;
			this.G = !1;
		},
		Tv = function (a) {
			return a.A.B.C && 'block' == a.D.D.style.display;
		},
		Uv = function (a) {
			var b = a.toString(),
				c = b.lastIndexOf('/'),
				d = b.slice(c + 1);
			b = b.slice(1, c);
			return 0 > d.indexOf('g') ? new RegExp(b, d + 'g') : a;
		},
		Wv = function (a, b) {
			var c = Vv;
			if (!c || !a.A.B.I) return null;
			var d = c.Mb();
			if (d) {
				var e = d.Va().length;
				a.A.B.G < e
					? (O(d), (d = null))
					: a.A.B.G > e && d.Je(a.A.B.I, a.A.B.G - e, b);
			}
			b = c.Da(20);
			for (c = b.length - 1; 1 <= c && !a.A.B.I.test(b.charAt(c)); c--);
			a.A.T = b.slice(0, c);
			return d;
		},
		Xv = function (a, b, c, d) {
			a.B = d;
			a.A.B.C && Pv(a.D, d.wc());
			a.F = b == c ? '' : c;
			c = a.A;
			c.I = !0;
			c.eb(b, 0);
			a.G = !0;
		},
		Yv = function (a) {
			O(a.B);
			a.B = Wv(a, !0);
			if (a.B) {
				var b = a.B.Va();
				b
					? 0 != a.A.status
						? a.A.dd(b)
						: a.A.eb(b, 0)
					: (O(a.B), (a.B = null), a.A.reset());
			} else a.A.reset();
		},
		$v = function (a) {
			Nr(
				function () {
					this.G = !1;
					Tv(this)
						? this.A.reset()
						: this.B &&
						  !this.B.hd() &&
						  (2 == this.A.status && Zv(this),
						  this.A.sa(),
						  0 != this.A.status && this.A.reset());
				},
				0,
				a
			);
		},
		aw = function (a, b) {
			if (b.type == t && 33 <= b.keyCode && 40 >= b.keyCode)
				if (a.C) $v(a);
				else return !0;
			else if (b.type == je && 46 == b.keyCode && a.C)
				Nr(
					function () {
						Yv(this);
						Nu(this.A);
					},
					0,
					a
				);
			else if (b.type != t || 46 != b.keyCode || a.C)
				b.type == u && a.A.reset();
			else return !0;
			return !1;
		},
		bw = function (a) {
			var b = Vv;
			Tv(a) && a.A.reset();
			if (0 != a.A.status)
				return (
					a.C
						? (b.Ia('', 1), Yv(a))
						: (a.A.ac(), 0 == a.A.status && a.B && a.B.replace('')),
					!0
				);
			if (!b.uc()) return !1;
			b = Wv(a, !1);
			if (!b) return !1;
			var c = b.Va();
			if (c) {
				var d = a.H[c],
					e = a.A.B.Nb(c);
				if (
					(d && (!e || 3 > c.length - d.length)) ||
					(e &&
						((d = c.slice(0, c.length - e.back) + e.text),
						!d.replace(Uv(a.A.B.F), '')))
				)
					return Xv(a, d, c, b), !0;
			}
			O(b);
			return !1;
		},
		cw = function (a) {
			if (!Vv.uc() || a.B) return !1;
			var b = Wv(a, !0);
			if (!b) return !1;
			var c = b.Va();
			if (c) {
				var d = '',
					e = Wv(a, !1);
				e && ((d = e.Va()), O(e));
				if (c != d && (d = a.H[c])) return Xv(a, d, c, b), Nu(a.A), !0;
			}
			O(b);
			return !1;
		},
		Zv = function (a) {
			if (a.B) {
				var b = a.B;
				a.B = null;
				if (b.Va()) {
					var c = a.A.hb(),
						d = a.K[c];
					d ? d.push(b) : (a.K[c] = [b]);
				} else b.da();
			}
		},
		dw = function (a, b) {
			P.call(this, a);
			this.data = b;
		},
		ew = function (a, b, c) {
			R.call(this);
			this.A = null;
			this.model = a;
			this.view = b;
			this.C = new S(this);
			this.B = up('ppe');
			this.model.ta(this);
			this.view.ha();
			U(
				U(
					U(
						U(
							U(
								U(
									U(
										U(
											T(
												this.C,
												this.model,
												'cmt',
												this.Cg,
												void 0
											),
											this.model,
											'opn',
											this.Fg
										),
										this.model,
										'cls',
										this.Bg
									),
									this.model,
									'mup',
									this.Eg
								),
								this.model,
								'dlc',
								this.Dg
							),
							this.view,
							'clkc',
							this.vd
						),
						this.view,
						'pd',
						this.Jf
					),
					this.view,
					'pu',
					this.Kf
				),
				c.A,
				Ye,
				this.xd,
				op
			);
			D(
				fs(c.A),
				function (d) {
					try {
						T(this.C, d, Ye, this.xd, op),
							M && T(this.C, d, zb, this.xd, op);
					} catch (e) {}
				},
				this
			);
		},
		gw = function (a) {
			a.A
				? ((a = a.A),
				  !a.A.B.S || 0 != a.A.status || a.G || Ku(a.A, ' ', ' '),
				  (a.G = !1))
				: !fw(a) && a.model.B.S && Ku(a.model, ' ', ' ');
		},
		fw = function (a) {
			return 0 != a.model.status;
		},
		hw = function (a, b, c, d) {
			a = new Ou(a, c, d);
			c = new Rv(a, b);
			ew.call(this, a, c, b);
			Fm(this, a);
			Fm(this, c);
		},
		iw = function () {
			R.call(this);
			this.A = [];
		},
		jw = function () {
			iw.call(this);
		},
		kw = function (a) {
			this.source = a;
			this.B = [];
			this.A = -1;
			this.C = !0;
		},
		lw = function (a) {
			a.B = [];
			a.A = -1;
			a.C = !0;
		},
		mw = function (a, b, c) {
			Iu.call(this, a, b, c);
			this.F = [];
		},
		nw = function (a) {
			var b = a.F[a.A];
			a.D = b.B;
			a.H = b.C;
			a.C = b.A;
		},
		ow = function (a, b) {
			Mv.call(this, a, b);
		},
		pw = function (a, b, c, d) {
			a = new mw(a, c, d);
			c = new ow(a, b);
			ew.call(this, a, c, b);
			this.model = a;
			Fm(this, a);
			Fm(this, c);
		},
		qw = function (a) {
			function b() {
				return 0 != a.model.status;
			}
			function c() {
				return 1 == a.model.status || 3 == a.model.status;
			}
			return [
				[
					u,
					0,
					a.model.B.F,
					null,
					function () {
						return 0 == a.model.status || c();
					},
					a.Ba,
					a,
				],
				[t, 0, 37, null, c, a.model.ra, a.model, -1],
				[t, 0, 39, null, c, a.model.ra, a.model, 1],
				[t, 0, 13, null, b, a.$b, a],
				[t, 0, 8, null, null, a.Vc, a],
				[t, 0, 27, null, b, a.xc, a],
				[t, 17, 66, null, c, a.model.ra, a.model, -1],
				[t, 17, 70, null, c, a.model.ra, a.model, 1],
				[t, 17, 65, null, c, a.model.ra, a.model, -999],
				[t, 17, 69, null, c, a.model.ra, a.model, 999],
				[t, 17, 77, null, b, a.$b, a],
				[t, 17, 71, null, c, a.xc, a],
			];
		},
		rw = function (a) {
			function b(c) {
				if (!this.model.Ea) return this.pb(c);
				/ $/.test(this.model.source) || 32 != c.keyCode
					? ((this.model.Ea = !1),
					  (c = this.pb(c)),
					  (this.model.Ea = !0))
					: ((c.type = u),
					  (c.charCode = c.keyCode),
					  (c = this.Ba(c)));
				return c;
			}
			return [
				[t, 0, 9, 1, null, b, a],
				[t, 0, 40, 1, null, b, a],
				[t, 0, 32, 1, null, b, a],
				[t, 0, 36, 1, null, a.model.ra, a.model, -999],
				[t, 0, 35, 1, null, a.model.ra, a.model, 999],
				[t, 0, 46, 1, null, a.model.Le, a.model],
				[t, 17, 72, 1, null, a.Vc, a],
				[t, 17, 68, 1, null, a.model.Le, a.model],
			];
		},
		sw = function () {
			iw.call(this);
		},
		uw = function (a) {
			var b = [];
			a = a.replace('=', ' ');
			for (var c = 0; c < a.length; c++) {
				var d = a.charAt(c);
				b.push(tw[d] || d);
			}
			return b.join('');
		},
		vw = function (a) {
			this.source = a;
			this.target = '';
			this.A = !1;
		},
		ww = function (a, b, c) {
			Iu.call(this, a, b, c);
			this.F = [];
			this.G = '';
			this.W = {
				'<': '\uff0c\u3001\u3000\u300a\u3008\uff1c'.split(''),
				'>': '\u3002\u22ef\u3000\u30fb\u00b7\uff0e\u300b\u3009\uff1e'.split(
					''
				),
				':': ['\uff1a', '\uff1b'],
				'?': ['\uff1f', '\uff0c', '\u00f7'],
			};
			this.S = !1;
		},
		xw = function (a) {
			a.D = [];
			a.C = -1;
			a.status = 1;
			Lu(a);
		},
		yw = function (a, b) {
			var c = a.W[b];
			if (!c) return !1;
			a.D = c.map(function (d) {
				return new gu(b, d, '');
			});
			a.F = [new vw(b)];
			a.F[0].target = c[0];
			a.F[0].A = !0;
			a.source = b;
			a.status = 3;
			a.S = !0;
			a.C = 0;
			a.H = !1;
			a.J('opn');
			Lu(a);
			return !0;
		},
		zw = function (a, b) {
			Mv.call(this, a, b);
		},
		Aw = function (a, b, c, d) {
			a = new ww(a, c, d);
			c = new zw(a, b);
			ew.call(this, a, c, b);
			this.model = a;
			Fm(this, a);
			Fm(this, c);
		},
		Dw = function (a) {
			R.call(this);
			this.D = vj(this);
			this.B = Ys('', this.D);
			this.G = a;
			this.I = new S(this);
			U(this.I, Ts(), 'cfga', this.Mf);
			Bw != Cw && (Mn(nl(Bw)), (Bw = Cw));
		},
		Ew = function (a) {
			R.call(this);
			this.B = a || window;
			this.C = Zm(this.B, 'resize', this.D, !1, this);
			this.A = am(this.B || window);
		},
		Fw = function (a, b) {
			Xu.call(this, a, b);
			this.O = new Ew(Em(J(a)));
			a = new S(this);
			T(a, this.O, 'resize', this.V, void 0);
			Fm(this, a);
		},
		Gw = function (a) {
			var b = Jn(a.target);
			a = a.O;
			a = a.A ? Ul(a.A) : null;
			a.width -= 2 + b.width;
			a.height -= 2 + b.height;
			return new qn(2, a.width, a.height, 2);
		},
		Hw = function (a, b) {
			var c = Gw(a);
			a.I = sn(c) || new rn(NaN, NaN, NaN, NaN);
			b = b || Hn(a.target);
			b.x = Math.min(b.x, c.right);
			b.y = Math.min(b.y, c.bottom);
			b.x = Math.max(b.x, c.left);
			b.y = Math.max(b.y, c.top);
			An(a.target, b);
		},
		Iw = function (a) {
			if (a) {
				var b = J(a);
				b = am(Em(b) || window);
				var c = a.offsetHeight;
				a.style.left = Math.floor(b.width - a.offsetWidth - 50) + mg;
				a.style.top = Math.floor(b.height - c - 50) + mg;
			}
		},
		Jw = function (a, b, c) {
			V.call(this);
			this.G = a;
			this.B = b;
			this.D = new S(this);
			this.H = c && E(b, c) ? c : this.B[0];
		},
		Kw = function (a) {
			switch (a) {
				case Lh:
					return new Jw(
						a,
						['ita-kd-btn-en', 'ita-kd-btn-zh'],
						'ita-kd-btn-zh'
					);
				case Wh:
					return new Jw(a, ['ita-kd-btn-dbc', Id], Id);
				case 'pun':
					return new Jw(a, ['ita-kd-btn-en_pun', Jd], Jd);
				default:
					return null;
			}
		},
		Lw = function () {
			V.call(this, Fo);
			this.R = !1;
			this.G = this.H = this.L = this.D = this.O = null;
			this.S = {};
			this.I = new S(this);
			this.B = up('bar');
		},
		Nw = function (a, b, c, d) {
			c = c && b && rt(b);
			Kn(a.M(), c);
			a.R && (a.B.Qd(Fa, 'sw'), a.B.report(), (a.R = !1));
			c &&
				(Vp(
					a.D.firstChild,
					[
						Rp(b.code),
						'ita-kd-icon ita-kd-icon-span ita-kd-statusbar-icon',
					].join(' ')
				),
				d && Mw(a, d),
				a.B.ad(b.code),
				a.B.Fc('st'),
				(a.R = !0));
		},
		Mw = function (a, b) {
			hk(
				b,
				function (c, d) {
					var e = this.S[d];
					if (e && c != !Wp(e.M().firstChild, e.B[0])) {
						var g = d == this.O;
						this.O = null;
						this.B.Bb(Ow[d][Number(g)]);
						d = e.M();
						Yp(d.firstChild, c ? e.B[0] : e.B[1]);
						W(d.firstChild, c ? e.B[1] : e.B[0]);
					}
				},
				a
			);
		},
		Pw = function (a, b, c) {
			P.call(this, 'sb');
			this.value = c;
		},
		Qw = function (a) {
			du.call(this, a);
			this.B = new Dw(Fo);
			this.H = [Qr, t, je, u, Ye, n];
			this.G = [nb, mb, Qc, 'cm', Wh, Lh, 'pun', 'lc'];
			this.K = [];
			this.F = new S(this);
			U(this.F, this.B, ['opn', 'cmts', 'cmte', 'cls'], this.Qf);
		},
		Rw = function (a) {
			a = a.B.B.A;
			var b = {};
			return (
				(b.tlang = !!(a & 1)),
				(b.tsbc = !(a & 2)),
				(b.pun = !!(a & 4)),
				b
			);
		},
		Sw = function (a, b) {
			a = a.B;
			var c = !!b.tlang,
				d = !b.tsbc;
			b = !!b.pun;
			a.B.A = 0;
			c && (a.B.A |= 1);
			d && (a.B.A |= 2);
			b && (a.B.A |= 4);
		},
		Uw = function (a, b) {
			if (a.C && (b == Lh || (a.Ga && rt(a.C)))) {
				var c = a.B;
				c = !!c.A && fw(c.A);
				a.B.reset(b == Lh || b == Wh);
				var d = Rw(a);
				(b == Wh && c) ||
					((d[b] = !d[b]),
					b == Lh && a.C.code !== Ni && (d.pun = d[b]),
					Sw(a, d),
					Tw(a, a.C, d),
					a.Ga && Mw(a.Ga, d));
			}
		},
		Tw = function (a, b, c) {
			hk(
				c,
				function (d, e) {
					this.D.J(new Pw(e, b, d));
				},
				a
			);
		},
		Vw = function () {
			var a = {},
				b = Vv;
			if (b) {
				var c = Yq(b);
				c &&
					D(
						[
							'font-family',
							'font-size',
							'font-weight',
							'font-style',
							yh,
							xh,
							De,
							'word-spacing',
							'line-height',
							'text-align',
							ni,
							Sb,
						],
						function (d) {
							try {
								var e = Sp(c, d);
								e && (a[d] = e);
							} catch (g) {}
						}
					);
			}
			return $k(a);
		},
		Ww = function (a, b) {
			b = void 0 === b ? !1 : b;
			P.call(this, 'n');
			this.A = a;
			this.F = b;
		},
		Xw = function (a, b) {
			b = void 0 === b ? 10 : b;
			R.call(this);
			this.H = a ? a : new cu();
			this.C = [];
			this.F = this.A = '';
			this.L = !1;
			this.D = {};
			this.T = b;
			this.B = {};
			this.aa = new cu();
			this.I = '';
			this.G = null;
			this.O = up('hwt');
			this.B[uf] = vf;
			this.B[uc] = vc;
			this.B[Kb] = Lb;
			this.B[rd] = sd;
			this.B[kg] = lg;
			this.B[ag] = lg;
			this.B[fg] = lg;
			this.B[dc] = ec;
			this.B[vg] = wg;
		},
		Zw = function (a, b, c, d, e) {
			e = (void 0 === e ? '' : e).slice(-20);
			b = {
				writing_guide: {
					writing_area_width: c,
					writing_area_height: d,
				},
				pre_context: e,
				max_num_results: a.T,
				max_completions: 0,
				language: a.F,
				ink: b,
			};
			a.L ? (a.G = b) : Yw(a, b);
		},
		Yw = function (a, b) {
			b && Uj(a.C, 0, 0, b);
			b = {
				itc: a.D.itc,
				app_version: 0.4,
				api_level: Ol,
				device: window.navigator.appVersion,
				input_type: '0',
				options: 'enable_pre_space',
				requests: a.C,
			};
			a.C = [];
			a.L = !0;
			a.H.C('/request', a.D, A(a.S, a, 0), null, Mu, b);
		},
		$w = function (a) {
			'' != a.A &&
				a.C.push({
					feedback: '\u2205[deleted]',
					select_type: 'deleted',
					language: a.F,
					ink_hash: a.A,
				});
		},
		ax = function (a, b) {
			var c = b.pre_context.trim().replace(/[,|:%]/g, function (d) {
				return encodeURIComponent(d);
			});
			return {
				app: a.D.app,
				itc: b.itc,
				text: c,
				num: String(b.max_num_results),
				cp: '0',
				cs: '0',
				ie: 'utf-8',
				oe: 'utf-8',
			};
		},
		bx = function (a) {
			P.call(this, 'b');
			this.candidate = a;
		},
		cx = function (a) {
			N.call(this);
			this.A = a || J();
			this.B = {};
			this.C = '';
		},
		dx = function (a, b, c) {
			c = c || 'polite';
			var d = a.B[c];
			d
				? (d.removeAttribute('aria-hidden'), (c = d))
				: ((d = hm(a.A.A, f)),
				  (d.style.position = Ea),
				  (d.style.top = '-1000px'),
				  (d.style.height = '1px'),
				  (d.style.overflow = Zc),
				  Vr(d, 'live', c),
				  Vr(d, 'atomic', 'true'),
				  a.A.A.body.appendChild(d),
				  (c = a.B[c] = d));
			d = a.C === b ? b + '\u00a0' : b;
			b && (a.C = d);
			um(c, d);
		},
		ex = function (a, b, c) {
			V.call(this, b);
			this.ta(c || null);
			this.B = a;
			this.G = new S(this);
			this.D = !0;
			this.H = new cx(b);
		},
		fx = function (a) {
			W(a.M(), zd);
		},
		gx = function (a, b) {
			Y.call(this, void 0, void 0, a);
			this.ta(b || null);
			this.B = [];
			this.L = [];
			this.O = new S(this);
			this.H = !0;
			this.G = !1;
			this.D = 0;
			this.I = 'auto';
			this.R = new cx(a);
		},
		hx = function (a) {
			for (var b = 0; b < a.B.length; b++) Yp(a.B[b].M(), zd);
		},
		ix = function (a, b, c) {
			a.L = b;
			Gm(a.B);
			a.B = [];
			uo(a.O);
			for (b = 0; b < a.L.length; b++) {
				var d = new ex(a.L[b], a.A, a);
				d.ha(a.M());
				Oj(a.B, d);
			}
			for (b = 0; b < a.B.length; b++)
				(d = a.B[b]),
					U(a.O, d.M(), v, A(a.uh, a, d)),
					T(a.O, d.M(), $e, a.th, void 0);
			c && 0 < a.B.length && fx(a.B[0]);
			a.D = 0;
			a.I = 'auto';
			a.G = c;
		},
		jx = function (a, b) {
			a.H = b;
			for (var c = 0; c < a.B.length; c++) a.B[c].D = b;
		},
		kx = function (a, b) {
			this.text = a;
			this.A = b;
		},
		lx = function (a, b, c) {
			var d = zj();
			this.x = 0.01 * Math.round(100 * a);
			this.y = 0.01 * Math.round(100 * b);
			this.time = Math.round(d);
			this.pointerType = c;
		},
		mx = function (a, b) {
			P.call(this, a);
			this.A = b;
		},
		nx = function (a, b, c) {
			T(a, b, af, c, !0);
			D(fs(b), function (d) {
				try {
					T(a, d, af, c, !0);
				} catch (e) {}
			});
		},
		ox = function (a, b) {
			R.call(this);
			this.B = new S(this);
			this.A = !1;
			this.C = a;
			U(
				U(
					U(
						U(
							U(
								T(this.B, a, Ye, this.Ne, void 0),
								a,
								Ze,
								this.Oe
							),
							a,
							Oh,
							this.Ne
						),
						a,
						Mh,
						this.Ld
					),
					a,
					'touchcancel',
					this.Ld
				),
				a,
				Nh,
				this.Oe
			);
			nx(this.B, b, A(this.Ld, this));
		},
		px = function (a, b) {
			var c = En(a.C),
				d = b.A,
				e = a.C.ownerDocument;
			a =
				(e.dir == ug ? -1 : 1) *
				(e.body.scrollLeft || e.documentElement.scrollLeft || 0);
			e = e.body.scrollTop || e.documentElement.scrollTop || 0;
			null != d.touches && 0 < d.touches.length
				? ((a = d.touches[0].clientX + a),
				  (d = d.touches[0].clientY + e))
				: !L && 'pageX' in d && 'pageY' in d
				? ((a = d.pageX), (d = d.pageY))
				: ((a = d.clientX + a), (d = d.clientY + e));
			return new lx(a - c.x, d - c.y, b.pointerType);
		},
		qx = function (a, b, c, d, e) {
			Y.call(this, void 0, void 0, b);
			this.ta(c || null);
			this.ba = a || document;
			this.G = window.devicePixelRatio || 1;
			this.L = [];
			this.I = [];
			this.W = 0;
			this.V = new S(this);
			this.ea = new cx(this.A);
			this.S = d || wk();
			this.R = e || '#4D90FE';
			this.O = 0;
		},
		rx = function (a, b) {
			b.time -= a.W;
			b.x *= a.G;
			b.y *= a.G;
			a.I.push(b);
			var c = a.I.length;
			1 == c
				? ((b = a.I[0]),
				  (c = a.S(b) * a.G),
				  a.B.beginPath(),
				  (a.B.strokeStyle = a.R),
				  (a.B.fillStyle = a.R),
				  a.B.arc(b.x, b.y, c / 2, 0, 2 * Math.PI, !0),
				  a.B.fill())
				: ((b = a.I[c - 2]),
				  (c = a.I[c - 1]),
				  a.B.beginPath(),
				  (a.B.strokeStyle = a.R),
				  (a.B.fillStyle = Cf),
				  (a.B.lineWidth = a.S(b) * a.G),
				  (a.B.lineCap = 'round'),
				  (a.B.lineJoin = 'round'),
				  a.B.moveTo(b.x, b.y),
				  a.B.lineTo(c.x, c.y),
				  a.B.stroke());
		},
		sx = function (a) {
			return !a.H.A && 0 == a.L.length;
		},
		ux = function (a, b) {
			Y.call(this, void 0, void 0, a);
			this.ta(b || null);
			this.L = tx[''];
			this.ga = new S(this);
			this.ba = !0;
			this.ea = up('hwt');
		},
		vx = function (a) {
			R.call(this);
			this.C = this.A = null;
			this.B = a;
			this.ga = new S(this);
			this.D = !1;
			this.id = 0;
			this.I = '';
			this.H = up('hwt');
			this.F = this.G = !1;
		},
		wx = function (a) {
			var b = Hj(a.view.D.L, function (e) {
					return [
						Hj(e, function (g) {
							return g.x;
						}),
						Hj(e, function (g) {
							return g.y;
						}),
						Hj(e, function (g) {
							return g.time;
						}),
					];
				}),
				c;
			a.A && (c = a.A.Da(20));
			var d = a.view.D;
			Zw(a.B, b, d.D.width / d.G, d.D.height / d.G, c);
		},
		xx = function (a, b, c) {
			a.A && (a.J(new dw('e', b)), a.A.Ia(b, c), a.J(new dw('d', b)));
		},
		yx = function (a, b) {
			Y.call(this, void 0, void 0, a);
			this.ta(b || null);
			this.G = this.I = this.B = this.D = null;
			this.O = new S(this);
			this.L = new cx(a);
			this.H = !0;
		},
		zx = function (a, b) {
			b ? (W(a.I, Ad), $p(a.B, Hd, Fd)) : (Yp(a.I, Ad), $p(a.B, Fd, Hd));
		},
		Ax = function (a, b, c) {
			b = b || J();
			ux.call(this, b, c);
			this.ta(c || null);
			this.R = a;
			this.Z = null;
			this.pa = wn && !G(11);
			this.O = !1;
			this.W = new cx(b);
			this.S = !1;
		},
		Cx = function (a, b) {
			if (a.R && a.M() && !a.pa) {
				var c = a.A.A;
				b ||
					((b = Gw(a.Z)),
					(c = go(c.body, Bx)),
					(b = new H(
						c & 4 ? b.right : b.left,
						c & 1 ? b.bottom : b.top
					)));
				Hw(a.Z, b);
			}
		},
		Dx = function (a) {
			W(a.V, 'shown');
			a.S = !0;
			dx(a.W, sa);
		},
		Ex = function (a, b, c) {
			vx.call(this, a, c);
			this.Rd(new Ax(b, c, this));
		},
		Fx = function (a, b) {
			if (b || a.D) a.Jd(), a.view.oa(b), a.reset();
		},
		Gx = function (a, b) {
			du.call(this, b);
			this.B = null;
			this.F = new S(this);
			this.K = a;
			this.B = new Ex(new Xw(this.K), !0, Fo);
			U(
				U(
					U(
						U(
							T(this.F, this.B, 'g', this.gh, void 0),
							this.B,
							'e',
							this.ih
						),
						this.B,
						'd',
						this.hh
					),
					this.B,
					'k',
					this.Yg
				),
				this.B,
				'j',
				this.zh
			);
		},
		Hx = function (a, b) {
			P.call(this, a);
			this.Ua = (this.A = b) ? b.id : null;
		},
		Jx = function (a) {
			this.id = a.id;
			this.view = {
				id: a.id,
				title: a.title,
				Pc: a.direction == ug,
				tc: !!a.is102Keyboard,
				Cb: !!a.accents,
				Tc: {
					'': null,
					s: null,
					c: null,
					l: null,
					sc: null,
					cl: null,
					sl: null,
					scl: null,
				},
				dc: {
					'': null,
					s: null,
					c: null,
					l: null,
					sc: null,
					cl: null,
					sl: null,
					scl: null,
				},
				ec: {},
			};
			this.view.Cb && Ix(this, a);
			var b = this.view.tc ? Zi : $i;
			a = a.mappings;
			for (var c in a) {
				var d = a[c],
					e = c.split(/,/);
				e.join(',') != c && e.push('');
				var g = {};
				for (k in d) {
					var h = d[k];
					if ('' == k) {
						var k = b;
						if (this.view.tc) {
							var l = h.slice(0, 25);
							l += h.slice(26, 37);
							l += h.charAt(25);
							h = l += h.slice(37);
						}
					}
					k = k.replace('m', '\u00bd');
					k = k.replace('=', '\u00bb');
					k = k.replace(';', '\u00ba');
					if (1 == k.length)
						g[k] = Array.isArray(h) ? h : ['S', h, h];
					else {
						var p = 0;
						l = 0;
						for (var B; (B = k.charAt(l)); ++l) {
							var K = h.charAt(p++);
							if (K == h.charAt(p) && '{' == K) {
								K = h.indexOf('}}', p);
								if (K < p) break;
								p = h.slice(p + 1, K);
								var fa = p.split('||');
								3 == fa.length
									? (g[B] = fa)
									: 1 == fa.length && (g[B] = ['S', p, p]);
								p = K + 2;
							} else g[B] = ['S', K, K];
						}
					}
				}
				d = 0;
				for (h = void 0; (h = e[d]), void 0 != h; ++d)
					this.view.Tc[h] = g;
			}
		},
		Ix = function (a, b) {
			var c = b.accents,
				d;
			for (d in c) {
				var e = d.split(/,/);
				e.join(',') != d && e.push('');
				var g = {},
					h = 0;
				for (
					g.Ib = void 0;
					(g.Ib = e[h]), void 0 != g.Ib;
					g = {
						Ib: g.Ib,
					},
						++h
				)
					(a.view.dc[g.Ib] = []),
						D(
							c[d],
							(function (k) {
								return function (l) {
									this.view.dc[k.Ib].push(l.split(','));
								};
							})(g),
							a
						);
			}
			(b = b.transform) &&
				hk(
					b,
					function (k, l) {
						this.view.ec[k] ||
							(this.view.ec[k] = l.replace('\\', ''));
					},
					a
				);
		},
		Kx = function (a) {
			this.id = a.id;
			this.B = this.A = null;
			var b = a.transform;
			if (b) {
				var c = [],
					d = [],
					e = 1,
					g;
				for (g in b) {
					d[e] = [new RegExp(g + '$'), b[g]];
					c.push('(' + g + '$)');
					var h = new RegExp(g + '|.*').exec('').length;
					e += h;
				}
				this.A = [new RegExp(c.join('|')), d];
			}
			if ((a = a.historyPruneRegex)) this.B = new RegExp('^(' + a + ')$');
		},
		Lx = function (a, b) {
			return a.B ? !!a.B.exec(b) : !1;
		},
		Mx = function (a) {
			this.A = {
				Fa: {
					text: '',
					Oa: -1,
				},
				ua: '',
				current: {
					text: '',
					Oa: -1,
				},
			};
			this.B = new Kx(a);
			this.id = this.B.id;
		},
		Ox = function (a, b) {
			var c = a.A.current.text;
			(c && b && (bk(b, c) || bk(c, b))) || Nx(a);
		},
		Nx = function (a) {
			a.A.ua = '';
			a.A.Fa = {
				text: '',
				Oa: -1,
			};
			a.A.current = nk(a.A.Fa);
		},
		Qx = function () {
			R.call(this);
			this.G = Fk('https://ssl.gstatic.com/inputtools/js/kbd/3/%{file}');
			this.I = {};
			this.B = {};
			this.F = {};
			this.A = this.C = '';
			this.D = A(this.H, this);
			Px.push(this.D);
		},
		Sx = function (a, b) {
			if (b) {
				var c = a.B[b];
				void 0 == c
					? ((a.B[b] = !1), 'ko' == b && (b = 'hangul'), Rx(a, b))
					: c && a.J(new Hx('lld', c.view));
			}
		},
		Ux = function (a, b) {
			if (b && a.C != b) {
				var c = a.B[b];
				c
					? ((a.C = b),
					  (a.A = ''),
					  (b = Tx(a)) && Nx(b),
					  a.J(new Hx('lat', c.view)))
					: 0 == c && (a.A = b);
			}
		},
		Tx = function (a) {
			return a.F[a.C] || null;
		},
		Vx = function (a) {
			a = Tx(a);
			return !!a && !!a.B.A;
		},
		Rx = function (a, b) {
			var c = hm(document, za);
			a = Mk(
				a.G,
				Object.assign({}, a.I, {
					file: b + '.js',
				})
			);
			c.src = Ik(a);
			rl(c);
			document.body.appendChild(c);
		},
		Yx = function (a, b, c, d) {
			c = void 0 === c ? '' : c;
			d = void 0 === d ? !1 : d;
			var e = null;
			if (d) {
				e = (e = b.A) || document;
				var g = J();
				b = g.P(ma, {
					frameborder: '0',
					scrolling: 'no',
					style: 'background-color:transparent;border:0;display:none;',
				});
				g.ia(e.body, b);
				e = g.yf(b);
				Mn(
					Yr(
						'html body{border:0;margin:0;padding:0} html,body{overflow:hidden}' +
							Wx
					),
					e.body
				);
				e = b;
				b = J(tm(e));
			}
			Y.call(this, void 0, void 0, b);
			this.O = e;
			this.Ed = c;
			this.V = d;
			this.B = a;
			this.Nb = '';
			this.G = {};
			this.R = {};
			this.ic = L && !G(7);
			this.Ic = wn && !G(11);
			this.ng = Q && !G(3);
			this.D = new S(this);
			this.H = this.B.Cb;
			this.fc = {};
			this.B.Cb && Xx(this);
			this.Z = null;
			this.Oc = !1;
			this.L =
				this.ea =
				this.rb =
				this.S =
				this.Kb =
				this.pa =
				this.ba =
				this.W =
				this.fa =
				this.Wa =
				this.I =
					null;
			this.me = 0;
		},
		Zx = function (a, b, c) {
			if (typeof b === w) return b;
			if (a.H)
				return c && ((b = String.fromCharCode(c)), a.fc[b]) ? b : null;
			c = String.fromCharCode(b);
			var d = a.B.Tc[a.Nb][c];
			return d && (d = d[2])
				? d
				: 32 == b
				? ' '
				: 0 <= (a.B.tc ? Zi : $i).indexOf(c)
				? ''
				: null;
		},
		ay = function (a, b) {
			if (a.M() && !a.Ic) {
				var c = a.A.A;
				a.V && (c = I(a.O));
				b ||
					((b = Gw(a.Z)),
					(c = go(c.body, $x)),
					(b = new H(
						c & 4 ? b.right : b.left,
						c & 1 ? b.bottom : b.top
					)));
				Hw(a.Z, b);
			}
		},
		by = function (a, b) {
			hk(
				a.R,
				function (c) {
					Kn(c, !1);
				},
				a
			);
			(b = a.B.dc[b]) || (b = a.B.dc['']);
			D(
				ak(b),
				function (c) {
					this.R[c] && Kn(this.R[c], !0);
				},
				a
			);
		},
		cy = function (a, b) {
			a.B.Cb && by(a, b);
		},
		fy = function (a, b) {
			if (a.B) {
				a.B.Tc[b] && (a.Nb = b);
				if (!dy) {
					var c = {
						20: 'l',
						16: 's',
						273: 'c',
					};
					for (e in a.G) {
						var d = a.G[Number(e)];
						var e = parseInt(e, 10);
						var g = c[e];
						if (g) {
							rj(d) || (d = [d]);
							for (var h = 0, k; (k = d[h]); ++h)
								Vp(k, ui), 0 <= b.indexOf(g) && W(k, 'vk-sf-s');
						} else if ((g = ey(a, e))) a.A.Mc(d), a.A.U(d, g);
					}
				}
				a.L &&
					!Wp(a.L, 'vk-sf-s') &&
					(ds(a.L, [ui, vi]), W(a.L.firstChild, vi));
			}
		},
		gy = function (a, b) {
			if (a.isVisible()) {
				var c = typeof b === w ? a.R[b] : a.G[b];
				c &&
					(ds(c, [ui, 'vk-sf-a']),
					window.setTimeout(function () {
						Vp(c, ui);
					}, 250));
			}
		},
		hy = function (a) {
			var b = a.B.tc
					? [
							{
								13: 2,
							},
							{
								0: 1.5,
								13: 1.5,
							},
							{
								0: 1.75,
								13: 1.25,
							},
							{
								0: 1.25,
								12: 2.75,
							},
							{
								0: 3,
								1: 9,
								2: 3,
							},
					  ]
					: [
							{
								13: 2,
							},
							{
								0: 1.5,
								13: 1.5,
							},
							{
								0: 1.75,
								12: 2.25,
							},
							{
								0: 2.25,
								11: 2.75,
							},
							{
								0: 3,
								1: 9,
								2: 3,
							},
					  ],
				c = 4,
				d = 29,
				e = a.S.children[0].children[0];
			e &&
				((d = xn(e, 'width')),
				(d = M && d ? Number(d.slice(0, -2)) : Jn(e).width),
				(c = Rn(e, 'margin')),
				(c = c.right + c.left),
				(d += c));
			for (e = 0; e < b.length; e++)
				for (var g in b[e])
					(g = Number(g)),
						(a.S.children[e].children[g].style.width =
							d * b[e][g] - c + mg);
			a.B.Cb ||
				!L ||
				G(8) ||
				((a.me = 15 * d - c - 2), (a.I.style.width = a.me + mg));
		},
		iy = function (a) {
			L && !G(8)
				? ((a.style.display = 'inline'), (a.style.zoom = 1))
				: (a.style.display = od);
		},
		ly = function (a) {
			function b(h, k) {
				if (k) {
					var l = (k = c.P('A', {
							target: '_blank',
							class: 'vk-t-btn-o',
						})),
						p = this.Ed;
					p instanceof Pk ||
						p instanceof Pk ||
						((p = typeof p == Hf && p.nb ? p.$a() : String(p)),
						Rk.test(p) || (p = Da),
						(p = new Pk(p, Ok)));
					l.href = Qk(p);
				} else
					k = c.P(f, {
						class: 'vk-t-btn-o',
					});
				W(k, h);
				l = c.P(f, ['vk-t-btn', Md]);
				W(l, h);
				c.U(k, l);
				c.U(a.Wa, k);
				iy(k);
				return k;
			}
			var c = a.A,
				d = a.Pc(),
				e = c.P(f, {
					dir: d ? ug : Ie,
					style: 'white-space: nowrap;',
				});
			a.I = c.P(f, 'vk-t', c.P(m, '', a.B.title), c.P(m, 'vk-ss'));
			a.I.style.textAlign = d ? 'right' : 'left';
			iy(a.I);
			c.U(e, a.I);
			!dy &&
				a.H &&
				((a.fa = c.P(
					'A',
					{
						class: 'vk-l-a',
						href: '',
					},
					'Full'
				)),
				c.U(a.I, a.fa),
				c.U(a.I, c.P(m, 'vk-ss', '|')),
				(a.W = c.P(
					'A',
					{
						class: 'vk-l-i',
						href: '',
					},
					'Accents'
				)),
				c.U(a.I, a.W),
				W(a.I, d ? 'vk-ea-r' : 'vk-ea-l'));
			a.Wa = c.P(f, 'vk-t-btns');
			c.U(e, a.Wa);
			var g = d ? 'paddingLeft' : 'paddingRight';
			a.Wa.style[d ? 'left' : 'right'] = '0';
			iy(a.Wa);
			jy && (a.Kb = b('vk-sf-hp', !0));
			ky && (a.pa = b('vk-sf-min'));
			a.ba = b('vk-sf-cl');
			a.ba.style[g] = '14px';
			return e;
		},
		ny = function (a) {
			var b = a.A.P(f);
			b.dir = b.style.direction = Ie;
			hk(
				a.B.dc,
				function (c) {
					c &&
						D(
							c,
							function (d, e) {
								var g = this.A.P(f);
								g.style.whiteSpace = 'nowrap';
								var h = !1;
								D(
									d,
									function (k) {
										k &&
											!this.R[k] &&
											((h = !0),
											(k = my(this, k)),
											0 == e &&
												k.setAttribute(
													'data-tooltip-align',
													't,c'
												),
											this.A.U(g, k));
									},
									this
								);
								h && this.A.U(b, g);
							},
							this
						);
				},
				a
			);
			return b;
		},
		my = function (a, b) {
			var c = ey(a, b),
				d = a.A.P('BUTTON', {
					id: 'K' + b,
					type: 'button',
					class: ui,
					style: 'visibility:' + (c ? '' : Zc),
				});
			c && a.A.U(d, c);
			typeof b === w
				? ((a.R[b] = d),
				  a.B.ec[b] && d.setAttribute('data-tooltip', a.B.ec[b]))
				: (a.G[b] = a.G[b] ? [a.G[b], d] : d);
			return d;
		},
		ey = function (a, b) {
			var c = a.A;
			if (typeof b === w) {
				var d = c.P(m);
				c.U(d, document.createTextNode(String(b)));
				return d;
			}
			if (9 == b || 13 == b) return null;
			d = c.P(m);
			if (oy[b]) return ds(d, ['vk-cap', Md, 'vk-sf-b', oy[b]]), d;
			if (273 == b)
				return ds(d, ['vk-cap', 'vk-sf-c273']), um(d, 'Ctrl + Alt'), d;
			var e = null;
			(b = a.B.Tc[a.Nb][String.fromCharCode(b)]) &&
				b[1] &&
				('S' == b[0]
					? ((e = Cm(c, b[1])), Vp(d, 'vk-cap'))
					: 'P' == b[0] &&
					  ((e = c.P('IMG', {
							src:
								'https://ssl.gstatic.com/inputtools/images/vk/layouts/' +
								a.B.id +
								'_' +
								b[1] +
								'.png',
					  })),
					  Vp(e, 'vk-cap-i')));
			e
				? (c.U(d, e), a.Pc() && (d.style.direction = ug))
				: (c.U(d, document.createTextNode('.')),
				  (d.style.visibility = Zc));
			return d;
		},
		py = function (a) {
			D(
				ak(ik(a.G)),
				function (b) {
					b.removeAttribute(Tb);
				},
				a
			);
		},
		qy = function (a) {
			D(
				ak(ik(a.G)),
				function (b) {
					b.setAttribute(Tb, 'true');
				},
				a
			);
		},
		Xx = function (a) {
			hk(
				a.B.ec,
				function (b) {
					D(
						b,
						function (c) {
							this.fc[c] = !0;
						},
						this
					);
				},
				a
			);
		},
		sy = function (a, b) {
			a = void 0 === a ? '' : a;
			b = void 0 === b ? !1 : b;
			R.call(this);
			this.G = null;
			this.I = !0;
			this.B = 0;
			this.O = this.T = this.R = this.A = null;
			this.aa = !0;
			this.W = this.ba = !1;
			this.H = new Qx();
			this.V = J();
			this.D = 0;
			this.L = !1;
			this.C = {};
			this.S = new S(this);
			this.F = up('vk');
			this.fa = {};
			this.ea = {};
			this.Ed = a;
			this.pa = b;
			this.H.ta(this);
			T(this.S, this.H, 'lat', this.oh, void 0);
			for (
				a = 0;
				(b = ' \u00a0\n\r`~!@#$%^&*()_+-=[]{}\\|;:\'",./<>?'.charAt(a));
				++a
			)
				this.fa[b] = !0;
			ry != Cw && (Mn(nl(ry)), (ry = Cw));
		},
		ty = function (a, b) {
			a.A &&
				(!a.I && b
					? a.F.Fc('st')
					: a.I && !b && (a.F.set(Fa, 'cl'), a.F.report()));
			a.I = b;
		},
		vy = function (a, b) {
			a.aa = b;
			a.A &&
				(b ||
					((a.B = 0), (a.D = 0), fy(a.A, uy(a.B)), cy(a.A, uy(a.D))),
				a.A.oa(b));
		},
		zy = function (a, b) {
			var c = wy(b.keyCode),
				d = xy(a.B, c, b);
			a.B != d && ((a.B = d), fy(a.A, uy(a.B)));
			d = xy(a.D, c, b);
			a.D != d && ((a.D = d), cy(a.A, uy(a.D)));
			if (a.B & 16) return (a.C[0] = a.C[c] = !1);
			d = !!(a.B & 4);
			var e = !!(a.B & 2),
				g = !!(a.B & 16);
			if (17 == c || 18 == c || 16 == c || 20 == c)
				return (a.C[0] = a.C[c] = 20 == c);
			if (g || d != e) return (a.C[0] = a.C[c] = !1);
			a.F.Bb('kkc');
			gy(a.A, c);
			b = yy(a, c, b.charCode);
			return (a.C[0] = a.C[c] = b);
		},
		By = function (a, b) {
			if (a.C[0]) return !0;
			if (a.A.H) return yy(a, b.keyCode, b.charCode);
			if (Im && Q) {
				var c = Ay[b.charCode];
				if (c) return yy(a, c, b.charCode);
			}
			return a.C[0];
		},
		xy = function (a, b, c) {
			a &= 776;
			20 == b && (a = Im && M ? a | 8 : a ^ 8);
			if (16 == b || c.shiftKey) a |= 1;
			if (18 == b || c.altKey) a |= 2;
			if (17 == b || c.ctrlKey) a |= 4;
			if (91 == b || c.metaKey) a |= 16;
			return a;
		},
		yy = function (a, b, c, d) {
			if (!a.G) return !1;
			(c = Zx(a.A, b, c)) && !a.fa[c]
				? a.L || ((a.L = !0), a.F.Bb('wc'))
				: a.L && 8 != b && (a.L = !1);
			if (a.B & 256 || a.B & 512) {
				var e = a.B;
				a.ba || (e &= -257);
				a.W || (e &= -513);
				e != a.B && ((a.B = e), fy(a.A, uy(a.B)));
			}
			if ('' == c) return !0;
			if (null == c && 8 != b) return !1;
			if (c)
				if (Vx(a.H)) {
					e = a.G.Da(20) || '';
					var g = Tx(a.H),
						h;
					if (g)
						if (c) {
							Ox(g, e);
							e = g.A;
							e.ua &&
								(h = g.B.transform(
									e.Fa.text,
									e.Fa.Oa,
									e.ua + c
								)) &&
								0 > h.back &&
								(h = null);
							if (h) {
								var k = e.Fa.text;
								k = k.slice(0, k.length - h.back);
								k += h.Xa;
								h.back = e.current.text.length;
								h.Xa = k;
							} else
								h = g.B.transform(
									e.current.text,
									e.current.Oa,
									c
								);
							Lx(g.B, e.ua + c)
								? (e.ua || (e.Fa = nk(e.current)), (e.ua += c))
								: Lx(g.B, c)
								? ((e.Fa = nk(e.current)), (e.ua = c))
								: ((e.Fa.text = ''),
								  (e.Fa.Oa = -1),
								  (e.ua = ''));
							g = e.current.text;
							k = e.current.Oa;
							h
								? ((g = g.slice(0, g.length - h.back)),
								  (g += h.Xa),
								  (k = g.length))
								: ((g += c),
								  (h = {
										back: 0,
										Xa: c,
								  }));
							c = g.lastIndexOf(' ');
							0 <= c &&
								((g = g.slice(c + 1)),
								(k = k > c ? k - (c + 1) : -1));
							e.current.text = g;
							e.current.Oa = k;
						} else h = null;
					else h = null;
					c = h;
				} else
					c = {
						back: 0,
						Xa: c,
					};
			else if (
				((h = a.G.Da(20) || ''),
				1 < h.length
					? ((c = h.charCodeAt(h.length - 2)),
					  (e = h.charCodeAt(h.length - 1)),
					  (c =
							55296 <= c &&
							56319 >= c &&
							56320 <= e &&
							57343 >= e))
					: (c = !1),
				(c = {
					back: c ? 2 : 1,
					Xa: '',
				}),
				Vx(a.H) && ((g = c.back), (e = Tx(a.H))))
			)
				(g = void 0 === g ? 1 : g),
					(g = void 0 === g ? 1 : g),
					Ox(e, h),
					(h = e.A),
					h.current.text
						? ((h.current.text = h.current.text.slice(0, -g)),
						  h.current.Oa > h.current.text.length &&
								(h.current.Oa = h.current.text.length),
						  h.ua && (h.ua = h.ua.slice(0, -1)),
						  h.ua ||
								(h.Fa = {
									text: '',
									Oa: -1,
								}))
						: ((h.Fa = {
								text: '',
								Oa: -1,
						  }),
						  (h.ua = ''),
						  (h.current = nk(h.Fa)));
			if (8 == b && !d && L && eo(11)) return !1;
			a.J(new dw('kcs', c.Xa));
			a.G.Ia(c.Xa, c.back);
			a.J(new dw('kce', c.Xa));
			return !0;
		},
		wy = function (a) {
			Cy && ((91 == a && M) || (224 == a && Q)) && (a = 18);
			a = Dy[a] || a;
			var b = Ey.en;
			b && (a = b[String.fromCharCode(a)] || a);
			return a;
		},
		uy = function (a) {
			var b = '';
			if (a & 1 || a & 256) b += 's';
			if ((a & 2 && a & 4) || a & 512) b += 'c';
			a & 8 && (b += 'l');
			return b;
		},
		Fy = function (a) {
			du.call(this, a);
			this.B = new sy(jy, !1);
			this.K = [t, je, u, Ye];
			this.F = new S(this);
			this.B.V = Fo;
			U(this.F, this.B, ['kc', 'kmi', 'lld'], this.Ug);
			T(this.F, this.B, 'kcs', this.mh, void 0);
			T(this.F, this.B, 'kce', this.lh, void 0);
			U(this.F, Fo.A, [t, je], this.Uf);
		},
		Hy = function (a, b) {
			b = !X && b;
			vy(a.B, b);
			a.active && (Gy = b);
		},
		Iy = function (a, b) {
			D(['bar', 'vk', 'hwt'], function (d) {
				var e = tp.qa(),
					g = new zp(d);
				e.A[d] && e.A[d].da();
				e.A[d] = g;
			});
			var c = [
				function () {
					Du = a;
					return new Qw(b);
				},
				function () {
					return new Fy(b);
				},
			];
			X ||
				((L ? eo(9) : yp()) &&
					c.push(function () {
						return new Gx(new cu(), b);
					}));
			return new fu(c);
		},
		Jy = function (a, b, c) {
			P.call(this, a, c);
			this.value = b;
		},
		Ly = function (a) {
			hk(a, function (b, c) {
				switch (c) {
					case 'EnableUserDictionary':
						uu = b;
						break;
					case 'ShowOnScreenKeyboard':
						Gy = b;
						break;
					case 'ShowStatusBar':
						Ky = b;
				}
			});
			Io.qa().J(new Jy('psa', a));
		},
		My = function () {
			return yp() && /\.(google|gmail|youtube)\./.test(Mp.location.host);
		},
		Ny = function (a, b) {
			var c = b.target;
			b = {};
			if (c.Qc())
				try {
					var d = JSON.parse(c.nd());
					if (d && 'OK' == d.header.error_code) {
						var e = d.body.data;
						for (d = 0; d < e.length; d++) {
							var g = e[d].item;
							b[g.key] = !!g.value[0].bool_value;
						}
						a && a(b);
					}
				} catch (h) {}
		},
		Oy = function (a) {
			if (My()) {
				var b = [];
				hk(a, function (c, d) {
					b.push({
						key: d,
						value: [
							{
								bool_value: c,
							},
						],
					});
				});
				a = nk(Mu);
				Ut(
					gd + Ap,
					null,
					JSON.stringify({
						header: {
							method: 'Update',
							service: 'PrefService',
						},
						body: {
							user: {},
							client: 'cloud',
							item: b,
						},
					}),
					a
				);
			}
		},
		Ry = function (a, b, c) {
			R.call(this);
			this.I = c || Io.qa();
			this.A = b || Iy(Py(), this.I);
			this.L = !1;
			this.H = {};
			this.G = a ? a.shortcut : '';
			this.C = Fo;
			this.T = {
				kix: 1,
				punch: 1,
				trix: 1,
			};
			this.D = new S(this);
			this.F = new pp(Fo.A);
			this.G && D(this.G.split(','), this.og, this);
			Qy && !this.Ae && (Mn(Yr(Qy)), (this.Ae = !0));
			this.I.ta(this);
			M &&
				((this.B = this.C.M(la)),
				this.B ||
					((this.B = this.C.P(f, {
						id: la,
					})),
					(this.B.style.display = Cf),
					this.B.setAttribute(oa, !1),
					this.C.A.body.appendChild(this.B)),
				Nr(this.mg, 0, this));
			a = {};
			bt(Zb, ((a[33] = !0), a));
			T(this.D, this.I, 'uf', this.af, void 0);
			/^(kix|trix|punch)/.test(Ap) &&
				[Zb, vc, Lb, ec, lg, vf, sd].forEach(function () {
					var d = {};
					bt(Zb, ((d[10] = !1), (d[29] = !1), d));
				});
		},
		Sy = function (a, b) {
			if (rj(b)) {
				var c = a.A.gb();
				Sj(c, [tc, ab]);
				Vj(c);
				D(
					b,
					function (d) {
						var e = this.H[vj(d)];
						e &&
							(delete this.H[vj(d)],
							this.A.Eb(e),
							e.C &&
								(e.G.tagName.toUpperCase() == ma ||
								(L && !Ql(9))
									? to(e.F, e.C, c, e.Vb, op)
									: vs(e.C, c, e.Vb, e)),
							this.G &&
								D(
									this.G.split(','),
									function (g) {
										ys(e, g, 'tita');
									},
									this
								),
							e.da());
					},
					a
				);
			}
		},
		Uy = function (a, b, c) {
			if (c || !a.A.active || a.A.C != b)
				a.Aa(nb, b, !0, c),
					a.L && a.Aa('cd', qt(b) ? ug : Ie),
					a.B && (a.B.setAttribute(oa, !0), Ty(a, 'suc'));
			a.lf &&
				/^(gmail|kix|punch|trix|youtube|blogger|orkut)/.test(Ap) &&
				((a.lf = !1),
				My() &&
					((a = nk(Mu)),
					Ut(
						gd + Ap,
						yj(Ny, Ly),
						JSON.stringify({
							header: {
								method: 'Lookup',
								service: 'PrefService',
								deadline: 10,
							},
							body: {
								client: 'cloud',
							},
						}),
						a
					)));
		},
		Vy = function (a, b) {
			b = void 0 === b ? null : b;
			if (a.A.active || a.A.C != b)
				a.Aa(nb, b, !1),
					!a.B ||
						Ap in a.T ||
						(a.B.setAttribute(oa, !1), Ty(a, 'rc'));
		},
		Py = function () {
			var a = new zp('ppe'),
				b = tp.qa();
			b.A.ppe && b.A.ppe.da();
			b.A.ppe = a;
			return new It();
		},
		Ty = function (a, b) {
			var c = a.C.M(ka);
			c &&
				((a = a.C.A.createEvent('Event')),
				a.initEvent(b, !0, !0),
				c.dispatchEvent(a));
		},
		Wy = function () {
			this.B = [];
			this.C = !1;
		},
		Xy = function (a, b, c) {
			V.call(this, Fo);
			this.G = !0;
			this.I = a;
			this.L = b;
			this.O = !!c;
			this.H = new S(this);
		},
		Yy = function () {
			Y.call(this, void 0, void 0, Fo);
			this.B = [];
		},
		Zy = function (a, b, c, d) {
			b = new Xy(b, c, d);
			b.ha();
			Oj(a.B, b);
			return b;
		},
		$y = function () {
			N.call(this);
			this.A = new S(this);
		},
		az = function (a, b) {
			P.call(this, Ga);
			this.A = a;
			this.F = b;
		},
		bz = function (a) {
			P.call(this, 'vc');
			this.A = a;
		},
		cz = function (a, b) {
			P.call(this, 'ecd');
			this.F = a;
			this.A = Tj(arguments, 1);
		},
		dz = function (a, b, c, d) {
			Y.call(this, void 0, void 0, d || Fo);
			this.D = a;
			this.I = b;
			this.H = {};
			this.V = [];
			this.fa = c;
			this.L = null;
			this.cb = !1;
			this.ba = !0;
			this.B = new S(this);
			this.ea = new $y();
		},
		ez = function (a, b, c) {
			var d = a.A.P('LI', {
				class: Od,
				style: bh,
			});
			Oj(a.V, {
				Hc: d,
				className: Pd,
			});
			var e = a.A.P(
				m,
				{
					class: 'ita-kd-menuitem-setting ita-kd-menuitem-span',
				},
				b
			);
			a.A.U(d, e);
			c && Kn(d, !1);
			a.H[b] = {
				name: e,
			};
			return d;
		},
		fz = function (a, b) {
			a.gd();
			W(b, Pd);
		},
		hz = function (a) {
			a = nm(gz(a));
			if (!a || 0 == a.length) return null;
			for (var b = 0; b < a.length; b++) {
				var c = a[b];
				if (Wp(c, Pd)) return c;
			}
			return null;
		},
		iz = function (a) {
			a.oa(!1);
			a.J(new bz(!1));
		},
		gz = function (a) {
			return X ? a.M().firstChild : a.M();
		},
		jz = function (a, b, c, d) {
			wo.call(this, a, b);
			this.D = c ? 5 : 0;
			this.C = d || void 0;
		},
		kz = function (a, b) {
			a & 48 && (b ^= 4);
			a & 192 && (b ^= 1);
			return b;
		},
		lz = function (a, b) {
			Go.call(this, b);
			this.D = a;
			this.R =
				this.pa =
				this.B =
				this.I =
				this.G =
				this.ba =
				this.ea =
				this.Z =
					null;
		},
		mz = function (a) {
			a.B &&
				!X &&
				new jz(a.M(), a.W ? 13 : 9, !0).Ma(a.B.M(), a.W ? 12 : 8);
		},
		nz = function (a) {
			P.call(this, 'ita_l');
			this.l10n = a;
		},
		rz = function (a) {
			var b;
			b || (b = oz[Ap]);
			a = pz(a);
			var c = [];
			(a = qz[a]) &&
				D(a, function (d) {
					(b && E(Gp(d, 6), b)) || c.push(Gp(d, 2));
				});
			return c;
		},
		pz = function (a) {
			a = a.replace(/_/g, '-').toLowerCase();
			if (0 == a.indexOf('zh-tw')) return 'zh-Hant';
			if (0 == a.indexOf('zh-hk')) return Fi;
			if ('zh' == a || 0 == a.indexOf('zh-cn')) return Gi;
			if ('pt' == a) return Zf;
			var b = a.split(/[\-]/g),
				c = '';
			a = b[0];
			'iw' == a && (a = Qc);
			qz[a] && (c = a);
			for (var d = 1; d < b.length; d++) {
				var e = b[d];
				2 == e.length
					? (e = e.toUpperCase())
					: 4 == e.length &&
					  (e = e.charAt(0).toUpperCase() + e.slice(1));
				a += '-' + e;
				qz[a] && (c = a);
			}
			return c;
		},
		vz = function (a) {
			N.call(this);
			this.C = (a = pz(a)) || q;
			this.B = {};
			var b = E(sz, this.C) ? this.C : q;
			a = Qs(
				Mk(tz, {
					langCode: b || this.C,
				})
			);
			var c = A(this.Ve, this);
			Is(a, c, null, void 0);
			c = A(this.nh, this);
			Is(a, null, c, void 0);
			a = Qs(
				Mk(uz, {
					langCode: b || this.C,
				})
			);
			b = A(this.Xe, this);
			Is(a, b, null, void 0);
			b = A(this.ph, this);
			Is(a, null, b, void 0);
		},
		wz = function (a, b) {
			var c = a.B[b];
			!c &&
				(b = lt(b)) &&
				((b = b.A),
				(b = pz(b)),
				(c = a.B[b]),
				c || ((b = b.split('_')[0]), (c = a.B[b])));
			return c || '';
		},
		xz = function (a) {
			if (google.ime.l10n.Messages && a) {
				var b = 'MSG_' + a.replace(/\s/g, '_').toUpperCase();
				if ((b = google.ime.l10n.Messages[b])) return b;
			}
			return a;
		},
		yz = function () {
			N.call(this);
			this.A = {};
		},
		Bz = function (a) {
			N.call(this);
			a &&
				(void 0 !== a.kbdHelpUrl && (jy = a.kbdHelpUrl),
				void 0 !== a.kbdMinMax && (ky = !!a.kbdMinMax),
				void 0 !== a.keyboardDefaultLocation &&
					($x = a.keyboardDefaultLocation),
				void 0 !== a.handwritingDefaultLocation &&
					(Bx = a.handwritingDefaultLocation),
				void 0 !== a.showStatusBar && (Ky = !!a.showStatusBar),
				void 0 !== a.onScreenKeyboard && (Gy = !!a.onScreenKeyboard),
				void 0 !== a.enableUserDict && (uu = !!a.enableUserDict),
				void 0 !== a.applicationName && (Ap = a.applicationName),
				void 0 !== a.enableGlobalEventDelegate &&
					(zz = !!a.enableGlobalEventDelegate),
				void 0 !== a.multipleInstance &&
					(this.G = !!a.multipleInstance),
				void 0 !== a.mobile && (X = !!a.mobile));
			this.D = [];
			this.G
				? ((this.B = new R()), Io.qa(), Jo.push(this.B))
				: (this.B = Io.qa());
			this.A = new Wy();
			this.K = new S(this);
			this.C = new Ry(a, void 0, this.B);
			this.F = [];
			U(
				U(
					U(
						U(
							U(
								U(
									U(
										U(
											U(
												T(
													this.K,
													this.B,
													'kc',
													this.Te,
													void 0
												),
												this.B,
												'kmi',
												this.rh
											),
											this.B,
											tc,
											this.fh
										),
										this.B,
										'ecd',
										this.eh
									),
									this.C,
									'tt',
									this.Hh
								),
								this.B,
								'g',
								this.Te
							),
							this.B,
							Ga,
							A(this.Bh, this)
						),
						this.B,
						'bind',
						A(this.Ch, this)
					),
					this.B,
					'visi',
					A(this.Dh, this)
				),
				this.B,
				'slc',
				this.Zd
			);
			Az(this);
			this.G = !1;
		},
		Ez = function (a, b, c) {
			b = {
				type: 'citc',
				prevInputToolName: b,
				prevInputToolActive: c,
				currInputToolName: a.A.A.code,
				currInputToolActive: a.A.C,
			};
			if (0 < a.D.length) {
				c = [];
				for (var d = 0; d < a.D.length; ++d)
					null != a.D[d].id && Oj(c, a.D[d].id);
				b.attachedElements = c;
			}
			a.B.J(b);
			b = a.A.A.code;
			a = a.A.C;
			if (Cz != b || Dz != a) (Cz = b), (Dz = a), ss.J(new P('b'));
		},
		Fz = function (a) {
			a.B.J({
				type: 'itlu',
				inputTools: a.A.B,
			});
		},
		Gz = function (a) {
			a.B.J({
				type: 'pelu',
				elements: a.D,
			});
		},
		Az = function (a) {
			0 == a.D.length || a.C.register(a.D);
			0 == a.F.length || Sy(a.C, a.F);
			Hz(a, a.A.C, a.A.A);
		},
		Hz = function (a, b, c) {
			if (!b || (c && lt(c.code))) {
				b ? Uy(a.C, c, void 0) : Vy(a.C, c || a.A.A);
				var d = a.A.A,
					e = d ? d.code : null,
					g = a.A.C;
				a.A.A = c;
				a.A.C = b;
				(d == a.A.A && g == a.A.C) || Ez(a, e, g);
			}
		},
		gj =
			typeof Object.defineProperties == r
				? Object.defineProperty
				: function (a, b, c) {
						if (a == Array.prototype || a == Object.prototype)
							return a;
						a[b] = c.value;
						return a;
				  },
		fj = ej(this),
		ij =
			typeof Object.create == r
				? Object.create
				: function (a) {
						function b() {}
						b.prototype = a;
						return new b();
				  },
		Iz;
	if (typeof Object.setPrototypeOf == r) Iz = Object.setPrototypeOf;
	else {
		var Jz;
		a: {
			var Kz = {
					qf: !0,
				},
				Lz = {};
			try {
				Lz.__proto__ = Kz;
				Jz = Lz.qf;
				break a;
			} catch (a) {}
			Jz = !1;
		}
		Iz = Jz
			? function (a, b) {
					a.__proto__ = b;
					if (a.__proto__ !== b)
						throw new TypeError(a + ' is not extensible');
					return a;
			  }
			: null;
	}
	var jj = Iz;
	hj('Array.prototype.fill', function (a) {
		return a
			? a
			: function (b, c, d) {
					var e = this.length || 0;
					0 > c && (c = Math.max(0, e + c));
					if (null == d || d > e) d = e;
					d = Number(d);
					0 > d && (d = Math.max(0, e + d));
					for (c = Number(c || 0); c < d; c++) this[c] = b;
					return this;
			  };
	});
	hj('Int8Array.prototype.fill', kj);
	hj('Uint8Array.prototype.fill', kj);
	hj('Uint8ClampedArray.prototype.fill', kj);
	hj('Int16Array.prototype.fill', kj);
	hj('Uint16Array.prototype.fill', kj);
	hj('Int32Array.prototype.fill', kj);
	hj('Uint32Array.prototype.fill', kj);
	hj('Float32Array.prototype.fill', kj);
	hj('Float64Array.prototype.fill', kj);
	var Mz =
		typeof Object.assign == r
			? Object.assign
			: function (a, b) {
					for (var c = 1; c < arguments.length; c++) {
						var d = arguments[c];
						if (d)
							for (var e in d)
								Object.prototype.hasOwnProperty.call(d, e) &&
									(a[e] = d[e]);
					}
					return a;
			  };
	hj('Object.assign', function (a) {
		return a || Mz;
	});
	var $t = $t || {},
		z = this || self,
		oj = /^[\w+/_-]+[=]{0,2}$/,
		mj = null,
		tj = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
		uj = 0;
	(function () {
		function a(h) {
			this.t = {};
			this.tick = function (k, l, p) {
				this.t[k] = [void 0 != p ? p : new Date().getTime(), l];
				if (void 0 == p)
					try {
						window.console.timeStamp('CSI/' + k);
					} catch (B) {}
			};
			this.getStartTickTime = function () {
				return this.t.start[0];
			};
			this.tick(ah, null, h);
		}
		var b;
		if (window.performance)
			var c = (b = window.performance.timing) && b.responseStart;
		var d = 0 < c ? new a(c) : new a();
		window.jstiming = {
			Timer: a,
			load: d,
		};
		if (b) {
			var e = b.navigationStart;
			0 < e && c >= e && (window.jstiming.srt = c - e);
		}
		if (b) {
			var g = window.jstiming.load;
			0 < e &&
				c >= e &&
				(g.tick('_wtsrt', void 0, e),
				g.tick('wtsrt_', '_wtsrt', c),
				g.tick('tbsd_', 'wtsrt_'));
		}
		try {
			(b = null),
				window.chrome &&
					window.chrome.csi &&
					((b = Math.floor(window.chrome.csi().pageT)),
					g &&
						0 < e &&
						(g.tick('_tbnd', void 0, window.chrome.csi().startE),
						g.tick('tbnd_', '_tbnd', e))),
				null == b &&
					window.gtbExternal &&
					(b = window.gtbExternal.pageT()),
				null == b &&
					window.external &&
					((b = window.external.pageT),
					g &&
						0 < e &&
						(g.tick('_tbnd', void 0, window.external.startE),
						g.tick('tbnd_', '_tbnd', e))),
				b && (window.jstiming.pt = b);
		} catch (h) {}
	})();
	C(Cj, Error);
	Cj.prototype.name = 'CustomError';
	var Wl;
	C(Dj, Cj);
	Dj.prototype.name = 'AssertionError';
	var ck = String.prototype.trim
			? function (a) {
					return a.trim();
			  }
			: function (a) {
					return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
			  },
		tl = /&/g,
		ul = /</g,
		vl = />/g,
		wl = /"/g,
		xl = /'/g,
		yl = /\x00/g,
		sl = /[\x00&<>"']/;
	var fk;
	a: {
		var Nz = z.navigator;
		if (Nz) {
			var Oz = Nz.userAgent;
			if (Oz) {
				fk = Oz;
				break a;
			}
		}
		fk = '';
	}
	var ok =
		'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
			' '
		);
	var zk;
	Dk.prototype.nb = !0;
	Dk.prototype.$a = function () {
		return this.A;
	};
	var Ck = {},
		Bk = {},
		Cw = Fk('');
	var Pz =
			/[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
		Qz =
			/^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]/,
		Rz = /^http:\/\/.*/,
		Sz = /\s+/,
		Tz = /[\d\u06f0-\u06f9]/;
	Hk.prototype.nb = !0;
	Hk.prototype.$a = function () {
		return this.A.toString();
	};
	var Kk = /%{(\w+)}/g,
		Jk =
			/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
		Uz = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
		Gk = {};
	Pk.prototype.nb = !0;
	Pk.prototype.$a = function () {
		return this.A.toString();
	};
	var Tk =
			/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
		Sk = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
		Rk = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		Ok = {},
		gl = new Pk(Da, Ok);
	Wk.prototype.nb = !0;
	Wk.prototype.$a = function () {
		return this.A;
	};
	var Vk = {},
		Zk = new Wk('', Vk),
		cl = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
		bl =
			/\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
		al =
			/\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
		dl = /\/\*/;
	var hl = {};
	il.prototype.$a = function () {
		return this.A;
	};
	var ml = new il('', hl);
	pl.prototype.nb = !0;
	pl.prototype.$a = function () {
		return this.A.toString();
	};
	var ol = {},
		Vz = new pl((z.trustedTypes && z.trustedTypes.emptyHTML) || '', 0, ol);
	var El = (function (a) {
		var b = !1,
			c;
		return function () {
			b || ((c = a()), (b = !0));
			return c;
		};
	})(function () {
		var a = document.createElement('div'),
			b = document.createElement('div');
		b.appendChild(document.createElement('div'));
		a.appendChild(b);
		b = a.firstChild.firstChild;
		a.innerHTML = ql(Vz);
		return !b.parentElement;
	});
	var Dl = /&([^;\s<&]+);?/g,
		Wz = (2147483648 * Math.random()) | 0;
	Jl[' '] = pj;
	var wn = F(ua),
		L = sk(),
		No = F(ha),
		no = No || L,
		Q =
			F('Gecko') &&
			!(-1 != fk.toLowerCase().indexOf('webkit') && !F(ha)) &&
			!(F('Trident') || F('MSIE')) &&
			!F(ha),
		M = -1 != fk.toLowerCase().indexOf('webkit') && !F(ha),
		Xz = M && F('Mobile'),
		Im = F('Macintosh'),
		Zo = F('Windows'),
		Cy = F('Linux') || F('CrOS'),
		Yz = F('Android'),
		Zz = Hl(),
		$z = F('iPad'),
		aA = F('iPod'),
		ko = Il(),
		bA;
	a: {
		var cA = '',
			dA = (function () {
				var a = fk;
				if (Q) return /rv:([^\);]+)(\)|;)/.exec(a);
				if (No) return /Edge\/([\d\.]+)/.exec(a);
				if (L) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
				if (M) return /WebKit\/(\S+)/.exec(a);
				if (wn) return /(?:Version)[ \/]?(\S+)/.exec(a);
			})();
		dA && (cA = dA ? dA[1] : '');
		if (L) {
			var eA = Nl();
			if (null != eA && eA > parseFloat(cA)) {
				bA = String(eA);
				break a;
			}
		}
		bA = cA;
	}
	var Ol = bA,
		Ll = {},
		fA;
	if (z.document && L) {
		var gA = Nl();
		fA = gA ? gA : parseInt(Ol, 10) || void 0;
	} else fA = void 0;
	var Pl = fA;
	var gm = !L || Ql(9),
		mm = (!Q && !L) || (L && Ql(9)) || (Q && G('1.9.1')),
		hA = L && !G('9'),
		Cq = L && !Ql(9);
	H.prototype.hc = function (a) {
		return (
			a instanceof H &&
			(this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
		);
	};
	H.prototype.ceil = function () {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this;
	};
	H.prototype.floor = function () {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this;
	};
	H.prototype.round = function () {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this;
	};
	Sl.prototype.aspectRatio = function () {
		return this.width / this.height;
	};
	Sl.prototype.ceil = function () {
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this;
	};
	Sl.prototype.floor = function () {
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this;
	};
	Sl.prototype.round = function () {
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this;
	};
	var Yl = {
			cellpadding: 'cellPadding',
			cellspacing: 'cellSpacing',
			colspan: 'colSpan',
			frameborder: 'frameBorder',
			height: 'height',
			maxlength: 'maxLength',
			nonce: 'nonce',
			role: 'role',
			rowspan: 'rowSpan',
			type: 'type',
			usemap: 'useMap',
			valign: 'vAlign',
			width: 'width',
		},
		zm = {
			SCRIPT: 1,
			STYLE: 1,
			HEAD: 1,
			IFRAME: 1,
			OBJECT: 1,
		},
		Am = {
			IMG: ' ',
			BR: '\n',
		};
	x = Vl.prototype;
	x.M = function (a) {
		return Xl(this.A, a);
	};
	x.P = function (a, b, c) {
		return em(this.A, arguments);
	};
	x.U = function (a, b) {
		a.appendChild(b);
	};
	x.ia = function (a, b) {
		im(I(a), a, arguments, 1);
	};
	x.Mc = km;
	x.ab = lm;
	x.yf = tm;
	x.Qh = um;
	N.prototype.Y = !1;
	N.prototype.da = function () {
		this.Y || ((this.Y = !0), this.N());
	};
	N.prototype.N = function () {
		if (this.Ha) for (; this.Ha.length; ) this.Ha.shift()();
	};
	P.prototype.stopPropagation = function () {
		this.C = !0;
	};
	P.prototype.preventDefault = function () {
		this.defaultPrevented = !0;
	};
	var Lm = !L || Ql(9),
		bn = !L || Ql(9),
		iA = L && !G('9'),
		fn = (function () {
			if (!z.addEventListener || !Object.defineProperty) return !1;
			var a = !1,
				b = Object.defineProperty({}, 'passive', {
					get: function () {
						a = !0;
					},
				});
			try {
				z.addEventListener('test', pj, b),
					z.removeEventListener('test', pj, b);
			} catch (c) {}
			return a;
		})();
	var Qr = L ? 'textinput' : 'textInput',
		yv = {
			bc: Ye,
			cc: af,
			Ec: 'mousecancel',
			Wo: Ze,
			Yo: v,
			Xo: $e,
			Uo: 'mouseenter',
			Vo: 'mouseleave',
		};
	C(Km, P);
	var Mm = [1, 4, 2],
		Jm = {
			2: 'touch',
			3: 'pen',
			4: 'mouse',
		};
	Km.prototype.stopPropagation = function () {
		Km.ca.stopPropagation.call(this);
		this.A.stopPropagation
			? this.A.stopPropagation()
			: (this.A.cancelBubble = !0);
	};
	Km.prototype.preventDefault = function () {
		Km.ca.preventDefault.call(this);
		var a = this.A;
		if (a.preventDefault) a.preventDefault();
		else if (((a.returnValue = !1), iA))
			try {
				if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode))
					a.keyCode = -1;
			} catch (b) {}
	};
	var Om = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
		Qm = 0;
	Tm.prototype.add = function (a, b, c, d, e) {
		var g = a.toString();
		a = this.A[g];
		a || ((a = this.A[g] = []), this.B++);
		var h = Um(a, b, d, e);
		-1 < h
			? ((b = a[h]), c || (b.Gc = !1))
			: ((b = new Rm(b, this.src, g, !!d, e)), (b.Gc = c), a.push(b));
		return b;
	};
	var dn = 'closure_lm_' + ((1e6 * Math.random()) | 0),
		mn = {},
		hn = 0,
		on = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);
	C(R, N);
	R.prototype[Om] = !0;
	x = R.prototype;
	x.ta = function (a) {
		this.ub = a;
	};
	x.addEventListener = function (a, b, c, d) {
		Zm(this, a, b, c, d);
	};
	x.removeEventListener = function (a, b, c, d) {
		kn(this, a, b, c, d);
	};
	x.J = function (a) {
		var b,
			c = this.ub;
		if (c) for (b = []; c; c = c.ub) b.push(c);
		c = this.kg;
		var d = a.type || a;
		if (typeof a === w) a = new P(a, c);
		else if (a instanceof P) a.target = a.target || c;
		else {
			var e = a;
			a = new P(d, c);
			pk(a, e);
		}
		e = !0;
		if (b)
			for (var g = b.length - 1; !a.C && 0 <= g; g--) {
				var h = (a.B = b[g]);
				e = pn(h, d, !0, a) && e;
			}
		a.C ||
			((h = a.B = c),
			(e = pn(h, d, !0, a) && e),
			a.C || (e = pn(h, d, !1, a) && e));
		if (b)
			for (g = 0; !a.C && g < b.length; g++)
				(h = a.B = b[g]), (e = pn(h, d, !1, a) && e);
		return e;
	};
	x.N = function () {
		R.ca.N.call(this);
		if (this.K) {
			var a = this.K,
				b = 0,
				c;
			for (c in a.A) {
				for (var d = a.A[c], e = 0; e < d.length; e++) ++b, Sm(d[e]);
				delete a.A[c];
				a.B--;
			}
		}
		this.ub = null;
	};
	var Op = window.document,
		Mp = window,
		Fo = J(window.document),
		ss = new R(),
		Cz = '',
		Dz = !1;
	qn.prototype.ceil = function () {
		this.top = Math.ceil(this.top);
		this.right = Math.ceil(this.right);
		this.bottom = Math.ceil(this.bottom);
		this.left = Math.ceil(this.left);
		return this;
	};
	qn.prototype.floor = function () {
		this.top = Math.floor(this.top);
		this.right = Math.floor(this.right);
		this.bottom = Math.floor(this.bottom);
		this.left = Math.floor(this.left);
		return this;
	};
	qn.prototype.round = function () {
		this.top = Math.round(this.top);
		this.right = Math.round(this.right);
		this.bottom = Math.round(this.bottom);
		this.left = Math.round(this.left);
		return this;
	};
	rn.prototype.ceil = function () {
		this.left = Math.ceil(this.left);
		this.top = Math.ceil(this.top);
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this;
	};
	rn.prototype.floor = function () {
		this.left = Math.floor(this.left);
		this.top = Math.floor(this.top);
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this;
	};
	rn.prototype.round = function () {
		this.left = Math.round(this.left);
		this.top = Math.round(this.top);
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this;
	};
	var vn = {},
		On = Q ? 'MozUserSelect' : M || No ? 'WebkitUserSelect' : null,
		Wn = {
			thin: 2,
			medium: 4,
			thick: 6,
		},
		Yn = /[^\d]+$/,
		Zn = {
			cm: 1,
			in: 1,
			mm: 1,
			pc: 1,
			pt: 1,
		},
		$n = {
			em: 1,
			ex: 1,
		};
	var lo = (function () {
		if (Zo) {
			var a = /Windows NT ([0-9.]+)/;
			return (a = a.exec(fk)) ? a[1] : '0';
		}
		return Im
			? ((a = /1[0|1][_.][0-9_.]+/),
			  (a = a.exec(fk)) ? a[0].replace(/_/g, '.') : '10')
			: Yz
			? ((a = /Android\s+([^\);]+)(\)|;)/), (a = a.exec(fk)) ? a[1] : '')
			: Zz || $z || aA
			? ((a = /(?:iPhone|CPU)\s+OS\s+(\S+)/),
			  (a = a.exec(fk)) ? a[1].replace(/_/g, '.') : '')
			: '';
	})();
	var vp = tk(),
		jA = Hl() || F('iPod'),
		wp = F('iPad'),
		xp = F('Android') && !(uk() || tk() || F(ua) || F('Silk')),
		mo = uk(),
		jo =
			F('Safari') &&
			!(
				uk() ||
				F('Coast') ||
				F(ua) ||
				F(ha) ||
				F('Edg/') ||
				F('OPR') ||
				tk() ||
				F('Silk') ||
				F('Android')
			) &&
			!Il();
	var co = (function () {
		if (vp) return bo(/Firefox\/([0-9.]+)/);
		if (L || No || wn) return Ol;
		if (mo) return Il() ? bo(/CriOS\/([0-9.]+)/) : bo(/Chrome\/([0-9.]+)/);
		if (jo && !Il()) return bo(/Version\/([0-9.]+)/);
		if (jA || wp) {
			var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(fk);
			if (a) return a[1] + '.' + a[2];
		} else if (xp)
			return (a = bo(/Android\s+([0-9.]+)/))
				? a
				: bo(/Version\/([0-9.]+)/);
		return '';
	})();
	var Ap = 'jsapi',
		jy = '',
		ky = !1,
		Ky = !0,
		$x = 13,
		Bx = 13,
		Sr = !0,
		op = !L || G(9),
		Gy = !0,
		uu = !1,
		Wx = '',
		zz = !0,
		X = Xz,
		dy = !1;
	y(oo, P);
	oo.prototype.M = function () {
		return this.A;
	};
	y(po, P);
	C(S, N);
	var ro = [];
	S.prototype.N = function () {
		S.ca.N.call(this);
		uo(this);
	};
	S.prototype.handleEvent = function () {
		throw Error('EventHandler.handleEvent not implemented');
	};
	vo.prototype.Ma = function () {};
	C(wo, vo);
	wo.prototype.Ma = function (a, b, c) {
		io(this.A, this.B, a, b, void 0, c, this.F);
	};
	qj(xo);
	xo.prototype.A = 0;
	C(V, R);
	V.prototype.lg = xo.qa();
	var yo = null;
	x = V.prototype;
	x.M = function () {
		return this.C;
	};
	x.ta = function (a) {
		if (this.aa && this.aa != a) throw Error('Method not supported');
		V.ca.ta.call(this, a);
	};
	x.$ = function () {
		this.C = hm(this.A.A, f);
	};
	x.ha = function (a) {
		if (this.Ta) throw Error('Component already rendered');
		this.C || this.$();
		a ? a.insertBefore(this.C, null) : this.A.A.body.appendChild(this.C);
		(this.aa && !this.aa.Ta) || this.X();
	};
	x.X = function () {
		this.Ta = !0;
		Do(this, function (a) {
			!a.Ta && a.M() && a.X();
		});
	};
	x.fb = function () {
		Do(this, function (a) {
			a.Ta && a.fb();
		});
		this.T && uo(this.T);
		this.Ta = !1;
	};
	x.N = function () {
		this.Ta && this.fb();
		this.T && (this.T.da(), delete this.T);
		Do(this, function (a) {
			a.da();
		});
		this.C && lm(this.C);
		this.aa = this.C = this.F = null;
		V.ca.N.call(this);
	};
	y(Go, V);
	x = Go.prototype;
	x.ze = function () {};
	x.bf = function () {};
	x.Ih = function () {
		if (this.O)
			if (this.O.tagName.toUpperCase() == ma)
				try {
					a: {
						var a = this.O;
						try {
							var b =
								a.contentWindow ||
								(a.contentDocument
									? dm(a.contentDocument)
									: null);
							break a;
						} catch (c) {}
						b = null;
					}
					b && b.focus();
				} catch (c) {}
			else this.O.focus();
	};
	x.X = function () {
		var a = this,
			b = this.M();
		U(this.H, b, v, function () {
			a.cb = !0;
		});
		U(this.H, b, $e, function () {
			a.cb = !1;
		});
		U(this.H, this.L, Ga, A(this.Ih, this));
	};
	x.Wd = function (a) {
		a = this.A.M(a);
		this.O != a && ((this.O = a), this.L.J(new oo(a)));
	};
	x.Uc = function (a, b, c) {
		if (this.ff && (a = this.A.M(a))) {
			var d = new qn(0, 0, 0, 0);
			null != c &&
				(typeof c === Df
					? (d = new qn(c, c, c, c))
					: rj(c) &&
					  4 == c.length &&
					  (d = new qn(
							Number(c[0]),
							Number(c[1]),
							Number(c[2]),
							Number(c[3])
					  )));
			c = this.M();
			new wo(a, b[0]).Ma(c, b[1], d);
			if (0 == Ap.indexOf('og')) {
				for (b = '99'; a; )
					sj(a) &&
						1 == a.nodeType &&
						a.style.zIndex &&
						((d = yn(a, 'zIndex')),
						Number(b) < Number(d) && (b = d)),
						(a = a.parentNode);
				c.style.zIndex = b;
			}
		}
	};
	x.Fe = function () {
		var a = this.M();
		a &&
			a.style.display != this.S &&
			((a.style.display = this.S), this.L.J(new po(!0)));
	};
	x.Ee = function (a) {
		var b = this.M();
		if (a || (b && b.style.display != Cf && !this.cb))
			this.ze(), this.L.J(new po(!1));
	};
	x.pg = function () {
		var a = this.M();
		if (a)
			switch (a.style.display) {
				case this.S:
					this.Ee();
					break;
				case Cf:
					this.Fe();
			}
	};
	x.N = function () {
		V.prototype.N.call(this);
		O(this.H);
	};
	var kA = {
		CURRENT_INPUT_TOOL_CHANGED: 'citc',
		Th: 'ecd',
		ep: 'se',
		ak: Qc,
		fp: 'sp',
		bk: 'hp',
		rl: 'itlu',
		To: 'ita_l',
		Zo: 'pelu',
		bp: 'slc',
		gp: 'sb',
		ck: 'ic',
		ap: 'rc',
		hp: 'suc',
		ip: 'syc',
		jp: 'uc',
		kp: 'uf',
		op: 'wg',
		$o: 'psa',
	};
	var Jo = [];
	y(Io, R);
	qj(Io);
	var fp = {
		8: 'backspace',
		9: 'tab',
		13: 'enter',
		16: 'shift',
		17: 'ctrl',
		18: 'alt',
		19: 'pause',
		20: 'caps-lock',
		27: 'esc',
		32: 'space',
		33: 'pg-up',
		34: 'pg-down',
		35: 'end',
		36: 'home',
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down',
		45: 'insert',
		46: Pb,
		48: '0',
		49: '1',
		50: '2',
		51: '3',
		52: '4',
		53: '5',
		54: '6',
		55: '7',
		56: '8',
		57: '9',
		59: 'semicolon',
		61: 'equals',
		65: 'a',
		66: 'b',
		67: 'c',
		68: 'd',
		69: 'e',
		70: 'f',
		71: 'g',
		72: 'h',
		73: 'i',
		74: 'j',
		75: 'k',
		76: 'l',
		77: 'm',
		78: 'n',
		79: 'o',
		80: 'p',
		81: 'q',
		82: 'r',
		83: 's',
		84: 't',
		85: 'u',
		86: 'v',
		87: 'w',
		88: 'x',
		89: 'y',
		90: 'z',
		93: 'context',
		96: 'num-0',
		97: 'num-1',
		98: 'num-2',
		99: 'num-3',
		100: 'num-4',
		101: 'num-5',
		102: 'num-6',
		103: 'num-7',
		104: 'num-8',
		105: 'num-9',
		106: 'num-multiply',
		107: 'num-plus',
		109: 'num-minus',
		110: 'num-period',
		111: 'num-division',
		112: 'f1',
		113: 'f2',
		114: 'f3',
		115: 'f4',
		116: 'f5',
		117: 'f6',
		118: 'f7',
		119: 'f8',
		120: 'f9',
		121: 'f10',
		122: 'f11',
		123: 'f12',
		186: 'semicolon',
		187: 'equals',
		189: 'dash',
		188: ',',
		190: '.',
		191: '/',
		192: '`',
		219: 'open-square-bracket',
		220: '\\',
		221: 'close-square-bracket',
		222: 'single-quote',
		224: 'win',
	};
	x = Vo.prototype;
	x.keyCode = function (a) {
		this.C = a;
		return this;
	};
	x.key = function (a) {
		this.D = a;
		return this;
	};
	x.shiftKey = function (a) {
		this.H = a;
		return this;
	};
	x.altKey = function (a) {
		this.A = a;
		return this;
	};
	x.ctrlKey = function (a) {
		this.B = a;
		return this;
	};
	x.metaKey = function (a) {
		this.F = a;
		return this;
	};
	x.target = function (a) {
		this.Y = a;
		return this;
	};
	var ep;
	C($o, R);
	var Xo = [
			27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19,
		],
		Yo = [
			'color',
			'date',
			'datetime',
			'datetime-local',
			'email',
			'month',
			Df,
			'password',
			'search',
			'tel',
			'text',
			'time',
			'url',
			'week',
		];
	x = $o.prototype;
	x.Ef = function (a, b) {
		ip(this.B, dp(1, arguments), a);
	};
	x.Ff = function (a) {
		jp(this.B, dp(0, arguments));
	};
	x.Df = function (a) {
		return lp(this, this.B, dp(0, arguments));
	};
	x.N = function () {
		$o.ca.N.call(this);
		this.B = {};
		kn(this.A, t, this.ne, !1, this);
		kn(this.A, hh, this.ve, !1, this);
		Zo &&
			(kn(this.A, u, this.xe, !1, this),
			kn(this.A, ih, this.ye, !1, this));
		kn(this.A, je, this.pe, !1, this);
		kn(this.A, jh, this.we, !1, this);
		this.A = null;
	};
	x.pe = function (a) {
		a = Wo(a);
		Q && gp(this, a);
		Zo && !this.D && hp(a) && np(this, a, !0);
	};
	x.we = function (a) {
		a = a.A();
		Q && gp(this, a);
		Zo && !this.D && hp(a) && np(this, a, !0);
	};
	x.xe = function (a) {
		a = Wo(a);
		32 < a.A && hp(a) && (this.D = !0);
	};
	x.ye = function (a) {
		a = a.A();
		32 < a.A && hp(a) && (this.D = !0);
	};
	x.ne = function (a) {
		np(this, Wo(a));
	};
	x.ve = function (a) {
		np(this, a.A());
	};
	C(mp, P);
	y(pp, R);
	x = pp.prototype;
	x.He = function (a, b) {
		if (typeof arguments[1] === w) {
			var c = rp(arguments[1]);
			if (c) {
				this.B[c] = a;
				return;
			}
		}
		this.A.Ef.apply(this.A, arguments);
	};
	x.wg = function (a) {
		var b = arguments[0];
		if (typeof b === w && (b = rp(b))) {
			this.B[b] && delete this.B[b];
			return;
		}
		this.A.Ff.apply(this.A, arguments);
	};
	x.Hd = function (a) {
		if (typeof arguments[0] === w) {
			var b = rp(arguments[0]);
			if (b) return !!this.B[b];
		}
		return this.A.Df.apply(this.A, arguments);
	};
	x.dg = function (a) {
		var b = Q ? Po(a.keyCode) : a.keyCode;
		16 == b && (this.F = !0);
		this.C = (b & 255) | (qp(a) << 8);
		this.B[this.C] &&
			16 != b &&
			17 != b &&
			18 != b &&
			(a.preventDefault(), a.stopPropagation());
	};
	x.eg = function (a) {
		this.B[this.C] && (a.preventDefault(), a.stopPropagation());
	};
	x.fg = function (a) {
		var b = Q ? Po(a.keyCode) : a.keyCode,
			c = (b & 255) | (qp(a) << 8);
		if (c == this.C) {
			var d = this.B[c];
			d &&
				(288 != c || this.F) &&
				((a = a.target),
				this.J(new mp(Gg, d, a)),
				this.J(new mp(Hg + d, d, a)));
		}
		this.F = 32 == b || 16 == b;
		this.C = 0;
	};
	x.N = function () {
		R.prototype.N.call(this);
		O(this.D);
		delete this.D;
		delete this.B;
	};
	var lA = {},
		Ow =
			((lA.tlang = ['ltkc', 'ltcc']),
			(lA.tsbc = ['bckc', 'bccc']),
			(lA.pun = ['ptkc', 'ptcc']),
			lA);
	y(sp, N);
	x = sp.prototype;
	x.ad = function () {};
	x.Bb = function () {};
	x.get = function () {};
	x.set = function () {};
	x.Qd = function () {};
	x.Fc = function () {};
	x.Gd = function () {};
	x.push = function () {};
	x.Ub = function () {};
	x.report = function () {};
	y(tp, N);
	tp.prototype.C = function () {
		this.da();
	};
	tp.prototype.N = function () {
		O(this.B);
		for (var a in this.A) O(this.A[a]), delete this.A[a];
		N.prototype.N.call(this);
	};
	qj(tp);
	y(zp, sp);
	x = zp.prototype;
	x.ad = function (a) {
		this.Ie = a;
	};
	x.Bb = function (a) {
		var b = this.A[a];
		b && typeof b === Df ? b++ : (b = 1);
		this.A[a] = b;
	};
	x.get = function (a) {
		return this.A[a];
	};
	x.set = function (a, b) {
		this.A[a] = b;
	};
	x.Qd = function (a, b) {
		this.D[a] = b;
	};
	x.Fc = function (a) {
		this.B[a] = new Date().getTime();
	};
	x.Gd = function (a) {
		var b = new Date().getTime();
		this.B[a] && ((this.A[a] = b - this.B[a]), delete this.B[a]);
	};
	x.push = function (a, b) {
		var c = this.A[a];
		c = null != c ? String(c) + '_' + b : String(b);
		this.A[a] = c;
	};
	x.Ub = function (a) {
		var b = this.A[a];
		if (typeof b === w) {
			var c = b.lastIndexOf('_');
			0 > c ? delete this.A[a] : (this.A[a] = b.slice(0, c));
		}
	};
	x.report = function () {
		if ('vk' == this.C || 'ppe' == this.C || 'hwt' == this.C) {
			hk(
				this.B,
				function (d, e) {
					this.Gd(e);
				},
				this
			);
			var a = !1,
				b;
			for (b in this.A)
				if (this.A[b]) {
					a = !0;
					break;
				}
			if (!a) return;
			this.fd && this.set(Fa, 'ul');
			var c =
				'https://inputtools.google.com/ping?cs=1&app={APP}&itc={CODE}&uv=t|' +
				this.C +
				',';
			a = {};
			pk(a, this.D, this.A);
			hk(
				a,
				function (d, e) {
					if ('ql' == e) {
						var g = d.split('_');
						if (10 < g.length) {
							for (d = 0; 10 > d; d++) {
								var h =
										Math.floor(
											Math.random() * (g.length - d)
										) + d,
									k = g[d];
								g[d] = g[h];
								g[h] = k;
							}
							d = g.slice(0, 10).join('_');
						}
					}
					c += e + '|' + d + ',';
				},
				this
			);
			c = c.slice(0, -1);
			Bp(this, c);
		}
		this.A = {};
		this.B = {};
	};
	x.cg = function (a) {
		var b = this.F[a];
		b.onload = b.onerror = null;
		delete this.F[a];
	};
	x.N = function () {
		this.fd = !0;
		this.report();
		this.D = {};
		sp.prototype.N.call(this);
	};
	x.Ie = '';
	x.Ad = 0;
	x.fd = !1;
	var Dp = typeof Uint8Array == r,
		Ep = [];
	Cp.prototype.toString = function () {
		return this.A.toString();
	};
	C(Lp, Cp);
	C(Ip, Cp);
	var Kp = [3, 4, 6, 7];
	var Pp = {},
		mA = {},
		qz = {};
	D(
		[
			[
				1,
				La,
				[['am', '\u12a0\u121b\u122d\u129b']],
				['am'],
				16,
				null,
				['im_t13n_am'],
			],
			[
				2,
				Na,
				[['ar', '\u0627\u0644\u0639\u0631\u0628\u064a\u0629']],
				['ar'],
				2,
				null,
				['im_t13n_ar'],
			],
			[
				3,
				cb,
				[['bn', '\u09ac\u09be\u0982\u09b2\u09be']],
				['bn'],
				3,
				null,
				['im_t13n_bn'],
			],
			[
				4,
				Pi,
				[[Ei, '\u62fc\u97f3']],
				[Ei],
				29,
				null,
				['im_pinyin_zh_hans'],
			],
			[
				49,
				Qi,
				[[Ei, '\u53cc\u62fc\uff08\u667a\u80fdABC\uff09']],
				[Ei],
				44,
				[18],
			],
			[
				50,
				Ti,
				[[Ei, '\u53cc\u62fc\uff08\u5fae\u8f6f\u65b9\u6848\uff09']],
				[Ei],
				44,
				[18],
			],
			[
				51,
				Ri,
				[[Ei, '\u53cc\u62fc\uff08\u5c0f\u9e64\uff09']],
				[Ei],
				44,
				[18],
			],
			[
				52,
				Si,
				[[Ei, '\u53cc\u62fc\uff08\u62fc\u97f3\u52a0\u52a0\uff09']],
				[Ei],
				44,
				[18],
			],
			[
				53,
				Ui,
				[[Ei, '\u53cc\u62fc\uff08\u7d2b\u5149\uff09']],
				[Ei],
				44,
				[18],
			],
			[
				54,
				Vi,
				[[Ei, '\u53cc\u62fc\uff08\u81ea\u7136\u7801\uff09']],
				[Ei],
				44,
				[18],
			],
			[
				6,
				Wb,
				[['el', '\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac']],
				['el'],
				23,
				null,
				['im_t13n_el'],
			],
			[
				7,
				Jc,
				[['gu', '\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0']],
				['gu'],
				4,
				null,
				['im_t13n_gu'],
			],
			[
				8,
				Vc,
				[['hi', '\u0939\u093f\u0928\u094d\u0926\u0940']],
				['hi'],
				5,
				null,
				['im_t13n_hi'],
			],
			[
				9,
				Sc,
				[[Qc, '\u05e2\u05b4\u05d1\u05b0\u05e8\u05b4\u05d9\u05ea']],
				[Qc],
				20,
				null,
				['im_t13n_he', 'im_t13n_iw'],
			],
			[33, 'ja-t-i0', [['ja', '\u65e5\u672c\u8a9e']], null, 28],
			[
				10,
				ce,
				[['ja', '\u65e5\u672c\u8a9e']],
				['ja'],
				28,
				null,
				['im_t13n_ja'],
			],
			[
				11,
				pe,
				[['kn', '\u0c95\u0ca8\u0ccd\u0ca8\u0ca1']],
				['kn'],
				6,
				null,
				['im_t13n_kn'],
			],
			[
				12,
				Se,
				[['ml', '\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02']],
				['ml'],
				7,
				null,
				['im_t13n_ml'],
			],
			[
				13,
				cf,
				[['mr', '\u092e\u0930\u093e\u0920\u0940']],
				['mr'],
				9,
				null,
				['im_t13n_mr'],
			],
			[
				14,
				sf,
				[['ne', '\u0928\u0947\u092a\u093e\u0932\u0940']],
				['ne'],
				8,
				null,
				['im_t13n_ne'],
			],
			[
				15,
				Lf,
				[['or', '\u0b13\u0b21\u0b3c\u0b3f\u0b06']],
				['or'],
				19,
				null,
				['im_t13n_or'],
			],
			[
				16,
				nc,
				[['fa', '\u0641\u0627\u0631\u0633\u06cc']],
				['fa'],
				14,
				null,
				['im_t13n_fa'],
			],
			[
				17,
				Sf,
				[['pa', '\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40']],
				['pa'],
				10,
				null,
				['im_t13n_pa'],
			],
			[
				46,
				'pl-t-i0-und',
				[['pl', 'Polski']],
				null,
				37,
				null,
				['im_t13n_pl'],
			],
			[
				18,
				wg,
				[['ru', '\u0420\u0443\u0441\u0441\u043a\u0438\u0439']],
				['ru'],
				24,
				null,
				['im_t13n_ru'],
			],
			[
				19,
				Bg,
				[
					[
						'sa',
						'\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d',
					],
				],
				['sa'],
				15,
				null,
				['im_t13n_sa'],
			],
			[
				20,
				Zg,
				[['sr', '\u0441\u0440\u043f\u0441\u043a\u0438']],
				['sr'],
				22,
				null,
				['im_t13n_sr'],
			],
			[
				21,
				Jg,
				[['si', '\u0dc3\u0dd2\u0d82\u0dc4\u0dbd']],
				['si'],
				18,
				null,
				['im_t13n_si'],
			],
			[
				22,
				mh,
				[[kh, '\u0ba4\u0bae\u0bbf\u0bb4\u0bcd']],
				[kh],
				11,
				null,
				['im_t13n_ta'],
			],
			[
				23,
				uh,
				[['te', '\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41']],
				['te'],
				12,
				null,
				['im_t13n_te'],
			],
			[
				24,
				Ih,
				[['ti', '\u1275\u130d\u122d\u129b']],
				['ti'],
				17,
				null,
				['im_t13n_ti'],
			],
			[
				25,
				ei,
				[['ur', '\u0627\u0631\u062f\u0648']],
				['ur'],
				13,
				null,
				['im_t13n_ur'],
			],
			[31, 'zh-t-i0-wubi-1998', [[Ei, '\u4e94\u7b14']], null, 30],
			[
				26,
				Wi,
				[[Ei, '\u4e94\u7b14']],
				[Ei],
				30,
				null,
				['im_wubi_zh_hans'],
			],
			[
				28,
				Ni,
				[[Hi, '\u6ce8\u97f3']],
				[Hi],
				31,
				null,
				['im_zhuyin_zh_hant'],
			],
			[32, 'zh-hant-t-i0-bopo', [[Hi, '\u6ce8\u97f3']], null, 31],
			[
				27,
				Mi,
				[[Hi, '\u6f22\u8a9e\u62fc\u97f3']],
				[Hi],
				29,
				null,
				['im_pinyin_zh_hant'],
			],
			[
				30,
				pi,
				[['vi', 'Ti\u1ebfng Vi\u1ec7t']],
				['vi'],
				21,
				[18],
				['im_t13n_vi'],
			],
			[
				34,
				Va,
				[
					[
						'be',
						'\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f',
					],
				],
				['be'],
				26,
				null,
				['im_t13n_be'],
			],
			[
				35,
				Ya,
				[
					[
						'bg',
						'\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438',
					],
				],
				['bg'],
				27,
				null,
				['im_t13n_bg'],
			],
			[
				36,
				$h,
				[
					[
						'uk',
						'\u0422\u0440\u0430\u043d\u0441\u043b\u0456\u0442\u0435\u0440\u0430\u0446\u0456\u044f',
					],
				],
				['uk'],
				25,
				null,
				['im_t13n_uk'],
			],
			[37, Lb, [['de', da]], ['de'], 35, [15, 18]],
			[38, ec, [['es', 'Espa\u00f1ol']], ['es'], 34, [15, 18]],
			[39, vc, [['fr', ja]], ['fr'], 36, [15, 18]],
			[40, sd, [['it', ra]], ['it'], 39, [15, 18]],
			[41, vf, [['nl', ta]], ['nl'], 40, [15, 18]],
			[42, lg, [[Zf, wa]], [Zf], 38, [15, 18]],
			[48, gg, [[$f, wa]], null, 38],
			[43, Ki, [[Hi, '\u5009\u9821']], [Hi], 32],
			[44, Ci, [[Fi, '\u5ee3\u6771\u8a71']], [Fi], 33],
			[60, Bi, [[Fi, '\u7cb5\u62fc']], [Fi], 33],
			[101, Vg, [['sq', 'shqip']], ['sq'], 0, null, ['vkd_sq']],
			[
				102,
				Oa,
				[
					[
						'ar',
						'\u0644\u0648\u062d\u0629 \u0645\u0641\u0627\u062a\u064a\u062d \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629',
					],
				],
				['ar'],
				0,
				null,
				['vkd_ar'],
			],
			[
				103,
				jd,
				[
					[
						'hy',
						'\u0531\u0580\u0587\u0565\u056c\u0561\u0570\u0561\u0575\u0565\u0580\u0565\u0576',
					],
				],
				['hy'],
				0,
				null,
				['vkd_hy_east'],
			],
			[
				104,
				kd,
				[
					[
						'hy',
						'\u0531\u0580\u0565\u0582\u0574\u057f\u0561\u0570\u0561\u0575\u0565\u0580\u0567\u0576',
					],
				],
				['hy'],
				0,
				null,
				['vkd_hy_west'],
			],
			[105, lc, [['eu', 'euskara']], ['eu'], 0, null, ['vkd_eu']],
			[
				106,
				Wa,
				[
					[
						'be',
						'\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f',
					],
				],
				['be'],
				0,
				null,
				['vkd_be'],
			],
			[
				107,
				db,
				[['bn', '\u09ac\u09be\u0982\u09b2\u09be (INSCRIPT)']],
				['bn'],
				0,
				null,
				['vkd_bn_inscript'],
			],
			[
				108,
				eb,
				[
					[
						'bn',
						'\u09ac\u09be\u0982\u09b2\u09be (\u09ab\u09cb\u09a8\u09c7\u099f\u09bf\u0995)',
					],
				],
				['bn'],
				0,
				null,
				['vkd_bn_phone'],
			],
			[109, hb, [['bs', 'bosanski']], ['bs'], 0, null, ['vkd_bs']],
			[110, eg, [[Zf, xa]], [Zf], 0, null, ['vkd_pt_br']],
			[
				111,
				$a,
				[
					[
						'bg',
						'\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a',
					],
				],
				['bg'],
				0,
				null,
				['vkd_bg'],
			],
			[
				112,
				Za,
				[
					[
						'bg',
						'\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a (\u0444\u043e\u043d\u0435\u0442\u0438\u043a\u0430)',
					],
				],
				['bg'],
				0,
				null,
				['vkd_bg_phone'],
			],
			[113, jb, [['ca', 'catal\u00e0']], ['ca'], 0, null, ['vkd_ca']],
			[
				114,
				qb,
				[['chr', '\u13e3\u13b3\u13a9']],
				['chr'],
				0,
				null,
				['vkd_chr'],
			],
			[
				233,
				sb,
				[
					[
						'ckb',
						'\u06a9\u0648\u0631\u062f\u06cc (\u062f\u06d5\u0633\u062a\u0646\u0648\u0633\u06cc \u0639\u06d5\u0631\u06d5\u0628\u06cc)',
					],
				],
				['ckb'],
				0,
				null,
				['vkd_ckb_ar'],
			],
			[
				232,
				tb,
				[['ckb', '\u06a9\u0648\u0631\u062f\u06cc']],
				['ckb'],
				0,
				null,
				['vkd_ckb_en'],
			],
			[115, cd, [['hr', 'Hrvatski']], ['hr'], 0, null, ['vkd_hr']],
			[
				116,
				Db,
				[['cs', '\u010ce\u0161tina']],
				['cs'],
				0,
				null,
				['vkd_cs'],
			],
			[
				117,
				Cb,
				[['cs', '\u010ce\u0161tina QWERTZ']],
				['cs'],
				0,
				null,
				['vkd_cs_qwertz'],
			],
			[118, Hb, [['da', 'Dansk']], ['da'], 0, null, ['vkd_da']],
			[
				119,
				Xf,
				[['prs', '\u0641\u0627\u0631\u0633\u06cc \u062f\u0631\u06cc']],
				['fa'],
				0,
				null,
				['vkd_prs'],
			],
			[120, yf, [['nl', ta]], ['nl'], 0, null, ['vkd_nl']],
			[121, Xc, [['hi', bj]], ['hi'], 0, null, ['vkd_deva_phone']],
			[122, ac, [[q, ia]], [q], 0, null, ['vkd_en']],
			[123, jc, [['et', 'eesti keel']], ['et'], 0, null, ['vkd_et']],
			[
				124,
				bi,
				[['am', '\u130d\u12d5\u12dd']],
				['am'],
				0,
				null,
				['vkd_ethi'],
			],
			[125, rc, [['fi', 'Suomi']], ['fi'], 0, null, ['vkd_fi']],
			[126, yc, [['fr', ja]], ['fr'], 0, null, ['vkd_fr']],
			[127, Hc, [['gl', 'galego']], ['gl'], 0, null, ['vkd_gl']],
			[
				128,
				he,
				[
					[
						'ka',
						'\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 (\u10e5\u10ec\u10d4\u10e0\u10e2\u10e7)',
					],
				],
				['ka'],
				0,
				null,
				['vkd_ka_qwerty'],
			],
			[
				129,
				ge,
				[
					[
						'ka',
						'\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 (\u10e1\u10d0\u10d1\u10d4\u10ed\u10d3\u10d8 \u10db\u10d0\u10dc\u10e5\u10d0\u10dc\u10d0)',
					],
				],
				['ka'],
				0,
				null,
				['vkd_ka_typewriter'],
			],
			[130, Ob, [['de', da]], ['de'], 0, null, ['vkd_de']],
			[
				131,
				Xb,
				[['el', '\u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac']],
				['el'],
				0,
				null,
				['vkd_el'],
			],
			[
				132,
				Lc,
				[
					[
						'gu',
						'\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (INSCRIPT)',
					],
				],
				['gu'],
				0,
				null,
				['vkd_gu_inscript'],
			],
			[
				133,
				Mc,
				[
					[
						'gu',
						'\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (\u0aab\u0acb\u0aa8\u0ac7\u0aa4\u0abf\u0a95)',
					],
				],
				['gu'],
				0,
				null,
				['vkd_gu_phone'],
			],
			[
				134,
				Pf,
				[
					[
						'pa-guru',
						'\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40 (INSCRIPT)',
					],
				],
				['pa'],
				0,
				null,
				['vkd_guru_inscript'],
			],
			[
				135,
				Qf,
				[
					[
						'pa-guru',
						'\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40 (\u0a2b\u0a4b\u0a28\u0a47\u0a1f\u0a3f\u0a15)',
					],
				],
				['pa'],
				0,
				null,
				['vkd_guru_phone'],
			],
			[
				136,
				Tc,
				[[Qc, '\u05e2\u05b4\u05d1\u05b0\u05e8\u05b4\u05d9\u05ea']],
				[Qc],
				0,
				null,
				['vkd_he', 'vkd_iw'],
			],
			[137, Yc, [['hi', cj]], ['hi'], 0, null, ['vkd_hi']],
			[
				138,
				id,
				[['hu', 'magyar nyelv (101)']],
				['hu'],
				0,
				null,
				['vkd_hu_101'],
			],
			[139, qd, [['is', '\u00edslenska']], ['is'], 0, null, ['vkd_is']],
			[140, vd, [['it', ra]], ['it'], 0, null, ['vkd_it']],
			[
				141,
				qe,
				[['kn', '\u0c95\u0ca8\u0ccd\u0ca8\u0ca1 (INSCRIPT)']],
				['kn'],
				0,
				null,
				['vkd_kn_inscript'],
			],
			[
				142,
				re,
				[
					[
						'kn',
						'\u0c95\u0ca8\u0ccd\u0ca8\u0ca1 (\u0cab\u0cca\u0ca8\u0cc6\u0c9f\u0cbf\u0c95\u0ccd)',
					],
				],
				['kn'],
				0,
				null,
				['vkd_kn_phone'],
			],
			[
				143,
				le,
				[['kk', '\u049a\u0430\u0437\u0430\u049b']],
				['kk'],
				0,
				null,
				['vkd_kk'],
			],
			[
				144,
				ne,
				[
					[
						'km',
						'\u17a2\u1780\u17d2\u179f\u179a\u1781\u17d2\u1798\u17c2\u179a NiDA',
					],
				],
				['km'],
				0,
				null,
				['vkd_km'],
			],
			[
				145,
				te,
				[['ko', '\ud55c\uad6d\uc5b4']],
				['ko'],
				0,
				[18],
				['vkd_ko'],
			],
			[
				146,
				we,
				[['ky', '\u041a\u044b\u0440\u0433\u044b\u0437']],
				['ky'],
				0,
				null,
				['vkd_ky_cyrl'],
			],
			[
				147,
				Fe,
				[['lo', '\u0e9e\u0eb2\u0eaa\u0eb2\u0ea5\u0eb2\u0ea7']],
				['lo'],
				0,
				null,
				['vkd_lo'],
			],
			[
				148,
				Ke,
				[['lv', 'latvie\u0161u valoda']],
				['lv'],
				0,
				null,
				['vkd_lv'],
			],
			[
				149,
				He,
				[['lt', 'lietuvi\u0173 kalba']],
				['lt'],
				0,
				null,
				['vkd_lt'],
			],
			[
				150,
				Qe,
				[
					[
						'mk',
						'\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438',
					],
				],
				['mk'],
				0,
				null,
				['vkd_mk'],
			],
			[
				151,
				Te,
				[['ml', '\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02 (INSCRIPT)']],
				['ml'],
				0,
				null,
				['vkd_ml_inscript'],
			],
			[
				152,
				Ue,
				[
					[
						'ml',
						'\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02 (\u0d2b\u0d4a\u0d23\u0d31\u0d4d\u0d31\u0d3f\u0d15\u0d4d)',
					],
				],
				['ml'],
				0,
				null,
				['vkd_ml_phone'],
			],
			[
				246,
				Xe,
				[
					[
						'mni-Mtei',
						'\uabc3\uabe4\uabc7\uabe9 \uabc3\uabcc\uabe6\uabdb (\uabd0\uabe3\uabc5\uabe6\uabc7\uabe4\uabdb)',
					],
				],
				['mni-Mtei'],
				0,
			],
			[153, kf, [['mt', 'Malti']], ['mt'], 0, null, ['vkd_mt']],
			[154, Oe, [['mi', 'Maori']], ['mi'], 0, null, ['vkd_mi']],
			[
				155,
				Ve,
				[['mn', '\u041c\u043e\u043d\u0433\u043e\u043b']],
				['mn'],
				0,
				null,
				['vkd_mn_cyrl'],
			],
			[
				156,
				$g,
				[['sr', 'Crnogorski jezik']],
				['sr'],
				0,
				null,
				['vkd_srp'],
			],
			[157, Bf, [['no', 'norsk']], ['no'], 0, null, ['vkd_no']],
			[
				158,
				Mf,
				[['or', '\u0b13\u0b21\u0b3c\u0b3f\u0b06 (INSCRIPT)']],
				['or'],
				0,
				null,
				['vkd_or_inscript'],
			],
			[
				159,
				Nf,
				[
					[
						'or',
						'\u0b13\u0b21\u0b3c\u0b3f\u0b06 (\u0b2b\u0b4b\u0b28\u0b47\u0b1f\u0b3f\u0b15)',
					],
				],
				['or'],
				0,
				null,
				['vkd_or_phone'],
			],
			[160, ze, [[q, ba]], ['af'], 0, null, ['vkd_latn_002']],
			[
				161,
				Yf,
				[['ps', '\u067e\u069a\u062a\u0648']],
				['ps'],
				0,
				null,
				['vkd_ps'],
			],
			[
				162,
				oc,
				[['fa', '\u0641\u0627\u0631\u0633\u06cc']],
				['fa'],
				0,
				null,
				['vkd_fa'],
			],
			[163, Vf, [['pl', 'polski']], ['pl'], 0, null, ['vkd_pl']],
			[164, jg, [[$f, ya]], [$f], 0, null, ['vkd_pt_pt']],
			[
				165,
				tg,
				[['rom', 'rromani \u0107hib']],
				['rom'],
				0,
				null,
				['vkd_rom'],
			],
			[
				166,
				sg,
				[['ro', 'rom\u00e2n\u0103']],
				['ro'],
				0,
				null,
				['vkd_ro'],
			],
			[
				167,
				rg,
				[['ro', 'rom\u00e2n\u0103 SR13392 Primary']],
				['ro'],
				0,
				null,
				['vkd_ro_sr13392_primary'],
			],
			[
				168,
				qg,
				[['ro', 'rom\u00e2n\u0103 SR13392 Secondary']],
				['ro'],
				0,
				null,
				['vkd_ro_sr13392_secondary'],
			],
			[
				169,
				zg,
				[
					[
						'ru',
						'\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430',
					],
				],
				['ru'],
				0,
				null,
				['vkd_ru'],
			],
			[
				212,
				yg,
				[
					[
						'ru',
						'\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 (\u0444\u043e\u043d\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439)',
					],
				],
				['ru'],
				0,
			],
			[242, Cg, [['sa', cj]], ['sa'], 0],
			[
				170,
				Dg,
				[
					[
						'sa',
						'\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d (\u092b\u094b\u0928\u0947\u091f\u093f\u0915\u094d)',
					],
				],
				['sa'],
				0,
				null,
				['vkd_sa_phone'],
			],
			[
				171,
				Wg,
				[['sr', '\u0441\u0440\u043f\u0441\u043a\u0438']],
				['sr'],
				0,
				null,
				['vkd_sr_cyrl'],
			],
			[172, Xg, [['sr', 'Srpski']], ['sr'], 0, null, ['vkd_sr_latn']],
			[
				173,
				Kg,
				[
					[
						'si',
						'\u0dc1\u0dd4\u0daf\u0dca\u0db0 \u0dc3\u0dd2\u0d82\u0dc4\u0dbd SLS1134',
					],
				],
				['si'],
				0,
				null,
				['vkd_si'],
			],
			[
				174,
				Ng,
				[['sk', 'Slovensk\u00fd jazyk']],
				['sk'],
				0,
				null,
				['vkd_sk'],
			],
			[
				175,
				Mg,
				[['sk', 'Slovensk\u00fd jazyk - QWERTY']],
				['sk'],
				0,
				null,
				['vkd_sk_qwerty'],
			],
			[
				176,
				Pg,
				[['sl', 'sloven\u0161\u010dina']],
				['sl'],
				0,
				null,
				['vkd_sl'],
			],
			[
				177,
				li,
				[['uzs', 'Southern Uzbek']],
				['uzs'],
				0,
				null,
				['vkd_uzs'],
			],
			[178, hc, [['es', 'Espa\u00f1ol']], ['es'], 0, null, ['vkd_es_es']],
			[179, eh, [['sv', 'Svenska']], ['sv'], 0, null, ['vkd_sv']],
			[
				180,
				Jb,
				[['de', 'Deutschsprachige Schweiz']],
				['de'],
				0,
				null,
				['vkd_de_ch'],
			],
			[
				181,
				oh,
				[[kh, '\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (TAMIL99)']],
				[kh],
				0,
				null,
				['vkd_ta_tamil99'],
			],
			[
				182,
				qh,
				[[kh, '\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (INSCRIPT)']],
				[kh],
				0,
				null,
				['vkd_ta_inscript'],
			],
			[
				183,
				rh,
				[
					[
						kh,
						'\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (\u0baa\u0bcb\u0ba9\u0bc6\u0b9f\u0bbf\u0b95\u0bcd)',
					],
				],
				[kh],
				0,
				null,
				['vkd_ta_phone'],
			],
			[
				205,
				ph,
				[[kh, '\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (TYPE-WRITER)']],
				[kh],
				0,
			],
			[
				206,
				nh,
				[[kh, '\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (ITRANS)']],
				[kh],
				0,
			],
			[
				184,
				Xh,
				[['tt', '\u0422\u0430\u0442\u0430\u0440']],
				['tt'],
				0,
				null,
				['vkd_tt'],
			],
			[
				185,
				vh,
				[['te', '\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 (INSCRIPT)']],
				['te'],
				0,
				null,
				['vkd_te_inscript'],
			],
			[
				186,
				wh,
				[
					[
						'te',
						'\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 (\u0c2b\u0c4b\u0c28\u0c46\u0c1f\u0c3f\u0c15\u0c4d)',
					],
				],
				['te'],
				0,
				null,
				['vkd_te_phone'],
			],
			[
				187,
				Fh,
				[['th', '\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22']],
				['th'],
				0,
				null,
				['vkd_th'],
			],
			[
				204,
				Dh,
				[
					[
						'th',
						'\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 (Pattajoti)',
					],
				],
				['th'],
				0,
			],
			[
				203,
				Eh,
				[
					[
						'th',
						'\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 (TIS-820.2538)',
					],
				],
				['th'],
				0,
			],
			[
				188,
				Sh,
				[['tr', 'T\u00fcrk\u00e7e - F']],
				['tr'],
				0,
				null,
				['vkd_tr_f', Rh],
			],
			[
				189,
				Uh,
				[['tr', 'T\u00fcrk\u00e7e - Q']],
				['tr'],
				0,
				null,
				['vkd_tr_q'],
			],
			[
				190,
				Yh,
				[['ug', '\u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5']],
				['ug'],
				0,
				null,
				['vkd_ug'],
			],
			[
				191,
				ai,
				[
					[
						'uk',
						'\u0415\u043a\u0440\u0430\u043d\u043d\u0430 \u043a\u043b\u0430\u0432\u0456\u0430\u0442\u0443\u0440\u0430',
					],
				],
				['uk'],
				0,
				null,
				['vkd_uk_101'],
			],
			[
				192,
				fi,
				[['ur', '\u0627\u0631\u062f\u0648']],
				['ur'],
				0,
				null,
				['vkd_ur'],
			],
			[
				193,
				ji,
				[['uz', 'o\u2018zbek']],
				['uz'],
				0,
				null,
				['vkd_uz_latn'],
			],
			[
				194,
				ii,
				[
					[
						'uz',
						'\u040e\u0437\u0431\u0435\u043a (\u0444\u043e\u043d\u0435\u0442\u0438\u0447\u043d\u0456)',
					],
				],
				['uz'],
				0,
				null,
				['vkd_uz_cyrl_phone'],
			],
			[
				195,
				hi,
				[
					[
						'uz',
						'\u040e\u0437\u0431\u0435\u043a (\u0420\u043e\u0441\u0456\u0439\u0441\u044c\u043a\u0430)',
					],
				],
				['uz'],
				0,
				null,
				['vkd_uz_cyrl_type'],
			],
			[
				196,
				ri,
				[['vi', 'Ti\u1ebfng Vi\u1ec7t TCVN 6064']],
				['vi'],
				0,
				null,
				['vkd_vi_tcvn'],
			],
			[
				197,
				qi,
				[['vi', 'Ti\u1ebfng Vi\u1ec7t Telex']],
				['vi'],
				0,
				null,
				['vkd_vi_telex'],
			],
			[
				198,
				si,
				[['vi', 'Ti\u1ebfng Vi\u1ec7t VIQR']],
				['vi'],
				0,
				null,
				['vkd_vi_viqr'],
			],
			[
				208,
				'vi-t-k0-vni',
				[['vi', 'Ti\u1ebfng Vi\u1ec7t VNI']],
				['vi'],
				0,
			],
			[
				199,
				Ub,
				[['dz', '\u0f62\u0fab\u0f7c\u0f44\u0f0b\u0f41\u0f0b']],
				['dz'],
				0,
				null,
				['vkd_dz'],
			],
			[200, $b, [[q, 'English Dvorak']], [q], 0],
			[
				201,
				rb,
				[
					[
						'chr',
						'\u13e3\u13b3\u13a9 \u13d7\u13a7\u13c1\u13a2\u13cd\u13d7 \u13da\u13c3\u13f4\u13ac',
					],
				],
				['chr'],
				0,
				null,
				['vkd_chr_phone'],
			],
			[
				202,
				of,
				[
					[
						'my',
						'\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c',
					],
				],
				['my'],
				0,
				null,
				['vkd_my'],
			],
			[
				239,
				Ah,
				[['tg', '\u0422\u043e\u04b7\u0438\u043a']],
				['tg'],
				0,
				null,
				['vkd_tg'],
			],
			[5, Zb, [[q, ia]], [q], 41, [15, 18], ['im_t13n_en']],
			[
				29,
				Zd,
				[['ja', '\u65e5\u672c\u8a9e']],
				null,
				-1,
				null,
				['im_t13n_ja_hira'],
			],
			[45, 'tr-t-i0-und', [['tr', 'T\u00fcrk']], null, 42],
			[
				207,
				zi,
				[
					[
						'yi',
						'\u05d4\u05e2\u05d1\u05e8\u05e2\u05d9\u05d9 \u05d9\u05d9\u05b4\u05d3\u05d9\u05e9 \u05e7\u05d9\u05d1\u05d0\u05b8\u05e8\u05d3',
					],
				],
				['yi'],
				0,
			],
			[256, Ai, [['yo', 'Nigerian Yoruba']], ['yo'], 0],
			[
				209,
				'ne-t-k0-und',
				[
					[
						'ne',
						'\u0928\u0947\u092a\u093e\u0932\u0940 (\u091f\u094d\u0930\u092f\u093e\u0921\u093f\u0938\u0928\u0932)',
					],
				],
				['ne'],
				0,
			],
			[
				210,
				tf,
				[
					[
						'ne',
						'\u0928\u0947\u092a\u093e\u0932\u0940 (\u0930\u094b\u092e\u093e\u0928\u093e\u0907\u091c\u094d\u0921)',
					],
				],
				['ne'],
				0,
			],
			[211, bc, [[q, Ba]], ['nl'], 0],
			[213, Ff, [['nv', ea]], ['nv'], 0],
			[234, 'nv-t-k0', [['nv', ea]], null, 0],
			[235, Ef, [['nv', 'Din\u00e9 bizaad - Traditional']], ['nv'], 0],
			[401, Ia, [['af', 'Afrikaans']], ['af'], 1],
			[506, Ja, [['am', '\u12a0\u121b\u122d\u129b']], ['am'], 1],
			[
				464,
				Ma,
				[['ar', '\u0627\u0644\u0639\u0631\u0628\u064a\u0629']],
				['ar'],
				1,
			],
			[
				507,
				Qa,
				[['as', '\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be']],
				['as'],
				1,
			],
			[487, Ta, [['az', 'az\u0259rbaycan']], ['az'], 1],
			[
				402,
				Ua,
				[
					[
						'be',
						'\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f',
					],
				],
				['be'],
				1,
			],
			[
				403,
				Xa,
				[
					[
						'bg',
						'\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438',
					],
				],
				['bg'],
				1,
			],
			[489, bb, [['bn', '\u09ac\u09be\u0982\u09b2\u09be']], ['bn'], 1],
			[
				509,
				fb,
				[['bo', '\u0f56\u0f7c\u0f51\u0f0b\u0f66\u0f90\u0f51\u0f0b']],
				['bo'],
				1,
			],
			[468, gb, [['bs', 'bosanski']], ['bs'], 1],
			[404, ib, [['ca', 'catal\u00e0']], ['ca'], 1],
			[469, lb, [['ceb', 'Cebuano']], ['ceb'], 1],
			[494, ub, [['co', 'Corsican']], ['co'], 1],
			[405, Bb, [['cs', '\u010de\u0161tina']], ['cs'], 1],
			[406, Eb, [['cy', 'Cymraeg']], ['cy'], 1],
			[407, Gb, [['da', 'dansk']], ['da'], 1],
			[408, Kb, [['de', da]], ['de'], 1],
			[
				455,
				Vb,
				[['el', '\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac']],
				['el'],
				1,
			],
			[409, Yb, [[q, ia]], [q], 1],
			[456, cc, [['eo', 'esperanto']], ['eo'], 1],
			[410, dc, [['es', 'espa\u00f1ol']], ['es'], 1],
			[411, ic, [['et', 'eesti']], ['et'], 1],
			[412, kc, [['eu', 'euskara']], ['eu'], 1],
			[465, mc, [['fa', '\u0641\u0627\u0631\u0633\u06cc']], ['fa'], 1],
			[413, qc, [['fi', 'suomi']], ['fi'], 1],
			[414, sc, [['fil', 'Filipino']], ['fil'], 1],
			[415, uc, [['fr', 'fran\u00e7ais']], ['fr'], 1],
			[495, zc, [['fy', 'Frysk']], ['fy'], 1],
			[416, Bc, [['ga', 'Gaeilge']], ['ga'], 1],
			[496, Ec, [['gd', 'G\u00e0idhlig']], ['gd'], 1],
			[417, Gc, [['gl', 'galego']], ['gl'], 1],
			[
				462,
				Ic,
				[['gu', '\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0']],
				['gu'],
				1,
			],
			[497, Nc, [['haw', aj]], ['haw'], 1],
			[457, Rc, [[Qc, '\u05e2\u05d1\u05e8\u05d9\u05ea']], [Qc], 1],
			[
				453,
				Uc,
				[['hi', '\u0939\u093f\u0928\u094d\u0926\u0940']],
				['hi'],
				1,
			],
			[470, $c, [['hmn', 'Hmong']], ['hmn'], 1],
			[418, bd, [['hr', 'hrvatski']], ['hr'], 1],
			[419, dd, [['ht', 'Haitian Creole']], ['ht'], 1],
			[420, hd, [['hu', 'magyar']], ['hu'], 1],
			[
				504,
				ld,
				[['hy', '\u0570\u0561\u0575\u0565\u0580\u0565\u0576']],
				['hy'],
				1,
			],
			[421, md, [['id', 'Indonesia']], ['id'], 1],
			[422, pd, [['is', '\u00edslenska']], ['is'], 1],
			[423, rd, [['it', 'italiano']], ['it'], 1],
			[424, $d, [['ja', '\u65e5\u672c\u8a9e']], ['ja'], 1],
			[458, de, [['jv', 'Javanese']], ['jv'], 1],
			[
				505,
				fe,
				[['ka', '\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8']],
				['ka'],
				1,
			],
			[
				501,
				ke,
				[
					[
						'kk',
						'\u049b\u0430\u0437\u0430\u049b \u0442\u0456\u043b\u0456',
					],
				],
				['kk'],
				1,
			],
			[484, me, [['km', '\u1781\u17d2\u1798\u17c2\u179a']], ['km'], 1],
			[471, oe, [['kn', '\u0c95\u0ca8\u0ccd\u0ca8\u0ca1']], ['kn'], 1],
			[425, se, [['ko', '\ud55c\uad6d\uc5b4']], ['ko'], 1],
			[477, ue, [['ku', 'kurd\u00ee']], ['ku'], 1],
			[
				478,
				xe,
				[['ky', '\u043a\u044b\u0440\u0433\u044b\u0437\u0447\u0430']],
				['ky'],
				1,
			],
			[426, ye, [['la', 'Latin']], ['la'], 1],
			[498, Be, [['lb', 'L\u00ebtzebuergesch']], ['lb'], 1],
			[483, Ee, [['lo', '\u0ea5\u0eb2\u0ea7']], ['lo'], 1],
			[427, Ge, [['lt', 'lietuvi\u0173']], ['lt'], 1],
			[428, Je, [['lv', 'latvie\u0161u']], ['lv'], 1],
			[479, Me, [['mg', 'Malagasy']], ['mg'], 1],
			[459, Ne, [['mi', 'Maori']], ['mi'], 1],
			[
				429,
				Pe,
				[
					[
						'mk',
						'\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438',
					],
				],
				['mk'],
				1,
			],
			[
				490,
				Re,
				[['ml', '\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02']],
				['ml'],
				1,
			],
			[
				474,
				We,
				[['mn', '\u043c\u043e\u043d\u0433\u043e\u043b']],
				['mn'],
				1,
			],
			[461, bf, [['mr', '\u092e\u0930\u093e\u0920\u0940']], ['mr'], 1],
			[430, gf, [['ms', 'Melayu']], ['ms'], 1],
			[467, jf, [['mt', 'Malti']], ['mt'], 1],
			[488, lf, [['mul', 'Multiple languages']], ['mul'], 1],
			[
				492,
				mf,
				[['my', '\u1019\u103c\u1014\u103a\u1019\u102c']],
				['my'],
				1,
			],
			[431, qf, [['nb', 'norsk bokm\u00e5l']], ['nb'], 1],
			[
				485,
				rf,
				[['ne', '\u0928\u0947\u092a\u093e\u0932\u0940']],
				['ne'],
				1,
			],
			[432, uf, [['nl', ta]], ['nl'], 1],
			[434, zf, [['nn', 'nynorsk']], ['nn'], 1],
			[433, Af, [['no', 'norsk']], ['no'], 1],
			[480, Gf, [['ny', 'Nyanja']], ['ny'], 1],
			[476, Kf, [['or', '\u0b13\u0b21\u0b3c\u0b3f\u0b06']], ['or'], 1],
			[
				463,
				Rf,
				[['pa', '\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40']],
				['pa'],
				1,
			],
			[435, Tf, [['pl', 'polski']], ['pl'], 1],
			[436, kg, [[Zf, 'portugu\u00eas']], null, 1],
			[437, ag, [[Zf, 'portugu\u00eas (Brasil)']], [Zf], 1],
			[438, fg, [[$f, 'portugu\u00eas (Portugal)']], [$f], 1],
			[439, pg, [['ro', 'rom\u00e2n\u0103']], ['ro'], 1],
			[
				440,
				vg,
				[['ru', '\u0440\u0443\u0441\u0441\u043a\u0438\u0439']],
				['ru'],
				1,
			],
			[491, Ig, [['si', '\u0dc3\u0dd2\u0d82\u0dc4\u0dbd']], ['si'], 1],
			[441, Lg, [['sk', 'Sloven\u010dina']], ['sk'], 1],
			[442, Og, [['sl', 'sloven\u0161\u010dina']], ['sl'], 1],
			[499, Qg, [['sm', 'Samoan']], ['sm'], 1],
			[500, Sg, [['sn', 'chiShona']], ['sn'], 1],
			[472, Tg, [['so', 'Soomaali']], ['so'], 1],
			[443, Ug, [['sq', 'shqip']], ['sq'], 1],
			[
				444,
				Yg,
				[['sr', '\u0441\u0440\u043f\u0441\u043a\u0438']],
				['sr'],
				1,
			],
			[481, ch, [['su', 'Sundanese']], ['su'], 1],
			[445, dh, [['sv', 'svenska']], ['sv'], 1],
			[446, fh, [['sw', 'Kiswahili']], ['sw'], 1],
			[473, lh, [[kh, '\u0ba4\u0bae\u0bbf\u0bb4\u0bcd']], [kh], 1],
			[
				466,
				th,
				[['te', '\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41']],
				['te'],
				1,
			],
			[
				502,
				zh,
				[['tg', '\u0442\u043e\u04b7\u0438\u043a\u04e3']],
				['tg'],
				1,
			],
			[454, Bh, [['th', '\u0e44\u0e17\u0e22']], ['th'], 1],
			[508, Hh, [['ti', '\u1275\u130d\u122d\u129b']], ['ti'], 1],
			[447, Ph, [['tr', 'T\u00fcrk\u00e7e']], ['tr'], 1],
			[
				448,
				Zh,
				[
					[
						'uk',
						'\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430',
					],
				],
				['uk'],
				1,
			],
			[486, di, [['ur', '\u0627\u0631\u062f\u0648']], ['ur'], 1],
			[503, ki, [['uz', 'o\u2018zbek']], ['uz'], 1],
			[449, oi, [['vi', 'Ti\u1ebfng Vi\u1ec7t']], ['vi'], 1],
			[482, xi, [['xh', 'Xhosa']], ['xh'], 1],
			[
				510,
				yi,
				[['yi', '\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9']],
				['yi'],
				1,
			],
			[450, Oi, [[Ei, '\u4e2d\u6587']], null, 1],
			[451, Ii, [[Ei, '\u4e2d\u6587\uff08\u7b80\u4f53\uff09']], [Ei], 1],
			[452, Li, [[Hi, '\u4e2d\u6587\uff08\u7e41\u9ad4\uff09']], [Hi], 1],
			[475, Xi, [['zh-yue', '\u7cb5\u8a9e']], ['zh-yue'], 1],
			[460, Yi, [['zu', 'isiZulu']], ['zu'], 1],
			[
				238,
				'see-t-k0-und',
				[['see', 'On\u00f6dowa\u02bcga:\u02bc']],
				['see'],
				0,
			],
			[214, Jh, [['ti', '\u130d\u12d5\u12dd']], ['ti'], 0],
			[215, ff, [['mr', bj]], ['mr'], 0],
			[241, df, [['mr', cj]], ['mr'], 0],
			[216, ed, [['ht', ja]], ['ht'], 0],
			[47, bg, [[Zf, wa]], null, 38],
			[217, xf, [[q, Ba]], null, 0],
			[218, xc, [[q, Ba]], ['fr'], 0],
			[219, Nb, [[q, Ba]], ['de'], 0],
			[220, ud, [[q, Ba]], ['it'], 0],
			[221, dg, [[q, Ba]], [Zf], 0],
			[222, ig, [[q, Ba]], [$f], 0],
			[223, gc, [[q, Ba]], ['es'], 0],
			[224, Fb, [[q, ba]], ['cy'], 0],
			[225, Dc, [[q, ba]], ['ga'], 0],
			[369, Cc, [[q, 'Irish']], null, 0],
			[226, nd, [[q, ba]], ['id'], 0],
			[227, ee, [[q, ba]], ['jw'], 0],
			[228, hf, [[q, ba]], ['ms'], 0],
			[229, gh, [[q, ba]], ['sw'], 0],
			[230, Kh, [[q, ba]], ['tl'], 0],
			[
				231,
				nf,
				[
					[
						'my',
						'\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c(\u1019\u103c\u1014\u103a\u1005\u1036)',
					],
				],
				['my'],
				0,
			],
			[236, Xd, [[q, 'Nunavik Inuktitut']], ['iu'], 0],
			[237, Yd, [[q, 'Nunavut Inuktitut']], ['iu'], 0],
			[245, Wd, [[q, 'Inuktitut Unicode']], ['iu'], 0],
			[600, 'en-t-i0-voice', [[q, ia]], null, 43],
			[
				601,
				Ji,
				[['zh', '\u4e2d\u6587\uff08\u7b80\u4f53\uff09']],
				null,
				43,
			],
			[
				240,
				'lis-t-k0-und',
				[['lis', '\ua4e1\ua4f2\ua4e2\ua4f4']],
				['lis'],
				0,
			],
			[493, ci, [[q, 'Emoji & Symbol']], ['mul'], 1],
			[351, vb, [[q, 'Corsican']], null, 0],
			[352, Ac, [[q, 'West Frisian']], null, 0],
			[353, Fc, [[q, 'Scots Gaelic']], null, 0],
			[244, Pc, [['haw', aj]], ['haw'], 0],
			[354, Oc, [[q, 'Hawaiian']], null, 0],
			[355, Ce, [[q, 'Luxembourgish']], null, 0],
			[243, Eg, [[q, 'Sindhi']], ['sd'], 0],
			[356, Rg, [[q, 'Samoan']], null, 0],
			[358, Mb, [['de', da]], null, 0],
			[359, fc, [['es', 'Espa\u00f1ol']], null, 0],
			[360, wc, [['fr', ja]], null, 0],
			[361, td, [['it', ra]], null, 0],
			[362, wf, [['nl', ta]], null, 0],
			[363, Uf, [['pl', 'polski']], null, 0],
			[364, cg, [[Zf, xa]], null, 0],
			[365, hg, [[$f, ya]], null, 0],
			[366, Qh, [['tr', 'T\u00fcrk\u00e7e - F']], null, 0],
			[367, Th, [['tr', 'T\u00fcrk\u00e7e - Q']], null, 0],
			[368, ve, [['ku', 'Kurd\u00ee Bedirxan']], ['ku'], 0],
			[56, 'ko-t-i0-und', [['ko', '\ud55c\uad6d\uc5b4']], null, 45],
			[
				58,
				be,
				[
					[
						'ja',
						'\u65e5\u672c\u8a9e\uff08US\u30ad\u30fc\u30dc\u30fc\u30c9\u7528\uff09',
					],
				],
				null,
				28,
			],
			[
				57,
				ae,
				[
					[
						'ja',
						'\u65e5\u672c\u8a9e\uff08\u65e5\u672c\u8a9e\u30ad\u30fc\u30dc\u30fc\u30c9\u7528\uff09',
					],
				],
				null,
				28,
			],
			[59, Di, [[Hi, '\u5ee3\u6771\u8a71']], null, 33],
			[
				55,
				Ch,
				[['th', '\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22']],
				['th'],
				46,
				[18],
			],
			[
				248,
				Of,
				[
					[
						'osa',
						'\ud801\udccf\ud801\udcd8\ud801\udcfb\ud801\udcd8\ud801\udcfb\ud801\udcdf \ud801\udcbb\ud801\udcdf',
					],
				],
				['osa'],
				0,
				null,
				['vkd_osa'],
			],
			[
				247,
				pc,
				[
					[
						'ff_Adlm',
						'\ud83a\udd06\ud83a\udd35\ud83a\udd24\ud83a\udd22\ud83a\udd2a/\ud83a\udd0a\ud83a\udd35\ud83a\udd24\ud83a\udd2c\ud83a\udd35\ud83a\udd24\ud83a\udd23\ud83a\udd2b',
					],
				],
				['ff'],
				0,
				null,
				['vkd_ff'],
			],
			[
				249,
				kb,
				[
					[
						'ccp',
						'\ud804\udd0c\ud804\udd0b\ud804\udd34\ud804\udd1f\ud804\udd33\ud804\udd26',
					],
				],
				['ccp'],
				0,
			],
			[251, Wc, [['hi', dj]], null, 0],
			[252, ef, [['mr', dj]], null, 0],
			[
				250,
				Kc,
				[
					[
						'gu',
						'\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0(PHONETIC)',
					],
				],
				null,
				0,
			],
			[253, If, [[q, 'Ojibwe Left Dot - E Finals']], ['oj'], 0],
			[
				254,
				Jf,
				[['one', 'On\u028cyote\u0294a\u00b7k\u00e1\u00b7']],
				['one'],
				0,
			],
			[255, Le, [['mez', 'Oma\u035eeqnome']], ['mez'], 0],
			[
				257,
				og,
				[
					[
						'rhg',
						'\ud803\udd0c\ud803\udd1f\ud803\udd07\ud803\udd25\ud803\udd1d\ud803\udd1a\ud803\udd12\ud803\udd19\ud803\udd1d',
					],
				],
				['rhg'],
				0,
			],
			[
				258,
				Ab,
				[['crk', '\u14c0\u1426\u1403\u152d\u140d\u140f\u1423']],
				['crk'],
				0,
			],
		],
		function (a) {
			var b = new Lp(a);
			if ((a = Gp(b, 2))) {
				Pp[a] = b;
				var c = Gp(Jp(b)[0], 2);
				c && (mA[a] = c);
			}
			D(Gp(b, 4), function (d) {
				d == Hi ? (d = 'zh-Hant') : d == Ei && (d = Gi);
				qz[d] || (qz[d] = []);
				qz[d].push(b);
			});
		}
	);
	var bq =
		'StopIteration' in z
			? z.StopIteration
			: {
					message: 'StopIteration',
					stack: '',
			  };
	aq.prototype.next = function () {
		throw bq;
	};
	aq.prototype.tb = function () {
		return this;
	};
	C(eq, aq);
	eq.prototype.next = function () {
		if (this.T) {
			if (!this.B || (this.O && 0 == this.F)) throw bq;
			var a = this.B;
			var b = this.K ? -1 : 1;
			if (this.D == b) {
				var c = this.K ? a.lastChild : a.firstChild;
				c ? dq(this, c) : dq(this, a, -1 * b);
			} else
				(c = this.K ? a.previousSibling : a.nextSibling)
					? dq(this, c)
					: dq(this, a.parentNode, -1 * b);
			this.F += this.D * (this.K ? -1 : 1);
		} else this.T = !0;
		a = this.B;
		if (!this.B) throw bq;
		return a;
	};
	eq.prototype.hc = function (a) {
		return a.B == this.B && (!this.B || a.D == this.D);
	};
	fq.prototype.Be = function () {
		return !1;
	};
	fq.prototype.df = function (a) {
		this.lb() || this.Rb();
		return this.Lc(a, !0);
	};
	C(iq, eq);
	C(jq, iq);
	jq.prototype.I = function () {
		return this.A;
	};
	jq.prototype.H = function () {
		return (
			this.T &&
			(this.B != (this.G ? this.A : this.C)
				? !1
				: this.G
				? this.L
					? -1 != this.D
					: 1 == this.D
				: !this.Y || 1 != this.D)
		);
	};
	jq.prototype.next = function () {
		if (this.H()) throw bq;
		return jq.ca.next.call(this);
	};
	kq.prototype.tb = function () {
		return new jq(this.va(), this.La(), this.Ka(), this.bb());
	};
	C(nq, kq);
	x = nq.prototype;
	x.jc = function () {
		return this.B;
	};
	x.pd = function () {
		return this.B.commonAncestorContainer;
	};
	x.va = function () {
		return this.B.startContainer;
	};
	x.La = function () {
		return this.B.startOffset;
	};
	x.Ka = function () {
		return this.B.endContainer;
	};
	x.bb = function () {
		return this.B.endOffset;
	};
	x.Ca = function (a, b, c) {
		return this.B.compareBoundaryPoints(
			1 == c
				? 1 == b
					? z.Range.START_TO_START
					: z.Range.START_TO_END
				: 1 == b
				? z.Range.END_TO_START
				: z.Range.END_TO_END,
			a
		);
	};
	x.ya = function () {
		return this.B.collapsed;
	};
	x.be = function () {
		return this.B.toString();
	};
	x.select = function (a) {
		var b = dm(I(this.va()));
		this.Bc(b.getSelection(), a);
	};
	x.Bc = function (a) {
		a.removeAllRanges();
		a.addRange(this.B);
	};
	x.ee = function () {
		var a = this.B;
		a.extractContents();
		if (a.startContainer.hasChildNodes()) {
			var b = a.startContainer.childNodes[a.startOffset];
			if (b) {
				var c = b.previousSibling;
				'' == ym(b) && lm(b);
				c && '' == ym(c) && lm(c);
			}
		}
		if (no) {
			b = this.va();
			c = this.La();
			var d = this.Ka(),
				e = this.bb(),
				g = b.nextSibling;
			b == d &&
				b.parentNode &&
				3 == b.nodeType &&
				g &&
				3 == g.nodeType &&
				((b.nodeValue += g.nodeValue),
				lm(g),
				a.setStart(b, c),
				a.setEnd(d, e));
		}
	};
	x.ce = function (a, b) {
		var c = this.B.cloneRange();
		c.collapse(b);
		c.insertNode(a);
		c.detach();
		return a;
	};
	x.collapse = function (a) {
		this.B.collapse(a);
	};
	C(rq, nq);
	rq.prototype.Bc = function (a, b) {
		!b || this.ya()
			? rq.ca.Bc.call(this, a, b)
			: (a.collapse(this.Ka(), this.bb()),
			  a.extend(this.va(), this.La()));
	};
	C(sq, kq);
	x = sq.prototype;
	x.jc = function () {
		return this.B;
	};
	x.pd = function () {
		if (!this.K) {
			var a = this.B.text,
				b = this.B.duplicate(),
				c = a.replace(/ +$/, '');
			(c = a.length - c.length) && b.moveEnd(ob, -c);
			c = b.parentElement();
			b = b.htmlText.replace(/(\r\n|\r|\n)+/g, ' ').length;
			if (this.ya() && 0 < b) return (this.K = c);
			for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, ' ').length; )
				c = c.parentNode;
			for (
				;
				1 == c.childNodes.length &&
				c.innerText == zq(c.firstChild) &&
				oq(c.firstChild);

			)
				c = c.firstChild;
			0 == a.length && (c = vq(this, c));
			this.K = c;
		}
		return this.K;
	};
	x.va = function () {
		this.A || ((this.A = xq(this, 1)), this.ya() && (this.C = this.A));
		return this.A;
	};
	x.La = function () {
		0 > this.D && ((this.D = yq(this, 1)), this.ya() && (this.F = this.D));
		return this.D;
	};
	x.Ka = function () {
		if (this.ya()) return this.va();
		this.C || (this.C = xq(this, 0));
		return this.C;
	};
	x.bb = function () {
		if (this.ya()) return this.La();
		0 > this.F && ((this.F = yq(this, 0)), this.ya() && (this.D = this.F));
		return this.F;
	};
	x.Ca = function (a, b, c) {
		return this.B.compareEndPoints(
			(1 == b ? 'Start' : 'End') + 'To' + (1 == c ? 'Start' : 'End'),
			a
		);
	};
	x.ya = function () {
		return 0 == this.B.compareEndPoints('StartToEnd', this.B);
	};
	x.be = function () {
		return this.B.text;
	};
	x.select = function () {
		this.B.select();
	};
	x.ee = function () {
		if (!this.ya() && this.B.htmlText) {
			var a = this.va(),
				b = this.Ka(),
				c = this.B.text,
				d = this.B.duplicate();
			d.moveStart(ob, 1);
			d.moveStart(ob, -1);
			d.text == c && (this.B = d);
			this.B.text = '';
			uq(this);
			c = this.va();
			d = this.La();
			try {
				var e = a.nextSibling;
				a == b &&
					a.parentNode &&
					3 == a.nodeType &&
					e &&
					3 == e.nodeType &&
					((a.nodeValue += e.nodeValue),
					lm(e),
					(this.B = tq(c)),
					this.B.move(ob, d),
					uq(this));
			} catch (g) {}
		}
	};
	x.ce = function (a, b) {
		var c = this.B.duplicate();
		var d = d || J(c.parentElement());
		if (1 != a.nodeType) {
			var e = !0;
			a = d.P(f, null, a);
		}
		c.collapse(b);
		b = a;
		d = d || J(c.parentElement());
		var g = (a = b.id);
		a || (a = b.id = 'goog_' + Wz++);
		c.pasteHTML(b.outerHTML);
		(b = d.M(a)) && (g || b.removeAttribute('id'));
		a = b;
		if (e) {
			c = a.firstChild;
			e = a;
			if ((b = e.parentNode) && 11 != b.nodeType)
				if (e.removeNode) e.removeNode(!1);
				else {
					for (; (d = e.firstChild); ) b.insertBefore(d, e);
					lm(e);
				}
			a = c;
		}
		c = a;
		uq(this);
		return c;
	};
	x.collapse = function (a) {
		this.B.collapse(a);
		a
			? ((this.C = this.A), (this.F = this.D))
			: ((this.A = this.C), (this.D = this.F));
	};
	C(Aq, nq);
	Aq.prototype.Bc = function (a) {
		a.collapse(this.va(), this.La());
		(this.Ka() == this.va() && this.bb() == this.La()) ||
			a.extend(this.Ka(), this.bb());
		0 == a.rangeCount && a.addRange(this.B);
	};
	C(Bq, nq);
	Bq.prototype.Ca = function (a, b, c) {
		return G('528')
			? Bq.ca.Ca.call(this, a, b, c)
			: this.B.compareBoundaryPoints(
					1 == c
						? 1 == b
							? z.Range.START_TO_START
							: z.Range.END_TO_START
						: 1 == b
						? z.Range.START_TO_END
						: z.Range.END_TO_END,
					a
			  );
	};
	Bq.prototype.Bc = function (a, b) {
		b
			? a.setBaseAndExtent(this.Ka(), this.bb(), this.va(), this.La())
			: a.setBaseAndExtent(this.va(), this.La(), this.Ka(), this.bb());
	};
	C(Eq, fq);
	x = Eq.prototype;
	x.od = function () {
		return 'text';
	};
	x.kc = function () {
		return Iq(this).jc();
	};
	x.Pb = function () {
		return 1;
	};
	x.jb = function () {
		return this;
	};
	x.nc = function () {
		return Iq(this).pd();
	};
	x.xa = function () {
		return this.A || (this.A = Iq(this).va());
	};
	x.Ra = function () {
		return null != this.D ? this.D : (this.D = Iq(this).La());
	};
	x.Qa = function () {
		return this.C || (this.C = Iq(this).Ka());
	};
	x.xb = function () {
		return null != this.B ? this.B : (this.B = Iq(this).bb());
	};
	x.Be = function () {
		return this.F;
	};
	x.mc = function (a, b) {
		var c = a.od();
		return 'text' == c
			? mq(Iq(this), Iq(a), b)
			: 'control' == c
			? ((a = Lq(a)),
			  (b ? Jj : Kj)(
					a,
					function (d) {
						return this.ae(d, b);
					},
					this
			  ))
			: !1;
	};
	x.ae = function (a, b) {
		return this.mc(Fq(wq(a), void 0), b);
	};
	x.lb = function () {
		return Iq(this).ya();
	};
	x.kb = function () {
		return Iq(this).be();
	};
	x.tb = function () {
		return new jq(this.xa(), this.Ra(), this.Qa(), this.xb());
	};
	x.select = function () {
		Iq(this).select(this.F);
	};
	x.Rb = function () {
		Iq(this).ee();
		this.A = this.D = this.C = this.B = null;
	};
	x.Lc = function (a, b) {
		a = Iq(this).ce(a, b);
		this.A = this.D = this.C = this.B = null;
		return a;
	};
	x.collapse = function (a) {
		a = this.Be() ? !a : a;
		this.K && this.K.collapse(a);
		a
			? ((this.C = this.A), (this.B = this.D))
			: ((this.A = this.C), (this.D = this.B));
		this.F = !1;
	};
	C(Jq, fq);
	Jq.prototype.mc = function (a, b) {
		var c = gq(this);
		a = gq(a);
		return (b ? Jj : Kj)(a, function (d) {
			return Jj(c, function (e) {
				return e.mc(d, b);
			});
		});
	};
	Jq.prototype.ae = function (a, b) {
		return this.mc(Fq(wq(a), void 0), b);
	};
	Jq.prototype.Lc = function (a, b) {
		b
			? ((b = this.xa()), b.parentNode && b.parentNode.insertBefore(a, b))
			: ((b = this.Qa()),
			  b.parentNode && b.parentNode.insertBefore(a, b.nextSibling));
		return a;
	};
	C(Kq, Jq);
	x = Kq.prototype;
	x.od = function () {
		return 'control';
	};
	x.kc = function () {
		return this.B || document.body.createControlRange();
	};
	x.Pb = function () {
		return this.B ? this.B.length : 0;
	};
	x.jb = function (a) {
		return Fq(wq(this.B.item(a)), void 0);
	};
	x.nc = function () {
		return sm.apply(null, Lq(this));
	};
	x.xa = function () {
		return Mq(this)[0];
	};
	x.Ra = function () {
		return 0;
	};
	x.Qa = function () {
		var a = Mq(this),
			b = Ej(a);
		return Mj(a, function (c) {
			return om(c, b);
		});
	};
	x.xb = function () {
		return this.Qa().childNodes.length;
	};
	x.lb = function () {
		return !this.B || !this.B.length;
	};
	x.kb = function () {
		return '';
	};
	x.tb = function () {
		return new Nq(this);
	};
	x.select = function () {
		this.B && this.B.select();
	};
	x.Rb = function () {
		if (this.B) {
			for (var a = [], b = 0, c = this.B.length; b < c; b++)
				a.push(this.B.item(b));
			D(a, lm);
			this.collapse(!1);
		}
	};
	x.df = function (a) {
		a = this.Lc(a, !0);
		this.lb() || this.Rb();
		return a;
	};
	x.collapse = function () {
		this.C = this.A = this.B = null;
	};
	C(Nq, iq);
	Nq.prototype.I = function () {
		return this.A;
	};
	Nq.prototype.H = function () {
		return !this.F && !this.G.length;
	};
	Nq.prototype.next = function () {
		if (this.H()) throw bq;
		if (!this.F) {
			var a = this.G.shift();
			dq(this, a, 1, 1);
			return a;
		}
		return Nq.ca.next.call(this);
	};
	C(Oq, Jq);
	x = Oq.prototype;
	x.od = function () {
		return 'mutli';
	};
	x.kc = function () {
		return this.A[0];
	};
	x.Pb = function () {
		return this.A.length;
	};
	x.jb = function (a) {
		this.C[a] || (this.C[a] = Fq(Dq(this.A[a]), void 0));
		return this.C[a];
	};
	x.nc = function () {
		if (!this.D) {
			for (var a = [], b = 0, c = this.Pb(); b < c; b++)
				a.push(this.jb(b).nc());
			this.D = sm.apply(null, a);
		}
		return this.D;
	};
	x.xa = function () {
		return Pq(this)[0].xa();
	};
	x.Ra = function () {
		return Pq(this)[0].Ra();
	};
	x.Qa = function () {
		return Ej(Pq(this)).Qa();
	};
	x.xb = function () {
		return Ej(Pq(this)).xb();
	};
	x.lb = function () {
		return 0 == this.A.length || (1 == this.A.length && this.jb(0).lb());
	};
	x.kb = function () {
		return Hj(gq(this), function (a) {
			return a.kb();
		}).join('');
	};
	x.tb = function () {
		return new Qq(this);
	};
	x.select = function () {
		var a = dm(I(L ? this.nc() : this.xa())).getSelection();
		a.removeAllRanges();
		for (var b = 0, c = this.Pb(); b < c; b++) a.addRange(this.jb(b).kc());
	};
	x.Rb = function () {
		D(gq(this), function (a) {
			a.Rb();
		});
	};
	x.collapse = function (a) {
		if (!this.lb()) {
			var b = a ? this.jb(0) : this.jb(this.Pb() - 1);
			this.C = [];
			this.D = this.B = null;
			b.collapse(a);
			this.C = [b];
			this.B = [b];
			this.A = [b.kc()];
		}
	};
	C(Qq, iq);
	Qq.prototype.I = function () {
		return this.A[0].I();
	};
	Qq.prototype.H = function () {
		return this.A[this.C].H();
	};
	Qq.prototype.next = function () {
		try {
			var a = this.A[this.C],
				b = a.next();
			dq(this, a.B, a.D, a.F);
			return b;
		} catch (c) {
			if (c !== bq || this.A.length - 1 == this.C) throw c;
			this.C++;
			return this.next();
		}
	};
	C(Xq, vo);
	Xq.prototype.Ma = function (a, b, c) {
		var d = I(a);
		var e = d.body;
		d = d.documentElement;
		d = new H(e.scrollLeft || d.scrollLeft, e.scrollTop || d.scrollTop);
		e = this.A.x + d.x;
		d = this.A.y + d.y;
		var g = fo(a);
		e -= g.x;
		d -= g.y;
		ho(new H(e, d), a, b, c, null, null, void 0);
	};
	x = $q.prototype;
	x.Va = function () {
		return this.D;
	};
	x.wc = function (a) {
		var b = Nn(this.C);
		a = Wq(this.C, (b && a) || (!b && !a) ? this.B : this.A);
		Tq(a, this.F);
		return new Xq(a);
	};
	x.replace = function (a, b) {
		if (this.Db() && (this.D != a || b)) {
			b = Zq(this);
			var c = b[0],
				d = b[1];
			this.B <= c && this.A > c && this.A <= d
				? (c = this.A)
				: this.B > c && this.B <= d && this.A > d
				? (d = this.B)
				: this.B <= c && this.A > d && (c = d = this.A);
			b = a.length - (this.A - this.B);
			this.B > c && this.A <= d
				? (d += b)
				: c >= this.A && ((c += b), (d += b));
			var e = this.C.value;
			this.C.value = e.slice(0, this.B) + a + e.slice(this.A);
			this.A = this.B + a.length;
			this.D = a;
			a = c;
			c = d;
			if (void 0 !== this.C.selectionStart)
				(this.C.selectionStart = a), (this.C.selectionEnd = c);
			else
				try {
					var g = this.C.createTextRange(),
						h = g.text.length;
					g.moveStart(ob, a);
					g.moveEnd(ob, c - h);
					g.select();
				} catch (k) {}
			b && $r(this.K, this, this.A - b, b);
		}
	};
	x.Je = function (a, b, c) {
		if (this.Db()) {
			for (
				var d = this.C.value, e = this.B - 1, g = 0;
				0 <= e && !(++g > b) && !d.charAt(e).match(a);

			)
				e--;
			this.B = e + 1;
			if (c) {
				for (
					e = this.A;
					e < d.length && !(++g > b) && !d.charAt(e).match(a);

				)
					e++;
				this.A = e;
			}
			this.D = d.slice(this.B, this.A);
		}
	};
	x.Db = function () {
		return this.C.value.slice(this.B, this.A) == this.D;
	};
	x.Ke = function () {
		return this.B == this.A;
	};
	x.hd = function () {
		var a = Zq(this);
		return (
			this.F.A.activeElement == this.C &&
			((a[0] >= this.B && a[0] <= this.A) ||
				(a[1] >= this.B && a[1] <= this.A))
		);
	};
	x.da = function () {
		delete this.K.D[String(vj(this))];
	};
	x.Ud = function (a, b) {
		this.B > a && (this.B += b);
		this.A > a && (this.A += b);
	};
	x = ar.prototype;
	x.Va = function () {
		return this.Db() ? this.K : '';
	};
	x.wc = function (a) {
		var b = Nn(Yq(this.G));
		if (!L) {
			var c = br(this);
			c.collapse((b && a) || (!b && !a));
		}
		a = Vq(this.F, c);
		Tq(a, this.F);
		return new Xq(a);
	};
	x.replace = function (a, b) {
		if (this.Db() && (this.K != a || b)) {
			var c = (b = null),
				d = 0,
				e = 0,
				g = this.Ke() || this.hd();
			g ||
				((e = Sq(Em(this.F))),
				(b = e.xa()),
				(c = e.Qa()),
				(d = e.Ra()),
				(e = e.xb()));
			var h = 0;
			a = a.replace(' ', '\u00a0');
			if (this.A != this.C || 3 != this.A.nodeType) {
				var k = br(this);
				k.Rb();
				this.A = this.C = k.xa();
				this.D = this.B = k.Ra();
			} else h = a.length - (this.B - this.D);
			if (3 == this.A.nodeType)
				(k = this.A.data),
					(this.A.data = k.slice(0, this.D) + a + k.slice(this.B)),
					(this.C = this.A),
					(this.B = this.D + a.length);
			else if (1 == this.A.nodeType) {
				k = Cm(this.F, a);
				var l = this.A;
				l.insertBefore(k, l.childNodes[this.B] || null);
				this.A = this.C = k;
				this.D = 0;
				this.B = a.length;
			}
			h &&
				((k = this.B - h),
				$r(this.G, this, k, h),
				g || this.C != c || (d > k && (d += h), e > k && (e += h)));
			g ? ((k = br(this)), k.collapse(!1)) : (k = Hq(b, d, c, e));
			k.select();
			this.K = a;
		}
	};
	x.Je = function (a, b, c) {
		if (this.Db() && this.A == this.C && this.D == this.B) {
			var d = this.A;
			if (3 != d.nodeType && 0 < this.D)
				for (d = d.childNodes[this.D - 1]; d && 3 != d.nodeType; )
					d = d.lastChild;
			if (d && 3 == d.nodeType) {
				d != this.A &&
					((this.A = this.C = d), (this.D = this.B = d.data.length));
				for (var e = this.D - 1, g = 0; d && 3 == d.nodeType; )
					if (0 > e)
						(d = d.previousSibling) &&
							3 == d.nodeType &&
							(e = d.data.length - 1);
					else {
						if (++g > b) break;
						if (d.data.charAt(e).match(a)) break;
						this.A = d;
						this.D = e;
						e--;
					}
				if (c)
					for (d = this.C, e = this.B; d && 3 == d.nodeType; )
						if (e >= d.data.length || 0 == d.data.length)
							(d = d.nextSibling), (e = 0);
						else {
							if (++g > b) break;
							if (d.data.charAt(e).match(a)) break;
							this.C = d;
							this.B = e + 1;
							e++;
						}
				this.K = br(this).kb();
			}
		}
	};
	x.Db = function () {
		return !(this.A && this.C && this.A.parentNode && this.C.parentNode) ||
			(3 == this.A.nodeType && this.D > this.A.data.length) ||
			(3 == this.C.nodeType && this.B > this.C.data.length)
			? !1
			: br(this).kb() == this.K;
	};
	x.Ke = function () {
		return this.A == this.C && this.D == this.B;
	};
	x.hd = function () {
		var a = br(this),
			b = Sq(Em(this.F));
		return a && b && I(hq(a)) == I(hq(b)) ? a.mc(b, !0) : !1;
	};
	x.da = function () {
		delete this.G.D[String(vj(this))];
		this.A == this.C &&
			3 == this.A.nodeType &&
			this.A.parentNode &&
			!this.A.data &&
			this.F.ab(this.A);
		this.A = this.C = null;
		this.D = this.B = 0;
	};
	x.Ud = function (a, b) {
		this.D <= a && this.B > a
			? (this.B = this.D = 0)
			: this.D > a && ((this.D += b), (this.B += b));
		this.K = br(this).kb();
	};
	C(dr, R);
	x = dr.prototype;
	x.Sb = null;
	x.Rc = null;
	x.Cd = null;
	x.Sc = null;
	x.wa = -1;
	x.Sa = -1;
	x.qd = !1;
	var nA = {
			3: 13,
			12: 144,
			63232: 38,
			63233: 40,
			63234: 37,
			63235: 39,
			63236: 112,
			63237: 113,
			63238: 114,
			63239: 115,
			63240: 116,
			63241: 117,
			63242: 118,
			63243: 119,
			63244: 120,
			63245: 121,
			63246: 122,
			63247: 123,
			63248: 44,
			63272: 46,
			63273: 36,
			63275: 35,
			63276: 33,
			63277: 34,
			63289: 144,
			63302: 45,
		},
		oA = {
			Up: 38,
			Down: 40,
			Left: 37,
			Right: 39,
			Enter: 13,
			F1: 112,
			F2: 113,
			F3: 114,
			F4: 115,
			F5: 116,
			F6: 117,
			F7: 118,
			F8: 119,
			F9: 120,
			F10: 121,
			F11: 122,
			F12: 123,
			'U+007F': 46,
			Home: 36,
			End: 35,
			PageUp: 33,
			PageDown: 34,
			Insert: 45,
		},
		pA = !M || G('525'),
		qA = Im && Q;
	x = dr.prototype;
	x.Af = function (a) {
		if (M || No)
			if (
				(17 == this.wa && !a.ctrlKey) ||
				(18 == this.wa && !a.altKey) ||
				(Im && 91 == this.wa && !a.metaKey)
			)
				this.Sa = this.wa = -1;
		-1 == this.wa &&
			(a.ctrlKey && 17 != a.keyCode
				? (this.wa = 17)
				: a.altKey && 18 != a.keyCode
				? (this.wa = 18)
				: a.metaKey && 91 != a.keyCode && (this.wa = 91));
		pA &&
		!Oo(a.keyCode, this.wa, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)
			? this.handleEvent(a)
			: ((this.Sa = Mo(a.keyCode)), qA && (this.qd = a.altKey));
	};
	x.Wf = function (a) {
		this.Sa = this.wa = -1;
		this.qd = a.altKey;
	};
	x.handleEvent = function (a) {
		var b = a.A,
			c = b.altKey;
		if (L && a.type == u) {
			var d = this.Sa;
			var e = 13 != d && 27 != d ? b.keyCode : 0;
		} else
			(M || No) && a.type == u
				? ((d = this.Sa),
				  (e =
						0 <= b.charCode && 63232 > b.charCode && Lo(d)
							? b.charCode
							: 0))
				: wn && !M
				? ((d = this.Sa), (e = Lo(d) ? b.keyCode : 0))
				: (a.type == u
						? (qA && (c = this.qd),
						  b.keyCode == b.charCode
								? 32 > b.keyCode
									? ((d = b.keyCode), (e = 0))
									: ((d = this.Sa), (e = b.charCode))
								: ((d = b.keyCode || this.Sa),
								  (e = b.charCode || 0)))
						: ((d = b.keyCode || this.Sa), (e = b.charCode || 0)),
				  Im && 63 == e && 224 == d && (d = 191));
		var g = (d = Mo(d));
		d
			? 63232 <= d && d in nA
				? (g = nA[d])
				: 25 == d && a.shiftKey && (g = 9)
			: b.keyIdentifier &&
			  b.keyIdentifier in oA &&
			  (g = oA[b.keyIdentifier]);
		(Q &&
			pA &&
			a.type == u &&
			!Oo(g, this.wa, a.shiftKey, a.ctrlKey, c, a.metaKey)) ||
			((a = g == this.wa),
			(this.wa = g),
			(b = new fr(g, e, a, b)),
			(b.altKey = c),
			this.J(b));
	};
	x.M = function () {
		return this.Sb;
	};
	x.N = function () {
		dr.ca.N.call(this);
		er(this);
	};
	C(fr, Km);
	gr.prototype.get = function () {
		if (0 < this.B) {
			this.B--;
			var a = this.A;
			this.A = a.next;
			a.next = null;
		} else a = this.C();
		return a;
	};
	var jr;
	var vr = new gr(
		function () {
			return new pr();
		},
		function (a) {
			a.reset();
		}
	);
	mr.prototype.add = function (a, b) {
		var c = vr.get();
		c.set(a, b);
		this.B ? (this.B.next = c) : (this.A = c);
		this.B = c;
	};
	pr.prototype.set = function (a, b) {
		this.A = a;
		this.B = b;
		this.next = null;
	};
	pr.prototype.reset = function () {
		this.next = this.B = this.A = null;
	};
	var qr,
		sr = !1,
		nr = new mr();
	zr.prototype.reset = function () {
		this.C = this.B = this.D = this.A = null;
		this.F = !1;
	};
	var Ar = new gr(
		function () {
			return new zr();
		},
		function (a) {
			a.reset();
		}
	);
	yr.prototype.then = function (a, b, c) {
		return Ir(
			this,
			typeof a === r ? a : null,
			typeof b === r ? b : null,
			c
		);
	};
	yr.prototype.$goog_Thenable = !0;
	yr.prototype.cancel = function (a) {
		if (0 == this.A) {
			var b = new Hr(a);
			tr(function () {
				Cr(this, b);
			}, this);
		}
	};
	yr.prototype.I = function (a) {
		this.A = 0;
		xr(this, 2, a);
	};
	yr.prototype.Y = function (a) {
		this.A = 0;
		xr(this, 3, a);
	};
	yr.prototype.H = function () {
		for (var a; (a = Dr(this)); ) Er(this, a, this.A, this.G);
		this.K = !1;
	};
	var Mr = ir;
	C(Hr, Cj);
	Hr.prototype.name = 'cancel';
	var Ur;
	C(Wr, N);
	Wr.prototype.ka = 0;
	Wr.prototype.N = function () {
		Wr.ca.N.call(this);
		0 != this.ka && z.clearTimeout(this.ka);
		this.ka = 0;
		delete this.A;
		delete this.B;
	};
	Wr.prototype.start = function (a) {
		0 != this.ka && z.clearTimeout(this.ka);
		this.ka = 0;
		this.ka = Nr(this.C, void 0 !== a ? a : this.F);
	};
	Wr.prototype.D = function () {
		this.ka = 0;
		this.A && this.A.call(this.B);
	};
	(mo && eo('4')) ||
		(jo && G('533')) ||
		(Q && G('2.0')) ||
		(L && G('10')) ||
		(wn && vk());
	var Xr = pj;
	x = Zr.prototype;
	x.Da = function (a) {
		if (0 > a) {
			a = -a;
			var b = Yq(this);
			if (b) {
				var c = '',
					d = this.A.A;
				d.selection && !wn
					? ((c = d.selection.createRange()),
					  c.collapse(!0),
					  c.moveEnd('word', -1),
					  (c = c.text.length > a ? c.text.slice(0, a) : c.text))
					: b.selectionEnd
					? (c = b.value.slice(
							b.selectionStart,
							Math.min(b.value.length, b.selectionStart + a)
					  ))
					: ((d = Em(this.A).getSelection()),
					  0 < d.rangeCount &&
							((b = d.getRangeAt(0).endContainer),
							(d = d.getRangeAt(0).endOffset),
							3 == b.nodeType &&
								(c = b.nodeValue.slice(
									d,
									Math.min(b.nodeValue.length, d + a)
								))));
				a = c;
			} else a = '';
			return a;
		}
		b = Yq(this);
		if (!b) return '';
		c = '';
		d = this.A.A;
		d.selection && !wn
			? ((c = d.selection.createRange()),
			  c.collapse(!0),
			  c.moveStart('word', -1),
			  (c = c.text.length > a ? c.text.slice(-a) : c.text))
			: b.selectionStart
			? (c = b.value.slice(
					Math.max(0, b.selectionStart - a),
					b.selectionStart
			  ))
			: ((d = Em(this.A).getSelection()),
			  0 < d.rangeCount &&
					((b = d.getRangeAt(0).startContainer),
					(d = d.getRangeAt(0).startOffset),
					3 == b.nodeType &&
						(c = b.nodeValue.slice(Math.max(0, d - a), d))));
		return c;
	};
	x.Ia = function (a, b) {
		var c = Yq(this);
		if (c) {
			var d = c.type && c.type.toUpperCase();
			d =
				('EMAIL' == d || 'NUMBER' == d) &&
				c.tagName.toUpperCase() == na;
			b = b ? b : 0;
			if (!d && c.tagName.toUpperCase() == na && a.length > b) {
				var e = c.maxLength;
				if (
					typeof e === Df &&
					0 <= e &&
					e < c.value.length + a.length - b
				)
					return;
			}
			this.$c();
			e = {};
			e['fs-input'] = a;
			Tr && 'gmail' == Ap && (Rr(c, je), Rr(c, u, 0, e));
			if (d) c.value = (b ? c.value.slice(0, -b) : c.value) + a;
			else if (
				(L && !G(9)) ||
				(L && !G(11) && ('\n' == a || (!a && 1 == b)))
			)
				(d = this.A.A.selection.createRange()),
					0 < b && (a || !d.text) && d.moveStart(ob, -b),
					(0 < b || d.text) && d.execCommand(Pb, !1, null),
					(' ' != a.charAt(0) && ' ' != a.charAt(a.length - 1)) ||
						!this.K ||
						((b = d.duplicate()),
						b.moveToElementText(d.parentElement()),
						(e = d.duplicate()),
						' ' == a.charAt(0) &&
							(d.moveStart(ob, -1),
							b.inRange(d)
								? ((e = d.text.charAt(0)),
								  (a = (' ' == e ? '\u00a0' : e) + a))
								: (d = e)),
						(e = d.duplicate()),
						' ' == a.charAt(a.length - 1) &&
							(d.moveEnd(ob, 1),
							b.inRange(d) &&
								' ' == d.text.charAt(d.text.length - 1) &&
								(a = a.slice(0, a.length - 1) + '\u00a0'),
							(d = e))),
					(d.text = a),
					d.collapse(!1),
					d.select();
			else if (this.K)
				a: {
					d = b;
					b = Em(this.A);
					e = b.document;
					b = b.getSelection();
					b.isCollapsed ||
						(e.execCommand(Pb, !1, null), a || (d = 0));
					if (0 < d) {
						if (
							(a || 1 < d || L || wn) &&
							3 == b.anchorNode.nodeType &&
							0 < b.rangeCount
						) {
							var g = b.getRangeAt(0),
								h,
								k = b.anchorOffset;
							for (h = Math.min(d, k); k >= h; ) {
								g.setStart(b.anchorNode, k - h);
								b.addRange(g);
								if (b.toString().length == h) break;
								h++;
							}
							h > d && (a = b.toString().slice(0, h - d) + a);
						}
						(b.isCollapsed && L) || e.execCommand(Pb, !1, null);
					}
					if (a) {
						if (e.queryCommandSupported) {
							if (e.queryCommandSupported('insertText')) {
								e.execCommand('insertText', !1, a);
								break a;
							}
							if (e.queryCommandSupported('insertHTML')) {
								a = a
									.replace(/&/g, '&amp;')
									.replace(/</g, '&lt;')
									.replace(/>/g, '&gt;')
									.replace(/\n/g, '<br>')
									.replace(/\u0020/g, '&nbsp;');
								e.execCommand('insertHTML', !1, a);
								break a;
							}
						}
						if (3 == b.anchorNode.nodeType) {
							d = b.anchorNode;
							g = b.anchorNode.nodeValue;
							e = b.anchorOffset + a.length;
							k = h = b.anchorOffset;
							for (
								var l = [' ', '\u00a0'];
								0 < k && E(l, g[--k]);

							);
							for (; h < g.length && E(l, g[h++]); );
							if (
								' ' == a.charAt(0) ||
								' ' == a.charAt(a.length - 1) ||
								k < h
							)
								(a =
									g.slice(k, b.anchorOffset) +
									a +
									g.slice(b.anchorOffset, h)),
									(a = a.replace(/\u00a0/g, ' ')),
									(a = a.replace(/^\u0020/g, '\u00a0')),
									(a = a.replace(/\u0020{2}/g, ' \u00a0')),
									(a = a.replace(/\u0020$/g, '\u00a0'));
							d.nodeValue = g.slice(0, k) + a + g.slice(h);
						} else
							(a = a.replace(/ /g, '\u00a0')),
								(d = Cm(this.A, a)),
								(e = b.anchorNode),
								e.insertBefore(
									d,
									e.childNodes[b.anchorOffset] || null
								),
								(e = a.length);
						a = b.getRangeAt(0);
						a.setStart(d, e);
						a.collapse(!0);
						b.addRange(a);
					}
				}
			else
				(d = this.C),
					(e = d.selectionStart),
					(g = d.selectionEnd),
					(h = d.value.length),
					e > h && (e = h),
					g > h && (g = h),
					!a && e < g && (b = 0),
					(e -= Math.min(e, b)),
					(d.value = d.value.slice(0, e) + a + d.value.slice(g)),
					(e += a.length),
					d.setSelectionRange(e, e);
			if (c && '1' == c.getAttribute('itaautodir')) {
				b = a = 0;
				d = !1;
				e = this.Da(50).split(Sz);
				for (g = 0; g < e.length; g++)
					(h = e[g]),
						Qz.test(h)
							? (a++, b++)
							: Rz.test(h)
							? (d = !0)
							: Pz.test(h)
							? b++
							: Tz.test(h) && (d = !0);
				c.dir =
					-1 == (0 == b ? (d ? 1 : 0) : 0.4 < a / b ? -1 : 1)
						? ug
						: Ie;
			}
		}
	};
	x.ld = function () {
		var a = Yq(this);
		if (a) {
			var b = J(a),
				c = a.nodeName.toUpperCase();
			if (Ql(8) && !Ql(9) && a.tagName.toUpperCase() == Aa) {
				var d = b.A.selection.createRange();
				c = d.getBoundingClientRect();
				var e = 0,
					g = 0;
				try {
					g = ao(a) + 2;
				} catch (k) {
					g = 16;
				}
				if (Nn(a)) {
					for (
						var h = d.duplicate();
						h.boundingHeight <= g &&
						h.htmlText == h.text &&
						((e = d.boundingLeft - h.boundingLeft),
						0 != h.moveStart(ob, -1));

					);
					d = En(a).x;
					e = Math.max(c.left - e, d);
				} else e = c.left;
				c = new H(e, c.top + g);
			} else c = c == Aa || c == na ? Wq(a) : Vq(b);
			g = c.x;
			e = c.y;
			a = Uq(a);
			g = g > a.right ? a.right : g;
			g = g < a.left ? a.left : g;
			e = e > a.bottom ? a.bottom : e;
			e = e < a.top ? a.top : e;
			c.x = g;
			c.y = e;
			Tq(c, b);
			return new Xq(c.x, c.y);
		}
		return null;
	};
	x.$c = function () {
		var a = Yq(this);
		a && (this.F ? Em(this.A).focus() : a.focus());
	};
	x.uc = function () {
		var a = Yq(this);
		if (!a) return !0;
		if (typeof a.selectionStart === Df)
			return a.selectionStart == a.selectionEnd;
		a = Sq(Em(this.A));
		return !!a && a.lb();
	};
	x.Mb = function () {
		if (!Yq(this)) return null;
		var a = null;
		this.K ? (a = new ar(this)) : (a = new $q(this));
		return (this.D[String(vj(a))] = a);
	};
	x.Fb = function (a, b, c) {
		Tr(Yq(this), a, b, c);
	};
	var as =
		/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
	var es = {},
		gs = ['box-shadow', 'z-index', 'margin', Wf, 'display'];
	var ls;
	y(js, N);
	js.prototype.D = function (a) {
		var b = this.B[a.type];
		return b && a.target
			? (b = b[vj(a.target)])
				? Jj(b, function (c) {
						var d = c.listener;
						return typeof d === r
							? d.call(c.ga, a)
							: d && d.handleEvent && typeof d.handleEvent === r
							? d.handleEvent.call(d, a)
							: !0;
				  })
				: !0
			: !0;
	};
	js.prototype.G = function (a) {
		var b = this.K[a.charCode];
		return b && a.target
			? (b = b[vj(a.target)])
				? Jj(b, function (c) {
						var d = c.listener;
						return typeof d === r
							? d.call(c.ga, a)
							: d && d.handleEvent && typeof d.handleEvent === r
							? d.handleEvent.call(d, a)
							: !0;
				  })
				: !0
			: !0;
	};
	js.prototype.N = function () {
		O(this.C);
		delete this.B;
		delete this.K;
		delete this.A;
	};
	qs.prototype.hc = function (a, b) {
		return this.listener == a && this.ga == b;
	};
	var ks = {};
	y(ws, R);
	x = ws.prototype;
	x.N = function () {
		R.prototype.N.call(this);
		O(this.A);
		delete this.A;
		this.C = this.D = this.G = null;
		O(this.F);
		delete this.F;
		O(this.B);
		delete this.B;
	};
	x.Fb = function (a, b, c) {
		this.A.Fb(a, b, c);
	};
	x.Vb = function (a) {
		a instanceof mp && (a.type = Gg);
		Pr(a) || this.J(a);
	};
	x.Da = function (a) {
		try {
			return this.A.Da(a);
		} catch (b) {}
		return '';
	};
	x.Ia = function (a, b) {
		try {
			this.A.Ia(a, b);
		} catch (c) {}
	};
	x.ld = function () {
		try {
			return this.A.ld();
		} catch (a) {}
		return null;
	};
	x.$c = function () {
		try {
			this.A.$c();
		} catch (a) {}
	};
	x.Mb = function () {
		try {
			return this.A.Mb();
		} catch (a) {}
		return null;
	};
	x.uc = function () {
		try {
			return this.A.uc();
		} catch (a) {}
		return !0;
	};
	y(zs, P);
	var As = Fk('https://ssl.gstatic.com/inputtools/js/config/%{id}.js');
	/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
	Ds.prototype.cancel = function (a) {
		if (this.A) this.C instanceof Ds && this.C.cancel();
		else {
			if (this.B) {
				var b = this.B;
				delete this.B;
				a ? b.cancel(a) : (b.H--, 0 >= b.H && b.cancel());
			}
			this.T ? this.T.call(this.L, this) : (this.I = !0);
			this.A || ((a = new Ms(this)), Hs(this), Fs(this, !1, a));
		}
	};
	Ds.prototype.Y = function (a, b) {
		this.G = !1;
		Fs(this, a, b);
	};
	Ds.prototype.then = function (a, b, c) {
		var d,
			e,
			g = new yr(function (h, k) {
				d = h;
				e = k;
			});
		Is(this, d, function (h) {
			h instanceof Ms ? g.cancel() : e(h);
		});
		return g.then(a, b, c);
	};
	Ds.prototype.$goog_Thenable = !0;
	C(Gs, Cj);
	Gs.prototype.message = 'Deferred has already fired';
	Gs.prototype.name = 'AlreadyCalledError';
	C(Ms, Cj);
	Ms.prototype.message = 'Deferred was canceled';
	Ms.prototype.name = 'CanceledError';
	Ls.prototype.B = function () {
		delete Ks[this.ka];
		throw this.A;
	};
	var Ks = {};
	C(Os, Cj);
	Rs.prototype.Ic = function (a, b) {
		return b;
	};
	Rs.prototype.ub = function (a) {
		return String(a);
	};
	var Zs = Fk('https://ssl.gstatic.com/inputtools/js/ime/2/%{fileName}.js'),
		Vs = {},
		Xs = {},
		at = {},
		Vv = null,
		Du = null,
		Ss = null;
	Rs.prototype.pa = yk;
	Rs.prototype.transform = yk;
	Rs.prototype.Nb = yk;
	Rs.prototype.L = 0;
	Aj('google.elements.ime.loadConfig', function (a, b) {
		var c = new Rs();
		$s(c, b);
		var d = at[a];
		d && $s(c, d);
		Vs[a] && (c.A = Vs[a].A);
		Vs[a] = c;
		hk(Xs, function (e) {
			e[a] && $s(e[a], b);
		});
		Ts().J(new zs('cfga', a));
	});
	Aj('google.elements.ime.overrideConfig', bt);
	var it = {
		dk: 'zh-hant-t-i0-array-1992',
		ek: 'zh-hans-t-i0-cangjie-1982',
		fk: Ki,
		gk: 'zh-hans-t-i0-cangjie-1987',
		hk: 'zh-hant-t-i0-cangjie-1987',
		ik: 'zh-hant-t-i0-cangjie-1987-x-m0-simplified',
		jk: Ci,
		kk: Bi,
		lk: Di,
		nk: 'zh-hant-t-i0-dayi-1988',
		qk: Pi,
		rk: Mi,
		pk: 'ko-t-i0-und',
		sk: Qi,
		tk: Ri,
		uk: Si,
		vk: Ti,
		wk: Ui,
		xk: Vi,
		yk: La,
		zk: Na,
		Ak: Va,
		Bk: cb,
		Ck: Ya,
		Dk: vf,
		Ek: Zb,
		Fk: vc,
		Gk: Lb,
		Hk: Wb,
		Ik: Jc,
		Jk: Sc,
		Kk: Vc,
		Lk: Zd,
		Mk: sd,
		Nk: ce,
		Pk: be,
		Ok: ae,
		Qk: pe,
		Rk: Se,
		Sk: cf,
		Tk: sf,
		Uk: Lf,
		Vk: nc,
		Wk: 'pl-t-i0-und',
		Xk: lg,
		Yk: bg,
		Zk: gg,
		$k: Sf,
		al: wg,
		bl: Bg,
		dl: Zg,
		el: Jg,
		fl: ec,
		gl: mh,
		hl: uh,
		il: Ch,
		jl: Ih,
		kl: 'tr-t-i0-und',
		ll: $h,
		ml: ei,
		nl: pi,
		ol: Wi,
		pl: Ni,
		ql: 'zh-hant-t-i0-bopomofo',
		tl: Vg,
		ul: Oa,
		vl: jd,
		wl: kd,
		xl: lc,
		yl: Wa,
		zl: db,
		Al: eb,
		Bl: hb,
		Cl: eg,
		Dl: $a,
		El: Za,
		Fl: jb,
		Gl: kb,
		Hl: qb,
		Il: rb,
		Kl: cd,
		Ll: Db,
		Ml: Cb,
		Nl: Hb,
		Ol: Xf,
		Pl: Xc,
		Ql: yf,
		Rl: xf,
		Sl: Ub,
		Tl: ac,
		Ul: $b,
		Vl: jc,
		Wl: bi,
		zo: Gh,
		Xl: rc,
		Yl: yc,
		$l: xc,
		am: pc,
		bm: Hc,
		fm: he,
		gm: ge,
		hm: Ob,
		im: Nb,
		jm: Xb,
		lm: Lc,
		nm: Mc,
		km: Kc,
		om: Pf,
		pm: Qf,
		rm: Pc,
		qm: ed,
		tm: Tc,
		um: Yc,
		vm: Wc,
		wm: id,
		xm: qd,
		ym: nd,
		zm: Wd,
		Am: Xd,
		Bm: Yd,
		Cm: Dc,
		Dm: Cc,
		Em: vd,
		Gm: ud,
		Hm: ee,
		Im: qe,
		Jm: re,
		Km: le,
		Lm: ne,
		Mm: te,
		Nm: ve,
		Om: we,
		Pm: Fe,
		Qm: Ke,
		Rm: 'lis-t-k0-und',
		Sm: He,
		Tm: Qe,
		Um: hf,
		Vm: Te,
		Wm: Ue,
		Xm: kf,
		Ym: Oe,
		Zm: ff,
		$m: df,
		an: ef,
		bn: Xe,
		cn: Le,
		dn: Ve,
		fn: $g,
		gn: of,
		hn: nf,
		jn: Ff,
		kn: Ef,
		ln: 'ne-t-k0-und',
		mn: tf,
		on: Bf,
		qn: Jf,
		rn: Mf,
		tn: Nf,
		un: Of,
		vn: ze,
		wn: Yf,
		xn: oc,
		yn: Ab,
		zn: Vf,
		Bn: jg,
		Dn: dg,
		Fn: ig,
		Gn: og,
		Hn: tg,
		In: sg,
		Jn: rg,
		Kn: qg,
		Ln: zg,
		Mn: yg,
		Nn: xg,
		On: Ag,
		Rn: Dg,
		Qn: Cg,
		Tn: 'see-t-k0-und',
		Un: Wg,
		Vn: Xg,
		Wn: Eg,
		Xn: Kg,
		Yn: Ng,
		Zn: Mg,
		$n: Pg,
		ao: sb,
		bo: tb,
		co: li,
		eo: hc,
		ho: gc,
		io: gh,
		jo: eh,
		ko: Jb,
		lo: Kh,
		mo: Ah,
		no: oh,
		oo: qh,
		po: nh,
		qo: rh,
		ro: ph,
		so: Xh,
		to: vh,
		uo: wh,
		vo: Fh,
		wo: Dh,
		xo: Eh,
		yo: Jh,
		Ao: Sh,
		Co: Uh,
		Eo: Yh,
		Fo: ai,
		Go: fi,
		Ho: bc,
		Io: ii,
		Jo: hi,
		Ko: ji,
		Lo: ri,
		Mo: qi,
		No: si,
		Oo: 'vi-t-k0-vni',
		Po: Fb,
		Ro: zi,
		nn: Ai,
		pn: If,
		dm: Mb,
		fo: fc,
		Zl: wc,
		Fm: td,
		Uh: wf,
		An: Uf,
		Cn: cg,
		En: hg,
		Bo: Qh,
		Do: Th,
		Jl: vb,
		sm: Oc,
		Pn: Rg,
		Sn: Fc,
		Qo: Ac,
		So: Ce,
		Vh: Ia,
		Wh: Ug,
		Xh: Ja,
		Yh: Ma,
		Zh: ld,
		$h: Qa,
		ai: Ta,
		bi: kc,
		ci: Ua,
		di: bb,
		ei: gb,
		fi: Xa,
		gi: mf,
		hi: Xi,
		ii: ib,
		ji: lb,
		ki: Oi,
		li: Ii,
		mi: Li,
		ni: ub,
		oi: bd,
		pi: Bb,
		ri: Gb,
		si: uf,
		ti: Yb,
		vi: cc,
		wi: ic,
		xi: sc,
		yi: qc,
		zi: uc,
		Ai: Gc,
		Bi: fe,
		Ci: Kb,
		Di: Vb,
		Ei: Ic,
		Fi: dd,
		Gi: Nc,
		Hi: Rc,
		Ii: Uc,
		Ji: $c,
		Ki: hd,
		Li: pd,
		Mi: md,
		Ni: Bc,
		Oi: rd,
		Pi: $d,
		Qi: de,
		Ri: oe,
		Si: ke,
		Ti: me,
		Ui: se,
		Vi: ue,
		Wi: xe,
		Xi: Ee,
		Yi: ye,
		Zi: Je,
		$i: Ge,
		aj: Be,
		bj: Pe,
		cj: Me,
		dj: gf,
		ej: Re,
		fj: jf,
		gj: Ne,
		hj: bf,
		ij: We,
		jj: lf,
		kj: rf,
		lj: Af,
		mj: qf,
		nj: zf,
		oj: Gf,
		pj: Kf,
		qj: mc,
		rj: Tf,
		sj: kg,
		tj: ag,
		uj: fg,
		vj: Rf,
		wj: pg,
		xj: vg,
		yj: Qg,
		zj: Ec,
		Aj: Yg,
		Bj: Sg,
		Cj: Ig,
		Dj: Lg,
		Ej: Og,
		Fj: Tg,
		Gj: dc,
		Hj: ch,
		Ij: fh,
		Jj: dh,
		Kj: zh,
		Lj: lh,
		Mj: th,
		Nj: Bh,
		Oj: fb,
		Pj: Hh,
		Qj: Ph,
		Rj: Zh,
		Tj: di,
		Uj: ki,
		Vj: oi,
		Wj: Eb,
		Xj: zc,
		Yj: xi,
		Zj: yi,
		$j: Yi,
		Sj: ci,
		np: 'en-t-i0-voice',
		lp: Ji,
		mp: 'zh-hant-t-i0-voice',
		pp: 'xkb:am:phonetic:arm',
		qp: 'xkb:be::fra',
		rp: 'xkb:be::ger',
		sp: 'xkb:be::nld',
		tp: 'xkb:bg::bul',
		up: 'xkb:bg:phonetic:bul',
		vp: 'xkb:br::por',
		wp: 'xkb:by::bel',
		yp: 'xkb:ca::fra',
		xp: 'xkb:ca:eng:eng',
		zp: 'xkb:ca:multix:fra',
		Bp: 'xkb:ch::ger',
		Ap: 'xkb:ch:fr:fra',
		Cp: 'xkb:cz::cze',
		Dp: 'xkb:cz:qwerty:cze',
		Ep: 'xkb:de::ger',
		Fp: 'xkb:de:neo:ger',
		Gp: 'xkb:dk::dan',
		Hp: 'xkb:ee::est',
		Jp: 'xkb:es::spa',
		Ip: 'xkb:es:cat:cat',
		Lp: 'xkb:fo::fao',
		Kp: 'xkb:fi::fin',
		Mp: 'xkb:fr:bepo:fra',
		Np: 'xkb:fr::fra',
		Op: 'xkb:gb:dvorak:eng',
		Pp: 'xkb:gb:extd:eng',
		Qp: 'xkb:ge::geo',
		Rp: 'xkb:gr::gre',
		Sp: 'xkb:hr::scr',
		Tp: 'xkb:hu::hun',
		Vp: 'xkb:hu:qwerty:hun',
		Wp: 'xkb:ie::ga',
		Xp: 'xkb:il::heb',
		Yp: 'xkb:is::ice',
		Zp: 'xkb:it::ita',
		$p: 'xkb:jp::jpn',
		aq: 'xkb:kz::kaz',
		bq: 'xkb:latam::spa',
		cq: 'xkb:lt::lit',
		eq: 'xkb:lv:apostrophe:lav',
		gq: 'xkb:mn::mon',
		fq: 'xkb:mk::mkd',
		hq: 'xkb:mt::mlt',
		iq: 'xkb:no::nob',
		jq: 'xkb:pl::pol',
		kq: 'xkb:pt::por',
		lq: 'xkb:ro::rum',
		mq: 'xkb:ro:std:rum',
		nq: 'xkb:rs::srp',
		pq: 'xkb:ru::rus',
		oq: 'xkb:ru:phonetic:rus',
		qq: 'xkb:se::swe',
		rq: 'xkb:si::slv',
		sq: 'xkb:sk::slo',
		uq: 'xkb:tr::tur',
		tq: 'xkb:tr:f:tur',
		vq: 'xkb:ua::ukr',
		Aq: 'xkb:us::eng',
		Bq: 'xkb:us::fil',
		Cq: 'xkb:us::ind',
		Jq: 'xkb:us::msa',
		wq: 'xkb:us:altgr-intl:eng',
		xq: 'xkb:us:colemak:eng',
		yq: 'xkb:us:dvorak:eng',
		zq: 'xkb:us:dvp:eng',
		Dq: 'xkb:us:intl:eng',
		Eq: 'xkb:us:intl:nld',
		Iq: 'xkb:us:intl:por',
		Fq: 'xkb:us:intl_pc:eng',
		Gq: 'xkb:us:intl_pc:nld',
		Hq: 'xkb:us:intl_pc:por',
		Lq: 'xkb:us:workman-intl:eng',
		Kq: 'xkb:us:workman:eng',
	};
	ht.prototype.toString = function () {
		return this.code;
	};
	var pt = [Oa, Xf, Tc, Yf, oc, li, Yh, fi, zi],
		ot = [Na, Sc, nc, ei],
		st = {
			arm: 'hy',
			bel: 'be',
			bul: 'bg',
			cat: 'ca',
			cze: 'cs',
			dan: 'da',
			eng: q,
			est: 'et',
			fao: 'fo',
			fin: 'fi',
			fra: 'fr',
			geo: 'ka',
			ger: 'de',
			gre: 'el',
			heb: Qc,
			hun: 'hu',
			ice: 'is',
			ind: 'id',
			ita: 'it',
			jpn: 'ja',
			kaz: 'kk',
			lav: 'lv',
			lit: 'lt',
			mlt: 'mt',
			mon: 'mn',
			msa: 'ms',
			nld: 'nl',
			nob: 'no',
			pol: 'pl',
			por: 'pt',
			rum: 'ro',
			rus: 'ru',
			scr: 'hr',
			slo: 'sk',
			slv: 'sl',
			spa: 'es',
			srp: 'sr',
			swe: 'sv',
			tur: 'tr',
			ukr: 'uk',
		},
		ct = {
			'xkb:us:intl:por': 'pt',
			'xkb:br::por': 'pt',
			'xkb:pt::por': 'pt',
		},
		kt = {},
		gt = ['bn', 'gu', 'pa', 'kn', 'ml', 'or', 'sa', kh, 'te', 'ne'],
		nt = {
			im_pinyin_zh_hans: Pi,
			im_pinyin_zh_hant: Mi,
			im_t13n_ja: ce,
			'im_t13n_ja-Hira': Zd,
			im_wubi_zh_hans: Wi,
			im_zhuyin_zh_hant: Ni,
			vkd_bg_phone: Za,
			vkd_chr_phone: rb,
			vkd_cs_qwertz: Cb,
			vkd_deva_phone: Xc,
			vkd_en_dvorak: $b,
			vkd_es_es: hc,
			vkd_ethi: bi,
			vkd_gu_phone: Mc,
			vkd_guru_inscript: Pf,
			vkd_guru_phone: Qf,
			vkd_hu_101: id,
			vkd_hy_east: jd,
			vkd_hy_west: kd,
			vkd_ka_qwerty: he,
			vkd_ka_typewriter: ge,
			vkd_ro_sr13392_primary: rg,
			vkd_ro_sr13392_secondary: qg,
			vkd_ru_phone: yg,
			vkd_ru_phone_aatseel: xg,
			vkd_ru_phone_yazhert: Ag,
			vkd_sk_qwerty: Mg,
			vkd_ta_itrans: nh,
			vkd_ta_tamil99: oh,
			vkd_ta_typewriter: ph,
			vkd_th_pattajoti: Dh,
			vkd_th_tis: Eh,
			vkd_tr_f: Sh,
			vkd_tr_q: Uh,
			vkd_uk_101: ai,
			vkd_us_intl: xc,
			vkd_uz_cyrl_phone: ii,
			vkd_uz_cyrl_type: hi,
			vkd_vi_tcvn: ri,
			vkd_vi_telex: qi,
		},
		rA = {},
		sA;
	for (sA in nt) rA[nt[sA]] = sA;
	var ft = rA,
		et = {
			'nl-t-k0-intl': gi,
			'fr-t-k0-intl': gi,
			'de-t-k0-intl': gi,
			'ht-t-k0-und': 'fr',
			'id-t-k0-und': Ae,
			'ga-t-k0-und': Ae,
			'it-t-k0-intl': gi,
			'jw-t-k0-und': Ae,
			'mr-t-k0-und': 'deva_phone',
			'mr-t-k0-devanaga': 'hi',
			'ms-t-k0-und': Ae,
			'pt-br-t-k0-intl': gi,
			'pt-pt-t-k0-intl': gi,
			'sa-t-k0-devanaga': 'hi',
			'es-t-k0-intl': gi,
			'sw-t-k0-und': Ae,
			'tl-t-k0-und': Ae,
			'ti-t-k0-und': 'ethi',
			'cy-t-k0-und': Ae,
		};
	var tA = 0;
	tt.prototype.cancel = function (a) {
		a && (a.Yd && a.Yd.cancel(), a.ka && ut(a.ka, !1));
	};
	x = xt.prototype;
	x.Pa = function () {
		At(this);
		for (var a = [], b = 0; b < this.A.length; b++)
			a.push(this.B[this.A[b]]);
		return a;
	};
	x.Ya = function () {
		At(this);
		return this.A.concat();
	};
	x.hc = function (a, b) {
		if (this === a) return !0;
		if (this.C != a.C) return !1;
		b = b || yt;
		At(this);
		for (var c, d = 0; (c = this.A[d]); d++)
			if (!b(this.get(c), a.get(c))) return !1;
		return !0;
	};
	x.get = function (a, b) {
		return zt(this.B, a) ? this.B[a] : b;
	};
	x.set = function (a, b) {
		zt(this.B, a) || (this.C++, this.A.push(a), this.D++);
		this.B[a] = b;
	};
	x.forEach = function (a, b) {
		for (var c = this.Ya(), d = 0; d < c.length; d++) {
			var e = c[d],
				g = this.get(e);
			a.call(b, g, e, this);
		}
	};
	x.tb = function (a) {
		At(this);
		var b = 0,
			c = this.D,
			d = this,
			e = new aq();
		e.next = function () {
			if (c != d.D)
				throw Error(
					'The map has changed since the iterator was created'
				);
			if (b >= d.A.length) throw bq;
			var g = d.A[b++];
			return a ? g : d.B[g];
		};
		return e;
	};
	x = Et.prototype;
	x.add = function (a, b) {
		Ft(this);
		this.C = null;
		a = String(a);
		var c = this.A.get(a);
		c || this.A.set(a, (c = []));
		c.push(b);
		this.B += 1;
		return this;
	};
	x.forEach = function (a, b) {
		Ft(this);
		this.A.forEach(function (c, d) {
			D(
				c,
				function (e) {
					a.call(b, e, d, this);
				},
				this
			);
		}, this);
	};
	x.Ya = function () {
		Ft(this);
		for (
			var a = this.A.Pa(), b = this.A.Ya(), c = [], d = 0;
			d < b.length;
			d++
		)
			for (var e = a[d], g = 0; g < e.length; g++) c.push(b[d]);
		return c;
	};
	x.Pa = function (a) {
		Ft(this);
		var b = [];
		if (typeof a === w) Ht(this, a) && (b = Qj(b, this.A.get(String(a))));
		else {
			a = this.A.Pa();
			for (var c = 0; c < a.length; c++) b = Qj(b, a[c]);
		}
		return b;
	};
	x.set = function (a, b) {
		Ft(this);
		this.C = null;
		a = String(a);
		Ht(this, a) && (this.B -= this.A.get(a).length);
		this.A.set(a, [b]);
		this.B += 1;
		return this;
	};
	x.get = function (a, b) {
		if (!a) return b;
		a = this.Pa(a);
		return 0 < a.length ? String(a[0]) : b;
	};
	x.toString = function () {
		if (this.C) return this.C;
		if (!this.A) return '';
		for (var a = [], b = this.A.Ya(), c = 0; c < b.length; c++) {
			var d = b[c],
				e = encodeURIComponent(String(d));
			d = this.Pa(d);
			for (var g = 0; g < d.length; g++) {
				var h = e;
				'' !== d[g] && (h += '=' + encodeURIComponent(String(d[g])));
				a.push(h);
			}
		}
		return (this.C = a.join('&'));
	};
	y(It, N);
	It.prototype.N = function () {
		this.A && this.abort(this.B);
		this.A = null;
	};
	It.prototype.C = function (a, b, c, d) {
		this.B && this.abort(this.B);
		a = this.H + a;
		var e = a + '&' + this.F;
		e != this.D &&
			(Xr(), (a = Lk(a)), (this.A = new tt(a, this.F)), (this.D = e));
		b && Gt(b);
		c = A(c, d);
		e = this.A;
		a = A(this.G, this, c, !0);
		c = A(this.G, this, c, !1);
		b = b ? nk(b) : {};
		d = '_' + (tA++).toString(36) + zj().toString(36);
		var g = '_callbacks___' + d;
		a && ((z[g] = wt(d, a)), (b[e.A] = g));
		a = {
			timeout: e.Hb,
			vf: !0,
		};
		e = Uz.exec(Ik(e.B).toString());
		g = e[3] || '';
		e = Lk(e[1] + Nk('?', e[2] || '', b) + Nk('#', g, void 0));
		e = Qs(e, a);
		Is(e, null, vt(d, b, c), void 0);
		this.B = {
			Mh: {
				ka: d,
				Yd: e,
			},
			key: this.D,
		};
		this.K = zj();
	};
	It.prototype.abort = function (a) {
		a.key == this.D && this.A.cancel(a.Mh);
	};
	It.prototype.G = function (a, b, c) {
		b && this.I.push('ql', zj() - this.K);
		a(b, b ? c : null);
		this.B = null;
	};
	y(Kt, R);
	x = Kt.prototype;
	x.fe = function () {
		return !!this.A;
	};
	x.oc = function () {
		return this.C;
	};
	x.Qc = function () {
		return Jt(this.oc());
	};
	x.rd = function (a, b, c, d) {
		c = void 0 === c ? '' : c;
		if (!this.A) {
			b = (void 0 === b ? 'GET' : b).toUpperCase();
			this.B = !0;
			this.A = new XDomainRequest();
			this.A.onload = A(this.We, this);
			this.A.onerror = A(this.dh, this);
			this.A.ontimeout = A(this.Eh, this);
			var e = window.location.href,
				g = e.indexOf('://');
			a = a.replace(/^http[s]/, 0 > g ? 'N/A' : e.slice(0, g));
			!d && c && ((a = a + '?' + c), (c = ''));
			try {
				this.A.open(b, a);
			} catch (h) {
				Mt(this);
				Lt(this);
				return;
			}
			try {
				(this.D = !0), this.A.send(c), (this.D = !1);
			} catch (h) {}
		}
	};
	x.We = function () {
		if (this.B)
			if (((this.C = 200), this.D)) z.setTimeout(A(this.We, this), 0);
			else {
				this.J(ng);
				this.B = !1;
				try {
					this.J(wb), this.J('success');
				} finally {
					Lt(this);
				}
			}
	};
	x.abort = function () {
		this.A &&
			this.B &&
			((this.B = !1),
			this.A.abort(),
			this.J(wb),
			this.J('abort'),
			Lt(this));
	};
	x.N = function () {
		delete this.A;
		this.A = null;
	};
	x.Eh = function () {
		'undefined' != typeof $t && this.A && (this.J('timeout'), this.abort());
	};
	x.dh = function () {
		this.B = !1;
		this.A && this.A.abort();
		Mt(this);
		Lt(this);
	};
	x.nd = function () {
		try {
			return this.A ? this.A.responseText : '';
		} catch (a) {
			return '';
		}
	};
	Nt.prototype.A = null;
	var uA;
	C(Qt, Nt);
	uA = new Qt();
	C(St, R);
	var vA = /^https?$/i,
		wA = ['POST', 'PUT'],
		Tt = [];
	x = St.prototype;
	x.uf = function () {
		this.da();
		Pj(Tt, this);
	};
	x.sd = function (a) {
		this.S = a;
	};
	x.rd = function (a, b, c, d) {
		if (this.A)
			throw Error(
				'[goog.net.XhrIo] Object is active with another request=' +
					this.T +
					'; newUri=' +
					a
			);
		b = b ? b.toUpperCase() : 'GET';
		this.T = a;
		this.I = !1;
		this.B = !0;
		this.A = this.H ? Rt(this.H) : Rt(uA);
		this.G = this.H ? Pt(this.H) : Pt(uA);
		this.A.onreadystatechange = A(this.Ye, this);
		try {
			(this.L = !0), this.A.open(b, String(a), !0), (this.L = !1);
		} catch (g) {
			Zt(this);
			return;
		}
		a = c || '';
		var e = new xt(this.headers);
		d &&
			Dt(d, function (g, h) {
				e.set(h, g);
			});
		d = Mj(e.Ya(), Wt);
		c = z.FormData && a instanceof z.FormData;
		!E(wA, b) ||
			d ||
			c ||
			e.set(
				'Content-Type',
				'application/x-www-form-urlencoded;charset=utf-8'
			);
		e.forEach(function (g, h) {
			this.A.setRequestHeader(h, g);
		}, this);
		this.aa && (this.A.responseType = this.aa);
		'withCredentials' in this.A &&
			this.A.withCredentials !== this.S &&
			(this.A.withCredentials = this.S);
		try {
			bu(this),
				0 < this.O &&
					((this.R = Vt(this.A))
						? ((this.A.timeout = this.O),
						  (this.A.ontimeout = A(this.Hb, this)))
						: (this.F = Nr(this.Hb, this.O, this))),
				(this.D = !0),
				this.A.send(a),
				(this.D = !1);
		} catch (g) {
			Zt(this);
		}
	};
	x.Hb = function () {
		'undefined' != typeof $t &&
			this.A &&
			(this.J('timeout'), this.abort(8));
	};
	x.abort = function () {
		this.A &&
			this.B &&
			((this.B = !1),
			(this.C = !0),
			this.A.abort(),
			(this.C = !1),
			this.J(wb),
			this.J('abort'),
			Yt(this));
	};
	x.N = function () {
		this.A &&
			(this.B &&
				((this.B = !1), (this.C = !0), this.A.abort(), (this.C = !1)),
			Yt(this, !0));
		St.ca.N.call(this);
	};
	x.Ye = function () {
		this.Y || (this.L || this.D || this.C ? au(this) : this.wh());
	};
	x.wh = function () {
		au(this);
	};
	x.fe = function () {
		return !!this.A;
	};
	x.Qc = function () {
		var a = this.oc(),
			b;
		if (!(b = Jt(a))) {
			if ((a = 0 === a))
				(a = String(this.T).match(as)[1] || null),
					!a &&
						z.self &&
						z.self.location &&
						((a = z.self.location.protocol),
						(a = a.substr(0, a.length - 1))),
					(a = !vA.test(a ? a.toLowerCase() : ''));
			b = a;
		}
		return b;
	};
	x.oc = function () {
		try {
			return 2 < (this.A ? this.A.readyState : 0) ? this.A.status : -1;
		} catch (a) {
			return -1;
		}
	};
	x.nd = function () {
		try {
			return this.A ? this.A.responseText : '';
		} catch (a) {
			return '';
		}
	};
	y(cu, N);
	cu.prototype.N = function () {
		this.B = null;
		this.A.da();
		this.A = null;
		O(this.D);
	};
	cu.prototype.H = function (a, b, c) {
		if (!this.Y) {
			var d = c.target;
			(c = d.Qc() && 0 != d.oc()) && this.G.push('ql', zj() - this.K);
			var e = A;
			if ((d = c ? d.nd() : null)) {
				d = d.replace(/\s*while\(1\);\s*(.*)/g, '$1');
				try {
					var g = JSON.parse(d);
				} catch (h) {
					g = null;
				}
			} else g = null;
			a = e(a, b, c, g);
			to(this.D, this.A, wb, this.B);
			this.B = null;
			Nr(a);
		}
	};
	cu.prototype.C = function (a, b, c, d, e, g) {
		a = this.F + a;
		this.A.fe() &&
			(this.A.abort(),
			this.B || (to(this.D, this.A, wb, this.B), (this.B = null)));
		b && (a = a + '?' + Gt(b).toString());
		b = g && JSON && JSON.stringify ? JSON.stringify(g) : '';
		65536 > b.length &&
			(c &&
				((this.B = A(this.H, this, c, d || null)),
				T(this.D, this.A, wb, this.B, void 0)),
			this.A.rd(a, 'POST', b, e));
		this.K = zj();
	};
	cu.prototype.abort = function () {
		this.A.abort();
	};
	y(du, N);
	x = du.prototype;
	x.Xb = function (a) {
		return E([nb, 'cd'], a);
	};
	x.Qe = function (a, b) {
		if (this.Xb(a)) {
			switch (a) {
				case nb:
					var c = arguments[1];
					this.C = c;
					if (this.Tb(c)) {
						if (
							((this.active = arguments[2]),
							this.A && X && (c = this.A.D))
						)
							eu(c, 'autocomplete', this.active),
								eu(c, 'autocorrect', this.active),
								eu(c, Sa, this.active);
					} else this.active = !1;
					break;
				case mb:
					var d = arguments[1];
					(c = arguments[2])
						? (this.A = d)
						: this.A == d && Ap != Vh && (this.A = null);
					this.active &&
						this.A &&
						X &&
						(d = this.A.D) &&
						(eu(d, 'autocomplete', c),
						eu(d, 'autocorrect', c),
						eu(d, Sa, c));
					break;
				case 'cd':
					this.A &&
						((c = this.A),
						c.D && c.D.setAttribute('dir', arguments[1]));
			}
			this.Wb.apply(this, arguments);
		}
	};
	x.gb = function () {
		return null;
	};
	x.handleEvent = function (a, b) {
		this.A = a;
		return this.Nc(b);
	};
	x.Nc = function () {
		return !1;
	};
	x.register = function (a) {
		this.A = a;
	};
	x.Eb = function (a) {
		this.A == a && (this.A = null);
	};
	x.Wb = yk;
	x.rc = xk;
	x.Tb = xk;
	y(fu, du);
	x = fu.prototype;
	x.gb = function () {
		var a = [];
		D(this.B, function (b) {
			Sj(a, b.gb());
		});
		Vj(a);
		return a;
	};
	x.register = function (a) {
		D(this.B, function (b) {
			b.register(a);
		});
	};
	x.Eb = function (a) {
		D(this.B, function (b) {
			b.Eb(a);
		});
	};
	x.handleEvent = function (a, b) {
		var c = !1,
			d = this.F[b.type];
		d &&
			D(d, function (e) {
				c = c || e.handleEvent(a, b);
			});
		return c;
	};
	x.rc = function (a, b) {
		var c = !1;
		D(this.K, function (d) {
			c = c || d.rc(a, b);
		});
		return c;
	};
	x.Wb = function (a, b) {
		var c = Rj(arguments);
		this.K = [];
		this.F = {};
		D(
			this.B,
			function (d) {
				d.Qe.apply(d, c);
				d.active &&
					(this.K.push(d),
					D(
						d.gb(),
						function (e) {
							this.F[e] = this.F[e] || [];
							this.F[e].push(d);
						},
						this
					));
			},
			this
		);
	};
	x.Xb = function (a) {
		for (var b = 0; b < this.B.length; ++b) if (this.B[b].Xb(a)) return !0;
		return !1;
	};
	x.N = function () {
		this.B &&
			D(this.B, function (a) {
				a.da();
			});
	};
	x.Tb = function () {
		return !0;
	};
	y(iu, P);
	ju.prototype.load = function (a) {
		return this.A[a] || null;
	};
	var ku = {};
	y(pu, P);
	qu.prototype.toJSON = function () {
		var a = {};
		a.source = this.source;
		a.target = this.target;
		a.frequency = this.A;
		this.B && (a.normalized_source = this.B);
		this.C && (a.lc = this.C);
		var b = Hj(this.D, function (c) {
			switch (c) {
				case 5:
					return 0;
				case 3:
					return 1;
				case 4:
					return 2;
			}
			return 3;
		}).join(' ');
		b && (a.candidate_type = b);
		return a;
	};
	var su = {};
	var xA = {},
		Mu = ((xA['Content-Type'] = 'application/json; charset=UTF-8'), xA);
	y(Eu, R);
	Eu.prototype.D = function (a, b, c, d) {
		c && b && Nj(tu(this.B).B);
		if (c && d[1]) {
			typeof d[0] !== w ||
				this.A.V ||
				((d[0] = a.B), 'chext' == Ap && a.source != d[1][0][0]) ||
				((b = lu(this.B)), (c = nu(a)), (b.A[c] = d));
			b = [];
			for (c = 0; c < d[1].length; c++) {
				var e = d[1][c],
					g = Cl(e[0]),
					h = e[1],
					k = e[e.length - 1];
				e = a;
				var l = new mu(e.D, g, e.G, e.K, void 0, e.type);
				l.B = e.B;
				l.F = e.F;
				e = l;
				for (l = 0; l < h.length; l++) {
					var p = this.A.H ? 5 : 0,
						B = g,
						K = '',
						fa = !1,
						Ka = '';
					if (k) {
						k.matched_length &&
							(B = g.slice(0, k.matched_length[l]));
						k.annotation && (K = k.annotation[l]);
						if (k.candidate_type)
							switch (k.candidate_type[l]) {
								case 0:
									p = 5;
									break;
								case 1:
									p = 3;
									break;
								case 2:
									p = 4;
							}
						k.is_confident && (fa = !!k.is_confident[l]);
						k.lc && (Ka = k.lc[l]);
					}
					e.A.push(new gu(B, Cl(h[l]), K, p, fa, Ka));
				}
				g = wu(tu(this.B), e.source);
				if (0 < g.length)
					for (h = 0; h < e.A.length; h++) {
						if (e.A[h].source != e.source) {
							for (k = 0; k < g.length; k++)
								e.A.splice(
									h + k,
									0,
									new gu(e.source, g[k].target, g[k].B, 1)
								);
							break;
						}
						for (k = 0; k < g.length; k++)
							if (e.A[h].target == g[k].target) {
								g.splice(k, 1);
								break;
							}
					}
				Gu(this, e);
				0 < e.A.length && Hu(this, e);
				b.push(e);
			}
			Fu(this, b);
		}
	};
	y(Iu, R);
	x = Iu.prototype;
	x.Dc = function (a) {
		if (3 == this.status || 2 == this.status) {
			0 > a && (a = 0);
			if (a >= this.D.length) {
				if (this.H) {
					a = Math.ceil(this.D.length / this.B.B);
					this.C = a * this.B.B;
					Nu(this, 2 * a);
					return;
				}
				a = 0;
			}
			this.C = a;
			Lu(this);
		}
	};
	x.la = function (a) {
		this.Dc(this.C + a);
	};
	x.ma = function (a) {
		this.Dc((Ju(this) + a) * this.B.B);
	};
	x.Qb = function () {
		return '';
	};
	x.hb = function () {
		return '';
	};
	x.Ja = function () {
		return [];
	};
	x.ib = function () {
		return '';
	};
	x.Za = function () {
		return '';
	};
	x.reset = function () {
		0 != this.status && this.J('cls');
		this.source = '';
		this.A = 0;
		this.T = '';
		this.C = -1;
		this.D = [];
		this.H = !0;
		this.status = 0;
		this.aa = this.Ea = this.I = !1;
		Lu(this);
	};
	x.abort = function () {
		this.reset();
	};
	x.eb = function () {};
	x.dd = function () {};
	x.cd = function () {};
	x.ra = function (a) {
		0 != a && this.cd(this.A + a);
	};
	x.ac = function () {};
	x.sa = function () {
		return '';
	};
	x.md = function () {
		return {};
	};
	x.Ab = function (a) {
		var b = '',
			c = '',
			d = '';
		if (this.B.Y) {
			for (var e = 0, g; (g = a.A[e]); e++)
				(b = g.D),
					(c += g.source),
					0 < g.A.length && (d += g.A[0].target);
			if (c && d) {
				a = this.O;
				c = b + c;
				b += d;
				for (d = 0; d < a.A.length; d++)
					a.A[d].source == c && (a.A[d].target = b);
				a.B();
			}
		}
	};
	x.N = function () {
		O(this.V);
		O(this.R);
		R.prototype.N.call(this);
	};
	x.nf = function () {
		return !1;
	};
	y(Ou, Iu);
	x = Ou.prototype;
	x.eb = function (a, b) {
		this.source.length + a.length - b > this.B.G ||
			((a = this.source.slice(0, this.A - b) + a),
			(this.source = a + this.source.slice(this.A)),
			(this.A = a.length),
			(this.C = -1),
			0 == this.status && this.J('opn'),
			Nu(this));
	};
	x.dd = function (a) {
		var b = this.Za();
		0 == a.indexOf(b)
			? (this.source = a.slice(b.length))
			: ((this.source = a), (this.F = []));
		this.A = this.source.length;
		this.C = -1;
		Nu(this);
	};
	x.cd = function (a) {
		0 > a ? (a = 0) : a > this.source.length && (a = this.source.length);
		a != this.A && ((this.A = a), (this.C = -1), Nu(this));
	};
	x.ac = function () {
		if (0 < this.F.length) {
			var a = this.F[this.F.length - 1];
			this.F = this.F.slice(0, -1);
			this.source = a.source + this.source;
			this.A += a.source.length;
			this.G.Ub('slen');
			this.G.Ub('tlen');
			this.G.Ub('ci');
			this.G.Ub('dur');
			this.G.Ub(ie);
		} else if (
			0 < this.source.length &&
			0 < this.A &&
			((this.source =
				this.source.slice(0, this.A - 1) + this.source.slice(this.A)),
			this.A--,
			!this.source)
		) {
			this.reset();
			return;
		}
		this.C = -1;
		Nu(this);
	};
	x.sa = function (a) {
		var b = this.hb();
		if (typeof a === Df) {
			if (a >= this.D.length) return '';
			if (0 > a)
				return (
					this.G.set(Fa, 'cmts'),
					(a = this.Ja().join('')),
					Ku(this, b, a),
					a
				);
			this.C = a;
		}
		1 == this.status && Nu(this);
		if (2 == this.status)
			return (
				(b = this.Za() + this.source),
				this.A == this.source.length &&
					(this.G.set(Fa, 'cmtd'), Ku(this, b)),
				b
			);
		if (3 != this.status || 0 > this.C || this.C >= this.D.length)
			return '';
		Pu(this);
		a = this.D[this.C];
		this.F.push(new hu(a.source, a.target, a.A, a.C, a.type));
		this.source = this.source.slice(a.source.length);
		this.A -= a.source.length;
		0 > this.A && (this.A = 0);
		this.aa = 2 == a.type;
		Lu(this);
		if (this.source) (this.C = -1), Nu(this);
		else {
			a = this.Ja().join('');
			var c = Hj(
					Gj(this.F, function (g) {
						return !!g.A;
					}),
					function (g) {
						return g.A;
					}
				).join(' '),
				d = Hj(this.F, function (g) {
					return g.C;
				}).join(' '),
				e = Hj(this.F, function (g) {
					return g.B;
				});
			vu(tu(this.L.code), b, a, c, d, e);
			this.G.set(Fa, 'cmtt');
			Ku(this, b, a);
			return a;
		}
		return '';
	};
	x.reset = function () {
		this.F = [];
		Iu.prototype.reset.call(this);
	};
	x.Qb = function () {
		return this.source.slice(0, this.A);
	};
	x.ib = function () {
		var a = 0 == this.A ? this.source : this.source.slice(0, this.A);
		this.B.W || (a = a.toLowerCase());
		return a;
	};
	x.Za = function () {
		for (
			var a = /^(zh|yue)/.test(this.L.code),
				b = /[a-zA-Z]$/.test(this.T),
				c = '',
				d = 0;
			d < this.F.length;
			d++
		) {
			var e = this.F[d].target;
			a && b && /^[a-zA-Z]/.test(e) && (e = ' ' + e);
			b = /[a-zA-Z]$/.test(e);
			c += e;
		}
		return c;
	};
	x.Ab = function (a) {
		var b = a.A[0];
		if (
			b &&
			(this.B.D ||
				!this.B.K ||
				this.I ||
				(0 != b.A.length && 2 != b.A[0].type))
		) {
			var c = 0 < b.A.length;
			if (1 == b.type)
				c &&
					((this.D = b.A),
					(b = Vv.Da(1)),
					' ' != b &&
						'\u00a0' != b &&
						(this.D[0].target = ' ' + this.D[0].target));
			else {
				var d = !1,
					e = !1,
					g = !1;
				c &&
					((c = b.A[0]),
					c.B &&
						((e = 4 == c.type),
						(g = 3 == c.type),
						(d = 5 == c.type)));
				c = b.D + b.source;
				this.B.H && !d
					? this.J(new iu(c, ''))
					: Iu.prototype.Ab.call(this, a);
				if (2 != this.status || this.Za() + this.ib() != c) return;
				this.H = b.C;
				this.D = b.A;
				this.B.H
					? ((a = e || g || d),
					  this.I
							? a && 0 > this.C && (this.C = 0)
							: ((this.D = []),
							  (this.H = !1),
							  (this.C = -1),
							  a && (this.D = b.A.slice(0, 1)),
							  d && this.B.Y && (this.C = 0)))
					: this.B.Y && 0 > this.C && (this.C = 0);
			}
			this.kf = zj();
		}
		this.status = 3;
		Lu(this);
	};
	x.Ja = function () {
		var a = 0 == this.A ? this.source : this.source.slice(0, this.A),
			b = 0 == this.A ? '' : this.source.slice(this.A);
		if (this.B.Jb && a && 0 <= this.C && this.C < this.D.length) {
			var c = this.D[this.C];
			a = c.target + a.slice(c.source.length);
		}
		a = [this.Za(), a, b];
		0 == this.A && ((b = a[1]), (a[1] = a[2]), (a[2] = b));
		if (!this.Ea)
			for (b = 0; b < a.length; b++)
				a[b] &&
					(c = this.B.transform(a[b], '')) &&
					((c = c.text), c.length == a[b].length && (a[b] = c));
		return a;
	};
	x.hb = function () {
		for (var a = '', b = 0; b < this.F.length; b++) a += this.F[b].source;
		return a + this.source;
	};
	x.nf = function () {
		lr(function () {
			var a = Vv;
			a.Da(-20).trim() || ((this.T = a.Da(20)), Nu(this, void 0, 1));
		}, this);
		return !1;
	};
	x.kf = 0;
	C(Ru, R);
	var Qu =
		z.document &&
		z.document.documentElement &&
		!!z.document.documentElement.setCapture &&
		!!z.document.releaseCapture;
	x = Ru.prototype;
	x.Gb = function (a) {
		this.H = a;
	};
	x.N = function () {
		Ru.ca.N.call(this);
		kn(this.D, [Oh, Ye], this.bd, !1, this);
		uo(this.A);
		this.F && this.B.releaseCapture();
		this.D = this.target = null;
	};
	x.bd = function (a) {
		var b = a.type == Ye;
		!this.H || this.C || (b && (!Nm(a) || (Im && a.ctrlKey)))
			? this.J('earlycancel')
			: this.J(new Vu(ah, this, a.clientX, a.clientY, a)) &&
			  ((this.C = !0),
			  b && a.preventDefault(),
			  this.jf(),
			  (this.clientX = this.R = a.clientX),
			  (this.clientY = this.S = a.clientY),
			  (this.screenX = a.screenX),
			  (this.screenY = a.screenY),
			  (this.deltaX = this.target.offsetLeft),
			  (this.deltaY = this.target.offsetTop),
			  (this.L = cm(J(this.B).A)));
	};
	x.jf = function () {
		var a = this.B,
			b = a.documentElement,
			c = !this.F;
		U(this.A, a, [Nh, Ze], this.se, {
			capture: c,
			passive: !1,
		});
		U(this.A, a, [Mh, af], this.wb, c);
		this.F
			? (b.setCapture(!1), T(this.A, b, 'losecapture', this.wb, void 0))
			: T(this.A, dm(a), ab, this.wb, void 0);
		this.T && T(this.A, this.T, 'scroll', this.Ze, c);
	};
	x.wb = function (a, b) {
		uo(this.A);
		this.F && this.B.releaseCapture();
		this.C
			? ((this.C = !1),
			  this.J(
					new Vu(
						'end',
						this,
						a.clientX,
						a.clientY,
						a,
						Su(this, this.deltaX),
						Tu(this, this.deltaY),
						b || 'touchcancel' == a.type
					)
			  ))
			: this.J('earlycancel');
	};
	x.se = function (a) {
		if (this.H) {
			var b = a.clientX - this.clientX,
				c = a.clientY - this.clientY;
			this.clientX = a.clientX;
			this.clientY = a.clientY;
			this.screenX = a.screenX;
			this.screenY = a.screenY;
			if (!this.C) {
				var d = this.R - this.clientX,
					e = this.S - this.clientY;
				if (0 < d * d + e * e)
					if (this.J(new Vu(ah, this, a.clientX, a.clientY, a)))
						this.C = !0;
					else {
						this.Y || this.wb(a);
						return;
					}
			}
			c = Uu(this, b, c);
			b = c.x;
			c = c.y;
			this.C &&
				this.J(
					new Vu('beforedrag', this, a.clientX, a.clientY, a, b, c)
				) &&
				(Wu(this, a, b, c), a.preventDefault());
		}
	};
	x.Ze = function (a) {
		var b = Uu(this, 0, 0);
		a.clientX = this.clientX;
		a.clientY = this.clientY;
		Wu(this, a, b.x, b.y);
	};
	C(Vu, P);
	y(Xu, Ru);
	Xu.prototype.bd = function (a) {
		Zu(this, a);
		Ru.prototype.bd.call(this, a);
	};
	Xu.prototype.jf = function () {
		Yu(this, this.B);
		var a = I(this.D);
		a != this.B && Yu(this, a);
		this.T && T(this.A, this.T, 'scroll', this.Ze, !Qu);
	};
	Xu.prototype.aa = function (a) {
		Zu(this, a);
		this.se(a);
	};
	var $u = null;
	y(bv, P);
	var ov = {};
	qj(cv);
	var jv;
	qj(fv);
	var kv = {
		button: 'pressed',
		checkbox: pb,
		menuitem: Fg,
		menuitemcheckbox: pb,
		menuitemradio: pb,
		radio: pb,
		tab: Fg,
		treeitem: Fg,
	};
	C(pv, V);
	x = pv.prototype;
	x.jd = null;
	x.za = 0;
	x.$d = null;
	x.$ = function () {
		var a = this.A,
			b = a.P,
			c = this.D,
			d = mv(),
			e = [d],
			g = mv();
		g != d && e.push(g);
		d = this.za;
		for (g = []; d; ) {
			var h = d & -d;
			g.push(nv(c, h));
			d &= ~h;
		}
		e.push.apply(e, g);
		(c = this.$d) && e.push.apply(e, c);
		L && !G('7') && e.push.apply(e, gv(e));
		this.C = a = b.call(a, f, e.join(' '), this.jd);
		Pn(a, !L && !wn);
		this.isVisible() || (Kn(a, !1), a && Vr(a, Zc, !0));
	};
	x.X = function () {
		pv.ca.X.call(this);
		var a = this.C;
		this.isVisible() || Vr(a, Zc, !this.isVisible());
		this.isEnabled() || lv(a, 1, !this.isEnabled());
		Bo(this) && hv(this.M(), mv() + '-rtl', !0);
		this.isEnabled() && iv(this, this.isVisible());
		a = Ao(this);
		var b = this.M();
		U(
			U(
				U(T(a, b, yv.bc, this.ud, void 0), b, [yv.cc, yv.Ec], this.zd),
				b,
				v,
				this.le
			),
			b,
			$e,
			this.re
		);
		this.wd != pj && T(a, b, zb, this.wd, void 0);
		L &&
			(G(9) || T(a, b, Ib, this.Nf, void 0),
			this.G || ((this.G = new zv(this)), Fm(this, this.G)));
		if ((a = this.M()))
			(b = this.B || (this.B = new dr())),
				cr(b, a),
				U(
					U(U(Ao(this), b, ie, this.qc), a, tc, this.Cf),
					a,
					ab,
					this.ke
				);
	};
	x.fb = function () {
		pv.ca.fb.call(this);
		this.B && er(this.B);
		this.isVisible() && this.isEnabled() && iv(this, !1);
	};
	x.N = function () {
		pv.ca.N.call(this);
		this.B && (this.B.da(), delete this.B);
		delete this.D;
		this.G = this.$d = this.jd = null;
	};
	x.isVisible = function () {
		return !0;
	};
	x.isEnabled = function () {
		return !(this.za & 1);
	};
	x.Gb = function (a) {
		var b = this.aa;
		(b && typeof b.isEnabled == r && !b.isEnabled()) ||
			!qv(this, 1, !a) ||
			(a || (tv(this, !1), sv(this, !1)),
			this.isVisible() && iv(this, a),
			rv(this, 1, !a, !0));
	};
	x.le = function (a) {
		(!a.relatedTarget || !om(this.M(), a.relatedTarget)) &&
			this.J('enter') &&
			this.isEnabled() &&
			vv(2) &&
			sv(this, !0);
	};
	x.re = function (a) {
		(a.relatedTarget && om(this.M(), a.relatedTarget)) ||
			!this.J('leave') ||
			(vv(4) && tv(this, !1), vv(2) && sv(this, !1));
	};
	x.wd = pj;
	x.ud = function (a) {
		if (
			this.isEnabled() &&
			(vv(2) && sv(this, !0), Nm(a) && (!Im || !a.ctrlKey))
		) {
			vv(4) && tv(this, !0);
			var b;
			if ((b = this.D)) {
				var c;
				b = (c = this.M()) ? vm(c) && wm(c) : !1;
			}
			b && this.M().focus();
		}
		!Nm(a) || (Im && a.ctrlKey) || a.preventDefault();
	};
	x.zd = function (a) {
		this.isEnabled() &&
			(vv(2) && sv(this, !0),
			this.za & 4 && wv(this, a) && vv(4) && tv(this, !1));
	};
	x.Nf = function (a) {
		this.isEnabled() && wv(this, a);
	};
	x.Cf = function () {
		vv(32) && qv(this, 32, !0) && rv(this, 32, !0);
	};
	x.ke = function () {
		vv(4) && tv(this, !1);
		vv(32) && qv(this, 32, !1) && rv(this, 32, !1);
	};
	x.qc = function (a) {
		return this.isVisible() &&
			this.isEnabled() &&
			13 == a.keyCode &&
			wv(this, a)
			? (a.preventDefault(), a.stopPropagation(), !0)
			: !1;
	};
	if (typeof pv !== r) throw Error('Invalid component class ' + pv);
	if (typeof fv !== r) throw Error('Invalid renderer class ' + fv);
	var yA = vj(pv);
	ov[yA] = fv;
	if (typeof xv !== r) throw Error('Invalid decorator function ' + xv);
	C(zv, N);
	var Av = !L || Ql(9);
	zv.prototype.F = function () {
		this.A = !1;
	};
	zv.prototype.K = function () {
		this.A = !0;
	};
	zv.prototype.D = function (a) {
		if (this.A) this.A = !1;
		else {
			var b = a.A,
				c = b.button,
				d = b.type,
				e = Bv(b, Ye);
			this.B.ud(new Km(e, a.B));
			e = Bv(b, af);
			this.B.zd(new Km(e, a.B));
			Av || ((b.button = c), (b.type = d));
		}
	};
	zv.prototype.N = function () {
		this.B = null;
		zv.ca.N.call(this);
	};
	C(Y, V);
	x = Y.prototype;
	x.Dd = null;
	x.zb = null;
	x.td = null;
	x.Zb = null;
	x.mb = !0;
	x.yb = !0;
	x.Ob = !0;
	x.Na = -1;
	x.na = null;
	x.Yb = !1;
	x.vb = null;
	x.$ = function () {
		var a = this.A,
			b = a.P,
			c = [
				'goog-container',
				this.Zb == ad
					? 'goog-container-horizontal'
					: 'goog-container-vertical',
			];
		this.isEnabled() || c.push('goog-container-disabled');
		this.C = b.call(a, f, c.join(' '));
	};
	x.X = function () {
		Y.ca.X.call(this);
		Do(
			this,
			function (b) {
				if (b.Ta) {
					var c = b.M();
					c =
						c.id ||
						(c.id = b.ka || (b.ka = ':' + (b.lg.A++).toString(36)));
					this.vb || (this.vb = {});
					this.vb[c] = b;
				}
			},
			this
		);
		var a = this.M();
		ev(this.td, this);
		this.oa(this.mb, !0);
		U(
			U(
				U(
					U(
						U(
							U(
								U(
									U(Ao(this), this, 'enter', this.Rf),
									this,
									'highlight',
									this.Vf
								),
								this,
								'unhighlight',
								this.jg
							),
							this,
							'open',
							this.$f
						),
						this,
						'close',
						this.Lf
					),
					a,
					yv.bc,
					this.Bf
				),
				I(a),
				[yv.cc, yv.Ec],
				this.Of
			),
			a,
			[yv.bc, yv.cc, yv.Ec, v, $e, zb],
			this.If
		);
		this.Ob && Dv(this, !0);
	};
	x.fb = function () {
		Kv(this, -1);
		this.na && uv(this.na, !1);
		this.Yb = !1;
		Y.ca.fb.call(this);
	};
	x.N = function () {
		Y.ca.N.call(this);
		this.zb && (this.zb.da(), (this.zb = null));
		this.td = this.na = this.vb = this.Dd = null;
	};
	x.Rf = function () {
		return !0;
	};
	x.Vf = function (a) {
		var b = Eo(this, a.target);
		if (-1 < b && b != this.Na) {
			var c = Co(this, this.Na);
			c && sv(c, !1);
			this.Na = b;
			c = Co(this, this.Na);
			this.Yb && tv(c, !0);
			this.na && c != this.na && uv(this.na, !1);
		}
		b = this.M();
		null != a.target.M() && Vr(b, Ha, a.target.M().id);
	};
	x.jg = function (a) {
		a.target == Co(this, this.Na) && (this.Na = -1);
		this.M().removeAttribute('aria-activedescendant');
	};
	x.$f = function (a) {
		(a = a.target) &&
			a != this.na &&
			a.aa == this &&
			(this.na && uv(this.na, !1), (this.na = a));
	};
	x.Lf = function (a) {
		a.target == this.na && (this.na = null);
		var b = this.M(),
			c = a.target.M();
		b && a.target.za & 2 && c && ((a = ''), c && (a = c.id), Vr(b, Ha, a));
	};
	x.Bf = function (a) {
		this.yb && (this.Yb = !0);
		var b = Cv(this);
		b && vm(b) && wm(b) ? b.focus() : a.preventDefault();
	};
	x.Of = function () {
		this.Yb = !1;
	};
	x.If = function (a) {
		a: {
			var b = a.target;
			if (this.vb)
				for (var c = this.M(); b && b !== c; ) {
					var d = b.id;
					if (d in this.vb) {
						b = this.vb[d];
						break a;
					}
					b = b.parentNode;
				}
			b = null;
		}
		if (b)
			switch (a.type) {
				case yv.bc:
					b.ud(a);
					break;
				case yv.cc:
				case yv.Ec:
					b.zd(a);
					break;
				case v:
					b.le(a);
					break;
				case $e:
					b.re(a);
					break;
				case zb:
					b.wd(a);
			}
	};
	x.he = function () {};
	x.ge = function () {
		Kv(this, -1);
		this.Yb = !1;
		this.na && uv(this.na, !1);
	};
	x.je = function (a) {
		return this.isEnabled() &&
			this.isVisible() &&
			(0 != (this.F ? this.F.length : 0) || this.Dd) &&
			Iv(this, a)
			? (a.preventDefault(), a.stopPropagation(), !0)
			: !1;
	};
	x.isVisible = function () {
		return this.mb;
	};
	x.oa = function (a, b) {
		if (b || (this.mb != a && this.J(a ? 'show' : 'hide'))) {
			this.mb = a;
			var c = this.M();
			c &&
				(Kn(c, a),
				this.Ob && dv(Cv(this), this.yb && this.mb),
				b || this.J(this.mb ? 'aftershow' : 'afterhide'));
			return !0;
		}
		return !1;
	};
	x.isEnabled = function () {
		return this.yb;
	};
	x.Gb = function (a) {
		this.yb != a &&
			this.J(a ? 'enable' : 'disable') &&
			(a
				? ((this.yb = !0),
				  Do(this, function (b) {
						b.pf ? delete b.pf : b.Gb(!0);
				  }))
				: (Do(this, function (b) {
						b.isEnabled() ? b.Gb(!1) : (b.pf = !0);
				  }),
				  (this.Yb = this.yb = !1)),
			this.Ob && dv(Cv(this), a && this.mb));
	};
	y(Mv, Y);
	x = Mv.prototype;
	x.ha = function (a) {
		Y.prototype.ha.call(this, a);
	};
	x.$ = function () {
		Y.prototype.$.call(this);
		var a = this.M();
		Vp(a, 'ita-ppe-box');
		X && W(a, 'ita-ppe-box-mobile');
		av(a);
		a.style.direction = this.model.B.ba ? ug : Ie;
		this.oa(!1);
		var b = this.B.P(f, 'ita-ppe-edit'),
			c = this.B.P(f, 'ita-ppe-div');
		this.I = this.B.P(f, 'ita-ppe-can-list');
		if (X) (this.L = b), this.B.ia(c, this.I);
		else if (this.model.B.T) {
			this.L = b;
			var d = Nv(this);
			Ov(this, d.rows[0].cells[0]);
			this.B.ia(c, this.I, d);
		} else
			(d = Nv(this)),
				(this.L = this.B.P(f, 'ita-ppe-div')),
				this.B.ia(d.rows[0].cells[0], this.L),
				this.B.ia(b, d),
				(d = Nv(this)),
				this.B.ia(d.rows[0].cells[0], this.I),
				Ov(this, d.rows[0].cells[1]),
				this.B.ia(c, d);
		this.D = this.B.P(f, 'ita-isv');
		document.body.appendChild(this.D);
		this.B.ia(a, b, c);
		this.model.B.R || (b.style.display = Cf);
	};
	x.X = function () {
		Y.prototype.X.call(this);
		Jv(this);
		var a = this.M();
		U(Ao(this), this.I, n, this.Hf);
		X
			? U(Ao(this), this.A.A, n, this.oa.bind(this, !1))
			: ((this.Z = new Ru(a)),
			  U(
					U(
						U(U(Ao(this), this.H, n, this.bg), this.G, n, this.ag),
						this.H,
						[v, $e],
						A(this.te, this, this.H)
					),
					this.G,
					[v, $e],
					A(this.te, this, this.G)
			  ));
	};
	x.Hf = function (a) {
		3 == this.model.status &&
			((a = Fj(this.R, a.target)), 0 <= a && this.J(new bv(a)));
	};
	x.bg = function () {
		3 != this.model.status || Wp(this.H, Sd) || this.J('pu');
	};
	x.ag = function () {
		3 != this.model.status || Wp(this.G, Sd) || this.J('pd');
	};
	x.te = function (a, b) {
		b.type == v ? W(a, 'ita-ppe-hov') : Yp(a, 'ita-ppe-hov');
	};
	x.ed = function () {};
	x.oa = function (a, b) {
		b = Y.prototype.oa.call(this, a, b);
		!a && this.D && (this.D.style.display = Cf);
		return b;
	};
	x.N = function () {
		O(this.Z);
		Y.prototype.N.call(this);
		lm(this.D);
	};
	y(Rv, Mv);
	Rv.prototype.ed = function () {
		var a = this.model.Ja();
		this.B.ia(this.L, this.B.P(m, Vd, a[0]), a[1], this.B.P(m, Rd), a[2]);
	};
	Sv.prototype.Ba = function (a) {
		if (0 == this.A.status && !this.A.B.D) return !1;
		var b = this.A.Qb(),
			c = Vv;
		if (this.C) {
			var d = Wv(this, !1);
			if (!d) return !1;
			b = d.Va();
			O(d);
		}
		d = String.fromCharCode(a.charCode);
		var e = 0;
		if ((a = this.A.B.transform(b, String.fromCharCode(a.charCode))))
			(d = a.text), (e = a.back);
		else if (' ' == d) return !1;
		this.C ? (c.Ia(d, e), Yv(this)) : this.A.eb(d, e);
		return !0;
	};
	Sv.prototype.pb = function (a) {
		if (!Vv.uc()) return !1;
		this.B = Wv(this, !1);
		if (!this.B) return !1;
		var b = this.B.Va();
		if (b && !b.replace(Uv(this.A.B.F), ''))
			return (
				this.A.eb(b, 0),
				1 == this.A.status && Nu(this.A),
				this.A.sa(),
				(a = String.fromCharCode(a.charCode || a.keyCode)),
				!Xz || this.A.B.D || !this.A.B.K || (' ' != a && '\n' != a)
					? (Ku(this.A, a, a), !0)
					: !1
			);
		this.B.da();
		this.B = null;
		return !1;
	};
	y(dw, P);
	y(ew, R);
	x = ew.prototype;
	x.vc = function () {
		this.A || (this.A = new Sv(this.model, this.view));
	};
	x.Pd = function (a) {
		if (a.type != u || fw(this) || a.ctrlKey || a.altKey || a.metaKey)
			return !1;
		var b = Vv,
			c = b.Da(20);
		this.model.T = c;
		var d = null;
		if (this.model.B.A & 1 || /^(?:zh|yue)/.test(this.model.L.code))
			d = this.model.B.pa(
				c,
				String.fromCharCode(a.charCode),
				this.model.B.A
			);
		if (d) {
			c = d.text;
			d = d.back;
			if (0 < d) return b.Ia(c, d), !0;
			this.A && c.match(this.model.B.I) && this.pb(a)
				? b.Ia(c, 1)
				: Ku(this.model, c, c);
			return !0;
		}
		return !1;
	};
	x.Vc = function (a) {
		fw(this) &&
			(this.B.push(ie, a.keyCode || a.charCode), this.B.Bb('bsc'));
		return this.A ? bw(this.A) : fw(this) ? (this.model.ac(), !0) : !1;
	};
	x.xc = function (a) {
		this.B.push(ie, a.keyCode || a.charCode);
		return this.A
			? ((a = this.A),
			  0 != a.A.status ? (a.A.abort(), (a = !0)) : (a = !1),
			  a)
			: fw(this)
			? (this.model.abort(), !0)
			: !1;
	};
	x.Ba = function (a) {
		if (this.A) return this.A.Ba(a);
		a = String.fromCharCode(a.charCode);
		var b = 0;
		this.model.B.W ||
			this.model.source ||
			(this.model.Ea = /^[A-Z]/.test(a));
		if (!this.model.Ea) {
			var c = this.model.B.transform(this.model.Qb(), a);
			if (c) (a = c.text), (b = c.back);
			else if (' ' == a) return !1;
		}
		this.model.eb(a, b);
		return !0;
	};
	x.cf = function (a) {
		a.charCode = a.keyCode;
		return this.Ba(a);
	};
	x.pb = function (a) {
		if (this.model.Ea) return !0;
		this.B.push(ie, a.keyCode || a.charCode);
		if (this.A && !fw(this)) return this.A.pb(a);
		(a = this.model.B.transform(this.model.Qb(), '')) &&
			this.model.eb(a.text, a.back);
		Nu(this.model);
		return !0;
	};
	x.Zc = function (a) {
		if (this.model.B.H && 0 == this.model.D.length)
			return this.model.reset(), !1;
		if (3 == this.model.status) {
			var b = Number(String.fromCharCode(a.charCode));
			if (1 > b || b > this.model.B.B) return !0;
			b = Ju(this.model) * this.model.B.B + b - 1;
			0 <= b &&
				(this.B.push(ie, a.keyCode || a.charCode),
				this.model.sa(b),
				gw(this));
		}
		return !0;
	};
	x.Hg = function (a) {
		this.B.push(ie, a.keyCode || a.charCode);
		var b = '',
			c;
		(c = !this.A) ||
			((c = this.A),
			Tv(c) ? (c.A.reset(), (c = !0)) : (c = !1),
			(c = !c));
		c && ((b = this.model.sa()), fw(this) && (b += this.model.sa(-1)));
		a = c = String.fromCharCode(a.charCode);
		(b = this.model.B.pa(b, c, this.model.B.A)) &&
			0 == b.back &&
			(a = b.text);
		Ku(this.model, a, a);
		return !0;
	};
	x.$b = function (a) {
		var b = String.fromCharCode(a.charCode),
			c = '\t' == b || 9 == a.keyCode,
			d = ' ' == b || 32 == a.keyCode;
		if (
			this.A &&
			((3 == this.model.status && 0 > this.model.C) ||
				(this.model.B.C && !(this.model.I || (c && Tv(this.A)))))
		)
			return !1;
		this.B.push(ie, a.keyCode || a.charCode);
		a = '\r' == b || 13 == a.keyCode;
		(this.model.B.aa && a) ||
		(!d && !c && !a) ||
		(3 == this.model.status && 0 == this.model.D.length) ||
		this.model.Ea
			? this.model.sa(-1)
			: this.model.sa();
		c || gw(this);
		return !0;
	};
	x.Gg = function () {
		this.B.push(ie, 0);
		return this.A ? cw(this.A) : !1;
	};
	x.Jc = function () {
		return [];
	};
	x.xd = function (a) {
		om(this.view.M(), a.target) ||
			(this.A ? $v(this.A) : this.model.reset());
	};
	x.Fg = function () {
		Nr(
			A(function () {
				this.B.ad(this.model.L.code);
				this.B.Fc('st');
				if (this.A) {
					var a = this.A;
					if (!a.B) {
						var b = Vv;
						b && (a.B = b.Mb());
					}
					a.B && (b = a.B.wc(!a.A.I && a.A.B.C)) && Pv(a.D, b);
				} else (a = Vv) && (a = a.ld()) && Pv(this.view, a);
			}, this)
		);
	};
	x.Bg = function () {
		if (this.A) {
			var a = this.A;
			O(a.B);
			a.B = null;
			a.F = '';
		}
		this.B.get(Fa) || this.B.set(Fa, 'cl');
		this.B.Gd('st');
		this.B.report();
	};
	x.Eg = function () {
		if (this.A) {
			var a = this.A;
			if (3 == a.A.status && a.F) {
				for (var b = 0; b < a.A.D.length; b++)
					if (a.A.D[b].target == a.F) {
						a.A.C = b;
						break;
					}
				a.F = '';
			}
			a.B &&
				(a.B.Db() || (a.B.da(), (a.B = Wv(a, !0))),
				a.B &&
					((b = a.A.Ja().join('')), b != a.B.Va() && a.B.replace(b)));
			if (!a.A.I && a.A.B.C)
				if (
					(!a.B && 3 == a.A.status && (b = Vv) && (a.B = b.Mb()),
					(b = a.D),
					(a = a.B),
					3 != b.model.status || 0 == b.model.D.length)
				)
					b.oa(!1);
				else {
					var c = b.model.D[0],
						d = c.target;
					if (c.source == b.model.source && d != b.model.source) {
						if ((c = d.length > b.model.source.length)) {
							var e = b.model.source;
							c = String(e).toLowerCase();
							e = String(d.substr(0, e.length)).toLowerCase();
							c = 0 == (c < e ? -1 : c == e ? 0 : 1);
						}
						c
							? (um(
									b.D,
									d
										.slice(b.model.source.length)
										.replace(/\s/g, '\u00a0')
							  ),
							  $p(b.D, 'ita-isv-red', 'ita-isv-grey'),
							  a && (b.O = a.wc(!0)),
							  b.O.Ma(b.D, 9),
							  (b.D.style.display = 'block'))
							: d.length == b.model.source.length
							? (um(b.D, b.model.source),
							  $p(b.D, 'ita-isv-grey', 'ita-isv-red'),
							  a && (b.O = a.wc()),
							  b.O.Ma(b.D, 8),
							  (b.D.style.display = 'block'))
							: (b.D.style.display = Cf);
					}
				}
			else Qv(a.D);
		} else Qv(this.view);
	};
	x.Cg = function (a) {
		if (this.A) {
			var b = this.A,
				c = a.F;
			a = a.A;
			c != a && (b.H[a] = c);
			if (a && b.B && b.A.hb() == c)
				b.B.replace(a), b.B.da(), (b.B = null), (b = !0);
			else {
				var d = b.K[c];
				if (d && 0 != d.length) {
					for (var e = 0; e < d.length; ++e) {
						var g = d[e];
						a && g.replace(a);
						g.da();
					}
					delete b.K[c];
					b = !0;
				} else b = !1;
			}
			!b &&
				c == a &&
				(c = Vv) &&
				(L && !Ql(9) ? ((c = c.Mb()), c.replace(a), c.da()) : c.Ia(a));
		} else
			(c = Vv) &&
				a.A &&
				(this.J(new dw('cmts', a.A)),
				c.Ia(a.A),
				this.J(new dw('cmte', a.A)));
	};
	x.Dg = function () {
		this.A && Zv(this.A);
	};
	x.vd = function (a) {
		this.B.push(ie, 0);
		this.model.sa(Ju(this.model) * this.model.B.B + a.index);
		gw(this);
	};
	x.Jf = function () {
		this.model.ma(1);
	};
	x.Kf = function () {
		this.model.ma(-1);
	};
	x.N = function () {
		O(this.C);
		R.prototype.N.call(this);
	};
	y(hw, ew);
	hw.prototype.Ba = function (a) {
		return String.fromCharCode(a.charCode).match(/[0-9]/) &&
			0 != this.model.B.O &&
			this.model.source.replace(/[0-9]/g, '')
			? this.Zc(a)
			: ew.prototype.Ba.call(this, a);
	};
	hw.prototype.D = function (a) {
		if (0 < this.model.D.length)
			return (
				0 > this.model.C && (this.model.C = 0),
				(a.type = u),
				(a.charCode = a.keyCode),
				this.$b(a)
			);
		this.model.reset();
		return !1;
	};
	hw.prototype.F = function () {
		this.model.la(this.model.D.length - 1 - this.model.C);
	};
	hw.prototype.Jc = function () {
		function a(l) {
			k.ba && (l = -l);
			h.model.ma(l);
		}
		function b() {
			return !h.A && !c();
		}
		function c() {
			return e() && k.rb && k.R && !h.A;
		}
		function d() {
			return !!h.A;
		}
		function e() {
			return g() && 0 != h.model.status;
		}
		function g() {
			return !k.C || h.model.I;
		}
		var h = this,
			k = this.model.B;
		return [
			[n, 0, null, null, d, this.Gg, this],
			[
				t,
				0,
				32,
				null,
				function () {
					return k.F.test(' ');
				},
				this.cf,
				this,
			],
			[u, 0, k.F, null, null, this.Ba, this],
			[
				u,
				0,
				/[0-9]/,
				null,
				function () {
					return 0 != h.model.status && 0 != k.O && g();
				},
				this.Zc,
				this,
			],
			[t, 0, 38, 3, g, this.model.la, this.model, -1],
			[t, 0, 40, 3, g, this.model.la, this.model, 1],
			[t, 0, 33, 3, g, this.model.ma, this.model, -1],
			[t, 0, 37, 3, b, a, void 0, -1],
			[u, 0, k.fa, 3, g, this.model.ma, this.model, -1],
			[t, 0, 34, 3, g, this.model.ma, this.model, 1],
			[t, 0, 39, 3, b, a, void 0, 1],
			[u, 0, k.ea, 3, g, this.model.ma, this.model, 1],
			[u, 0, k.Kb, null, e, this.Hg, this],
			[t, 0, 32, null, e, this.$b, this],
			[
				t,
				0,
				32,
				null,
				function () {
					return k.C && !!h.A;
				},
				this.model.nf,
				this.model,
			],
			[t, 0, 13, null, e, this.$b, this],
			[t, 0, 9, 3, d, this.D, this],
			[t, 0, 8, null, null, this.Vc, this],
			[t, 0, 27, null, e, this.xc, this],
			[
				u,
				0,
				k.I,
				0,
				function () {
					return !!h.A && !k.D;
				},
				this.pb,
				this,
			],
			[t, 0, 37, null, c, this.model.ra, this.model, -1],
			[t, 0, 39, null, c, this.model.ra, this.model, 1],
			[t, 0, 36, null, c, this.model.ra, this.model, -999],
			[t, 0, 35, null, c, this.model.ra, this.model, 999],
			[t, 0, 36, 3, g, this.model.la, this.model, -999],
			[t, 0, 35, 3, g, this.F, this],
		];
	};
	y(iw, R);
	iw.prototype.push = function (a, b) {
		this.A.push(new hu(a, b || ''));
		this.B();
	};
	iw.prototype.B = function () {
		if (
			0 < this.A.length &&
			2e3 < new Date().getTime() - this.A[0].timestamp
		) {
			var a = this.A.pop();
			a.target && this.J(new iu(a.source, a.target));
			this.reset();
		}
	};
	iw.prototype.reset = function () {
		this.A = [];
	};
	y(jw, iw);
	jw.prototype.B = function () {
		for (var a = [], b = 0; b < this.A.length; b++) {
			var c = this.A[b].source,
				d = this.A[b].target;
			d ? this.J(new iu(c, d)) : a.push(this.A[b]);
		}
		this.A = a;
		iw.prototype.B.call(this);
	};
	y(mw, Iu);
	x = mw.prototype;
	x.Dc = function (a) {
		this.F[this.A].A = a;
		Iu.prototype.Dc.call(this, a);
	};
	x.eb = function (a, b) {
		(2 != this.status && 3 != this.status) || this.sa(-1);
		this.source.length + a.length - b > this.B.G ||
			((this.source =
				this.source.slice(0, this.A - b) +
				a +
				this.source.slice(this.A)),
			(this.A += a.length - b),
			0 == this.status && this.J('opn'),
			(this.status = 1),
			Lu(this));
	};
	x.dd = function (a) {
		3 == this.status && ((this.F = []), (this.D = []), (this.status = 1));
		this.source = a;
		this.A = this.source.length;
		Lu(this);
	};
	x.cd = function (a) {
		if (2 != this.status) {
			var b = 3 == this.status,
				c = b ? this.F.length - 1 : this.source.length;
			0 > a ? (a = 0) : a > c && (a = c);
			a != this.A && ((this.A = a), b && nw(this), Lu(this));
		}
	};
	x.Le = function () {
		1 != this.status ||
			this.A >= this.source.length ||
			((this.source =
				this.source.slice(0, this.A) + this.source.slice(this.A + 1))
				? Lu(this)
				: this.reset());
	};
	x.ac = function () {
		if (1 == this.status && 0 < this.A) {
			if (
				((this.source =
					this.source.slice(0, this.A - 1) +
					this.source.slice(this.A)),
				this.A--,
				!this.source)
			) {
				this.reset();
				return;
			}
		} else
			3 == this.status &&
				((this.F = []),
				(this.D = []),
				(this.A = this.source.length),
				(this.status = 1));
		Lu(this);
	};
	x.sa = function (a) {
		a = a || 0;
		if (0 <= a && a < this.D.length) this.Dc(a);
		else if (0 > a)
			if (2 == this.status) Ku(this, this.source);
			else return (a = this.Ja().join('')), Ku(this, this.hb(), a), a;
		return '';
	};
	x.abort = function () {
		3 == this.status ? this.ac() : this.reset();
	};
	x.reset = function () {
		this.F = [];
		Iu.prototype.reset.call(this);
	};
	x.Qb = function () {
		return this.source.slice(0, this.A);
	};
	x.Za = function () {
		return '';
	};
	x.ib = function () {
		var a = '';
		1 == this.status
			? (a = this.source + '||t:1')
			: 3 == this.status &&
			  (a = Hj(
					this.F,
					function (b) {
						return b.source.replace(/[,|:]/g, escape);
					},
					this
			  ).join(','));
		return a;
	};
	x.Ja = function () {
		if (3 == this.status) {
			for (var a = [], b = 0; b < this.F.length; b++) {
				var c = this.F[b];
				b == this.A
					? a.push(
							0 > this.C || this.C >= this.D.length
								? c.source
								: this.D[this.C].target
					  )
					: a.push(
							0 > c.A || c.A >= c.B.length
								? c.source
								: c.B[c.A].target
					  );
			}
			return a;
		}
		return [this.source.slice(0, this.A), this.source.slice(this.A)];
	};
	x.hb = function () {
		return this.source;
	};
	x.Ab = function (a) {
		Iu.prototype.Ab.call(this, a);
		if (2 == this.status) {
			a = a.A;
			if (0 == a.length) this.status = 0 == this.F.length ? 1 : 3;
			else {
				if (a.length == this.F.length)
					for (var b = 0, c; (c = this.F[b]); b++) {
						var d = a[b];
						c.source == d.source &&
							((c.B = d.A),
							(c.C = d.C),
							0 > c.A || c.A >= d.A.length) &&
							(c.A = 0);
					}
				else
					for (
						this.F = [], this.source = '', b = this.A = 0;
						(c = a[b]);
						b++
					)
						(this.source += c.source),
							(d = new kw(c.source)),
							(d.B = c.A),
							(d.C = c.C),
							(d.A = 0),
							this.F.push(d);
				this.status = 3;
				nw(this);
			}
			Lu(this);
		}
	};
	x.kd = function () {
		var a = this.F[this.A];
		if (!(2 > a.source.length)) {
			var b = a.source.slice(-1);
			a.source = a.source.slice(0, -1);
			lw(a);
			(a = this.F[this.A + 1])
				? ((a.source = b + a.source), lw(a))
				: ((a = new kw(b)), this.F.splice(this.A + 1, 0, a));
			Nu(this);
		}
	};
	x.Fd = function () {
		if (!(this.A >= this.F.length - 1)) {
			var a = this.F[this.A],
				b = this.F[this.A + 1];
			a.source += b.source.slice(0, 1);
			lw(a);
			b.source = b.source.slice(1);
			0 == b.source.length ? this.F.splice(this.A + 1, 1) : lw(b);
			Nu(this);
		}
	};
	y(ow, Mv);
	ow.prototype.ed = function () {
		var a = this.model.Ja();
		if (3 == this.model.status) {
			for (var b = [], c = 0; c < a.length; c++) {
				var d = this.B.P(m, Vd, a[c]);
				this.model.A != c && W(d, Td);
				b.push(d);
			}
			this.B.ia(this.L, b);
		} else
			2 == this.model.status
				? this.B.ia(this.L, a.join(''))
				: this.B.ia(this.L, a[0], this.B.P(m, Rd), a[1]);
	};
	y(pw, ew);
	x = pw.prototype;
	x.Ig = function () {
		this.model.la(this.model.D.length - 1 - this.model.C);
	};
	x.vc = function () {
		ew.prototype.vc.call(this);
		this.A.C = !1;
	};
	x.Ba = function (a) {
		var b = String.fromCharCode(a.charCode);
		return 3 == this.model.status && '0' < b && Number(b) <= this.model.B.B
			? !1
			: ew.prototype.Ba.call(this, a);
	};
	x.vd = function (a) {
		ew.prototype.vd.call(this, a);
		1 == this.model.F.length && this.model.sa(-1);
	};
	x.Jc = function () {
		var a = qw(this);
		a = a.concat(rw(this));
		return (a = a.concat([
			[t, 0, 38, 3, null, this.model.la, this.model, -1],
			[t, 0, 40, 3, null, this.model.la, this.model, 1],
			[t, 0, 33, 3, null, this.model.ma, this.model, -1],
			[t, 0, 34, 3, null, this.model.ma, this.model, 1],
			[u, 0, /[0-9]/, 3, null, this.Zc, this],
			[t, 0, 36, 3, null, this.model.la, this.model, -999],
			[t, 0, 35, 3, null, this.Ig, this],
			[t, 0, 9, 3, null, this.model.la, this.model, 1],
			[t, 0, 32, 3, null, this.model.la, this.model, 1],
			[t, 16, 38, 3, null, this.model.ma, this.model, -1],
			[t, 16, 40, 3, null, this.model.ma, this.model, 1],
			[t, 16, 37, 3, null, this.model.kd, this.model],
			[t, 16, 39, 3, null, this.model.Fd, this.model],
			[t, 16, 32, 3, null, this.model.la, this.model, -1],
			[t, 17, 72, 3, null, this.xc, this],
			[t, 17, 80, 3, null, this.model.la, this.model, -1],
			[t, 17, 78, 3, null, this.model.la, this.model, 1],
			[t, 17, 73, 3, null, this.model.kd, this.model],
			[t, 17, 79, 3, null, this.model.Fd, this.model],
			[t, 17, 81, 3, null, this.model.kd, this.model],
			[t, 17, 87, 3, null, this.model.Fd, this.model],
		]));
	};
	y(sw, iw);
	sw.prototype.B = function () {
		for (var a = 0; a < this.A.length && this.A[a].target; a++)
			this.J(new iu(this.A[a].source, this.A[a].target));
		this.A = this.A.slice(a);
		iw.prototype.B.call(this);
	};
	var tw = {
		a: '\u3107',
		b: '\u3116',
		c: '\u310f',
		d: '\u310e',
		e: '\u310d',
		f: '\u3111',
		g: '\u3115',
		h: '\u3118',
		i: '\u311b',
		j: '\u3128',
		k: '\u311c',
		l: '\u3120',
		m: '\u3129',
		n: '\u3119',
		o: '\u311f',
		p: '\u3123',
		q: '\u3106',
		r: '\u3110',
		s: '\u310b',
		t: '\u3114',
		u: '\u3127',
		v: '\u3112',
		w: '\u310a',
		x: '\u310c',
		y: '\u3117',
		z: '\u3108',
		1: '\u3105',
		2: '\u3109',
		3: '\u02c7',
		4: '\u02cb',
		5: '\u3113',
		6: '\u02ca',
		7: '\u02d9',
		8: '\u311a',
		9: '\u311e',
		0: '\u3122',
		'-': '\u3126',
		';': '\u3124',
		',': '\u311d',
		'.': '\u3121',
		'/': '\u3125',
		' ': '\u02c9',
		'=': '=',
	};
	y(ww, Iu);
	x = ww.prototype;
	x.abort = function () {
		3 == this.status ? xw(this) : 1 == this.status && this.reset();
	};
	x.eb = function (a, b) {
		2 != this.status &&
			3 != this.status &&
			(this.Ea
				? ' ' != a &&
				  (this.G = this.source = (this.source + a).slice(0, this.B.G))
				: ((this.source =
						this.source.slice(0, this.source.length - b) +
						a.toLowerCase()),
				  (this.G = (a = this.B.transform(this.source, ''))
						? a.text
						: this.source)),
			(this.C = -1),
			(this.H = !0),
			0 == this.status && this.J('opn'),
			this.B.Ha && !this.source.match(this.B.Ha)
				? ((this.status = 1), Lu(this))
				: Nu(this));
	};
	x.dd = function () {};
	x.cd = function (a) {
		1 != this.status ||
			this.source ||
			(0 > a ? (a = 0) : a > this.F.length && (a = this.F.length),
			a != this.A && ((this.A = a), Lu(this)));
	};
	x.ac = function () {
		this.source
			? ((this.G = this.G.slice(0, -1)),
			  (this.source = this.source.slice(0, -1)))
			: 0 < this.A && (this.F.splice(this.A - 1, 1), this.A--);
		0 != this.F.length || this.source ? Lu(this) : this.reset();
	};
	x.sa = function (a) {
		if (3 == this.status) {
			typeof a === Df && 0 <= a && (this.C = a);
			if (0 <= this.C && this.C < this.D.length) {
				var b = this.D[this.C];
				a = b.source;
				b = b.target;
				if (this.S) return Ku(this, a, b), '';
				for (; a && b; ) {
					var c = this.F[this.A++];
					if (a.slice(0, c.source.length) != c.source) break;
					c.target = b.charAt(0);
					c.A = !0;
					a = a.slice(c.source.length);
					b = b.slice(1);
				}
			}
			xw(this);
			return '';
		}
		if (2 == this.status && this.source) {
			Ku(this, this.ib());
			b = a = '';
			for (c = this.A; c < this.F.length; c++)
				(a += this.F[c].source), (b += this.F[c].target);
			a && b && Ku(this, a, b);
			return b;
		}
		return 1 == this.status
			? ((a = this.Ja().join('')),
			  (b = Hj(this.F, function (d) {
					return d.source;
			  })),
			  (c = Hj(this.F, function (d) {
					return d.target;
			  })),
			  vu(tu(this.L.code), b.join(''), c.join(''), b.join(' ')),
			  Ku(this, this.hb(), a),
			  Lu(this),
			  a)
			: '';
	};
	x.reset = function () {
		this.F = [];
		this.G = '';
		this.S = !1;
		Iu.prototype.reset.call(this);
	};
	x.Jg = function () {
		1 != this.status ||
			this.source ||
			(this.F.splice(this.A, 1),
			0 == this.F.length ? this.reset() : Lu(this));
	};
	x.Qb = function () {
		return this.source;
	};
	x.Za = function () {
		if (!this.source) {
			for (var a = '', b = 0; b < this.A; b++) a += this.F[b].target;
			return a;
		}
		return '';
	};
	x.ib = function () {
		var a = '';
		if (this.source) {
			for (var b = 0; b < this.A; b++) {
				var c = this.F[b];
				a += c.A ? c.target : c.source;
			}
			a += this.source;
		} else
			for (
				this.A >= this.F.length && 0 < this.F.length && this.A--,
					b = this.A;
				b < this.F.length;
				b++
			)
				a += this.F[b].source;
		return a;
	};
	x.md = function () {
		if ('chext' == Ap) {
			var a = Hj(
				this.source
					? this.F.slice(0, this.A)
					: this.F.slice(this.A, this.F.length),
				function (d) {
					var e = {};
					e.source = uw(d.source);
					d.A && (e.target = d.target);
					return e;
				},
				this
			);
			this.source &&
				a.push({
					source: uw(this.source),
				});
			var b = {};
			b.itc = this.L.code;
			var c = this.ib();
			b.source = uw(c);
			b.update_all = !0;
			b.append_tokens = a;
			return {
				message: JSON.stringify(b),
			};
		}
		return Iu.prototype.md.call(this);
	};
	x.Ja = function () {
		for (var a = '', b = '', c = 0; c < this.F.length; c++) {
			var d = this.F[c];
			c < this.A
				? (b += d.target || d.source)
				: (a += d.target || d.source);
		}
		return [b, this.G, a];
	};
	x.hb = function () {
		return '';
	};
	x.Ab = function (a) {
		Iu.prototype.Ab.call(this, a);
		if (2 == this.status)
			if (((a = a.A[0]), !a || 0 == a.A.length))
				(this.status = 1), Lu(this);
			else if (a.D + a.source == this.Za() + this.ib()) {
				if (this.source) {
					a = a.A[0].target;
					if (a.length != this.A + 1) {
						this.status = 1;
						return;
					}
					this.F.splice(this.A, 0, new vw(this.source));
					this.source = this.G = '';
					for (
						var b = 0, c = 0;
						c < a.length && b < this.F.length;
						b++, c++
					)
						this.F[b].target = a.charAt(c);
					this.A = b;
					this.status = 1;
				} else
					(this.D = a.A),
						(this.H = a.C),
						this.B.Y && 0 > this.C && (this.C = 0),
						(this.status = 3);
				Lu(this);
			}
	};
	y(zw, Mv);
	zw.prototype.ed = function () {
		var a = this.model.Ja();
		this.B.ia(this.L, a[0], this.B.P(m, Vd, a[1]), this.B.P(m, Rd), a[2]);
	};
	y(Aw, ew);
	x = Aw.prototype;
	x.Kg = function () {
		this.model.la(this.model.D.length - 1 - this.model.C);
	};
	x.vc = function () {
		ew.prototype.vc.call(this);
		this.A.C = !1;
	};
	x.Jc = function () {
		function a() {
			return !h.T;
		}
		function b() {
			return h.T;
		}
		function c() {
			return 1 == g.model.status && !g.model.source;
		}
		function d() {
			return h.D && (0 == g.model.status || 1 == g.model.status);
		}
		function e() {
			return 0 != g.model.status;
		}
		var g = this,
			h = this.model.B;
		return [
			[t, 0, 32, null, d, this.cf, this],
			[u, 0, h.F, null, d, this.Ba, this],
			[t, 0, 38, 3, b, this.model.la, this.model, -1],
			[t, 0, 37, 3, a, this.model.la, this.model, -1],
			[t, 0, 40, 3, b, this.model.la, this.model, 1],
			[t, 0, 39, 3, a, this.model.la, this.model, 1],
			[t, 0, 33, 3, null, this.model.ma, this.model, -1],
			[t, 0, 37, 3, b, this.model.ma, this.model, -1],
			[t, 0, 38, 3, a, this.model.ma, this.model, -1],
			[u, 0, h.fa, 3, null, this.model.ma, this.model, -1],
			[t, 0, 34, 3, null, this.model.ma, this.model, 1],
			[t, 0, 39, 3, b, this.model.ma, this.model, 1],
			[t, 0, 40, 3, a, this.model.ma, this.model, 1],
			[u, 0, h.ea, 3, null, this.model.ma, this.model, 1],
			[
				u,
				0,
				/[0-9]/,
				3,
				function () {
					return 0 != h.O;
				},
				this.Zc,
				this,
			],
			[t, 0, 13, null, e, this.$b, this],
			[t, 0, 8, 1, null, this.Vc, this],
			[t, 0, 46, 1, null, this.model.Jg, this.model],
			[t, 0, 27, null, e, this.xc, this],
			[t, 0, 32, null, c, this.pb, this],
			[t, 0, 40, null, c, this.pb, this],
			[t, 0, 37, 1, null, this.model.ra, this.model, -1],
			[t, 0, 39, 1, null, this.model.ra, this.model, 1],
			[t, 0, 36, 1, null, this.model.ra, this.model, -999],
			[t, 0, 35, 1, null, this.model.ra, this.model, 999],
			[t, 0, 36, 3, null, this.model.la, this.model, -999],
			[t, 0, 35, 3, null, this.Kg, this],
		];
	};
	x.Ba = function (a) {
		var b = String.fromCharCode(a.charCode);
		if (' ' == b && (0 == this.model.status || !this.model.source))
			return !1;
		this.model.Ea || (a.charCode = b.toLowerCase().charCodeAt(0));
		return ew.prototype.Ba.call(this, a);
	};
	x.Pd = function (a) {
		return a.type != u || fw(this) || a.ctrlKey || a.altKey || a.metaKey
			? !1
			: yw(this.model, String.fromCharCode(a.charCode)) ||
					ew.prototype.Pd.call(this, a);
	};
	y(Dw, R);
	x = Dw.prototype;
	x.Mf = function (a) {
		this.C &&
			this.C.code == a.A &&
			(O(this.A),
			(this.A = null),
			(this.B = Ys(this.C.code, this.D)),
			(a = this.B.K ? new jw() : new sw()),
			0 == this.B.L
				? (this.A = new hw(a, this.G, this.C, this.B))
				: 2 == this.B.L
				? (this.A = new Aw(a, this.G, this.C, this.B))
				: 1 == this.B.L && (this.A = new pw(a, this.G, this.C, this.B)),
			this.A && this.A.ta(this),
			this.B.K && this.A && this.A.vc(),
			this.A && (this.F = this.A.Jc()));
	};
	x.handleEvent = function (a) {
		if (!(this.A && this.F && Vv && this.C)) return !1;
		if (a.type == u) {
			if (this.H) return !0;
			if (void 0 === a.charCode || 0 >= a.charCode) return !1;
			if (Q && !a.A.charCode)
				if (13 == a.keyCode) a.charCode = a.keyCode;
				else return !1;
		}
		var b = this.A;
		var c = b.Pd(a);
		if (c) b = !0;
		else if (this.B.A & 1) {
			for (var d = 0, e; (e = this.F[d]); d++)
				if (a.type == e[0]) {
					var g = 0 < a.keyCode && a.keyCode === e[2],
						h =
							0 < a.charCode &&
							String.fromCharCode(a.charCode).match(e[2]);
					if (!e[2] || g || h) {
						g = e[1];
						if (typeof g === Df) {
							var k = 0;
							a.shiftKey && (k += 16);
							a.ctrlKey && (k += 17);
							a.altKey && (k += 18);
							a.metaKey && (k += 91);
							if (g != k && (!h || (0 != k && 16 != k))) continue;
						}
						if (!e[3] || b.model.status == e[3])
							if (!e[4] || e[4]())
								if (
									((c = e[5].apply(
										e[6],
										void 0 != e[7] ? e.slice(7) : [a]
									)),
									0 != c)
								) {
									c = !0;
									break;
								}
					}
				}
			c ||
				((a.ctrlKey || a.altKey || a.metaKey) &&
				17 != a.keyCode &&
				18 != a.keyCode &&
				91 != a.keyCode
					? (a.type != je && b.model.reset(), (c = !1))
					: (c = b.A
							? aw(b.A, a)
							: a.type == u ||
							  9 == a.keyCode ||
							  46 == a.keyCode ||
							  8 == a.keyCode ||
							  (33 <= a.keyCode && 40 >= a.keyCode)
							? fw(b)
							: !1));
			b = c;
		} else b = !1;
		a.type == t && (this.H = b);
		return b;
	};
	x.reset = function (a) {
		this.A &&
			fw(this.A) &&
			(a && this.A.model.sa(-1), this.A.model.reset());
	};
	x.select = function () {
		this.A && fw(this.A) && this.A.model.sa();
	};
	x.N = function () {
		O(this.A);
		O(this.I);
		R.prototype.N.call(this);
	};
	var Bw = Cw;
	Dw.prototype.A = null;
	Dw.prototype.F = null;
	Dw.prototype.H = !1;
	C(Ew, R);
	Ew.prototype.N = function () {
		Ew.ca.N.call(this);
		this.C && (ln(this.C), (this.C = null));
		this.A = this.B = null;
	};
	Ew.prototype.D = function () {
		var a = am(this.B || window);
		Tl(a, this.A) || ((this.A = a), this.J('resize'));
	};
	y(Fw, Xu);
	Fw.prototype.V = function () {
		this.target.style.display.toLowerCase() != Cf && Hw(this);
	};
	Fw.prototype.N = function () {
		O(this.O);
		Xu.prototype.N.call(this);
	};
	y(Jw, V);
	x = Jw.prototype;
	x.$ = function () {
		V.prototype.$.call(this);
		var a = fm('A', {
				class: 'ita-kd-icon-button ita-kd-inputtool-icon ita-kd-mid ita-kd-small',
			}),
			b = fm(m, {
				class:
					'ita-kd-img ita-kd-icon ita-kd-icon-span ' +
					this.H +
					' ita-kd-statusbar-icon',
			});
		a.appendChild(b);
		this.C = a;
	};
	x.X = function () {
		V.prototype.X.call(this);
		var a = this.M();
		T(this.D, a, n, this.Vg, void 0);
		T(this.D, a, v, this.Zf, void 0);
		T(this.D, a, $e, this.Yf, void 0);
	};
	x.Zf = function () {
		var a = this.M();
		a.firstChild && (a.firstChild.style.opacity = '0.9');
	};
	x.Yf = function () {
		var a = this.M();
		a.firstChild && (a.firstChild.style.opacity = '');
	};
	x.Vg = function () {
		this.J({
			type: 'ecd',
			command: this.G,
		});
	};
	x.N = function () {
		O(this.D);
		V.prototype.N.call(this);
	};
	y(Lw, V);
	x = Lw.prototype;
	x.ha = function (a) {
		V.prototype.ha.call(this, a);
		Iw(this.M());
		av(this.M());
		Hw(this.H);
		Hw(this.G);
	};
	x.$ = function () {
		V.prototype.$.call(this);
		var a = this.A,
			b = this.M();
		Xp(b, [Nd, 'ita-kd-statusbar']);
		var c = zA.length,
			d = Dm(a, c + 2);
		d.cellPadding = '0';
		d.cellSpacing = '0';
		d.border = '0';
		Vp(d, 'ita-kd-statusbar-table');
		var e = d.rows[0].cells,
			g = a.P(m, 'ita-kd-icon-span ita-kd-img ita-kd-floating-bar-icon');
		this.L = a.P(
			'A',
			'ita-kd-icon-button ita-kd-left ita-kd-floating-bar',
			g
		);
		a.U(e[0], this.L);
		this.D = a.P(
			'A',
			'ita-kd-icon-button ita-kd-small ita-kd-mid ita-kd-inputtool-icon',
			a.P(m)
		);
		un(this.D, {
			cursor: 'move',
		});
		L && W(this.D, 'ita-kd-ie');
		a.U(e[1], this.D);
		D(
			zA,
			function (h, k) {
				var l = Kw(h);
				l.ha(e[k + 2]);
				T(this.I, l, 'ecd', this.Gf, void 0);
				this.S[h] = l;
				k < c - 1 &&
					(Yp(l.M(), 'ita-kd-mid'), W(l.M(), 'ita-kd-right'));
			},
			this
		);
		a.U(b, d);
	};
	x.X = function () {
		V.prototype.X.call(this);
		var a = this.M();
		this.H = new Fw(a, this.D);
		this.G = new Fw(a, this.L);
		a = A(this.B.Bb, this.B, 'bdc');
		U(T(this.I, this.H, ah, a, void 0), this.G, ah, a);
	};
	x.Gf = function (a) {
		this.O = a.command;
		this.J(a);
	};
	x.N = function () {
		O(this.G);
		O(this.H);
		O(this.I);
		hk(this.S, O);
		V.prototype.N.call(this);
	};
	var zA = [Lh, Wh, 'pun'];
	y(Pw, P);
	y(Qw, du);
	x = Qw.prototype;
	x.De = function (a) {
		this.active &&
			rt(this.C) &&
			(xs(a, 'shift', Lh),
			xs(a, 'shift+space', Wh),
			xs(a, 'ctrl+.', 'pun'));
	};
	x.mf = function (a) {
		ys(a, 'shift', Lh);
		ys(a, 'shift+space', Wh);
		ys(a, 'ctrl+.', 'pun');
	};
	x.Tf = function (a) {
		var b = [a.command];
		Sj(b, a.var_args);
		this.Wb.apply(this, b);
	};
	x.Qf = function (a) {
		var b = 0,
			c = '';
		if (this.A && this.active) {
			switch (a.type) {
				case 'opn':
					this.D.J('se');
					b = 1;
					break;
				case 'cmts':
					b = 1;
					break;
				case 'cmte':
					c = a.data;
					b = 3;
					break;
				case 'cls':
					Io.qa().J(Qc), (b = 3);
			}
			b && this.Ce != b && (this.A.Fb(b, c), (this.Ce = b));
		}
	};
	x.Xb = function (a) {
		return !!a && E(this.G, a);
	};
	x.Tb = function (a) {
		return !!a && 'im' == a.type;
	};
	x.gb = function () {
		return this.H;
	};
	x.register = function (a) {
		du.prototype.register.call(this, a);
		this.K.push(a);
		this.De(a);
	};
	x.Eb = function (a) {
		du.prototype.Eb.call(this, a);
		this.B.reset();
		Pj(this.K, a);
		this.mf(a);
	};
	x.Nc = function (a) {
		if (!a || !this.active || Pr(a)) return !1;
		this.A && (Vv = this.A);
		var b = Ys(this.C ? this.C.code : '', this.B.D);
		return a.type == Qr
			? (X &&
					!b.D &&
					b.K &&
					D(
						a.A.data,
						function (c) {
							if (' ' == c || '\n' == c)
								(a.keyCode = a.charCode = c.charCodeAt(0)),
									(a.type = t),
									this.B.handleEvent(a),
									(a.type = u),
									this.B.handleEvent(a),
									(a.type = je),
									this.B.handleEvent(a);
						},
						this
					),
			  !1)
			: X && !b.D && b.K && /^key/.test(a.type)
			? 32 != a.keyCode && 10 != a.keyCode
				? this.B.handleEvent(a)
				: !1
			: this.B.handleEvent(a);
	};
	x.rc = function (a, b) {
		du.prototype.rc.call(this, a, b);
		this.active && this.Ga && rt(this.C) && Uw(this, b.A);
		return !1;
	};
	x.Wb = function (a, b, c, d) {
		switch (a) {
			case nb:
				(a = d) && void 0 !== a.ss && (Ky = a.ss);
				b = this.C;
				if (!b || !this.Tb(b)) {
					this.Ga && Nw(this.Ga, null, !1, null);
					break;
				}
				this.active && ((this.B.C = b), Ws(b.code));
				X ||
					(this.Ga ||
						((this.Ga = new Lw()),
						this.Ga.ha(),
						T(this.F, this.Ga, 'ecd', this.Tf, void 0)),
					a && void 0 != a.tlang
						? Sw(this, a)
						: this.active && ((a = Rw(this)), Tw(this, b, a)),
					Nw(this.Ga, b, Ky && this.active, a),
					D(this.K, this.active && rt(b) ? this.De : this.mf, this));
				break;
			case Wh:
			case Lh:
			case 'pun':
				Uw(this, a);
				break;
			case 'cm':
				this.B.select();
				break;
			case Qc:
			case mb:
				this.B.reset();
				this.C &&
					Ys(this.C.code, this.B.D).C &&
					((b = this.B),
					(a = Vw()),
					b.A &&
						b.A.view &&
						((b = b.A.view),
						b.D &&
							((b.D.style.cssText = Xk(a)),
							(b.D.style.display = Cf))));
				break;
			case 'lc':
				Us(b);
		}
	};
	x.N = function () {
		O(this.F);
		O(this.B);
		O(this.Ga);
		du.prototype.N.call(this);
	};
	x.Ga = null;
	x.Ce = 0;
	y(Ww, P);
	y(Xw, R);
	Xw.prototype.S = function (a, b, c) {
		b
			? c && 1 < c.length
				? (this.O.set('pre', a),
				  (a = c[1][0]),
				  (this.A = a[0]),
				  (a = Hj(a[1].slice(0, this.T), function (d) {
						return Cl(d);
				  })),
				  0 < a.length && this.J(new Ww(a)))
				: (this.A = '')
			: ((this.A = ''), this.J(new P('m')));
		this.L = !1;
		this.G && (Yw(this, this.G), (this.G = null));
	};
	Xw.prototype.R = function (a, b) {
		a &&
			b[1] &&
			(this.O.set('pre', 1),
			(a = Hj(b[1][0][1].slice(0, 10), function (c) {
				return ' ' + Cl(c);
			})),
			0 < a.length && this.J(new Ww(a, !0)));
	};
	Xw.prototype.abort = function () {
		this.A = '';
		this.H.abort(null);
	};
	Xw.prototype.N = function () {
		O(this.H);
		this.C = [];
		R.prototype.N.call(this);
	};
	y(bx, P);
	C(cx, N);
	cx.prototype.N = function () {
		hk(this.B, this.A.ab, this.A);
		this.A = this.B = null;
		cx.ca.N.call(this);
	};
	y(ex, V);
	x = ex.prototype;
	x.$ = function () {
		V.prototype.$.call(this);
		var a = this.A,
			b = a.P(f);
		W(b, 'ita-hwt-candidate');
		this.C = b;
		0 == this.B.lastIndexOf(' ', 0)
			? a.ia(
					b,
					fm(
						m,
						{
							style: 'color:#bbb;',
						},
						'\u23b5'
					),
					Cm(a, this.B)
			  )
			: a.Qh(b, this.B);
	};
	x.X = function () {
		V.prototype.X.call(this);
		U(T(this.G, this.M(), n, this.Mg, void 0), this.M(), v, this.Ng);
	};
	x.Mg = function () {
		this.D && this.J(new bx(this.B));
	};
	x.N = function () {
		O(this.G);
		V.prototype.N.call(this);
	};
	x.Ng = function () {
		dx(this.H, this.B, Ra);
	};
	y(gx, Y);
	x = gx.prototype;
	x.$ = function () {
		Y.prototype.$.call(this);
		this.C = this.A.P(f, 'ita-hwt-candidates');
	};
	x.X = function () {
		Jv(this);
	};
	x.uh = function (a) {
		this.H && (hx(this), fx(a), (this.D = Fj(this.B, a)), (this.I = Fg));
	};
	x.th = function () {
		this.H &&
			(hx(this),
			this.G && 0 < this.B.length && fx(this.B[0]),
			(this.D = 0),
			(this.I = 'auto'));
	};
	x.isEnabled = function () {
		return this.H;
	};
	x.N = function () {
		O(this.O);
		Y.prototype.N.call(this);
	};
	y(mx, P);
	var tx = {
		'': ',.?!:\'";@'.split(''),
		es: ',.\u00bf?\u00a1!:\'"'.split(''),
		ja: '\uff0c\u3002\uff1f\uff01\uff1a\u300c\u300d\uff1b'.split(''),
		'zh-Hans': '\uff0c\u3002\uff1f\uff01\uff1a\u201c\u201d\uff1b'.split(''),
		'zh-Hant': '\uff0c\u3002\uff1f\uff01\uff1a\u300c\u300d\uff1b'.split(''),
	};
	y(ox, R);
	x = ox.prototype;
	x.Ne = function (a) {
		this.A = !0;
		this.J(new mx('q', px(this, a)));
		a.preventDefault();
	};
	x.Ld = function (a) {
		this.A &&
			((this.A = !1),
			this.J(new mx('p', px(this, a))),
			a.preventDefault());
	};
	x.Oe = function (a) {
		this.A && this.J(new mx('o', px(this, a)));
		a.preventDefault();
	};
	x.reset = function () {
		this.A = !1;
	};
	x.N = function () {
		O(this.B);
	};
	y(qx, Y);
	x = qx.prototype;
	x.$ = function () {
		Y.prototype.$.call(this);
		var a = this.A;
		this.D = a.P('CANVAS', 'ita-hwt-canvas');
		this.D.style.width = '425px';
		this.D.width = 425 * this.G;
		this.D.style.height = '194px';
		this.D.height = 194 * this.G;
		a.U(this.M(), this.D);
		this.B = this.D.getContext('2d');
	};
	x.X = function () {
		Y.prototype.X.call(this);
		Jv(this);
		this.H = new ox(this.D, this.ba);
		U(
			U(
				U(
					U(
						T(this.V, this.H, 'q', this.Qg, void 0),
						this.H,
						'o',
						this.Rg
					),
					this.H,
					'p',
					this.Pg
				),
				this.D,
				v,
				this.Og
			),
			this.D,
			Ye,
			Hm
		);
	};
	x.Qg = function (a) {
		this.I = [];
		0 == this.L.length && (this.W = a.A.time);
		rx(this, a.A);
		a.preventDefault();
		this.O &&
			(dm(this.ba).cancelAnimationFrame(this.O),
			(this.O = 0),
			(this.B.globalAlpha = 1),
			(this.B.globalCompositeOperation = 'source-over'));
		W(this.M(), Cd);
	};
	x.Rg = function (a) {
		rx(this, a.A);
		a.preventDefault();
	};
	x.Pg = function (a) {
		this.L.push(this.I);
		a.preventDefault();
		this.J(new P('i'));
	};
	x.reset = function () {
		this.B.clearRect(0, 0, this.D.width, this.D.height);
		this.L = [];
		this.I = [];
		this.H.reset();
	};
	x.N = function () {
		O(this.V);
		Y.prototype.N.call(this);
	};
	x.Og = function () {
		dx(this.ea, 'panel', Ra);
	};
	y(ux, Y);
	x = ux.prototype;
	x.$ = function () {
		Y.prototype.$.call(this);
		var a = this.A,
			b = this.M();
		this.D = new qx(this.Kc(), a, this);
		this.D.ha(b);
		this.B = new gx(a, this);
		this.B.ha(b);
		ix(this.B, this.L, !1);
		this.ea.set('pre', 2);
	};
	x.X = function () {
		Y.prototype.X.call(this);
		Jv(this);
		T(this.ga, this.D.H, 'q', this.Od, void 0);
	};
	x.Od = function () {
		jx(this.B, !1);
	};
	x.reset = function () {
		this.D.reset();
		ix(this.B, this.L, !1);
		this.ea.set('pre', 2);
	};
	x.Kc = function () {
		return document;
	};
	x.ob = function () {
		return this.M();
	};
	x.Sd = function (a, b) {
		0 != a.length &&
			(jx(this.B, !1), ix(this.B, a, b), jx(this.B, !this.D.H.A));
	};
	x.N = function () {
		O(this.ga);
		Y.prototype.N.call(this);
	};
	x.Me = function () {};
	y(vx, R);
	x = vx.prototype;
	x.Rd = function (a) {
		this.view = a;
		U(
			U(
				U(
					U(
						U(
							U(
								T(this.ga, this.view, 'l', this.Xc, void 0),
								this.view,
								'a',
								this.Re
							),
							this.view,
							'f',
							this.Wc
						),
						this.view,
						'i',
						this.xh
					),
					this.view,
					'h',
					this.Lg
				),
				this.view,
				'b',
				this.Xg
			),
			this.B,
			'n',
			this.yh
		);
	};
	x.qb = function (a) {
		this.A = a;
	};
	x.Xg = function () {
		this.yc();
	};
	x.Xc = function () {
		this.A && (this.view.B.G ? this.yc() : xx(this, ' '));
	};
	x.Re = function () {
		sx(this.view.D)
			? this.G
				? this.reset()
				: (xx(this, '', 1),
				  this.C
						? this.C.start(75)
						: ((this.C = new Wr(this.Re, 300, this)),
						  this.C.start()))
			: ('' != this.B.A && $w(this.B), this.reset());
	};
	x.Lg = function () {
		this.C && (this.C.da(), (this.C = null));
	};
	x.Wc = function (a, b) {
		a = !1;
		this.A &&
			(this.view.B.G
				? (this.yc(), (a = !0))
				: b ||
				  (xx(this, '\n'),
				  (b = this.A.D),
				  Rr(b, t, 13),
				  Rr(b, u, 13),
				  Rr(b, je, 13)));
		return a;
	};
	x.yh = function (a) {
		this.view.Sd(a.A, !0);
		this.J(new P('k'));
		this.G = a.F;
	};
	x.xh = function () {
		wx(this);
	};
	x.yc = function () {
		if (this.A) {
			var a = this.view.B;
			var b = new kx(a.L[a.D], a.I);
			xx(this, b.text);
			a = this.B;
			var c = b.text;
			b = b.A;
			c &&
				b &&
				'' != a.A &&
				a.C.push({
					feedback: c,
					select_type: b,
					language: a.F,
					ink_hash: a.A,
				});
			this.H.push('ci', this.view.B.D);
			this.H.report();
			this.reset();
		}
	};
	x.reset = function () {
		this.G = !1;
		this.B.abort();
		this.view.reset();
		this.J(new P('j'));
	};
	x.Kd = function (a) {
		var b = this.B;
		b.D.itc = a;
		b.I = b.B[a];
	};
	x.handleEvent = function (a) {
		var b = !1;
		if (this.view.ba) return !1;
		if (a.type == t) {
			if (8 == a.keyCode || 27 == a.keyCode)
				sx(this.view.D) ||
					('' != this.B.A && $w(this.B), this.reset(), (b = !0));
			else if (37 == a.keyCode || 39 == a.keyCode)
				if (((b = this.view), b.B.isEnabled() && b.B.G)) {
					b = b.B;
					if (b.H) {
						b.D =
							37 == a.keyCode
								? Math.max(b.D - 1, 0)
								: Math.min(b.D + 1, b.B.length - 1);
						a = b.R;
						var c = b.B[b.D].M();
						if (hA && null !== c && 'innerText' in c)
							c = c.innerText.replace(/(\r\n|\r|\n)/g, '\n');
						else {
							var d = [];
							xm(c, d, !0);
							c = d.join('');
						}
						c = c.replace(/ \xAD /g, ' ').replace(/\xAD/g, '');
						c = c.replace(/\u200B/g, '');
						hA || (c = c.replace(/ +/g, ' '));
						' ' != c && (c = c.replace(/^\s*/, ''));
						dx(a, c, Ra);
						hx(b);
						fx(b.B[b.D]);
						b.I = Fg;
					}
					b = !0;
				} else b = !1;
			else
				13 == a.keyCode
					? (b = this.Wc(a, !0))
					: 32 == a.keyCode && (this.Xc(a), (b = !0));
			return (this.F = b);
		}
		return a.type == je ? (this.F = !1) : a.type == u ? this.F : !1;
	};
	x.Jd = function () {
		this.D || ((this.D = !0), this.view.ha());
	};
	x.N = function () {
		O(this.C);
		O(this.ga);
		O(this.view);
		R.prototype.N.call(this);
	};
	y(yx, Y);
	x = yx.prototype;
	x.$ = function () {
		var a = this.A,
			b = a.P(f, 'ita-hwt-buttons');
		this.C = b;
		var c = a.P(f, ['ita-hwt-backspace-img', Md]);
		this.G = a.P(f, [yd, Ed, Hd, 'ita-hwt-backspace']);
		a.U(this.G, c);
		a.U(b, this.G);
		this.D = a.P(f, [yd, Ed, Hd, 'ita-hwt-space']);
		a.U(b, this.D);
		this.I = a.P(f, ['ita-hwt-enter-img', 'ita-hwt-enter-img-dark', Md]);
		this.B = a.P(f, [yd, Ed, Hd, 'ita-hwt-enter']);
		a.U(this.B, this.I);
		a.U(b, this.B);
	};
	x.X = function () {
		Jv(this);
		var a = [v, $e];
		U(
			U(
				U(
					U(
						U(
							U(
								U(
									U(
										T(this.O, this.D, n, this.Ah, void 0),
										this.D,
										a,
										this.Nd
									),
									this.B,
									n,
									this.bh
								),
								this.B,
								a,
								this.Nd
							),
							this.G,
							Ye,
							this.Wg
						),
						this.G,
						a,
						this.Nd
					),
					this.D,
					v,
					this.Id
				),
				this.B,
				v,
				this.Id
			),
			this.G,
			v,
			this.Id
		);
	};
	x.Nd = function (a) {
		a.target && (a.type == v ? W(a.target, Gd) : Yp(a.target, Gd));
	};
	x.Ah = function () {
		this.H && this.J(new P('l'));
	};
	x.Wg = function () {
		this.H && this.J(new P('a'));
	};
	x.bh = function () {
		this.H && this.J(new P('f'));
	};
	x.N = function () {
		O(this.O);
		this.A.ab(this.D);
		this.A.ab(this.B);
		this.A.ab(this.G);
	};
	x.Id = function (a) {
		a.target == this.D
			? dx(this.L, 'Space', Ra)
			: a.target == this.B
			? dx(this.L, 'Enter', Ra)
			: a.target == this.G && dx(this.L, 'Delete', Ra);
	};
	y(Ax, ux);
	x = Ax.prototype;
	x.ha = function (a) {
		ux.prototype.ha.call(this, a);
		Cx(this);
	};
	x.$ = function () {
		ux.prototype.$.call(this);
		var a = this.A,
			b = this.M(),
			c = Nn(a.A.body);
		Xp(b, [
			'ita-hwt-ime',
			c ? 'ita-hwt-rtl' : 'ita-hwt-ltr',
			'notranslate',
		]);
		this.V = a.P(f, 'ita-hwt-butterbar', sa);
		b.appendChild(this.V);
		this.R &&
			(W(b, 'ita-hwt-ime-st'),
			(this.I = a.P(f, 'ita-kd-img ita-hwt-close')),
			b.appendChild(this.I),
			(this.H = a.P(f, 'ita-kd-img ita-hwt-grip')),
			b.appendChild(this.H));
		this.G = new yx(this.A, this);
		this.G.ha(b);
		av(b);
	};
	x.X = function () {
		ux.prototype.X.call(this);
		this.R &&
			((this.Z = new Fw(this.ob(), this.H)),
			U(T(this.ga, this.Z, ah, this.ah, void 0), this.Z, 'end', this.$g));
		Jv(this);
		var a = [v, $e, Oh],
			b = this.M();
		U(T(this.ga, b, a, this.sh, void 0), b, Ye, Hm);
		this.R &&
			U(
				U(T(this.ga, this.I, n, this.Zg, void 0), this.H, Ib, this.qh),
				this.H,
				a,
				A(this.sf, this, this.H, 'ita-hwt-grip-hover')
			);
		nx(this.ga, this.Kc(), A(this.Sg, this));
		T(this.ga, this.D.H, 'p', this.Tg, void 0);
		U(T(this.ga, this.I, v, this.Pe, void 0), this.H, v, this.Pe);
	};
	x.Od = function () {
		ux.prototype.Od.call(this);
		this.G.H = !1;
	};
	x.Tg = function () {
		this.G.H = !0;
	};
	x.Kc = function () {
		return I(this.ob());
	};
	x.ob = function () {
		return this.M();
	};
	x.ah = function () {
		W(this.M(), Dd);
		Hw(this.Z);
	};
	x.$g = function () {
		this.fa = Bn(this.ob());
		Yp(this.M(), Dd);
	};
	x.Sd = function (a, b) {
		ux.prototype.Sd.call(this, a, b);
		zx(this.G, !0);
	};
	x.oa = function (a) {
		var b = ux.prototype.oa.call(this, a);
		a && this.Z && Hw(this.Z);
		a ? (W(this.M(), Cd), this.J('sp')) : this.J('hp');
		return b;
	};
	x.qh = function () {
		this.Z.Gb(this.O);
		(this.O = !this.O)
			? ((this.fa = Bn(this.ob())), W(this.M(), Bd))
			: (Yp(this.M(), Bd), Cx(this, this.fa));
		var a = Jn(this.M()).width;
		130 < a && (this.G.D.style.width = a - 130 + mg);
		var b = this.D,
			c = a && a !== b.D.width / b.G;
		c &&
			(b.reset(),
			c && ((b.D.style.width = a + mg), (b.D.width = a * b.G)));
		this.reset();
	};
	x.reset = function () {
		ux.prototype.reset.call(this);
		zx(this.G, !1);
	};
	x.Zg = function () {
		this.oa(!1);
		this.reset();
		this.J(new P('g'));
	};
	x.Sg = function () {
		this.J(new P('h'));
	};
	x.N = function () {
		O(this.Z);
		this.A.ab(this.ob());
		ux.prototype.N.call(this);
	};
	x.sf = function (a, b, c) {
		c.type == v || c.type == Oh ? W(a, b) : Yp(a, b);
	};
	x.Me = function (a) {
		um(this.G.D, a);
	};
	x.sh = function (a) {
		this.ba = a.type == $e;
	};
	x.Pe = function (a) {
		a.target == this.I
			? dx(this.W, 'Close', Ra)
			: a.target == this.H && dx(this.W, 'Grip', Ra);
	};
	y(Ex, vx);
	x = Ex.prototype;
	x.Rd = function (a) {
		vx.prototype.Rd.call(this, a);
		this.view = a;
	};
	x.gg = function (a) {
		27 == a.keyCode &&
			this.A &&
			this.handleEvent(a) &&
			(a.stopPropagation(), a.preventDefault());
	};
	x.qb = function (a) {
		vx.prototype.qb.call(this, a);
		a = this.view;
		a.S && (Yp(a.V, 'shown'), (a.S = !1));
	};
	x.Xc = function (a) {
		vx.prototype.Xc.call(this, a);
		this.A || Dx(this.view);
	};
	x.Wc = function (a, b) {
		a = vx.prototype.Wc.call(this, a, b);
		this.A || Dx(this.view);
		return a;
	};
	x.yc = function () {
		vx.prototype.yc.call(this);
		if (this.A) {
			var a = this.A.Da(20),
				b = this.B;
			a &&
				b.I &&
				b.aa.C(
					'/predict',
					ax(b, {
						predict: !0,
						itc: b.I,
						pre_context: a,
						max_num_results: 10,
					}),
					b.R,
					b
				);
		} else Dx(this.view);
	};
	x.Jd = function () {
		vx.prototype.Jd.call(this);
		this.D || nx(this.ga, this.view.Kc(), A(this.gg, this));
	};
	x.Kd = function (a) {
		vx.prototype.Kd.call(this, a);
		this.B.D.app = Ap;
	};
	y(Gx, du);
	x = Gx.prototype;
	x.gh = function (a) {
		this.D.J(a);
	};
	x.gb = function () {
		return [t, je, u];
	};
	x.Nc = function (a) {
		this.B.qb(this.A);
		return Or(a) ? !1 : this.B.handleEvent(a);
	};
	x.Xb = function (a) {
		return !!a && E([nb, 'cd', mb, 're'], a);
	};
	x.register = function (a) {
		du.prototype.register.call(this, a);
		this.B.qb(this.A);
	};
	x.Eb = function (a) {
		du.prototype.Eb.call(this, a);
		this.B.qb(this.A);
	};
	x.Tb = function (a) {
		return null != a && 'hw' == a.type;
	};
	x.N = function () {
		O(this.B);
		O(this.F);
	};
	x.Wb = function (a, b, c, d) {
		a == nb
			? ((b = this.C),
			  this.B.qb(this.A),
			  this.active
					? (this.B.qb(this.A),
					  Fx(this.B, !0),
					  this.B.Kd(b.code),
					  (c = this.B),
					  (d = b.A),
					  (a = tx[d]) || (a = tx['']),
					  c.view.L != a && ((c.I = d), (c.view.L = a), c.reset()),
					  (c.B.F = 'und' == d ? 'universal' : d),
					  (c = this.B),
					  c.view.Me(mA[b.code]),
					  c.reset())
					: Fx(this.B, !1))
			: a == mb
			? this.B.qb(this.A)
			: 're' == a &&
			  b &&
			  ((a = this.B.view),
			  a.ob() && (b.Ma(a.ob(), c, d), a.isVisible() && Hw(a.Z)));
	};
	x.ih = function () {
		this.A && this.A.Fb(4);
	};
	x.hh = function (a) {
		this.A && this.A.Fb(6, a.data);
	};
	x.Yg = function () {
		this.D.J('se');
	};
	x.zh = function () {
		this.D.J(Qc);
	};
	var Ey = {
			de: qk([
				'Y',
				90,
				'Z',
				89,
				'\u00dc',
				192,
				'\u00db',
				189,
				'\u00dd',
				187,
				'\u00ba',
				219,
				'\u00bb',
				221,
				'\u00bf',
				220,
				'\u00cc',
				186,
				'\u00bd',
				191,
			]),
			fr: qk([
				'Q',
				65,
				'A',
				81,
				'Z',
				87,
				'W',
				90,
				'\u00dd',
				219,
				'\u00ba',
				221,
				'M',
				186,
				'\u00c0',
				222,
				'\u00de',
				192,
				'\u00bc',
				77,
				'\u00be',
				188,
				'\u00bf',
				190,
				'\u00df',
				191,
				'\u00db',
				189,
			]),
		},
		Dy = {
			59: 186,
			61: 187,
			173: 189,
		},
		Ay = {
			126: 192,
			95: 189,
			124: 220,
			58: 186,
			60: 188,
			62: 190,
			63: 191,
		};
	y(Hx, P);
	Kx.prototype.transform = function (a, b, c) {
		if (!this.A) return null;
		a = 0 < b ? a.slice(0, b) + '\u001d' + a.slice(b) + c : a + c;
		if ((b = this.A[0].exec(a))) {
			for (var d = this.A[1], e = 1; e < b.length && !b[e]; e++);
			b = d[e][0];
			d = d[e][1];
			e = b.exec(a);
			var g = a.slice(e.index),
				h = -1 < g.search('\u001d') ? 1 : 0;
			c = g.length - h - c.length;
			a = a.replace(b, d).slice(e.index);
			a = a.replace('\u001d', '');
			return {
				back: c,
				Xa: a,
			};
		}
		return null;
	};
	y(Qx, R);
	Qx.prototype.H = function (a) {
		if ('hangul' == a.id) Rx(this, 'ko');
		else {
			var b = new Jx(a);
			b.id && (this.B[b.id] = b);
			var c = new Mx(a);
			c.id && (this.F[c.id] = c);
			this.A == a.id && (Ux(this, this.A), (this.A = ''));
			this.J(new Hx('lld', b.view));
		}
	};
	Qx.prototype.N = function () {
		R.prototype.N.call(this);
		Pj(Px, this.D);
	};
	var Px = [];
	Aj('google.elements.keyboard.loadme', function () {
		var a = Rj(arguments);
		D(Px, function (b) {
			b.apply(void 0, a);
		});
	});
	y(Yx, Y);
	x = Yx.prototype;
	x.ha = function (a) {
		Y.prototype.ha.call(this, a);
		this.V && (Kn(this.O, !0), hs(this.M(), this.O));
		ay(this);
	};
	x.$ = function () {
		Y.prototype.$.call(this);
		var a = this.A,
			b = this.M();
		b.id = 'kbd';
		W(b, 'notranslate');
		W(b, 'vk-box');
		av(b);
		L && W(b, 'vk-sf-ie');
		this.ng && W(b, 'vk-sf-ff2');
		Ap == Vh && un(b, 'z-index', 2e4);
		var c = ly(this);
		a.U(b, c);
		this.B.Cb &&
			((this.rb = ny(this)), a.U(b, this.rb), Kn(this.rb, this.H));
		var d = this.B.tc;
		c = [14, 14, d ? 14 : 13, d ? 13 : 12, 3];
		d = d
			? '\u00c01234567890\u00bd\u00bb\b\tQWERTYUIOP\u00db\u00dd\r\u0014ASDFGHJKL\u00ba\u00de\u00dc\r\u0010\u00e2ZXCVBNM\u00bc\u00be\u00bf\u0010\u0111 \u0111'
			: '\u00c01234567890\u00bd\u00bb\b\tQWERTYUIOP\u00db\u00dd\u00dc\u0014ASDFGHJKL\u00ba\u00de\r\u0010ZXCVBNM\u00bc\u00be\u00bf\u0010\u0111 \u0111';
		var e = 0,
			g = this.A.P(f);
		g.dir = g.style.direction = Ie;
		for (var h = 0; 5 > h; ++h) {
			var k = this.A.P(f);
			k.style.whiteSpace = 'nowrap';
			for (var l = 0; l < c[h]; ++l) {
				var p = d.charCodeAt(e++);
				p = my(this, p);
				this.A.U(k, p);
			}
			this.A.U(g, k);
		}
		this.S = g;
		a.U(b, this.S);
		Kn(this.S, !this.H);
		this.ic && ((b.style.position = Ea), (b.style.width = '1px'));
		this.Ic &&
			((b.style.height = '201px'),
			(b.style.bottom = '10px'),
			(b.style.zIndex = '20001'));
	};
	x.X = function () {
		Y.prototype.X.call(this);
		dy || hy(this);
		Jv(this);
		this.Z = new Fw(this.V ? this.O : this.M(), this.I);
		U(this.D, this.Z, ah, function () {
			this.Oc = !0;
			Hw(this.Z);
		});
		var a = [Ye, v, $e],
			b = this.A.A;
		this.V && (b = I(this.O));
		var c = A(this.Md, this, null);
		T(this.D, b, af, c, void 0);
		D(
			fs(b),
			function (h) {
				T(this.D, h, af, c, void 0);
			},
			this
		);
		this.W &&
			(T(this.D, this.fa, n, this.$e, void 0),
			T(this.D, this.W, n, this.$e, void 0));
		this.B.Cb &&
			hk(
				this.R,
				function (h, k) {
					U(this.D, h, n, A(this.Se, this, k));
					U(this.D, h, a, A(this.Md, this, h));
				},
				this
			);
		for (var d in this.G) {
			b = this.G[Number(d)];
			d = parseInt(d, 10);
			rj(b) || (b = [b]);
			for (var e = 0, g = void 0; (g = b[e]); ++e)
				U(this.D, g, n, A(this.Se, this, d)),
					this.ic || U(this.D, g, a, A(this.Md, this, g));
		}
		d = [this.ba, this.pa];
		for (b = 0; b < d.length; b++)
			d[b] && T(this.D, d[b], n, this.Fh, void 0);
		d.push(this.Kb);
		for (b = 0; b < d.length; b++)
			d[b] && T(this.D, d[b], a, this.Gh, void 0);
		T(this.D, this.M(), Ye, Hm, void 0);
	};
	x.fb = function () {
		Y.prototype.fb.call(this);
		uo(this.D);
	};
	x.Se = function (a) {
		this.J(
			new P(Ga, {
				keyCode: a,
			})
		);
	};
	x.Md = function (a, b) {
		var c = !1,
			d = !1;
		a && ((c = Wp(a, 'vk-sf-a')), (d = Wp(a, 'vk-sf-s')));
		switch (b.type) {
			case v:
				this.L = a;
				c || d || (ds(a, [ui, vi]), W(a.firstChild, vi));
				break;
			case $e:
				this.L = null;
				c || d || (Vp(a, ui), Yp(a.firstChild, vi));
				break;
			case Ye:
				d || (ds(a, [ui, 'vk-sf-a']), (this.ea = a));
				break;
			case af:
				this.ea &&
					(Vp(this.ea, ui),
					Yp(this.ea.firstChild, vi),
					(this.ea = null)),
					this.L && (ds(this.L, [ui, vi]), W(this.L.firstChild, vi));
		}
	};
	x.Gh = function (a) {
		if (a.type == v || a.type == $e) {
			var b = null,
				c = [this.ba, this.pa, this.Kb];
			E(c, a.target)
				? (b = a.target.firstChild)
				: E(c, a.target.parentElement) && (b = a.target);
			if (b)
				switch (a.type) {
					case v:
						W(b, 'vk-sf-th');
						break;
					case $e:
						Yp(b, 'vk-sf-th');
				}
		}
	};
	x.Fh = function (a) {
		switch (a.target) {
			case this.ba:
			case this.ba.firstChild:
				this.J('kc');
				break;
			case this.pa:
			case this.pa.firstChild:
				this.J('kmi');
		}
	};
	x.$e = function (a) {
		this.H = this.S.style.display != Cf;
		Kn(this.rb, this.H);
		Kn(this.S, !this.H);
		$p(this.H ? this.fa : this.W, 'vk-l-i', 'vk-l-a');
		$p(this.H ? this.W : this.fa, 'vk-l-a', 'vk-l-i');
		a.preventDefault();
	};
	x.oa = function (a) {
		var b = Y.prototype.oa.call(this, a, !0);
		this.V && Kn(this.O, a);
		a && this.Z && Hw(this.Z);
		return b;
	};
	x.Pc = function () {
		return this.B.Pc;
	};
	x.N = function () {
		O(this.D);
		O(this.Z);
		Y.prototype.N.call(this);
		this.V && lm(this.O);
	};
	var oy = {
		8: 'vk-sf-c8',
		16: 'vk-sf-c16',
		20: 'vk-sf-c20',
	};
	y(sy, R);
	x = sy.prototype;
	x.handleEvent = function (a) {
		if (!this.I || !this.A) return !1;
		var b = !1;
		switch (a.type) {
			case t:
				b = zy(this, a);
				break;
			case u:
				b = By(this, a);
				break;
			case je:
				a = wy(a.keyCode);
				b = this.B;
				var c = this.D;
				20 == a && Im && M
					? ((b &= -9), (c &= -9))
					: 16 == a
					? ((b &= -258), (c &= -258))
					: 18 == a
					? ((b &= -515), (c &= -515))
					: 17 == a
					? ((b &= -517), (c &= -517))
					: 91 == a && ((b &= -17), (c &= -17));
				this.B != b && ((this.B = b), fy(this.A, uy(this.B)));
				this.D != c && ((this.D = c), cy(this.A, uy(this.D)));
				b = this.C[a];
				delete this.C[a];
		}
		return b;
	};
	x.focus = function () {
		this.A && py(this.A);
	};
	x.kh = function () {
		vy(this, !1);
	};
	x.jh = function (a) {
		if (this.A) {
			this.G && this.G.$c();
			var b = a.target.keyCode;
			if (b) {
				switch (b) {
					case 16:
						this.B & 1 && ((this.B |= 256), (this.B &= -2));
						this.B ^= 256;
						fy(this.A, uy(this.B));
						break;
					case 273:
						this.B & 2 &&
							this.B & 4 &&
							((this.B |= 512), (this.B &= -7));
						this.B ^= 512;
						fy(this.A, uy(this.B));
						break;
					case 20:
						this.B ^= 8;
						fy(this.A, uy(this.B));
						break;
					default:
						yy(this, b, a.target.charCode, !0);
				}
				this.F.Bb('kcc');
			}
		}
	};
	x.oh = function (a) {
		var b = a.A;
		b.title = this.ea[b.id] || b.title;
		a = this.R;
		var c = this.T,
			d = this.O;
		this.O = this.T = this.R = null;
		var e = !1,
			g = null;
		this.A &&
			((this.aa = this.A.isVisible()),
			(e = this.A.Oc),
			this.A.isVisible() &&
				e &&
				((g = this.A), (g = Bn(g.V ? g.O : g.M()))),
			this.A.da(),
			this.F.set(Fa, 'sw'),
			this.F.report());
		this.F.Qd('lay', b.id);
		this.F.ad('vkd_' + b.id);
		this.A = new Yx(b, this.V, this.Ed, this.pa);
		this.A.ta(this);
		this.A.ha();
		this.A.Oc = e;
		this.A.oa(this.aa);
		g
			? ay(this.A, g)
			: a && null != c
			? ((b = this.A),
			  b.M() && (a.Ma(b.M(), c, d), b.isVisible() && Hw(b.Z)),
			  (this.A.Oc = !0))
			: ay(this.A);
		fy(this.A, uy(this.B));
		cy(this.A, uy(this.D));
		U(
			T(this.S, this.A, Ga, this.jh, void 0),
			this.A,
			['kc', 'kmi'],
			this.kh
		);
	};
	x.N = function () {
		O(this.A);
		O(this.H);
		O(this.F);
		O(this.S);
		R.prototype.N.call(this);
	};
	var ry = Cw;
	y(Fy, du);
	x = Fy.prototype;
	x.Xb = function (a) {
		return !!a && E([nb, mb, 'cd', 'sk', 'mk', 'll', 're'], a);
	};
	x.Tb = function (a) {
		return !!a && a.type == wi;
	};
	x.Uf = function (a) {
		((a && 16 == a.keyCode) ||
			17 == a.keyCode ||
			18 == a.keyCode ||
			20 == a.keyCode) &&
			this.B.handleEvent(a) &&
			(a.stopPropagation(), a.preventDefault());
	};
	x.register = function (a) {
		du.prototype.register.call(this, a);
		a && ((this.A = a), (this.B.G = a));
	};
	x.gb = function () {
		return this.K;
	};
	x.Nc = function (a) {
		if (Pr(a)) return !1;
		this.B.G = this.A;
		return this.B.handleEvent(a);
	};
	x.Wb = function (a, b, c, d) {
		switch (a) {
			case nb:
				(b = this.C) && b.Ua
					? ((c = this.B),
					  (c.ba = !1),
					  (c.W = !1),
					  (c = this.active && Gy),
					  this.active && d && void 0 != d.mk && (c = !d.mk),
					  Hy(this, c),
					  ty(this.B, this.active),
					  Sx(this.B.H, b.Ua),
					  this.active &&
							((d = this.B),
							(c = b.Ua),
							(b = mA[b.code]) && (d.ea[c] = b),
							Ux(d.H, c)),
					  (this.B.G = this.A))
					: (ty(this.B, !1), vy(this.B, !1));
				break;
			case mb:
				this.B.G = this.A;
				c ? this.B.focus() : ((d = this.B), d.A && qy(d.A));
				break;
			case 'sk':
				Hy(this, b);
				break;
			case 'mk':
				this.active && (ty(this.B, this.active), Hy(this, !b));
				break;
			case 're':
				b &&
					((a = this.B),
					a.A
						? ((a = a.A),
						  a.M() &&
								(b.Ma(a.M(), c, d), a.isVisible() && Hw(a.Z)))
						: ((a.R = b),
						  (a.T = c),
						  (a.O = d || new qn(0, 0, 0, 0))));
				break;
			case 'll':
				Sx(this.B.H, b);
		}
	};
	x.Ug = function (a) {
		this.D.J(a);
	};
	x.mh = function () {
		this.A && this.A.Fb(2);
	};
	x.lh = function (a) {
		this.A && this.A.Fb(5, a.data);
	};
	x.N = function () {
		O(this.F);
		O(this.B);
		du.prototype.N.call(this);
	};
	y(Jy, P);
	y(Ry, R);
	x = Ry.prototype;
	x.handleEvent = function (a, b) {
		(a = this.H[vj(a)]) && a.J(b);
		return !!a && b.C;
	};
	x.Sf = function (a, b) {
		var c = !1;
		b instanceof mp
			? 'tita' == b.A
				? ((a = this.A.C),
				  (c = this.A.active),
				  a && (c ? Vy(this, a) : Uy(this, a), this.J(new P('tt'))),
				  (c = !0))
				: (c = this.A.rc(a, b))
			: b.type == tc || b.type == ab
			? this.Aa(mb, a, b.type == tc)
			: (c = this.A.handleEvent(a, b));
		c && (b.preventDefault(), b.stopPropagation());
	};
	x.mg = function () {
		var a = this.C.M(ka);
		a &&
			Ap in this.T &&
			(T(this.D, a, 'syc', this.hg, void 0), Ty(this, 'ic'));
	};
	x.hg = function () {
		var a = this.C.M(ka);
		if (a) {
			var b = a.getAttribute('input');
			a = JSON.parse(a.getAttribute('input_stat'));
			(b = b ? lt(b) : null) ? Uy(this, b, a ? a : void 0) : Vy(this);
		}
	};
	x.register = function (a) {
		if (rj(a)) {
			var b = this.A.gb();
			Sj(b, [tc, ab]);
			Vj(b);
			D(
				a,
				function (c) {
					if (!this.H[vj(c)]) {
						var d = new ws(c);
						this.H[vj(c)] = d;
						this.A.register(d);
						d.C &&
							(!zz ||
							d.G.tagName.toUpperCase() == ma ||
							(L && !Ql(9))
								? T(d.F, d.C, b, d.Vb, op)
								: us(d.C, b, d.Vb, d));
						this.G &&
							D(
								this.G.split(','),
								function (e) {
									xs(d, e, 'tita');
								},
								this
							);
						U(this.D, d, Qj(b, Gg), A(this.Sf, this, d));
						T(this.D, d, 'kc', this.J, void 0);
						T(this.D, d, 'g', this.J, void 0);
					}
				},
				this
			);
		}
	};
	x.Aa = function (a, b) {
		this.A.Qe.apply(this.A, arguments);
	};
	x.og = function (a) {
		this.F.A.I = !0;
		this.F.A.H = !0;
		if (!this.F.Hd(a)) {
			var b = Hg + a;
			this.F.He(a, a);
			T(this.D, this.F, b, this.ig, void 0);
		}
	};
	x.ig = function () {
		var a = this.A.C,
			b = this.A.active;
		a && (b ? Vy(this, a) : Uy(this, a), this.J(new P('tt')));
	};
	x.N = function () {
		Vm(this.I.K, 'uf', this.af, !1, this);
		O(this.A);
		delete this.A;
		O(this.D);
		delete this.D;
		O(this.F);
		delete this.F;
		R.prototype.N.call(this);
	};
	x.af = function () {
		var a = this.A.C,
			b = this.A.active;
		a && b && this.Aa(nb, a, !0);
	};
	x.Ae = !1;
	x.lf = !0;
	var Qy = Qy || '';
	qj(Wy);
	y(Xy, V);
	Xy.prototype.$ = function () {
		this.B = this.A.P('A', {
			class: this.I,
			role: 'button',
		});
		L && W(this.B, 'ita-kd-ie');
		this.O && W(this.B, Qd);
		this.D = this.A.P(m, {
			class: this.L + ' ita-kd-icon-span',
		});
		this.A.U(this.B, this.D);
		this.C = this.B;
	};
	Xy.prototype.X = function () {
		qo(
			this.H,
			this.B,
			v,
			function () {
				this.G && (W(this.D, Ld), W(this.B, Kd));
			},
			this
		);
		qo(
			this.H,
			this.B,
			$e,
			function () {
				this.G && (Yp(this.D, Ld), Yp(this.B, Kd));
			},
			this
		);
	};
	Xy.prototype.N = function () {
		V.prototype.N.call(this);
		O(this.H);
	};
	Xy.prototype.Gb = function (a) {
		this.G = a;
	};
	y(Yy, Y);
	Yy.prototype.$ = function () {
		Y.prototype.$.call(this);
		if (0 != this.B.length) {
			if (1 == this.B.length) W(this.B[0].B, 'ita-kd-single');
			else {
				W(this.B[0].B, 'ita-kd-left');
				W(this.B[this.B.length - 1].B, 'ita-kd-right');
				for (var a = 1; a < this.B.length - 1; a++)
					W(this.B[a].B, 'ita-kd-mid');
			}
			for (a = 0; a < this.B.length; a++) this.A.U(this.M(), this.B[a].B);
			Jv(this);
		}
	};
	Yy.prototype.N = function () {
		Gm(this.B);
	};
	y($y, N);
	$y.prototype.N = function () {
		N.prototype.N.call(this);
		O(this.A);
	};
	y(az, P);
	y(bz, P);
	bz.prototype.isVisible = function () {
		return this.A;
	};
	y(cz, P);
	y(dz, Y);
	x = dz.prototype;
	x.$ = function () {
		Y.prototype.$.call(this);
		var a = this.A,
			b = this.D.B,
			c = a.P('UL', {
				class:
					'ita-kd-dropdown-menu' + (L && !G(9) ? ' ita-kd-ie' : ''),
			});
		av(c);
		if (X) {
			var d = a.P(f, 'ita-kd-dropdown-menu-mobile');
			d.appendChild(c);
			this.C = d;
		} else this.C = c;
		var e = this.D.A ? this.D.A.code : '',
			g = this.D.C;
		D(
			b,
			function (h) {
				var k = h.code,
					l = this.A.P('LI', {
						class: Od,
						style: bh,
					});
				l.setAttribute(sh, '-1');
				Oj(this.V, {
					Hc: l,
					className: Pd,
				});
				var p = this.A.P(m, 'ita-kd-checkbox ita-kd-menuitem-span'),
					B = this.A.P(m, {
						class:
							'ita-kd-menuitem-inputtool-icon ita-kd-menuitem-span ' +
							Rp(k),
					}),
					K = this.A.P(
						m,
						{
							class: 'ita-kd-menuitem-inputtool-name',
						},
						mA[k]
					);
				qt(lt(k)) ? (K.dir = ug) : (K.dir = Ie);
				this.A.ia(l, p, B, K);
				(p = Op.body) && Nn(p) && W(l, 'ita-kd-rtl');
				this.H[k] = {
					Lb: l,
					icon: B,
					name: K,
				};
				g && e == h.code && W(l, Qd);
				a.U(c, l);
			},
			this
		);
		/^(gmail|kix|trix|punch)/.test(Ap) &&
			((this.G = ez(this, 'Enable personal dictionary', !0)),
			(this.O = ez(this, 'Disable personal dictionary', !0)));
		this.S = ez(this, 'Show Keyboard', !0);
		this.R = ez(this, 'Hide Keyboard', !0);
		this.fa && (this.L = ez(this, 'Input Tools Settings'));
		this.W = this.A.P(f, {
			class: 'ita-kd-separator',
		});
		a.ia(c, this.W, this.G, this.O, this.S, this.R, this.L);
		b = g && this.D.A.type == wi;
		Kn(this.W, !!(this.G || b || this.L));
	};
	x.hf = function (a) {
		this.I.J(new az(a, this.D.A != a || !this.D.C));
		iz(this);
	};
	x.X = function () {
		Y.prototype.X.call(this);
		T(this.B, this.I, 'citc', this.Ag, void 0);
		var a = this.D.B,
			b = nm(gz(this));
		D(
			b,
			function (c, d) {
				d < a.length && U(this.B, c, n, A(this.hf, this, a[d].code));
			},
			this
		);
		D(
			this.V,
			function (c) {
				U(this.B, c.Hc, v, A(this.Xf, this, c.Hc));
				T(this.B, c.Hc, $e, this.gd, void 0);
			},
			this
		);
		this.G &&
			U(
				U(
					U(this.B, this.G, n, A(this.Yc, this, !0)),
					this.O,
					n,
					A(this.Yc, this, !1)
				),
				this.I,
				'psa',
				this.vh
			);
		this.L && T(this.B, this.L, n, this.ue, void 0);
		U(
			U(
				U(
					U(
						U(
							U(this.B, this.S, n, A(this.zc, this, !0)),
							this.R,
							n,
							A(this.zc, this, !1)
						),
						this.I,
						'kmi',
						this.zc
					),
					gz(this),
					v,
					this.zg
				),
				gz(this),
				$e,
				function () {
					this.cb = !1;
				}
			),
			gz(this),
			t,
			this.yg
		);
		Q &&
			U(this.B, gz(this), u, function (c) {
				c.stopPropagation();
				c.preventDefault();
			});
		this.ba && T(this.B, this.A.A, n, this.xg, void 0);
		T(this.B, this.I, 'ita_l', this.wf, void 0);
	};
	x.zg = function () {
		this.cb = !0;
		gz(this).focus();
	};
	x.focus = function () {
		var a = nm(gz(this));
		gz(this).focus();
		0 < a.length && (a[0].focus(), fz(this, a[0]));
	};
	x.Xf = function (a) {
		this.gd();
		W(a, Pd);
	};
	x.gd = function () {
		for (var a = nm(gz(this)), b = 0; b < a.length; b++) Yp(a[b], Pd);
	};
	x.yg = function (a) {
		var b = nm(gz(this));
		if (b && 0 != b.length) {
			var c = hz(this),
				d = this.D.B,
				e = c ? Fj(b, c) : -1;
			c = !1;
			if (13 == a.keyCode || 32 == a.keyCode)
				d[e]
					? this.hf(d[e].code, null)
					: b[e] == this.S
					? this.zc(!0)
					: b[e] == this.R
					? this.zc(!1)
					: b[e] == this.L
					? this.ue(null)
					: b[e] == this.G
					? this.Yc(!0)
					: b[e] == this.O && this.Yc(!1),
					(c = !0);
			d = function (g) {
				var h = b.length;
				g += h;
				for (var k = (e + g) % h; k != e; k = (k + g) % h) {
					var l = b[k];
					if (
						'LI' == l.tagName.toUpperCase() &&
						l.style.display != Cf
					)
						return l;
				}
				return b[e];
			};
			40 == a.keyCode && (fz(this, d(1)), (c = !0));
			38 == a.keyCode && (fz(this, d(-1)), (c = !0));
			9 == a.keyCode && iz(this);
			c && (a.stopPropagation(), a.preventDefault());
		}
	};
	x.xg = function () {
		this.cb || iz(this);
	};
	x.ue = function () {
		this.I.J(new P('slc'));
		iz(this);
	};
	x.Ag = function (a) {
		var b = a.currInputToolActive;
		a = a.currInputToolName;
		a || (a = this.D.A.code);
		D(
			this.D.B,
			function (c) {
				this.H[c.code] && Yp(this.H[c.code].Lb, Qd);
			},
			this
		);
		b && this.H[a] && W(this.H[a].Lb, Qd);
		b = !X && lt(a).type == wi && b;
		X || (Kn(this.S, b && !Gy), Kn(this.R, b && Gy));
		Kn(this.W, b || !!this.L);
	};
	x.N = function () {
		Y.prototype.N.call(this);
		O(this.B);
		O(this.ea);
	};
	x.wf = function (a) {
		var b = a.l10n,
			c = Nn(gz(this));
		hk(
			this.H,
			function (d, e) {
				var g;
				if (e)
					if ((g = lt(e))) {
						e = null;
						var h = AA[g.code];
						h &&
							(e = c
								? h[1] + ' \u2190 ' + h[0]
								: h[0] + ' \u2192 ' + h[1]);
						e || ((e = BA[g.code]) && (e = xz(e)));
						e ||
							'hw' != g.type ||
							(e = (e = xz('HANDWRITE'))
								? wz(b, g.code) + ' - ' + e
								: wz(b, g.code));
						e ||
							((e = wz(b, g.code)),
							(h = CA[g.code]) && (e += ' - ' + h),
							(h = DA[g.code]),
							(g = xz(h)) && (e += ' - ' + g));
						g = e;
					} else g = xz(e);
				else g = null;
				g &&
					(um(d.name, g),
					Zl(d.name, {
						dir: Ie,
					}));
			},
			this
		);
	};
	x.zc = function (a) {
		var b = !1;
		'boolean' === typeof a && ((b = a), this.I.J(new cz('mk', !b)));
		Kn(this.S, !X && !b);
		Kn(this.R, !X && b);
		iz(this);
	};
	x.Yc = function (a) {
		uu = a;
		Kn(this.G, !a);
		Kn(this.O, a);
		Oy({
			EnableUserDictionary: a,
		});
		iz(this);
	};
	x.vh = function (a) {
		a = a.value.EnableUserDictionary;
		void 0 !== a && (Kn(this.G, !a), Kn(this.O, a));
	};
	C(jz, wo);
	jz.prototype.Ma = function (a, b, c) {
		var d = io(this.A, this.B, a, b, null, c, 10, void 0, this.C);
		if (d & 496) {
			var e = kz(d, this.B);
			b = kz(d, b);
			d = io(this.A, e, a, b, null, c, 10, void 0, this.C);
			d & 496 &&
				((e = kz(d, e)),
				(b = kz(d, b)),
				io(this.A, e, a, b, null, c, this.D, void 0, this.C));
		}
	};
	y(lz, Go);
	x = lz.prototype;
	x.$ = function () {
		Go.prototype.$.call(this);
		if (0 != this.D.B.length) {
			var a = this.A,
				b = this.M();
			a.M('itamenu') || (b.id = 'itamenu');
			this.R = new Yy();
			this.ea = a.P(m, {
				class: Nd,
			});
			a.U(b, this.ea);
			if (this.fa) {
				var c = Zy(
					this.R,
					'ita-kd-icon-button ita-kd-floating-bar',
					'ita-kd-img ita-kd-floating-bar-icon'
				);
				this.pa = c.B;
				b.style.zIndex = '99';
			}
			b = this.D.C;
			this.D.A &&
				((c = Rp(this.D.A.code)),
				(c = Zy(
					this.R,
					'ita-kd-icon-button ita-kd-inputtool-icon ita-kd-small ' +
						(X ? 'ita-kd-mobile' : ''),
					c + ' ita-kd-icon',
					b
				)),
				(this.G = c.B),
				(this.ba = c.D),
				this.G.setAttribute(sh, '0'));
			if (
				1 < this.D.B.length ||
				(1 == this.D.B.length && (this.D.B[0].type == wi || this.V))
			)
				(c = Zy(
					this.R,
					'ita-kd-icon-button ita-kd-dropdown ' +
						(X ? 'ita-kd-mobile' : ''),
					'ita-kd-img ita-kd-arrow'
				)),
					(this.I = c.B),
					this.I.setAttribute(sh, '0'),
					this.I.setAttribute('aria-haspopup', 'true'),
					this.I.setAttribute(Pa, 'Show the Input Tools menu');
			this.R.ha(this.ea);
			this.B = new dz(this.D, this.L, this.V, a);
			this.B.ba = !1;
			this.B.ha();
			iz(this.B);
			Fm(this, this.B);
		}
	};
	x.bf = function () {
		Iw(this.M());
	};
	x.yd = function () {
		this.L.J(new az(this.D.A.code, !this.D.C));
		iz(this.B);
	};
	x.X = function () {
		Go.prototype.X.call(this);
		U(T(this.H, this.L, 'citc', this.vg, void 0), this.L, 'itlu', this.Ue);
		this.G &&
			U(
				U(T(this.H, this.G, n, this.yd, void 0), this.G, Ib, this.yd),
				this.G,
				t,
				A(this.Ge, this, !1)
			);
		this.I &&
			U(
				U(T(this.H, this.I, n, this.qe, void 0), this.B, 'vc', this.Pf),
				this.I,
				t,
				A(this.Ge, this, !0)
			);
		this.pa &&
			((this.Z = new Ru(this.M(), this.pa)),
			U(this.H, this.Z, 'drag', function () {
				mz(this);
				this.ff = !1;
			}));
		this.B && T(this.H, this.A.A, Ye, this.ug, op);
	};
	x.Ge = function (a, b) {
		if (13 == b.keyCode || 32 == b.keyCode || (a && 40 == b.keyCode))
			b.target == this.I
				? this.qe()
				: b.target == this.G && this.yd(null),
				b.stopPropagation(),
				b.preventDefault();
	};
	x.qe = function () {
		mz(this);
		var a = this.B;
		a.isVisible() ? iz(a) : (a.oa(!0), a.J(new bz(!0)));
		this.B.focus();
	};
	x.Uc = function (a, b, c) {
		Go.prototype.Uc.call(this, a, b, c);
		mz(this);
	};
	x.Pf = function (a) {
		a.isVisible() ? W(this.I, Qd) : Yp(this.I, Qd);
	};
	x.ug = function () {
		this.cb || this.B.cb || iz(this.B);
	};
	x.vg = function (a) {
		var b = a.currInputToolActive;
		a = a.currInputToolName;
		a || (a = this.D.A.code);
		D(
			this.D.B,
			function (c) {
				Yp(this.ba, Qp(c.code));
			},
			this
		);
		W(this.ba, Qp(a));
		b ? W(this.G, Qd) : Yp(this.G, Qd);
		switch (this.D.A.type) {
			case 'im':
				this.G.setAttribute(
					Pa,
					b ? 'Turn off Input Method' : 'Turn on Input Method'
				);
				break;
			case wi:
				this.G.setAttribute(
					Pa,
					b ? 'Turn off Virtual Keyboard' : 'Turn on Virtual Keyboard'
				);
				break;
			case 'hw':
				this.G.setAttribute(
					Pa,
					b ? 'Turn off Handwriting' : 'Turn on Handwriting'
				);
		}
		this.G.setAttribute('aria-pressed', String(b));
	};
	x.Ue = function () {
		uo(this.H);
		var a = this.M();
		O(this.B);
		if (0 < this.D.B.length) {
			if (((this.C = null), Ho(this, this.V, this.Lb), !this.Lb)) {
				this.M().style.position = Ea;
				try {
					this.Uc(a, [0, 0]);
				} catch (b) {}
			}
		} else U(this.H, this.L, 'itlu', A(this.Ue, this));
		this.A.ab(a);
	};
	x.N = function () {
		Go.prototype.N.call(this);
		O(this.Z);
		O(this.R);
	};
	x.ze = function () {
		this.M().style.display = Cf;
		this.B && iz(this.B);
	};
	y(nz, P);
	var oz = {
		translate: 11,
		kix: 12,
		trix: 13,
		punch: 14,
		gmail: 5,
	};
	y(vz, N);
	x = vz.prototype;
	x.Ve = function () {
		this.A |= 1;
		window.LanguageDisplays &&
			window.LanguageDisplays.localNames &&
			D(
				window.LanguageDisplays.localNames,
				function (a) {
					a = a.split(':');
					this.B[a[1]] = a[0];
				},
				this
			);
		this.notify();
	};
	x.Xe = function () {
		this.A |= 2;
		this.notify();
	};
	x.nh = function () {
		var a = Qs(
				Mk(tz, {
					langCode: q,
				})
			),
			b = A(this.Ve, this);
		Is(a, b, null, void 0);
	};
	x.ph = function () {
		var a = Qs(
				Mk(uz, {
					langCode: q,
				})
			),
			b = A(this.Xe, this);
		Is(a, b, null, void 0);
	};
	x.notify = function () {
		3 == (this.A & 3) && Ko(Io.qa(), new nz(this));
	};
	var tz = Fk('https://ssl.gstatic.com/inputtools/js/ln/17/%{langCode}.js'),
		uz = Fk('https://ssl.gstatic.com/inputtools/js/msgs/10/%{langCode}.js');
	vz.prototype.A = 0;
	var AA = {
			'am-t-i0-und': ['salam', '\u1230\u120b\u121d'],
			'ar-t-i0-und': ['marhaban', '\u0645\u0631\u062d\u0628\u0627'],
			'be-t-i0-und': [
				'pryvitannie',
				'\u043f\u0440\u044b\u0432\u0456\u0442\u0430\u043d\u043d\u0435',
			],
			'bg-t-i0-und': [
				'zdrasti',
				'\u0437\u0434\u0440\u0430\u0441\u0442\u0438',
			],
			'bn-t-i0-und': [
				'namaskar',
				'\u09a8\u09ae\u09b8\u09cd\u0995\u09be\u09b0',
			],
			'el-t-i0-und': ['geia', '\u03b3\u03b5\u03b9\u03b1'],
			'fa-t-i0-und': ['salam', '\u0633\u0644\u0627\u0645'],
			'gu-t-i0-und': [pf, '\u0aa8\u0aae\u0ab8\u0acd\u0aa4\u0ac7'],
			'he-t-i0-und': ['shalom', '\u05e9\u05dc\u05d5\u05dd'],
			'hi-t-i0-und': [pf, '\u0928\u092e\u0938\u094d\u0924\u0947'],
			'ja-t-ja-hira-i0-und': [
				'konnichiha',
				'\u3053\u3093\u306b\u3061\u306f',
			],
			'kn-t-i0-und': [
				'namaskaram',
				'\u0ca8\u0cae\u0cb8\u0ccd\u0c95\u0cbe\u0cb0',
			],
			'ml-t-i0-und': [
				'namaskar',
				'\u0d28\u0d2e\u0d38\u0d4d\u0d15\u0d3e\u0d30\u0d02',
			],
			'mr-t-i0-und': [pf, '\u0928\u092e\u0938\u094d\u0915\u093e\u0930'],
			'ne-t-i0-und': [pf, '\u0928\u092e\u0938\u094d\u0924\u0947'],
			'or-t-i0-und': ['mausam', '\u0b28\u0b2e\u0b38\u0b4d\u0b24\u0b47'],
			'pa-t-i0-und': ['mausam', '\u0a2e\u0a4c\u0a38\u0a2e'],
			'ru-t-i0-und': ['privet', '\u043f\u0440\u0438\u0432\u0435\u0442'],
			'sa-t-i0-und': [pf, '\u0928\u092e\u0938\u094d\u0924\u0947'],
			'sr-t-i0-und': ['zdravo', '\u0437\u0434\u0440\u0430\u0432\u043e'],
			'si-t-i0-und': ['halo', '\u0dc4\u0dbd\u0ddd'],
			'ta-t-i0-und': [
				'vanakkam',
				'\u0bb5\u0ba3\u0b95\u0bcd\u0b95\u0bae\u0bcd',
			],
			'ti-t-i0-und': ['selam', '\u1230\u120b\u121d'],
			'te-t-i0-und': ['emandi', '\u0c0f\u0c2e\u0c02\u0c21\u0c40'],
			'uk-t-i0-und': ['pryvit', '\u043f\u0440\u0438\u0432\u0456\u0442'],
			'ur-t-i0-und': ['salam', '\u0633\u0644\u0627\u0645'],
			'vi-t-i0-und': ['chao', 'ch\u00e0o'],
		},
		CA = {
			'bn-t-k0-und': pa,
			'cs-t-k0-qwertz': 'QWERTZ',
			'en-t-k0-dvorak': 'DVORAK',
			'gu-t-k0-und': pa,
			'hi-t-k0-und': pa,
			'ka-t-k0-legacy': ca,
			'km-t-k0-und': 'NiDA',
			'kn-t-k0-und': pa,
			'ml-t-k0-und': pa,
			'ne-t-k0-und': pa,
			'or-t-k0-und': pa,
			'pa-guru-t-k0-und': pa,
			'ru-t-k0-qwerty': 'QWERTY',
			'sk-t-k0-qwerty': 'QWERTY',
			'ta-t-k0-ta99': 'Tamil99',
			'ta-t-k0-und': pa,
			'ta-t-k0-typewriter': 'TYPEWRITER',
			'ta-t-k0-itrans': 'ITRANS',
			'th-t-k0-pattajoti': 'PATTAJOTI',
			'th-t-k0-tis': 'TIS',
			'te-t-k0-und': pa,
			'tr-t-k0-und': 'Q',
			'tr-t-k0-legacy': 'F',
			'uz-cyrl-t-k0-legacy': ca,
			'vi-t-k0-legacy': 'Telex',
			'vi-t-k0-viqr': 'VIQR',
			'vi-t-k0-und': 'TCVN 6064',
			'vi-t-k0-vni': 'VNI',
		},
		DA = {
			'de-ch-t-k0-und': 'SWISS_GERMAN',
			'hy-hyr-t-k0-und': 'EASTERN',
			'hy-hyt-t-k0-und': 'WESTERN',
			'ka-t-k0-und': 'LATIN',
			'pt-br-t-k0-und': 'BRAZILIAN',
			'pt-pt-t-k0-und': 'EUROPEAN',
			'ro-t-k0-legacy': 'PRIMARY',
			'ro-t-k0-extended': 'SECONDARY',
			'sr-cyrl-t-k0-und': 'CYRILLIC',
			'sr-latn-t-k0-und': 'LATIN',
			'uz-latn-t-k0-und': 'LATIN',
			'uz-cyrl-t-k0-und': 'CYRILLIC',
			'zh-t-i0-pinyin': 'PINYIN',
			'zh-hant-t-i0-pinyin': 'PINYIN',
			'bg-t-k0-qwerty': va,
			'hi-t-k0-qwerty': va,
			'chr-t-und-latn-k0-und': va,
		},
		BA = {
			'en-us-t-k0-intl': 'US_I18N',
			'yue-hant-t-i0-und': 'CANTONESE',
			'zh-hant-t-i0-cangjie-1982': 'CANGJIE',
			'zh-t-i0-wubi-1986': 'WUBI',
			'zh-hant-t-i0-und': 'ZHUYIN',
		},
		sz = [
			'am',
			'ar',
			'bg',
			'bn',
			'ca',
			'cs',
			'da',
			'de',
			'de-AT',
			'de-CH',
			'el',
			'en-GB',
			'en-IE',
			'en-IN',
			'en-SG',
			'en-ZA',
			'es',
			'es-419',
			'es-AR',
			'es-BO',
			'es-CL',
			'es-CO',
			'es-CR',
			'es-DO',
			'es-EC',
			'es-GT',
			'es-HN',
			'es-MX',
			'es-NI',
			'es-PA',
			'es-PE',
			'es-PR',
			'es-PY',
			'es-SV',
			'es-US',
			'es-UY',
			'es-VE',
			'fa',
			'fi',
			'fil',
			'fr',
			'fr-CH',
			'gsw',
			'gu',
			Qc,
			'hi',
			'hr',
			'hu',
			'id',
			'in',
			'it',
			'iw',
			'ja',
			'kn',
			'ko',
			'ln',
			'lt',
			'lv',
			'ml',
			'mo',
			'mr',
			'nb',
			'ne',
			'nl',
			'no',
			'or',
			'pa',
			'pl',
			Zf,
			$f,
			'pt',
			'ro',
			'ru',
			'si',
			'sk',
			'sl',
			'sr',
			'sv',
			'th',
			'ti',
			'tr',
			'uk',
			'ur',
			'vi',
			Ei,
			Gi,
			'zh-Hant',
			Fi,
			Hi,
			'zh',
		];
	y(yz, N);
	qj(yz);
	y(Bz, N);
	x = Bz.prototype;
	x.Td = function (a) {
		var b = this.A,
			c = [];
		Sj(c, a);
		a = b.B.length;
		D(
			c,
			function (d) {
				(d = lt(d)) &&
					(!X || ('hw' != d.type && 'vo' != d.type)) &&
					(d.type == wi
						? this.C.Aa('ll', d.Ua)
						: 'im' == d.type && this.C.Aa('lc', d.code),
					Oj(b.B, d));
			},
			this
		);
		!b.A && 0 < b.B.length && (b.A = b.B[0]);
		b.B.length > a && (Az(this), Fz(this));
	};
	x.Jh = function (a) {
		var b = this.A,
			c = [];
		Sj(c, a);
		a = b.B.length;
		D(
			c,
			function (d) {
				d = lt(d);
				d == b.A && ((b.A = null), (b.C = !1));
				Pj(b.B, d);
			},
			this
		);
		!b.A && 0 < b.B.length && (b.A = b.B[0]);
		b.B.length < a && (Az(this), Fz(this));
	};
	x.Nh = function (a) {
		var b = this.A,
			c = [];
		Sj(c, a);
		var d = [];
		D(
			c,
			function (e) {
				(e = lt(e)) &&
					(!X || ('hw' != e.type && 'vo' != e.type)) &&
					d.push(e);
			},
			this
		);
		Zj(d, b.B) ||
			(Nj(b.B),
			D(
				d,
				function (e) {
					e &&
						(e.type == wi
							? this.C.Aa('ll', e.Ua)
							: 'im' == e.type && this.C.Aa('lc', e.code),
						Oj(b.B, e),
						b.A && b.A.code == e.code && (b.A = e));
				},
				this
			),
			(b.A && E(b.B, b.A)) ||
				((b.A = 0 < b.B.length ? b.B[0] : null), (b.C = !1)),
			Az(this),
			Fz(this));
	};
	x.tf = function (a) {
		var b = [];
		Sj(b, a);
		D(
			b,
			function (c) {
				(c = Xl(document, c)) && Oj(this.D, c);
			},
			this
		);
		Az(this);
		Gz(this);
	};
	x.Kh = function (a) {
		var b = [];
		Sj(b, a);
		this.F = [];
		D(
			b,
			function (c) {
				if ((c = Xl(document, c))) Pj(this.D, c), Oj(this.F, c);
			},
			this
		);
		Az(this);
		Gz(this);
		this.F = [];
	};
	x.Oh = function (a) {
		var b = [];
		Sj(b, a);
		this.F = this.D;
		this.D = [];
		D(
			b,
			function (c) {
				if ((c = Xl(document, c))) Oj(this.D, c), Pj(this.F, c);
			},
			this
		);
		Az(this);
		Gz(this);
		this.F = [];
	};
	x.rf = function (a, b) {
		b = void 0 === b ? !0 : b;
		if ((a = lt(a))) E(this.A.B, a) || this.Td(a.code), Hz(this, b, a);
	};
	x.xf = function () {
		Hz(this, !0, this.A.A);
	};
	x.Zd = function () {
		Hz(this, !1, this.A.A);
	};
	x.Sh = function () {
		Hz(this, !this.A.C, this.A.A);
	};
	x.addEventListener = function (a, b, c, d) {
		if (!lk(kA, a))
			throw Error(
				'Exception in addEventListener: Invalid event type:' + a
			);
		'boolean' === typeof c
			? T(this.K, this.B, a, b, c, d || this)
			: d
			? T(this.K, this.B, a, b, !1, d || this)
			: T(this.K, this.B, a, b, !1, c || this);
	};
	x.removeEventListener = function (a, b, c) {
		if (!lk(kA, a))
			throw Error(
				'Exception in removeEventListener: Invalid event type:' + a
			);
		to(this.K, this.B, a, b, !1, c);
	};
	x.Bh = function (a) {
		Hz(this, a.F, lt(a.A));
	};
	x.Ch = function (a) {
		a = a.M();
		this.A.D = a;
		E(this.D, a) || (this.D.push(a), this.C.register([a]));
		Hz(this, this.A.C, this.A.A);
	};
	x.Dh = function (a) {
		a = a.A;
		var b = this.A.A,
			c = this.A.C;
		b && b.type == wi && c && this.C.Aa('sk', a);
	};
	x.Rh = function (a) {
		var b = 'kd',
			c = !1,
			d,
			e,
			g = !1;
		a &&
			(a.ui && (b = a.ui),
			a.showSetting && (c = a.showSetting),
			a.container && (d = a.container),
			a.inputElement && (e = a.inputElement),
			(g = !!a.shadowContainer));
		if (g && d) {
			g = d;
			var h = this.C.C.P('STYLE'),
				k = ll(Yr(Qy), Np());
			Ln(h, k);
			g.appendChild(h);
		}
		g = null;
		'kd' == b && (g = new lz(this.A, this.B));
		g &&
			((g.bindElement = g.Wd),
			(g.reposition = g.Uc),
			(g.show = g.Fe),
			(g.hide = g.Ee),
			(g.toggle = g.pg));
		b = g;
		if (!b) return null;
		b.W = a && a.alignRight;
		Ho(b, c, d);
		av(Xl(document, d));
		b.Wd(e);
		return b;
	};
	x.ef = function (a, b, c) {
		if (a && b && 2 == b.length) {
			a = Fo.M(a);
			var d = null;
			null != c &&
				(typeof c === Df
					? (d = new qn(c, c, c, c))
					: rj(c) &&
					  4 == c.length &&
					  (d = new qn(
							Number(c[0]),
							Number(c[1]),
							Number(c[2]),
							Number(c[3])
					  )));
			this.C.Aa('re', new wo(a, b[0]), b[1], d);
		}
	};
	x.qg = function () {
		return {
			name: this.A.A.code,
			state: this.A.C,
		};
	};
	x.rh = function () {
		this.C.Aa('mk', !0);
	};
	x.Te = function () {
		var a = this.A.C;
		this.A.C = !1;
		if (a) {
			if (this.A.A) {
				var b = this.A.A.code;
				Vy(this.C, this.A.A);
			} else (b = null), Vy(this.C);
			Ez(this, b, a);
		}
	};
	x.sg = function (a) {
		Ap = a;
		if (a == Vh || 'richlab' == a || 'gtta' == a) Bs('49160274'), (Sr = !1);
	};
	x.tg = function (a) {
		this.C.L = a;
	};
	x.fh = function (a) {
		this.A.D = a.target;
	};
	x.N = function () {
		N.prototype.N.call(this);
		this.G && (Io.qa(), Pj(Jo, this.B), O(this.B));
		delete this.D;
		O(this.C);
		delete this.C;
		O(this.K);
		delete this.K;
		delete this.F;
	};
	x.Hh = function () {
		var a = this.A.C,
			b = this.A.A ? this.A.A.code : null;
		b && ((this.A.C = !a), Ez(this, b, a));
	};
	x.zf = function (a) {
		return rz(a);
	};
	x.rg = function (a) {
		var b = yz.qa(),
			c = b.A[a];
		c || ((c = new vz(a)), (b.A[a] = c));
		c.notify();
	};
	x.eh = function (a) {
		var b = [a.F];
		a.A && Sj(b, a.A);
		this.C.Aa.apply(this.C, b);
	};
	x.Ph = function (a) {
		dy = a;
	};
	Aj('google.elements.inputtools.InputToolsController', Bz);
	var Z = Bz.prototype;
	Z.addInputTools = Z.Td;
	Z.removeInputTools = Z.Jh;
	Z.setInputTools = Z.Nh;
	Z.activateInputTool = Z.rf;
	Z.showControl = Z.Rh;
	Z.addPageElements = Z.tf;
	Z.removePageElements = Z.Kh;
	Z.setPageElements = Z.Oh;
	Z.setAutoDirection = Z.tg;
	Z.getCurrentInputTool = Z.qg;
	Z.enableCurrentInputTool = Z.xf;
	Z.disableCurrentInputTool = Z.Zd;
	Z.toggleCurrentInputTool = Z.Sh;
	Z.addEventListener = Z.addEventListener;
	Z.removeEventListener = Z.removeEventListener;
	Z.repositionKeyboard = Z.ef;
	Z.repositionElement = Z.ef;
	Z.getInputToolsForLanguage = Z.zf;
	Z.dispose = Z.da;
	Z.setApplicationName = Z.sg;
	Z.localize = Z.rg;
	Z.setSimpleEasyAccents = Z.Ph;
	Aj('google.elements.inputtools.InputToolNativeCaption', mA);
	Aj('google.elements.inputtools.EventType', {
		INPUT_TOOL_ENABLED: 'citc',
		INPUT_TOOL_LIST_UPDATED: 'itlu',
		PAGE_ELEMENT_LIST_UPDATED: 'pelu',
	});
	Aj('google.elements.inputtools.PositionType', {
		TOP_LEFT: [0, 1],
		TOP_RIGHT: [4, 5],
		UPPER_LEFT: [0, 5],
		UPPER_RIGHT: [4, 1],
		BOTTOM_LEFT: [1, 0],
		BOTTOM_RIGHT: [5, 4],
		LOWER_LEFT: [1, 4],
		LOWER_RIGHT: [5, 0],
		INNER_BOTTOM_END: [13, 13],
		INNER_BOTTOM_START: [9, 9],
		INNER_TOP_END: [12, 12],
		INNER_TOP_START: [8, 8],
		TOP_START: [8, 9],
		TOP_END: [12, 13],
		UPPER_START: [8, 13],
		UPPER_END: [12, 9],
		BOTTOM_START: [9, 8],
		BOTTOM_END: [13, 12],
		LOWER_START: [9, 12],
		LOWER_END: [13, 8],
	});
	Aj('google.elements.inputtools.loadConfigById', Bs);
	Aj('google.elements.inputtools.UiType', {
		CLASSIC: 'kd',
	});
	Aj('google_input_tools_source', 'jsapi');
	Aj('google.elements.inputtools.InputToolCode', {
		INPUTMETHOD_CANGJIE82_CHINESE_TRADITIONAL: Ki,
		INPUTMETHOD_CANTONESE_TRADITIONAL: Ci,
		INPUTMETHOD_CANTONESE_TRADITIONAL_JYUTPING: Bi,
		INPUTMETHOD_PINYIN_CHINESE_SIMPLIFIED: Pi,
		INPUTMETHOD_PINYIN_CHINESE_TRADITIONAL: Mi,
		INPUTMETHOD_TRANSLITERATION_AMHARIC: La,
		INPUTMETHOD_TRANSLITERATION_ARABIC: Na,
		INPUTMETHOD_TRANSLITERATION_BELARUSIAN: Va,
		INPUTMETHOD_TRANSLITERATION_BENGALI: cb,
		INPUTMETHOD_TRANSLITERATION_BULGARIAN: Ya,
		INPUTMETHOD_TRANSLITERATION_DUTCH: vf,
		INPUTMETHOD_TRANSLITERATION_FRENCH: vc,
		INPUTMETHOD_TRANSLITERATION_GERMAN: Lb,
		INPUTMETHOD_TRANSLITERATION_GREEK: Wb,
		INPUTMETHOD_TRANSLITERATION_GUJARATI: Jc,
		INPUTMETHOD_TRANSLITERATION_HEBREW: Sc,
		INPUTMETHOD_TRANSLITERATION_HINDI: Vc,
		INPUTMETHOD_TRANSLITERATION_ITALIAN: sd,
		INPUTMETHOD_TRANSLITERATION_JAPANESE: ce,
		INPUTMETHOD_TRANSLITERATION_KANNADA: pe,
		INPUTMETHOD_TRANSLITERATION_MALAYALAM: Se,
		INPUTMETHOD_TRANSLITERATION_MARATHI: cf,
		INPUTMETHOD_TRANSLITERATION_NEPALI: sf,
		INPUTMETHOD_TRANSLITERATION_ORIYA: Lf,
		INPUTMETHOD_TRANSLITERATION_PERSIAN: nc,
		INPUTMETHOD_TRANSLITERATION_PORTUGUESE: lg,
		INPUTMETHOD_TRANSLITERATION_PORTUGUESE_PORTUGAL: gg,
		INPUTMETHOD_TRANSLITERATION_PUNJABI: Sf,
		INPUTMETHOD_TRANSLITERATION_RUSSIAN: wg,
		INPUTMETHOD_TRANSLITERATION_SANSKRIT: Bg,
		INPUTMETHOD_TRANSLITERATION_SERBIAN: Zg,
		INPUTMETHOD_TRANSLITERATION_SINHALESE: Jg,
		INPUTMETHOD_TRANSLITERATION_SPANISH: ec,
		INPUTMETHOD_TRANSLITERATION_TAMIL: mh,
		INPUTMETHOD_TRANSLITERATION_TELUGU: uh,
		INPUTMETHOD_TRANSLITERATION_THAI: Ch,
		INPUTMETHOD_TRANSLITERATION_TIGRINYA: Ih,
		INPUTMETHOD_TRANSLITERATION_UKRAINE: $h,
		INPUTMETHOD_TRANSLITERATION_URDU: ei,
		INPUTMETHOD_TRANSLITERATION_VIETNAMESE: pi,
		INPUTMETHOD_WUBI_CHINESE_SIMPLIFIED: Wi,
		INPUTMETHOD_ZHUYIN_CHINESE_TRADITIONAL: Ni,
		KEYBOARD_ALBANIAN: Vg,
		KEYBOARD_ARABIC: Oa,
		KEYBOARD_ARMENIAN_EASTERN: jd,
		KEYBOARD_ARMENIAN_WESTERN: kd,
		KEYBOARD_BASQUE: lc,
		KEYBOARD_BELARUSIAN: Wa,
		KEYBOARD_BENGALI_INSCRIPT: db,
		KEYBOARD_BENGALI_PHONETIC: eb,
		KEYBOARD_BOSNIAN: hb,
		KEYBOARD_BRAZILIAN_PORTUGUESE: eg,
		KEYBOARD_BULGARIAN: $a,
		KEYBOARD_BULGARIAN_PHONETIC: Za,
		KEYBOARD_CATALAN: jb,
		KEYBOARD_CHAKMA: kb,
		KEYBOARD_CHEROKEE: qb,
		KEYBOARD_CHEROKEE_PHONETIC: rb,
		KEYBOARD_CROATIAN: cd,
		KEYBOARD_CZECH: Db,
		KEYBOARD_CZECH_QWERTZ: Cb,
		KEYBOARD_DANISH: Hb,
		KEYBOARD_DARI: Xf,
		KEYBOARD_DEVANAGARI_PHONETIC: Xc,
		KEYBOARD_DUTCH: yf,
		KEYBOARD_DUTCH_INTL: xf,
		KEYBOARD_DZONGKHA: Ub,
		KEYBOARD_ENGLISH: ac,
		KEYBOARD_ENGLISH_DVORAK: $b,
		KEYBOARD_ESTONIAN: jc,
		KEYBOARD_ETHIOPIC: bi,
		KEYBOARD_FINNISH: rc,
		KEYBOARD_FRENCH: yc,
		KEYBOARD_FRENCH_INTL: xc,
		KEYBOARD_FULA_ADLAM: pc,
		KEYBOARD_GALICIAN: Hc,
		KEYBOARD_GEORGIAN_QWERTY: he,
		KEYBOARD_GEORGIAN_TYPEWRITER: ge,
		KEYBOARD_GERMAN: Ob,
		KEYBOARD_GERMAN_INTL: Nb,
		KEYBOARD_GREEK: Xb,
		KEYBOARD_GUJARATI_INSCRIPT: Lc,
		KEYBOARD_GUJARATI_PHONETIC: Mc,
		KEYBOARD_GUJARATI_NEW_PHONETIC: Kc,
		KEYBOARD_GURMUKHI_INSCRIPT: Pf,
		KEYBOARD_GURMUKHI_PHONETIC: Qf,
		KEYBOARD_HAITIAN: ed,
		KEYBOARD_HAWAIIAN: Pc,
		KEYBOARD_HEBREW: Tc,
		KEYBOARD_HINDI: Yc,
		KEYBOARD_HINDI_PHONETIC: Wc,
		KEYBOARD_HUNGARIAN_101: id,
		KEYBOARD_ICELANDIC: qd,
		KEYBOARD_INDONESIAN: nd,
		KEYBOARD_INUKTITUT_NUNAVIK: Xd,
		KEYBOARD_INUKTITUT_NUNAVUT: Yd,
		KEYBOARD_IRISH: Dc,
		KEYBOARD_IRISH_ACCENTS: Cc,
		KEYBOARD_ITALIAN: vd,
		KEYBOARD_ITALIAN_INTL: ud,
		KEYBOARD_JAVANESE: ee,
		KEYBOARD_KANNADA_INSCRIPT: qe,
		KEYBOARD_KANNADA_PHONETIC: re,
		KEYBOARD_KAZAKH: le,
		KEYBOARD_KHMER: ne,
		KEYBOARD_KOREAN: te,
		KEYBOARD_KURDISH_BEDIRXAN: ve,
		KEYBOARD_KYRGYZ: we,
		KEYBOARD_LAO: Fe,
		KEYBOARD_LATVIAN: Ke,
		KEYBOARD_LITHUANIAN: He,
		KEYBOARD_MACEDONIAN: Qe,
		KEYBOARD_MALAY: hf,
		KEYBOARD_MALAYALAM_INSCRIPT: Te,
		KEYBOARD_MALAYALAM_PHONETIC: Ue,
		KEYBOARD_MALTESE: kf,
		KEYBOARD_MAORI: Oe,
		KEYBOARD_MARATHI: ff,
		KEYBOARD_MARATHI_PHONETIC: ef,
		KEYBOARD_MEETEI_PHONETIC: Xe,
		KEYBOARD_MENOMINEE: Le,
		KEYBOARD_MONGOLIAN_CYRILLIC: Ve,
		KEYBOARD_MONTENEGRIN: $g,
		KEYBOARD_MYANMAR: of,
		KEYBOARD_MYANMAR_MYANSAN: nf,
		KEYBOARD_NAVAJO: Ff,
		KEYBOARD_NAVAJO_STANDARD: Ef,
		KEYBOARD_NORWEGIAN: Bf,
		KEYBOARD_ONEIDA: Jf,
		KEYBOARD_ORIYA_INSCRIPT: Mf,
		KEYBOARD_ORIYA_PHONETIC: Nf,
		KEYBOARD_OSAGE: Of,
		KEYBOARD_PAN_AFRICA_LATIN: ze,
		KEYBOARD_PASHTO: Yf,
		KEYBOARD_PERSIAN: oc,
		KEYBOARD_PLAINS_CREE_PHONETIC: Ab,
		KEYBOARD_POLISH: Vf,
		KEYBOARD_PORTUGUESE: jg,
		KEYBOARD_PORTUGUESE_BRAZIL_INTL: dg,
		KEYBOARD_PORTUGUESE_PORTUGAL_INTL: ig,
		KEYBOARD_ROHINGYA: og,
		KEYBOARD_ROMANI: tg,
		KEYBOARD_ROMANIAN: sg,
		KEYBOARD_ROMANIAN_SR13392_PRIMARY: rg,
		KEYBOARD_ROMANIAN_SR13392_SECONDARY: qg,
		KEYBOARD_RUSSIAN: zg,
		KEYBOARD_SANSKRIT_PHONETIC: Dg,
		KEYBOARD_SERBIAN_CYRILLIC: Wg,
		KEYBOARD_SERBIAN_LATIN: Xg,
		KEYBOARD_KEYBOARD_SINDHI: Eg,
		KEYBOARD_SINHALA: Kg,
		KEYBOARD_SLOVAK: Ng,
		KEYBOARD_SLOVAK_QWERTY: Mg,
		KEYBOARD_SLOVENIAN: Pg,
		KEYBOARD_SORANI_KURDISH_AR: sb,
		KEYBOARD_SORANI_KURDISH_EN: tb,
		KEYBOARD_SOUTHERN_UZBEK: li,
		KEYBOARD_SPANISH: hc,
		KEYBOARD_SPANISH_INTL: gc,
		KEYBOARD_SWAHILI: gh,
		KEYBOARD_SWEDISH: eh,
		KEYBOARD_SWISS_GERMAN: Jb,
		KEYBOARD_TAGALOG: Kh,
		KEYBOARD_TAJIK: Ah,
		KEYBOARD_TAMIL_99: oh,
		KEYBOARD_TAMIL_INSCRIPT: qh,
		KEYBOARD_TAMIL_ITRANS: nh,
		KEYBOARD_TAMIL_PHONETIC: rh,
		KEYBOARD_TAMIL_TYPEWRITER: ph,
		KEYBOARD_TATAR: Xh,
		KEYBOARD_TELUGU_INSCRIPT: vh,
		KEYBOARD_TELUGU_PHONETIC: wh,
		KEYBOARD_THAI: Fh,
		KEYBOARD_THAI_PATTAJOTI: Dh,
		KEYBOARD_THAI_TIS: Eh,
		KEYBOARD_TIGRINYA: Jh,
		KEYBOARD_TIGRINYA_ETHIOPIC: Gh,
		KEYBOARD_TURKISH_F: Sh,
		KEYBOARD_TURKISH_Q: Uh,
		KEYBOARD_UIGHUR: Yh,
		KEYBOARD_UKRAINIAN_101: ai,
		KEYBOARD_URDU: fi,
		KEYBOARD_UZBEK_CYRILLIC_PHONETIC: ii,
		KEYBOARD_UZBEK_CYRILLIC_TYPEWRITTER: hi,
		KEYBOARD_UZBEK_LATIN: ji,
		KEYBOARD_VIETNAMESE_TCVN: ri,
		KEYBOARD_VIETNAMESE_TELEX: qi,
		KEYBOARD_VIETNAMESE_VIQR: si,
		KEYBOARD_WELSH: Fb,
		KEYBOARD_YIDDISH: zi,
		KEYBOARD_NIGERIAN_YORUBA: Ai,
		KEYBOARD_OJIBWE: If,
		KEYBOARD_GENMAN_ACCENTS: Mb,
		KEYBOARD_SPANISH_ACCENTS: fc,
		KEYBOARD_FRENCH_ACCENTS: wc,
		KEYBOARD_ITALIAN_ACCENTS: td,
		KEYBOARD_DUTCH_ACCENTS: wf,
		KEYBOARD_POLISH_ACCENTS: Uf,
		KEYBOARD_PORTUGUESE_BRAZIL_ACCENTS: cg,
		KEYBOARD_PORTUGUESE_PORTUGAL_ACCENTS: hg,
		KEYBOARD_TURKISH_F_ACCENTS: Qh,
		KEYBOARD_TURKISH_Q_ACCENTS: Th,
		KEYBOARD_CORSICAN_ACCENTS: vb,
		KEYBOARD_HAWAIIAN_ACCENTS: Oc,
		KEYBOARD_SAMOAN_ACCENTS: Rg,
		KEYBOARD_SCOTS_GAELIC_ACCENTS: Fc,
		KEYBOARD_WEST_FRISIAN_ACCENTS: Ac,
		KEYBORAD_LUXEMBOURGISH_ACCENTS: Ce,
		HANDWRIT_AFRIKAANS: Ia,
		HANDWRIT_AMHARIC: Ja,
		HANDWRIT_ARABIC: Ma,
		HANDWRIT_ASSAMESE: Qa,
		HANDWRIT_AZERBAIJANI: Ta,
		HANDWRIT_BELARUSIAN: Ua,
		HANDWRIT_BULGARIAN: Xa,
		HANDWRIT_BENGALI: bb,
		HANDWRIT_TIBETAN: fb,
		HANDWRIT_BOSNIAN: gb,
		HANDWRIT_CATALAN: ib,
		HANDWRIT_CEBUANO: lb,
		HANDWRIT_CORSICAN: ub,
		HANDWRIT_CZECH: Bb,
		HANDWRIT_WELSH: Eb,
		HANDWRIT_DANISH: Gb,
		HANDWRIT_GERMAN: Kb,
		HANDWRIT_GREEK: Vb,
		HANDWRIT_ENGLISH: Yb,
		HANDWRIT_ESPERANTO: cc,
		HANDWRIT_SPANISH: dc,
		HANDWRIT_ESTONIAN: ic,
		HANDWRIT_BASQUE: kc,
		HANDWRIT_PERSIAN: mc,
		HANDWRIT_FINNISH: qc,
		HANDWRIT_FILIPINO: sc,
		HANDWRIT_FRENCH: uc,
		HANDWRIT_WESTERN_FRISIAN: zc,
		HANDWRIT_IRISH: Bc,
		HANDWRIT_SCOTTISH_GAELIC: Ec,
		HANDWRIT_GALICIAN: Gc,
		HANDWRIT_GUJARATI: Ic,
		HANDWRIT_HAWAIIAN: Nc,
		HANDWRIT_HEBREW: Rc,
		HANDWRIT_HINDI: Uc,
		HANDWRIT_HMONG: $c,
		HANDWRIT_CROATIAN: bd,
		HANDWRIT_HAITIAN: dd,
		HANDWRIT_HUNGARIAN: hd,
		HANDWRIT_ARMENIAN: ld,
		HANDWRIT_INDONESIAN: md,
		HANDWRIT_ICELANDIC: pd,
		HANDWRIT_ITALIAN: rd,
		HANDWRIT_JAPANESE: $d,
		HANDWRIT_JAVANESE: de,
		HANDWRIT_GEORGIAN: fe,
		HANDWRIT_KAZAKH: ke,
		HANDWRIT_KHMER: me,
		HANDWRIT_KANNADA: oe,
		HANDWRIT_KOREAN: se,
		HANDWRIT_KURDISH: ue,
		HANDWRIT_KYRGYZ: xe,
		HANDWRIT_LATIN: ye,
		HANDWRIT_LUXEMBOURGISH: Be,
		HANDWRIT_LAO: Ee,
		HANDWRIT_LITHUANIAN: Ge,
		HANDWRIT_LATVIAN: Je,
		HANDWRIT_MALAGASY: Me,
		HANDWRIT_MAORI: Ne,
		HANDWRIT_MACEDONIAN: Pe,
		HANDWRIT_MALAYALAM: Re,
		HANDWRIT_MONGOLIAN: We,
		HANDWRIT_MARATHI: bf,
		HANDWRIT_MALAY: gf,
		HANDWRIT_MALTESE: jf,
		HANDWRIT_MULTIPLE_LANGUAGES: lf,
		HANDWRIT_BURMESE: mf,
		HANDWRIT_NORWEGIAN_BOKMAL: qf,
		HANDWRIT_NEPALI: rf,
		HANDWRIT_DUTCH: uf,
		HANDWRIT_NORWEGIAN_NYNORSK: zf,
		HANDWRIT_NORWEGIAN: Af,
		HANDWRIT_NYANJA: Gf,
		HANDWRIT_ORIYA: Kf,
		HANDWRIT_PUNJABI: Rf,
		HANDWRIT_POLISH: Tf,
		HANDWRIT_PORTUGUESE: kg,
		HANDWRIT_PORTUGUESE_BRAZIL: ag,
		HANDWRIT_PORTUGUESE_PORTUGAL: fg,
		HANDWRIT_ROMANIAN: pg,
		HANDWRIT_RUSSIAN: vg,
		HANDWRIT_SINHALA: Ig,
		HANDWRIT_SLOVAK: Lg,
		HANDWRIT_SLOVENIAN: Og,
		HANDWRIT_SAMOAN: Qg,
		HANDWRIT_SHONA: Sg,
		HANDWRIT_SOMALI: Tg,
		HANDWRIT_ALBANIAN: Ug,
		HANDWRIT_SERBIAN: Yg,
		HANDWRIT_SUNDANESE: ch,
		HANDWRIT_SWEDISH: dh,
		HANDWRIT_SWAHILI: fh,
		HANDWRIT_TAMIL: lh,
		HANDWRIT_TELUGU: th,
		HANDWRIT_TAJIK: zh,
		HANDWRIT_THAI: Bh,
		HANDWRIT_TIGRINYA: Hh,
		HANDWRIT_TURKISH: Ph,
		HANDWRIT_UKRAINIAN: Zh,
		HANDWRIT_URDU: di,
		HANDWRIT_UZBEK: ki,
		HANDWRIT_VIETNAMESE: oi,
		HANDWRIT_XHOSA: xi,
		HANDWRIT_YIDDISH: yi,
		HANDWRIT_CHINESE: Oi,
		HANDWRIT_CHINESE_SIMPLIFIED: Ii,
		HANDWRIT_CHINESE_TRADITIONAL: Li,
		HANDWRIT_CANTONESE: Xi,
		HANDWRIT_ZULU: Yi,
	});
	if (window.jstiming) {
		window.jstiming.Vd = {};
		window.jstiming.Lh = 1;
		var EA = function (a, b, c) {
				var d = a.t[b],
					e = a.t.start;
				if (d && (e || c))
					return (
						(d = a.t[b][0]),
						void 0 != c ? (e = c) : (e = e[0]),
						Math.round(d - e)
					);
			},
			FA = function (a, b, c) {
				var d = '';
				window.jstiming.srt &&
					((d += '&srt=' + window.jstiming.srt),
					delete window.jstiming.srt);
				window.jstiming.pt &&
					((d += '&tbsrt=' + window.jstiming.pt),
					delete window.jstiming.pt);
				try {
					window.external && window.external.tran
						? (d += '&tran=' + window.external.tran)
						: window.gtbExternal && window.gtbExternal.tran
						? (d += '&tran=' + window.gtbExternal.tran())
						: window.chrome &&
						  window.chrome.csi &&
						  (d += '&tran=' + window.chrome.csi().tran);
				} catch (K) {}
				var e = window.chrome;
				if (e && (e = e.loadTimes)) {
					e().wasFetchedViaSpdy && (d += '&p=s');
					if (e().wasNpnNegotiated) {
						d += '&npn=1';
						var g = e().npnNegotiatedProtocol;
						g &&
							(d += '&npnv=' + (encodeURIComponent || escape)(g));
					}
					e().wasAlternateProtocolAvailable && (d += '&apa=1');
				}
				var h = a.t,
					k = h.start;
				e = [];
				g = [];
				for (var l in h)
					if (l != ah && 0 != l.indexOf('_')) {
						var p = h[l][1];
						p
							? h[p] && g.push(l + '.' + EA(a, l, h[p][0]))
							: k && e.push(l + '.' + EA(a, l));
					}
				delete h.start;
				if (b) for (var B in b) d += '&' + B + '=' + b[B];
				(b = c) ||
					(b =
						'https:' == document.location.protocol
							? 'https://csi.gstatic.com/csi'
							: 'http://csi.gstatic.com/csi');
				return [
					b,
					'?v=3',
					'&s=' + (window.jstiming.sn || 'i18n_input') + '&action=',
					a.name,
					g.length ? '&it=' + g.join(',') : '',
					d,
					'&rt=',
					e.join(','),
				].join('');
			},
			GA = function (a, b, c) {
				a = FA(a, b, c);
				if (!a) return '';
				b = new Image();
				var d = window.jstiming.Lh++;
				window.jstiming.Vd[d] = b;
				b.onload = b.onerror = function () {
					window.jstiming && delete window.jstiming.Vd[d];
				};
				b.src = a;
				b = null;
				return a;
			};
		window.jstiming.report = function (a, b, c) {
			var d = document.visibilityState,
				e = 'visibilitychange';
			d ||
				((d = document.webkitVisibilityState),
				(e = 'webkitvisibilitychange'));
			if ('prerender' == d) {
				var g = !1,
					h = function () {
						if (!g) {
							b
								? (b.prerender = '1')
								: (b = {
										prerender: '1',
								  });
							if (
								'prerender' ==
								(document.visibilityState ||
									document.webkitVisibilityState)
							)
								var k = !1;
							else GA(a, b, c), (k = !0);
							k &&
								((g = !0),
								document.removeEventListener(e, h, !1));
						}
					};
				document.addEventListener(e, h, !1);
				return '';
			}
			return GA(a, b, c);
		};
	}
	Qy = Wx =
		".ita-kd-img{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite8.png');background-size:850px 250px}@media (min-resolution:144dpi),(-webkit-min-device-pixel-ratio:1.5){.ita-kd-img{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite8_2x.png')}}@media screen and (-ms-high-contrast:white-on-black){.ita-kd-img{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8.png')}@media (min-resolution:144dpi),(-webkit-min-device-pixel-ratio:1.5){.ita-kd-img{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8_2x.png')}}}.ita-ff-black-enabled .ita-kd-img{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8.png')}@media (min-resolution:144dpi),(-webkit-min-device-pixel-ratio:1.5){.ita-ff-black-enabled .ita-kd-img{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8_2x.png')}}.ita-ppe-can,.ita-ppe-ant,.ita-ppe-can,.ita-ppe-can-list,.ita-ppe-tbl,.ita-ppe-td,.ita-ppe-div,.ita-ppe-uds{font-size:inherit;text-align:inherit;background-color:inherit}.ita-ppe-ant{color:rgb(169,169,169);font-size:14px}.ita-ppe-box{position:absolute;display:block;background-color:white;color:black;cursor:move;border:1px solid #cdcdcd;padding:6px;font-size:16px;box-shadow:0 4px 16px rgba(0,0,0,0.2);z-index:2147483644;text-align:justify;overflow:hidden}.ita-ppe-box.ita-ppe-box-mobile{box-shadow:0 0;display:inline-block;left:0;padding:6px 0;width:100%}.ita-ppe-can{margin:2px;padding:4px;line-height:16px;height:18px}.ita-ppe-can-list{cursor:pointer;display:block;min-height:1.5em;margin:6px 0 0 0;padding:0;white-space:nowrap}.ita-ppe-box-mobile .ita-ppe-can-list{overflow-x:auto;max-width:100%;margin:6px 0 -100px 0;padding:6px 0 106px 0}.ita-ppe-cur{display:inline-block;width:2px;height:18px;background-color:#54bdf0;overflow:hidden;text-decoration:blink;float:none}.ita-ppe-edit{height:20px;line-height:20px;font-size:18px;text-align:inherit;background-color:inherit;padding:0 0 6px 0;outline:none;border:none;white-space:nowrap;font-family:Arial,Sans-serif;cursor:text}.ita-ppe-div{white-space:nowrap}.ita-ppe-box-mobile>.ita-ppe-div{font-size:24px;overflow-x:hidden}.ita-ppe-logo{background-image:url('https://ssl.gstatic.com/inputtools/images/search_button_normal.png');background-position:-197px 3px;width:48px;height:20px;margin:2px;padding:0;float:right}.ita-ppe-pgd,.ita-ppe-pgu{display:inline-block;margin:6px -1px 0 0;width:22px;opacity:0.55;-moz-opacity:0.55;filter:alpha(opacity=55);border:1px solid gray;height:18px;border-radius:2px;-webkit-transition:all 0.218s;-moz-transition:all 0.218s;-o-transition:all 0.218s;transition:all 0.218s;background-color:#f5f5f5;cursor:default}.ita-ppe-navi-box{padding-left:6px;white-space:nowrap}.ita-ppe-pgd{background-position:-816px -66px}.ita-ppe-pgu{background-position:-616px -116px}.ita-ppe-tbl{width:100%}.ita-ppe-tbl,.ita-ppe-td{border:none;padding:0;margin:0}.ita-ppe-uds{border-bottom:solid 2px;margin:0 1px}.ita-ppe-hlt{color:#222;background-color:#f1f1f1}.ita-ppe-hov{opacity:0.9;-moz-opacity:0.9;filter:alpha(opacity=90)}.ita-ppe-dis{opacity:0.333;-moz-opacity:0.333;filter:alpha(opacity=33)}.ita-ppe-dis-text{color:#777777}.ita-isv{position:absolute;border:0;margin:0;padding:0;background-repeat:repeat-x}.ita-isv-grey{color:grey;margin-top:0}.ita-isv-red{color:transparent;margin-top:-2px;background-image:url('https://ssl.gstatic.com/inputtools/images/tilde.png')}@media screen and (-ms-high-contrast:white-on-black){.ita-ppe-pgd,.ita-ppe-pgu{opacity:1px}.ita-ppe-hlt{font-weight:bold;border:1px solid}}.ita-ff-black-enabled .ita-ppe-pgd,.ita-ff-black-enabled .ita-ppe-pgu{opacity:1px}.ita-ff-black-enabled .ita-ppe-hlt{font-weight:bold;border:1px solid}.vk-box,.vk-btn,.vk-btn-n,.vk-cap,.vk-cap-i,.vk-t,.vk-t-btn{display:inline-block;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none}.vk-box{height:auto;padding:10px;background-color:white;border:1px solid #b8b8b8;border:1px solid rgba(0,0,0,0.3);z-index:2147483644;font-family:arial,sans-serif;font-size:14px;position:fixed;box-shadow:0 4px 16px rgba(0,0,0,0.2);touch-action:pinch-zoom}.vk-box-blur{opacity:0.5;-webkit-transition:opacity 0.1s linear}.vk-box.vk-min{padding:2px}.vk-box.vk-sf-ie{border:1px solid #ccc}.vk-btn{border:1px solid #dcdcdc;border:1px solid rgba(0,0,0,0.1);width:29px;height:29px;margin:2px;text-align:center;vertical-align:middle;position:relative;padding:1px;min-width:0px;max-width:500px;min-height:0px;max-height:50px;color:#444;background-color:#f5f5f5;background-image:linear-gradient(to bottom,#f5f5f5,#f1f1f1);background-image:-webkit-gradient(linear,left top,left bottom,from(#f5f5f5),to(#f1f1f1));background-image:-webkit-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-moz-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-ms-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-o-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:linear-gradient(to bottom,#f5f5f5,#f1f1f1);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr='#f5f5f5',EndColorStr='#f1f1f1');border-radius:2px;-webkit-border-radius:2px;-moz-border-radius:2px}.vk-btn.vk-sf-h{border-color:#c6c6c6;color:#222;background-color:#f8f8f8;background-image:-webkit-gradient(linear,left top,left bottom,from(#f8f8f8),to(#f1f1f1));background-image:-webkit-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-moz-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-ms-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-o-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:linear-gradient(to bottom,#f8f8f8,#f1f1f1);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr='#f8f8f8',EndColorStr='#f1f1f1');box-shadow:0px 1px 1px rgba(0,0,0,0.1)}.vk-btn.vk-sf-a{border-color:#c6c6c6;color:#333;background-color:#f6f6f6;background-image:-webkit-gradient(linear,left top,left bottom,from(#f6f6f6),to(#f1f1f1));background-image:-webkit-linear-gradient(top,#f6f6f6,#f1f1f1);background-image:-moz-linear-gradient(top,#f6f6f6,#f1f1f1);background-image:-ms-linear-gradient(top,#f6f6f6,#f1f1f1);background-image:-o-linear-gradient(top,#f6f6f6,#f1f1f1);background-image:linear-gradient(to bottom,#f6f6f6,#f1f1f1);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr='#f6f6f6',EndColorStr='#f1f1f1');box-shadow:inset 0px 1px 2px rgba(0,0,0,0.1)}.vk-btn.vk-sf-s{border-color:#ccc;color:#333;background-color:#eeeeee;background-image:-webkit-gradient(linear,left top,left bottom,from(#eeeeee),to(#e0e0e0));background-image:-webkit-linear-gradient(top,#eeeeee,#e0e0e0);background-image:-moz-linear-gradient(top,#eeeeee,#e0e0e0);background-image:-ms-linear-gradient(top,#eeeeee,#e0e0e0);background-image:-o-linear-gradient(top,#eeeeee,#e0e0e0);background-image:linear-gradient(to bottom,#eeeeee,#e0e0e0);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr='#EEEEEE',EndColorStr='#E0E0E0');box-shadow:inset 0px 1px 2px rgba(0,0,0,0.1)}.vk-cap,.vk-t{font-size:14px;font-family:arial,sans-serif;font-weight:normal;line-height:25px}.vk-cap{cursor:default}.vk-cap.vk-sf-b,.vk-t-btn{background-repeat:no-repeat}.vk-cap.vk-sf-b{width:22px;height:17px;opacity:.667}.vk-sf-ff2 .vk-cap.vk-sf-b{display:block;position:relative;left:6px;top:0}.vk-cap.vk-sf-b.vk-sf-h{opacity:.9}.vk-cap.vk-sf-b.vk-sf-c8{background-position:-714px -16px}.vk-cap.vk-sf-b.vk-sf-c20{background-position:-614px -66px}.vk-cap.vk-sf-b.vk-sf-c16{background-position:-814px -16px}.vk-cap.vk-sf-c273{font-size:14px}.vk-cap-i{border:none;width:20px;height:20px}.vk-t{height:24px;cursor:move;padding:0px 3px;color:#888888;display:inline-block;overflow:hidden;width:100%}.vk-t.vk-min{width:auto}.vk-t-btns{margin:0px;padding:0px;position:absolute;display:inline-block;white-space:nowrap;top:0}.vk-t-btns.vk-min{position:relative}.vk-t-btn{margin:0px;height:14px!important;width:14px!important;opacity:.4;filter:alpha(opacity=40)}.vk-t-btn.vk-sf-hp{background-position:-670px -70px}.vk-t-btn.vk-sf-min{background-position:-720px -70px}.vk-t-btn.vk-sf-max{background-position:-770px -70px}.vk-t-btn.vk-sf-cl{background-position:-670px -20px}.vk-t-btn.vk-sf-th{opacity:1;filter:alpha(opacity=100)}.vk-t-btn-o{padding:13px 4px 8px 4px;cursor:default;display:inline-block;position:relative}.vk-t-btn-o.vk-min{padding:2px}.vk-t-btn-o.vk-sf-hp{cursor:pointer}.vk-ea-l{margin-right:32px}.vk-ea-r{margin-left:32px}.vk-ss{margin:0 5px}.vk-l-i{pointer-events:none;text-decoration:none;color:#000000!important;font-weight:bold}.vk-l-a{color:#0000ff}@media screen and (-ms-high-contrast:white-on-black){.vk-btn,.vk-btn.vk-sf-a,.vk-btn.vk-sf-h,.vk-btn.vk-sf-s{background-image:none;background-color:black}.vk-cap.vk-sf-b{opacity:1}.vk-btn.vk-sf-a,.vk-btn.vk-sf-h,.vk-btn.vk-sf-s{border-width:2px}.vk-btn.vk-sf-a .vk-cap,.vk-btn.vk-sf-h .vk-cap,.vk-btn.vk-sf-s .vk-cap{font-weight:bold}}.ita-ff-black-enabled .vk-btn,.ita-ff-black-enabled .vk-btn.vk-sf-a,.ita-ff-black-enabled .vk-btn.vk-sf-h,.ita-ff-black-enabled .vk-btn.vk-sf-s{background-image:none;background-color:black}.ita-ff-black-enabled .vk-cap.vk-sf-b{opacity:1}.ita-ff-black-enabled .vk-btn.vk-sf-a,.ita-ff-black-enabled .vk-btn.vk-sf-h,.ita-ff-black-enabled .vk-btn.vk-sf-s{border-width:2px}.ita-ff-black-enabled .vk-btn.vk-sf-a .vk-cap,.ita-ff-black-enabled .vk-btn.vk-sf-h .vk-cap,.ita-ff-black-enabled .vk-btn.vk-sf-s .vk-cap{font-weight:bold}.ita-hwt-ime{overflow:hidden;width:425px;height:297px;background:#ffffff;touch-action:pinch-zoom}.ita-hwt-ime-st{position:fixed;opacity:0.5;box-shadow:0px 4px 16px rgba(0,0,0,0.2);border:1px solid rgb(204,204,204);-webkit-transition:opacity 0.1s linear;z-index:2147483640}.ita-hwt-ime-full{width:auto!important;left:2px!important;right:2px!important}.ita-hwt-ime-opaque{opacity:0.99!important}.ita-hwt-ime-init-opaque{opacity:0.99!important}.ita-hwt-ime-hover{opacity:0.99;-webkit-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;transition:opacity 0.1s linear}canvas.ita-hwt-canvas{cursor:url('https://ssl.gstatic.com/inputtools/images/pencil.png') 0 10,auto;vertical-align:bottom;touch-action:none}.ita-hwt-grip{position:absolute;cursor:move;top:0}.ita-hwt-ltr .ita-hwt-grip{left:0}.ita-hwt-rtl .ita-hwt-grip{right:0}.ita-hwt-close{background-position:-660px -10px;background-color:white;width:30px;height:30px;position:absolute;top:0;cursor:pointer}.ita-hwt-ltr .ita-hwt-close{right:0}.ita-hwt-rtl .ita-hwt-close{left:0}.ita-hwt-candidates{border-top:1px solid rgb(204,204,204);background:#fff;text-align:left;white-space:nowrap}.ita-hwt-candidate{display:inline-block;white-space:nowrap;height:32px;line-height:24px;padding:6px 18px 3px 18px;border-right:1px solid rgb(204,204,204);font-family:arial,verdana,sans-serif;font-size:small;color:#222;cursor:pointer}.ita-hwt-selected{color:#444}.ita-hwt-candidate-hover{background-color:#f0f0f0;color:#444}.ita-hwt-candidate:active{background-color:#e0e0e0;color:#444}.ita-hwt-disabled{opacity:0.5}.ita-hwt-buttons{background-color:#f0f0f0;height:60px;border-top:1px solid rgb(204,204,204)}.ita-hwt-button{display:inline-block;vertical-align:top}.ita-hwt-backspace{margin:10px;width:24px!important;height:40px!important}.ita-hwt-backspace-img{background-position:-714px -118px;width:18px;height:14px;margin:13px 4px 13px 4px}.ita-hwt-space{margin:10px 0 10px 0;height:24px;width:296px;line-height:24px;padding:8px 0px 8px 0px!important;font-family:arial,verdana,sans-serif;font-size:small;text-align:center}.ita-hwt-enter{margin:10px;width:24px!important;height:40px!important}.ita-hwt-enter-img{margin:13px 4px 13px 4px}.ita-hwt-language{position:absolute;right:0px;bottom:0px;width:auto;height:auto;font-size:small;color:#7590d4}.ita-hwt-clear-time{position:absolute;right:30px;bottom:0px;width:auto;height:auto;font-size:small;color:#7590d4;cursor:pointer}.ita-hwt-insert-time{position:absolute;right:60px;bottom:0px;width:auto;height:auto;font-size:small;color:#7590d4;cursor:pointer}.ita-hwt-enter-img-dark{background-position:-768px -120px;width:14px;height:10px}.ita-hwt-enter-img-white{background-position:-818px -120px;width:14px;height:10px}.ita-hwt-grip{background-position:-700px -160px;width:47px;height:29px}.ita-hwt-grip-hover{background-position:-650px -160px}.ita-hwt-grip:active{background-position:-600px -160px}.ita-hwt-jfk{-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;cursor:default;font-size:11px;font-weight:bold;text-align:center;white-space:nowrap;padding:0 8px}.ita-hwt-jfk-hover{-webkit-box-shadow:0 1px 1px rgba(0,0,0,.1);-moz-box-shadow:0 1px 1px rgba(0,0,0,.1);box-shadow:0 1px 1px rgba(0,0,0,.1)}.ita-hwt-jfk-standard{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;background-color:#f5f5f5;background-image:-webkit-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-moz-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-ms-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-o-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:linear-gradient(to bottom,#f5f5f5,#f1f1f1);color:#444;border:1px solid #dcdcdc;border:1px solid rgba(0,0,0,0.1)}.ita-hwt-jfk-standard.ita-hwt-jfk-hover{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;background-color:#f8f8f8;background-image:-webkit-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-moz-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-ms-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-o-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:linear-gradient(to bottom,#f8f8f8,#f1f1f1);border:1px solid #c6c6c6;color:#333}.ita-hwt-jfk-action{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;background-color:#4d90fe;background-image:-webkit-linear-gradient(top,#4d90fe,#4787ed);background-image:-moz-linear-gradient(top,#4d90fe,#4787ed);background-image:-ms-linear-gradient(top,#4d90fe,#4787ed);background-image:-o-linear-gradient(top,#4d90fe,#4787ed);background-image:linear-gradient(to bottom,#4d90fe,#4787ed);border:1px solid #3079ed;color:#fff}.ita-hwt-jfk-action.ita-hwt-jfk-hover{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;background-color:#357ae8;background-image:-webkit-linear-gradient(top,#4d90fe,#357ae8);background-image:-moz-linear-gradient(top,#4d90fe,#357ae8);background-image:-ms-linear-gradient(top,#4d90fe,#357ae8);background-image:-o-linear-gradient(top,#4d90fe,#357ae8);background-image:linear-gradient(to bottom,#4d90fe,#357ae8);border:1px solid #2f5bb7;border-bottom-color:#2f5bb7}.ita-hwt-butterbar{position:absolute;left:0;bottom:100px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;-webkit-box-shadow:0px 2px 4px rgba(0,0,0,0.2);-moz-box-shadow:0px 2px 4px rgba(0,0,0,0.2);box-shadow:0px 2px 4px rgba(0,0,0,0.2);-webkit-transition:all 0 linear 1s,opacity 1s;-moz-transition:all 0 linear 1s,opacity 1s;-o-transition:all 0 linear 1s,opacity 1s;transition:all 0 linear 1s,opacity 1s;border-style:solid;border-width:0;font-size:11px;height:0;opacity:0;visibility:hidden;overflow:hidden;padding:0;margin:10px;text-align:center;background-color:#f9edbe;border-color:#f0c36d;color:#333}.ita-hwt-butterbar.shown{-webkit-transition:opacity 0.218s;-moz-transition:opacity 0.218s;-o-transition:opacity 0.218s;transition:opacity 0.218s;border-width:1px;height:14px;opacity:1;visibility:visible;padding:2px 16px}@media screen and (-ms-high-contrast:white-on-black){.ita-hwt-candidate-hover,.ita-hwt-candidate:active{font-weight:bold;border:2px solid}.ita-hwt-jfk-action{outline:2px solid}.ita-hwt-jfk{background-image:none}.ita-hwt-jfk-standard.ita-hwt-jfk-hover,.ita-hwt-jfk-action.ita-hwt-jfk-hover{background-image:none;outline:2px solid}}.ita-ff-black-enabled .ita-hwt-candidate-hover,.ita-ff-black-enabled .ita-hwt-candidate:active{font-weight:bold;border:2px solid}.ita-ff-black-enabled .ita-hwt-jfk-action{outline:2px solid}.ita-ff-black-enabled .ita-hwt-jfk{background-image:none}.ita-ff-black-enabled .ita-hwt-jfk-standard.ita-hwt-jfk-hover,.ita-ff-black-enabled .ita-hwt-jfk-action.ita-hwt-jfk-hover{background-image:none;outline:2px solid}.ita-kd-btn-zh{background-position:-514px -18px}.ita-kd-btn-en{background-position:-564px -18px}.ita-kd-btn-dbc{background-position:-514px -68px}.ita-kd-btn-sbc{background-position:-564px -68px}.ita-kd-btn-zh_pun{background-position:-514px -118px}.ita-kd-btn-en_pun{background-position:-564px -118px}.ita-kd-arrow{background-position:-620px -218px;width:12px;height:15px}.ita-kd-floating-bar-icon{background-position:-670px -116px;width:12px;height:15px}.ita-kd-icon-button.ita-kd-left{-webkit-border-radius:2px 0 0 2px;-moz-border-radius:2px 0 0 2px;border-radius:2px 0 0 2px}.ita-kd-icon-button.ita-kd-right,.ita-kd-icon-button.ita-kd-mid{margin-left:-1px}.ita-kd-icon-button.ita-kd-single{-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}.ita-kd-icon-button{display:inline-block;min-width:54px;text-align:center;color:#444;font-size:11px;font-weight:bold;height:27px;padding:0 8px;margin:0;-webkit-transition:all 0.218s;-moz-transition:all 0.218s;-o-transition:all 0.218s;transition:all 0.218s;-webkit-user-select:none;-moz-user-select:none;cursor:default}.ita-kd-inputtools-div{display:table;white-space:nowrap}.ita-kd-inputtools-div .ita-kd-icon-button{float:left;position:relative;z-index:1}::-webkit-input-placeholder{color:#999}.ita-kd-icon-button.ita-kd-small{min-width:33px;width:33px;padding:0}.ita-kd-icon-button.ita-kd-small.ita-kd-mobile{height:30px;width:44px}.ita-kd-icon-button.ita-kd-dropdown{min-width:18px;width:18px;padding:0}.ita-kd-icon-button.ita-kd-dropdown.ita-kd-mobile{height:30px;width:36px}.ita-kd-icon-button.ita-kd-floating-bar{min-width:14px;width:14px;padding:0;cursor:move}.ita-kd-icon{width:23px;height:16px}.ita-kd-icon-span{display:inline-block;margin:6px 0 0 0;opacity:.26;vertical-align:middle}.ita-kd-arrow.ita-kd-icon-span,.ita-kd-statusbar-icon,.ita-kd-icon-button.ita-kd-selected .ita-kd-icon-span{opacity:.54}.ita-kd-icon-button:focus{outline:none}.ita-kd-statusbar{box-shadow:0 2px 4px rgba(0,0,0,.2);border-radius:3px;white-space:nowrap;direction:ltr;position:fixed;background-color:#eeeeee;z-index:2147483643}.ita-kd-statusbar-table{padding:0px;margin:0px;border:none}.ita-kd-separator{border-top:1px solid #ebebeb;margin-top:5px;margin-bottom:6px}.ita-kd-inputtool-icon:focus{margin-right:1px}.ita-kd-dropdown-menu{background:#fff;border:1px solid rgba(0,0,0,0.2);padding:6px 0;margin:0;white-space:nowrap;z-index:2147483645;-moz-transition:opacity 0.218s;-o-transition:opacity 0.218s;-webkit-transition:opacity 0.218s;transition:opacity 0.218s;position:absolute}.ita-kd-dropdown-menu-mobile{position:absolute;top:0;left:0;background-color:rgba(199,200,200,0.5);width:100%;height:100%;z-index:100}.ita-kd-dropdown-menu-mobile>.ita-kd-dropdown-menu{margin:auto;max-width:600px;position:relative;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%)}.ita-kd-dropdown-menu:focus{outline:none}.ita-kd-dropdown-menu.ita-kd-ie{border:1px solid #ccc;width:260px}.ita-kd-menuitem{display:block;padding:6px 38px 6px 8px;position:relative;color:#333;font-size:13px;height:16px;font-weight:normal;cursor:default}.ita-kd-dropdown-menu-mobile .ita-kd-menuitem{padding-top:16px}.ita-kd-menuitem-inputtool-icon{width:23px;height:16px;display:inline-block;opacity:0.54;position:relative;top:3px}.ita-kd-menuitem-inputtool-name{line-height:17px;padding:0 6px 0 6px}.ita-kd-menuitem-setting{line-height:17px;padding:0 22px 0 22px}.ita-kd-menuitem-hover{background-color:#f1f1f1!important;color:#222!important}.ita-kd-menuitem .ita-kd-checkbox{display:inline-block;width:22px;height:16px}.ita-kd-menuitem.ita-kd-selected .ita-kd-checkbox{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite8.png');background-position:-614px -14px;background-size:850px 250px}@media (min-resolution:144dpi),(-webkit-min-device-pixel-ratio:1.5){.ita-kd-menuitem.ita-kd-selected .ita-kd-checkbox{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite8_2x.png')}}@media screen and (-ms-high-contrast:white-on-black){.ita-kd-menuitem.ita-kd-selected .ita-kd-checkbox{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8.png')}@media (min-resolution:144dpi),(-webkit-min-device-pixel-ratio:1.5){.ita-kd-menuitem.ita-kd-selected .ita-kd-checkbox{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8_2x.png')}}.ita-kd-icon-span,.ita-kd-menuitem-inputtool-icon{opacity:1}.ita-kd-menuitem-hover{border:1px solid;font-weight:bold}.ita-kd-statusbar{border:1px solid}.ita-kd-icon-button.ita-kd-icon-button-hover{border:1px solid}}.ita-ff-black-enabled .ita-kd-menuitem.ita-kd-selected .ita-kd-checkbox{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8.png')}@media (min-resolution:144dpi),(-webkit-min-device-pixel-ratio:1.5){.ita-ff-black-enabled .ita-kd-menuitem.ita-kd-selected .ita-kd-checkbox{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8_2x.png')}}.ita-ff-black-enabled .ita-kd-icon-span,.ita-ff-black-enabled .ita-kd-menuitem-inputtool-icon{opacity:1}.ita-ff-black-enabled .ita-kd-menuitem-hover{border:1px solid;font-weight:bold}.ita-ff-black-enabled.ita-kd-statusbar{border:1px solid}.ita-ff-black-enabled .ita-kd-icon-button.ita-kd-icon-button-hover{border:1px solid}";
}.call(this));
