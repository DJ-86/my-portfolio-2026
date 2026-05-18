flagArr = [
    { country: "Andorra", image: "svg/ad.svg"},
    { country: "United Arab Emirates", image: "svg/ae.svg"},
    { country: "Afghanistan", image: "svg/af.svg"},
    { country: "Antigua & Barbuda", image: "svg/ag.svg"},
    { country: "Anguilla", image: "svg/ai.svg"},
    { country: "Albania", image: "svg/al.svg"},
    { country: "Armenia", image: "svg/am.svg"},
    { country: "Angola", image: "svg/ao.svg"},
    { country: "Antarctica", image: "svg/aq.svg"},
    { country: "Argentina", image: "svg/ar.svg"},
    { country: "American Samoa", image: "svg/as.svg"},
    { country: "Austria", image: "svg/at.svg"},
    { country: "Australia", image: "svg/au.svg"},
    { country: "Aruba", image: "svg/aw.svg"},
    { country: "Aland", image: "svg/ax.svg"},
    { country: "Azerbaijan", image: "svg/az.svg"},
    { country: "Bosnia and Herzegovina", image: "svg/ba.svg"},
    { country: "Barbados", image: "svg/bb.svg"},
    { country: "Bangladesh", image: "svg/bd.svg"},
    { country: "Belgium", image: "svg/be.svg"},
    { country: "Burkina Faso", image: "svg/bf.svg"},
    { country: "Bulgaria", image: "svg/bg.svg"},
    { country: "Bahrain", image: "svg/bh.svg"},
    { country: "Burundi", image: "svg/bi.svg"},
    { country: "Benin", image: "svg/bj.svg"},
    { country: "Bermuda", image: "svg/bm.svg"},
    { country: "Brunei", image: "svg/bn.svg"},
    { country: "Bolivia", image: "svg/bo.svg"},
    { country: "Brazil", image: "svg/br.svg"},
    { country: "Bahamas", image: "svg/bs.svg"},
    { country: "Bhutan", image: "svg/bt.svg"},
    { country: "Botswana", image: "svg/bw.svg"},
    { country: "Belarus", image: "svg/by.svg"},
    { country: "Belize", image: "svg/bz.svg"},
    { country: "Canada", image: "svg/ca.svg"},
    { country: "Democratic Republic of Congo", image: "svg/cd.svg"},
    { country: "Central Africa", image: "svg/cf.svg"},
    { country: "Switzerland", image: "svg/ch.svg"},
    { country: "Côte d'Ivoire", image: "svg/ci.svg"},
    { country: "Cook Islands", image: "svg/ck.svg"},
    { country: "Chile", image: "svg/cl.svg"},
    { country: "Cameroon", image: "svg/cm.svg"},
    { country: "China", image: "svg/cn.svg"},
    { country: "Colombia", image: "svg/co.svg"},
    { country: "Costa Rica", image: "svg/cr.svg"},
    { country: "Cuba", image: "svg/cu.svg"},
    { country: "Cabo Verde", image: "svg/cv.svg"},
    { country: "Curaçao", image: "svg/cw.svg"},
    { country: "Christmas Island", image: "svg/cx.svg"},
    { country: "Cyprus", image: "svg/cy.svg"},
    { country: "Czech Republic", image: "svg/cz.svg"},
    { country: "Germany", image: "svg/de.svg"},
    { country: "Djbouti", image: "svg/dj.svg"},
    { country: "Denmark", image: "svg/dk.svg"},
    { country: "Dominica", image: "svg/dm.svg"},
    { country: "Dominican Republic", image: "svg/do.svg"},
    { country: "Algeria", image: "svg/dz.svg"},
    { country: "Ecuador", image: "svg/ec.svg"},
    { country: "Estonia", image: "svg/ee.svg"},
    { country: "Egypt", image: "svg/eg.svg"},
    { country: "Western Sahara", image: "svg/eh.svg"},
    { country: "Eritrea", image: "svg/er.svg"},
    { country: "Spain", image: "svg/es.svg"},
    { country: "Ethiopia", image: "svg/et.svg"},
    { country: "European Union", image: "svg/eu.svg"},
    { country: "Finland", image: "svg/fi.svg"},
    { country: "Fiji", image: "svg/fj.svg"},
    { country: "Falkland Islands", image: "svg/fk.svg"},
    { country: "Micronesia", image: "svg/fm.svg"},
    { country: "Faroe Islands", image: "svg/fo.svg"},
    { country: "France", image: "svg/fr.svg"},
    { country: "Gabon", image: "svg/ga.svg"},
    { country: "Great Britain", image: "svg/gb.svg"},
    { country: "England", image: "svg/gb-eng.svg"},
    { country: "Scotland", image: "svg/gb-sct.svg"},
    { country: "Wales", image: "svg/gb-wls.svg"},
    { country: "Grenada", image: "svg/gd.svg"},
    { country: "Georgia", image: "svg/ge.svg"},
    { country: "Guernsey", image: "svg/gg.svg"},
    { country: "Ghana", image: "svg/gh.svg"},
    { country: "Gibraltar", image: "svg/gi.svg"},
    { country: "Greenland", image: "svg/gl.svg"},
    { country: "Gambia", image: "svg/gm.svg"},
    { country: "Guinea", image: "svg/gn.svg"},
    { country: "Equatorial Guinea", image: "svg/gq.svg"},
    { country: "Greece", image: "svg/gr.svg"},
    { country: "South Sandwich Islands", image: "svg/gs.svg"},
    { country: "Guatemala", image: "svg/gt.svg"},
    { country: "Guam", image: "svg/gu.svg"},
    { country: "Guinea-Bissau", image: "svg/gw.svg"},
    { country: "Guyana", image: "svg/gy.svg"},
    { country: "Hong Kong", image: "svg/hk.svg"},
    { country: "Heard & McDonald Islands", image: "svg/hm.svg"},
    { country: "Honduras", image: "svg/hn.svg"},
    { country: "Croatia", image: "svg/hr.svg"},
    { country: "Haiti", image: "svg/ht.svg"},
    { country: "Hungary", image: "svg/hu.svg"},
    { country: "Indonesia", image: "svg/id.svg"},
    { country: "Ireland", image: "svg/ie.svg"},
    { country: "Israel", image: "svg/il.svg"},
    { country: "Isle of Man", image: "svg/im.svg"},
    { country: "India", image: "svg/in.svg"},
    { country: "British Indian Ocean Territory", image: "svg/io.svg"},
    { country: "Iraq", image: "svg/iq.svg"},
    { country: "Iran", image: "svg/ir.svg"},
    { country: "Italy", image: "svg/it.svg"},
    { country: "Jersey", image: "svg/je.svg"},
    { country: "Jamaica", image: "svg/jm.svg"},
    { country: "Jordan", image: "svg/jo.svg"},
    { country: "Japan", image: "svg/jp.svg"},
    { country: "Kenya", image: "svg/ke.svg"},
    { country: "Kyrgyzstan", image: "svg/kg.svg"},
    { country: "Cambodia", image: "svg/kh.svg"},
    { country: "Kiribati", image: "svg/ki.svg"},
    { country: "Comoros", image: "svg/km.svg"},
    { country: "Saint Kitts and Nevis", image: "svg/kn.svg"},
    { country: "North Korea", image: "svg/kp.svg"},
    { country: "South Korea", image: "svg/kr.svg"},
    { country: "Kuwait", image: "svg/kw.svg"},
    { country: "Cayman Islands", image: "svg/ky.svg"},
    { country: "Kazakhstan", image: "svg/kz.svg"},
    { country: "Laos", image: "svg/la.svg"},
    { country: "Lebanon", image: "svg/lb.svg"},
    { country: "Saint Lucia", image: "svg/lc.svg"},
    { country: "Liechtenstein", image: "svg/li.svg"},
    { country: "Sri Lanka", image: "svg/lk.svg"},
    { country: "Liberia", image: "svg/lr.svg"},
    { country: "Lesotho", image: "svg/ls.svg"},
    { country: "Lithuania", image: "svg/lt.svg"},
    { country: "Luxembourg", image: "svg/lu.svg"},
    { country: "Latvia", image: "svg/lv.svg"},
    { country: "Libya", image: "svg/ly.svg"},
    { country: "Morocco", image: "svg/ma.svg"},
    { country: "Monaco", image: "svg/mc.svg"},
    { country: "Moldova", image: "svg/md.svg"},
    { country: "Montenegro", image: "svg/me.svg"},
    { country: "Madagascar", image: "svg/mg.svg"},
    { country: "Marshall Islands", image: "svg/mh.svg"},
    { country: "North Macedonia", image: "svg/mk.svg"},
    { country: "Mali", image: "svg/ml.svg"},
    { country: "Myanmar", image: "svg/mm.svg"},
    { country: "Mongolia", image: "svg/mn.svg"},
    { country: "Macau", image: "svg/mo.svg"},
    { country: "Northern Mariana Islands", image: "svg/mp.svg"},
    { country: "Mauritania", image: "svg/mr.svg"},
    { country: "Montserrat", image: "svg/ms.svg"},
    { country: "Malta", image: "svg/mt.svg"},
    { country: "Mauritius", image: "svg/mu.svg"},
    { country: "Maldives", image: "svg/mv.svg"},
    { country: "Malawi", image: "svg/mw.svg"},
    { country: "Mexico", image: "svg/mx.svg"},
    { country: "Malaysia", image: "svg/my.svg"},
    { country: "Mozambique", image: "svg/mz.svg"},
    { country: "Namibia", image: "svg/na.svg"},
    { country: "Niger", image: "svg/ne.svg"},
    { country: "Norfolk Island", image: "svg/nf.svg"},
    { country: "Nigeria", image: "svg/ng.svg"},
    { country: "Nicaragua", image: "svg/ni.svg"},
    { country: "Netherlands", image: "svg/nl.svg"},
    { country: "Norway", image: "svg/no.svg"},
    { country: "Nepal", image: "svg/np.svg"},
    { country: "Nauru", image: "svg/nr.svg"},
    { country: "Niue", image: "svg/nu.svg"},
    { country: "New Zealand", image: "svg/nz.svg"},
    { country: "Oman", image: "svg/om.svg"},
    { country: "Panama", image: "svg/pa.svg"},
    { country: "Peru", image: "svg/pe.svg"},
    { country: "French Polynesia", image: "svg/pf.svg"},
    { country: "Papua New Guinea", image: "svg/pg.svg"},
    { country: "Philippines", image: "svg/ph.svg"},
    { country: "Pakistan", image: "svg/pk.svg"},
    { country: "Poland", image: "svg/pl.svg"},
    { country: "Pitcairn Islands", image: "svg/pn.svg"},
    { country: "Puerto Rico", image: "svg/pr.svg"},
    { country: "Palestine", image: "svg/ps.svg"},
    { country: "Portugal", image: "svg/pt.svg"},
    { country: "Palau", image: "svg/pw.svg"},
    { country: "Paraguay", image: "svg/py.svg"},
    { country: "Qatar", image: "svg/qa.svg"},
    { country: "Romania", image: "svg/ro.svg"},
    { country: "Serbia", image: "svg/rs.svg"},
    { country: "Russia", image: "svg/ru.svg"},
    { country: "Rwanda", image: "svg/rw.svg"},
    { country: "Saudi Arabia", image: "svg/sa.svg"},
    { country: "Solomon Islands", image: "svg/sb.svg"},
    { country: "Seychelles", image: "svg/sc.svg"},
    { country: "Sudan", image: "svg/sd.svg"},
    { country: "Sweden", image: "svg/se.svg"},
    { country: "Singapore", image: "svg/sg.svg"},
    { country: "Slovenia", image: "svg/si.svg"},
    { country: "Slovakia", image: "svg/sk.svg"},
    { country: "Sierra Leone", image: "svg/sl.svg"},
    { country: "San Marino", image: "svg/sm.svg"},
    { country: "Senegal", image: "svg/sn.svg"},
    { country: "Somalia", image: "svg/so.svg"},
    { country: "Suriname", image: "svg/sr.svg"},
    { country: "South Sudan", image: "svg/ss.svg"},
    { country: "São Tomé and Príncipe", image: "svg/st.svg"},
    { country: "El Salvador", image: "svg/sv.svg"},
    { country: "Sint Maarten", image: "svg/sx.svg"},
    { country: "Syria", image: "svg/sy.svg"},
    { country: "Swaziland", image: "svg/sz.svg"},
    { country: "Turks and Caicos Islands", image: "svg/tc.svg"},
    { country: "Chad", image: "svg/td.svg"},
    { country: "French Southern Territories", image: "svg/tf.svg"},
    { country: "Togo", image: "svg/tg.svg"},
    { country: "Thailand", image: "svg/th.svg"},
    { country: "Tajikistan", image: "svg/tj.svg"},
    { country: "Tokelau", image: "svg/tk.svg"},
    { country: "Timor-Leste", image: "svg/tl.svg"},
    { country: "Turkmenistan", image: "svg/tm.svg"},
    { country: "Tunisia", image: "svg/tn.svg"},
    { country: "Tonga", image: "svg/to.svg"},
    { country: "Turkey", image: "svg/tr.svg"},
    { country: "Trinidad and Tobago", image: "svg/tt.svg"},
    { country: "Tuvalu", image: "svg/tv.svg"},
    { country: "Taiwan", image: "svg/tw.svg"},
    { country: "Tanzania", image: "svg/tz.svg"},
    { country: "Ukraine", image: "svg/ua.svg"},
    { country: "Uganda", image: "svg/ug.svg"},
    { country: "United States", image: "svg/us.svg"},
    { country: "Uruguay", image: "svg/uy.svg"},
    { country: "Uzbekistan", image: "svg/uz.svg"},
    { country: "Vatican City", image: "svg/va.svg"},
    { country: "Saint Vincent and the Grenadines", image: "svg/vc.svg"},
    { country: "Venezuela", image: "svg/ve.svg"},
    { country: "British Virgin Islands", image: "svg/vg.svg"},
    { country: "American Virgin Islands", image: "svg/vi.svg"},
    { country: "Vietnam", image: "svg/vn.svg"},
    { country: "Vanuatu", image: "svg/vu.svg"},
    { country: "Wallis and Futuna", image: "svg/wf.svg"},
    { country: "West Samoa", image: "svg/ws.svg"},
    { country: "Kosovo", image: "svg/xk.svg"},
    { country: "Yemen", image: "svg/ye.svg"},
    { country: "South Africa", image: "svg/za.svg"},
    { country: "Zambia", image: "svg/zm.svg"},
    { country: "Zimbabwe", image: "svg/zw.svg"}
    ];




