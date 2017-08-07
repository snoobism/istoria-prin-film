var y0=window.screen.availHeight;
var x0=window.screen.availWidth;
var img=[],imgist=[];
var a=[

	[
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[]
	],
	[
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[]
	],
	[
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[]
	],
	[
		[],
		[],
		[],
		[],
		[],
		[],
		[]
	]

];
var imaginic=[

	[
		["http://imgur.com/PmUnAxM.jpg","http://imgur.com/rV3NW5O.jpg","http://imgur.com/zM9hVhF.jpg","http://imgur.com/iMN8IsA.jpg"],
		["http://imgur.com/l7qjd3e.jpg","http://imgur.com/vaDkaYi.jpg","http://imgur.com/h1CW2Qs.jpg","http://imgur.com/rAwVQyw.jpeg"],
		["http://imgur.com/FQnif0f.jpg","http://imgur.com/zoOZFFs.jpg","http://imgur.com/qd3sRKr.jpg","http://imgur.com/FE9iT5d.jpg"],
		["http://imgur.com/mchLEyz.jpg","http://imgur.com/R5ZEzrw.jpg","http://imgur.com/VMa0AZq.jpg","http://imgur.com/HckA0aC.jpg"],
		["http://imgur.com/Jwc38GH.jpg","http://imgur.com/86UOH6h.jpg","http://imgur.com/GydgeQv.jpg","http://imgur.com/0pWs0Fr.jpg"],
		["http://imgur.com/dvbSnO6.jpg","http://imgur.com/UHpW3Kz.jpg","http://imgur.com/cjd6T32.jpg","http://imgur.com/Okl9eiU.jpg"],
		["http://imgur.com/qvV4F0D.jpg","http://imgur.com/04UX0Ue.jpg","http://imgur.com/kMUgbMe.jpg","http://imgur.com/KoAggjw.jpg"],
		["http://imgur.com/qb99Uyb.jpg","http://imgur.com/JnwcC3b.jpg","http://imgur.com/yhy0wlF.jpg","http://imgur.com/teZ0t1h.jpg"],
		["http://imgur.com/yApfQ1g.jpg","http://imgur.com/O3JyBc0.jpg","http://imgur.com/vFi6y9f.jpg","http://imgur.com/3ina3Yi.jpg"],
		["http://imgur.com/I34mOYK.jpg","http://imgur.com/bA6fU9E.jpg","http://imgur.com/smyhNEV.jpg","http://imgur.com/wLTyDsf.jpg"],
		["http://imgur.com/Sj0ydw2.jpg","http://imgur.com/YKe1rhM.jpg","http://imgur.com/276PWlz.jpg","http://imgur.com/8X0IPdE.jpg"],
		["http://imgur.com/vVmvXIR.jpg","http://imgur.com/wAqMs88.jpg","http://imgur.com/jxXKJa5.jpg","http://imgur.com/1tWnzGV.jpg"],
		["http://imgur.com/l67CDMc.jpg","http://imgur.com/EiUVxWA.jpg","http://imgur.com/7OJGo6a.jpg","http://imgur.com/XpyEy6w.jpg"],
		["http://imgur.com/SBRoVEq.jpg","http://imgur.com/k71nlpF.jpg","http://imgur.com/ZdhxcLC.jpg","http://imgur.com/YiwAVp1.jpg"],
		["http://imgur.com/55urSn5.jpg","http://imgur.com/tQcYHGJ.jpg","http://imgur.com/o3u2e1E.jpg","http://imgur.com/Xku0Xon.jpg"],
		["http://imgur.com/CeuRgeW.jpg","http://imgur.com/CxYVxke.jpg","http://imgur.com/G2xJmOC.jpg","http://imgur.com/0fvz4PC.jpg"],
		["http://imgur.com/b2JS99E.jpg","http://imgur.com/vwiNLmj.jpg","http://imgur.com/sviTjMh.jpg","http://imgur.com/x58tKXT.jpg"]
	],
	[
		["http://imgur.com/Py3SfUE.jpg","http://imgur.com/H8tF3p9.jpg","http://imgur.com/HOii5HE.jpg","http://imgur.com/g3HAZRP.jpg"],
		["http://imgur.com/kuDuk3t.jpg","http://imgur.com/gLXJc47.jpg","http://imgur.com/PP3dKu0.jpg","http://imgur.com/HudunVq.jpg"],
		["http://imgur.com/p12gkqu.jpg","http://imgur.com/SdzTvPK.jpg","http://imgur.com/pVBFp7c.jpg","http://imgur.com/AMC8tyS.jpg"],
		["http://imgur.com/QB1y12I.jpg","http://imgur.com/L4TKdhh.jpg","http://imgur.com/eYbhfko.jpg","http://imgur.com/fqVfjuw.jpg"],
		["http://imgur.com/WjevXhh.jpg","http://imgur.com/kslZHPR.jpg","http://imgur.com/FASnjrz.jpg","http://imgur.com/kUEFRZj.jpg"],
		["http://imgur.com/8Me33oq.jpg","http://imgur.com/wluHr9V.jpg","http://imgur.com/FkBP3Kz.jpg","http://imgur.com/sIFuDKT.jpg"],
		["http://imgur.com/2I8gFHn.jpg","http://imgur.com/aDGAFAk.jpg","http://imgur.com/NvAPwOR.jpg","http://imgur.com/tT7ucgs.jpg"],
		["http://imgur.com/h18yBs2.jpg","http://imgur.com/p6WRiai.jpg","http://imgur.com/C7ODOlz.jpg","http://imgur.com/iVfUjWn.jpg"],
		["http://imgur.com/lVQv2Jb.jpg","http://imgur.com/982qGYT.jpg","http://imgur.com/H2eJ7h3.jpg","http://imgur.com/XLRTg6a.jpg"]
	],
	[
		["http://imgur.com/vs2osic.jpg","http://imgur.com/KC9At5B.jpg","http://imgur.com/pFP7Zfy.jpg","http://imgur.com/ll9112c.jpg"],
		["http://imgur.com/4K13afX.jpg","http://imgur.com/Gy0k4pZ.jpg","http://imgur.com/Cnb2i9c.jpg","http://imgur.com/tpy8flM.jpg"],
		["http://imgur.com/h9WkpQv.jpg","http://imgur.com/nSMGreK.jpg","http://imgur.com/Ueapm5x.jpg","http://imgur.com/ZVxnJBS.jpg"],
		["http://imgur.com/VqXPgc4.jpg","http://imgur.com/CHIXzrY.jpg","http://imgur.com/EYWZxvR.jpg","http://imgur.com/tViJDwQ.jpg"],
		["http://imgur.com/bVzHcVW.jpg","http://imgur.com/eHQ2Mr3.jpg","http://imgur.com/7qotty8.jpg","http://imgur.com/5kustPg.jpg"],
		["http://imgur.com/uq6d9cs.jpg","http://imgur.com/0Ck2poS.jpg","http://imgur.com/Zhw7rMY.jpg","http://imgur.com/95ci876.jpg"],
		["http://imgur.com/KEl87rj.jpg","http://imgur.com/LhaoZTg.jpg","http://imgur.com/YgG0vbi.jpg","http://imgur.com/NW1ejfk.jpg"],
		["http://imgur.com/srmOJTx.jpg","http://imgur.com/vWu7lYA.jpg","http://imgur.com/cpeZuib.jpg","http://imgur.com/gDsuTJr.jpg"],
		["http://imgur.com/UEmi8Gi.jpg","http://imgur.com/gJLdncH.jpg","http://imgur.com/wA2owU3.jpg","http://imgur.com/p1woQRT.jpg"]
	],
	[
		["http://imgur.com/DmGGbJw.jpg","http://imgur.com/7TDNeOO.jpg","http://imgur.com/qYqhANp.jpg","http://imgur.com/h7i17i3.jpg"],
		["http://imgur.com/yVYX7Yd.jpg","http://imgur.com/AkqcXtJ.jpg","http://imgur.com/s0TkO40.jpg","http://imgur.com/2DloBmS.jpg"],
		["http://imgur.com/rcRfGdP.jpg","http://imgur.com/ndk3LCC.jpg","http://imgur.com/h3JvtAF.jpg","http://imgur.com/Z3pyKUk.jpg"],
		["http://imgur.com/4ZPi0zH.jpg","http://imgur.com/wtznSLj.jpg","http://imgur.com/W6G0xL6.jpg","http://imgur.com/F9g8kFE.jpg"],
		["http://imgur.com/alJ1nsl.jpg","http://imgur.com/aTP37xW.jpg","http://imgur.com/oBdjIGK.jpg","http://imgur.com/3xZx9Tf.jpg"],
		["http://imgur.com/5QWrmc1.jpg","http://imgur.com/0FVHGIR.jpg","http://imgur.com/scWG2JG.jpg","http://imgur.com/F2RpzLX.jpg"],
		["http://imgur.com/RRTPZnK.jpg","http://imgur.com/AKJN84e.jpg","http://imgur.com/g8VygYr.jpg","http://imgur.com/11ds56T.jpg"],
		["http://imgur.com/3Syw7WQ.jpg","http://imgur.com/NLhSXOg.jpg","http://imgur.com/dIQw5hY.jpg","http://imgur.com/pdvC6q3.jpg"],
		["http://imgur.com/aVwTRFW.jpg","http://imgur.com/AJfbumy.jpg","http://imgur.com/LX0FNcO.jpg","http://imgur.com/7Qa0bYf.jpg"]
		
	]

];

var imaginicist=[

//x0
	[
		["http://imgur.com/nbWZJqP.jpg","http://imgur.com/QrCHfCo.jpg","http://imgur.com/k5GMQG0.jpg","http://imgur.com/YS7iJCu.jpg"],
		["http://imgur.com/UhHjQsv.jpg","http://imgur.com/4DImwMX.jpg","http://imgur.com/zdYOb2B.jpg","http://imgur.com/NtI7jOq.jpg"],
		["http://imgur.com/q5bOZRi.jpg","http://imgur.com/ohWWE5V.jpg","http://imgur.com/7pHmRni.jpg","http://imgur.com/Wypsu9H.jpg"],
		["http://imgur.com/2cFKkw0.jpg","http://imgur.com/5BxiaDf.jpg","http://imgur.com/18hYTKI.jpg","http://imgur.com/ewtpfIp.jpg"],
		["http://imgur.com/K63tPXH.jpg","http://imgur.com/vktYHpg.jpg","http://imgur.com/rjkPsZB.jpg","http://imgur.com/qFUTF6K.jpg"],
		["http://imgur.com/AxIsh9s.jpg","http://imgur.com/D1wV2uM.jpg","http://imgur.com/lQf9Dzm.jpg","http://imgur.com/ABDLa8g.jpg"],
		["http://imgur.com/vHXYGXI.jpg","http://imgur.com/n3sIiyt.jpg","http://imgur.com/KLwOKan.jpg","http://imgur.com/hEMkxLe.jpg"],
		["http://imgur.com/UI5Ce5H.jpg","http://imgur.com/VzlT5jN.jpg","http://imgur.com/kTPCTtA.jpg","http://imgur.com/uZwFI2B.jpg"],
		["http://imgur.com/EiAVK0s.jpg","http://imgur.com/2cZ6b4L.jpg","http://imgur.com/8w6T2x4.jpg","http://imgur.com/nnbVvGZ.jpg"],
		["http://imgur.com/bHemLW7.jpg","http://imgur.com/7xwr1sL.jpg","http://imgur.com/B4ql945.jpg","http://imgur.com/uAYefeP.jpg"],
		["http://imgur.com/hbbF2KI.jpg","http://imgur.com/wL0Spig.jpg","http://imgur.com/jq0PXHe.jpg","http://imgur.com/4s4K9u1.jpg"],
		["http://imgur.com/p3njih3.jpg","http://imgur.com/sbPeg10.jpg","http://imgur.com/00OCzNO.jpg","http://imgur.com/IBhT8Ye.jpg"],
		["http://imgur.com/58hLFgi.jpg","http://imgur.com/H5arpMs.jpg","http://imgur.com/axbx9fB.jpg","http://imgur.com/33uyo4q.jpg"],
		["http://imgur.com/qFbCKYF.jpg","http://imgur.com/V6q08qV.jpg","http://imgur.com/d7qqWA2.jpg","http://imgur.com/GmTSS8r.jpg"],
		["http://imgur.com/LXAowTJ.jpg","http://imgur.com/aMK16Zc.jpg","http://imgur.com/Nq2eftK.jpg","http://imgur.com/aNbX5wX.jpg"],
		["http://imgur.com/T4Fk3B1.jpg","http://imgur.com/eAdNKK8.jpg","http://imgur.com/Ao8GzRw.jpg","http://imgur.com/x7IJa75.jpg"],
		["http://imgur.com/u0NQv2u.jpg","http://imgur.com/olxUzMT.jpg","http://imgur.com/ju7RNeu.jpg","http://imgur.com/jgHbQSy.jpg"]
	],
	[
		["http://imgur.com/MYSZVvp.jpg","http://imgur.com/gG8r3sf.jpg","http://imgur.com/CcGxXR7.jpg","http://imgur.com/DeAE2d4.jpg"],
		["http://imgur.com/PIH1mYn.jpg","http://imgur.com/E7nfqVs.jpg","http://imgur.com/lYlvrxW.jpg","http://imgur.com/oOvpuPj.jpg"],
		["http://imgur.com/46M7nTS.jpg","http://imgur.com/OAaJ6M9.jpg","http://imgur.com/OJYLXqw.jpg","http://imgur.com/GCoHDLa.jpg"],
		["http://imgur.com/rzi6s9z.jpg","http://imgur.com/Ogbn8iA.jpg","http://imgur.com/q2MtDG5.jpg","http://imgur.com/wZ0MDXH.jpg"],
		["http://imgur.com/Un5XLd4.jpg","http://imgur.com/OAtlGvY.jpg","http://imgur.com/tjrlQLM.jpg","http://imgur.com/W43W4XF.jpg"],
		["http://imgur.com/OSch3Np.jpg","http://imgur.com/nv6yuat.jpg","http://imgur.com/9weRwI4.jpg","http://imgur.com/smdjRC3.jpg"],
		["http://imgur.com/1wxpa0L.jpg","http://imgur.com/9RdW2r7.jpg","http://imgur.com/jnzzQSn.jpg","http://imgur.com/10IOkkd.jpg"],
		["http://imgur.com/hxAaAXN.jpg","http://imgur.com/i5FoOkH.jpg","http://imgur.com/8UBAKUA.jpg","http://imgur.com/2Mxfhtt.jpg"],
		["http://imgur.com/N5X3zf8.jpg","http://imgur.com/j3dpWEb.jpg","http://imgur.com/A7v3wAI.jpg","http://imgur.com/NqAFsuB.jpg"]
	],
	[
		["http://imgur.com/cQi5CFd.jpg","http://imgur.com/ij556vK.jpg","http://imgur.com/vEUxa0c.jpg","http://imgur.com/7muqgG0.jpg"],
		["http://imgur.com/EwqQRYM.jpg","http://imgur.com/C00qlx6.jpg","http://imgur.com/F37woVU.jpg","http://imgur.com/xD1VbzX.jpg"],
		["http://imgur.com/TSSQ5QB.jpg","http://imgur.com/Wepv2kZ.jpg","http://imgur.com/YpPgWy1.jpg","http://imgur.com/6VyOMj5.jpg"],
		["http://imgur.com/rLIGlSd.jpg","http://imgur.com/pCwNyiH.jpg","http://imgur.com/BM5KbS4.jpg","http://imgur.com/19pO69X.jpg"],
		["http://imgur.com/lLviNm1.jpg","http://imgur.com/ACHf5VK.jpg","http://imgur.com/QkilORS.jpg","http://imgur.com/WMwtnTe.jpg"],
		["http://imgur.com/QCEIUEq.jpg","http://imgur.com/5gPW8FJ.jpg","http://imgur.com/VRLE8m6.jpg","http://imgur.com/guH8RG5.jpg"],
		["http://imgur.com/G5NjZWv.jpg","http://imgur.com/aIWQpH1.jpg","http://imgur.com/t08mkQA.jpg","http://imgur.com/s4z6SIU.jpg"],
		["http://imgur.com/Y1mqN9g.jpg","http://imgur.com/Dpt09pJ.jpg","http://imgur.com/ybnr2TR.jpg","http://imgur.com/Wlmwn3q.jpg"],
		["http://imgur.com/rmTEmo8.jpg","http://imgur.com/HNOZjiH.jpg","http://imgur.com/kdtYbiL.jpg","http://imgur.com/5lPLLh1.jpg"]
		
		
	],
	[
		["http://imgur.com/GkzRozO.jpg","http://imgur.com/Vc0mmW9.jpg","http://imgur.com/mO5mf5u.jpg","http://imgur.com/ZRrlZpw.jpg"],
		["http://imgur.com/i5g32A9.jpg","http://imgur.com/J5Zp3nz.jpg","http://imgur.com/TxpuL6Q.jpg","http://imgur.com/MIqWu1G.jpg"],
		["http://imgur.com/lw5itGt.jpg","http://imgur.com/85GdAOC.jpg","http://imgur.com/JVAeyLO.jpg","http://imgur.com/FC6zjK8.jpg"],
		["http://imgur.com/49IT37G.jpg","http://imgur.com/b58oOH3.jpg","http://imgur.com/yeJirq8.jpg","http://imgur.com/ODLxQ5K.jpg"],
		["http://imgur.com/4ERhvT4.jpg","http://imgur.com/soiFyiE.jpg","http://imgur.com/Nd1aIfo.jpg","http://imgur.com/YzVjyEW.jpg"],
		["http://imgur.com/q907LG4.jpg","http://imgur.com/SAunY6o.jpg","http://imgur.com/eA5DJCY.jpg","http://imgur.com/ViDklsy.jpg"],
		["http://imgur.com/C8ykZSx.jpg","http://imgur.com/SBQHrFk.jpg","http://imgur.com/Nbw65Fd.jpg","http://imgur.com/nQcGB2Y.jpg"],
		["http://imgur.com/kIRhb7Y.jpg","http://imgur.com/cItff1I.jpg","http://imgur.com/l9ybGNP.jpg","http://imgur.com/uwy2y18.jpg"],
		["http://imgur.com/0jQy9Wf.jpg","http://imgur.com/jmyt5Tb.jpg","http://imgur.com/60hjC9q.jpg","http://imgur.com/bEriGBZ.jpg"]
	]
	

];

