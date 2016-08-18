namespace Day24.Controllers {

    export class MovieController {
        public categoryWithMovies;
        public categoryId

        constructor(
            private movieService: Day24.Services.MovieService,
            private $stateParams: angular.ui.IStateParamsService) {

            this.categoryId = this.$stateParams['categoryId'];
            this.getMoviesByCategoryId();
        }

        public getMoviesByCategoryId() {
            this.categoryWithMovies = this.movieService.getMovieByCategoryId(this.categoryId);
        }
    }

}