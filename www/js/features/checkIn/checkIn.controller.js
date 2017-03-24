angular
    .module('patientManagement.checkIn')
    .controller('CheckInCtrl', CheckInCtrl);

function CheckInCtrl(patients, $cordovaCamera, $state) {
    var vm = this;

    vm.patientInfo = {
        firstName: '',
        lastName: '',
        dob: ''
    }

    vm.continue = function () {
        var patient = new patients.Patient(
            vm.patientInfo.firstName,
            vm.patientInfo.lastName,
            vm.patientInfo.dob
        );

        patients.patients.push(patient);

        console.log(patients.patients);

        if (window.Camera) {
            var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 100,
                targetHeight: 100,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };

            $cordovaCamera.getPicture(options).then(function (imageData) {
                var image = document.getElementById('myImage');
                image.src = "data:image/jpeg;base64," + imageData;
            }, function (err) {
                // error
            });
        } else {
            console.log("checkIn.controller.js");

            $state.go('checkInReview');

        }
    }
}