var sursa=[

	//x0
		["https://www.youtube.com/embed/Zzwex-1lqzA?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/cNvqw4dzKdY?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/xo_p8MWw4E8?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/cEPV4Vhur3w?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/Z4OFM-5P67w?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/R-RR7sdqy9U?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/TsYndXdUlQU?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/t8MMEc5BLQE?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/4Y6aOeSzG4o?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/4dac55yUKW8?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/cwZ0wOPW1hw?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/qvXqdP-Pisc?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/gjxAxMdAsN8?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/jPnE_TFIbcg?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/Fprd44eSxyM?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/UFSWikiWDmM?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/K4nPiWwkBgg?autoplay=1&enablejsapi=1"],
		
	
	//x1
		["https://www.youtube.com/embed/MJZeJb7JSwU?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/WWYykZyGEAM?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/CCjqplh4UiY?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/xdZ6XT7THf0?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/lM2d5LwcBrs?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/QhCimcokqMU?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/rxJDZxwf-L0?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/GvxxKeE_zxE?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/kdEU5eNg0dQ?autoplay=1&enablejsapi=1"],
		
	
	//x2
		["https://www.youtube.com/embed/H_GkgfQC8DI?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/qXlXqANWbuI?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/4nCpPgXHkxo?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/9K8AAleL7ls?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/XYP_5FE13zs?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/J-XWXkiuVBU?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/vsTCI5Cro4g?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/3j5LvxCxXdQ?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/8fIfJNgVcZY?autoplay=1&enablejsapi=1"],
		
	
	//x3
		["https://www.youtube.com/embed/Iv4xF67VppM?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/juvAirp8a1s?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/cvPFLZUbRnQ?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/YnNBoP3UOQE?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/Nkc_eusfdkI?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/mtFrt-QPPls?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/Jcb_zACgvfY?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/atr4mxRwLkI?autoplay=1&enablejsapi=1","https://www.youtube.com/embed/m-jCZP-Y9Qg?autoplay=1&enablejsapi=1"]
		
	

];	
var timp=[

	//x0
		[77000,111000,67000,20000,23000,89000,87000,84000,71000,78000,116000,73000,105000,76000,125000,268000,76000]
		
	,
	//x1
		[51000,126000,73000,103000,121000,154000,111000,121000,164000]
		
	,
	//x2
		[111000,83000,114000,141000,131000,121000,155000,122000,93000]
		
	,
	//x3
		[95000,86000,93000,56000,68000,150000,159000,116000,67000]
		
	

];
var descrierec=[

	//x0
		["Naşterea unei naţiuni este una din primele superproducţii. Regizorul este D.W. Griffith. Realizarea filmului s-a făcut în perioada 1914-1915. Griffith aduce mari inovaţii în tehnica cinematografică (de exemplu filmările pe timp de noapte). Din punct de vedere al mesajului, filmul este o reacţie faţă de schimbările din statele sudice după <span onclick='scrolldic()' >Războiul de secesiune</span>, având în vedere poziţia sudistă a marelui regizor. Astfel, drepturile câştigate de populaţia afro-americană după război sunt văzute ca o consecinţă negativă a războiului, iar apariţia <span onclick='scrolldic()'>Ku-Klux-Klan</span>-ului reprezintă o salvare pentru societatea Sudului.","Intoleranţă (1916) este o altă peliculă faimoasă a lui D.W. Griffith. Regizorul american recurge la episoade din mai multe epoci istorice (<span onclick='scrolldic()'>Babilonul antic</span>, Ierusalimul antic, Franţa <span onclick='scrolldic()'>Renașterii</span>, America de la începutul secolului al XX-lea) pentru a demonstra efectul intoleranţei asupra destinelor umane. Poate fi interpretat ca o reacţie la izbucnirea Primului Război Mondial, care se desfăşura în perioada când a fost turnat filmul. Filmul se bucură de aportul unor mari actori ai vremii: Lilian Gish şi King Vidor. ","Pe aripile vântului (1939) este ecranizarea romanului cu acelaşi nume scris de Margaret Mitchell. Filmul are ca subiect un destin individual (al răsfăţatei sudiste Scarlett O’Hara) în timpul <span onclick='scrolldic()'>Războiului de secesiune</span>. Pelicula a fost regizat de Victor Fleming şi a intrat în istoria celei de-a şaptea arte prin interpretarea fabuloasă a lui Vivien Leigh (în rolul lui Scarlett O’Hara) şi a lui Clark Gable (Rhett Butler). Din punct de vedere istoric, filmul redă o fidelă reconstituire a costumelor, mediului şi mentalităţii Sudului în timpul războiului civil din America. Este antologică secvenţa <span onclick='scrolldic()'>incendiului din Atlanta(1864)</span>, un fapt real din timpul războiului.","Ben Hur, o grandioasă superproducţie, a fost regizat de William Wyler şi a primit 11 premii Oscar. În rolul principal a jucat Charlton Heston. Filmul nu reconstituie vreun eveniment istoric, dar reconstituie costume, o bătălie navală,cat si o <span onclick='scrolldic()' >cursă de care</span>. De remarcat muzica absolut uluitoare a lui Miklos Rosza. Tematica biblică (întâlnită şi la alte filme americane ale epocii, precum Cele 10 porunci) constituie o contrapondere la adresa <span onclick='scrolldic()' >ideologiei din statele comuniste, ateiste</span>.","În 1959 regizorul american Stanley Kramer a realizat un film de anticipaţie, Ultimul țărm. În condițiile de atunci, vremea războiului rece, filmul poate fi considerat un film istoric. În film  au jucat actori de mare calibru, precum Fred Astaire, Gregory Peck, Anthony Perkins, Ava Gardner. Filmul descrie o lume distrusă de un război nuclear, în care locuitorii „ultimului ţărm”, Australia, aşteaptă ca şi această ţară să fie atinsă de poluarea radioactivă ucigătoare. Prin subiectul abordat, filmul este un produs al <span onclick='scrolldic()'>războiului rece</span>, în care sunt aduse în prim plan toate temerile omenirii legate de pericolul distrugerii civilizaţiei în urma unui <span onclick='scrolldic()'>conflict atomic</span>. Un critic cinematografic scria: „Kramer şi echipa sa subliniază apăsat o singură idee: viaţa este o comoară nepreţuită şi omul trebuie să facă tot ceea ce îi stă în putinţă pentru a şi-o salva cât mai este vreme. În acest scop, el a creat câteva imagini vii şi impresionante care îl fac pe spectator conştient de importanţa acestei idei.”","Spartacus (1960) este o capdoperă a istoriei cinematografului  regizată de Stanley Kubrick. În rolul principal Kirk Douglas face o creaţie memorabilă. În alte roluri întâlnim alte mari personalităţi ale cinematografiei americane (Tony Curtis, Peter Ustinov) sau britanice (Laurence Olivier). Filmul reînvie personalitatea <span onclick='scrolldic()'>sclavului Spartacus</span>, conducătorul celei mai mari răscoale a sclavilor din <span onclick='scrolldic()'>Antichitate</span>. Filmul face aluzie (prin personajul imortalizat de Laurence Olivier, Crassus) la rapacitatea marilor potentaţi americani ai acelei vremi.","Ziua cea mai lungă (1962) este o superproducţie, cu participarea a unui mare număr de artişti din mai multe ţări, care reconstituie <span onclick='scrolldic()'>debarcarea aliaţilor în Normandia</span> (6 iunie 1944). Atacul a cuprins 3.000.000 de oameni, 11.000 de avioane şi 4.000 de nave de război, construind astfel cea mai mare flotă militară pe care lumea a văzut-o vreodată. Nemţii aşteaptă o invazie în Calais, însă furtuna îi face să creadă că nu există nicio ameninţare. În film se întâlnesc mari actori precum John Wayne, Henry Fonda, Robert Mitchum, Richard Burton, Sean Conery, Bourville ","Agonie şi Extaz (1965) este realizat cu ocazia a 400 de ani de la moartea lui <span onclick='scrolldic()'>Michelangelo</span> (1475-1564). Regia este semnată de Carol Reed și este făcut după un faimos roman al lui Irving Stone. Filmul redă într-un mod apropiat de realitate un episod al vieții lui Michelangelo, și anume pictarea plafonului Capelei Sixtine și relația cu Papa Iuliu al II-lea. Este surprinsă splendoarea <span onclick='scrolldic()'>Renașterii</span> italiene, rolul Bisericii catolice în geneza creației artistice, vremurile zbuciumate ale începutului de secol al XVI-lea. Creații memorabile fac uriașii actori care au fost Charlton Heston (Michelangelo) și Iuliu al II-lea (Rex Harrison). ","Patton (1970), regizat de catre Franklin J. Schaffner, este un film biografic dedicate unuia din cei mai faimoşi comandanţi militari americani ai celui de-al Doilea Război Mondial, <span onclick='scrolldic()'>George Patton</span> (interpretat de George C. Scott). În anul 1970 lumea era în plin <span onclick='scrolldic()'>război rece</span>, de aceea este subliniată atitudinea antisovietică a generalului american. În acest sens, este sugestivă expresia: Americans love a winner!","Apocalipsa acum (1979), în regia lui Francis Ford Coppola, se desfăşoară pe fundalul <span onclick='scrolldic()'>războiului din Vietnam</span>. Filmul prezintă problemele psihologice ale soldaţilor americani angrenaţi în război. De aceea, filmul este un protest la adresa acestui război. Se remarcă prestaţia lui Marlon Brando (supraponderal), care apare în ultimile 20 de minute ale filmului. Prezenţa acestuia transforma filmul într-o interogaţie filosofică asupra misterele insolubile ale nebuniei şi răului din oameni.","Roșii (1981), în regia lui Warren Beatty, este evocarea biografiei ziaristului american John Reed, autorul faimoasei cărți 10 zile care au schimbat lumea și în care prezintă <span onclick='scrolldic()'>Revoluția bolșevică</span> la care a fost martor. Revenit în Statele Unite, John Reed încearcă să înființeze un partid comunist. Filmul se bucură de participarea unor actori de mare calitate precum Warren Beatty, Diane Keaton, Jack Nicholson.","Gandhi (1982), în regia lui Richard Attenborough, este o prezentare a activității marii personalități care a fost <span onclick='scrolldic()'>Gandhi</span>, eliberatorul Indiei. Ceea ce este extraordinar, este faptul că India a devenit o țară liberă în urma unei mișcări nonviolente. Arma sa a fost rezistenţa prin necooperare civilă cu <span onclick='scrolldic()'>asupritorii britanici</span>. Pentru a câştiga lupta împotriva răului fără violenţă, el a ales să facă vizibilă nedreptatea. Perseverenţa tipic orientală a fost o altă armă imbatabilă, insuflând naţiunii indiene din propria sa putere de a răbda suferinţele. Albert Einstein spunea despre Mahatma Gandhi că „generaţiile viitoare se vor întreba dacă un astfel de om chiar a existat pe Pământ”. În rolul principal este Ben Kingsley.","Plutonul (1986). La 15 ani de la terminarea <span onclick='scrolldic()'>războiului din Vietnam</span>, societatea americană era încă traumatizată de acest eveniment tragic. În această atmosferă a fost turnat filmul Plutonul, în regia lui Oliver Stone. Filmul narează ororile războiului din Vietnam prin ochii soldaţilor unui pluton american în timp ce patrulează, luptă şi mor în junglele Vietnamului. Creații remarcabile au actorii Tom Berenger, Johnny Depp, Charlie Sheen.","Braveheart (1995), în regia lui Mel Gibson, narează un episod din istoria medievală: <span onclick='scrolldic()'>lupta de eliberare a scoțienilor</span>, conduși de eroul <span onclick='scrolldic()'>William Walace</span> (interpretat de însuși Mel Gibson), împotriva englezilor. Prezentarea episodului istoric se realizează în scopul de a promova valori precum sacrificiul și eroismul. ","Salvați soldatul Ryan (1998) prezintă un episod din timpul <span onclick='scrolldic()'>debarcării în Normandia</span>. Regizor este Steven Spielberg, iar rolul principal este interpretat de Tom Hanks. La mai multe decenii după terminarea celui <span onclick='scrolldic()'>de-al Doilea Război Mondial</span>, filmul nu mai tratează ideea eroismului în război, punând în evidență aspecte naturaliste ale războiului.","Pianistul (2002) este regizat de artistul polonez Roman Polansky. Filmul narează, utilizând memoriile pianistului W. Szpillmann, drama unui instrumentist de origine evreiască, care este obligat să se ascundă în timpul celui <span onclick='scrolldic()'>de-al doilea război mondial</span> datorită <span onclick='scrolldic()'>persecuţiei evreilor</span>. ","Lista lui Schindler a fost realizat în 1993, în regia legendarului Steven Spielberg, pe baza unui roman al scriitorului australian Thomas Kineally. Filmul narează întâmplări reale legate de viaţa omului de afaceri german <span onclick='scrolldic()'>Oskar Schindler</span>, care în timpul ultimului război mondial a salvat viaţa a circa 1000 de evrei, care astfel nu au devenit victimele <span onclick='scrolldic()'>Holocaustului</span>."],
		
	
	//x1
		["<p>Napoleon (1927), realizat de Abel Gance redă viața și opera lui <span onclick='scrolldic()'>Napoleon</span>. Filmul este o epopee extraordinară, care introduce ca noutate tehnică proiecția filmului pe trei ecrane. Acest fapt dă filmului, care se întinde pe mai bine de șase ore, o grandoare extraordinară. </p>","Patimile Ioanei d’Arc  (1928) a fost regizat de artistul danez Carl Dreyer. Filmul a fost realizat la 8 ani după redeschiderea procesului <span onclick='scrolldic()'>Ioanei d’Arc</span> şi are ca bază a scenariului documentele acestui proces. În rolul principal este distribuită o actriţă necunoscută până atunci, Maria Falconetti, care, nemachiată, joacă un rol absolut uluitor. După interpretarea acestui rol, Maria Falconetti nu a mai jucat niciodată. Ca modalitate de realizare a filmului se remarcă prim-planurile, care creează o atmosferă tulburătoare. Filmul face aluzie şi la <span onclick='scrolldic()'>Primul Război Mondial</span>, care se terminase în urmă cu un deceniu prin căştile purtate de soldaţii englezi, aidoma cu cele britanice din 1914-1918.","<p>Nimic nou pe frontul de vest (1930), a fost realizat de regizorul Lewis Milestone după romanul faimos al scriitorului german Erich Maria Remarque. Este, aşadar, o condamnare a <span onclick='scrolldic()'>Primului Război Mondial</span> şi, evident, un film antirăzboinic şi, din acest motiv, a fost interzis, ca şi cartea după care a fost turnat filmul, în <span onclick='scrolldic()'>Germania nazistă</span>. Filmul abundă de secvenţe semnificative în ceea ce priveşte mesajul, de exemplu, soarta tragică a personajului principal din finalul filmului.</p>","Podul de pe râul Kwai (1957) este în regia lui David Lean. Un film a cărui acţiune este desfăşurată pe fundalul celui <span onclick='scrolldic()'>de-al Doilea Război Mondial</span> pe frontul din Birmania, unde armata britanică luptă împotriva japonezilor. În schimbul unei situaţii mai bune a prizonierilor britanici, colonelul britanic Nicholson (interpretat de Alec Guiness) va face un <span onclick='scrolldic()'>pod cu importanţă strategică pe râul Kwai</span>. În final podul este distrus de un comando britanic condus de ofiţerul american evadat Shears, distruge podul.","Lawrence al Arabiei (1962) este un film cu acţiunea în timpul <span onclick='scrolldic()'>Primului Război Mondial</span>. Filmul este regizat de David Lean şi reconstituie un fapt istoric real, şi anume activitatea ofiţerului britanic T.E. Lawrence, care organizează <span onclick='scrolldic()'>rebeliunea arabilor împotriva Imperiului Otoman</span>. În rolul principal Peter O'Toole face o creaţie memorabilă. ","<p>Un om pentru eternitate (1966), în regia lui Fred Zinneman, este o splendidă evocare a <span>Renașterii</span> și Reformei engleze în perspectiva unui episod real din viața marelui om de cultură Thomas More. Acesta refuză să semneze un document care îi conferă calitatea de șef al <span>Bisericii Anglicane</span> regelui Henric al VIII-lea, deși știe că prin acest refuz își va pierde viața. Costume, ambianță, mesaj, jocul magistral al lui Paul Scofield, totul este perfect în acest film cu deosebite valențe educative.</p>","Bătălia pentru Algeria (1966), în regia lui Gilio Pontecorvo, este o reconstituire impresionantă a <span onclick='scrolldic()'>războiului de eliberare a Algeriei</span> de sub dominaţia colonială franceză. Filmul este cu atât mai impresionant cu cât actorii nu sunt profesionişti. Filmul are mesaj anticolonialist într-o perioadă în care <span onclick='scrolldic()'>imperiile coloniale</span> dispăreau sub loviturile popoarelor dornice de libertate. ","Submarinul (1981), în regia lui Wolfgang Pedersen, priveşte cu compasiune suferinţa marinarilor dintr-un submarin german angrenat în <span onclick='scrolldic()'>Bătălia Atlanticului</span> în timpul <span onclick='scrolldic()'>celui de-al Doilea Război Mondial</span>. Trecerea a aproape 40 de ani de la sfârşitul celui de-al Doilea Război Mondial face posibilă realizarea acestui film ce îi prezintă pe germani cu compasiune în timpul acestui mare conflict.</p>","Viaţa e frumoasă este o capodoperă a cineastului italian Roberto Benigni, realizată în 1997. Este o operă de artă uimitoare, deoarece prezintă momentul atât de tragic al <span onclick='scrolldic()'>Holocaustului</span> într-un mod absolut neaşteptat sub formă comică. Pentru a salva inocenţa băiatului său, Giosue, Guido (evreu italian internat într-un <span onclick='scrolldic()'>lagăr de concentrare</span>) îi prezintă acestuia prizonieratul ca pe un joc. Acelaşi Roberto Benigni  joacă rolul lui Guido. Acest film magnific a primit 3 premii Oscar. "],
		
	
	//x2
		["Filmul  „Crucişătorul Potemkin”(1925) în regia lui Sergei Mikhailovich Eisenstein, corespunde din punct de vedere ideologic cu ideologia marxist-leninistă din următoarele motive: subiectul (<span onclick='scrolldic()'>Revoluţia rusă de la 1905</span>, considerată a fi conform istoriografiei sovietice premergătoarea <span onclick='scrolldic()'>Revoluţiei bolşevice</span>) şi estetica descrisă mai sus de Eisenstein: lipsa eroului şi existenţa personajului colectiv (mulţimea de pe vas sau din oraşul Odessa). Filmul „Crucişătorul Potemkin” descrie răscoala marinarilor de pe nava rusească în timpul revoluţiei ruseşti din 1905. Motivul răscoalei l-a constituit carnea alterată cu care marinarii erau hrăniţi.","Ivan cel Groaznic (1944) este o altă capodoperă a lui Eisenstein. Filmul urmăreşte traiectoria primilor ani de domnie ai ţarului <span onclick='scrolldic()'>Ivan cel Groaznic</span>, când acesta i-a învins pe tătari, ocupând capitala acestora, oraşul Kazan. Filmul este realizat în timpul celui de-al Doilea Război Mondial şi imaginea ţarului, apărător al pământului Rusiei, era o aluzie la <span onclick='scrolldic()'>Stalin</span>. Se remarcă interpretarea actorului Nikolai Cerkasov şi muzica marelui compozitor Prokofiev. Partea a II-a a filmului a fost prezentată abia în 1958, după moartea lui Stalin, întrucât fusese cenzurată de autoritățile sovietice. Având în vedere că subiectul se referea la perioada tiranică a domniei lui Ivan cel Groaznic, se putea interpreta acest fapt ca o aluzie la însuși Stalin.","Zboară cocorii (1957) este o capodoperă a cinematografiei sovietice care prezintă un episod din <span onclick='scrolldic()'>al Doilea Război Mondial</span> într-o altă cheie, diferită de evocarea faptelor de eroism ale Armatei Roșii. Se pune accent pe elementele dureroase din prima parte a războiului când se părea că <span onclick='scrolldic()'>forțelor naziste</span> nu li se mai poate rezista. Regia este semnată de Mihail Kalatozov. Tinerii actori Alexei Batalov și Tatiana Samoilova fac roluri de referință. ","Donul liniștit (1957) este ecranizarea unui roman pentru care scriitorul Mihail Solohov a primit Premiul Nobel pentru literatură. Este o vastă frescă a unui colț din <span onclick='scrolldic()'>lumea rusă în preajma și în timpul Revoluției bolșevice</span>. Regizorul Serghei Gherasimov este realizatorul acestui film. ","Destinul unui om (1959) descrie destinul unui bărbat participant la <span onclick='scrolldic()'>al Doilea Război Mondial</span> a fost schilodit, prin moartea tuturor membrilor familiei sale. Conform cu ideologia impusă de <span onclick='scrolldic()'>regimul totalitar</span>, filmul evidențiază comportamentul eroic al personajului principal în timpul prizonieratului la germani. Este un film minunat al reputatului regizor Serghei Bondarciuk. ","Andrei Rubleov (1966) este o capodoperă a lui Tarkovski. Tema filmului este viaţa marelui pictor iconar <span onclick='scrolldic()'>Andrei Rubliov</span> derulată în atmosfera istoriei Rusiei din secolele XIV-XV. Filmul este turnat în alb-negru, în contrast cu imaginile din final, care prezintă în culori minunatele icoane ale lui Rubliov, mai ales faimoasa Sfântă Treime. Filmul este o glorificare a creativităţii poporului rus (zborul lui Efim, turnarea marelui clopot de bronz, icoanele lui Rubliov). Se introduc și erori voite (de exemplu ipotetica întâlnire dintre marii maeștri iconari ruși <span onclick='scrolldic()'>Teofan Grecul</span> și Andrei Rubliov)","Amiralul (2008), în regia lui Andrei Kravchuk, arată că după căderea comunismului și prăbușirea Uniunii Sovietice au putut fi prezentate în cinematografia rusă figuri considerate negative în istoria URSS. De astă dată unul dintre conducătorii <span onclick='scrolldic()>albilor</span> în timpul <span onclick='scrolldic()'>Războiului civil din Rusia</span>, amiralul Kolceak, este evocat ca o personalitate caracterizată prin patriotism și prin simțul datoriei","Stalingrad (2013) redă o poveste de dragoste pe fondul crâncenei <span onclick='scrolldic()'>bătălii de la Stalingrad</span>. Se revine la comandamentul de a nara evenimentele în spiritul naționalist odată cu instaurarea guvernării regimului lui <span onclick='scrolldic()'>Vladimir Putin</span>. Filmul e regizat de  Fedor Bondarchuk","Alexandr Nevsky (1938) este o altă capdoperă a lui Eisenstein.  Filmul narează invazia Rusiei (cnezatul Novgorodului) de către <span onclick='scrolldic()'>Ordinul cavalerilor teutoni</span>, format din călugări-luptători germani. Rezistenţa ruşilor a fost condusă de cneazul Alexandru, supranumit Nevsky („de pe Neva”). Expansiunea cavalerilor germani a fost oprită în bătălia de pe apa îngheţată a Lacului Ciud (5 aprilie 1242). Filmul ilustra situaţia <span onclick='scrolldic()'>URSS</span>, care se simţea izolată în faţa Germaniei naziste (URSS şi Germania nu semnaseră încă <span onclick='scrolldic()'>Pactul Ribbentrop-Molotov</span>). În acelaşi timp, propaganda oficială îl asemăna pe Stalin cu Alexandr Nevsky, erou al poporului rus. În rolul lui Alexandr Nevsky, marele actor Nikolai Cerkasov."],
		
	
	//x3
		["Independența României este un film istoric românesc realizat între 1911 și 1912. Acesta are drept subiect ilustrarea <span onclick='scrolldic()'>Războiului de Independență al României</span> şi este o adevărată superproducție românească la care au participat mari actori ai scenei românești, dintre care cei mai cunoscuți au fost Constantin Nottara, Nicolae Bulandra etc. Filmul mixează elemente istorice reale cu întâmplări fanteziste inspirate de poeziile lui Vasile Alecsandri (Peneș Curcanul).","Tudor (1963) a fost realizat de Lucian Bratu. În rolul lui Tudor realizează un rol memorabil Emanoil Petruț. Alți mari actori care au jucat în film: Olga Tudorache, Ion Besoiu, Ion Dichiseanu, Amza Pellea. Scenariul a fost scris de Mihnea Gheorghiu. Filmul reliefează personalitatea lui <span onclick='scrolldic()'>Tudor Vladimirescu</span>( conducătorul <span>Revoluției de la 1821</span> și al pandurilor) văzut, în mod exagerat, ca o personalitate de prim rang în Europa începutului de secol al XIX-lea.","Dacii (1967) a fost regizat de Sergiu Nicolaescu și a fost realizat în colaborare cu un studio de fim franțuzesc. În rolurile principale au fost distribuiți Amza Pellea (regele <span onclick='scrolldic()'>Decebal</span>) și actorul francez Pierre Brice în rolul generalului roman Severus. Pe fondul unor întâmplări istorice reale (expediția condusă în 85 de <span onclick='scrolldic()'>generalul Fuscus</span>), filmul narează fapte istorice fanteziste (bătălia finală între armata dacă aflată sub comanda lui Decebal și cea romană condusă de Severus). Filmul transmite unele mesaje cum ar fi: frumusețea și bogăția patriei pentru care merită să lupți precum <span onclick='scrolldic()'>strămoșii noștri daci</span>; calitățile deosebite ale acestor strămoși (vitejia, cinstea, hărnicia etc). ","Columna (1968) a fost regizat de Mircea Drăgan. Filmul s-a bucurat de o distribuție internațională cu actori foarte cunoscuți: Richard Johnson, Amedeo Nazzari, Antonella Lualdi, alături de care au jucat mari artiști români: Ilarion Ciobanu, Florin Piersic, Ștefan Ciubotărașu, Emil Botta, Amza Pellea, Gheorghe Dinică și alții. Scenariul a fost semnat de Titus Popovici. Acțiunea filmului se derulează la sfârșitul <span onclick='scrolldic()'>războiului daco-roman din 105-106</span> și după terminarea acestuia. Mesajul filmului este redat de cuvintele lui Decebal (interpretat de Amza Pellea):  „Nimic nu e pierdut niciodată. [...] Am păzit o singură lege: să nu ne plecăm genunchii niciodată în fața nimănui. [...] Atâta timp cât mă voi putea mișca, atâta timp cât va mai fi un singur dac care va vrea să trăiască liber, ne vom bate pentru acest pământ bun și frumos. Dacă nu mai avem cetăți, ne vom bate în ruinele lor. Și cât va mai fi o singură palmă de pământ pe care să putem sta în picioare, ne vom bate pentru palma aceea. Aceasta-i legea. Singura. Alta nu cunosc. Ultimul drept pe care-l avem este să ne dăm moartea, dar ultimul!”. O altă idee a filmului este, spre deosebire de <span onclick='scrolldic()'>Dacii</span>, este admirația pentru <span onclick='scrolldic()'>romani</span>. Totuşi, românii se trag din două popoare nobile. ","Unul din marile filme ale cinematografiei româneşti a fost „<span onclick='scrolldic()'>Mihai Viteazul</span>” regizat în 1970 de Sergiu Nicolaescu pe un scenariu scris de Titus Popovici. În rolul principal a fost distribuit Amza Pellea, unul din cei mai populari actori români din perioada postbelică. Alături de Amza Pellea au mai jucat alţi actori importanţi ai teatrului şi cinematografiei româneşti: Ion Besoiu (în rolul lui Sigismund Báthory), Florin Piersic (Preda Buzescu),  Ilarion Ciobanu (Stroe Buzescu), Mircea Albulescu (Popa Stoica), Sergiu Nicolaescu (Selim Paşa), Olga Tudorache (mama lui Mihai Viteazul), Ioana Bulcă (soţia domnitorului), Colea Răutu (sultanul Murad al III-lea) etc. Impresionează minunata muzică a filmului, care a fost compusă de Tiberiu Olah (1928-2002). Filmul a avut un mare succes în ţară, dar şi în străinătate, unde a fost distribuit sub numele de „The Last Crusade” („Ultima cruciadă”). Ca orice operă de artă, filmul nu respectă adevărul istoric proporţie de 100%, unele personaje sunt imaginare (Popa Stoica, Selim Paşa etc), dar creionează portretul <span onclick='scrolldic()'>eroului unificator al Ţărilor Române</span>. ","Mircea este un film istoric românesc din 1989, regizat de Sergiu Nicolaescu. Rolurile principale sunt interpretate de Sergiu Nicolaescu, Șerban Ionescu, Adrian Pintea, Vlad Nemeș, Silviu Stănculescu, Ion Besoiu, Ion Rițiu, George Alexandru, Ioana Pavelescu, Manuela Hărăbor și Colea Răutu.Filmul prezintă câteva momente semnificative de la sfârșitul domniei lui <span onclick='scrolldic()'>Mircea cel Bătrân</span> (1386-1418), domnitorul Țării Românești: pregătirea luptei cu oastea otomană condusă de sultanul <span onclick='scrolldic()'>Mehmed I</span>, supravegherea intrigilor boierilor care doreau să închine țara puterilor străine și îndrumarea educației nepotului preferat, Vlad.","Pentru patrie (1978) a fost regizat de Sergiu Nicolaescu cu ocazia a 100 de ani de la proclamarea <span onclick='scrolldic()'>Independenței României</span>. A fost o adevărată superproducție cu participarea celor mai reputați artiști români: Mircea Albulescu - colonelul Mihail Cristodulo Cerchez, Mircea Anghelescu (țarul Alexandru al II-lea ) , Ilarion Ciobanu  (maiorul Moise Grozea), Constantin Codrescu  (C.A. Rosetti), George Constantin (ministrul de externe <span onclick='scrolldic()'>Mihail Kogălniceanu</span>), Emanoil Petruț (<span onclick='scrolldic()'>Ion C. Brătianu</span>) etc. În rolul lui <span onclick='scrolldic()'>Carol I</span> a fost distribuit însuși Sergiu Nicolaescu. Ca și în primul film românesc, Independența României, în film apar personaje și întâmplări fictive (inspirate din poetica lui Alecsandri), îmbinate cu evenimentele reale care au condus la afirmarea independenței țării noastre. De remarcat faptul că, personajele care până atunci fuseseră văzute într-o lumină negativă (Carol I, Ion C. Brătianu) sunt prezentate într-un mod mai apropiat de realitatea istorică. Apar și exagerări, cum ar fi aluziile despre importanța mișcării muncitorești în obținerea independenței","Pădurea spânzuraților (1964) este una din capodoperele filmului românesc, ecranizare după romanul lui Liviu Rebreanu. Regia filmului este asigurată de Liviu Ciulei. Filmul tratează o temă care are ca bază un adevăr istoric, și anume drama militarilor români obligați să lupte în <span onclick='scrolldic()'>Primul Război Mondial</span> împotriva propriilor frați. Rolul principal (Apostol Bologa) este jucat de artistul Victor Rebengiuc, care din acel moment a devenit foarte cunoscut ca actor de film. În rolul Ilonei o întâlnim pe tânăra, pe atunci, Anna Széles. Prin prezența acestei actrițe, filmul dorește să demonstreze relația, în statul comunist, bună între români și minoritatea maghiară. În ciuda existenței <span onclick='scrolldic()'>regimului comunist</span> și a constrângerilor ideologice ale acestuia, performanța regizorală a lui Liviu Ciulei este remarcabilă, el izbutind să facă un film de mare valoare artistică, distins cu Premiul pentru regie la prestigiosul Festival Internațional de la Cannes (1965).","Ștefan cel Mare – Vaslui 1475 este un film istoric regizat de Mircea Drăgan. Parțial, scenariul filmului este inspirtat de romanul lui Mihail Sadoveanu, Frații Jderi. Filmul a fost realizat cu ocazia a 500 de ani de la bătălia de la Vaslui (10 ianuarie 1475). În rolul principal este marele actor George Cozorici. Un alt mare artist român, Gheorghe Dinică, joacă rolul sultanului <span onclick='scrolldic()'>Mahomed al II-lea</span>. Pe genericul filmului apare următorul text: „Niciodată poporul nostru nu a îngenuncheat și a luptat ori de cîte ori a trebuit să-și apere ființa națională. Statuia lui <span onclick='scrolldic()'>Ștefan cel Mare</span> este un simbol al acestei lupte a poporului nostru”. Nicolae Ceaușescu. Mesajul filmului este acela că poporul român este viteaz, iubitor de libertate, dar, în același timp, pașnic. Înțelepciunea și vitejia marelui domn al Moldovei sunt văzute ca aluzie la Nicolae Ceaușescu. Filmul completează așa-numita „epopee națională”, care considera comunismul și  personalitatea lui Nicolae Ceaușescu drept momentul de vârf al istoriei României."]
		
	

];
function scrolldic(){
	$('html, body').animate({
        scrollTop: $("#dictionartitlu").offset().top
    }, 500);
}
var regizordesc=[

	//x0
		["<strong>David Wark Griffith</strong> s-a născut într-o familie care fusese aproape ruinată după înfrângerea sudiștilor în <span onclick='scrolldic()' >Războiul de Secesiune</span> . El a inventat blockbuster-ul în epoca filmelor mute și a introdus tehnici noi în arta cinematografică a vremii, echivalente în domeniu cu descoperirea roții: flashbackul, prim-planul, crosscuting-ul (care se întâmplă atunci când personajele vorbesc la telefon și ecranul se împarte în două). Pe durata a 20 de ani a realizat în jur de 500 de filme - pelicule care nu depășeau dimensiunea unei bobine - din care azi mai contează două: Nașterea unei națiuni (1915) și Intoleranță (1916).","<strong>David Wark Griffith</strong> s-a născut într-o familie care fusese aproape ruinată după înfrângerea sudiștilor în Războiul de Secesiune . El a inventat blockbuster-ul în epoca filmelor mute și a introdus tehnici noi în arta cinematografică a vremii, echivalente în domeniu cu descoperirea roții: flashbackul, prim-planul, crosscuting-ul (care se întâmplă atunci când personajele vorbesc la telefon și ecranul se împarte în două). Pe durata a 20 de ani a realizat în jur de 500 de filme - pelicule care nu depășeau dimensiunea unei bobine - din care azi mai contează două: Nașterea unei națiuni (1915) și Intoleranță (1916).","<strong>Victor Fleming</strong> (n. 23 februarie 1889, Pasadena, California - d. 6 ianuarie 1949, Cottonwood, Arizona) a fost un regizor american de film. Este cel mai notabil pentru regizarea filmelor Vrăjitorul din Oz (1939) și Pe aripile vântului (1939) - pentru ambele câștigând Premiul Oscar pentru cel mai bun regizor. Este singurul regizor care apare de două ori în lista AFI 100 de ani...100 de filme (a 10-a aniversare) (din 2007).","<strong>William Wyler</strong> (n. 1 iulie 1902 - d. 27 iulie 1981) a fost un regizor de film american de origine germană. Este cel mai notabil pentru regizarea filemlor Ben-Hur(1959), The Best Years of Our Lives(1946) şi Mrs. Miniver(1942), toate caştigand Premiul Oscar pentru cel mai bun regizor cat şi pentru cel mai bun film în anii respectivi. Lucrul acesta îl face pe William Wzler sa fie singurul regizor cu 3 Premii Oscar pentru cel mai bun film.","Stanley Earl Kramer (n. 29 septembrie 1913, Manhattan, New York – d. 19 februarie 2001, Woodland Hills, Los Angeles, California) a fost un regizor american și producător de filme. A fost nominalizat de numeroase ori (în 1953, 1959, 1962, 1968) pentru a obține Premiul Oscar pentru regie sau pentru cel mai bun film. El este cunoscut pentru realizarea celor mai multe filme cu mesaj ale Hollywood-ului. Printre subiectele dezvoltate de el se numară rasismul (în 'The Defiant Ones' si 'Guess Who's Coming to Dinner'), războiul nuclear (în 'On the Beach'), lăcomia (în 'It's a Mad, Mad, Mad, Mad World), creaţionism vs evoluţionism (în 'Inherit the Wind') şi cauzele si efectele fascismului (în 'Judgment at Nuremberg). ","Stanley Kubrick (n. 26 iulie 1928—d. 7 martie 1999) a fost un regizor, scenarist și producător de film american, câștigător al Premiului Oscar, care în ultimii 40 de ani ai carierei sale a locuit în Anglia. Kubrick a fost renumit prin grija cu care își alegea subiectele, metoda lentă de a lucra, varietatea de genuri pe care le-a abordat și perfecționismul său. Este de asemenea recunoscut ca unul dintre cei mai inovativi și influenți regizori de film din istoria cinematografică. A regizat o serie de filme foarte apreciate, adesea controversate, filme care au fost percepute ca o reflexie a naturii sale obsesive și perfecționiste. Filmele sale sunt caracterizate de prezența elementelor de suprarealism, expresionism, dar și a unui pesimism ironic, fiind totodată și unele dintre cele mai originale, provocative și vizionare făcute vreodată. Șapte dintre cele șaisprezece filme ale sale realizate ca regizor sunt prezente în lista IMDb Top 250.","Darryl Francis Zanuck (n. 5 septembrie 1902 - d. 22 decembrie 1979) a fost un director executiv și producător de film american care a și contribuit la scenariile filmelor pe care le-a produs. A fost co-fondator și președintele studioului 20th Century Fox din 1933 până în 1956 și apoi din 1962 până în 1971. A jucat un rol important în sistemul de studiouri de la Hollywood și de-a lungul carierei sale a acumulat 15 nominalizări la Premiile Oscar din care a câștigat trei trofee.","Carol Reed(n. 30 decembrie 1906 - d. 25 aprilie 1976) a fost un regizor de film britanic ce s-a remarcat prin cunoştinţele sale tehnice în tipul filmelor suspense-thriller. De asemenea a fost primul regizor britanic numit cavaler. În creerea filmului Agonie şi Extaz, Reed se remarca prin atenţia acordata detaliilor, reuşind sa redea una dintre cele mai precise depicţii a Italiei de la începutul secolului 16.","Franklin J. Schaffner (n. 30 mai 1920, Tokio ca Franklin James Schaffner – d. 2 iulie 1989, Santa Monica) a fost un regizor american. El a început cariera de regizor de film la televiziune prin anii 1950. Schaffner a fost distins cu mai multe premii cinematografice printre care se numără premiul Emmy acordat în anul 1960, sau premiul Oscar în anul 1971 pentru cel mai bun regizor.","Francis Ford Coppola s-a nascut pe 7 aprilie 1939 in Detroit, Michigan, SUA. Se hotaraste sa se faca artist in 1957, cand la 18 ani intra la HOFSTRA, la Arta Dramatica unde atrage atentia printr-un montaj foarte personal al piesei “Un tramvai numit dorinta “ (A Streetcar Named Desire, de Tennesse Williams). In 1960 isi ia titlul in Arta teatrala si in acelasi an se inscrie si la UCLA.","Henry Warren Beatty (n. 30 martie 1937) este un actor si director american. Acesta a fost nominalizat pentru premiul Oscar de 14 ori. 4 pentru cel mai bun actor, 4 pentru cel mai bun film, 2 pentru cel mai bun regizor, 3 pentru cel mai bun film original şi unul pentru cel mai bun scenariu adaptat. Dintre acestea el a caştigat Premiul Oscar pentru cel mai bun director pentru filmul Roşii(1981).","Richard Attenborough s-a născut la 29 august 1923 la Cambridge și era cel mai în vârstă frate din trei. Ceilați frați se numeau John și David Attenborough acesta din urmă fiind naturalist și prezentator de televiziune. Interesat de teatru încă de când era tânăr (mama sa a fost președintele Tetrului Mic din Leicester),Richard,sau 'Dickie' cum mai era numit a câștigat o bursă la Academia Regală de Artă Dramatică (RADA) și pleacă la Londra pentru a studia să devină actor la vârsta de 17 ani.","Oliver Stone (n. 15 septembrie 1946, New York) este un celebru regizor american. Scrie scenarii, dar este și producător al filmelor pe care le regizează. A devenit celebru cu un serial despre Războiul din Vietnam, la începutul anilor '90, la care el însuși a participat, ca soldat. Pentru acest film a câștigat trei premii, iar filmele sale au intrat în vizorul criticii pentru temele controversate alese. Primul premiu al Academiei Americane de film l-a câștigat pentru Midnight Express (1978). A fost descris la început de către presa de specialitate ca fiind unul dintre cei mai dedicați regizori din Cinema-ul american.","Mel Gibson (n. 3 ianuarie 1956 în Peekskill, New York) este un actor, regizor, producător și scenarist american. Una din marile sale realizări o constituie filmul Patimile lui Hristos, pe care l-a regizat și finanțat.S-a născut cu numele Mel Columcille Gerard Gibson într-o familie irlandeză catolică, împreună cu care se mută în Australia în 1968.","Steven Allan Spielberg (n. 18 decembrie, 1946, Cincinnati, Ohio) este un regizor, producător și scenarist american. Spielberg este de trei ori câștigător al premiului Oscar și este producătorul de film cu cel mai bun succes financiar al tuturor timpurilor; filmele sale având încasări de aproape 8 miliarde de dolari la nivel mondial. Revista Forbes estimează averea lui Spielberg ca fiind de aproximativ 3 miliarde de dolari. În 2006, revista Premiere l-a declarat cea mai puternică și influentă personalitate din industria filmului. La sfârșitul secolului al XX-lea, revista LIFE l-a declarat cea mai influentă persoană a generației sale.","Roman Polanski este un regizor, producător de filme, actor și scenarist cu dublă cetățenie: poloneză și franceză. S-a născut ca Rajmund Roman Liebling, fiul lui Ryszard Liebling și al lui Bula (născută Katz-Przedborska). În 1937 familia sa se întoarce în Polonia, la Cracovia, unde rămân până la începutul celui de al doilea război mondial. Din cauza originilor evreiești, familia sa este închisă în Ghetoul de la Cracovia. Tatăl său va supraviețuii, dar mama sa este ucisă în lagărul de la Auschwitz-Birkenau. Roman reușește să scape din ghetou și trăiește ascuns pe tot parcursul războiului. Primele filme le realizează în Polonia comunistă dar în anii 1960 emigrează în Franța.","Steven Allan Spielberg (n. 18 decembrie, 1946, Cincinnati, Ohio) este un regizor, producător și scenarist american. Spielberg este de trei ori câștigător al premiului Oscar și este producătorul de film cu cel mai bun succes financiar al tuturor timpurilor; filmele sale având încasări de aproape 8 miliarde de dolari la nivel mondial. Revista Forbes estimează averea lui Spielberg ca fiind de aproximativ 3 miliarde de dolari. În 2006, revista Premiere l-a declarat cea mai puternică și influentă personalitate din industria filmului. La sfârșitul secolului al XX-lea, revista LIFE l-a declarat cea mai influentă persoană a generației sale."]
		
	,
	//x1
		["Abel Gance (n. 25 octombire 1889 - 10 noiembrie 1981) a fost un regizor de film francez, scriitor şi actor. A fost un pionier în teoria şi practica montajelor, fiind cunoscut pentru trei filme mute faimoase: J'accuse(1919), La Roue(1923) şi monumentalul Napoleon (1927).","Carl Theodor Dreyer (n. 3 februarie 1889 – d. 20 martie 1968) a fost un regizor danez. A rămas orfan din naștere și a fost adoptat de o familie care îi reproșa fiecare bucată de pâine. Deprimarea și deziluzia copilăriei au devenit teme în filmele sale, alături de subiecte precum alienarea, sărăcia, femeile puternice ce sufocă prin absurda lor dominare. Primul film important a fost Patimile Ioanei D’Arc, care s-a evidențiat prin atenția acordată de Dreyer detaliului și realismului. Acest film a fost celebru la început pentru dezastrul financiar înregistrat dar și pentru gros-planurile folosite. De asemenea, ca regizor Dreyer s-a remarcat prin tirania lui, actrița Falconetti având o cădere nervoasă.","Lewis Milestone (născut Lev Milștein) (n. 30 septembrie 1895, Chișinău, Basarabia, Imperiul Rus – d. 25 septembrie 1980, Los Angeles, California, SUA) a fost un regizor de film american de origine moldoveană, câștigător al premiului Oscar de două ori pentru filmele Doi cavaleri arabi (1927) și Nimic nou pe frontul de vest (1930). ","Sir David Lean CBE (n. 25 martie 1908 – d. 16 aprilie 1991) a fost un regizor englez, producător, scenarist și editor cel mai bine cunoscut pentru realizarea unor filme epice cum ar fi The Bridge on the River Kwai (1957), Lawrence of Arabia (1962), Doctor Zhivago (1965) sau A Passage to India (1984); sau pentru ecranizarea operelor lui Charles Dickens în filme ca Great Expectations (1946) și Oliver Twist (1948).","Sir David Lean CBE (n. 25 martie 1908 – d. 16 aprilie 1991) a fost un regizor englez, producător, scenarist și editor cel mai bine cunoscut pentru realizarea unor filme epice cum ar fi The Bridge on the River Kwai (1957), Lawrence of Arabia (1962), Doctor Zhivago (1965) sau A Passage to India (1984); sau pentru ecranizarea operelor lui Charles Dickens în filme ca Great Expectations (1946) și Oliver Twist (1948).","Fred Zinnemann (n. 29 aprilie 1907, Viena, Austro-Ungaria – d. 14 martie 1997, Londra, Anglia) a fost un regizor austriaco-american. A câștigat patru premii Oscar pentru regia unor filme ca High Noon, From Here to Eternity sau A Man for All Seasons.","Gillo Pontecorvo (n. 19 noiembrie 1919 - d. 12 octombrie 2006) a fost un director de film italian. Acesta a lucrat mai mult de un deceniu în domeniu până să creeze cel mai cunoscut film al său La battaglia di Algeri (Bătălia pentru Algeria). Filmul acesta a câştigat Leul de Aur la Festivalul de Film din Veneţia în 1966.","Wolfgang Petersen (născut la 14 martie 1941 în Emden) este un regizor de film german. Principalele lui filme sunt In the Line of Fire (1993, cu Clint Eastwood, despre un psihopat care vrea să asasineze președintele SUA), Air Force One (1997, cu Harrison Ford, despre avionul președintelui Statelor Unite), The Perfect Storm (2000, cu George Clooney), Troy (2004, cu Brad Pitt, Eric Bana și Orlando Bloom, despre Războiul Troian) și Poseidon (2006, cu Kurt Russell).","Roberto Benigni (n. 27 octombrie 1952 în Manciano La Misericordia la Castiglion Fiorentino, Toscana, Italia) este un regizor și actor de film italian. Cu cel mai cunoscut film al său Viața e frumoasă, realizat în 1997 - o impresionantă și totuși o plină de candoare evocare a ororilor celui de-al Doilea Război Mondial și, nu în ultimul rând a Holocaustului -, Roberto Benigni convinge întreaga lume a cinematografiei internaționale, ca și spectatorii, fiind răsplătit în 1998 cu două Premii ale Academiei Europene de Film, dar și cu Marele premiu al juriului la Festivalul Filmului de la Cannes, iar în 1999 triumful continuă cu alte foarte onorante nominalizări, cu trei Premii Oscar și cu Premiul BAFTA pentru cel mai bun actor, care îi revine lui însuși."]
		
	,
	//x2
		["Serghei Mihailovici Eisenstein (n. 23 ianuarie 1898 — d. 11 februarie 1948) a fost un cineast rus care a revoluționat cinematografia de la începutul secolului al XX-lea prin teoria sa a montajului, pe care a concretizat-o în filme, dintre care Crucișătorul Potemkin este cel mai cunoscut. În spectacole împrumută elemente din circ și din music-hall și introduce elemente cinematografice. Odată ajuns la această forma de teatru “agitație-atracție”, Eisenstein condamnă celelalte forme de arte și moștenirea acestora cultural artistică, considerându-le de nivel meșteșugăresc.","Serghei Mihailovici Eisenstein (n. 23 ianuarie 1898 — d. 11 februarie 1948) a fost un cineast rus care a revoluționat cinematografia de la începutul secolului al XX-lea prin teoria sa a montajului, pe care a concretizat-o în filme, dintre care Crucișătorul Potemkin este cel mai cunoscut. În spectacole împrumută elemente din circ și din music-hall și introduce elemente cinematografice. Odată ajuns la această forma de teatru “agitație-atracție”, Eisenstein condamnă celelalte forme de arte și moștenirea acestora cultural artistică, considerându-le de nivel meșteșugăresc.","Mihail Kalatozov (n. 28 decembrie 1903, Tbilisi, Georgia, Imperiul Rus — d. 27 martie 1973, Moscova, U.R.S.S.) a fost un regizor de film sovietic. Peliculele sale sunt puțin cunoscute, excepție făcând Zboară cocorii (1957), considerat o capodoperă, câștigător al marelui premiu în cadrul ediției din 1958 a Festivalului Internațional de Film de la Cannes. Kalatozov a debutat în 1928. Filmele lui sunt diverse ca subiecte, însă inegale sub aspect valoric. Autorii enciclopediei Secolul cinematografului selectează doar două „realizări de excepție” din filmografia lui: Sarea Svaneției (1930) și Zboară cocorii (1957). Întreaga carieră a regizorului s-a situat între două tendințe: subiectele comandate, propagandistice și încercarea permanentă de a crea un limbaj cinematografic nou.","Sergei Appolinarievich Gerasimov (n. 21 mai 1906 - d 26 noiembrie 1985) a fost un regizor de film din URSS. Gerasimov şi-a început carierea în industria filmelor ca un actor în 1924. A jucat în filme regizate de Kozintsev şi Trauberg, cum ar fi 'The Overcoat sau 'The New Babylon'. Mai târziu i se cere să producă adaptări pentru diferite opere clasice ale realismului socialist. Printre acestea se remarcă şi 'Donul liniştit'.","Serghei Feodorovici Bondarciuk (n. 25 septembrie 1920, Bilozerka, regiunea Herson – d. 20 octombrie 1994, Moscova, Rusia) a fost un regizor de film, scenarist și actor din Ucraina (pe atunci Uniunea Sovietică). A rămas în istoria cinematografului mondial pentru ecranizarea amplă a celebrului roman Război și pace de Lev Tolstoi.","Andrei Arsenievici Tarkovski (n. 4 aprilie 1932, Zavrajie, Regiunea Kostroma, Rusia sovietică - d. 29 decembrie 1986, Neuilly-sur-Seine, lângă Paris, Franța) a fost un regizor, actor și scriitor rus. Este considerat unul dintre cei mai influenți cineaști ai erei sovietice și ai întregii istorii a cinematografiei. Este înmormântat la cimitirul ortodox din Sainte-Geneviève-des-Bois.A jucat un rol prim rang în dezvoltarea cinematografiei moderne, prin viziunea sa poetică și studiul asupra timpului în film (dezvoltat teoretic în cartea sa, Sculpting in Time). Născându-se și profesând într-un regim opresiv, Tarkovski s-a confruntat cu numeroase piedici de-a lungul carierei sale (care, de altfel, se limitează la 7 filme și câteva scurt-metraje - în 27 de ani). Cu toate că Tarkovski nu-și recunoaște intenția, câteva din filmele sale - Andrei Rubliov, Oglinda (film), Călăuza - conțin idei privite cu ostilitate de Uniunea Sovietică.","Andrei Kravchuk( n. 13 aprilie 1962 în Sankt Petersburg) a fost un regizor de film şi de televiziune în special cunoscut pentru filmul său din 2005, The Italian. Kravachuk aproape îşi terminase masterul în matematică atunci când Aleksei German şi Vladimir Vengerov i-au oferit o slujbă ca asistent de regizor pentru filmul 'We Are Going to America'(1992). La sfârşit acesta a decis să se lase de matematică şi să devina un regizor.","Fiodor Sergheievici Bondarciuk  este un regizor, actor și producător de film rus. El este fondatorul companiei Art Pictures Studio, creator al bine-cunoscutului film Compania a 9-a , care a devenit cel mai profitabil film rus de până în 2005. Filmul a câștigat 7 premii cinematografice din cele 8 nominalizări. Fiodor Bondarciuk este și producătorul filmul din 2006 Heat, în care a jucat rolul persoanei sale proprii împreună cu mama sa Irina Skobțeva. Fiodor Bondarciuk a câștigat premiul TEFI în 2003 în categoria “Cea mai bună gazdă la un show TV de divertisment”. El este câștigătorul a Premiului Vulturul de Aur în 2012 ca Cel mai bun Actor.","Serghei Mihailovici Eisenstein (n. 23 ianuarie 1898 — d. 11 februarie 1948) a fost un cineast rus care a revoluționat cinematografia de la începutul secolului al XX-lea prin teoria sa a montajului, pe care a concretizat-o în filme, dintre care Crucișătorul Potemkin este cel mai cunoscut. În spectacole împrumută elemente din circ și din music-hall și introduce elemente cinematografice. Odată ajuns la această forma de teatru “agitație-atracție”, Eisenstein condamnă celelalte forme de arte și moștenirea acestora cultural artistică, considerându-le de nivel meșteșugăresc."]
		
	,
	//x3
		["Aristide Demetriade (n. 10 iulie 1872, satul Valea Ratei, comuna Murgești, Județul Buzău - d. 21 februarie 1930, București) a fost un actor român, elev al lui Ștefan Vellescu, precum și regizor de film. A jucat la Teatrul Național din București. A fost unul dintre pionierii filmului românesc, regizând peliculele „Înșir'te mărgărite” (1911), alături de Gr. Brezeanu), „Independența României” (1912), „Scheci cu Jack Bill” (1913) și „Oțelul răzbună” (1913).","Regizorul Lucian Bratu s-a născut la 14 iulie 1924, in București, intr-o familie de evrei. A absolvit Institutul de Arte Frumoase din București in 1948 si Institutul Unional de Artă Cinematografică de la Moscova, Rusia, in 1955. Debutul ca regizor a avut loc in 1959, cu pelicula Secretul cifrului, adaptare a romanului de spionaj La miezul nopții va cădea o stea de Theodor Constantin. ","Sergiu Florin Nicolaescu(n. 13 aprilie 1930, Târgu Jiu, România – d. 3 ianuarie 2013, București, România) a fost un regizor, scenarist, actor și, după 1989, politician român. Este de departe cel mai prolific și mai vizionat regizor român din toate timpurile: 54 filme, plus 27 coproducții și peste 1 miliard de spectatori (majoritatea din China și Rusia, dar și 130 milioane de spectatori din România).Pe 30 mai 2015 Sergiu Nicolaescu a primit postum, în semn de recunoaștere și respect, o stea pe Wake of Fame (Aleea Celebrităților) din Bucuresti. Cu această ocazie, actorul Vladimir Găitan a adus un omagiu marelui regizor: 'Pe Sergiu Nicolaescu, ultraperfecționist, sever, profesionist de excepție, l-a cunoscut întreaga suflare artistică a României și, de ce nu, a Europei, să nu uităm filmele sale cu marii actori ai lumii'.","Mircea Drăgan s-a nascut la 03 octombrie 1932, intr-o zona de exploatare a ,,aurului negru’’, in comuna damboviteana Gura Ocnite.In 1955 absolvea ca sef de promotie sectia Regie de la Institutul de Artă Teatrală și Cinematografică București.A debutat in 1957, cu filmul ,,Dincolo de Brazi’’. Acest film a fost regizat de Mircea Dragan impreuna cu Mihai Iaco si tot impreuna au scris si scenariul.In 1960 a aparut ,,Setea’’, dupa romanul lui Titus Popovici, apoi ,,Lupeni 29’’, in 1962.Din 1964 a inceput sa predea arta regizorala la IATC, la sectia de regie film, devenind mai tarziu rector al acestei institutii.","Sergiu Florin Nicolaescu(n. 13 aprilie 1930, Târgu Jiu, România – d. 3 ianuarie 2013, București, România) a fost un regizor, scenarist, actor și, după 1989, politician român. Este de departe cel mai prolific și mai vizionat regizor român din toate timpurile: 54 filme, plus 27 coproducții și peste 1 miliard de spectatori (majoritatea din China și Rusia, dar și 130 milioane de spectatori din România).Pe 30 mai 2015 Sergiu Nicolaescu a primit postum, în semn de recunoaștere și respect, o stea pe Wake of Fame (Aleea Celebrităților) din Bucuresti. Cu această ocazie, actorul Vladimir Găitan a adus un omagiu marelui regizor: 'Pe Sergiu Nicolaescu, ultraperfecționist, sever, profesionist de excepție, l-a cunoscut întreaga suflare artistică a României și, de ce nu, a Europei, să nu uităm filmele sale cu marii actori ai lumii'.","Sergiu Florin Nicolaescu(n. 13 aprilie 1930, Târgu Jiu, România – d. 3 ianuarie 2013, București, România) a fost un regizor, scenarist, actor și, după 1989, politician român. Este de departe cel mai prolific și mai vizionat regizor român din toate timpurile: 54 filme, plus 27 coproducții și peste 1 miliard de spectatori (majoritatea din China și Rusia, dar și 130 milioane de spectatori din România).Pe 30 mai 2015 Sergiu Nicolaescu a primit postum, în semn de recunoaștere și respect, o stea pe Wake of Fame (Aleea Celebrităților) din Bucuresti. Cu această ocazie, actorul Vladimir Găitan a adus un omagiu marelui regizor: 'Pe Sergiu Nicolaescu, ultraperfecționist, sever, profesionist de excepție, l-a cunoscut întreaga suflare artistică a României și, de ce nu, a Europei, să nu uităm filmele sale cu marii actori ai lumii'.","Sergiu Florin Nicolaescu(n. 13 aprilie 1930, Târgu Jiu, România – d. 3 ianuarie 2013, București, România) a fost un regizor, scenarist, actor și, după 1989, politician român. Este de departe cel mai prolific și mai vizionat regizor român din toate timpurile: 54 filme, plus 27 coproducții și peste 1 miliard de spectatori (majoritatea din China și Rusia, dar și 130 milioane de spectatori din România).Pe 30 mai 2015 Sergiu Nicolaescu a primit postum, în semn de recunoaștere și respect, o stea pe Wake of Fame (Aleea Celebrităților) din Bucuresti. Cu această ocazie, actorul Vladimir Găitan a adus un omagiu marelui regizor: 'Pe Sergiu Nicolaescu, ultraperfecționist, sever, profesionist de excepție, l-a cunoscut întreaga suflare artistică a României și, de ce nu, a Europei, să nu uităm filmele sale cu marii actori ai lumii'.","Liviu Ciulei ( Ioan Liviu, n. 7 iulie 1923, București, România - d. 25 octombrie 2011, München, Germania) a fost un regizor, actor, scenograf, arhitect și profesor universitar român. A studiat teatrul la Conservatorul Regal de Muzică și Teatru din București (1946), apoi arhitectura (1949). A debutat ca actor în 1945, la Teatrul Mic în piesa Încătușarea, după piesa Animal Kingdom scrisă de Philip Barry; ulterior s-a alăturat echipei Teatrului Municipal din București, (mai târziu numit Teatrul Bulandra), unde a debutat ca regizor în 1957, punând în scenă Omul care aduce ploaia de Richard Nash. În 1961 a devenit celebru pentru o punere în scenă total originală a piesei Cum vă place a lui Shakespeare. A mai montat printre altele Opera de trei parale (Bertolt Brecht), O scrisoare pierdută (Ion Luca Caragiale), Azilul de Noapte (Maxim Gorki), Leonce și Lena (Georg Büchner), Elisabeta I (Paul Foster).","Mircea Drăgan s-a nascut la 03 octombrie 1932, intr-o zona de exploatare a ,,aurului negru’’, in comuna damboviteana Gura Ocnitei. In 1955 absolvea ca sef de promotie sectia Regie de la Institutul de Artă Teatrală și Cinematografică București. A debutat in 1957, cu filmul ,,Dincolo de Brazi’’. Acest film a fost regizat de Mircea Dragan impreuna cu Mihai Iaco si tot impreuna au scris si scenariul. In 1960 a aparut ,,Setea’’, dupa romanul lui Titus Popovici, apoi ,,Lupeni 29’’, in 1962. Din 1964 a inceput sa predea arta regizorala la IATC, la sectia de regie film, devenind mai tarziu rector al acestei institutii. A scris scenarii pentru filmele regizate de el, in special in colaborare cu Nicolae Tic, Eugen Mandric, Ioana Postelnicu."]
		
	

];		
var regizorimg=[

	//x0
		["url(http://imgur.com/8eGNhiK.jpg)","url(http://imgur.com/8eGNhiK.jpg)","url(http://imgur.com/u87OvgP.jpg)","url(http://imgur.com/nmVN4aC.jpg)","url(http://imgur.com/ZIsbQp9.jpg)","url(http://imgur.com/qsRPbND.jpg)","url(http://imgur.com/qxUqeCf.jpg)","url(http://imgur.com/pdRmQAq.jpg)","url(http://imgur.com/CkyQ4W7.jpg)","url(http://imgur.com/s8clthC.jpg)","url(http://imgur.com/3qAjRsK.jpg)","url(http://imgur.com/02xSN3B.jpg)","url(http://imgur.com/24oi7MV.jpg)","url(http://imgur.com/wF17ODC.jpg)","url(http://imgur.com/1SuDfOW.jpg)","url(http://imgur.com/niNB87g.jpg)","url(http://imgur.com/bIvQCkA.jpg)"]
		
	,
	//x1
		["url(http://imgur.com/hTAefIz.jpg)","url(http://imgur.com/rHQHhrM.jpg)","url(http://imgur.com/pizpjze.jpg)","url(http://imgur.com/skNE7j3.jpg)","url(http://imgur.com/7Xg9xjG.jpg)","url(http://imgur.com/8LH00HI.jpg)","url(http://imgur.com/dLGU8lr.jpg)","url(http://imgur.com/IGsh8fO.jpg)","url(http://imgur.com/eRCdEKn.jpg)"]
		
	,
	//x2
		["url(http://imgur.com/vlloUQU.jpg)","url(http://imgur.com/vlloUQU.jpg)","url(http://imgur.com/5xGpr7m.jpg)","url(http://imgur.com/TH7Pung.jpg)","url(http://imgur.com/XIoYU9g.jpg)","url(http://imgur.com/nZo4Q2l.jpg)","url(http://imgur.com/yugVCtL.jpg)","url(http://imgur.com/6wCnrxx.jpg)","url(http://imgur.com/vlloUQU.jpg)"]
		
	,
	//x3
		["url(http://imgur.com/jldSzAY.jpg)","url(http://imgur.com/phI4LRM.jpg)","url(http://imgur.com/JUz69YA.jpg)","url(http://imgur.com/jDuanmJ.jpg)","url(http://imgur.com/mG3wIuh.jpg)","url(http://imgur.com/mG3wIuh.jpg)","url(http://imgur.com/mG3wIuh.jpg)","url(http://imgur.com/f01v6Dd.jpg)","url(http://imgur.com/MxWCR4J.jpg)"]
		
	

];
var stiaticac=[

	//x0
		["<p>...Ku-Klux-Klan-ul are trei apariţii in perioade de ani diferite? Prima in 1865-1870, cu 500.000 de membrii, a doua în 1915-1944, cu 3.000.000-6.000.000 de membrii (atingând apogeul în perioada 1924-1925) şi a treia din 1946 până în prezent, având un numar de membrii scazut, între 5.000 şi 8.000</p><p>...Abraham Lincoln era pe cale să fie asasinat atunci când se întorcea la casa sa dintr-o zonă rurală a Washington DC, când cineva a încercat să-l împuşte, însă asasinul a nimerit doar pălăria? Toate acestea se întâmplau cu 8 luni înaintea asasinării sale</p> <p>...la 20 de ani după Războiul de secesiune, rata divorţurilor a crescut cu 50%?</p>","<p>...între anii 1524 şi 1648 au avut loc numeroase războaie în toată Europa între creştinii catolici şi cei protestanţi? Totalul creştinilor morţi rezultat din aceste războaie este de aproximativ 5.750.000</p><p>..căderea Babilonului a fost profeţită prin inscripţia scrisă de o mână invizibilă pe zidurile sălii de ospăţ a lui Baltazar, ultimul rege al Babilonului, pe cînd Cirus se afla la porţile oraşului şi pe care profetul Daniel a tălmăcit-o astfel: mene 'zilele lui Baltazar sînt numărate', techel 'el cîntăreşte puţin în balanţă', fares (ufrasin) „regatul său va fi împărţit între mezi şi perşi'. Avertisment împotriva unui pericol grav şi iminent. /expr. ebr. 'cîntărit, numărat, împărţit'.</p>","<p>...din cei 620.000 de soldaţi ucişi, două treimi din ei au murit din cauza bolilor? Cauzele majore ale deceselor le reprezintă cunoştinţele medicale limitate ale vremii şi condiţiile de trai improprii ale soldaţilor.</p><p>...a mai avut loc un incendiu în Atlanta, în anul 1917, de data aceasta cu daune mai mari decât cel din 1864? Cauzele incendiului rămân necunoscute, iar daunele au fost de 5 milioane de dolari ( echivalentul a 93 de milioane de dolari în zilele noastre)</p>","<p>...unii conducători ai carelor de luptă erau pregătiţi încă din copilărie? Majoritatea deveneau 'star-uri' în adolescenţă.</p><p>...Circus Maximus a fost cel mai mare stadion pentru curse de care de luptă? Acesta se afla în Roma şi putea să asigurile locuri pentru aproximativ 250.000 de spectatori.</p>","<p>...al Treilea Război Mondial era pe cale să înceapă atunci când un submarin sovietic urma să tragă cu torpile nucleare împotriva americanilor? Acest lucru a fost evitat de către Vasili Arkhipov, un ofiţer al Marinei Sovietice, care a refuzat ordinul căpitanului său de a folosi armele nucleare.</p><p>...iarna nucleară este prezisă a fi un efect climatic rezultat dintr-un conflict nuclear? Se presupune, în teorie, că iarna nucleară ar fi o vreme rece și extremă. Razele solare ar fi reduse pentru o perioadă de luni sau ani din cauza detonării unui număr mare de arme nucleare, în special deasupra unor obiective inflamabile, cum ar fi orașe, unde cantități mari de fum și de funingine ar fi ejectate în stratosfera Pământului. </p>","<p>...dorind să ajungă în Sicilia și să o elibereze de dominația romană, Spartacus convinge niște pirați să-l treacă în Sicilia? Însă aceștia îl înșală, pregătesc un atentat asupra lui cu ajutorul soldaților romani, și pleacă în zorii zilei.</p><p>...în timpul evadării, Spartacus şi ceilalţi sclavi au capturat o căruţă cu arme pentru gladiatori? Aceste arme nu erau pentru uz militar, însă cu ajutorul acestora au reuşit să învingă trupele trimise iniţial pentru capturarea celor 70 de sclavi.</p>","...în lunile care au precedat invazia, Aliații au pus la punct o amplă acțiune de diversiune, „Operațiunea Bodyguard”, concepută să-i convingă pe germani că zonele de debarcare sunt altele decât Normandia, ci mai degrabă Peninsula Balcanică, sau sudul Franței? În săptămânile care au precedat invazia, pentru a-i convinge pe germani că principala zonă de invazie va fi Pas de Calais și că o a doua zonă de invazie va fi Norvegia, Aliații au conceput un alt plan de diversiune, „Operațiunea Fortitude”. Operațiunea Fortitude Nord trebuia să-i convigă pe germani că Aliații aveau să debarce în Norvegia, iar Operațiunea Fortitude Sud trebuia să-i convingă pe germani că atacul principal avea să fie dat în Pas de Calais. Obiectivul acestei operațiuni de diversiune era acela de a bloca forțele germane departe de Normandia.</p><p>...în primă fază, crezând că invazia este doar o diversiune pentru a facilita un atac de la nord de râul Sena, Hitler a refuzat să mobilizeze diviziile de blindate aflate în apropiere pentru organizarea unui contraatac împotriva  forţelor Aliaţilor</p>","<p>...Michelangelo s-a facut cunoscut pentru prima oara datorita unei înşelătorii? Acesta a sculptat o statuie pe care ulterior a tratat-o cu acid, pentru a o face să arate antică. A vandut-o unui comerciant, care a vandut-o şi el în cele din urma Cardinalului Riario din San Georgio. Auzind zvonuri despre falsul primit acesta l-a chemat pe Michelangelo să-i dea banii înapoi. Cardinalul a fost totuşi uimit de talentul acestuia încât îl invita pe Michelangelo la Roma.</p><p>...între 1527-1529 Michelangelo a luat o pauză de la artă şi a intrat în armată? Acesta apăra Florenţa, lucrând pe post de inginer, creând fortificaţii pentru oraş.</p>","<p>...Patton a fost folosit drept momeală în timpul Debarcării în Normandia? Generalul Dwight Eisenhower credea că Patton este prea nedisciplinat pentru a conduce invazia Normandiei, însă germanii îl considerau cel mai bun general al americanilor. Eisenhower l-a pus pe Patton în fruntea unei divizii fantomă dotată cu tancuri de cauciuc şi avioane de lemn în sudul Angliei, pentru a părea că aliaţii vor ataca Pas de Calais.","<p>...numeroase studii arată că mulţi dintre veteranii războiului din Vietnam au suferit într-un moment sau altul de sindrom de stres post-traumatic? Un alt studiu arată ca majoritatea încă sufera la 25 de ani dupa incident.</p><p>...asul de inimă neagră este de obicei asociat cu moartea? Acest lucru a fost folosit de către americani în Războiul din Vietnam. Aceştia lăsau cartea în preajma corpurilor soldaţilor inamici pentru a-i înfricoşa pe cei rămaşi.</p>","<p>...Revoluţia bolşevică se mai numeşte şi Revoluţia din Octombrie? Chiar dacă se numeşte Revoluţia din Octombrie, aceasta a avut de fapt loc între 7 noiembrie şi 8 noiembrie 1917.</p><p>...o urmare a Revoluţiei bolşevice a fost aceea că Estonia, Latvia şi Lituania şi-au declarat independenţa?</p>","...exista o taxă pe sare impusă indienilor de către britanci? Ca răspuns, în 1930 Gandhi a protestat într-un 'marş al sării' în care el împreună cu un număr mare de alţi indieni au mers o distanţă de 241 de mile până la mare, unde şi-au fabricat singuri sare din apa sărată.</p><p>...în timp ce Marea Britanie exploata India, între 15 şi 29 milioane de indieni sunt estimaţi a fi murit din cauza foametei?","<p>...bombele căzute pe Vietnamul de Nord au întrecut cantitatea celor căzute pe Germania, Italia şi Japonia în Al doilea Război Mondial? O cantitate de 2.057.244 de tone de bombe a căzut pe forţele Axei în cel de-al doilea război mondial, iar pe Vietnamul de Nord a căzut o cantitate de 7.078.032 tone.</p><p>...forţele Vietnamului de Nord obişnuiau să amplaseze numeroase capcane în junglă? Un procent de 11% din morţi şi 15% din răniţi au fost rezultatul acestor capcane.","<p>...sabia cu care a luptat William Wallace încă există? Aceasta se află la National Wallace Monument în Stirling, şi este presupusă a fi folosită în Bătălia de la Stirling Bridge şi în Bătălia de la Falkirk</p><p>...bătălia de la Bannockburn a fost caştigată de către scoţieni chiar daca englezii aveau avantajul numeric? Aceştia i-au înfrânt pe englezii în număr de 13.700-25.000 cu doar 5.000-10.000 de soldaţi.","<p>...în Statele Unite ale Americii există o procedură prin care te poti întoarce acasă dacă ceilalţi fraţi ai tăi au murit în luptă?</p><p>...filmul 'Salvaţi soldatul Ryan' este inspirat dintr-o întâmplare reală? Este vorba despre povestea fraţilor Niland. 2 dintre ei au murit în acţiune, unul a fost dat dispărut şi presupus mort, iar ultimul a fost trimis înapoi acasă.</p> ","...în lagărele naziste au fost ucişi aproximativ 11.000.000 de copii, bărbaţi si femei? Mai mult de jumătate din aceştia erau evrei.</p><p>...primul lagăr de concentrare construit era în Dachau? Aici cercetătorii nazişti au căutat căi prin care se putea opri sângerarea rănilor cauzate de gloanţe. Aceştia administrau chimicale prizonierilor, dupa care îi împuşcau în diferite părţi ale corpului. Majoritatea prizonierilor mureau la scurt timp după aceste experimente.","<p>...Oskar Schindler obişnuia să ascundă evrei în Farbrica de email din Cracovia? Fabrica sa era esenţială în război aşa că le justifica autorităţilor prezenţa evreilor prin pretextul că forţa lor de muncă este necesară."]
	,
	//x1
		["<p>...înainte ca Napoleon să vină la putere, în toată Europa călăreţii călăreau pe partea stângă a drumului. Acest lucru le permitea să ţină mâna dreaptă pe sabie, ceea ce îi făcea capabili să atace direct în caz de pericol. Pentru că împăratul considera că acesta era un mod învechit de a lupta, a decis să schimbe sensul de a călători de pe partea stângă pe partea dreaptă a drumului, pentru a-şi surprinde inamicii. Acest mod de a călători s-a răspândit în toate ţările cucerite. Doar Marea Britanie, ce nu a fost niciodată cucerită, încă mai conduce pe partea stângă a drumului.</p><p>...cu toate că Napoleon era foarte bun la jocurile războiului fiind un strategist strălucit, nu era un bun jucător de şah. În timpul campaniei de la Wagram, acesta s-a oprit pentru puţin timp la Schonbrunn. Acolo a jucat o partidă de şah împotriva unui automat care l-a bătut foarte uşor, umilindu-l fără nici o greutate. Automatul era creat de inginerul austriac Von Kempelen. În 1834 s-a descoperit că în automatul respectiv juca un om de statură mică, care era ajutat de un sistem complicat de oglinzi. Napoleon a murit fără să ştie că nu a fost bătut de o maşinărie, ci de un om adevărat.</p>","<p>...Ioana d'Arc a fost comandant al armatei franceze? Chiar dacă aceasta a condus armata franceză, ea nu a luptat corp la corp în război.Ea totuşi acompania armată pentru a îi face pe soldaţi mai încrezători.</p><p>...au existat diferite profeţii ce precizeau salvarea Franţei de o tânără din Lorraine? Întâmplarea face ca şi Ioana d'Arc să fie venită din regiunea Lorraine, iar aceste profeţii să existe înainte ca ea să fie născută.","<p>...Paul Kern a fost un soldat ungur ce nu a mai putut dormi restul vieţii după ce a fost împuşcat? Acesta a fost împuşcat în lobul frontal de catre un soldat rus în timpul Primului Război Mondial.</p><p>...chimioterapia a fost creată cu ajutorul unei arme chimice folosite în război de către germani? Arma chimică era iperita, cunoscută și cu numele de gaz muștar, un agent chimic foarte persistent, al cărui efect durează mai multe zile și, prin aceasta, cu un efect demoralizant asupra trupelor adversare.</p> ","<p>...chiar dacă era bombardată constant, calea ferată a morţii continua să funcţioneze? Aceasta continua să fie reparată de prizonierii de război ai japonezilor chiar şi după ce au terminat-o de construit.</p>","<p>...armata britanică a ascuns orice imagine a lui Thomas Edward Lawrance în timpul războiului? Acest lucru este datorat faptului că turcii au pus o recompensă pe capul său. Imaginea sa a fost făcută publică în Marea Britanie abia în 1919.</p><p>... T. E. Lawrence iubea viteza? Este estimat că acesta avea aproape 100 de mile pe secundă pe motocicleta sa în timpul accidentului său fatal. Accidentul acesta a scos în evidenţă necesitatea purtării căştilor de protecţie.</p>","<p>...regele Henry al VII-lea a avut 6 soţii? Acesta îşi dorea un fiu care să îl urmeze la tron, iar unele dintre aceste soţii nu au reuşit să-i ofere unul. Singura care a reuşit sa-i ofere un fiu a fost Jane Seymour, care a murit la 12 zile după ce l-a născut pe Edward al VI-lea.</p>","...costurile materiale şi umane ale războiului au fost ameţitoare? Pierderile francezilor au depasit 100.000, ale Algeriei 250.000 de oameni, iar alţi 1,8 milioane au fost fugit în Franţa. Un număr de 150.000 de musulmani pro-francezi au căzut ca victime ale Frontului de Eliberare Naţională până la încheierea armistiţiului.</p>","...dupa pierderea Primului Război Mondial, Germania a fost silită să predea toate submarinele? În conformitate cu armistiţiul semnat  în noiembrie 1918, Germania era obligată să predea toate submarinele sale britanicilor şi  în plus, să distrugă sau să dezmembreze submarinele aflate în faza de construcţie. Aceste obligaţii au fost ulterior trecute în articolele 188, 189 şi 191 al Tratatului de pace de la Versailles. Submarinele ce se aflau în dotarea Kaiserliche Marine(marina imperială germană) au ajuns să fie distribuite Marii Britanii, SUA, Franţei, Italiei şi Japoniei, unde au ajuns să fie subiectul unor studii intense.</p>","<p>...printre experimentele făcute de nazişti la Auschwitz se  numărau injectarea unor substanţe chimice direct în ochii copiilor în încercarea de a le schimba culoarea, diverse amputări de membre şi alte operaţii brutale? Un alt experiment monstruos a fost introducerea deţinuţilor în cazane cu apă fierbinte pentru a vedea până la ce temperatură rezistă omul înainte să moară.</p>"]
		
	,
	//x2
		["<p>...duminica însângerată a fost un incident petrecut pe 22 ianuarie 1905 (9 ianuarie conform calendarului iulian folosit la acea vreme în Imperiul Rus), în timpul căruia demonstranții pașnici, neînarmați, care doreau să înmâneze o petiție țarului Nicolae al II-lea au fost împușcați de gărzile imperiale în Sankt Peterburg? Marșul fusese organizat de preotul Gapon, un agent provocator aflat pe ștatele de plată ale Ohranei – poliția secretă țaristă. Evenimentele din duminică însângerată au reprezentat o greșeală grosolană a Ohranei, având uriașe repercusiuni asupra regimului țarist. În ciuda consecințelor acestei acțiuni, tarul nu a fost niciodată considerat răspunzător pentru aceste evenimente, la vremea protestului nefiind în capitală.</p>","...între 1547 şi 1552, Ivan s-a lansat într-o serie de campanii împotriva tătarilor, lăsând Moscova în grija mitropolitului Bisericii Ortodoxe Ruse, Macarie? A reuşit să slăbească puterea invadatorilor şi a anexat la Rusia teritoriile lor de pe malurile fluviului Volga. Întorcându-se triumfător în capitală, le-a spus boierilor: „Acum nu mă mai tem de voi!“ Şi, din acel moment, a început să guverneze ca un autocrat.</p><p>...la 12 ani, Ivan obişnuia să arunce de pe ceardacurile caselor boiereşti şi turlele bisericilor câini şi alte vietăţi, de le frângea oasele, iar la 15 ani, împreună cu o ceată de călăreţi călcau în picioarele cailor trecătorii de pe uliţele Moscovei?</p><p>...foametea ucraineană (1932-1933), cunoscută și ca Holodomor, a fost una dintre cele mai grave catastrofe naționale ale ucrainenilor din istoria modernă, cu un număr de morți estimat la câteva milioane? În timp ce foametea din Ucraina a fost parte a unei foamete care a afectat și alte regiuni ale Uniunii Sovietice, prin Holodomor se înțeleg strict evenimentele care au afectat teritoriile locuite de etnicii ucraineni. Cercetătorii sunt de acord că foametea a fost cauzată mai degrabă de politica agricolă a guvernului sovietic și a lui Stalin decât din cauze naturale, iar Holodomorul este denumit și „genocidul ucrainean”.</p>","...numele de cod al Operațiunii Barbarossa vine de la numele împăratului romano-german Frederic Barbarossa (1122 - 1190) al Sfântului Imperiu Roman?</p><p>...cauza principală a înfrângerii de proporții a Armatei Roșii la începutul campaniei a fost atacul surpriză al germanilor pentru care sovieticii erau slab pregătiți? Armata germană era în 1941 cel mai bine antrenată și experimentată din lume. Germanii aveau o doctrină militară avansată și un moral foarte ridicat, după o serie de victorii obținute cu foarte puține pierderi. Prin contrast, forțele armate sovietice duceau lipsă de cadre de conducere competente, de pregătire corespunzătoare și de entuziasm.","<p>...Ţarul Rusiei avea o poliţie secretă? Aceasta se numea Ohrana. A fost înființată în vederea luptei împotriva terorismului politic și a activității revoluționare . Ohrana avea sucursale în toate regiunile Imperiului Rus, cât și o serie de birouri care funcționau în afara granițelor, care aveau ca sarcină principală monitorizarea activităților revoluționarilor ruși din exil. Una dintre cele mai importante secții externe ale Ohranei a fost cea din Paris</p><p>...a existat şi o Armată Verde? A funcționat pe durata războiului civil rus, își avea originile în mișcările apolitice anarhiste sau naționaliste, și au format 'a treia forță' în conflict atât cu Roșii cât și cu Albii. Uneori puteau fi numiți și Armata Neagră. Până la sfârșitul anului 1920, Verzii s-au autodizolvat: unii dintre ei au devenit parte a Armatei Roșii (Roșii-Verzi), alții au intrat în rândurile Armatei Albe (Albii-Verzi).","<p>...pierderile Uniunii Sovietice în cel de-al Doilea Război Mondial sunt de obicei estimate ca fiind peste 20 milioane, atât civili cât și militari? Cele mai multe dintre pierderi au avut loc după 22 iunie 1941, când Germania Nazistă a invadat URSS.</p><p>...80% din bărbaţii născuţi în 1923 în URSS nu au supravieţuit cel de-al Doilea Război Mondial?</p>","<p>...un crater de pe planeta Mercur este numit Rubliov, după pictorul de icoane rus Andrei Rubliov? Acesta are diametrul de 132 de km.</p><p>...În 1918 au fost descoperite la Zvienigorod unele opere atribuite lui Rubliov? Au fost găsite fragmente de frescă în Biserica Adormirii Maicii Domnului şi în magazia de lemne de lângă biserică - trei icoane din ciclul Deisis.","...Kolceak este condamnat la moarte de catre bolsevici? Dupa ce este tradat de comandantul Legiunii Cehoslovace si de seful misiuni militare franceze – a fost scos la miezul noptii 6 spre 7 februarie din celula si impuscat, cadavrul scufundat sub gheata unui rau din apropriere</p><p>...Armata Rosie nu era una divizata, precum cea a Albilor, ci era una singura? Rosii aveau un comandament militar unic care actiona la directivele unei oligarhii politice. Aveau avantajul ca controlau centrul fostului Imperiu Rus, in timp ce adversari lor actionau in teritorii periferice. Teritoriul controlat de ei era mult mai populat si, in conscinta aveau mai multe efective decat Albi. Raportul de forte era de 2 la 1 si uneori chiar de 4 ori mai mare in favoarea Armatei Rosii, care avea deasemenea si mai mult armament.","<p>...încă nu se ştie exact numarul exact al pierderilor sovieticilor? Lipsa unor date mai exacte este datorată și refuzului guvernului sovietic de atunci de a calcula pierderile din cauza temerilor că sacrificiile ar fi părut prea mari și ar fi demobilizat eforturile de război.</p><p>...forțele Axei au pierdut aproximativ un sfert din efectivul total de pe frontul de răsărit? Aceştia nu și-au mai revenit niciodată de pe urma acestei înfrângeri.</p><p>...numărul total al pierderilor de vieți umane este estimat la aproximativ 3 milioane?","<p>.... cea mai cunoscută secvenţă din film este „bătălia de pe gheaţă”? Aceasta a constituit un prototip pentru alte scene de bătălie din cinematografia mondială (de exemplu, bătălia de la Azincourt din Henric V regizat de Laurence Olivier sau bătălia finală din Spartacus regizat de Stanely Kubrick).</p><p>...există biserici numite după Alexandr Nevsky în Estonia, Rusia şi Bulgaria? De asemenea există şi decoraţii date ofiţerilor ce şi-au arătat abilitatea de a comanda pe câmpul de luptă atât în URSS cât şi în Rusia din ziua de azi.</p>"]
		
	,
	//x3
		["<p>...Cuza a fost obligat să abdice în anul 1866? Acesta a fost obligat de către o largă coaliție a partidelor vremii, denumită și Monstruoasa Coaliție, din cauza orientărilor politice diferite ale membrilor săi, care au reacționat astfel față de manifestările autoritare ale domnitorului.</p><p>...Monstruoasa Coaliţie a apărut în ianuarie 1863 şi era formată din liberalii radicali (conduşi de Ion C. Brătianu şi C.A. Rosetti) şi din conservatori (care reprezentau interesele marilor proprietari funciari).  În 1866, coaliția a dat o lovitură de stat. În noaptea de 23 februarie au intrat în dormitorul lui Alexandru Ioan Cuza și l-au forțat să abdice și să părăsească țara. Pe actul iscălit de Cuza scria: „Noi, Alexandru Ioan I, conform dorinței națiunii întregi și angajamentului ce am luat la suirea pe Tron, depun astăzi, 11 februarie 1866, cârma guvernului în mâna unei Locotenențe Domnești și a Ministrului ales de popor“.","<p>... în filmul artistic Tudor rolul fiului domnitorului Şuţu este interpretat de Marian Niţă, care ulterior a fost profesor de biologie la Colegiul Naţional „Carol I” din Craiova? Reputatul profesor Marian Niţă este binecunoscut pentru activitatea la catedră şi pentru prodigioasa operă scrisă publicată. </p>","<p>... dacii practicau sacrificiile umane? În filmul Dacii este reprezentat acest obicei, la care face referire istoricul grec. Herodot. Acesta relatează că din când în când zeităţii supreme Zalmoxis îi erau trimişi mesageri dintre cei mai vrednici bărbaţi prin aruncarea lor în suliţi. Obicei crud, dar practica sacrificiilor umane nu este întâlnită doar la geto-daci, ci şi la alte popoare din antichitate (la celţi, fenicieni etc).</p>","<p>... Dacia era foarte bogată? Un mare istoric francez, Jerome Carcopino, a calculat cantitatea de aur şi de argint pe care au pus mâna romanii când au cucerit Dacia: 165 tone de aur şi 330 tone de argint.Utilizând prada dacică, după victoria romanilor au avut loc mari sărbători la care au participat toţi locuitorii Romei şi care au ţinut 123 de zile, fără întrerupere! Cu banii obţinuţi din prada dacilor, Traianus a iniţiat construirea unor monumente splendide şi de mari dimensiuni. Cel mai faimos este complexul de clădiri care au constituit Forum-ul lui Traianus. Acolo era o bibliotecă cu scrieri în limba greacă şi alta cu scrieri în latină, o bazilică, un portic etc. Columna înaltă de peste 30 de metri, trebuia să marcheze cât din dealul din apropiere a fost săpat ca să facă loc suprafeţei de teren pe care să fie ridicat forum-ul. Şi toate construcţiile erau făcute din materiale scumpe: marmură, bronz aurit...</p><p>... tezaurul dacic a fost jefuit de romani în urma trădării omului de încredere al lui Decebal, Bicilis (care în film este numit Bastus)? Tezaurul fusese îngropat sub albia râului Sargetia (neidentificat). Fiind prins de romani, Bicilis a dezvăluit unde era ascunsă fabuloasa comoară.</p>","... Puţine personaje ale istoriei românilor s-au bucurat în timpul vieţii de o faimă mai mare ca aceea a lui Mihai Viteazul? Era vremea în care apăreau cele dintâi ziare în Italia (numite Avvisi); acele ziare relatau cu admiraţie faptele de vitejie ale marelui domnitor. Broşuri despre Mihai Viteazul au apărut şi în Germania, Franţa, Ţările de Jos. Dramaturgul spaniol Lope de Vega a făcut din Mihai un personaj al unei piese de teatru. Atât de mare a fost faima domnului, încât la 100 de ani de la moartea sa, evenimentele domniei sale erau zugrăvite în lucrări apărute în apusul Europei (în manual sunt două imagini tipărite la circa un secol după moartea eroului). Figura lui Mihai apare şi în cântece populare din Balcani (Macedonia, Bulgaria) etc","<p>... titlul lui Mircea cel Bătrân din 1406 reflectă maxima întindere teritorială a Ţării Româneşti? „Eu, Io Mircea mare voievod şi domn singur stăpânitor a toată ţara Ungrovlahiei şi al părţilor de peste munţi, încă şi spre părţile tătăreşti şi herţeg al Amlaşului şi Făgăraşului şi domn al Banatului Severinului şi de amândouă părţile peste toată Podunavia, încă până la Marea cea Mare şi singur stăpânitor al cetăţii Dârstor.”</p><p>... Mircea cel Bătrân a fost şi ctitorul unuia din monumentele de artă medievală cele mai vestite, mânăstirea Cozia (1388)?</p>","<p>... personajul Peneş Curcanul, întâlnit în poeziile lui Vasile Alecsandri dedicate Războiului de Independenţă, a fost inspirat din viaţa unui erou al acestui război, Constantin Ţurcanu (1854-1932). În timpul războiului de Independenţă din anul 1877, Constantin Ţurcanu, cu gradul de sergent, a luat parte la luptele de la Griviţa 1 şi 2. Datorită faptelor de arme deosebite, la 28 august 1877, Constantin Ţurcanu a fost decorat cu ordinul „Steaua României”. La sfarsitul razboiului, sergentul Constantin Turcan fusese decorat cu “Trecerea Dunarii, “Aparatorii independentei”, “Medalia comemorativa rusa”. In mod cu totul exceptional i se acordase “Steaua Romaniei” care era rezervata exclusiv ofițerilor.  A luat apoi parte la cel de al Doilea război balcanic,în 1913 la vârsta de 57 de ani.In timpul primului război mondial, deşi în vârstă de 62 de ani, a cerut să fie trimis pe front, ca voluntar. S-a prezentat astfel pe frontul din Oituz, fiind prezent mereu în mijlocul militarilor tineri. . Cu unitatea lui se afla printre cei care in batalia de la Oituz au oprit inaintarea germanilor. La sfârşitul războiului, alături de decoraţiile din 1877-1878, eroul Constantin Ţurcanu a primit alte decoraţii: „Virtutea Militară”, cl. I, “Medalia serviciului credincios”, cl. I, iar în 1931 i s-a conferit medalia „Mihai Viteazul” şi „Virtutea Militară”. ”. In afara de aceste distinctii romanesti, Constantin Țurcanu a mai primit “Crucea italiana de razboi” si medaliile poloneze “Crucea vitejilor” si “Crucea de razboi”.</p>","<p>... Liviu Rebreanu, după a cărui carte s-a turnat filmul Pădurea spânzuraților, a fost inspirat de o fotografie pe care a văzut-o în 1918 și care înfățișa o pădure cu cehi spânzurați de autoritățile austro-ungare pe frontul italian?</p><p>... Liviu Rebreanu a expus în romanul Pădurea spânzuraților destinul fratelui său Emil, care adus fiind pe frontul românesc în cadrul trupelor austro-ungare, a încercat să treacă liniile la armata română, dar a fost prins și executat prin spânzurare?</p>","<p>... bătălia de la Vaslui este cunoscută și ca bătălia de la Podul Înalt?</p><p>...cronicarul polon Jan Dlugosz nota că „Foarte puțini turci și-au putut găsi mântuirea prin fugă, căci, mulți s-au înecat în apa Siretului, chiar și aceia care au scapat și au ajuns până la Dunăre, au fost uciși acolo de moldoveni care aveau cai mai iuți, sau au fost înecați”? Victoria asupra otomanilor a fost atât de categorică, încât mama sultanului Mehmed II spunea că „Niciodată o oaste turcească n-a mai suferit o astfel de înfrângere”.</p>"]
		
	

];
var dictionarist=[

	//x0
		["<p><span>Războiul de secesiune</span> = un conflict politic și militar de patru ani (1861–1865) dintre Uniunea sau Statele din Nord ale Statelor Unite ale Americii și Statele din Sud, care au părăsit pe rând Uniunea în 1860–1861, alcătuind entitatea statală federală denumită Statele Confederate ale Americii; posibilitatea conflictului a fost mărită de coexistența unui Sud sclavagist cu un Nord din ce în ce mai puternic aboliționist</p> <p> <span>Ku-Klux-Klan</span> = organizaţie rasistă extremistă, apărută pentru prima oară după Războiul de secesiune în 1865 în statul Tennessee; membrii acestei organizații susțin superioritatea rasei albe și își exprimă adesea ideologia în mod violent</p>","<p> <span>Babilonul Antic</span> = unul dintre cele mai importante orașe ale lumii antice, capitala Imperiului Babilonian, apărut atunci când regele Hammurabi cel Mare (circa 1728 – 1686 î.Hr.) a creat un imperiu din teritoriile fostelor regate Sumer și Akkad.</p><p><span>Renaşterea</span> = mișcare culturală care s-a întins pe perioada secolelor XIV-XVII. A debutat în Italia, în perioada Evului Mediu Târziu și ulterior, s-a răspândit în restul Europei. Ea are la bază revenirea la filozofia Greciei Antice, care pune omul în centrul atenţiei</p>","<p> <span>Războiul de secesiune</span> = un conflict politic și militar de patru ani (1861–1865) dintre Uniunea sau Statele din Nord ale Statelor Unite ale Americii și Statele din Sud, care au părăsit pe rând Uniunea în 1860–1861, alcătuind entitatea statală federală denumită Statele Confederate ale Americii; posibilitatea conflictului a fost mărită de coexistența unui Sud sclavagist cu un Nord din ce în ce mai puternic aboliționist</p><p><span>Incendiul din Atlanta</span> = incendiu ce a avut loc cu ocazia Bătăliei Atlantei, când generalul William T. Sherman a dat foc la 81 de vagoane cu muniţie.</p>","<p><span>Cursa carelor de lupta</span> =  unul dintre cele mai populare sporturi din Grecia antică, Imperiul Roman și Imperiul Bizantin. Cursele carelor de luptă se dovedeau adesea periculoase atât pentru conducător cât și pentru cai, acestea încheindu-se frecvent cu răni grave sau chiar moartea participanților, dar generând un puternic entuziasm printre spectatori.</p><p><span>Ateism</span> = respingerea credinței în existența unor zeități. Comunismul susţine această idee prin instituirea unui 'stat ateu', în care guvernul „promovează ateismul”, interzicând practicarea și libertatea religioasă.</p>","<p><span>Razboiul rece</span> = perioadă de tensiuni și confruntări politice și ideologice, o stare de tensiune întreținută care a apărut după sfârșitul celui de-al Doilea Război Mondial și a durat până la revoluțiile din 1989. În Războiul Rece s-au confruntat două grupuri de state care aveau ideologii și sisteme politice foarte diferite. Într-un grup se aflau URSS și aliații ei, grup căruia i se spunea uzual „Blocul răsăritean” (sau oriental). Celălalt grup cuprindea SUA și aliații săi, fiind numit, uzual, „Blocul apusean” (sau occidental).<p><span>Razboi atomic</span> = conflict militar sau o strategie politică în care sunt folosite arme nucleare. În comparație cu războiul convențional, războiul nuclear este mult mai distructiv ca rază și grad de afectare. Un război major nuclear ar putea avea efecte grave pe termen lung, în primul rând din cauza radiațiilor, dar și datorită poluării atmosferice care, posibil, ar duce la o iarnă nucleară, care ar putea dura decenii, secole sau chiar milenii, după atacul inițial, în funcție de numărul de bombe nucleare lansate.</p>","<p><span>Spartacus</span> = conducătorul celei de-a treia răscoale a sclavilor (73 î.Hr. - 71 î.Hr.), care a avut loc în Republica Romană. A fost un gladiator roman de origine tracă. Hotărând să devină liber, Spartacus evadează împreuna cu cei 70 de tovarăși din școala de gladiatori din Capua, organizând la scurt timp o armată care număra 40.000 de oameni, ajungând apoi la 70.000 de oameni. Această armată de sclavi, condusă de Spartacus și de alți trei sclavi (Gannicus, Crixus și Oinomanus) a purtat mai multe lupte împotriva romanilor, zdrobind patru legiuni și învingându-l pe generalul Publius Varinus.</p><p><span>Antichitate</span> = este cea de-a II-a epocă a istoriei. A început în jurul anului 3000î.Hr, când a fost inventată scrierierea  cuneiformă, şi până în anul 476, când a căzut Imperiul Roman de Apus. Reprezintă epoca în care s-au dezvoltat cultura, arta, religia şi marile civilizaţii. Antichitatea se împarte în 3 mari perioade: Perioada veche, Perioada clasică, Perioada târzie</p>","<p><span>Debarcarea din Normandia</span> = asaltul și operațiunile amfibii din timpul Operațiunii Overlord declanșată de Aliații occidentali pentru deschiderea celui de-al doilea front în timpul celui de-al Doilea Război Mondial. Ziua Z inițială pentru declanșarea operațiunii (5 iunie) a fost amânată cu 24 de ore, pentru 6 iunie 1944. Atacul inițial a avut două faze: o debarcarea a parașutiștilor americani și britanici (printre ei se afla și un batalion canadian) la scurtă vreme după miezul nopții și o debarcare amfibie a infanteriștilor și diviziilor blindate aliate pe plajele Franței</p>","<p><span>Michelangelo</span> = alături de Leonardo da Vinci, a fost unul dintre cei mai importanţi artişti în perioada de vârf a Renașterii Italiene. Geniul său universal este deopotrivă oglindit de pictură, desen, sculptură și arhitectură. Acesta se remarcă în special prin sculpturile Pietà şi David, dar şi prin pictarea tavanului Capelei Sixtine.</p><p><span>Renaşterea</span> = mișcare culturală care s-a întins pe perioada secolelor XIV-XVII. A debutat în Italia, în perioada Evului Mediu Târziu și ulterior, s-a răspândit în restul Europei. Ea are la bază revenirea la filozofia Greciei Antice, care pune omul în centrul atenţiei</p>","<p><span>Razboiul rece</span> = perioadă de tensiuni și confruntări politice și ideologice, o stare de tensiune întreținută care a apărut după sfârșitul celui de-al Doilea Război Mondial și a durat până la revoluțiile din 1989. În Războiul Rece s-au confruntat două grupuri de state care aveau ideologii și sisteme politice foarte diferite. Într-un grup se aflau URSS și aliații ei, grup căruia i se spunea uzual „Blocul răsăritean” (sau oriental). Celălalt grup cuprindea SUA și aliații săi, fiind numit, uzual, „Blocul apusean” (sau occidental).</p><p><span>George Smith Patton</span> = (n. 11 noiembrie 1885 – d. 21 decembrie 1945) a fost un general al armatei S.U.A. cel mai cunoscut pentru prestația sa în timpul celui de-Al Doilea Război Mondial, luând parte la campaniile militare din Africa de Nord, Sicilia, Franța și Germania între anii 1943 și 1945. A participat și la Primul Război Mondial, comandând tancurile nou introduse în armata SUA. Un mareșal german, vorbind cu un reporter american îl numea pe Patton „generalul vostru cel mai bun”</p>","<p><span>Războiul din Vietnam</span> = război ce a avut loc între 1 noiembrie 1961 și 30 aprilie 1975. A fost purtat între Republica Democrată Vietnam (Vietnamul de Nord), sprijinită de China și Uniunea Sovietică, și Republica Vietnam (Vietnamul de Sud), sprijinită de Statele Unite. Conflictul s-a încheiat cu înfrângerea Vietnamului de Sud și unificarea țării sub conducere comunistă. Trupele americane s-au retras din Vietnam, războiul fiind considerat unul dintre marile eșecuri ale politicii externe americane.","<p><span>Revoluţia bolşevică</span> = lovitura de stat prin care bolșevicii au preluat puterea cu forța de la guvernul lui Kerenski, și care a inaugurat a doua fază a Revoluției Ruse din 1917. Lovitura de stat a fost organizată de bolșevici sub conducerea lui Vladimir Ilici Lenin și este considerată a fi prima revoluție comunistă din secolul al XX-lea","<p><span>Gandhi</span> =  părintele independenței Indiei și inițiatorul mișcărilor de revoltă nonviolente. Numele de „Mahatma“ (în sanscrită înseamnă „marele suflet“) i-a fost dat de poetul indian Rabindranath Tagore. Gandhi luptă pentru recunoașterea drepturilor compatrioților săi și, începând din anul 1906, lansează la nivel de masă metoda de revoltă bazată pe rezistență pașnică, denumită <span>Satyagraha</span>, o formă de refuz radical al oricărei colaborări cu autoritățile britanice.</p><p><span>Satyagraha</span> = tradus larg ca 'insistența pe adevăr' (satya 'adevăr'; agraha 'insistență' sau 'a se ține strâns') sau agățându-se de adevăr sau forța adevărului — este o anumită formă de rezistență nonviolentă sau rezistență civilă. Termenul satyagraha a fost lansat și dezvoltat de către Mahatma Gandhi (1869-1948). El a desfășurat Satyagraha în Mișcarea Indiană de Independență  și, de asemenea, în luptele anterioare din Africa de Sud pentru drepturile indienilor. Teoria Satyagrahei a influențat campaniile lui Martin Luther King Jr. și ale lui James Bevel în timpul Mișcării pentru Drepturile Cetățenești în Statele Unite ale Americii (1954-1968), și multe alte mișcări similare pentru justiție socială. Persoana care practică Satyagraha este un satyagrahi.</p><p><span>Imperiul Britanic</span> = numele atribuit Regatului Unit al Marii Britanii și Irlandei de Nord și fostelor dominioane, colonii, și altor teritorii aflate sub stăpânirea Coroanei Britanice de la sfârșitul secolului al XVI-lea până la mijlocul secolului al XX-lea. Apogeul Imperiului Britanic a fost atins la începutul secolului al XX-lea, cuprinzând peste 20% din suprafața uscată a Terrei și mai mult de 400 milioane de locuitori, fiind cel mai mare imperiu din istorie. </p> ","<span>Războiul din Vietnam</span> = război ce a avut loc între 1 noiembrie 1961 și 30 aprilie 1975. A fost purtat între Republica Democrată Vietnam (Vietnamul de Nord), sprijinită de China și Uniunea Sovietică, și Republica Vietnam (Vietnamul de Sud), sprijinită de Statele Unite. Conflictul s-a încheiat cu înfrângerea Vietnamului de Sud și unificarea țării sub conducere comunistă. Trupele americane s-au retras din Vietnam, războiul fiind considerat unul dintre marile eșecuri ale politicii externe americane.","<p><span>Primul Război Scoţian de Independenţă</span> = primul capitol dintr-o serie de conflicte între forţele scoţiene şi forţele engleze. Acesta a avut loc între 1296 şi 1328. Scoţia a reuşit sa-şi obţină independenţa în 1328, chiar dacă în practică era deja obţinută în 1314, după <span>Bătălia de la Bannockburn</span>.</p><p><span>Bătălia de la Bannockburn</span> = una dintre cele mai importante bătălii ale războaielor anglo-scoțiene din secolele XIII-XVI, a avut loc pe 24 iunie 1314. Înfrângerea armatei britanice în Bătălia de la Bannockburn a asigurat restaurarea independenței Scoției.</p><p><span>William Walace</span> = un cavaler și nobil scoțian devenit unul din principalii lideri în timpul Războaielor Scoțiene de Independență. Împreună cu Andrew Moray, Wallace a învins o armată engleză în bătălia de la Stirling Bridge în 1297, și a devenit Guardian of Scotland, titlu deținut până la înfrângerea în bătălia de la Falkirk. În 1305, Wallace a căzut prizonier la Robroyston lângă Glasgow și a fost predat regelui Edward I al Angliei, care l-a condamnat la moarte pentru înaltă trădare.</p>","<p><span>Debarcarea din Normandia</span> = asaltul și operațiunile amfibii din timpul Operațiunii Overlord declanșată de Aliații occidentali pentru deschiderea celui de-al doilea front în timpul celui de-al Doilea Război Mondial. Ziua Z inițială pentru declanșarea operațiunii (5 iunie) a fost amânată cu 24 de ore, pentru 6 iunie 1944. Atacul inițial a avut două faze: o debarcarea a parașutiștilor americani și britanici (printre ei se afla și un batalion canadian) la scurtă vreme după miezul nopții și o debarcare amfibie a infanteriștilor și diviziilor blindate aliate pe plajele Franței</p><p><span>Al Doilea Război Mondial</span> = conflict armat generalizat, la mijlocul secolului al XX-lea, care a mistuit cea mai mare parte a globului, fiind considerat cel mai mare și mai ucigător război neîntrerupt din istoria omenirii. A fost prima oară când un număr de descoperiri tehnice noi, incluzând bomba atomică, au fost folosite la scară largă împotriva militarilor și civililor, deopotrivă. Al Doilea Război Mondial a provocat moartea directă sau indirectă a peste 70 de milioane de oameni, aproximativ 3% din populația mondială de la acea vreme. În plus, multe alte persoane au fost rănite grav, au căpătat infirmități pe viață datorită armelor de foc, bombardamentelor clasice sau nucleare, sau datorită experiențelor militare și medicale inumane la care au fost supuși . S-a estimat că acest război a costat mai mulți bani și resurse decât toate celelalte războaie la un loc, 1.000 de miliarde de dolari la valoarea din 1945, fără a se pune la socoteală sumele cheltuite pentru reconstrucția de după război. ","<p><span>Al Doilea Război Mondial</span> = conflict armat generalizat, la mijlocul secolului al XX-lea, care a mistuit cea mai mare parte a globului, fiind considerat cel mai mare și mai ucigător război neîntrerupt din istoria omenirii. A fost prima oară când un număr de descoperiri tehnice noi, incluzând bomba atomică, au fost folosite la scară largă împotriva militarilor și civililor, deopotrivă. Al Doilea Război Mondial a provocat moartea directă sau indirectă a peste 70 de milioane de oameni, aproximativ 3% din populația mondială de la acea vreme. În plus, multe alte persoane au fost rănite grav, au căpătat infirmități pe viață datorită armelor de foc, bombardamentelor clasice sau nucleare, sau datorită experiențelor militare și medicale inumane la care au fost supuși . S-a estimat că acest război a costat mai mulți bani și resurse decât toate celelalte războaie la un loc, 1.000 de miliarde de dolari la valoarea din 1945, fără a se pune la socoteală sumele cheltuite pentru reconstrucția de după război.</p><p><span>Holocaust</span> = este un termen utilizat pentru a descrie uciderea a aproximativ șase milioane de evrei, de toate vârstele, majoritatea din Europa, în timpul celui de-al Doilea Război Mondial, ca parte din „soluția finală a problemei evreiești”, programul de exterminare a evreilor, plănuit și executat de regimul național-socialist din Germania, condus de Adolf Hitler.</p>","<p><span>Holocaust</span> = este un termen utilizat pentru a descrie uciderea a aproximativ șase milioane de evrei, de toate vârstele, majoritatea din Europa, în timpul celui de-al Doilea Război Mondial, ca parte din „soluția finală a problemei evreiești”, programul de exterminare a evreilor, plănuit și executat de regimul național-socialist din Germania, condus de Adolf Hitler.</p><p><span>Oskar Schindler</span> = industriaș german, spion și membru al partidului nazist care a salvat de la Holocaust circa 1200 de evrei, angajându-i în fabricile sale de email și muniții pe teritoriul Poloniei și Cehiei de azi. Inițial acesta a fost interesat în obținerea unui profit cât mai mare, dar de-a lungul războiului a început să cheltuiască sume din ce în ce mai mari pentru a-și salva muncitorii de la moarte, risipindu-și astfel într-un final toată averea adunată. Mai mult, când naziștii au început să închidă lagărele din est, a reușit să transfere 1200 din muncitorii evrei spre vest, într-o fabrică din Sudetenland, scăpându-i astfel de la gazare.</p>"],
		 
	
	//x1
		["<p><span>Napoleon</span> = lider politic și militar al Franței, ale cărui acțiuni au influențat puternic politica europeană de la începutul secolului al XIX-lea. Conflictul cu restul Europei a condus la o perioadă de <span>război total</span> de-a lungul continentului, iar campaniile sale sunt studiate la academii miltare din întreaga lume. Deși considerat un tiran de către oponenții săi, el a rămas în istorie și datorită creării Codului Napoleonian, care a pus fundațiile legislației administrative și judiciare în majoritatea țărilor Europei de Vest.<p><p><span>Război total</span> = conflict de o anvergură maximă, în care factorii politici mobilizează toate resursele disponibile pentru a asigura distrugerea capacităților rivalilor de a se apăra. Războiul total este o practică veche de secole, dar doar în ultimii 150 de ani teoreticienii militari au identificat această clasă separată de război. În războiul total nu există practic necombatanți, toate persoanele dintr-o anumită țară – civili și militari în aceeași măsură – sunt considerați ținte.","<p><span>Ioana D'Arc</span> = una din figurile emblematice ale Franței și sfântă a Bisericii Catolice dar și foarte controversată întrucât unii autori au considerat că era schizofrenică (auzea voci). A fost supranumită de naționaliștii francezi Fecioara din Orleans și i s-a atribuit faptul că, în urma unor viziuni, Dumnezeu i-a spus să elibereze pământurile Franței care erau dominate de Anglia după <span>Războiul de 100 de ani</span></p><p><span>Războiul de 100 de ani</span> = război purtat între Anglia și Franța în intervalul 1337-1453. Războiul de 100 de Ani nu a fost un conflict continuu, ci o serie de ostilități întrerupte de perioade lungi de pace. Disputele teritoriale vizau Aquitania (cunoscută și cu denumirea de Guyenne), un ducat în sud-vestul Franței și parte din regatul Franței. Disputele teritoriale au apărut de la mijlocul secolului al XII-lea, o dată cu mariajul dintre Eleanor de Aquitania, moștenitoarea tronului ducal, și Henric al II-lea al Angliei, regele Angliei care era și duce al Aquitaniei.","<p><span>Primul Război Mondial</span> = război izbucnit în vara anului 1914, pretextul său fiind asasinarea arhiducelui Franz Ferdinand (moștenitorul tronului Imperiului Austro-Ungar) la Sarajevo. Confruntarea militară la care au participat 33 de state de pe cinci continente, pe parcursul a 52 de luni, a fost fără precedent în istoria omenirii, ca amploare, arie de desfășurare și durată. Cele două mari alianțe politico-militare care s-au confruntat au fost Antanta sau Tripla Înțelegere (Franța, Imperiul Britanic, Imperiul Țarist) și Tripla Alianță sau Puterile Centrale (Germania, Austro-Ungaria), fiecare cu aliații săi. Mai mult de 9 milioane de persoane au fost ucise pe câmpurile de luptă ale războiului iar, pe lângă acestea, mai mulți și-au pierdut viața în spatele liniilor frontului, datorită lipsei resurselor de bază.</p><p><span>Germania Nazistă</span> = statul german în perioada anilor 1933 - 1945, când țara a stat sub controlul ferm al partidului totalitar nazist NSDAP - Partidului Muncitoresc German Național-Socialist - și a fost condusă de regimul dictatorial al liderului nazist, Adolf Hitler, denumit de germani, în acea perioadă, „der Führer”, în traducere „Conducătorul”.</p>","<p><span>Al Doilea Război Mondial</span> = conflict armat generalizat, la mijlocul secolului al XX-lea, care a mistuit cea mai mare parte a globului, fiind considerat cel mai mare și mai ucigător război neîntrerupt din istoria omenirii. A fost prima oară când un număr de descoperiri tehnice noi, incluzând bomba atomică, au fost folosite la scară largă împotriva militarilor și civililor, deopotrivă. Al Doilea Război Mondial a provocat moartea directă sau indirectă a peste 70 de milioane de oameni, aproximativ 3% din populația mondială de la acea vreme. În plus, multe alte persoane au fost rănite grav, au căpătat infirmități pe viață datorită armelor de foc, bombardamentelor clasice sau nucleare, sau datorită experiențelor militare și medicale inumane la care au fost supuși . S-a estimat că acest război a costat mai mulți bani și resurse decât toate celelalte războaie la un loc, 1.000 de miliarde de dolari la valoarea din 1945, fără a se pune la socoteală sumele cheltuite pentru reconstrucția de după război.</p><p><span>Podul 277</span> = Partea cea mai cunoscută a <span>căii ferate a morţii</span>; se află peste fluviul Khwae Yai. La origine, fluviul a fost cunoscut sub numele de Mae Klong, dar din 1960 este cunoscut sub numele actual: Khwae Yai.</p><p><span>Calea ferată a morţii</span> = cale ferată care leagă Birmania de Thailanda, prin Trecătoarea celor Trei Pagode. A fost construită pentru Imperiul Japonez, în scopul consolidării Sferei de Coprosperitate a Marii Asii Orientale. Calea ferata a mortii isi are numele de la infamanta munca silnica la care au fost supusi prizonierii de razboi aliati si populatia civila, din lagarul de munca, de catre puterea militarista japoneza, in timpul celui de-Al Doilea Razboi Mondial, pentru construirea acestei cai ferate, in scopul sustinerii fortelor sale in campania din Birmania. La construirea acestei cai ferate au fost fortati sa munceasca, in conditii inumane, 180.000 de muncitori asiatici si 60.000 de prizonieri de razboi aliati. ","<p><span>Primul Război Mondial</span> = război izbucnit în vara anului 1914, pretextul său fiind asasinarea arhiducelui Franz Ferdinand (moștenitorul tronului Imperiului Austro-Ungar) la Sarajevo. Confruntarea militară la care au participat 33 de state de pe cinci continente, pe parcursul a 52 de luni, a fost fără precedent în istoria omenirii, ca amploare, arie de desfășurare și durată. Cele două mari alianțe politico-militare care s-au confruntat au fost Antanta sau Tripla Înțelegere (Franța, Imperiul Britanic, Imperiul Țarist) și Tripla Alianță sau Puterile Centrale (Germania, Austro-Ungaria), fiecare cu aliații săi. Mai mult de 9 milioane de persoane au fost ucise pe câmpurile de luptă ale războiului iar, pe lângă acestea, mai mulți și-au pierdut viața în spatele liniilor frontului, datorită lipsei resurselor de bază.</p><p><span>Revolta arabă</span> = rebeliune inițiată de Hussein bin Ali cu scopul câștigării independenței de sub jugul Imperiului Otoman și crearea unui stat arab unificat care s-ar fi întins de la Alep (Siria) până la Aden (Yemen).","<p><span>Renaşterea</span> = mișcare culturală care s-a întins pe perioada secolelor XIV-XVII. A debutat în Italia, în perioada Evului Mediu Târziu și ulterior, s-a răspândit în restul Europei. Ea are la bază revenirea la filozofia Greciei Antice, care pune omul în centrul atenţiei</p><p><span>Biserica Anglicană</span> = bisercă constituită de regele Henric VIII, care, prin Actul de supremaţie (1534), se substituia papei în conducerea Bisericii, din cauza refuzului papei Clement VII de a-i acorda anularea căsătoriei cu Caterina de Aragon. Excomunicat de Clement VII în 1534 şi de Paul III în 1535, Henric VIII, cu toate că şi-a dus până la capăt opţiunea de a scoate Anglia de sub autoritatea papală, în cele Şase articole (1539), a păstrat dogma catolică, fără a accepta principiile luteranismului şi ale calvinismului, şi a menţinut ierarhia bazată pe episcopi numiţi direct de către rege.</p><span>Reforma</span> = separarea, în secolul al XVI-lea, de Biserica romano-catolică, a bisericilor reformate(numite și protestante). Reforma a avut multiple cauze de natură economică, socială, politică, religioasă.Ea a fost inițiată în Germania în anul 1517 de călugărul Martin Luther (reforma lutherană). Alțireformatori ai secolului al XVI-lea au fost Jean Calvin, Ulrich Zwingli, Thomas Munzer și alții. În Anglia,Reforma s-a desfășurat în urma deciziei regelui Henric al VIII-lea de a deveni capul Bisericii (1531), dincauza refuzului papalității de a-i acorda divorțul de prima soție, Caterina de Aragon.</p><p><span>Thomas More</span> (1478-1535) = un mare scriitor și umanist englez. El este faimos, în primul rând,pentru lucrarea Utopia (1516), în care își imaginează o lume în care toți oamenii sunt egali și fericiți. Deși prieten cu Henric VIII, regele Angliei, a fost condamnat la moarte, deoarece nu a vrut să-l recunoască pe rege șef al Bisericii.","<p><span>Războiul Algerian de Independenţă</span> = război între Franţa şi Frontul de Eliberare Naţională al Algeriei ce a avut loc între 1954 şi 1962, rezultând în obţinerea independenţei algeriene. A fost un război de decolonizare important ce s-a transformat şi într-un război civil între algerienii loialişti Algeriei franceze şi algerienii naţionalişti.</p><p><span>Imperii coloniale</span> = imperii apărute în perioada secolelor XV - XX când marile puteri europene, Statele Unite ale Americii și Japonia își creează propriile imperii coloniale : unele mai mari (Marea Britanie, Franța, Spania) iar altele mai mici (Olanda, Belgia, Italia, Germania). Primele au fost Spania și Portugalia care și-au format imperiile coloniale în urma Marilor Descoperiri Geografice din secolele XV - XVI. Unele își vor pierde o parte din teritorii în favoarea celorlalte imperii coloniale (Olanda, Franța, Spania). Toate imperiile își vor pierde mare parte dintre colonii în secolul XX la sfârșitul celui De-al Doilea Război Mondial ( în timpul lui sau după război).</p>","<p><span>Al Doilea Război Mondial</span> = conflict armat generalizat, la mijlocul secolului al XX-lea, care a mistuit cea mai mare parte a globului, fiind considerat cel mai mare și mai ucigător război neîntrerupt din istoria omenirii. A fost prima oară când un număr de descoperiri tehnice noi, incluzând bomba atomică, au fost folosite la scară largă împotriva militarilor și civililor, deopotrivă. Al Doilea Război Mondial a provocat moartea directă sau indirectă a peste 70 de milioane de oameni, aproximativ 3% din populația mondială de la acea vreme. În plus, multe alte persoane au fost rănite grav, au căpătat infirmități pe viață datorită armelor de foc, bombardamentelor clasice sau nucleare, sau datorită experiențelor militare și medicale inumane la care au fost supuși . S-a estimat că acest război a costat mai mulți bani și resurse decât toate celelalte războaie la un loc, 1.000 de miliarde de dolari la valoarea din 1945, fără a se pune la socoteală sumele cheltuite pentru reconstrucția de după război.</p><p><span>Bătălia Atlanticului</span> = cea mai lungă campanie militară continuă a celui de-al Doilea Război Mondial, începând în 1939 și terminându-se doar odată cu capitularea Germaniei Naziste în 1945. Momentul de maximă intensitate a luptelor a fost atins de la mijlocul anului 1940 până la sfârșitul anului 1943. Campania a opus vasele de suprafață și U-boot submarinele Marinei Germane, Marinei Regale Britanice și Marinei Regale Canadiene și mai târziu Marinei Statelor Unite, care asigurau securitatea convoaielor aliate, care transportau materiale de primă necesitate din America de Nord și de Sud spre Regatul Unit și Uniunea Sovietică. Submarinelor germane (U-boot) li s-au adăugat cele italiene, după ce Italia a intrat în război în iunie 1940.</p>","<p><span>Holocaust</span> = este un termen utilizat pentru a descrie uciderea a aproximativ șase milioane de evrei, de toate vârstele, majoritatea din Europa, în timpul celui de-al Doilea Război Mondial, ca parte din „soluția finală a problemei evreiești”, programul de exterminare a evreilor, plănuit și executat de regimul național-socialist din Germania, condus de Adolf Hitler.</p><p><span>Lagăr de concentrare</span> = centru major de detenție destinat oponenților politici, străinilor, grupurilor sociale, etnice sau religioase, civililor unei zone de război critice sau unor grupuri de persoane neagreate de puterea politică a unui stat, deseori pe timp de război. Au cunoscut o largă răspândire îndeosebi în Germania nazistă și pe teritoriile ocupate (ex. Auschwitz, Buchenwald, Dachau, Mauthausen ș.a.), precum și în U.R.S.S. (Karaganda, Vorkuta, Solovețk, Norilsk ș.a.).Ceea ce a înfricoșat și îngrozit pentru totdeauna memoria europeană a fost exterminarea în mod industrial a evreilor și a romilor, inclusiv copiii, femeile, bătrânii: holocaustul având și o latură așa zis practică (recuperarea sistematică a bunurilor confiscate: haine, geamantane, ochelari, încălțăminte, dinți de metal, până și pielea umană) și o latură pseudo-științifică (experiențe îngrozitoare pe oameni vii, în presupuse scopuri militare sau antropologice rasiale, pe gemeni, handicapați etc)."],
		
	
	//x2
		["<p><span>Revoluţia Rusa de la 1905</span> = revoluţia din 1905—1907 din Rusia, prima revoluţie burghezo -democratică din epoca imperialismului. A izbucnit ca urmare a ascuţirii tuturor contradicţiilor sociale şi politice ale capitalismului rus, intrat in faza sa imperialistă, contradicţii agravate de existenţa rămăşiţelor feudale în economia şi în orânduirea politică, de asuprirea naţională, de criza economică din 1900-1903 şi de războiul ruso-japonez din 1904—1905. Revoluţia a început prin manifestaţia paşnică din 9 ianuarie 1905 înăbuşită în sânge, căreia i-au urmat, în primăvara şi vara anului 1905, mari greve politice în principalele centre industriale (Petersburg, Moscova, Varşovia, Ivanovo-Voznesensk, Lodz, Riga, Batumi ş.a.) şi puternice răscoale ţărăneşti în regiunea Volgăi, în Ucraina, în Gruzia, în ţările baltice ş.a.; în acelaşi timp au avut loc frământări şi în rândurile armatei (care au culminat cu răscoala din iunie 1905 a marinarilor de pe crucişătorul „Potiomkin” din flota Mării Negre)</p><p><span>Revoluţia bolşevică</span> = lovitura de stat prin care bolșevicii au preluat puterea cu forța de la guvernul lui Kerenski, și care a inaugurat a doua fază a Revoluției Ruse din 1917. Lovitura de stat a fost organizată de bolșevici sub conducerea lui Vladimir Ilici Lenin și este considerată a fi prima revoluție comunistă din secolul al XX-lea</p>","<p><span>Ivan cel Groaznic</span> = primul ţar rus din 1547, a guvernat sub conducerea unei Rade alese. Domnia primului ţar al Rusiei se poate împărţi în două perioade: una prosperă- plină de reforme ample şi benefice iar cea de doua plină de efectele problemelor ţarului, învăluită în negura nebuniei. Ivan al IV-lea avea numai trei ani atunci când devenea Mare Cneaz al Moscovei, în 1533, ca succesor al tatălui său, Vasili al III-lea. Mama lui a fost regentă vreme de cinci ani, timp în care băiatul a fost instruit în arta guvernării. Când ea a murit — probabil victimă a unei otrăviri — el s-a trezit în centrul luptei pentru putere dintre diferite grupări boiereşti. </p><p><span>Iosif Stalin</span> = om politic sovietic, fost revoluționar bolșevic devenit după Revoluția din Octombrie conducător politic sovietic. Stalin a devenit Secretar General al Partidului Comunist al Uniunii Sovietice în 1922, în urma morții lui Vladimir Ilici Lenin, câștigând în anii deceniului al treilea lupta pentru putere cu Lev Troțki și consolidându-și pe deplin autoritatea odată cu Marea Epurare, o perioadă de represiune cruntă al cărei apogeu a fost atins în 1937. Stalin a rămas la putere pe tot parcursul celui de-al Doilea Război Mondial, și după încheierea acestuia, până la moartea sa. Din 1946 a deținut și funcția de prim-ministru al Uniunii Sovietice. Ideologia marxist-leninistă ca interpretare a lui Stalin este adeseori numită și stalinism. ","<p><span>Al Doilea Război Mondial</span> = conflict armat generalizat, la mijlocul secolului al XX-lea, care a mistuit cea mai mare parte a globului, fiind considerat cel mai mare și mai ucigător război neîntrerupt din istoria omenirii. A fost prima oară când un număr de descoperiri tehnice noi, incluzând bomba atomică, au fost folosite la scară largă împotriva militarilor și civililor, deopotrivă. Al Doilea Război Mondial a provocat moartea directă sau indirectă a peste 70 de milioane de oameni, aproximativ 3% din populația mondială de la acea vreme. În plus, multe alte persoane au fost rănite grav, au căpătat infirmități pe viață datorită armelor de foc, bombardamentelor clasice sau nucleare, sau datorită experiențelor militare și medicale inumane la care au fost supuși . S-a estimat că acest război a costat mai mulți bani și resurse decât toate celelalte războaie la un loc, 1.000 de miliarde de dolari la valoarea din 1945, fără a se pune la socoteală sumele cheltuite pentru reconstrucția de după război.</p><p><span>Operaţiunea Barbarossa</span> =  numele de cod secret folosit de conducerea Germaniei naziste pentru operația militară de invadare a Uniunii Sovietice în timpul celui de-al Doilea Război Mondial, acțiune începută la 22 iunie 1941. Scopul inițial al operațiunii a fost cucerirea Rusiei Europene și a Ucrainei până la Arhanghelsk în nord și Astrahan în sud. Se presupune că eșecul Operațiunii Barbarossa a dus, în cele din urmă, la înfrângerea Germaniei naziste, fiind un punct de cotitură pentru soarta celui de Al Treilea Reich condus de Adolf Hitler. Frontul de răsărit care a fost deschis prin această operațiune avea să devină cel mai mare teatru de lupte al celui de Al Doilea Război Mondial. Pe acest front s-au purtat unele dintre cele mai mari și violente bătălii, cu uriașe pierderi de vieți omenești, în condiții cumplite atât pentru germani cât și pentru sovietici.</p>","<p><span>Revoluţia Rusă</span> = o serie de evenimente care au condus în februarie 1917 la răsturnarea spontană a regimului țarist din Rusia, și apoi, în luna octombrie a aceluiași an, la preluarea puterii de către bolșevici și instalarea unui regim leninist („comunist”). Aceasta din urmă a condus la un război civil foarte violent, în care bolșevicilor li se opunea <span>Armata Albă</span> și o varietate de alţi adversari. Conflictul a fost însoțit de o prăbușire a economiei ruse, care începuse în timpul războiului, și cu o foamete soldată cu deosebit de mulți morți⁠: el s-a terminat cu victoria bolșevicilor, și cu comasarea, sub egida URSS, a majorității teritoriilor fostului imperiu. Revoluția din Rusia a dat naștere și comunismului în sensul contemporan al termenului.</p><p><span>Armata Albă</span> = unele forțe din Rusia, atât politice cât și militare, care se opuneau bolșevicilor după Revoluția din Octombrie și care au luptat împotriva Armatei Roșii. Numele de Alb avea două înțelesuri. Primul era în contradicție cu Roșii — Armata Roșie revoluționară, care sprijinea sovietele și comunismul. Al doilea înțeles al cuvântului Alb avea asocieri monarhiste: de-a lungul istoriei, fiecare țar al Rusiei era denumit în mod solemn Țarul alb, iar ideea monarhistă a fost cunoscută de-a lungul războiului civil ca ideea albă.","<p><span>Al Doilea Război Mondial</span> = conflict armat generalizat, la mijlocul secolului al XX-lea, care a mistuit cea mai mare parte a globului, fiind considerat cel mai mare și mai ucigător război neîntrerupt din istoria omenirii. A fost prima oară când un număr de descoperiri tehnice noi, incluzând bomba atomică, au fost folosite la scară largă împotriva militarilor și civililor, deopotrivă. Al Doilea Război Mondial a provocat moartea directă sau indirectă a peste 70 de milioane de oameni, aproximativ 3% din populația mondială de la acea vreme. În plus, multe alte persoane au fost rănite grav, au căpătat infirmități pe viață datorită armelor de foc, bombardamentelor clasice sau nucleare, sau datorită experiențelor militare și medicale inumane la care au fost supuși . S-a estimat că acest război a costat mai mulți bani și resurse decât toate celelalte războaie la un loc, 1.000 de miliarde de dolari la valoarea din 1945, fără a se pune la socoteală sumele cheltuite pentru reconstrucția de după război.</p><p><span>Totalitarism</span> = regim politic în care puterea aparține în mod total unei persoane sau unui grup de persoane. Spre deosebire de sistemul politic de tip monarhie absolută sau dictatură, în regimurile totalitare distanța între stat și societate este practic anulată, în sensul că puterea întrupată de stat, prin partidul unic, pătrunde până și în viața particulară a fiecărui cetățean. Ideologia totalitaristă este opusă conceptului de societate deschisă.","<p><span>Andrei Rubliov</span> = s-a născut spre anii 1360 – 1370. A fost un călugăr și pictor de icoane rus, din secolul al XV-lea. Recent, Biserica Ortodoxă Rusă l-a canonizat, iar sărbătoarea sa a fost fixată pe 29 ianuarie și pe 4 iulie. A fost asistent al pictorului, de origine greacă, Theophan Grecul, iar opera sa duce mai departe tradiția icoanelor bizantine, dar introduce aici mai multă suplețe și gingășie.</p><p><span>Teofan Grecul</span> = artist bizantin si unul dintre cei mai cunoscuti pictori iconari din Rusia. S-a afirmat ca profesor si mentor al lui Andrei Rubliov. Puternica personalitate a lui Teofan a produs o impresie profunda asupra rusilor, care l-au numit 'inteleptul', admirandu-i atat vioiciunea mintii cat si indrazneala stilului.</p>","<p><span>Războiul civil rus</span> = război ce a avut loc între 1918-1920. Războiul s-a dus în principal între 'Roşii', care erau comuniştii şi revoluţionarii, şi 'Albii', care erau monarhiştii, conservatorii, liberalii şi socialiştii care se opuneau Revoluţiei bolşevice. A mai existat un grup al naţionaliştilor şi anarhiştilor cunoscuţi ca 'Verzii', sau ceva mai târziu cunoscuţi şi ca 'Negrii', care au jucat un rol mai puţin însemnat în război, care i-au hărţuit atât pe Albi cât şi pe Roşii, iar uneori s-au bătut între ei. În plus, Antanta şi alte câteva ţări au intervenit de partea Albilor, ceea ce a agravat războiul civil.</p><p><span>Armata Albă</span> = unele forțe din Rusia, atât politice cât și militare, care se opuneau bolșevicilor după Revoluția din Octombrie și care au luptat împotriva Armatei Roșii. Numele de Alb avea două înțelesuri. Primul era în contradicție cu Roșii — Armata Roșie revoluționară, care sprijinea sovietele și comunismul. Al doilea înțeles al cuvântului Alb avea asocieri monarhiste: de-a lungul istoriei, fiecare țar al Rusiei era denumit în mod solemn Țarul alb, iar ideea monarhistă a fost cunoscută de-a lungul războiului civil ca ideea albă.","<p><span>Bătălia de la Stalingrad</span> = un important punct de cotitură în desfășurarea celui de-al Doilea Război Mondial și este considerată cea mai sângeroasă și mai mare bătălie din istoria omenirii. Bătălia(1942–1943) a fost marcată de brutalitate și de lipsa de grijă pentru populația civilă. Bătălia a inclus campania de bombardamente germane asupra orașului Stalingrad (azi redenumit Volgograd) din sudul Rusiei, atacul terestru german asupra orașului, și lupte din interiorul orașului însuși, după care a urmat contraofensiva sovietică care, în cele din urmă, a încercuit și distrus forțele germane și ale celorlalți aliați din cadrul Axei din oraș și din regiunea periferică a orașului. Pentru sovietici, victoria de la Stalingrad a marcat începutul eliberării URSS, luptă care a dus în cele din urmă la victoria din 1945 asupra Germaniei Naziste.</p><p><span>Vladimir Putin</span> = om politic rus. În prezent ocupă pentru a treia oara funcția de președinte al Federației Ruse. A devenit președinte interimar al Rusiei la data de 31 decembrie 1999, după ce președintele Boris Elțîn își dăduse demisia, iar apoi a câștigat alegerile prezidențiale din anul 2000. În 2004, el a fost reales pentru un al doilea mandat, care a durat până în 7 mai 2008. Din cauza limitei prevăzute de Constituție, Putin nu a mai putut candida pentru un al treilea mandat prezidențial consecutiv în 2008, dar după victoria succesorului sprijinit de el, Dmitri Medvedev în alegerile prezidențiale, Putin a fost numit de acesta prim-ministru al Rusiei. Putin a ocupat această funcție în intervalul 8 mai 2008 – 4 martie 2012. În 2012 a devenit pentru alți 6 ani președinte al Federației Ruse","<p><span>Ordinul cavalerilor teutoni</span> = ordin religios german catolic format la sfârșitul secolului al XII-lea la Acra, în Palestina. În Evul Mediu, ordinul era unul religios-militar cruciat. Cavalerii teutoni purtau veșminte albe prevăzute cu o cruce neagră.</p><p><span>Uniunea Republicilor Sovietice Socialiste</span> = stat întins pe o mare parte din Nordul Eurasiei, și care a existat din 1922 până în 1991. Formarea sa a fost punctul culminant al Revoluției ruse din 1917, cea care l-a îndepărtat pe țarul Nicolae al II-lea. URSS era constituită din mai multe Republici Sovietice Socialiste (RSS-uri). Numărul acestora a variat de-a lungul timpului; la data dezmembrării, URSS număra 15 republici componente. Rusia era, de departe, cea mai mare republică, dominând în aproape toate domeniile: suprafață, populație, economie și influență politică. </p><p><span>Pactul Ribbentrop-Molotov</span> = tratat de neagresiune încheiat între Uniunea Sovietică și Germania nazistă, semnat la Moscova, la 23 august 1939 de șeful guvernului și ministrul de externe a URSS Viaceslav Molotov și ministrul de externe german Joachim von Ribbentrop, în prezența lui Stalin."],
		
	
	//x3
		["<p><span>Războiul de Independenţă al Romaniei</span> = numele folosit în istoriografia română pentru participarea <span>Principatelor Unite</span> la Războiul ruso-turc din anii 1877 – 1878. În urma acestui război, România a obținut independența față de Imperiul Otoman. Pe 16 aprilie 1877, Principatele Unite și Imperiul Rus au semnat un tratat la București care permitea trupelor ruse să traverseze teritoriul tării în drumul spre Balcani, cu condiția respectării integrității teritoriale a României.</p><p><span>România</span> = un stat format prin unirea dintre Moldova și Țara Românească în 1859 sub domnia lui <span>Alexandru Ioan Cuza</span>. Statul acoperea regiunile istorice Oltenia, Muntenia, și Moldova. La început, a cuprins și sudul Basarabiei (zona Cahul, Bolgrad și Ismail), dar după 1877 a pierdut acest teritoriu, primind în schimb Dobrogea.</p><p><span>Alexandru Ioan Cuza</span> = primul domnitor al Principatelor Unite și al statului național România. A participat activ la mișcarea revoluționară de la 1848 din Moldova și la lupta pentru unirea Principatelor. La 5 ianuarie 1859, Cuza a fost ales domn al Moldovei, iar la 24 ianuarie 1859 și al Țării Românești, înfăptuindu-se astfel unirea celor două principate. Devenit domnitor, Cuza a dus o susținută activitate politică și diplomatică pentru recunoașterea unirii Moldovei și Țării Românești de către Puterea suzerană și Puterile Garante și apoi pentru desăvârșirea unirii Principatelor Române pe calea înfăptuirii unității constituționale și administrative, care s-a realizat în ianuarie 1862, când Moldova și Țara Românească au format un stat unitar, adoptând oficial, în 1862, numele de România și formând statul român modern, cu capitala la București, cu o singură adunare și un singur guvern.</p><p><span>Carol I al României</span> =  domnitorul, apoi regele României, care a condus Principatele Române și apoi România după abdicarea forțată de o lovitură de stat a lui Alexandru Ioan Cuza. În cei 48 de ani ai domniei sale (cea mai lungă domnie din istoria statelor românești), Carol I a obținut independența țării, datorită căreia i-a și crescut imens prestigiul, a redresat economia, a dotat România cu o serie de instituții specifice statului modern și a pus bazele unei dinastii. A construit în munții Carpați castelul Peleș, care a rămas și acum una dintre cele mai vizitate atracții turistice ale țării. După războiul ruso-turc (1877-1878), România a câștigat Dobrogea (dar a pierdut sudul Basarabiei), iar Carol a dispus ridicarea podului peste Dunăre, între Fetești și Cernavodă, care să lege noua provincie de restul țării.","<p><span>Revoluţia de la 1821</span> = unul dintre evenimentele care au marcat începutul procesului de renaştere naţională a României. Revoluţia, condusă de Tudor Vladimirescu, a avut cauze naţionale, economice şi sociale şi, deşi a fost în cele din urmă înfrântă, a adus în atenţia cancelariilor marilor puteri europene situaţia din Principatele Dunărene şi a determimat Imperiul Otoman să pună capăt domniilor fanariote.</p><p><span>Tudor Vladimirescu</span> = conducătorul Revoluţiei de la 1821. S-a născut în Vladimirii Gorjului. Făcea parte din clasa ţărănimii libere. A avut numeroase ocupaţii care i-au permis să cunoască oamenii şi realităţile din ţară (negoţ, arendăşia, slujba la boierul Glogoveanu). Strângând avere a intrat în tagma boierească, având rangul de sluger. A comandat o trupă de panduri în timpul războiului ruso-turc din 1806-1812 în cadrul armatei ruse, primind decoraţia rusească Sf. Vladimir, precum şi calitatea de supus rus. În preajma izbucnirii Revoluţiei de la 1821, avea contacte cu boierii patrioţi (aparţinând aşa-numitei partide naţionale), precum şi cu importante căpetenii eteriste. Era conştient de primejdia misiunii pe care şi-o asumase: „Eu nu mă tem de moarte; am înfruntat moartea în mai multe rânduri. Mai înainte de a fi ridicat steagul spre a cere drepturile patriei mele, m-am îmbrăcat cu cămaşa morţii.” Poporul l-a numit Domnul Tudor, iar românii din Transilvania i-au spus cu speranţă crăiuţul Todoruţ.</p>","<p><span>Dacia</span> = țara locuită de geto-daci, care erau împărțiți într-un număr mai mare de state și ocupau un teritoriu cuprins între: râul Tisa (vest), râul Nistru și Marea Neagră (est), Dunăre (sud) și Carpații Păduroși (nord). În anumite părți chiar depășeau aceste hotare: spre est peste Nistru, 'înaintând până spre Bug', iar spre vest, 'ajunseră până la Dunărea panonică'. Grecii le spuneau dacilor geți, iar romanii daci.</p><p><span>Cornelius Fuscus</span> = general roman ce a luptat în expediţii sub Împăraţii Dinastiei Flavius. În timpul lui Domitian, a fost Gardă Pretoriană, începând în 81 şi sfarşind în 86, o dată cu moartea sa. În 85 Dacii, sub conducerea Regelui Decebal au invadat Imperiul Roman în Moesia, o provincie la sud de Dunăre. Domitian l-a trimis pe Fuscus acolo cu 5 legiuni. Chiar dacă la început expediţia a avut un rezultat pozitiv, în final dacii au reuşit să-l omoare pe Fuscus şi să anihileze una dintre legiunile sale într-o ambuscadă.</p><p><span>Decebal</span> = regele Daciei între anii 85-106. Dacia s-a aflat la apogeul puterii sale sub regele Decebal. Deși mai restrâns ca arie geografică decât Regatul lui Burebista (82-44 î.Hr.) - cuprinzând Transilvania, Banatul, Oltenia, centrul și sudul Moldovei, noul stat era mai puternic și mai bine organizat. Acesta reuşeşte să întoarcă armatele lui Domiţian, după care încheie o pace benefică, devenind astfel client al Romei. Confruntările dintre daci și romani au reînceput în timpul împăratului Traian. La începutul anului 101, armata romană, condusă chiar de împărat, după ambele pregătiri de aproape 3 ani, a atacat Dacia. În toamna anului 102, Decebal este silit să încheie o pace zdrobitoare pentru Dacia: regele dac trebuia să dărâme zidurile cetăților, să cedeze o serie de teritorii și să renunțe la orice independență în politica externă.Din ordinul lui Traian, Apolodor din Damasc, cel mai vestit inginer al epocii înalță un pod peste Dunăre, pe care legiunile romane îl trec în vara anului 105, inițiind cel de-al doilea război dacic. Abandonat de aliaţi, capitala Daciei este cucerită, iar Decebal, urmărit de cavaleria romană și pentru a nu cădea viu în mâinile dușmanului, se sinucide.","<p><span>Dacia</span> = țara locuită de geto-daci, care erau împărțiți într-un număr mai mare de state și ocupau un teritoriu cuprins între: râul Tisa (vest), râul Nistru și Marea Neagră (est), Dunăre (sud) și Carpații Păduroși (nord). În anumite părți chiar depășeau aceste hotare: spre est peste Nistru, 'înaintând până spre Bug', iar spre vest, 'ajunseră până la Dunărea panonică'. Grecii le spuneau dacilor geți, iar romanii daci.</p><p><span>Imperiul Roman</span> =  unul dintre cele mai mari și mai puternice state ale lumii antice. Istoria Romei cuprinde trei mari epoci: perioada regalității (de la întemeiere până la 509 î.Hr.); republica (509 i.Hr.-27 i.Hr.) și imperiul (până la căderea cetății în mâinile lui Odoacru, în 476).</p><p><span>Primul război daco-roman</span> = La începutul anului 101, armata romană, condusă chiar de împărat, după ambele pregătiri de aproape 3 ani, a atacat Dacia cu 13-14 legiuni și alte unități auxiliare (în total circa 150.000 de soldați). La 25 martie 101 împăratul părăsește Roma, traversează Dunărea pe poduri de vase la Lederata (Ramna) și Dierna (Orșova) pătrunzând în Dacia prin Banat. Are loc bătălia de la Tapae, în vara anului 101, iar Decebal încearcă să oprească înaintarea romană. Bătălia se încheie cu victoria romană. În iarna și primăvara anului 102, Decebal este înfrânt la Nicopolis ad Istrum și în Dobrogea la Adamclissi. În toamna anului 102, Decebal este silit să încheie o pace zdrobitoare pentru Dacia: regele dac trebuia să dărâme zidurile cetăților, să cedeze o serie de teritorii și să renunțe la orice independență în politica externă.</p><p><span>Al doilea război daco-roman</span> = Din ordinul lui Traian, Apolodor din Damasc, cel mai vestit inginer al epocii, înalță, între Drobeta și Pontes, în anii 103-105, un pod peste Dunăre, pe care legiunile romane îl trec în vara anului 105, inițiind cel de-al doilea război dacic. Abandonat de aliați, atacat prin Banat, Valea Oltului și Moldova, constrâns continuu la defensivă, Decebal se retrage în citadela din Munții Orăștiei. După cucerirea puternicelor cetăți care păzeau accesul spre capitală: Blidaru, Costești, Piatra Roșie, Bănița, Căpâlna, Tilișca, legiunile romane încep asediul Sarmizegetusei. În ciuda rezistenței, cetatea este cucerită și distrusă din temelii. Decebal, împreună cu câteva căpetenii, reușește să părăsească cetatea încercând să continue rezistența împotriva romanilor în interiorul țării. Este urmărit de cavaleria romană și pentru a nu cădea viu în mâinile dușmanului, se sinucide</p>","<p><span>Mihai Viteazul</span> = domnul Ţării Româneşti începând cu anul 1593. La 13 noiembrie 1594 a ridicat steagul revoltei împotriva otomanilor. În urma victoriilor de la Călugăreni (13 august 1595) şi Giurgiu (20 octombrie 1595, în alianţă cu prinicipele Transilvaniei, Sigismund Bathory), a obţinut independenţa Ţării Româneşti. În urma victoriei de la Şelimbăr (lângă Sibiu, 18 octombrie 1599), a alipit Transilvania. În mai 1600, fără a întâmpina rezistenţă, a alipit Moldova. Astfel, pentru prima oară era realizată unirea politică a celor trei ţări româneşti. Într-un document din 27 mai 1600, Mihai se intitula cu mândrie: „Io Mihail Voievod, din mila lui Dumnezeu, domn al Ţării Româneşti, al Ardealului şi a toată Ţara Moldovei.” Aceasta a fost cea mai măreaţă faptă a Evului Mediu românesc. Marea sa realizare a fost pentru scurt timp, el fiind doborât de duşmani numeroşi şi puternici. În ciuda acestui fapt, Mihai Viteazul a fost o mare personalitate a istoriei românilor. Unirea de la 1600 a constituit un model pentru generaţiile viitoare.</p><p><span>Unirea Ţărilor Române</span> = În timpul domniei lui Mihai Viteazul la 27 mai 1600, s-a realizat pentru prima data unirea politica a celor trei tari romanesti cu un singur conducator. In punctul cel mai inalt al destinului sau Mihai Viteazul se intitula intr-un hristov emis la 27 mai „Domn al Tarii Romanesti, Ardealului si Moldovei” si isi confectiona bine cunoscuta pecete pe care figureaza cele 3 tari romane surori.","<p><span>Mircea cel Bătrân (1386-1418)</span> =  domnul Țării Românești între 23 septembrie 1386 - noiembrie 1394 (sau mai 1395) și între ianuarie 1397 - 31 ianuarie 1418.În timpul lui Mircea cel Bătrân, Țara Românească a ajuns la cea mai mare întindere teritorială din istoria sa. Acest fapt a adus cu sine și o întărire a autorității sale, exprimată în titulatura pompoasă (care încludea și titlul de despot „al țărilor lui Dobrotici”) și în reprezentarea numismatică.unul dintre cei mai importanţi domni ai Ţării Româneşti. A fost un domn viteaz şi gospodar. În perioada domniei sale, ţara a fost prosperă, puternică şi respectată. Niciodată Ţara Românească nu a cunoscut o asemenea întindere teritorială ca în timpul domniei lui Mircea, care a lărgit graniţele statului prin alipirea străvechiului pământ românesc al Dobrogei. A fost în relaţii bune cu toţi vecinii: Moldova, Ungaria, Polonia,  cu care a încheiat tratate de alianţă. A ştiut să apere independenţa ţării sale ameninţată de dorinţa de cucerire a otomanilor conduşi de sultanul Baiazid I. Lupta cea mare s-a desfăşurat la Rovine (1394/1395), într-un loc bine cunoscut de români şi s-a încheiat cu o strălucită victorie românească.După moartea lui Baiazid, fiii acestuia luptau pentru putere. Cât de puternică era Ţara Românească în timpul lui Mircea cel Bătrân se vede din faptul că domnul român a impus din rândurile lor sultani pe tronul împărăţiei otomane. </p><p><span>Mehmed I Çelebi</span> =  sultan al Imperiului Otoman între anii 1413 – 1421.A fost unul dintre fii lui Baiazid I, iar domnia sa a fost marcată de Interregnul Otoman, un război civil ce a despărţit Sultanatul. A reuşit însă să îl reunească înaintea morţii sale în 1421.","<p><span>Războiul de Independenţă al Romaniei</span> = numele folosit în istoriografia română pentru participarea <span>Principatelor Unite</span> la Războiul ruso-turc din anii 1877 – 1878. În urma acestui război, România a obținut independența față de Imperiul Otoman. Pe 16 aprilie 1877, Principatele Unite și Imperiul Rus au semnat un tratat la București care permitea trupelor ruse să traverseze teritoriul tării în drumul spre Balcani, cu condiția respectării integrității teritoriale a României.</p><p><span>Mihail Kogălniceanu (1817-1891)</span> = om politic de orientare liberală, avocat, istoric și publicist român originar din Moldova, care a devenit prim-ministru al României la 11 octombrie 1863, după Unirea din 1859 a Principatelor Dunărene în timpul domniei lui Alexandru Ioan Cuza, și mai târziu a servit ca ministru al Afacerilor Externe sub domnia lui Carol I. A fost de mai multe ori ministru de interne în timpul domniilor lui Cuza și Carol. A fost unul dintre cei mai influenți intelectuali români ai generației sale (situându-se pe curentul moderat al liberalismului).</p><p><span>Ion C. Brătianu (1821-1891)</span> = om politic român, fratele lui Dumitru C. Brătianu. A urmat cursurile primare la Pitești avându-l ca dascăl pe Nicolae Simonide. A intrat în armata munteană în 1838 și a vizitat Parisul pentru a studia. Întors în Muntenia, a luat parte, împreună cu prietenul său, C.A. Rosetti și alți politicieni proeminenți, la rebeliunea română din 1848, fiind prefect al poliției în guvernul provizoriu al acelui an. A fost membru de onoare (din 1888) al Academiei Române.</p><p><span>Carol I al României</span> =  domnitorul, apoi regele României, care a condus Principatele Române și apoi România după abdicarea forțată de o lovitură de stat a lui Alexandru Ioan Cuza. În cei 48 de ani ai domniei sale (cea mai lungă domnie din istoria statelor românești), Carol I a obținut independența țării, datorită căreia i-a și crescut imens prestigiul, a redresat economia, a dotat România cu o serie de instituții specifice statului modern și a pus bazele unei dinastii. A construit în munții Carpați castelul Peleș, care a rămas și acum una dintre cele mai vizitate atracții turistice ale țării. După războiul ruso-turc (1877-1878), România a câștigat Dobrogea (dar a pierdut sudul Basarabiei), iar Carol a dispus ridicarea podului peste Dunăre, între Fetești și Cernavodă, care să lege noua provincie de restul țării.</p>","<p><span>Primul Război Mondial</span> = război izbucnit în vara anului 1914, pretextul său fiind asasinarea arhiducelui Franz Ferdinand (moștenitorul tronului Imperiului Austro-Ungar) la Sarajevo. Confruntarea militară la care au participat 33 de state de pe cinci continente, pe parcursul a 52 de luni, a fost fără precedent în istoria omenirii, ca amploare, arie de desfășurare și durată. Cele două mari alianțe politico-militare care s-au confruntat au fost Antanta sau Tripla Înțelegere (Franța, Imperiul Britanic, Imperiul Țarist) și Tripla Alianță sau Puterile Centrale (Germania, Austro-Ungaria), fiecare cu aliații săi. Mai mult de 9 milioane de persoane au fost ucise pe câmpurile de luptă ale războiului iar, pe lângă acestea, mai mulți și-au pierdut viața în spatele liniilor frontului, datorită lipsei resurselor de bază.</p><p><span>România comunistă</span> = denumire neoficială, folosită uneori cu referire la perioada comunistă din istoria României în care țara a fost cunoscută cu denumirile oficiale de Republica Populară Romînă, Republica Populară Română și respectiv, Republica Socialistă România. În această perioadă, Partidul Comunist Român a fost, de facto, partidul politic unic care a dictat prin guvern viața publică în România. După încheierea celui de-al Doilea Război Mondial, Uniunea Sovietică a făcut presiuni pentru includerea în guvernele postbelice a unor reprezentanți ai Partidul Comunist din România, recent reintrat în legalitate (partidul fusese interzis în 1924 pe motivul acceptării tezei cominterniste „a dreptului popoarelor oprimate din România imperialistă la autodeterminare până la despărțirea de stat”), în vreme ce liderii necomuniști erau eliminați în mod constant din viața politică.</p>","<p><span>Ştefan cel Mare</span> = Ștefan al III-lea (n. 1438-1439, Borzești - d. 2 iulie 1504, Suceava), supranumit Ștefan cel Mare sau, după canonizarea sa de către Biserica Ortodoxă Română, Ștefan cel Mare și Sfânt, a fost domnul Moldovei între anii 1457 și 1504. A fost fiul lui Bogdan al II-lea, domnind timp de 47 de ani, cea mai lungă domnie din epoca medievală din Țările Române. Ștefan a încercat să aducă și Țara Românească în sfera sa de inflență și a susținut un favorit al său pentru tronul muntenesc. A urmat o luptă de durată între diferiții domnitori munteni susținuți de maghiari, de otomani și de Ștefan. În 1475 a fost trimisă o armată otomană în frunte cu Hadim Paşa pentru a-l pedepsi pe Ștefan pentru amestecul în Țara Românească; otomanii au suferit însă o grea înfrângere în <span>bătălia de la Vaslui</span>.</p><p><span>Bătălia de la Vaslui</span> = (10 ianuarie 1475) reprezintă cea mai strălucită victorie a unei armate românești medievale împotriva otomanilor. Ștefan cel Mare a dorit să înscăuneze pe tronul Țării Românești un domn favorabil războiului antiotoman. Boierimea munteană nu a îmbrățișat această posibilitate, având în vedere prezența la Dunăre a puterii otomane. În consecință, ori de câte orii Ștefan înscăuna un domn la Târgoviște, acesta se închina otomanilor, care, în schimb, garantau autonomia țării. Acțiunile lui Ștefan cel Mare în Țara Românească, ca și refuzul de a plăti tributul, au provocat intervenția otomană. Armata condusă de Suleyman Pașa a fost zdrobită la Vaslui (10 ianuarie 1475). În această bătălie, 40 000 de oșteni moldoveni (și un mic ajutor din partea regelui Ungariei, Matei Corvin) au  învins 120 000 de otomani.</p><p><span>Mohamed al II-lea</span> = cel de-al treilea fiu al sultanului Murad al II-lea, a ajuns sultan la vârsta de 12 ani, a fost al șaptelea sultan al Imperiului Otoman între 1444 și 1446, și între 1451 și 1481. A fost unul dintre cei mai puternici sultani din istoria Imperiului Otoman, fiind şi cel care a reuşit să cucerească Constantinopolul.</p>"]
		
	

];	
	var banner,vid,content;
