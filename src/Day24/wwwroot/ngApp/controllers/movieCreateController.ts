namespace Day24.Controllers {

    export class MovieCreateController {
        public movieToCreate;
        private categoryId;

        constructor(
            private movieService: Day24.Services.MovieService,
            private $stateParams: angular.ui.IStateParamsService,
            private $state: angular.ui.IStateService) {

            this.categoryId = this.$stateParams['categoryId'];
        }

        public saveMovie() {
            this.movieService.saveMovie(this.categoryId, this.movieToCreate).then(() => {
                this.$state.go('movies', { categoryId: this.categoryId });
            }).catch();
        }

    }

}