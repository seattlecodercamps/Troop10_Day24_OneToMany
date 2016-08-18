namespace Day24.Controllers {

    export class CategoryCreateController {
        public categoryToCreate;

        constructor(
            private categoryService: Day24.Services.CategoryService,
            private $state:angular.ui.IStateService) {

        }

        public saveCategory() {
            this.categoryService.saveCategory(this.categoryToCreate)
                .then(() => {
                    this.$state.go('categories');
                })
                .catch(() => {

                })
        }

    }
}