System.register(["moment","angular"],function($__export){function $__register__main__exports(exports){for(var exportName in exports)$__export(exportName,exports[exportName])}function $__wsr__interop(m){return m.__useDefault?m.default:m}var Moment,Angular;return{setters:[function(m){Moment=$__wsr__interop(m)},function(m){Angular=$__wsr__interop(m)}],execute:function(){!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=1)}([function(module,exports){module.exports=Moment},function(module,exports,__webpack_require__){"use strict";var datasource_1=__webpack_require__(2);exports.Datasource=datasource_1.AnnotationDatasource;var annotation_ctrl_1=__webpack_require__(3);exports.AnnotationsQueryCtrl=annotation_ctrl_1.AnnotationsQueryCtrl,$__register__main__exports(exports)},function(module,exports,__webpack_require__){"use strict";var moment=__webpack_require__(0),AnnotationDatasource=function(){function AnnotationDatasource(){}return AnnotationDatasource.prototype.annotationQuery=function(options){console.debug("annotationQuery() was called with options: %o",options);var annotation=options.annotation;return annotation.queries.map(function(query){var m=moment.isMoment(query.date)?query.date:moment(query.date,moment.ISO_8601);return{annotation:annotation,title:annotation.name,time:m.valueOf(),text:query.text}})},AnnotationDatasource}();exports.AnnotationDatasource=AnnotationDatasource},function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p])}return t},moment=__webpack_require__(0),angular=__webpack_require__(4),AnnotationsQueryCtrl=function(){function AnnotationsQueryCtrl(timeSrv,dashboardSrv){var _this=this;this.timeSrv=timeSrv,this.getMomentFunction=function(){return _this.isUtc?moment.utc:moment};var dashboard=dashboardSrv.getCurrent();this.isUtc=dashboard.isTimezoneUtc(),this.firstDayOfWeek=moment.localeData().firstDayOfWeek(),this.annotation.queries=this.annotation.queries||[],this.dateDisplays=[],this.openPickers=[],0===this.annotation.queries.length&&this.addDate(),this.annotation.queries.forEach(function(_,idx){return _this.dateChanged(idx)})}return AnnotationsQueryCtrl.prototype.addDate=function(){var time=angular.copy(this.timeSrv.timeRange());this.isUtc||time.from.local(),this.annotation.queries.push({date:time.from}),this.dateChanged(this.annotation.queries.length-1)},AnnotationsQueryCtrl.prototype.removeDate=function(index){var _this=this;this.annotation.queries=this.annotation.queries.filter(function(_,idx){return idx!==index}),this.annotation.queries.forEach(function(_,idx){return _this.dateChanged(idx)})},AnnotationsQueryCtrl.prototype.dateChanged=function(index){var query=this.annotation.queries[index],date=this.getMomentFunction()(query.date,moment.ISO_8601);this.annotation.queries[index]=__assign({},query,{date:date}),this.dateDisplays[index]=date.format()},AnnotationsQueryCtrl.prototype.displayChanged=function(index){var display=this.dateDisplays[index];this.annotation.queries[index].date=this.getMomentFunction()(display,moment.ISO_8601),this.dateChanged(index)},AnnotationsQueryCtrl.prototype.togglePicker=function(index){this.openPickers[index]=!this.openPickers[index]},AnnotationsQueryCtrl}();AnnotationsQueryCtrl.templateUrl="partials/annotations.editor.html",exports.AnnotationsQueryCtrl=AnnotationsQueryCtrl},function(module,exports){module.exports=Angular}])}}});