let labels = document.getElementsByClassName('answerLabels');
let myScore = document.querySelector("#score");
let flag = document.querySelector("#flag");
flag.style.display = "none";
let h3 = document.querySelector("#score");
h3.style.display = "none";
let choices = document.querySelector("#multipleChoiceBox")
choices.style.display = "none";
let score = 0;

function timer1() {
    quiz();
    let timerId1 = setInterval(pickFlag, 4000);
    setTimeout(() => { clearInterval(timerId1); alert(`Game Over, You scored ${score} out of 50`); location.reload(); }, 44000);  
}

function timer2() {
    quiz();
    let timerId2 = setInterval(pickFlag, 4000);
    setTimeout(() => { clearInterval(timerId2); alert(`Game Over, You scored ${score} out of 100`); location.reload(); }, 84000);
}

function timer3() {
    quiz();
    let timerId3 = setInterval(pickFlag, 4000);
    setTimeout(() => { clearInterval(timerId3); alert(`Game Over, You scored ${score} out of 200`); location.reload(); }, 164000);
}
     
function checkSetting() { 
    let settings = document.getElementsByClassName("settingChoice");
    if(settings[0].checked) {
        timer1();
    } else if (settings[1].checked) {
        timer2();
    } else if (settings[2].checked) {
        timer3();
    }   
}       

