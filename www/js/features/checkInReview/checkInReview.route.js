angular
    .module('patientManagement.checkInReview')
    .config(checkInReviewConfig);

function checkInReviewConfig($stateProvider) {
    $stateProvider.state({
        name: 'checkInReview',
        url: '/checkInReview',
        templateUrl: 'js/features/checkInReview/checkInReview.html',
        controller: 'CheckInReviewCtrl',
        controllerAs: 'CheckInReviewVM'
    })
}