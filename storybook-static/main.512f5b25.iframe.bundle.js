(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MaskedInput/MaskedInput.scss":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,"",""]),module.exports=exports},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./components/MaskedInput/MaskedInput.stories.tsx":"./src/components/MaskedInput/MaskedInput.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/components/MaskedInput/MaskedInput.scss":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MaskedInput/MaskedInput.scss");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/MaskedInput/MaskedInput.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"NumericMask",(function(){return NumericMask}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("../energy-comparator/laravel/node_modules/react/index.js"),react_default=__webpack_require__.n(react),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),classCallCheck=(__webpack_require__("./node_modules/core-js/modules/es.string.match.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js")),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),tokens={0:/\d/,9:/\d/,"#":/\d/,A:/[a-zA-Z0-9]/,S:/[a-zA-Z]/,U:/[a-zA-Z]/,L:/[a-zA-Z]/},MaskFormatter_MaskFormatter=function(){function MaskFormatter(mask){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(classCallCheck.a)(this,MaskFormatter),this.mask=null,this.leftOverString=null,this.options={},this.addedCharacters=0,this.mask=mask,this.options=options}return Object(createClass.a)(MaskFormatter,[{key:"maskify",value:function maskify(value){this.leftOverString=value;for(var formatted="",maskIndex=0;this.condition();){var maskChar=this.mask.charAt(maskIndex);if(!maskChar)break;var token=tokens[maskChar];if(token){if(!token||!token.test(this.leftOverString))break;var match=this.leftOverString.match(token),_value=match[0],index=match.index;formatted+=_value,this.leftOverString=this.leftOverString.slice(index+1)}else formatted+=maskChar,this.options.cursor&&maskChar!=value[maskIndex]&&this.options.cursor>=maskIndex&&this.addedCharacters++;maskIndex++}return formatted=this.removeTrailingLiterals(formatted),this.options.maskChar&&(formatted=this.fillWithMask(formatted)),{value:formatted,addedCharacters:this.addedCharacters}}},{key:"fillWithMask",value:function fillWithMask(value){for(var i=value.length;i<=this.mask.length;i++){var maskChar=this.mask.charAt(i);value+=tokens[maskChar]?this.options.maskChar:maskChar}return value}},{key:"condition",value:function condition(){return this.leftOverString.length>0}},{key:"removeTrailingLiterals",value:function removeTrailingLiterals(string){if(!string.length)return string;var stringLength=string.length-1,charAt=this.mask.charAt(stringLength);return tokens[charAt]?string:(this.addedCharacters--,this.removeTrailingLiterals(string.slice(0,-1)))}}]),MaskFormatter}(),util_maskify=function maskify(string,mask){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},mf=new MaskFormatter_MaskFormatter(mask,options),_mf$maskify=mf.maskify(string),value=_mf$maskify.value,addedCharacters=_mf$maskify.addedCharacters;return{formatted:value,valid:!0,addedCharacters:addedCharacters}},hooks_useCombinedRefs=(__webpack_require__("./src/components/MaskedInput/MaskedInput.scss"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),function useCombinedRefs(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];var targetRef=Object(react.useRef)();return Object(react.useEffect)((function(){refs.forEach((function(ref){ref&&("function"==typeof ref?ref(targetRef.current):ref.current=targetRef.current)}))}),[refs]),targetRef}),MaskedInput_MaskedInput=Object(react.forwardRef)((function(props,ref){var mask=props.mask,onChange=props.onChange,onBlur=props.onBlur,children=props.children,disabled=props.disabled,readOnly=props.readOnly,maskChar=props.maskChar,_useState=Object(react.useState)(props.value),_useState2=Object(slicedToArray.a)(_useState,2),value=_useState2[0],setValue=_useState2[1],_useState3=Object(react.useState)([props.value.length,props.value.length]),_useState4=Object(slicedToArray.a)(_useState3,2),selection=_useState4[0],setSelection=_useState4[1],localRef=Object(react.useRef)(null),inputRef=hooks_useCombinedRefs(localRef,ref);Object(react.useEffect)((function(){setValue(props.value)}),[props.value]),Object(react.useEffect)((function(){var formatted=util_maskify(value,mask,{maskChar:maskChar}).formatted;setValue(formatted),onChange(formatted)}),[]),Object(react.useEffect)((function(){var _inputRef$current;null===(_inputRef$current=inputRef.current)||void 0===_inputRef$current||_inputRef$current.setSelectionRange.apply(_inputRef$current,Object(toConsumableArray.a)(selection))}),[selection]);var onChangeHandler=function onChangeHandler(e){var target=e.target,selectionEnd=target.selectionEnd,selectionStart=target.selectionStart,value=e.target.value,_maskify2=util_maskify(value,mask,{cursor:target.selectionEnd,maskChar:maskChar}),formatted=_maskify2.formatted,addedCharacters=_maskify2.addedCharacters;setValue(formatted),onChange(formatted),setSelection([selectionStart+addedCharacters,selectionEnd+addedCharacters])},onBlurHandler=function onBlurHandler(e){var value=e.target.value;onBlur&&onBlur(value)};return children?react_default.a.cloneElement(children,{value:value,disabled:disabled,readOnly:readOnly,onChange:onChangeHandler,onBlur:onBlurHandler,ref:inputRef}):react_default.a.createElement("input",{value:value,onChange:onChangeHandler,onBlur:onBlurHandler,disabled:disabled,readOnly:readOnly,ref:inputRef})}));MaskedInput_MaskedInput.displayName="MaskedInput",MaskedInput_MaskedInput.defaultProps={value:"",mask:"",onChange:function onChange(){},disabled:!1};var components_MaskedInput_MaskedInput=MaskedInput_MaskedInput;try{MaskedInput_MaskedInput.displayName="MaskedInput",MaskedInput_MaskedInput.__docgenInfo={description:"",displayName:"MaskedInput",props:{value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},mask:{defaultValue:{value:""},description:"",name:"mask",required:!1,type:{name:"string"}},onChange:{defaultValue:{value:"() => void(0)"},description:"",name:"onChange",required:!1,type:{name:"(value: string) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(value: string) => void"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},maskChar:{defaultValue:null,description:"",name:"maskChar",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MaskedInput/MaskedInput.tsx#MaskedInput"]={docgenInfo:MaskedInput_MaskedInput.__docgenInfo,name:"MaskedInput",path:"src/components/MaskedInput/MaskedInput.tsx#MaskedInput"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Example2/Button",component:components_MaskedInput_MaskedInput,argTypes:{value:{defaultValue:"10",type:"string"},mask:{defaultValue:"99999",type:"string"},onChange:{action:"onChange"}}};var NumericMask=function Template(args){return react_default.a.createElement(components_MaskedInput_MaskedInput,args)}.bind({});NumericMask.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <MaskedInput {...args} />"}},NumericMask.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);