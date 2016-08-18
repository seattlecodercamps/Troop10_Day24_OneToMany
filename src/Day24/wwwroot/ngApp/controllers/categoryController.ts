namespace Day24.Controllers {

    export class CategoryController {
        public categories;

        constructor(private categoryService:Day24.Services.CategoryService) {
            this.getCategories();
        }

        public getCategories() {
            this.categories = this.categoryService.getCategories();
        }
    }

}