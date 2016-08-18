namespace Day24.Services {

    export class CategoryService {
        private categoryResource;

        constructor(private $resource:angular.resource.IResourceService) {
            this.categoryResource = this.$resource('/api/category/:id');
        }

        public getCategories() {
            return this.categoryResource.query();
        }

        public saveCategory(categoryToSave) {
            return this.categoryResource.save(categoryToSave).$promise;
        }
    }

    angular.module('Day24').service('categoryService', CategoryService);

}