function quiz() {
    let h1 = document.querySelector('h1');
    let h2 = document.querySelector('h2');
    let settingLengthBox = document.querySelector("#settingLengthBox");
    h1.style.display ="none";
    h2.style.display ="none"; 
    settingLengthBox.style.display = "none";
    settingLengthBox.style.transition = "all 2s";
    h3.style.display = "flex";
    flag.style.display = "flex";
    choices.style.display = "grid"; 
}

function pickFlag() {
    checker();
    uniq = [];
    trueArr = [];
    const randomNum = Math.floor(Math.random() * flagArr.length);
    const item = flagArr[randomNum].image;
    image = document.getElementById("flag").src =`${item}`;
    let truth = flagArr[randomNum].country;
    trueArr.push(truth); 
    falsePicker();
}

function tester() {
    uniq = [...new Set(trueArr)];
    if(uniq.length < 4) {
    falsePicker()            
    }
    shuffle();
}  

function validator() {
    for (i=0; i<trueArr.length; i++) {
        for(j = 1; j<trueArr.length; j++) {
            if (i.value === j.value) {
                pickFlag();
            }
        }
    }
}
    
function falsePicker() {
    trueArr.length = 1;
    for(i = 0; i < 3; i++) {
    const randomNum = Math.floor(Math.random() * flagArr.length);
    const item = flagArr[randomNum].country;
    trueArr.push(item)
    }
    tester();
}

function shuffle() {
  let currentIndex = uniq.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [uniq[currentIndex], uniq[randomIndex]] = [
      uniq[randomIndex], uniq[currentIndex]];
  }
  fillChoice();
}

function fillChoice() {
    let labels = document.getElementsByClassName('answerLabels') 
    for(i=0; i<labels.length; i++) {
        labels[i].innerText = `${uniq[i]}`;   
    }
}

function checker(){
    let check = document.getElementsByClassName('choice');
    for (i = 0; i < check.length; i++)
    {
       if (check[i].checked && labels[i].outerText === trueArr[0]) {
        score  += 5;
        myScore.style.color = "green";
        myScore.innerText = score;      
       }  
    }
}

window.addEventListener("load", pickFlag);
let startButton = document.getElementById("startButton");
startButton.addEventListener("click", checkSetting);
