angular
    .module('patientManagement.component.patientInfo')
    .directive('patientInfo', PatientInfoDirective);

function PatientInfoDirective() {
    // return back an object
    return {
        restrict: 'E',
        scope: {
            patientData: "="
        },
        templateUrl: 'js/features/components/patientInfo/patientInfo.html',
        controller: PatientInfoCtrl,
        controllerAs: 'PatientInfoVM',
        bindToController: true
    }
}

function PatientInfoCtrl () {
 var vm = this;
 vm.hello = "world";

 console.log("PatientInfoCtrl");

 vm.doThings = function () {
     console.log('THING');
 }
}