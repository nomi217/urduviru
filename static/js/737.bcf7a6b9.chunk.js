"use strict";(self.webpackChunkpwa_demo=self.webpackChunkpwa_demo||[]).push([[737,748,805],{9737:(e,t,i)=>{i.r(t),i.d(t,{default:()=>q});var n=i(65043),o=i(21853),r=i.n(o),s=i(70521),a=i(61258),c=i(59517),d=i(73033),l=i(9508),u=i.n(l);function h(){let e=[];this.onmessage=t=>{"encode"===t.data[0]?function(t){const{length:i}=t,n=new Uint8Array(2*i*1);for(let e=0;e<i;e+=1){const i=2*e*1;let o=t[e];o>1?o=1:o<-1&&(o=-1),o*=32768,n[i]=o,n[i+1]=o>>8}e.push(n)}(t.data[1]):"dump"===t.data[0]?function(t){const i=e.length?e[0].length:0,n=e.length*i,o=new Uint8Array(44+n),r=new DataView(o.buffer);r.setUint32(0,1380533830,!1),r.setUint32(4,36+n,!0),r.setUint32(8,1463899717,!1),r.setUint32(12,1718449184,!1),r.setUint32(16,16,!0),r.setUint16(20,1,!0),r.setUint16(22,1,!0),r.setUint32(24,t,!0),r.setUint32(28,1*t*2,!0),r.setUint16(32,2,!0),r.setUint16(34,16,!0),r.setUint32(36,1684108385,!1),r.setUint32(40,n,!0);for(let a=0;a<e.length;a+=1)o.set(e[a],a*i+44);e=[];const s=[o.buffer];postMessage(s,[s[0]])}(t.data[1]):"close"===t.data[0]&&this.close()}}function p(){let e=null;const t=1152;let i=[];function n(e){const t=new Float32Array(e),i=new Int16Array(e.length);return function(e,t){for(let i=0;i<e.length;i+=1){const n=Math.max(-1,Math.min(1,e[i]));t[i]=n<0?32768*n:32767*n}}(t,i),i}onmessage=function(o){var r;"encode"===o.data[0]?function(o){const r=n(o);let s=r.length;for(let n=0;s>=0;n+=t){const o=r.subarray(n,n+t),a=e.encodeBuffer(o);i.push(a),s-=t}}(o.data[1]):"dump"===o.data[0]?function(){const t=e.flush();t.length>0&&i.push(t),postMessage(i),i=[]}(o.data[1]):"init"===o.data[0]?(r=o.data[1],importScripts(r.baseUrl+"/workers/encoders/lame.min.js"),e=new lamejs.Mp3Encoder(1,r.sampleRate,128)):"close"===o.data[0]&&this.close()}}function m(){let e;importScripts("/urduviru/workers/encoders/libflac.dev.js");let t=1,i=44100,n=5,o=16,r=1,s=0;const a=[];let c=!1;const d=[];function l(e,t){a.push(e),s+=e.byteLength}function u(){if(e=Flac.init_libflac_encoder(i,t,o,n,0),0!==e){const t=Flac.init_encoder_stream(e,l);r&=0==t,console.log(`flac init     : ${r}`),console.log(`status encoder: ${t}`),c=!0}else console.error("Error initializing the encoder.")}function h(i){const n=i.length,o=new Uint32Array(n),r=new DataView(o.buffer);let s=0;for(let e=0;e<n;e+=1)r.setInt32(s,32767*i[e],!0),s+=4;const a=Flac.FLAC__stream_encoder_process_interleaved(e,o,o.length/t);1!=a&&console.log(`Error: encode_buffer_pcm_as_flac returned false. ${a}`)}function p(e,t){const i=function(e,t){const i=new Uint8Array(t);let n=0;const o=e.length;for(let r=0;r<o;r+=1){const t=e[r];i.set(t,n),n+=t.length}return i}(e,t);return new Blob([i],{type:"audio/flac"})}this.onmessage=function(l){if("init"===l.data[0])!function(e){let r=e;r||(r={bps:o,channels:t,samplerate:i,compression:n}),r.channels=r.channels?r.channels:t,r.samplerate=r.samplerate?r.samplerate:i,r.bps=r.bps?r.bps:o,r.compression=r.compression?r.compression:n,n=r.compression,o=r.bps,i=r.samplerate,t=r.channels,Flac.isReady()?u():Flac.onready=function(){setTimeout((()=>{u()}),0)}}(l.data[1]);else if("encode"===l.data[0])!function(e){if(Flac.isReady()){if(d.length>0){const e=d.length,t=d.splice(0,e);for(let i=0;i<e;++i)h(t[i])}h(e)}else d.push(e),console.info("buffered audio data for Flac encdoing")}(l.data[1]);else if("dump"===l.data[0]){let t;Flac.isReady()?(r&=Flac.FLAC__stream_encoder_finish(e),console.log(`flac finish: ${r}`),t=p(a,s),Flac.FLAC__stream_encoder_delete(e)):console.error("Flac was not initialized: could not encode data!"),a.splice(0,a.length),s=0,d.splice(0,d.length),postMessage(t),c=!1}}}class f{constructor(e){this.cleanup=()=>{this.config.onRecording&&this.em.removeEventListener("recording",this.recordingFn),this.config.onAudioProcesss&&this.em.removeEventListener("onaudioprocess",this.onAudioProcessFn)},this.createWorker=e=>{const t=e.toString().replace(/^function\s*\(\)\s*{/,"").replace(/}$/,""),i=new Blob([t]);return new Worker(URL.createObjectURL(i))},this.startRecording=e=>{if("inactive"!==this.state)return;if(!navigator||!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)return;if(this.audioCtx=new AudioContext({sampleRate:this.config.sampleRate}),this.micGainNode=this.audioCtx.createGain(),this.outputGainNode=this.audioCtx.createGain(),this.config.createDynamicsCompressorNode&&(this.dynamicsCompressorNode=this.audioCtx.createDynamicsCompressor()),this.config.createAnalyserNode&&(this.analyserNode=this.audioCtx.createAnalyser()),(this.config.forceScriptProcessor||this.config.broadcastAudioProcessEvents||!this.config.usingMediaRecorder)&&(this.processorNode=this.audioCtx.createScriptProcessor(this.config.processorBufferSize,1,1)),this.audioCtx.createMediaStreamDestination?this.destinationNode=this.audioCtx.createMediaStreamDestination():this.destinationNode=this.audioCtx.destination,!this.config.usingMediaRecorder){if("mp3"===this.config.manualEncoderId){this.encoderWorker=this.createWorker(p);const e="/urduviru";this.encoderWorker.postMessage(["init",{baseUrl:e,sampleRate:this.audioCtx.sampleRate}]),this.encoderMimeType="audio/mpeg"}else"flac"===this.config.manualEncoderId?(this.encoderWorker=this.createWorker(m),this.encoderWorker.postMessage(["init",{sampleRate:this.audioCtx.sampleRate}]),this.encoderMimeType="audio/flac"):(this.encoderWorker=this.createWorker(h),this.encoderMimeType="audio/wav");this.encoderWorker.addEventListener("message",(e=>{const t=new Event("dataavailable");"ogg"===this.config.manualEncoderId||"flac"===this.config.manualEncoderId?t.data=e.data:t.data=new Blob(e.data,{type:this.encoderMimeType}),this._onDataAvailable(t)}))}const t={audio:{echoCancellation:this.config.enableEchoCancellation}};return this.config.deviceId&&(t.audio.deviceId=this.config.deviceId),navigator.mediaDevices.getUserMedia(t).then((t=>{this._startRecordingWithStream(t,e)})).catch((e=>{console.log(e)}))},this.setMicGain=e=>{this.config.micGain=e,this.audioCtx&&this.micGainNode&&this.micGainNode.gain.setValueAtTime(e,this.audioCtx.currentTime)},this._startRecordingWithStream=(e,t)=>{this.micAudioStream=e,this.inputStreamNode=this.audioCtx.createMediaStreamSource(this.micAudioStream),this.audioCtx=this.inputStreamNode.context,this.onGraphSetupWithInputStream&&this.onGraphSetupWithInputStream(this.inputStreamNode),this.inputStreamNode.connect(this.micGainNode),this.micGainNode.gain.setValueAtTime(this.config.micGain,this.audioCtx.currentTime);let i=this.micGainNode;this.dynamicsCompressorNode&&(this.micGainNode.connect(this.dynamicsCompressorNode),i=this.dynamicsCompressorNode),this.state="recording",this.processorNode?(i.connect(this.processorNode),this.processorNode.connect(this.outputGainNode),this.processorNode.onaudioprocess=e=>this._onAudioProcess(e)):i.connect(this.outputGainNode),this.analyserNode&&i.connect(this.analyserNode),this.outputGainNode.connect(this.destinationNode),this.config.usingMediaRecorder?(this.mediaRecorder=new MediaRecorder(this.destinationNode.stream,{mimeType:this.encoderMimeType||"audio/wav"}),this.mediaRecorder.addEventListener("dataavailable",(e=>this._onDataAvailable(e))),this.mediaRecorder.addEventListener("error",(e=>this._onError(e))),this.mediaRecorder.start(t)):(this.outputGainNode.gain.setValueAtTime(0,this.audioCtx.currentTime),t&&(console.log("Time slicing without MediaRecorder is not yet supported. The resulting recording will not be playable."),this.slicing=setInterval((function(){"recording"===this.state&&this.encoderWorker.postMessage(["dump",this.context.sampleRate])}),t)))},this._onAudioProcess=e=>{this.config.broadcastAudioProcessEvents&&this.em.dispatchEvent(new CustomEvent("onaudioprocess",{detail:{inputBuffer:e.inputBuffer,outputBuffer:e.outputBuffer}})),this.config.usingMediaRecorder||"recording"===this.state&&(this.config.broadcastAudioProcessEvents?this.encoderWorker.postMessage(["encode",e.outputBuffer.getChannelData(0)]):this.encoderWorker.postMessage(["encode",e.inputBuffer.getChannelData(0)]))},this.stopRecording=()=>{"inactive"!==this.state&&(this.config.usingMediaRecorder?(this.state="inactive",this.mediaRecorder.stop()):(this.state="inactive",this.encoderWorker.postMessage(["dump",this.audioCtx.sampleRate]),clearInterval(this.slicing)))},this._onDataAvailable=e=>{if(this.chunks.push(e.data),this.chunkType=e.data.type,"inactive"!==this.state)return;const t=new Blob(this.chunks,{type:this.chunkType}),i=URL.createObjectURL(t),n={ts:(new Date).getTime(),blobUrl:i,mimeType:t.type,size:t.size};this.chunks=[],this.chunkType=null,this.destinationNode&&(this.destinationNode.disconnect(),this.destinationNode=null),this.outputGainNode&&(this.outputGainNode.disconnect(),this.outputGainNode=null),this.analyserNode&&(this.analyserNode.disconnect(),this.analyserNode=null),this.processorNode&&(this.processorNode.disconnect(),this.processorNode=null),this.encoderWorker&&(this.encoderWorker.postMessage(["close"]),this.encoderWorker=null),this.dynamicsCompressorNode&&(this.dynamicsCompressorNode.disconnect(),this.dynamicsCompressorNode=null),this.micGainNode&&(this.micGainNode.disconnect(),this.micGainNode=null),this.inputStreamNode&&(this.inputStreamNode.disconnect(),this.inputStreamNode=null),this.config.stopTracksAndCloseCtxWhenFinished&&(this.micAudioStream.getTracks().forEach((e=>e.stop())),this.micAudioStream=null,this.audioCtx.close(),this.audioCtx=null),this.em.dispatchEvent(new CustomEvent("recording",{detail:{recording:n}}))},this._onError=e=>{console.log("error",e),this.em.dispatchEvent(new Event("error"))},window.AudioContext=window.AudioContext||window.webkitAudioContext,this.em=document.createDocumentFragment(),this.state="inactive",this.chunks=[],this.chunkType="",this.encoderMimeType="audio/wav",this.config={broadcastAudioProcessEvents:void 0!==e.broadcastAudioProcessEvents&&e.broadcastAudioProcessEvents,createAnalyserNode:void 0!==e.createAnalyserNode&&e.createAnalyserNode,createDynamicsCompressorNode:void 0!==e.createDynamicsCompressorNode&&e.createDynamicsCompressorNode,forceScriptProcessor:void 0!==e.forceScriptProcessor&&e.forceScriptProcessor,manualEncoderId:void 0!==e.manualEncoderId?e.manualEncoderId:"wav",micGain:void 0!==e.micGain?e.micGain:1,processorBufferSize:void 0!==e.processorBufferSize?e.processorBufferSize:2048,stopTracksAndCloseCtxWhenFinished:void 0===e.stopTracksAndCloseCtxWhenFinished||e.stopTracksAndCloseCtxWhenFinished,usingMediaRecorder:void 0!==e.usingMediaRecorder?e.usingMediaRecorder:"undefined"!==typeof window.MediaRecorder,enableEchoCancellation:void 0===e.enableEchoCancellation||e.enableEchoCancellation,sampleRate:void 0!==e.sampleRate?e.sampleRate:44100,onRecording:e.onRecording,onAudioPress:e.onAudioPress},e.onRecording&&(this.recordingFn=t=>e.onRecording(t),this.em.addEventListener("recording",this.recordingFn)),e.onAudioProcesss&&(this.onAudioProcessFn=t=>e.onAudioProcesss(t),this.em.addEventListener("onaudioprocess",this.onAudioProcessFn))}}var g=i(27249),x=i(97607),b=i(22963),v=i.n(b),y=i(88016),C=i(30009);const k=C.default.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    margin: auto;
`,w=C.default.div`
  font-family: 'Biko';
  font-size: 30px;
  line-height: 30px;
  margin-bottom: 10px;
  font-weight: 600;
`,R=C.default.div`
  font-family: 'Source Sans Pro';
  text-align: center;
  line-height: 25px;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 30px;
`;var S=i(70579);v().setAppElement("#root");const N=n.memo((e=>{let{modalTitle:t,children:i,onConfirm:n,...o}=e;const{t:r}=(0,s.B)();return(0,S.jsx)(v(),{...o,style:{content:{height:"281px",maxWidth:"348px",margin:"auto",borderRadius:"10px",border:"none"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"}},children:(0,S.jsxs)(k,{className:"ModalBody",children:[(0,S.jsx)(w,{children:t}),(0,S.jsx)(R,{children:i}),(0,S.jsx)(y.A,{onClick:n,dark:!0,children:r("recordingsIntroduction:retryButton","Retry")})]})})}));const A=i.p+"static/media/start.9f864f38972bb654ed0bdf63209257e0.svg";var T=i(46716),E=i(68212);const j=C.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`,M=C.default.div`
  display:flex;
  justify-content: space-between;
  width: 144px;
  margin: auto;
`,B=C.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,U=C.default.p`
  font-size: 14px;
  color: ${E.Tj.lightDarkGray};
  margin-top: 8px;
  margin-bottom: 0px;
`,F=C.default.button`
  background-color: ${E.Tj.purple};
  width: 56px;
  height: 56px;
  position: relative;
  outline: none !important;
  border: none;
  border-radius: 50%;
  padding: 0;
  transition: background-color 0.25s;
  opacity: ${e=>e.disabled||e.opacity?"0.5":"1"};

  @supports not (-webkit-touch-callout: none) {
    /* CSS for other than iOS devices */
    -webkit-tap-highlight-color: transparent;
  }

  &:active {
    background-color: ${E.Tj.purple};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    z-index: 1;
    border-radius: 50%;
  }

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    width: 66px;
    height: 66px;
  }
`,$=C.default.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.25s;
`,I=(0,C.default)($)`
  width: 27px;
  height: 27px;
`,_=(0,C.default)($)`
  width: 15px;
  height: 15px;
`,L=C.default.div`
  width: 70px;
  height: 41px;
  font-size: 1.25rem;
  color: ${E.Tj.purple};
  font-weight: bold;
  font-family: 'Source Sans Pro';
  border: 1px solid ${E.Tj.purple};
  border-radius: 15px;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  margin-bottom: 28px;

  @media screen and (${e=>e.theme.breakpoints.tablet}) {
    font-size: 1.75rem;
    margin-top: 22px;
  }
`,D=C.default.div`
  font-size: 16px;
  line-height: 20px;
  color: ${E.Tj.red};
  font-family: 'Source Sans Pro';
  display: flex; 
  margin-left: 20px;
  margin-top:10px;
`,P=C.default.p`
  visibility: ${e=>e.show?"flex":"hidden"};
`,z={usingMediaRecorder:!1,sampleRate:48e3,manualEncoderId:"wav",processorBufferSize:2048},G=e=>{let{className:t="",maxTimeInSeconds:i=30,onNewRecord:o,delay:r=500,recordingFile:a}=e;const{t:c}=(0,s.B)(),d=n.useRef(),l=n.useRef(0),h=n.useRef(),p=n.useRef(),m=n.useRef(),[b,v]=n.useState(!0),[y,C]=n.useState(),[k,w]=n.useState(!1),[R,E]=n.useState(!1),[$,G]=n.useState(!1),W=n.useCallback((e=>{l.current+=1;const{inputBuffer:t,outputBuffer:i}=e.detail;for(let n=0;n<i.numberOfChannels;n+=1){const e=t.getChannelData(n),o=i.getChannelData(n);for(let i=0;i<t.length;i+=1)o[i]=e[i]}}),[]),O=n.useCallback((async e=>{const{detail:t}=e,{recording:i}=t,n=await fetch(i.blobUrl).then((e=>e.blob())),r=`Filename.${z.manualEncoderId}`,s=g.A.blobToFile(n,r),a=g.A.sizeAsHuman(s.size,!0);o(s,a)}),[o]);n.useEffect((()=>{d.current=new f({...z,onRecording:O,onAudioProcesss:W});const e={audio:{echoCancellation:d.current.config.enableEchoCancellation}};if(navigator.mediaDevices.getUserMedia(e).then((()=>{v(!0)})).catch((()=>{v(!1)})),a){const e=a;if(e.size){const t=new Audio(URL.createObjectURL(e));t.load();const i=async()=>{t.removeEventListener("loadedmetadata",i),(0,x.D)(t,!0).then((e=>{var t;null===(t=h.current)||void 0===t||t.setTime(1e3*e)}))};t.addEventListener("loadedmetadata",i)}}return()=>{d.current&&d.current.cleanup()}}),[]);const V=n.useCallback((()=>{d.current&&(l.current=0,d.current.startRecording().then((()=>{var e;(C(!0),E(!1),h.current)&&(h.current.reset(),null===(e=h.current)||void 0===e||e.setTime(0),h.current.start())})).catch((e=>console.error("ERROR",e))))}),[]),H=n.useCallback((()=>{d.current&&(d.current.stopRecording(),C(!1),h.current&&(h.current.getTime()/1e3<2&&E(!0),h.current.stop()))}),[]),Z=n.useCallback((e=>e<10?`0${e}`:e),[]),Y=e=>{"touches"in e||e.preventDefault()},q=n.useCallback((e=>{e.target&&(e.target.addEventListener("touchend",Y,{passive:!1}),m.current=e.target),p.current=setTimeout((()=>{w(!0),G(!0),E(!1)}),r)}),[r]),K=n.useCallback((()=>{p.current&&clearTimeout(p.current),$&&w(!1),G(!1),m.current&&m.current.removeEventListener("touchend",Y)}),[$]);return(0,S.jsxs)(j,{className:t,children:[(0,S.jsxs)(D,{children:[!R&&(0,S.jsx)(P,{show:k,children:c(y?"recordingsIntroduction:releaseButtonStop":"recordingsIntroduction:releaseButtonStart")}),(0,S.jsx)(N,{isOpen:R,modalTitle:"Oops.",onConfirm:V,children:c("recordingsIntroduction:shortRecording")})]}),(0,S.jsx)(L,{children:(0,S.jsxs)(u(),{ref:h,startImmediately:!1,checkpoints:[{time:1e3*i,callback:H}],children:[(0,S.jsx)(u().Minutes,{}),":",(0,S.jsx)(u().Seconds,{formatValue:Z})]})}),(0,S.jsxs)(M,{children:[(0,S.jsxs)(B,{children:[(0,S.jsx)(F,{disabled:!b||y,onClick:V,onMouseDown:q,onMouseUp:K,onTouchStart:q,onTouchEnd:K,onMouseLeave:K,children:(0,S.jsx)(I,{src:A,alt:"Start"})}),(0,S.jsx)(U,{children:c("recordingsIntroduction:recordCough.record")})]}),(0,S.jsxs)(B,{children:[(0,S.jsx)(F,{disabled:!b||!y,onClick:H,onMouseDown:q,onMouseUp:K,onTouchStart:q,onTouchEnd:K,onMouseLeave:K,children:(0,S.jsx)(_,{src:T.A,alt:"Stop"})}),(0,S.jsx)(U,{children:c("recordingsIntroduction:recordCough.stop")})]})]})]})},W=n.memo(G);var O=i(66986);const V=i.p+"static/media/upload.9158ee0e5481659aabd3b47572c2618e.svg";var H=i(21805);const Z=d.Ik({recordingFile:d.gl().required("ERROR.FILE_REQUIRED").test("fileSize","ERROR.FILE_SIZE",(e=>{if(e){const t=e,{size:i}=t;return i<=1024**3*5}return!!e})).test("fileDuration","ERROR.FILE_DURATION",(async e=>{if(e){const t=e,i=new Audio(URL.createObjectURL(t));i.load(),await new Promise((e=>i.addEventListener("loadedmetadata",e)));return await new Promise((e=>{i.duration!==1/0&&e(i.duration),i.addEventListener("durationchange",(()=>{i.remove(),e(i.duration)})),i.volume=0,i.currentTime=86400,i.play()}))>=2}return!!e}))}).defined(),Y=e=>{let{onNext:t,onManualUpload:i,defaultValues:o,currentLogic:d,action:l}=e;const{Portal:u}=r()({bindTo:document&&document.getElementById("wizard-buttons")}),{handleSubmit:h,control:p,getValues:m,formState:f}=(0,a.mN)({mode:"onChange",defaultValues:o,resolver:(0,c.t)(Z)}),{t:g}=(0,s.B)(),{isValid:x}=f,b=n.useRef(1);return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(H.MainContainer,{children:[(0,S.jsx)(H.MicContainer,{children:(0,S.jsx)(a.xI,{control:p,name:"recordingFile",render:e=>{let{onChange:t}=e;return(0,S.jsx)(W,{onNewRecord:t,recordingFile:null===o||void 0===o?void 0:o.recordingFile},b.current)}})}),(0,S.jsxs)(u,{children:[(0,S.jsx)(O.A,{invert:!0,leftLabel:g("recordingsRecord:next"),leftDisabled:!x,leftHandler:h(t)}),(0,S.jsxs)(H.UploadContainer,{onClick:()=>{l({[d]:{recordingFile:m("recordingFile")||null,uploadedFile:null}}),null===i||void 0===i||i()},children:[(0,S.jsx)(H.UploadImage,{src:V}),(0,S.jsx)(H.UploadText,{children:g("recordingsRecord:upload")})]})]})]})})},q=n.memo(Y)},21805:(e,t,i)=>{i.r(t),i.d(t,{MainContainer:()=>a,MicContainer:()=>d,StopImg:()=>p,Text:()=>c,UploadContainer:()=>l,UploadImage:()=>u,UploadText:()=>h});var n=i(30009),o=i(94748),r=i(68212),s=i(46716);const a=n.default.div`
  padding: 0px 0px;
`,c=(0,n.default)(o.L_)`
  color: ${e=>e.theme.colors.darkBlack};
  margin-bottom: 2px;
  text-align: left;

  @media screen and (${e=>e.theme.breakpoints.tablet}){
    max-width: 470px;
    margin: 0 auto;
    font-size: 16px;
  }

  @media screen and (${e=>e.theme.breakpoints.tablet}){
    @media (orientation: portrait) {
      margin-bottom: 248px;
    }

    @media (orientation: landscape) {
      margin-bottom: 24px;
    }
  }
`,d=n.default.div``,l=n.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  margin: 20px auto;
  width: fit-content;


  @media screen and (${e=>e.theme.breakpoints.tablet}){
    padding: 0px 22px;
    margin: 22px auto;
  }
`,u=n.default.img`
  cursor: pointer;
  width: 13px;
  height: 12px;
  margin-right: 7px;
`,h=n.default.div`
  cursor: pointer;
  font-family: Source Sans Pro;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 24px;
  color: ${r.Tj.darkBlack};
`,p=n.default.img.attrs((()=>({src:s.A})))`
  display: inline;
  height: 10px;
  margin: 0px 2px 4px;
`},27249:(e,t,i)=>{i.d(t,{A:()=>n});const n={sizeAsHuman:(e,t)=>{const i=t?1e3:1024;if(Math.abs(e)<i)return`${e} B`;const n=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];let o=-1;do{e/=i,++o}while(Math.abs(e)>=i&&o<n.length-1);return`${e.toFixed(1)} ${n[o]}`},blobToFile:(e,t)=>{const i=e;return i.lastModifiedDate=new Date,i.name=t,e}}},46716:(e,t,i)=>{i.d(t,{A:()=>n});i(65043);const n=i.p+"static/media/stop.d8f5b556448dfb3911a7cae0258e02fb.svg"},66986:(e,t,i)=>{i.d(t,{A:()=>c});var n=i(65043),o=i(88016);const r=i(30009).default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${e=>`calc(100% - ${2*e.theme.layout.generalPaddingAmount}px)`};
  margin: 0 auto;

  button {
    flex: 1;

    &:first-of-type {
      margin-left: 0px !important;
    }

    &:last-of-type {
      margin-left: 20px;
    }
  }

  @media screen and (${e=>e.theme.breakpoints.tablet}){
    max-width: 470px;
  }
`;var s=i(70579);const a=n.memo((e=>{let{invert:t=!1,leftLabel:i,leftDisabled:n,leftHandler:a,rightLabel:c,rightDisabled:d,rightHandler:l}=e;return(0,s.jsxs)(r,{children:[(0,s.jsx)(o.A,{dark:t,disabled:n,onClick:a,children:i}),c&&l&&(0,s.jsx)(o.A,{dark:!t,disabled:d,onClick:l,children:c})]})})),c=n.memo(a)},88016:(e,t,i)=>{i.d(t,{A:()=>c});var n=i(65043),o=i(30009),r=i(68212);const s=o.default.button`
  height: 52px;
  border-radius: 15px; 
  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */
  font-weight: bold;
  font-size: 14px;
  font-weight: bold;
  width: 100%;

  ${e=>{let{dark:t,disabled:i}=e;const n=i?r.Tj.purple_50:r.Tj.purple;return t?`\n    background-color: ${n};\n    color: ${r.Tj.white};\n    border: none;\n  `:`\n    background-color: ${r.Tj.white};\n    color: ${n};\n    border: 1px solid ${n};\n  `}}
`;var a=i(70579);const c=n.memo((e=>{let{children:t,...i}=e;return(0,a.jsx)(s,{type:"button",...i,children:t})}))},94748:(e,t,i)=>{i.d(t,{Od:()=>a,L_:()=>s});var n=i(30009),o=i(68212);const r=n.css`
  font-family: 'Source Sans Pro';
  font-size: 0.875rem;
  line-height: 20px;
`,s=n.default.div`
  ${r}
  color: ${e=>{let{dark:t}=e;return t?o.Tj.darkBlack:o.Tj.black}};
  ${e=>e.fontSize?`font-size: ${e.fontSize};`:""}
`,a=n.default.div`
  font-family: 'Open Sans';
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  color: ${o.Tj.darkBlack};
`},97607:(e,t,i)=>{i.d(t,{D:()=>o});var n=i(53167);function o(e,t){return new Promise((i=>{e.duration===1/0||n.nr&&!(n.nr&&e.duration>0)?(e.addEventListener("durationchange",(()=>{t?e.remove():(e.pause(),e.volume=1,e.currentTime=0),i(e.duration)})),e.currentTime=86400,e.play()):i(e.duration)}))}}}]);
//# sourceMappingURL=737.bcf7a6b9.chunk.js.map