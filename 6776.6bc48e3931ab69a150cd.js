(self.webpackChunkcountdown_proj=self.webpackChunkcountdown_proj||[]).push([[6776],{6776:(e,t,n)=>{"use strict";n.r(t),n.d(t,{createSwipeBackGesture:()=>a});var r=n(1843),o=n(8520);n(6953);const a=(e,t,n,a,s)=>{const c=e.ownerDocument.defaultView;return(0,o.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:n,onMove:e=>{a(e.deltaX/c.innerWidth)},onEnd:e=>{const t=c.innerWidth,n=e.deltaX/t,o=e.velocityX,a=o>=0&&(o>.2||e.deltaX>t/2),i=(a?1-n:n)*t;let u=0;if(i>5){const e=i/Math.abs(o);u=Math.min(e,540)}s(a,n<=0?.01:(0,r.j)(0,n,.9999),u)}})}}}]);