window.onload = function(){
	document.body.style.backgroundColor="black";
	document.getElementById("strip").style.height=0.04*y0+"px";
	var x=Number(window.localStorage.getItem("categorie"));
	var z=Number(window.localStorage.getItem("film"));
	var titlu=String(window.localStorage.getItem("titlu"));
	var bgimg=window.localStorage.getItem("bgimg");
	var bgpos=String(window.localStorage.getItem("bgpos"));
	var bgrep=String(window.localStorage.getItem("bgrep"));
	var bgsize=String(window.localStorage.getItem("bgsize"));
	console.log(typeof z)
	var d=document.getElementById("lista").children;
	
	for(var i=0;i<=d.length-1;i++)
	{
		d[i].style.fontSize=0.05*y0+"px";
	}
	banner=document.createElement("div");
	banner.innerHTML='<div id=titlubanner></div>';
	banner.id="banner";
	banner.style.marginTop=6+"%";
	banner.style.transition="0.3s all";
	banner.style.position="relative";
	banner.style.display="block";
	banner.style.width="100%";
	banner.style.height=0.18*y0-5+"px";
	banner.style.backgroundColor="red";
	banner.style.border="5px solid #65000B";
	banner.style.borderLeft="none";
	banner.style.borderRight="none";
	banner.style.backgroundImage=bgimg;
	banner.style.backgroundPosition=bgpos;
	banner.style.backgroundRepeat=bgrep;
	banner.style.backgroundSize=bgsize;
	banner.style.cursor="pointer";
	lista.style.transition="opacity 1s";
	banner.style.transition="opacity 1s";
	banner.style.boxShadow="5x 0px 15px black";
	document.body.appendChild(banner);	
	
	
	vid=document.createElement("iframe");
	vid.id='iframevid';
	vid.src=sursa[x][z];
	vid.style.top="50%"
		vid.style.marginTop=-0.40*x0*(0.6)+"px";
		vid.style.marginLeft="-40%";
		vid.style.left="50%";
		vid.style.display="block";
		vid.width=0.8*x0;
		vid.height=0.8*y0;
	vid.allowscreenacces='always';
	vid.style.transition="1s all";
	vid.style.cursor="pointer";
	vid.style.filter="blur(3px)";
	vid.style.border="3px solid #65000B";
	vid.style.position="fixed";
	vid.style.textAlign="center";
	vid.style.boxShadow="0px 0px 15px black";
	document.body.appendChild(vid);	
	
	
	titlubanner.innerHTML=titlu;
	titlubanner.style.textAlign="center";
	titlubanner.style.marginTop="10px";
	titlubanner.style.fontFamily="bebasregular";
	titlubanner.style.fontSize=0.05*y0+"px";
	titlubanner.style.marginTop=0.4*(0.18*y0-5)+"px";
	titlubanner.style.color="white";
	titlubanner.style.textShadow="0px 0px 15px #65000B";
	titlubanner.style.transition="1s all";
	titlubanner.style.display="inline";
	banner.style.opacity=0;
	lista.style.opacity=0;
	titlubanner.style.opacity=0;
	banner.style.display="inline";
	lista.style.display="inline";
	titlubanner.style.position="absolute";
	banner.style.position="absolute";
	lista.style.position="absolute";
	
	
	content=document.createElement("div");
	content.id="content";
	content.style.position="absolute";
	content.style.opacity=0;
	content.style.display="inline";
	content.style.transition="2s all";
	document.body.appendChild(content);
	descrieretitlu=document.createElement("div");
	descrieretitlu.style.display="block";
	descrieretitlu.style.position="relative";
	descrieretitlu.style.marginTop="1%";
	descrieretitlu.style.marginLeft="auto";
	descrieretitlu.style.marginRight="auto";
	descrieretitlu.style.textAlign="center";
	descrieretitlu.style.width=0.5*x0+"px";
	descrieretitlu.innerHTML="DESCRIERE";
	descrieretitlu.style.fontFamily="bebasregular";
	descrieretitlu.style.color="white";
	descrieretitlu.style.fontSize=0.05*y0+"px";
	descrieretitlu.style.background="linear-gradient(to bottom, #470001, #190a05)";
	descrieretitlu.style.paddingTop=0.01*y0+"px";
	descrieretitlu.style.textShadow="0px 0px 5px grey";
	descrieretitlu.style.boxShadow="0px 0px 15px black";
	descrieretitlu.style.padding="20px 10px 10px 10px";
	document.getElementById("content").appendChild(descrieretitlu);
	
	descriere=document.createElement("div");
	descriere.style.display="block";
	descriere.style.position="relative";
	descriere.style.marginLeft="auto";
	descriere.style.marginRight="auto";
	descriere.style.textAlign="center";
	descriere.style.width=0.5*x0+"px";
	descriere.innerHTML=String(descrierec[x][z]);
	descriere.style.fontFamily="hattori_hanzolight";
	descriere.style.color="white";
	descriere.style.fontSize=0.02*y0+"px";
	descriere.style.marginTop="0";
	descriere.style.lineHeight=200+"%";
	descriere.style.background="radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 50%,rgba(0,0,0,1) 100%)";
	descriere.style.paddingTop=0.02*y0+"px";
	descriere.style.textShadow="0px 0px 5px grey";
	descriere.style.boxShadow="0px 0px 15px black";
	descriere.style.padding="10px";
	document.getElementById("content").appendChild(descriere);
	
	regizortitlu=document.createElement("div");
	regizortitlu.style.display="block";
	regizortitlu.style.position="relative";
	regizortitlu.style.marginTop="2%";
	regizortitlu.style.marginLeft="auto";
	regizortitlu.style.marginRight="auto";
	regizortitlu.style.textAlign="center";
	regizortitlu.style.width=0.5*x0+"px";
	regizortitlu.innerHTML="REGIZOR";
	regizortitlu.style.fontFamily="bebasregular";
	regizortitlu.style.color="white";
	regizortitlu.style.fontSize=0.05*y0+"px";
	regizortitlu.style.background="linear-gradient(to bottom, #470001, #190a05)";
	regizortitlu.style.paddingTop=0.01*y0+"px";
	regizortitlu.style.textShadow="0px 0px 5px grey";
	regizortitlu.style.boxShadow="0px 0px 5px black";
	regizortitlu.style.padding="20px 10px 10px 10px";
	document.getElementById("content").appendChild(regizortitlu);
	
	regizor=document.createElement("div");
	regizor.id="regizorc";
	regizor.style.display="block";
	regizor.style.position="relative";
	regizor.style.marginLeft="auto";
	regizor.style.marginRight="auto";
	regizor.style.width=0.5*x0+"px";
	regizor.style.fontFamily="hattori_hanzolight";
	regizor.style.color="white";
	regizor.style.fontSize=0.02*y0+"px";
	regizor.style.marginTop="0";
	regizor.style.lineHeight=200+"%";
	regizor.style.backgroundColor="#000000";
	regizor.style.paddingTop=0.02*y0+"px";
	regizor.style.backgroundImage=regizorimg[x][z];
	regizor.style.backgroundRepeat="no-repeat";
	regizor.style.backgroundSize=0.3*0.5*x0+"px";
	regizor.style.backgroundPosition="90% 50%";
	regizor.style.boxShadow="0px 0px 15px black";
	regizor.style.padding="20px 10px 10px 10px";
	document.getElementById("content").appendChild(regizor);
	
	
	regizortext=document.createElement("div");
	regizortext.style.width=0.6*0.5*x0+"px";
	regizortext.style.position="relative";
	regizortext.style.fontFamily="hattori_hanzolight";
	regizortext.style.fontSize=0.02*y0+"px";
	regizortext.style.marginTop="0";
	regizortext.style.lineHeight="200%";
	regizortext.style.textAlign="center";
	regizortext.style.color="white";
	regizortext.innerHTML=regizordesc[x][z];
	regizortext.style.textShadow="0px 0px 15px grey";
	regizortext.style.padding="10px";
	document.getElementById("regizorc").appendChild(regizortext);
	
	imaginititlu=document.createElement("div");
	imaginititlu.style.display="block";
	imaginititlu.style.position="relative";
	imaginititlu.style.marginTop="2%";
	imaginititlu.style.marginLeft="auto";
	imaginititlu.style.marginRight="auto";
	imaginititlu.style.textAlign="center";
	imaginititlu.style.width=0.7*x0+"px";
	imaginititlu.innerHTML="GALERIE&nbsp;&nbsp;&nbsp;&nbsp;  FILM";
	imaginititlu.style.fontFamily="bebasregular";
	imaginititlu.style.color="white";
	imaginititlu.style.fontSize=0.05*y0+"px";
	imaginititlu.style.background="linear-gradient(to bottom, #470001, #190a05)";
	imaginititlu.style.paddingTop=0.01*y0+"px";
	imaginititlu.style.padding="20px 10px 10px 10px";
	imaginititlu.style.textShadow="0px 0px 5px grey";
	imaginititlu.style.boxShadow="0px 0px 5px black";
	document.getElementById("content").appendChild(imaginititlu);
	
	imagini=document.createElement("div");
	imagini.id="imagini";
	imagini.style.display="block";
	imagini.style.position="relative";
	imagini.style.marginLeft="auto";
	imagini.style.marginRight="auto";
	imagini.style.width=0.7*x0+"px";
	imagini.style.fontFamily="hattori_hanzolight";
	imagini.style.color="white";
	imagini.style.fontSize=0.02*y0+"px";
	imagini.style.marginTop="0";
	imagini.style.lineHeight=200+"%";
	imagini.style.background="radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 50%,rgba(0,0,0,1) 100%)";
	imagini.style.paddingTop=0.02*y0+"px";
	imagini.style.textShadow="0px 0px 5px grey";
	imagini.style.boxShadow="0px 0px 15px black";
	imagini.style.paddingBottom=0.02*y0+"px";
	imagini.style.padding="20px 10px 10px 10px";
	imagini.style.overflow="visible";
	
	var ok=0;
	document.getElementById("content").appendChild(imagini);
	for(var i=0;i<=3;i++)
	{
		
		img[i]=document.createElement("img");
		img[i].id="img"+i;
		img[i].src=imaginic[x][z][i];
		img[i].style.width=0.2*0.7*x0+"px";
		img[i].style.height=0.2*0.7*x0+"px";
		img[i].style.marginLeft=0.04*0.7*x0-14+"px";
		img[i].style.display="inline-block";
		img[i].style.position="relative";
		img[i].style.verticalAlign="middle";
		img[i].style.border="2px solid #470001";
		img[i].style.borderRadius="0px";
		img[i].style.transition="0.5s all";
		img[i].style.cursor="pointer";
		img[i].style.objectFit='contain';
		img[i].style.padding='5px';
		img[i].style.backgroundColor="#100000";
		document.getElementById("imagini").appendChild(img[i]);
	}
	img[0].onclick=function(){zoom0()};
	img[1].onclick=function(){zoom1()};
	img[2].onclick=function(){zoom2()};
	img[3].onclick=function(){zoom3()};
	document.getElementById("pozacont").onclick=function(){zoomout()};
	
	document.getElementById("pozacont").style.width=0.8*x0+"px";
	document.getElementById("pozacont").style.height=0.8*y0+"px";
	
	function zoomout(){
		document.getElementById("pozacont").style.opacity='0';
		document.getElementById("pozacont").style.zIndex='0';
	}
	
	function zoom0(){
		
			document.getElementById("pozacont").style.objectFit='contain';
			document.getElementById("pozacont").src=imaginic[x][z][0];
			document.getElementById("pozacont").style.opacity='1';
			document.getElementById("pozacont").style.zIndex='999';
			
			
		
		
	}
	function zoom1(){
		
			document.getElementById("pozacont").style.objectFit='contain';
			document.getElementById("pozacont").src=imaginic[x][z][1];
			document.getElementById("pozacont").style.opacity='1';
			document.getElementById("pozacont").style.zIndex='999';
		
	}
	function zoom2(){
		
			document.getElementById("pozacont").style.zIndex='999';
			document.getElementById("pozacont").style.objectFit='contain';
			document.getElementById("pozacont").src=imaginic[x][z][2];
			document.getElementById("pozacont").style.opacity='1';
			
	
	}
	function zoom3(){
			document.getElementById("pozacont").style.zIndex='999';
			document.getElementById("pozacont").style.objectFit='contain';
			document.getElementById("pozacont").src=imaginic[x][z][3];
			document.getElementById("pozacont").style.opacity='1';
		
	}
	
	imaginititluist=document.createElement("div");
	imaginititluist.style.display="block";
	imaginititluist.style.position="relative";
	imaginititluist.style.marginTop="2%";
	imaginititluist.style.marginLeft="auto";
	imaginititluist.style.marginRight="auto";
	imaginititluist.style.textAlign="center";
	imaginititluist.style.width=0.7*x0+"px";
	imaginititluist.innerHTML="GALERIE&nbsp;&nbsp;&nbsp;&nbsp;  ISTORICA";
	imaginititluist.style.fontFamily="bebasregular";
	imaginititluist.style.color="white";
	imaginititluist.style.fontSize=0.05*y0+"px";
	imaginititluist.style.background="linear-gradient(to bottom, #470001, #190a05)";
	imaginititluist.style.paddingTop=0.01*y0+"px";
	imaginititluist.style.padding="20px 10px 10px 10px";
	imaginititluist.style.textShadow="0px 0px 5px grey";
	imaginititluist.style.boxShadow="0px 0px 5px black";
	document.getElementById("content").appendChild(imaginititluist);
	
	imaginiist=document.createElement("div");
	imaginiist.id="imaginiist";
	imaginiist.style.display="block";
	imaginiist.style.position="relative";
	imaginiist.style.marginLeft="auto";
	imaginiist.style.marginRight="auto";
	imaginiist.style.width=0.7*x0+"px";
	imaginiist.style.fontFamily="hattori_hanzolight";
	imaginiist.style.color="white";
	imaginiist.style.fontSize=0.02*y0+"px";
	imaginiist.style.marginTop="0";
	imaginiist.style.lineHeight=200+"%";
	imaginiist.style.background="radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 50%,rgba(0,0,0,1) 100%)";
	imaginiist.style.paddingTop=0.02*y0+"px";
	imaginiist.style.textShadow="0px 0px 5px grey";
	imaginiist.style.boxShadow="0px 0px 15px black";
	imaginiist.style.paddingBottom=0.02*y0+"px";
	imaginiist.style.padding="20px 10px 10px 10px";
	imaginiist.style.overflow="visible";
	
	var ok=0;
	document.getElementById("content").appendChild(imaginiist);
	for(var i=0;i<=3;i++)
	{
		
		imgist[i]=document.createElement("img");
		imgist[i].id="imgist"+i;
		imgist[i].src=imaginicist[x][z][i];
		imgist[i].style.width=0.2*0.7*x0+"px";
		imgist[i].style.height=0.2*0.7*x0+"px";
		imgist[i].style.marginLeft=0.04*0.7*x0-14+"px";
		imgist[i].style.display="inline-block";
		imgist[i].style.position="relative";
		imgist[i].style.verticalAlign="middle";
		imgist[i].style.border="2px solid #470001";
		imgist[i].style.borderRadius="0px";
		imgist[i].style.transition="0.5s all";
		imgist[i].style.cursor="pointer";
		imgist[i].style.objectFit='contain';
		imgist[i].style.padding='5px';
		imgist[i].style.backgroundColor="#100000";
		document.getElementById("imaginiist").appendChild(imgist[i]);
	}
	
	imgist[0].onclick=function(){zoomist0()};
	imgist[1].onclick=function(){zoomist1()};
	imgist[2].onclick=function(){zoomist2()};
	imgist[3].onclick=function(){zoomist3()};
	
	
	function zoomout(){
		document.getElementById("pozacont").style.opacity='0';
		document.getElementById("pozacont").style.zIndex='0';
	}
	
	function zoomist0(){
		
			document.getElementById("pozacont").style.objectFit='contain';
			document.getElementById("pozacont").src=imaginicist[x][z][0];
			document.getElementById("pozacont").style.opacity='1';
			document.getElementById("pozacont").style.zIndex='999';
			
			
		
		
	}
	function zoomist1(){
		
			document.getElementById("pozacont").style.objectFit='contain';
			document.getElementById("pozacont").src=imaginicist[x][z][1];
			document.getElementById("pozacont").style.opacity='1';
			document.getElementById("pozacont").style.zIndex='999';
		
	}
	function zoomist2(){
		
			document.getElementById("pozacont").style.zIndex='999';
			document.getElementById("pozacont").style.objectFit='contain';
			document.getElementById("pozacont").src=imaginicist[x][z][2];
			document.getElementById("pozacont").style.opacity='1';
			
	
	}
	function zoomist3(){
			document.getElementById("pozacont").style.zIndex='999';
			document.getElementById("pozacont").style.objectFit='contain';
			document.getElementById("pozacont").src=imaginicist[x][z][3];
			document.getElementById("pozacont").style.opacity='1';
		
	}
	
	dictionartitlu=document.createElement("div");
	dictionartitlu.id="dictionartitlu";
	dictionartitlu.style.display="block";
	dictionartitlu.style.position="relative";
	dictionartitlu.style.marginTop="2%";
	dictionartitlu.style.marginLeft="auto";
	dictionartitlu.style.marginRight="auto";
	dictionartitlu.style.textAlign="center";
	dictionartitlu.style.width=0.5*x0+"px";
	dictionartitlu.innerHTML="DICTIONAR&nbsp;&nbsp; ISTORIC";
	dictionartitlu.style.fontFamily="bebasregular";
	dictionartitlu.style.color="white";
	dictionartitlu.style.fontSize=0.05*y0+"px";
	dictionartitlu.style.background="linear-gradient(to bottom, #470001, #190a05)";
	dictionartitlu.style.paddingTop=0.01*y0+"px";
	dictionartitlu.style.textShadow="0px 0px 5px grey";
	dictionartitlu.style.boxShadow="0px 0px 5px black";
	dictionartitlu.style.padding="20px 10px 10px 10px";
	document.getElementById("content").appendChild(dictionartitlu);
	
	dictionar=document.createElement("div");
	dictionar.id="dictionar";
	dictionar.style.display="block";
	dictionar.style.position="relative";
	dictionar.style.marginLeft="auto";
	dictionar.style.marginRight="auto";
	dictionar.style.width=0.5*x0+"px";
	dictionar.style.textAlign="center";
	dictionar.innerHTML=String(dictionarist[x][z]);
	dictionar.style.fontFamily="hattori_hanzolight";
	dictionar.style.color="white";
	dictionar.style.fontSize=0.02*y0+"px";
	dictionar.style.marginTop="0";
	dictionar.style.lineHeight=200+"%";
	dictionar.style.background="radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 50%,rgba(0,0,0,1) 100%)";
	dictionar.style.paddingTop=0.02*y0+"px";
	dictionar.style.textShadow="0px 0px 5px grey";
	dictionar.style.boxShadow="0px 0px 15px black";
	dictionar.style.padding="10px";
	document.getElementById("content").appendChild(dictionar);
	
	stiaticatitlu=document.createElement("div");
	stiaticatitlu.style.display="block";
	stiaticatitlu.style.position="relative";
	stiaticatitlu.style.marginTop="2%";
	stiaticatitlu.style.marginLeft="auto";
	stiaticatitlu.style.marginRight="auto";
	stiaticatitlu.style.textAlign="center";
	stiaticatitlu.style.width=0.5*x0+"px";
	stiaticatitlu.innerHTML="STIATI&nbsp;&nbsp; CA...";
	stiaticatitlu.style.fontFamily="bebasregular";
	stiaticatitlu.style.color="white";
	stiaticatitlu.style.fontSize=0.05*y0+"px";
	stiaticatitlu.style.background="linear-gradient(to bottom, #470001, #190a05)";
	stiaticatitlu.style.paddingTop=0.01*y0+"px";
	stiaticatitlu.style.textShadow="0px 0px 5px grey";
	stiaticatitlu.style.boxShadow="0px 0px 5px black";
	stiaticatitlu.style.padding="20px 10px 10px 10px";
	document.getElementById("content").appendChild(stiaticatitlu);
	
	stiatica=document.createElement("div");
	stiatica.id="stiatica";
	stiatica.style.display="block";
	stiatica.style.position="relative";
	stiatica.style.marginLeft="auto";
	stiatica.style.marginRight="auto";
	stiatica.style.width=0.5*x0+"px";
	stiatica.style.textAlign="center";
	stiatica.innerHTML=String(stiaticac[x][z]);
	stiatica.style.fontFamily="hattori_hanzolight";
	stiatica.style.color="white";
	stiatica.style.fontSize=0.02*y0+"px";
	stiatica.style.marginTop="0";
	stiatica.style.lineHeight=200+"%";
	stiatica.style.background="radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 50%,rgba(0,0,0,1) 100%)";

	stiatica.style.paddingTop=0.02*y0+"px";

	stiatica.style.textShadow="0px 0px 5px grey";
	stiatica.style.boxShadow="0px 0px 15px black";
	stiatica.style.padding="10px";
	document.getElementById("content").appendChild(stiatica);
	
	setTimeout(function(){
	
		vid.style.filter="blur(0px)";
		
		
	},1000);
	
	var s1=setTimeout(function(){
		vid.style.left="auto";
		vid.style.marginLeft="auto";
		vid.style.marginRight="auto";
		vid.width=0.4*x0;
		vid.height=0.4*y0;
		vid.style.position="relative";
		document.body.style.backgroundColor="#101010";
		
	},timp[x][z]+1000);
	setTimeout(function(){
		document.body.style.backgroundSize="15%,15%";
		document.body.style.backgroundImage="url(http://imgur.com/h9s59fA.png),url(http://imgur.com/8e5CpAu.png)";
		document.getElementById("notif").style.display='none';},timp[x][z]+3000);
		
	var s2=setTimeout(function(){
		
		banner.style.opacity=1;
		lista.style.opacity=1;
		titlubanner.style.opacity=1;
		banner.style.display="block";
		lista.style.display="block";
		titlubanner.style.display="block";
		titlubanner.style.position="relative";
		banner.style.position="relative";
		lista.style.position="fixed";
		vid.style.marginTop="3%";
		content.style.opacity=1;
		content.style.display="block";
		content.style.position="relative";
		content.style.marginTop="3%";
		$('#iframevid')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');  
	
	},timp[x][z]+2000);
	

	
	
	
	
	
}
function skip(){
	vid.style.left="auto";
		vid.style.marginLeft="auto";
		vid.style.marginRight="auto";
		vid.width=0.4*x0;
		vid.height=0.4*y0;
		vid.style.position="relative";
		document.body.style.backgroundColor="#101010";
		setTimeout(function(){
		document.body.style.backgroundSize="15%,15%";
		document.body.style.backgroundImage="url(http://imgur.com/h9s59fA.png),url(http://imgur.com/8e5CpAu.png)";
		document.getElementById("notif").style.display='none';},2000);
		
	setTimeout(function(){
		banner.style.opacity=1;
		lista.style.opacity=1;
		titlubanner.style.opacity=1;
		banner.style.display="block";
		lista.style.display="block";
		titlubanner.style.display="block";
		titlubanner.style.position="relative";
		banner.style.position="relative";
		lista.style.position="fixed";
		vid.style.marginTop="3%";
		content.style.opacity=1;
		content.style.display="block";
		content.style.position="relative";
		content.style.marginTop="3%";
		vid.width=0.4*x0;
		vid.height=0.4*y0;
		$('#iframevid')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');   
	
	},1000);
		
	
}
	
	
	
	
	
	
	
	
	
	
	
	
