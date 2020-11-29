import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	/* Generated on: Mon Sep 12 2016 06:57:26 GMT+0000 (UTC) */
	/* ==========================================================================
	normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css
	========================================================================== */
	/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}

	/* ==========================================================================
	Start of base Webflow CSS - If you're looking for some ultra-clean CSS, skip the boilerplate and see the unminified code below.
	========================================================================== */
	@font-face{font-family:'webflow-icons';src:url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg6SAy0AAAC8AAAAYGNtYXAaVcxaAAABHAAAAExnYXNwAAAAEAAAAWgAAAAIZ2x5ZgscV1gAAAFwAAABhGhlYWQCkFKvAAAC9AAAADZoaGVhB0MDyQAAAywAAAAkaG10eBIAA10AAANQAAAAIGxvY2EBMADyAAADcAAAABJtYXhwAAwATQAAA4QAAAAgbmFtZWTuiIAAAAOkAAABe3Bvc3QAAwAAAAAFIAAAACAAAwQAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADmAwPA/8D/wAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEADgAAAAKAAgAAgACAAEAIOYD//3//wAAAAAAIOYA//3//wAB/+MaBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQEgAAADIAOAAAUAAAkBBwkBFwMg/kBAAYD+gEABwAHAQP6A/oBAAAEA4AAAAuADgAAFAAATARcJAQfgAcBA/oABgEABwAHAQP6A/oBAAAADAMAA4ANAAsAAGAAxAEoAAAEhIg4CHQEUHgIzITI+Aj0BNC4CIxUhIg4CHQEUHgIzITI+Aj0BNC4CIxUhIg4CHQEUHgIzITI+Aj0BNC4CIwMg/cAHCwkFBQkLBwJABwsJBQUJCwf9wAcLCQUFCQsHAkAHCwkFBQkLB/3ABwsJBQUJCwcCQAcLCQUFCQsHAsAFCQsHIAcLCQUFCQsHIAcLCQXABQkLByAHCwkFBQkLByAHCwkFwAUJCwcgBwsJBQUJCwcgBwsJBQAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFFv+egGGAAAAAAEAAAABAADSLAJOXw889QALBAAAAAAAz/iHGQAAAADP+IcZAAAAAAOBA4AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAA4EAAQAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAACAAAABAABIAQAAOAEAADABAAAnQAAAAAACgAUAB4AMgBGAKwAwgAAAAEAAAAIAEsAAwAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAaAAAAAQAAAAAAAgAOAHEAAQAAAAAAAwAaADAAAQAAAAAABAAaAH8AAQAAAAAABQAWABoAAQAAAAAABgANAEoAAQAAAAAACgA0AJkAAwABBAkAAQAaAAAAAwABBAkAAgAOAHEAAwABBAkAAwAaADAAAwABBAkABAAaAH8AAwABBAkABQAWABoAAwABBAkABgAaAFcAAwABBAkACgA0AJkAdwBlAGIAZgBsAG8AdwAtAGkAYwBvAG4AcwBWAGUAcgBzAGkAbwBuACAAMQAuADAAdwBlAGIAZgBsAG8AdwAtAGkAYwBvAG4Ac3dlYmZsb3ctaWNvbnMAdwBlAGIAZgBsAG8AdwAtAGkAYwBvAG4AcwBSAGUAZwB1AGwAYQByAHcAZQBiAGYAbABvAHcALQBpAGMAbwBuAHMARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format('truetype'),url(data:application/font-woff;charset=utf-8;base64,d09GRk9UVE8AAAVcAAoAAAAABRQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAAA9AAAAZMAAAGTuzUomU9TLzIAAAKIAAAAYAAAAGAOkgMtY21hcAAAAugAAABMAAAATBpVzFpnYXNwAAADNAAAAAgAAAAIAAAAEGhlYWQAAAM8AAAANgAAADYCkFKvaGhlYQAAA3QAAAAkAAAAJAdDA8lobXR4AAADmAAAACAAAAAgEgADXW1heHAAAAO4AAAABgAAAAYACFAAbmFtZQAAA8AAAAF7AAABe2TuiIBwb3N0AAAFPAAAACAAAAAgAAMAAAEABAQAAQEBDndlYmZsb3ctaWNvbnMAAQIAAQA6+BwC+BsD+BgEHgoACXf/i4seCgAJd/+LiwwHi0v6lPpUBR0AAACaDx0AAACfER0AAAAJHQAAAYoSAAkBAQ4bHR8iJywxNndlYmZsb3ctaWNvbnN3ZWJmbG93LWljb25zdTB1MXUyMHVFNjAwdUU2MDF1RTYwMnVFNjAzAAACAYkABgAIAQEEBwoNJDvH4P6UDv6UDv6UDvyUDvm0+FQV/FT4VEtL+BT8FPwU/BTLSwUO93T4VBX4VPhUy0v8FPwU+BT8FEtLBQ75tPlUFfzUiwV5i319i3kIi2sFi3mZfZ2LCPjUiwWdi5mZi50Ii6sFi519mXmLCIv7VBX81IsFeYt9fYt5CItrBYt5mX2diwj41IsFnYuZmYudCIurBYudfZl5iwiL+1QV/NSLBXmLfX2LeQiLawWLeZl9nYsI+NSLBZ2LmZmLnQiLqwWLnX2ZeYsIDvm4+SkV+6n7qvuq96ovLvgG/Bj4BvgYBQ76lBT6lBWLDAoAAAMEAAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA5gMDwP/A/8ADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAgAAAAMAAAAUAAMAAQAAABQABAA4AAAACgAIAAIAAgABACDmA//9//8AAAAAACDmAP/9//8AAf/jGgQAAwABAAAAAAAAAAAAAAABAAH//wAPAAEAAAABAAC1pQTjXw889QALBAAAAAAAz/iHGQAAAADP+IcZAAAAAAOBA4AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAA4EAAQAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAACAAAABAABIAQAAOAEAADABAAAnQAAUAAACAAAAAAADgCuAAEAAAAAAAEAGgAAAAEAAAAAAAIADgBxAAEAAAAAAAMAGgAwAAEAAAAAAAQAGgB/AAEAAAAAAAUAFgAaAAEAAAAAAAYADQBKAAEAAAAAAAoANACZAAMAAQQJAAEAGgAAAAMAAQQJAAIADgBxAAMAAQQJAAMAGgAwAAMAAQQJAAQAGgB/AAMAAQQJAAUAFgAaAAMAAQQJAAYAGgBXAAMAAQQJAAoANACZAHcAZQBiAGYAbABvAHcALQBpAGMAbwBuAHMAVgBlAHIAcwBpAG8AbgAgADEALgAwAHcAZQBiAGYAbABvAHcALQBpAGMAbwBuAHN3ZWJmbG93LWljb25zAHcAZQBiAGYAbABvAHcALQBpAGMAbwBuAHMAUgBlAGcAdQBsAGEAcgB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');font-weight:normal;font-style:normal}[class^="w-icon-"],[class*=" w-icon-"]{font-family:'webflow-icons';speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-icon-slider-right:before{content:"\e600"}.w-icon-slider-left:before{content:"\e601"}.w-icon-nav-menu:before{content:"\e602"}.w-icon-arrow-down:before,.w-icon-dropdown-toggle:before{content:"\e603"}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{height:100%}body{margin:0;min-height:100%;background-color:#fff;font-family:Arial,sans-serif;font-size:14px;line-height:20px;color:#333}img{max-width:100%;vertical-align:middle;display:inline-block}html.w-mod-touch *{background-attachment:scroll !important}.w-block{display:block}.w-inline-block{max-width:100%;display:inline-block}.w-clearfix:before,.w-clearfix:after{content:" ";display:table}.w-clearfix:after{clear:both}.w-preserve-3d{transform-style:preserve-3d}.w-hidden{display:none}.w-button{display:inline-block;padding:9px 15px;background-color:#3898EC;color:white;border:0;line-height:inherit;text-decoration:none;cursor:pointer;border-radius:0}input.w-button{-webkit-appearance:button}html[data-w-dynpage] [data-w-cloak]{color:transparent !important}h1,h2,h3,h4,h5,h6{font-weight:bold;margin-bottom:10px}h1{font-size:38px;line-height:44px;margin-top:20px}h2{font-size:32px;line-height:36px;margin-top:20px}h3{font-size:24px;line-height:30px;margin-top:20px}h4{font-size:18px;line-height:24px;margin-top:10px}h5{font-size:14px;line-height:20px;margin-top:10px}h6{font-size:12px;line-height:18px;margin-top:10px}p{margin-top:0;margin-bottom:10px}a:focus{outline:0}blockquote{margin:0 0 10px 0;padding:10px 20px;border-left:5px solid #E2E2E2;font-size:18px;line-height:22px}figure{margin:0;margin-bottom:10px}figcaption{margin-top:5px;text-align:center}ul,ol{margin-top:0;margin-bottom:10px;padding-left:40px}.w-list-unstyled{padding-left:0;list-style:none}.w-embed:before,.w-embed:after{content:" ";display:table}.w-embed:after{clear:both}.w-video{width:100%;position:relative;padding:0}.w-video iframe,.w-video object,.w-video embed{position:absolute;top:0;left:0;width:100%;height:100%}fieldset{padding:0;margin:0;border:0}button,html input[type="button"],input[type="reset"]{border:0;cursor:pointer;-webkit-appearance:button}.w-form{margin:0 0 15px}.w-form-done{display:none;padding:20px;text-align:center;background-color:#dddddd}.w-form-fail{display:none;margin-top:10px;padding:10px;background-color:#ffdede}label{display:block;margin-bottom:5px;font-weight:bold}.w-input,.w-select{display:block;width:100%;height:38px;padding:8px 12px;margin-bottom:10px;font-size:14px;line-height:1.42857143;color:#333333;vertical-align:middle;background-color:#ffffff;border:1px solid #cccccc}.w-input:-moz-placeholder,.w-select:-moz-placeholder{color:#999}.w-input::-moz-placeholder,.w-select::-moz-placeholder{color:#999;opacity:1}.w-input:-ms-input-placeholder,.w-select:-ms-input-placeholder{color:#999}.w-input::-webkit-input-placeholder,.w-select::-webkit-input-placeholder{color:#999}.w-input:focus,.w-select:focus{border-color:#3898EC;outline:0}.w-input[disabled],.w-select[disabled],.w-input[readonly],.w-select[readonly],fieldset[disabled] .w-input,fieldset[disabled] .w-select{cursor:not-allowed;background-color:#eeeeee}textarea.w-input,textarea.w-select{height:auto}.w-select{background-image:-webkit-linear-gradient(white 0, #f3f3f3 100%);background-image:linear-gradient(white 0, #f3f3f3 100%)}.w-select[multiple]{height:auto}.w-form-label{display:inline-block;cursor:pointer;font-weight:normal;margin-bottom:0}.w-checkbox,.w-radio{display:block;margin-bottom:5px;padding-left:20px}.w-checkbox:before,.w-radio:before,.w-checkbox:after,.w-radio:after{content:" ";display:table}.w-checkbox:after,.w-radio:after{clear:both}.w-checkbox-input,.w-radio-input{margin:4px 0 0;margin-top:1px \9;line-height:normal;float:left;margin-left:-20px}.w-radio-input{margin-top:3px}.w-container{margin-left:auto;margin-right:auto;max-width:940px}.w-container:before,.w-container:after{content:" ";display:table}.w-container:after{clear:both}.w-container .w-row{margin-left:-10px;margin-right:-10px}.w-row:before,.w-row:after{content:" ";display:table}.w-row:after{clear:both}.w-row .w-row{margin-left:0;margin-right:0}.w-col{position:relative;float:left;width:100%;min-height:1px;padding-left:10px;padding-right:10px}.w-col .w-col{padding-left:0;padding-right:0}.w-col-1{width:8.33333333%}.w-col-2{width:16.66666667%}.w-col-3{width:25%}.w-col-4{width:33.33333333%}.w-col-5{width:41.66666667%}.w-col-6{width:50%}.w-col-7{width:58.33333333%}.w-col-8{width:66.66666667%}.w-col-9{width:75%}.w-col-10{width:83.33333333%}.w-col-11{width:91.66666667%}.w-col-12{width:100%}.w-hidden-main{display:none !important}@media screen and (max-width:991px){.w-container{max-width:728px}.w-hidden-main{display:inherit !important}.w-hidden-medium{display:none !important}.w-col-medium-1{width:8.33333333%}.w-col-medium-2{width:16.66666667%}.w-col-medium-3{width:25%}.w-col-medium-4{width:33.33333333%}.w-col-medium-5{width:41.66666667%}.w-col-medium-6{width:50%}.w-col-medium-7{width:58.33333333%}.w-col-medium-8{width:66.66666667%}.w-col-medium-9{width:75%}.w-col-medium-10{width:83.33333333%}.w-col-medium-11{width:91.66666667%}.w-col-medium-12{width:100%}.w-col-stack{width:100%;left:auto;right:auto}}@media screen and (max-width:767px){.w-hidden-main{display:inherit !important}.w-hidden-medium{display:inherit !important}.w-hidden-small{display:none !important}.w-row,.w-container .w-row{margin-left:0;margin-right:0}.w-col{width:100%;left:auto;right:auto}.w-col-small-1{width:8.33333333%}.w-col-small-2{width:16.66666667%}.w-col-small-3{width:25%}.w-col-small-4{width:33.33333333%}.w-col-small-5{width:41.66666667%}.w-col-small-6{width:50%}.w-col-small-7{width:58.33333333%}.w-col-small-8{width:66.66666667%}.w-col-small-9{width:75%}.w-col-small-10{width:83.33333333%}.w-col-small-11{width:91.66666667%}.w-col-small-12{width:100%}}@media screen and (max-width:479px){.w-container{max-width:none}.w-hidden-main{display:inherit !important}.w-hidden-medium{display:inherit !important}.w-hidden-small{display:inherit !important}.w-hidden-tiny{display:none !important}.w-col{width:100%}.w-col-tiny-1{width:8.33333333%}.w-col-tiny-2{width:16.66666667%}.w-col-tiny-3{width:25%}.w-col-tiny-4{width:33.33333333%}.w-col-tiny-5{width:41.66666667%}.w-col-tiny-6{width:50%}.w-col-tiny-7{width:58.33333333%}.w-col-tiny-8{width:66.66666667%}.w-col-tiny-9{width:75%}.w-col-tiny-10{width:83.33333333%}.w-col-tiny-11{width:91.66666667%}.w-col-tiny-12{width:100%}}.w-widget{position:relative}.w-widget-map{width:100%;height:400px}.w-widget-map label{width:auto;display:inline}.w-widget-map img{max-width:inherit}.w-widget-map .gm-style-iw{width:90% !important;height:auto !important;top:7px !important;left:6% !important;display:inline;text-align:center;overflow:hidden}.w-widget-map .gm-style-iw+div{display:none}.w-widget-twitter{overflow:hidden}.w-widget-twitter-count-shim{display:inline-block;vertical-align:top;position:relative;width:28px;height:20px;text-align:center;background:white;border:#758696 solid 1px;border-radius:3px}.w-widget-twitter-count-shim *{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.w-widget-twitter-count-shim .w-widget-twitter-count-inner{position:relative;font-size:15px;line-height:12px;text-align:center;color:#999;font-family:serif}.w-widget-twitter-count-shim .w-widget-twitter-count-clear{position:relative;display:block}.w-widget-twitter-count-shim.w--large{width:36px;height:28px;margin-left:7px}.w-widget-twitter-count-shim.w--large .w-widget-twitter-count-inner{font-size:18px;line-height:18px}.w-widget-twitter-count-shim:not(.w--vertical){margin-left:5px;margin-right:8px}.w-widget-twitter-count-shim:not(.w--vertical).w--large{margin-left:6px}.w-widget-twitter-count-shim:not(.w--vertical):before,.w-widget-twitter-count-shim:not(.w--vertical):after{top:50%;left:0;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}.w-widget-twitter-count-shim:not(.w--vertical):before{border-color:rgba(117,134,150,0);border-right-color:#5d6c7b;border-width:4px;margin-left:-9px;margin-top:-4px}.w-widget-twitter-count-shim:not(.w--vertical).w--large:before{border-width:5px;margin-left:-10px;margin-top:-5px}.w-widget-twitter-count-shim:not(.w--vertical):after{border-color:rgba(255,255,255,0);border-right-color:white;border-width:4px;margin-left:-8px;margin-top:-4px}.w-widget-twitter-count-shim:not(.w--vertical).w--large:after{border-width:5px;margin-left:-9px;margin-top:-5px}.w-widget-twitter-count-shim.w--vertical{width:61px;height:33px;margin-bottom:8px}.w-widget-twitter-count-shim.w--vertical:before,.w-widget-twitter-count-shim.w--vertical:after{top:100%;left:50%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none}.w-widget-twitter-count-shim.w--vertical:before{border-color:rgba(117,134,150,0);border-top-color:#5d6c7b;border-width:5px;margin-left:-5px}.w-widget-twitter-count-shim.w--vertical:after{border-color:rgba(255,255,255,0);border-top-color:white;border-width:4px;margin-left:-4px}.w-widget-twitter-count-shim.w--vertical .w-widget-twitter-count-inner{font-size:18px;line-height:22px}.w-widget-twitter-count-shim.w--vertical.w--large{width:76px}.w-widget-gplus{overflow:hidden}.w-background-video{position:relative;overflow:hidden;height:500px;color:white}.w-background-video>video{background-size:cover;background-position:50% 50%;position:absolute;right:-100%;bottom:-100%;top:-100%;left:-100%;margin:auto;min-width:100%;min-height:100%;z-index:-100}.w-slider{position:relative;height:300px;text-align:center;background:#dddddd;clear:both;-webkit-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:rgba(0,0,0,0)}.w-slider-mask{position:relative;display:block;overflow:hidden;z-index:1;left:0;right:0;height:100%;white-space:nowrap}.w-slide{position:relative;display:inline-block;vertical-align:top;width:100%;height:100%;white-space:normal;text-align:left}.w-slider-nav{position:absolute;z-index:2;top:auto;right:0;bottom:0;left:0;margin:auto;padding-top:10px;height:40px;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:rgba(0,0,0,0)}.w-slider-nav.w-round>div{border-radius:100%}.w-slider-nav.w-num>div{width:auto;height:auto;padding:.2em .5em;font-size:inherit;line-height:inherit}.w-slider-nav.w-shadow>div{box-shadow:0 0 3px rgba(51,51,51,0.4)}.w-slider-nav-invert{color:#fff}.w-slider-nav-invert>div{background-color:rgba(34,34,34,0.4)}.w-slider-nav-invert>div.w-active{background-color:#222}.w-slider-dot{position:relative;display:inline-block;width:1em;height:1em;background-color:rgba(255,255,255,0.4);cursor:pointer;margin:0 3px .5em;transition:background-color 100ms,color 100ms}.w-slider-dot.w-active{background-color:#fff}.w-slider-arrow-left,.w-slider-arrow-right{position:absolute;width:80px;top:0;right:0;bottom:0;left:0;margin:auto;cursor:pointer;overflow:hidden;color:white;font-size:40px;-webkit-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.w-slider-arrow-left [class^="w-icon-"],.w-slider-arrow-right [class^="w-icon-"],.w-slider-arrow-left [class*=" w-icon-"],.w-slider-arrow-right [class*=" w-icon-"]{position:absolute}.w-slider-arrow-left{z-index:3;right:auto}.w-slider-arrow-right{z-index:4;left:auto}.w-icon-slider-left,.w-icon-slider-right{top:0;right:0;bottom:0;left:0;margin:auto;width:1em;height:1em}.w-dropdown{display:inline-block;position:relative;text-align:left;margin-left:auto;margin-right:auto;z-index:900}.w-dropdown-btn,.w-dropdown-toggle,.w-dropdown-link{position:relative;vertical-align:top;text-decoration:none;color:#222222;padding:20px;text-align:left;margin-left:auto;margin-right:auto;white-space:nowrap}.w-dropdown-toggle{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;cursor:pointer;padding-right:40px}.w-dropdown-toggle:focus{outline:0}.w-icon-dropdown-toggle{position:absolute;top:0;right:0;bottom:0;margin:auto;margin-right:20px;width:1em;height:1em}.w-dropdown-list{position:absolute;background:#dddddd;display:none;min-width:100%}.w-dropdown-list.w--open{display:block}.w-dropdown-link{padding:10px 20px;display:block;color:#222222}.w-dropdown-link.w--current{color:#0082f3}.w-nav[data-collapse="all"] .w-dropdown,.w-nav[data-collapse="all"] .w-dropdown-toggle{display:block}.w-nav[data-collapse="all"] .w-dropdown-list{position:static}@media screen and (max-width:991px){.w-nav[data-collapse="medium"] .w-dropdown,.w-nav[data-collapse="medium"] .w-dropdown-toggle{display:block}.w-nav[data-collapse="medium"] .w-dropdown-list{position:static}}@media screen and (max-width:767px){.w-nav[data-collapse="small"] .w-dropdown,.w-nav[data-collapse="small"] .w-dropdown-toggle{display:block}.w-nav[data-collapse="small"] .w-dropdown-list{position:static}.w-nav-brand{padding-left:10px}}@media screen and (max-width:479px){.w-nav[data-collapse="tiny"] .w-dropdown,.w-nav[data-collapse="tiny"] .w-dropdown-toggle{display:block}.w-nav[data-collapse="tiny"] .w-dropdown-list{position:static}}.w-lightbox-backdrop{color:#000;cursor:auto;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:normal;list-style:disc;text-align:start;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-break:normal;word-spacing:normal;word-wrap:normal;position:fixed;top:0;right:0;bottom:0;left:0;color:#fff;font-family:"Helvetica Neue",Helvetica,Ubuntu,"Segoe UI",Verdana,sans-serif;font-size:17px;line-height:1.2;font-weight:300;text-align:center;background:rgba(0,0,0,0.9);z-index:2000;outline:0;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-tap-highlight-color:transparent;-webkit-transform:translate(0, 0)}.w-lightbox-backdrop,.w-lightbox-container{height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.w-lightbox-content{position:relative;height:100vh;overflow:hidden}.w-lightbox-view{position:absolute;width:100vw;height:100vh;opacity:0}.w-lightbox-view:before{content:"";height:100vh}.w-lightbox-group,.w-lightbox-group .w-lightbox-view,.w-lightbox-group .w-lightbox-view:before{height:86vh}.w-lightbox-frame,.w-lightbox-view:before{display:inline-block;vertical-align:middle}.w-lightbox-figure{position:relative;margin:0}.w-lightbox-group .w-lightbox-figure{cursor:pointer}.w-lightbox-img{width:auto;height:auto;max-width:none}.w-lightbox-image{display:block;float:none;max-width:100vw;max-height:100vh}.w-lightbox-group .w-lightbox-image{max-height:86vh}.w-lightbox-caption{position:absolute;right:0;bottom:0;left:0;padding:.5em 1em;background:rgba(0,0,0,0.4);text-align:left;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.w-lightbox-embed{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%}.w-lightbox-control{position:absolute;top:0;width:4em;background-size:24px;background-repeat:no-repeat;background-position:center;cursor:pointer;-webkit-transition:all .3s;transition:all .3s}.w-lightbox-left{display:none;bottom:0;left:0;background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==")}.w-lightbox-right{display:none;right:0;bottom:0;background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+")}.w-lightbox-close{right:0;height:2.6em;background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=");background-size:18px}.w-lightbox-strip{padding:0 1vh;line-height:0;white-space:nowrap;overflow-x:auto;overflow-y:hidden}.w-lightbox-item{display:inline-block;width:10vh;padding:2vh 1vh;box-sizing:content-box;cursor:pointer;-webkit-transform:translate3d(0, 0, 0)}.w-lightbox-active{opacity:.3}.w-lightbox-thumbnail{position:relative;height:10vh;background:#222;overflow:hidden}.w-lightbox-thumbnail-image{position:absolute;top:0;left:0}.w-lightbox-thumbnail .w-lightbox-tall{top:50%;width:100%;-webkit-transform:translate(0, -50%);-ms-transform:translate(0, -50%);transform:translate(0, -50%)}.w-lightbox-thumbnail .w-lightbox-wide{left:50%;height:100%;-webkit-transform:translate(-50%, 0);-ms-transform:translate(-50%, 0);transform:translate(-50%, 0)}.w-lightbox-spinner{position:absolute;top:50%;left:50%;box-sizing:border-box;width:40px;height:40px;margin-top:-20px;margin-left:-20px;border:5px solid rgba(0,0,0,0.4);border-radius:50%;-webkit-animation:spin .8s infinite linear;animation:spin .8s infinite linear}.w-lightbox-spinner:after{content:"";position:absolute;top:-4px;right:-4px;bottom:-4px;left:-4px;border:3px solid transparent;border-bottom-color:#fff;border-radius:50%}.w-lightbox-hide{display:none}.w-lightbox-noscroll{overflow:hidden}@media (min-width:768px){.w-lightbox-content{height:96vh;margin-top:2vh}.w-lightbox-view,.w-lightbox-view:before{height:96vh}.w-lightbox-group,.w-lightbox-group .w-lightbox-view,.w-lightbox-group .w-lightbox-view:before{height:84vh}.w-lightbox-image{max-width:96vw;max-height:96vh}.w-lightbox-group .w-lightbox-image{max-width:82.3vw;max-height:84vh}.w-lightbox-left,.w-lightbox-right{display:block;opacity:.5}.w-lightbox-close{opacity:.8}.w-lightbox-control:hover{opacity:1}}.w-lightbox-inactive,.w-lightbox-inactive:hover{opacity:0}.w-richtext:before,.w-richtext:after{content:" ";display:table}.w-richtext:after{clear:both}.w-richtext ol,.w-richtext ul{overflow:hidden}.w-richtext .w-richtext-figure-selected[data-rt-type="video"] div:before{outline:2px solid #2895f7}.w-richtext .w-richtext-figure-selected[data-rt-type="image"] div{outline:2px solid #2895f7}.w-richtext figure[data-rt-type="video"]>div:before{content:'';position:absolute;display:none;left:0;top:0;right:0;bottom:0;z-index:1}.w-richtext figure{position:relative;max-width:60%}.w-richtext figure>div:before,.w-richtext figure img{cursor:default !important}.w-richtext figure img{width:100%}.w-richtext figure figcaption.w-richtext-figcaption-placeholder{opacity:.6}.w-richtext figure div{font-size:0;color:transparent}.w-richtext figure[data-rt-type="image"]{display:table}.w-richtext figure[data-rt-type="image"]>div{display:inline-block}.w-richtext figure[data-rt-type="image"]>figcaption{display:table-caption;caption-side:bottom}.w-richtext figure[data-rt-type="video"]{width:60%;height:0}.w-richtext figure[data-rt-type="video"] iframe{position:absolute;top:0;left:0;width:100%;height:100%}.w-richtext figure[data-rt-type="video"]>div{width:100%}.w-richtext figure.w-richtext-align-center{margin-right:auto;margin-left:auto;clear:both}.w-richtext figure.w-richtext-align-center[data-rt-type="image"]>div{max-width:100%}.w-richtext figure.w-richtext-align-normal{clear:both}.w-richtext figure.w-richtext-align-fullwidth{width:100%;text-align:center;clear:both;display:block;margin-right:auto;margin-left:auto}.w-richtext figure.w-richtext-align-fullwidth>div{display:inline-block;padding-bottom:inherit}.w-richtext figure.w-richtext-align-fullwidth>figcaption{display:block}.w-richtext figure.w-richtext-align-floatleft{float:left;margin-right:15px;clear:none}.w-richtext figure.w-richtext-align-floatright{float:right;margin-left:15px;clear:none}.w-nav{position:relative;background:#dddddd;z-index:1000}.w-nav:before,.w-nav:after{content:" ";display:table}.w-nav:after{clear:both}.w-nav-brand{position:relative;float:left;text-decoration:none;color:#333333}.w-nav-link{position:relative;display:inline-block;vertical-align:top;text-decoration:none;color:#222222;padding:20px;text-align:left;margin-left:auto;margin-right:auto}.w-nav-link.w--current{color:#0082f3}.w-nav-menu{position:relative;float:right}.w--nav-menu-open{display:block !important;position:absolute;top:100%;left:0;right:0;background:#C8C8C8;text-align:center;overflow:visible;min-width:200px}.w--nav-link-open{display:block;position:relative}.w-nav-overlay{position:absolute;overflow:hidden;display:none;top:100%;left:0;right:0;width:100%}.w-nav-overlay .w--nav-menu-open{top:0}.w-nav[data-animation="over-left"] .w-nav-overlay{width:auto}.w-nav[data-animation="over-left"] .w-nav-overlay,.w-nav[data-animation="over-left"] .w--nav-menu-open{right:auto;z-index:1;top:0}.w-nav[data-animation="over-right"] .w-nav-overlay{width:auto}.w-nav[data-animation="over-right"] .w-nav-overlay,.w-nav[data-animation="over-right"] .w--nav-menu-open{left:auto;z-index:1;top:0}.w-nav-button{position:relative;float:right;padding:18px;font-size:24px;display:none;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.w-nav-button.w--open{background-color:#C8C8C8;color:white}.w-nav[data-collapse="all"] .w-nav-menu{display:none}.w-nav[data-collapse="all"] .w-nav-button{display:block}@media screen and (max-width:991px){.w-nav[data-collapse="medium"] .w-nav-menu{display:none}.w-nav[data-collapse="medium"] .w-nav-button{display:block}}@media screen and (max-width:767px){.w-nav[data-collapse="small"] .w-nav-menu{display:none}.w-nav[data-collapse="small"] .w-nav-button{display:block}.w-nav-brand{padding-left:10px}}@media screen and (max-width:479px){.w-nav[data-collapse="tiny"] .w-nav-menu{display:none}.w-nav[data-collapse="tiny"] .w-nav-button{display:block}}.w-tabs{position:relative}.w-tabs:before,.w-tabs:after{content:" ";display:table}.w-tabs:after{clear:both}.w-tab-menu{position:relative}.w-tab-link{position:relative;display:inline-block;vertical-align:top;text-decoration:none;padding:9px 30px;text-align:left;cursor:pointer;color:#222222;background-color:#dddddd}.w-tab-link.w--current{background-color:#C8C8C8}.w-tab-content{position:relative;display:block;overflow:hidden}.w-tab-pane{position:relative;display:none}.w--tab-active{display:block}@media screen and (max-width:479px){.w-tab-link{display:block}}.w-ix-emptyfix:after{content:""}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.w-dyn-empty{padding:10px;background-color:#dddddd}.w-condition-invisible{display:none !important}

	/* ==========================================================================
	Start of custom Webflow CSS
	========================================================================== */
	body {
		font-family: Roboto, sans-serif;
		color: #fff;
		font-size: 14px;
		line-height: 20px;
	}

	h1 {
		margin-top: 20px;
		margin-bottom: 10px;
		font-size: 38px;
		line-height: 44px;
		font-weight: 500;
	}

	h2 {
		margin-top: 20px;
		margin-bottom: 10px;
		font-size: 32px;
		line-height: 36px;
		font-weight: 500;
	}

	h3 {
		margin-top: 0px;
		margin-bottom: 10px;
		font-size: 24px;
		line-height: 30px;
		font-weight: 500;
	}

	h4 {
		margin-top: 0px;
		margin-bottom: 5px;
		font-size: 18px;
		line-height: 24px;
		font-weight: 500;
		letter-spacing: 1px;
	}

	h6 {
		margin-top: 10px;
		margin-bottom: 10px;
		font-size: 12px;
		line-height: 18px;
		font-weight: 700;
		text-transform: uppercase;
	}

	p {
		margin-bottom: 10px;
		line-height: 24px;
		font-weight: 300;
	}

	.nav-menu {
		text-align: center;
	}

	.nav-link {
		padding: 26px 13px;
		color: hsla(0, 0%, 100%, .62);
		font-size: 13px;
		line-height: 18px;
		letter-spacing: 1px;
		text-transform: uppercase;
	}

	.nav-link:hover {
		color: #fff;
	}

	.nav-link.w--current {
		color: #fff;
		text-decoration: none;
	}

	.nav-link.logo {
		padding-top: 23px;
		padding-bottom: 23px;
		font-family: 'Roboto Slab', sans-serif;
		font-size: 17px;
		font-weight: 400;
	}

	.nav-bar {
		background-color: transparent;
	}

	.hero {
		height: 100vh;
		background-image: -webkit-radial-gradient(circle farthest-corner at 50% 100%, rgba(0, 0, 0, .46) 1%, rgba(0, 0, 0, .82) 91%), url("/bg/home-hero.jpg");
		background-image: radial-gradient(circle farthest-corner at 50% 100%, rgba(0, 0, 0, .46) 1%, rgba(0, 0, 0, .82) 91%), url("/bg/home-hero.jpg");
		background-position: 0px 0px, 50% 50%;
		background-size: auto, cover;
		background-repeat: repeat, no-repeat;
	}

	.hero-content {
		position: absolute;
		top: 50%;
		width: 100%;
		-webkit-transform: translate(0%, -50%);
		-ms-transform: translate(0%, -50%);
		transform: translate(0%, -50%);
		color: #fff;
		text-align: center;
	}

	.hero-heading {
		margin-top: 0px;
		color: #fff;
		font-size: 80px;
		line-height: 85px;
		font-weight: 400;
		text-transform: uppercase;
	}

	.hero-subtitle {
		color: hsla(0, 0%, 100%, .7);
		font-size: 16px;
		line-height: 22px;
		letter-spacing: 1px;
		text-transform: uppercase;
	}

	.subpage-background {
		background-image: -webkit-linear-gradient(270deg, rgba(0, 0, 0, .6) 2%, rgba(0, 0, 0, .6) 98%), url("http://uploads.webflow.com/560eb94ab52962bd77dfcf14/5615157771f48cd56ccb117b_photo-1442975433132-cb9580b88538.jpg");
		background-image: linear-gradient(180deg, rgba(0, 0, 0, .6) 2%, rgba(0, 0, 0, .6) 98%), url("http://uploads.webflow.com/560eb94ab52962bd77dfcf14/5615157771f48cd56ccb117b_photo-1442975433132-cb9580b88538.jpg");
		background-position: 0px 0px, 50% 50%;
		background-size: auto, cover;
		background-repeat: repeat, no-repeat;
		background-attachment: scroll, fixed;
		font-weight: 300;
	}

	.section-title {
		padding: 85px 2.5%;
		color: #fff;
		text-align: center;
	}

	.page-title {
		margin-top: 0px;
		margin-bottom: 86px;
		font-size: 45px;
		line-height: 51px;
		font-weight: 300;
		text-align: center;
		text-transform: uppercase;
	}

	.section {
		padding-right: 2.5%;
		padding-bottom: 50px;
		padding-left: 2.5%;
	}

	.bio-photo {
		margin-bottom: 45px;
	}

	.content {
		color: #fff;
	}

	.footer {
		padding-top: 43px;
		padding-bottom: 43px;
		background-color: transparent;
		color: #222;
		text-align: center;
	}

	.footer.homepage {
		position: absolute;
		left: 0px;
		right: 0px;
		bottom: 0px;
	}

	.footer-link {
		margin-right: 6px;
		margin-left: 6px;
		opacity: 0.82;
		-webkit-transition: opacity 200ms ease;
		transition: opacity 200ms ease;
		color: #222;
		text-decoration: none;
	}

	.footer-link:hover {
		opacity: 0.76;
		color: #fff;
	}

	.social-link {
		width: 25px;
		margin-right: 5px;
		margin-left: 5px;
		opacity: 0.5;
		-webkit-transition: opacity 200ms ease;
		transition: opacity 200ms ease;
	}

	.social-link:hover {
		opacity: 1;
	}

	.social-wrapper {
		margin-top: 5px;
	}

	.play-music {
		position: relative;
		width: 100%;
	}

	.circle {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background-color: rgba(0, 0, 0, .85);
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}

	.play-arrow {
		position: absolute;
		left: 50%;
		top: 50%;
		z-index: 2;
		width: auto;
		height: auto;
		margin-left: 7px;
		border-top: 25px solid transparent;
		border-bottom: 25px solid transparent;
		border-left: 45px solid #fff;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}

	.track-listing-row {
		margin-bottom: 45px;
		padding-top: 20px;
		border-top: 1px solid hsla(0, 0%, 60%, .35);
	}

	.featured-track {
		margin-bottom: 75px;
		padding-bottom: 38px;
	}

	.track-listing-time {
		text-align: right;
	}

	.track-link {
		color: #fff;
		text-decoration: none;
	}

	.small-grey-text {
		display: block;
		margin-bottom: 5px;
		color: #999;
		font-size: 12px;
		line-height: 18px;
		letter-spacing: 1px;
		text-transform: uppercase;
	}

	.small-grey-text.album {
		color: #efe866;
		font-size: 15px;
	}

	.tour-title {
		margin-bottom: 100px;
		text-align: center;
	}

	.rsvp-button {
		padding: 5px 15px;
		border: 1px solid #f7e769;
		background-color: transparent;
		-webkit-transition: color 200ms ease, border-color 200ms ease;
		transition: color 200ms ease, border-color 200ms ease;
		color: #f7e769;
		font-size: 12px;
		line-height: 18px;
		letter-spacing: 1px;
	}

	.rsvp-button:hover {
		border-color: #fff;
		color: #fff;
	}

	.tour-date-row {
		padding-top: 10px;
		padding-bottom: 10px;
	}

	.photo-block {
		height: 250px;
		margin: 20px 10px;
	}

	.contact-h3 {
		margin-top: 0px;
		margin-bottom: 20px;
		font-size: 27px;
		line-height: 28px;
		font-weight: 300;
	}

	.contact-row {
		padding-top: 58px;
		padding-bottom: 58px;
		border-top: 1px solid hsla(0, 0%, 60%, .35);
		text-align: center;
	}

	.contact-link {
		display: inline-block;
		margin-top: 5px;
		color: #999;
		text-decoration: none;
	}

	.contact-link:hover {
		color: #fff;
	}

	.form {
		display: block;
		max-width: 550px;
		margin-top: 54px;
		margin-right: auto;
		margin-left: auto;
		text-align: left;
	}

	.submit-button {
		display: block;
		margin-top: 20px;
		margin-right: auto;
		margin-left: auto;
		padding-right: 30px;
		padding-left: 30px;
		border: 2px solid #fff;
		background-color: transparent;
		-webkit-transition: background-color 200ms ease, color 200ms ease;
		transition: background-color 200ms ease, color 200ms ease;
		font-size: 12px;
		line-height: 18px;
		letter-spacing: 1px;
		text-transform: uppercase;
	}

	.submit-button:hover {
		background-color: #fff;
		color: #333;
	}

	.submit-button.sign-up {
		position: relative;
		top: -5px;
		display: inline-block;
		margin-top: 0px;
	}

	.input-inline {
		display: inline-block;
		max-width: 414px;
		margin-right: 20px;
	}

	.album-art {
		display: block;
		margin-right: auto;
		margin-left: auto;
	}

	.logo {
		margin-top: 0px;
		margin-bottom: 0px;
		font-family: 'Roboto Slab', sans-serif;
		color: #fdfdfd;
		font-size: 19px;
		line-height: 23px;
		font-weight: 400;
		letter-spacing: 1px;
		text-transform: uppercase;
	}

	.brand-link {
		z-index: 1;
		padding-top: 23px;
		padding-bottom: 23px;
	}

	.hero-container {
		margin-top: 29vh;
		text-align: center;
	}

	.button {
		padding: 11px 19px;
		border: 1px solid rgba(248, 199, 41, .7);
		background-color: transparent;
		color: rgba(248, 199, 41, .7);
		font-size: 14px;
	}

	.button.big {
		margin-right: 9px;
		margin-left: 9px;
		padding: 11px 26px;
		border-color: #f7c72a;
		-webkit-transition: border 200ms ease, color 200ms ease;
		transition: border 200ms ease, color 200ms ease;
		color: #f7c72a;
		font-size: 16px;
	}

	.button.big:hover {
		border-color: #fff;
		color: #fff;
	}

	.button.contact {
		padding-right: 29px;
		padding-left: 29px;
		background-color: rgba(248, 199, 41, .7);
	}

	.content-wrapper {
		margin-top: 78px;
	}

	.footer-text {
		margin-top: 13px;
		color: hsla(0, 0%, 100%, .43);
	}

	.song-list-item {
		padding-top: 19px;
		padding-bottom: 19px;
		border-top: 1px solid hsla(0, 0%, 100%, .28);
		text-align: center;
	}

	.album-heading {
		margin-top: 0px;
		margin-bottom: 40px;
		font-size: 23px;
		line-height: 27px;
		font-weight: 400;
		text-align: center;
		text-transform: uppercase;
	}

	.album-columns {
		text-align: center;
	}

	.song-title {
		color: #f0e567;
	}

	.venue {
		font-weight: 500;
	}

	.venue-list-item {
		padding-top: 5px;
		padding-bottom: 5px;
		border-top: 1px solid hsla(0, 0%, 100%, .3);
	}

	.photo-list {
		display: block;
		width: 80%;
		margin-right: auto;
		margin-bottom: 69px;
		margin-left: auto;
		text-align: center;
	}

	.photo {
		margin-bottom: 18px;
		border-radius: 5px;
		box-shadow: 0 1px 50px 0 rgba(0, 0, 0, .51);
	}

	.field {
		font-weight: 300;
	}

	.input {
		margin-bottom: 20px;
		border-style: none;
		background-color: hsla(0, 0%, 40%, .64);
		color: #fff;
	}

	.input:focus {
		box-shadow: 0 0 0 1px hsla(0, 0%, 100%, .77);
	}

	.input.textarea {
		min-height: 110px;
	}

	.success {
		padding-top: 29px;
		background-color: rgba(30, 187, 0, .35);
	}

	@media (max-width: 991px) {
		.nav-menu {
			padding-top: 18px;
			padding-bottom: 18px;
			border-top: 1px solid #000;
			background-color: rgba(0, 0, 0, .85);
		}
		.nav-link {
			padding-top: 16px;
			padding-bottom: 16px;
			font-size: 21px;
			line-height: 27px;
			text-align: center;
		}
		.menu-button {
			padding: 20px 0px 20px 20px;
			color: hsla(0, 0%, 100%, .62);
			font-size: 25px;
			line-height: 22px;
		}
		.menu-button:hover {
			color: #fff;
		}
		.menu-button.w--open {
			background-color: transparent;
			color: #fff;
		}
		.menu-text {
			margin-right: 3px;
			padding: 2px;
			float: left;
			font-size: 12px;
			line-height: 19px;
			letter-spacing: 1px;
			text-transform: uppercase;
		}
		.menu-text:hover {
			color: #fff;
		}
		.menu-icon {
			float: left;
		}
	}

	@media (max-width: 767px) {
		.hero-heading {
			font-size: 61px;
		}
		.footer {
			padding-right: 14px;
			padding-left: 14px;
		}
		.rsvp-button {
			margin-top: 15px;
		}
		.tour-date-row {
			text-align: center;
		}
		.contact-link {
			margin-bottom: 30px;
		}
		.submit-button.sign-up {
			display: block;
			margin-right: auto;
			margin-left: auto;
		}
		.input-inline {
			max-width: 100%;
			margin-bottom: 20px;
		}
		.menu-button {
			margin-right: 7px;
		}
		.album-list {
			margin-bottom: 60px;
		}
		.venue {
			margin-top: 10px;
			margin-bottom: 10px;
			font-size: 15px;
		}
		.venue-list-item {
			padding-top: 16px;
			padding-bottom: 16px;
		}
	}

	@media (max-width: 479px) {
		.hero-heading {
			font-size: 39px;
			line-height: 52px;
		}
		.contact-row {
			padding-bottom: 16px;
		}
		.hero-container {
			padding-right: 13px;
			padding-left: 13px;
		}
		.button.big {
			width: 100%;
			margin-right: 0px;
			margin-bottom: 12px;
			margin-left: 0px;
		}
	}
`;
