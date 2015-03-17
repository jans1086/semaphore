define([
	'app',
	'jquery',
	'services/jobs',
	'factories/job'
], function(app, $) {
	app.registerController('PlaybookJobsCtrl', ['$scope', 'jobs', function($scope, jobs) {
		$scope.jobs = jobs;

		jobs.get($scope.playbook, function () {
		});

		$scope.add = function () {
			$('#addJob').modal('show');
		}

		$scope.deleteJob = function (job) {
			job.delete($scope.playbook);

			jobs.get($scope.playbook, function () {
			});
		}

		$scope.runJob = function (job) {
			job.run($scope.playbook);
		}
	}]);

	app.registerController('AddJobCtrl', ['$scope', 'Job', 'jobs', function($scope, Job, jobs) {
		$scope.job = new Job();

		$scope.add = function () {
			$('#addJob').modal('hide');

			$scope.job.add($scope.playbook);

			jobs.get($scope.playbook, function () {
			});
		}
	}]);
});