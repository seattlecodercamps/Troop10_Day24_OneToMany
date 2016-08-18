namespace Day24.Services {

    export class MovieService {

        private movieResource;

        constructor(private $resource:angular.resource.IResourceService) {
            this.movieResource = this.$resource('/api/movie/:id');
        }

        public getAllMovies() {
            return this.movieResource.query();
        }

        public getMovieByCategoryId(id) {
            return this.movieResource.get({ id: id });
        }

        public saveMovie(categoryId, movieToCreate) {
            
            return this.movieResource.save({ id: categoryId }, movieToCreate).$promise;
        }
    }

    angular.module('Day24').service('movieService', MovieService);
}